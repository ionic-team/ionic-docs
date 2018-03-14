import { Component, Element, Listen, State } from '@stencil/core';

@Component({
  tag: 'site-preview-app',
  styleUrl: 'site-preview-app.scss'
})
export class SitePreviewApp {
  @State() selected = 'ios';
  @State() url: string;
  @State() fixed = false;

  @Element() el: Element;

  @Listen('window:docLoaded')
  onDocLoaded(e) {
    this.url = e.detail.previewUrl;
    this.fixed = !!e.detail.previewFixed;

    if (!this.url) {
      this.el.classList.add('hidden');
    } else {
      this.el.classList.remove('hidden');
    }
  }

  select(platform) {
    this.selected = platform;
  }

  render() {
    if (! this.url) {
      return null;
    }

    return [
      <ul>
        <li
          class={this.selected === 'ios' ? 'active' : ''}
          onClick={this.select.bind(this, 'ios')}>iOS</li>
        <li
          class={this.selected === 'md' ? 'active' : ''}
          onClick={this.select.bind(this, 'md')}>Android</li>
      </ul>,
      <figure class={this.selected}>
        <iframe
          src={`${this.url}?ionicplatform=${this.selected}`}
          frameborder="0"></iframe>
      </figure>
    ];
  }
}
