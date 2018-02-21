import { Component, Listen, State } from '@stencil/core';

@Component({
  tag: 'site-preview-app',
  styleUrl: 'site-preview-app.scss'
})
export class SitePreviewApp {
  @State() selected:string = 'ios';
  @State() url:string;
  @State() fixed:boolean = false;

  @Listen('window:docLoaded')
  onDocLoaded(e) {
    this.url = e.detail.previewUrl
    this.fixed = !!e.detail.previewFixed
    console.log(this.url)
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
          class={this.selected === 'ios' ? 'active':''}
          onClick={this.select.bind(this, 'ios')}>iOS</li>
        <li
          class={this.selected === 'android' ? 'active':''}
          onClick={this.select.bind(this, 'android')}>Android</li>
      </ul>,
      <figure class={this.selected}>
        <iframe src={this.url} frameborder="0"></iframe>
      </figure>
    ]
  }
}