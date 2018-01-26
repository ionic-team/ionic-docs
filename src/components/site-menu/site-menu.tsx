import { Component } from '@stencil/core';

@Component({
  tag: 'site-menu',
  styleUrl: 'site-menu.scss'
})
export class SiteMenu {
  render() {
    return (
      <nav class="menu-wrapper">
        <ul class="nested-menu">
          <li><stencil-route-link url="/">Home</stencil-route-link></li>
          <li class="active">
            <menu-expander service="intro">Introduction</menu-expander>
            <ul>
              <li>
                <stencil-route-link url="">What is Ionic Framework?</stencil-route-link>
              </li>
              <li>
                <stencil-route-link url="/intro/basics">Basic Features</stencil-route-link>
              </li>
              <li>
                <stencil-route-link url="/intro/structure">App Structure</stencil-route-link>
              </li>
              <li>
                <stencil-route-link url="/intro/concepts">Core Concepts</stencil-route-link>
              </li>
              <li>
                <stencil-route-link url="/intro/support">Browser Support</stencil-route-link>
              </li>
            </ul>
          </li>
          <li>
            <menu-expander service="getting-started">Getting Started</menu-expander>
            <ul>
              <li>
                <stencil-route-link url="/getting-started/installation">Installation</stencil-route-link>
              </li>
              <li>
                <stencil-route-link url="/getting-started/starting-an-app">Starting an App</stencil-route-link>
              </li>
              <li>
                <stencil-route-link url="/getting-started/run-your-app">Run Your App</stencil-route-link>
              </li>
              <li>
                <stencil-route-link url="/getting-started/dev-bulid">Dev Build</stencil-route-link>
              </li>
              <li>
                <stencil-route-link url="/getting-started/testing">Testing</stencil-route-link>
              </li>
              <li>
                <stencil-route-link url="/getting-started/deploying">Deploying</stencil-route-link>
              </li>
              <li>
                <stencil-route-link url="/getting-started/releasing">Releasing</stencil-route-link>
              </li>
              <li>
                <stencil-route-link url="/getting-started/tutorial">Tutorial</stencil-route-link>
              </li>
            </ul>
          </li>
          <li>
            <menu-expander service="getting-started">Components</menu-expander>
            <ul>
              <li>
                <stencil-route-link url=""></stencil-route-link>
              </li>
            </ul>
          </li>
          <li>
            <menu-expander service="getting-started">API Reference</menu-expander>
            <ul>
              <li>
                <stencil-route-link url=""></stencil-route-link>
              </li>
            </ul>
          </li>
          <li>
            <menu-expander service="getting-started">Native APIs</menu-expander>
            <ul>
              <li>
                <stencil-route-link url=""></stencil-route-link>
              </li>
            </ul>
          </li>
          <li>
            <menu-expander service="getting-started">Theming</menu-expander>
            <ul>
              <li>
                <stencil-route-link url=""></stencil-route-link>
              </li>
            </ul>
          </li>
          <li>
            <menu-expander service="getting-started">Contributing</menu-expander>
            <ul>
              <li>
                <stencil-route-link url=""></stencil-route-link>
              </li>
            </ul>
          </li>
          <li>
            <menu-expander service="getting-started">FAQ</menu-expander>
            <ul>
              <li>
                <stencil-route-link url=""></stencil-route-link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    );
  }
}






