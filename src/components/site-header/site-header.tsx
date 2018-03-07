import { Component } from '@stencil/core';
import EcosystemDropdown from './ecosystem-dropdown';
import FrameworkDropdown from './framework-dropdown';

@Component({
  tag: 'site-header',
  styleUrl: 'site-header.scss'
})
export class SiteHeader {
  render() {
    return [
      <nav>
        <a href="/docs" id="site-logo"></a>
        <FrameworkDropdown/>
        <site-search></site-search>
        <EcosystemDropdown/>
        <uber-link iconVariety="blue" class="github" href="https://github.com/ionic-team/ionic">Github</uber-link>
      </nav>
    ];
  }
}

// svg (TODO: delete this after https://github.com/ionic-team/stencil/issues/607)
