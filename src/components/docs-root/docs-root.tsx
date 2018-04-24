import { Component } from '@stencil/core';
import '@stencil/router';

@Component({
  tag: 'docs-root'
})
export class DocsRoot {

  parseSection(path) {
    const match = /^(api|cli|pro)(\/.*)?/.exec(path);
    return match && match[1] || 'framework';
  }

  render() {
    return (
      <stencil-router>
        <stencil-route url={['/docs/:document*', '/docs']} routeRender={props => {
          const documentPath = props.match.params.document || 'index';
          const sectionClass = this.parseSection(documentPath);
          const pageClass = documentPath.replace(/\//g, '-');
          const layoutClass = {
            [`section-${sectionClass}`]: true,
            [`page-${pageClass}`]: true
          };

          return (
            <docs-layout class={layoutClass}>
              <docs-menu/>
              <docs-header/>
              <docs-content>
                <docs-document path={documentPath}/>
                <docs-preview/>
              </docs-content>
            </docs-layout>
          );
        }}/>
      </stencil-router>
    );
  }
}
