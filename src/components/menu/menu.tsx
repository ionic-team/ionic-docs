import { Component, Prop } from '@stencil/core';
import { Logo } from '../../icons';
import { FrameworkSelect } from './framework-select';
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
  @Prop() onToggleClick: (e: Event) => void;

  render() {
    return [
      <header>
        <docs-menu-toggle onClick={this.onToggleClick}/>
        <stencil-route-link url="/docs/">
          <Logo class="MenuLogo"/>
        </stencil-route-link>
      </header>,
      <docs-search/>,
      <stencil-route-switch scrollTopOffset={0}>
        <stencil-route url="/docs/(components|api)" routeRender={componentsTemplate}/>
        <stencil-route url="/docs/cli" routeRender={cliTemplate}/>
        <stencil-route url="/docs/native" routeRender={nativeTemplate}/>
        <stencil-route url="/docs/appflow" routeRender={appflowTemplate}/>
        <stencil-route routeRender={mainTemplate}/>
      </stencil-route-switch>,
      <section class="MenuControls">
        <FrameworkSelect/>
      </section>
    ];
  }
}
