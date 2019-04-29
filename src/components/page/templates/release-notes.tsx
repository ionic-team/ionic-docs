import releases from '../data/release-notes.json';

export default (props) => {
  const { page } = props;

  if (releases.length === 0) {
    return [
      <h1>{page.title}</h1>,
      <p>Unable to load Releases. Please see all releases on <a href="https://github.com/ionic-team/ionic/releases/" target="_blank">GitHub</a>.</p>
    ];
  }

  return (
    <article>
      <h1>{page.title}</h1>
      <section class="markdown-content" innerHTML={page.body}/>
      <div class="release-notes">
        { releases.map(release =>
          <section class="release-note">
          <div class="release-tag-wrapper">
            <h2 id={release.version}>
              <a href={`#${release.version}`} class={getTagClasses(release)}>
                {release.name}
              </a>
            </h2>
          </div>
          <div class="release-info">
            <div class="release-published">
              <h2>{release.published_at}</h2>
            </div>
            <div innerHTML={release.body}></div>
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

function getTagClasses(release) {
  return {
    'release-tag': true,
    'release-tag-patch': release.patch
  };
}
