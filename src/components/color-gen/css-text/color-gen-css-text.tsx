import { Component, Event, EventEmitter, Prop } from '@stencil/core';


@Component({
  tag: 'color-gen-css-text',
  styleUrl: 'color-gen-css-text.css'
})
export class CssText {

  @Prop({ mutable: true }) cssText = '';
  @Event() cssTextChange: EventEmitter;

  onCssTextChange(ev: UIEvent) {
    if ((ev.target as HTMLTextAreaElement).value !== this.cssText) {
      this.cssText = (ev.target as HTMLTextAreaElement).value;

      this.cssTextChange.emit(this.cssText);
    }
  }

  render () {
    return [
      <div>
        <textarea spellcheck="false" onInput={this.onCssTextChange.bind(this)} value={this.cssText}></textarea>
      </div>
    ];
  }

}
