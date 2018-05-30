import { Component, Listen, Prop, State } from '@stencil/core';

@Component({
  tag: 'docs-preview',
  styleUrl: 'docs-preview.scss'
})
export class SitePreviewApp {
  @Prop() url: string;
  @State() ionicMode = 'ios';
  iframe: HTMLIFrameElement;

  @Listen('window:previewMessage')
  postToIframe({ detail }: CustomEvent) {
    try {
      this.iframe.contentWindow.postMessage(detail, '*');
    } catch (err) {
      console.error('Failed to post message to preview: ', err);
    }
  }

  render() {
    if (!this.url) {
      return null;
    }

    return [
      <div class="docs-preview-mode-toggle">
        {['ios', 'md'].map(mode => (
          <button
            class={ mode === this.ionicMode ? 'is-selected' : null }
            onClick={() => { this.ionicMode = mode; }}>
              { mode }
          </button>
        ))}
      </div>,
      <div class={`docs-preview-device ${this.ionicMode}`}>
        <figure>
          <iframe
            src={`${this.url}?ionic:mode=${this.ionicMode}`}
            ref={node => { this.iframe = node as HTMLIFrameElement; }}/>
        </figure>
      </div>
    ];
  }
}
