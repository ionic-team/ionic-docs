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
        <dropdown-framework></dropdown-framework>
        <site-search></site-search>
        <dropdown-ecosystem></dropdown-ecosystem>
        <a href="https://github.com/ionic-team/ionic"
           target="_blank"
           class="github">GitHub</a>
      </nav>
    ]
  }
}