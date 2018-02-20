import { Component, Prop, State } from '@stencil/core';

@Component({
  tag: 'site-preview-app',
  styleUrl: 'site-preview-app.scss'
})
export class SitePreviewApp {

  @Prop() url:string;
  @Prop() fixed:boolean = false;

  @State() selected:string = 'ios';

  select(platform) {
    this.selected = platform;
  }

  render() {
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
        <iframe src="/" frameborder="0"></iframe>
      </figure>
    ]
  }
}