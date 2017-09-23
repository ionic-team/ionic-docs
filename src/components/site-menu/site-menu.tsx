import { Component } from '@stencil/core';

@Component({
  tag: 'site-menu',
  styleUrl: 'site-menu.scss'
})
export class SiteMenu {
  render() {
    return (
      <div>
        <stencil-route-link url="/" class="logo-link">
          <img class="logo" alt="Ionic" src="/assets/img/text-logo.png" />
        </stencil-route-link>
        <ul>
          <li>
            <h4>Introduction</h4>
            <ul>
              <li>
                <stencil-route-link url="/docs/intro">
                  What is Stencil?
                </stencil-route-link>
              </li>
              <li>
                <stencil-route-link url="/docs/getting-started">
                  Getting Started
                </stencil-route-link>
              </li>
            </ul>
          </li>

          <li>
            <h4>Basics</h4>
            <ul>

              <li>
                <stencil-route-link url="/docs/my-first-component">
                  My First Component
                </stencil-route-link>
              </li>

              <li>
                <stencil-route-link url="/docs/templating">
                  Templating
                </stencil-route-link>
              </li>

              <li>
                <stencil-route-link url="/docs/decorators">
                  Decorators
                </stencil-route-link>
              </li>

              <li>
                <stencil-route-link url="/docs/events">
                  Events
                </stencil-route-link>
              </li>

              <li>
                <stencil-route-link url="/docs/component-lifecycle">
                  Component Life Cycle
                </stencil-route-link>
              </li>

            </ul>
          </li>

          <li>
            <h4>Advanced</h4>
            <ul>
              <li>
                <stencil-route-link url="/docs/stencil-config">
                  Stencil Configuration
                </stencil-route-link>
              </li>
              <li>
                <stencil-route-link url="/docs/prerendering">
                  Prerendering
                </stencil-route-link>
              </li>
              <li>
                <stencil-route-link url="/docs/server-side-rendering">
                  Server Side Rendering
                </stencil-route-link>
              </li>
              <li>
                <stencil-route-link url="/docs/service-workers">
                  Service Workers
                </stencil-route-link>
              </li>
              <li>
                <stencil-route-link url="/docs/distribution">
                  Distribution
                </stencil-route-link>
              </li>
            </ul>
          </li>

          <li>
            <h4>Add-ons</h4>
            <ul>
              <li>
                <stencil-route-link url="/docs/routing">
                  Router
                </stencil-route-link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    );
  }
}
