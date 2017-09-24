import { Component } from '@stencil/core';

@Component({
  tag: 'site-content',
  styleUrl: 'site-content.scss'
})
export class SiteContent {
  render() {
    return (
      <div class="content">
        <slot />
      </div>
    );
  }
}
