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

  handleDocumentLoad = (document) => {
    console.log(document);
  }

  render() {
    return (
      <stencil-router>
        <stencil-route url={['/docs/:document*', '/docs']} routeRender={props => {
          const documentPath = props.match.params.document || 'index';
          const section = this.parseSection(documentPath);
          const page = documentPath.replace(/\//g, '-');
          const layoutClass = {
            [`section-${section}`]: true,
            [`page-${page}`]: true
          };

          return (
            <docs-layout class={layoutClass}>
              <docs-menu section={section}/>
              <docs-header/>
              <docs-content>
                <docs-document path={documentPath} onLoaded={this.handleDocumentLoad}/>
                <docs-preview/>
              </docs-content>
            </docs-layout>
          );
        }}/>
      </stencil-router>
    );
  }
}
