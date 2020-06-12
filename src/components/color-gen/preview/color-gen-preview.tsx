import { Component, Prop, Watch, h } from '@stencil/core';

@Component({
  tag: 'color-gen-preview',
  styleUrl: 'color-gen-preview.css',
  shadow: true
})
export class ColorGenPreview {

  @Prop() cssText!: string;
  @Prop() demoMode!: string;
  iframe!: HTMLIFrameElement;

  applyStyles() {
    if (this.iframe && this.iframe.contentDocument && this.iframe.contentDocument.documentElement) {
      const iframeDoc = this.iframe.contentDocument;
      const varStyleId = 'color-gen-style';

      let themerStyle: HTMLStyleElement | undefined = iframeDoc.getElementById(varStyleId) as any;
      if (!themerStyle) {
        themerStyle = iframeDoc.createElement('style');
        themerStyle.id = varStyleId;
        iframeDoc.documentElement.appendChild(themerStyle);
      }

      themerStyle.innerHTML = this.cssText;
    }
  }

  @Watch('cssText')
  onCssTextChange() {
    this.applyStyles();
  }

  onIframeLoad() {
    this.applyStyles();
  }

  render() {
    const url = `/docs/theming/color-gen/demo/index.html?ionic:mode=${this.demoMode}`;

    return [
      <div>
        <iframe src={url} ref={el => this.iframe = el as any} onLoad={this.onIframeLoad.bind(this)}></iframe>
      </div>
    ];
  }
}
