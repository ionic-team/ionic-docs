import { Component, Prop, State } from '@stencil/core';

@Component({
  tag: 'docs-preview',
  styleUrl: 'docs-preview.scss'
})
export class SitePreviewApp {
  @Prop() url: string;
  @State() selected = 'ios';
  @State() fixed = false;

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
