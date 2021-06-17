import { Component, Prop, h } from '@stencil/core';

import { Logo } from '../../icons';

import cliTemplate from './templates/cli';
// import { FrameworkSelect } from './framework-select';
import componentsTemplate from './templates/components';
import mainTemplate from './templates/main';
import studioTemplate from './templates/studio';

@Component({
  tag: 'docs-menu',
  styleUrl: 'menu.css'
})
export class DocsMenu {
  @Prop() toggleClickFn!: (e: Event) => void;

  render() {
    return [
      <header>
        <docs-menu-toggle onClick={this.toggleClickFn}/>
        <stencil-route-link url="/docs/">
          <Logo class="MenuLogo"/>
        </stencil-route-link>
      </header>,
      <stencil-route-switch>
        <stencil-route url="/docs/appflow"></stencil-route>
        <stencil-route url="/docs/studio"></stencil-route>
        <stencil-route>
          <section class="MenuControls">
            <framework-select/>
          </section>
        </stencil-route>
      </stencil-route-switch>,
      <stencil-route-switch scrollTopOffset={0} class="Menu">
        <stencil-route url="/docs/:lang([a-z]{2})?/(components|api)" routeRender={componentsTemplate}/>
        <stencil-route url="/docs/:lang([a-z]{2})?/cli" routeRender={cliTemplate}/>
        <stencil-route url="/docs/:lang([a-z]{2})?/studio" routeRender={studioTemplate}/>
        <stencil-route url="/docs/:lang([a-z]{2})?/native/:plugin" routeRender={() => <docs-menu-native />}/>
        <stencil-route url="/docs/:lang([a-z]{2})?/native" routeRender={() => <docs-menu-native />}/>
        <stencil-route routeRender={mainTemplate}/>
      </stencil-route-switch>
    ];
  }
}
