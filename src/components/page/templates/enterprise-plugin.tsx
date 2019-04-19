export default (props) => {
  const { page } = props;
  const headings = [...page.headings];

  const pluginId = page.path.split('/')[3];
  const otherVersions = page.otherVersions || [];

  const installation = renderInstallation(pluginId);

  if (installation) {
    headings.unshift({
      text: 'Installation',
      href: '#installation'
    });
  }

  return (
    <article>
      <h1>{ page.title }</h1>
      <h4>v{page.version}</h4>
      <docs-table-of-contents links={headings.concat([{ 'href': '#previous-versions', text: 'Other Versions' }])} basepath={page.path}/>
      { installation }
      <section class="markdown-content" innerHTML={page.body}/>
      <section id="previous-versions">
      <h2>Other Versions</h2>
      <ul>
      <li><stencil-route-link url={`/docs/enterprise/${pluginId}`}>Latest</stencil-route-link></li>
      {otherVersions.filter(v => v !== page.minor).map(version => (
        <li><stencil-route-link url={`/docs/enterprise/${pluginId}/${version}/${pluginId}`}>{version}</stencil-route-link></li>
      ))}
    </ul>
      </section>
    </article>
  );
};

const renderInstallation = (pluginId: string) => {
  if (!pluginId) {
    return null;
  }

  return (
    <section>
      <h2 id="installation">
        <a href="#installation">Installation</a>
      </h2>
      <command-line>
        <command-prompt>{`ionic enterprise register --key=YOURPRODUCTKEY`}</command-prompt>
        <command-prompt>{`cordova plugin add @ionic-enterprise/${pluginId}`}</command-prompt>
      </command-line>
    </section>
  );
};
