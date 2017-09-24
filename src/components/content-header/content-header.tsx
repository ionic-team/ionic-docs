import { Component } from '@stencil/core';

@Component({
  tag: 'content-header',
  styleUrl: 'content-header.scss'
})
export class ContentHeader {
  render() {
    return [
      <div class="widget">
      </div>,
      <div class="links">
        <ul>
          <li><a href="https://support.ionicjs.com/">Support</a></li>
          <li><a target="_blank" href="https://dashboard.ionicjs.com/">Sign-in</a></li>
        </ul>
      </div>
    ]
  }
}
