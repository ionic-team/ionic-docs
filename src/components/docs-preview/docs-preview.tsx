import { Component, Listen, Prop, State, Watch } from '@stencil/core';

@Component({
  tag: 'docs-preview',
  styleUrl: 'docs-preview.scss'
})
export class SitePreviewApp {
  @Prop() url: string;
  @Prop() cssText: string;
  @State() previewMode = 'ios';
  iframe: HTMLIFrameElement;

  @Listen('window:previewMessage')
  postToIframe({ detail }: CustomEvent) {
    try {
      this.iframe.contentWindow.postMessage(detail, '*');
    } catch (err) {
      console.error('Failed to post message to preview: ', err);
    }
  }

  @Watch('cssText')
  onCssTextChange() {
    this.applyStyles();
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
    if (!this.url) {
      return null;
    }

    return [
      <div class="docs-preview-mode-toggle">
        {['ios', 'md'].map(mode => (
          <button
            class={ mode === this.previewMode ? 'is-selected' : null }
            onClick={() => { this.previewMode = mode; }}>
              { mode }
          </button>
        ))}
      </div>,
      <div class={`docs-preview-device ${this.previewMode}`}>
        <figure>
          <iframe
            src={`${this.url}?ionic:mode=${this.previewMode}`}
            ref={el => this.iframe = el as any}
            onLoad={this.onIframeLoad.bind(this)}/>
        </figure>
      </div>
    ];
  }
}
