import { Component, Element, Event, EventEmitter, Prop, State } from '@stencil/core';


@Component({
  tag: 'color-gen-css-text',
  styleUrl: 'color-gen-css-text.css'
})
export class CssText {

  @Prop({ mutable: true }) cssText = '';
  @State() showCopyConfirmation = false;
  @Event() cssTextChange: EventEmitter;

  @Element() el: HTMLElement;

  onCssTextChange(ev: UIEvent) {
    if ((ev.target as HTMLTextAreaElement).value !== this.cssText) {
      const value = (ev.target as HTMLTextAreaElement).value;
      if (!value.length) return;

      this.cssText = value;

      this.cssTextChange.emit(this.cssText);
    }
  }

  copyCssText() {
    this.showCopyConfirmation = true;

    const cssEl = this.el.querySelector('#cssText');
    const cssText = cssEl.textContent || '';

    const el = document.createElement('textarea');
    el.value = cssText;
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
    return [
      <div>
        <div class="css-text__header">
          <h3>CSS Variables</h3>

          <div class={{ 'css-text__copy': true, 'show-confirmation': this.showCopyConfirmation }} >
            <a class="css-text__copy-link" onClick={this.copyCssText.bind(this)}>Copy</a>
            <span class="css-text__copy-confirmation">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="26px" height="26px">
                <path d="M362.6 192.9L345 174.8c-.7-.8-1.8-1.2-2.8-1.2-1.1 0-2.1.4-2.8 1.2l-122 122.9-44.4-44.4c-.8-.8-1.8-1.2-2.8-1.2-1 0-2 .4-2.8 1.2l-17.8 17.8c-1.6 1.6-1.6 4.1 0 5.7l56 56c3.6 3.6 8 5.7 11.7 5.7 5.3 0 9.9-3.9 11.6-5.5h.1l133.7-134.4c1.4-1.7 1.4-4.2-.1-5.7z"/>
              </svg>
              Copied
            </span>
          </div>
        </div>
        <div
          id="cssText"
          class="css-text__code"
          contentEditable="true"
          spellcheck="false"
          onClick={function() { this.select(); }}
          onInput={this.onCssTextChange.bind(this)}
          innerHTML={this.cssText}>
        </div>
      </div>
    ];
  }

}
