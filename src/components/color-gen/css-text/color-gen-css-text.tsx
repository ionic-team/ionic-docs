import { Component, Event, EventEmitter, Prop, State } from '@stencil/core';


@Component({
  tag: 'color-gen-css-text',
  styleUrl: 'color-gen-css-text.css'
})
export class CssText {

  @Prop({ mutable: true }) cssText: string = '';
  @State() showCopyConfirmation: boolean = false;
  @Event() cssTextChange: EventEmitter;

  onCssTextChange(ev: UIEvent) {
    if ((ev.target as HTMLTextAreaElement).value !== this.cssText) {
      this.cssText = (ev.target as HTMLTextAreaElement).value;

      this.cssTextChange.emit(this.cssText);
    }
  }

  copyCssText() {
    this.showCopyConfirmation = true;

    const el = document.createElement('textarea');
    el.value = this.cssText;
    el.setAttribute('readonly', '');
    el.style.position = 'absolute';
    el.style.left = '-9999px';
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);

    setTimeout(()=>{
      this.showCopyConfirmation = false;
    }, 2000);
  }

  render () {
    return [
      <div>
        <div class="css-text__header">
          <h3>CSS Variables</h3>
          <div class={{'css-text__copy': true, 'show-confirmation': this.showCopyConfirmation}} >
            <a class="css-text__copy-link" onClick={this.copyCssText.bind(this)}>Copy</a>
            <span class="css-text__copy-confirmation">Copied!</span>
          </div>
        </div>
        <textarea spellcheck="false" onInput={this.onCssTextChange.bind(this)} value={this.cssText}></textarea>
      </div>
    ];
  }

}
