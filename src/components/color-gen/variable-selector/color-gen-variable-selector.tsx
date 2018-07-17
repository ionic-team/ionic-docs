import { Component, Event, EventEmitter, Prop, State } from '@stencil/core';


@Component({
  tag: 'color-gen-variable-selector',
  styleUrl: 'color-gen-variable-selector.scss',
  shadow: true
})
export class VariableSelector {

  @Prop() name: string;
  @Prop() property: string;
  @Prop() editable = true;
  @Prop() isParentOpen = false;
  @Prop({ mutable: true }) value: string;

  @State() showInputError = false;
  @State() isInputFocused = false;

  @Event() colorChange: EventEmitter;

  onColorChange(ev: UIEvent) {
    const input = ev.currentTarget as any;
    const val = input.value.trim();

    if (input.matches('[type="text"]') && val[0] !== '#') {
      input.value = '#' + val;
      return;
    }

    if (input.matches('[type="text"]') && val.length > 7) {
      input.value = val.substring(0, val.length - 1);
      return;
    }

    if (input.matches('[type="text"]') && val.length !== 7) return;

    this.value = val;
    this.colorChange.emit({
      property: this.property,
      value: this.value
    });
  }

  onInputFocus() {
    this.isInputFocused = true;
  }

  onInputBlur(ev: UIEvent) {
    const input = ev.currentTarget as any;
    this.value = input.value.trim();
    this.isInputFocused = false;
  }

  isValidHex(str) {
    return /^#[0-9A-F]{6}$/i.test(str);
  }

  validate() {
    const isValidHex = this.isValidHex(this.value);
    this.showInputError = (isValidHex && this.value.length === 7) ? false : true;
  }

  render() {
    this.validate();

    return [
      <div class={{
        'color-selector': true,
        'color-selector--error': this.showInputError
        }}>
        <div class="color-selector__name">
          <i class="color-selector__swatch" style={{ 'backgroundColor': this.value }}></i>
          {this.name}
        </div>
        {(this.editable)
        ?
          <div class="color-selector__form-group">
            <div class={{
                'color-selector__input': true,
                'color-selector__input--focused': this.isInputFocused
              }}
              onClick={ev => { if (this.isParentOpen) ev.stopPropagation(); }}>
              <div class="color-selector__color-wrap" style={{ 'backgroundColor': this.value }}>
                <input type="color"
                  value={this.value}
                  onInput={this.onColorChange.bind(this)}
                  tabindex="-1"/>
              </div>
              <input
                type="text"
                value={this.value}
                onInput={this.onColorChange.bind(this)}
                onFocus={this.onInputFocus.bind(this)}
                onBlur={this.onInputBlur.bind(this)}/>
            </div>

            {this.showInputError ?
              <span class="color-selector__error">Please enter a valid six digit hex code.</span>
            : ''}
          </div>
        :
          <div class="color-selector__hex">
            <span>{this.value}</span>
          </div>
        }

      </div>
    ];
  }
}
