import { Component, Listen, Prop, State } from '@stencil/core';

@Component({
  tag: 'docs-preview',
  styleUrl: 'docs-preview.scss'
})
export class SitePreviewApp {
  @Prop() url: string;
  @Prop() source: string;
  @State() ionicMode = 'ios';

  iframe: HTMLIFrameElement;
  iframeLoaded = false;
  URLParams = '&ionic:statusbarPadding=true';
  messageQueue: CustomEvent[] = [];

  @Listen('window:previewMessage')
  handleMessage(msg: CustomEvent) {
    this.iframeLoaded
      ? this.postMessage(msg)
      : this.messageQueue.push(msg);
  }

  postMessage({ detail }: CustomEvent) {
    try {
      this.iframe.contentWindow.postMessage(detail, '*');
    } catch (e) {} // tslint:disable-line
  }

  onIframeLoad = () => {
    this.messageQueue.forEach(this.postMessage.bind(this));
    this.messageQueue = [];
    this.iframeLoaded = true;
  }

  renderModeToggle() {
    return (
      <div class="docs-preview-mode-toggle">
        {['ios', 'md'].map(mode => (
          <button
            class={ mode === this.ionicMode ? 'is-selected' : null }
            title={`Toggle ${mode === 'ios' ? 'iOS' : 'Android'} mode`}
            onClick={() => { this.ionicMode = mode; }}>{ mode }</button>
        ))}
      </div>
    );
  }

  renderSourceLink() {
    return this.source ?
      <a href={this.source}
         class="docs-preview-source"
         target="_blank"
         title="Demo Source">
        <ion-icon name="code"></ion-icon>
      </a> : null;
  }

  renderDevice() {
    return (
      <div class={`docs-preview-device ${this.ionicMode}`}>
        <figure>
          <svg class="docs-preview-device__md-bar" viewBox="0 0 1384.3 40.3">
            <path class="st0" d="M1343 5l18.8 32.3c.8 1.3 2.7 1.3 3.5 0L1384 5c.8-1.3-.2-3-1.7-3h-37.6c-1.5 0-2.5 1.7-1.7 3z"/>
            <circle class="st0" cx="1299" cy="20.2" r="20"/>
            <path class="st0" d="M1213 1.2h30c2.2 0 4 1.8 4 4v30c0 2.2-1.8 4-4 4h-30c-2.2 0-4-1.8-4-4v-30c0-2.3 1.8-4 4-4zM16 4.2h64c8.8 0 16 7.2 16 16s-7.2 16-16 16H16c-8.8 0-16-7.2-16-16s7.2-16 16-16z"/>
          </svg>
          <svg class="docs-preview-device__ios-notch" viewBox="0 0 219 31">
            <path d="M0 1V0h219v1a5 5 0 0 0-5 5v3c0 12.15-9.85 22-22 22H27C14.85 31 5 21.15 5 9V6a5 5 0 0 0-5-5z" fill-rule="evenodd"/>
          </svg>
          <iframe
            onLoad={this.onIframeLoad}
            src={`${this.url}?ionic:mode=${this.ionicMode}${this.URLParams}`}
            ref={node => { this.iframe = node as HTMLIFrameElement; }}/>
        </figure>
      </div>
    );
  }

  render() {
    if (!this.url) {
      return null;
    }

    return [
      this.renderSourceLink(),
      this.renderModeToggle(),
      this.renderDevice()
    ];
  }
}
