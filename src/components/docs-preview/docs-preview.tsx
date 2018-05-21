import { Component, Prop, State, Watch } from '@stencil/core';

@Component({
  tag: 'docs-preview',
  styleUrl: 'docs-preview.scss'
})
export class SitePreviewApp {
  @Prop() url: string;
  @Prop() cssText: string;
  @State() selected = 'ios';
  @State() fixed = false;
  iframe: HTMLIFrameElement;

  @Watch('cssText')
  onCssTextChange() {
    this.applyStyles();
  }

  select(platform) {
    this.selected = platform;
  }

  applyStyles () {
    if (this.iframe && this.iframe.contentDocument && this.iframe.contentDocument.documentElement) {
      const iframeDoc = this.iframe.contentDocument;
      const varStyleId = 'color-style';

      let themerStyle: HTMLStyleElement = iframeDoc.getElementById(varStyleId) as any;
      if (!themerStyle) {
        themerStyle = iframeDoc.createElement('style');
        themerStyle.id = varStyleId;
        iframeDoc.documentElement.appendChild(themerStyle);
      }

      themerStyle.innerHTML = this.cssText;
    }
  }

  onIframeLoad() {
    this.applyStyles();
  }

  render() {
    if (! this.url) {
      return null;
    }

    return [
      <ul class="docs-preview__toggle">
        <li
          class={this.selected === 'ios' ? 'active' : ''}
          onClick={this.select.bind(this, 'ios')}>iOS</li>
        <li
          class={this.selected === 'md' ? 'active' : ''}
          onClick={this.select.bind(this, 'md')}>Android</li>
      </ul>,
      <figure class={this.selected}>
        <iframe
          src={`${this.url}?ionic:mode=${this.selected}&ionic:statusbarPadding=true`}
          ref={el => this.iframe = el as any}
          onLoad={this.onIframeLoad.bind(this)}
          frameborder="0"></iframe>
      </figure>,
      <a class="docs-preview_link" target="_blank" href={this.url}>See Preview</a>
    ];
  }
}
