import { Component, Listen, Prop, State } from '@stencil/core';

@Component({
  tag: 'docs-preview',
  styleUrl: 'docs-preview.scss'
})
export class SitePreviewApp {
  @Prop() url: string;
  @State() ionicMode = 'ios';

  iframe: HTMLIFrameElement;
  iframeLoaded = false;
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

  renderTabLink() {
    return (
      <a class="docs-preview-new-tab" href={this.url} target="_blank">
        Open Preview
      </a>
    );
  }

  renderModeToggle() {
    return (
      <div class="docs-preview-mode-toggle">
        {['ios', 'md'].map(mode => (
          <button
            class={ mode === this.ionicMode ? 'is-selected' : null }
            onClick={() => { this.ionicMode = mode; }}>{ mode }</button>
        ))}
      </div>
    );
  }

  renderDevice() {
    return (
      <div class={`docs-preview-device ${this.ionicMode}`}>
        <figure>
          <iframe
            onLoad={this.onIframeLoad}
            src={`${this.url}?ionic:mode=${this.ionicMode}`}
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
      this.renderTabLink(),
      this.renderModeToggle(),
      this.renderDevice()
    ];
  }
}
