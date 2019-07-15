import { Component, Prop, h } from '@stencil/core';
import { Logo } from '../../icons';
import { FrameworkSelect } from './framework-select';
import componentsTemplate from './templates/components';
import cliTemplate from './templates/cli';
import nativeTemplate from './templates/native';
import appflowTemplate from './templates/appflow';
import mainTemplate from './templates/main';
import enterpriseTemplate from './templates/enterprise';
import nativeLandingTemplate from './templates/native-landing';

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
      <section class="MenuControls">
        <FrameworkSelect/>
      </section>,
      <stencil-route-switch scrollTopOffset={0}>
        <stencil-route url="/docs/(components|api)" routeRender={componentsTemplate}/>
        <stencil-route url="/docs/cli" routeRender={cliTemplate}/>
        <stencil-route url="/docs/native/:plugin" routeRender={nativeTemplate}/>
        <stencil-route url="/docs/native" routeRender={nativeLandingTemplate}/>
        <stencil-route url="/docs/appflow" routeRender={appflowTemplate}/>
        <stencil-route url="/docs/enterprise" routeRender={enterpriseTemplate}/>
        <stencil-route routeRender={mainTemplate}/>
      </stencil-route-switch>
    ];
  }
}
