export default (props) => {
  const { page } = props;
  const headings = [...page.headings];

  const pluginId = page.path.split('/')[3];
  const otherVersions = page.otherVersions || [];

  const installation = renderInstallation(pluginId);

  if (installation) {
    headings.unshift({
      text: 'インストール',
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
        <a href="#installation">インストール</a>
      </h2>
      <p>
        <a href="https://ionicframework.com/enterprise-edition">
        Ionic エンタープライズエディション</a>のプラグインを利用する場合は、
        通常のバージョンでスコープ指定されたプラグインに問題がある可能性があるため、
        Ionic Enterprise Cordova CLIを使用していることを確認する必要があります。
      </p>
      <command-line>
        <command-prompt>{'npm uninstall -g cordova'}</command-prompt>
        <command-prompt>{'npm install -g @ionic-enterprise/cordova'}</command-prompt>
      </command-line>
      <p>
        Ionic Enterprise Cordova CLIをインストールしたら、プラグインをインストールできます。
      </p>
      <command-line>
        <command-prompt>{`ionic enterprise register --key=YOURPRODUCTKEY`}</command-prompt>
        <command-prompt>{`ionic cordova plugin add @ionic-enterprise/${pluginId}`}</command-prompt>
      </command-line>
    </section>
  );
};
