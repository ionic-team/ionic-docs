import { Component } from '@stencil/core';

@Component({
  tag: 'new-tab-icon',
  styleUrl: 'new-tab-icon.css',
})
export class NewTabIcon {
  render() {
    return (
      <svg viewBox="0 0 43 42">
        <rect class="box" y="8" width="34" height="34" rx="6"/>
        <path class="arrow" d="M37.078 3.268H23.617V.243h18.626v18.625h-3.026V5.407L16.13 28.494l-2.14-2.139z"/>
      </svg>
    );
  }
}
