import releases from '../data/release-notes.json';

const listStyle = {
  fontFamily: 'var(--code-font-family)',
  fontSize: '13px'
};

export default (props) => {
  const { page } = props;

  if (releases.length === 0) {
    return [
      <h1>{page.title}</h1>,
      <p>Unable to load Releases. Please see all releases on <a href="https://github.com/ionic-team/ionic/releases/" target="_blank">Github</a>.</p>
    ];
  }

  return (
    <article>
      <h1>{page.title}</h1>
      {/* <section class="markdown-content" innerHTML={page.body}/> */}
      {/* <hr/> */}
      <div style={listStyle}>
        { releases.map(release =>
          <div>
            <a href="https://github.com/ionic-team/ionic/releases/tag/{v4.3.0}" target="_blank">
              <h2>{release.name}</h2>
            </a>
            <div innerHTML={release.body}></div>
          </div>
        )}
      </div>
    </article>
  );
};
