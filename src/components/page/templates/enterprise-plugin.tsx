import { h } from '@stencil/core';
import { toHypertext } from '../to-hypertext';

export default (props) => {
  const { page } = props;
  const headings = [...page.headings];

  const pluginId = page.path.split('/')[3];
  const otherVersions = page.otherVersions || [];
  const { capacitorConfig, cordovaVariables } = page;

  return (
    <article>
      <h1>{ page.title }</h1>
      <h4>v{page.version}</h4>
      <docs-table-of-contents links={headings.concat([{ 'href': '#previous-versions', text: 'Other Versions' }])} basepath={page.path}/>
      <section class="markdown-content enterprise-markdown-content">
        <native-ent-install plugin-id={pluginId} cordova={cordovaVariables} capacitor={capacitorConfig} />
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
