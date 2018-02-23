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
        <a href="https://github.com/ionic-team/ionic" target="_blank" class="github">
          GitHub <NewTabIcon/>
        </a>
      </nav>
    ];
  }
}

const NewTabIcon = () => (
  <svg class="new-tab" viewBox="0 0 43 42">
    <rect class="new-tab__box" y="8" width="34" height="34" rx="6"/>
    <path class="new-tab__arrow" d="M37.078 3.268H23.617V.243h18.626v18.625h-3.026V5.407L16.13 28.494l-2.14-2.139z"/>
  </svg>
);
