import { h } from '@stencil/core';
import { toHypertext } from '../to-hypertext';

export default (props) => {
  const { page } = props;
  const headings = [...page.headings];

  let pluginId = page.path.split('/')[3];
  let variables = '';
  if (pluginId === 'auth-connect') {
    pluginId = 'auth';
    variables = '--variable AUTH_URL_SCHEME=mycustomscheme';
  }
  const otherVersions = page.otherVersions || [];

  const installation = renderInstallation(pluginId, variables);

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
      <section class="markdown-content">
        {toHypertext(h, page.body)}
      </section>
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

const renderInstallation = (pluginId: string, variables?: string) => {
  if (!pluginId) {
    return null;
  }

  return (
    <section>
      <h2 id="installation">
        <a href="#installation">Installation</a>
      </h2>
      <p>
        After following the one-time <stencil-route-link url="/docs/enterprise/setup">setup steps</stencil-route-link>,
        simply install the plugin:
      </p>
      <command-line>
        <command-prompt>{`ionic cordova plugin add @ionic-enterprise/${pluginId} ${variables}`}</command-prompt>
      </command-line>
    </section>
  );
};
