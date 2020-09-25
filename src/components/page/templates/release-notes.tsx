import { h } from '@stencil/core';

import releases from '../data/release-notes.json';
import { toHypertext } from '../to-hypertext.js';

type HypertextData = (string | { [key: string]: string; } | null | HypertextData)[];

interface Release {
  body: HypertextData;
  element: string;
  name: string;
  published_at: string;
  symbol: string;
  tag_name: string;
  type: string;
  version: string;
}

export default (props: { [key: string]: any }) => {
  const { page } = props;

  if (releases.length === 0) {
    return [
      <h1>{page.title}</h1>,
      <p>Unable to load Releases. Please see all releases <a href="https://github.com/ionic-team/ionic/releases" target="_blank">on GitHub</a>.</p>
    ];
  }

  return (
    <article>
      <h1>{page.title}</h1>
      <p class="intro">
        A complete release history for Ionic Framework is available <a href="https://github.com/ionic-team/ionic/releases" target="_blank">on GitHub</a>.
        Documentation for recent releases can also be found below.
      </p>

      <p>
        See versioning for information about our <a href="/docs/reference/versioning">policy and commitment to stability</a>.
      </p>
      <section class="markdown-content">
        {toHypertext(h, page.body)}
      </section>
      <div class="release-notes">
        { releases.map((release: Release, index) =>
          <section class={getReleaseClasses(release)}>

            <div class="release-tag-wrapper">
              <h2 id={release.version}>
                <a href={`#${release.version}`} class="release-tag">
                  <span class="release-symbol">{release.symbol}</span>
                  <span class="release-version">{release.version}</span>
                </a>
              </h2>
            </div>

            <div class="release-info">
              <div class="release-header">
                <h2>
                  <span class="release-version">{release.version}</span>
                  {release.type !== 'patch' ? ' ' + release.element : null}
                </h2>
                <span class="release-badge">{release.type}</span>
                { index === 0
                  ? <span class="release-badge release-badge-latest">Latest Production Version</span>
                  : null
                }
              </div>
              <div class="release-published">
                <h3>{release.published_at}</h3>
              </div>
              {toHypertext(h, release.body)}
            </div>

          </section>
        )}
      </div>
      <blockquote>
        To see more releases, visit <a href="https://github.com/ionic-team/ionic/releases/" target="_blank">GitHub</a>.
      </blockquote>
    </article>
  );
};

const getReleaseClasses = (release: any) => {
  return {
    'release-note': true,
    [`release-note-${release.type}`]: true
  };
};
