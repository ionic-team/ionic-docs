import { Component } from '@stencil/core';

@Component({
  tag: 'site-header',
  styleUrl: 'site-header.scss'
})
export class SiteHeader {
  render() {
    return [

      <nav>
        <a href='/docs' id="site-logo"></a>
        <framework-dropdown></framework-dropdown>
      </nav>
    ]
  }
}