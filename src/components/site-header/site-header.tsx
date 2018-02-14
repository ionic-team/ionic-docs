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
        <a href='/docs' id="site-logo"></a>
        <FrameworkDropdown/>
        <site-search></site-search>
        <EcosystemDropdown/>
        <a href="https://github.com/ionic-team/ionic"
           target="_blank"
           class="github">GitHub</a>
      </nav>
    ]
  }
}
