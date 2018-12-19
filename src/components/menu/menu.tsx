import { Component } from '@stencil/core';
import apiMenu from './api';
import cliMenu from './cli';
import nativeMenu from './native';
import mainMenu from './main';

@Component({
  tag: 'docs-menu',
  styleUrl: 'menu.css'
})
export class DocsMenu {
  render() {
    return (
      <stencil-route-switch>
        <stencil-route url="/docs/api" routeRender={apiMenu}/>
        <stencil-route url="/docs/cli" routeRender={cliMenu}/>
        <stencil-route url="/docs/native" routeRender={nativeMenu}/>
        <stencil-route routeRender={mainMenu}/>
      </stencil-route-switch>
    );
  }
}
