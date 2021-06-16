import { Component, Element, Host, Prop, State, h } from '@stencil/core';

import { CheckmarkSoft } from '../../icons';

@Component({
  tag: 'docs-code',
  styleUrl: 'code.css'
})
export class DocsCode {
  @Element() el!: HTMLElement;
  @Prop({ reflect: true }) language = '';
  @State() showCopyConfirmation = false;

  copyCodeText() {
    this.showCopyConfirmation = true;

    const codeEl = this.el.querySelector('code');
    const codeText = codeEl && codeEl.textContent || '';

    const el = document.createElement('textarea');
    el.value = codeText;
    el.setAttribute('readonly', '');
    el.style.position = 'absolute';
    el.style.left = '-9999px';
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);

    setTimeout(() => {
      this.showCopyConfirmation = false;
    }, 2000);
  }

  render() {
    // Only show copy button if the area is not a shell script.
    return (
      <Host>
        { !['shell', 'bash', 'sh'].includes(this.language) ?
          <div class={{ 'code-text__copy': true, 'show-confirmation': this.showCopyConfirmation }} >
            <a class="code-text__copy-link" onClick={this.copyCodeText.bind(this)}>Copy</a>
            <span class="code-text__copy-confirmation">
              {CheckmarkSoft({ height: '26px', width: '26px' })}
              Copied
            </span>
          </div>
        : '' }
      </Host>
    );
  }
}
