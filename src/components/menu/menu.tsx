import { Component } from '@stencil/core';
import Logo from '../header/logo';
import componentsTemplate from './templates/components';
import cliTemplate from './templates/cli';
import nativeTemplate from './templates/native';
import appflowTemplate from './templates/appflow';
import mainTemplate from './templates/main';

@Component({
  tag: 'docs-menu',
  styleUrl: 'menu.css'
})
export class DocsMenu {
  render() {
    return [
      <header>
        <stencil-route-link url="/docs/">
          <Logo/>
        </stencil-route-link>
      </header>,
      <docs-search/>,
      <stencil-route-switch>
        <stencil-route url="/docs/(components|api)" routeRender={componentsTemplate}/>
        <stencil-route url="/docs/cli" routeRender={cliTemplate}/>
        <stencil-route url="/docs/native" routeRender={nativeTemplate}/>
        <stencil-route url="/docs/appflow" routeRender={appflowTemplate}/>
        <stencil-route routeRender={mainTemplate}/>
      </stencil-route-switch>
    ];
  }
}
