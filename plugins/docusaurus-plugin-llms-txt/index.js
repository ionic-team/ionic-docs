const fs = require('fs');
const path = require('path');

const { buildSections, getReferencedDocIds, renderLlmsTxt } = require('./lib/llms-txt');
const { buildTwin, hasPlaygrounds, readUsageDirs } = require('./lib/markdown-twins');
const { toMarkdownPath, toOutputPaths } = require('./lib/paths');

const DOCS_PLUGIN_NAME = 'docusaurus-plugin-content-docs';
const DOCS_PLUGIN_ID = 'default';
const CURRENT_VERSION = 'current';

const INTRO =
  'Every page below links to its markdown source, and each one opens with the URL of the page it came from. ' +
  'These pages document the current version of Ionic Framework in English.';

/** Names the other versions that also have twins, so they are discoverable. */
const olderVersionsNote = (loadedVersions) => {
  const paths = loadedVersions
    .filter((version) => version.versionName !== CURRENT_VERSION)
    .map((version) => `${version.path.replace(/\/+$/, '')}/`);

  return paths.length > 0 ? ` Pages for earlier versions are at the same paths under ${paths.join(' and ')}.` : '';
};

const firstExisting = (candidates) => candidates.find((candidate) => fs.existsSync(candidate));
const withTrailingSlash = (baseUrl) => (baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`);

/**
 * Writes an llms.txt index (https://llmstxt.org) into the build output, plus a
 * markdown twin of every docs page for it to link to. Both land at the docs
 * root alongside sitemap.xml. See ./README.md.
 */
module.exports = function llmsTxtPlugin() {
  return {
    name: 'docusaurus-plugin-llms-txt',

    async postBuild(props) {
      const { outDir, siteDir, i18n, plugins, siteConfig, baseUrl } = props;

      /**
       * Each locale has its own outDir, so the Japanese build would write a
       * `build/ja/llms.txt` that nothing links to, with section labels still
       * taken from the English sidebar.
       */
      if (i18n.currentLocale !== i18n.defaultLocale) {
        return;
      }

      const docsPlugin = plugins.find(
        (plugin) => plugin.name === DOCS_PLUGIN_NAME && (plugin.options?.id ?? DOCS_PLUGIN_ID) === DOCS_PLUGIN_ID
      );

      if (!docsPlugin?.content?.loadedVersions) {
        console.warn('[llms-txt] docs plugin content was not available, skipping llms.txt.');
        return;
      }

      const { loadedVersions } = docsPlugin.content;
      const staticDir = path.join(siteDir, 'static');
      const warn = (message) => console.warn(`[llms-txt] ${message}`);

      /** A missing or renamed source costs that page its snippets, not the build. */
      const readSource = (doc) => {
        try {
          return fs.readFileSync(path.join(siteDir, doc.source.replace(/^@site\//, '')), 'utf8');
        } catch {
          warn(`could not read ${doc.source}, leaving its playground code out.`);
          return '';
        }
      };

      // Twins cover every version, not just the current one.
      const referencedByVersion = new Map(
        loadedVersions.map((loaded) => [loaded.versionName, getReferencedDocIds(loaded.sidebars)])
      );

      /**
       * Every page that gets a twin, so a link between two of them can be
       * rewritten to stay inside the markdown corpus.
       */
      const twinUrls = new Map();
      for (const version of loadedVersions) {
        for (const doc of version.docs) {
          if (!doc.draft && !doc.unlisted && referencedByVersion.get(version.versionName).has(doc.id)) {
            twinUrls.set(doc.permalink, `${withTrailingSlash(baseUrl)}${toMarkdownPath(doc.permalink, baseUrl)}`);
          }
        }
      }

      let twins = 0;
      for (const version of loadedVersions) {
        const referencedIds = referencedByVersion.get(version.versionName);

        for (const doc of version.docs) {
          // Matching what the index lists keeps scratch and redirected pages
          // from being published as markdown nobody can reach.
          if (doc.draft || doc.unlisted || !referencedIds.has(doc.id)) {
            continue;
          }

          const { htmlCandidates, markdownPath } = toOutputPaths(doc.permalink, { outDir, baseUrl });
          const htmlPath = firstExisting(htmlCandidates);
          if (!htmlPath) {
            warn(`no rendered HTML for ${doc.permalink}, skipping its markdown twin.`);
            continue;
          }

          const html = fs.readFileSync(htmlPath, 'utf8');
          const markdown = buildTwin({
            html,
            pageUrl: `${siteConfig.url.replace(/\/+$/, '')}${doc.permalink}`,
            usageDirs: hasPlaygrounds(html) ? readUsageDirs(readSource(doc)) : [],
            staticDir,
            twinUrls,
            onWarn: warn,
          });

          if (markdown) {
            fs.mkdirSync(path.dirname(markdownPath), { recursive: true });
            fs.writeFileSync(markdownPath, markdown);
            twins += 1;
          }
        }
      }

      const version = loadedVersions.find((loaded) => loaded.versionName === CURRENT_VERSION);
      if (!version) {
        warn(`no "${CURRENT_VERSION}" docs version found, skipping llms.txt.`);
        return;
      }

      const referencedIds = referencedByVersion.get(CURRENT_VERSION);
      const docsById = new Map(
        version.docs
          .filter((doc) => !doc.draft && !doc.unlisted && referencedIds.has(doc.id))
          .map((doc) => [doc.id, doc])
      );

      const { sections, optional } = buildSections({ sidebars: version.sidebars, docsById });

      fs.writeFileSync(
        path.join(outDir, 'llms.txt'),
        renderLlmsTxt({
          title: siteConfig.title,
          tagline: siteConfig.tagline,
          intro: `${INTRO}${olderVersionsNote(loadedVersions)}`,
          sections,
          optional,
          siteUrl: siteConfig.url,
          baseUrl,
        })
      );

      const linkCount = sections.reduce((total, section) => total + section.docs.length, 0) + optional.length;
      console.log(`[llms-txt] wrote ${twins} markdown twins and llms.txt with ${linkCount} links.`);
    },
  };
};
