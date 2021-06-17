import { Component, Event, EventEmitter, Prop, State, h } from '@stencil/core';

@Component({
  tag: 'color-gen-variable-selector',
  styleUrl: 'color-gen-variable-selector.css',
  // shadow: true
})
export class VariableSelector {

  @Prop() name!: string;
  @Prop() property?: string;
  @Prop() editable = true;
  @Prop() isParentOpen = false;
  @Prop() isNew = false;
  @Prop({ mutable: true }) value?: string;

  @State() showNameError = false;
  @State() showValueError = false;
  @State() isValueInputFocused = false;
  @State() isNameInputFocused = false;

  @Event() colorChange!: EventEmitter;
  @Event() nameChange!: EventEmitter;

  onNameChange(ev: Event) {
    const input = ev.currentTarget as any;
    const name = input.value.trim();

    if (name.length === 0) {
      return;
    }

    if (!this.isValidName(name)) {
      return;
    }

    this.name = name;
    this.nameChange.emit({
      name: this.name,
      value: this.value
    });
  }

  onColorChange(ev: Event) {
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

    if (input.matches('[type="text"]') && val.length !== 7) { return; }

    this.value = val;
    this.colorChange.emit({
      property: this.property,
      value: this.value
    });
  }

  onValueInputFocus() {
    this.isValueInputFocused = true;
  }

  onValueInputBlur(ev: Event) {
    const input = ev.currentTarget as any;
    this.value = input.value.trim();
    this.isValueInputFocused = false;
  }

  onNameInputFocus() {
    this.isNameInputFocused = true;
  }

  onNameInputBlur(ev: FocusEvent) {
    const input = ev.currentTarget as any;
    this.name = input.value.trim();
    this.isNameInputFocused = false;
  }

  isValidName(str: string) {
    return /^[A-Z\-\_]+$/i.test(str);
  }

  validateName() {
    const isValidName = this.isValidName(this.name);
    this.showNameError = (isValidName && this.name.length > 0) ? false : true;
  }

  isValidHex(str: string | undefined): boolean {
    return typeof str !== 'undefined' ? /^#[0-9A-F]{6}$/i.test(str) : false;
  }

  validateValue() {
    const isValidHex = this.isValidHex(this.value);
    this.showValueError = (isValidHex && typeof this.value !== 'undefined' && this.value.length === 7) ? false : true;
  }

  render() {
    this.validateName();
    this.validateValue();

    return [
      <div
        class={{
          'color-selector': true,
          'color-selector--name-error': this.showNameError,
          'color-selector--value-error': this.showValueError
        }}
      >
        <div class="color-selector__name">
          <i class="color-selector__swatch" style={{ 'backgroundColor': this.value }}></i>
          { (this.isNew) ?
            <div
              class={{
                'color-selector__input': true,
                'color-selector__input-name': true,
                'color-selector__input--focused': this.isNameInputFocused
              }}
            >
              <input
                type="text"
                value={this.name}
                onInput={ev => this.onNameChange(ev)}
                onFocus={() => this.onNameInputFocus()}
                onBlur={ev => this.onNameInputBlur(ev)}
              />
            </div>
            : <span>{this.name}</span>
          }
          {this.showNameError ?
              <span class="color-selector__error">Please enter a valid name without special characters.</span>
            : ''}
        </div>
        {(this.editable)
        ?
          <div class="color-selector__form-group">
            <div
              class={{
                'color-selector__input': true,
                'color-selector__input-value': true,
                'color-selector__input--focused': this.isValueInputFocused
              }}
              onClick={ev => { if (this.isParentOpen) { ev.stopPropagation(); } }}
            >
              <div class="color-selector__color-wrap" style={{ 'backgroundColor': this.value }}>
                <input
                  type="color"
                  value={this.value}
                  onInput={this.onColorChange.bind(this)}
                  tabindex="-1"
                />
              </div>
              <input
                type="text"
                value={this.value}
                onInput={this.onColorChange.bind(this)}
                onFocus={this.onValueInputFocus.bind(this)}
                onBlur={this.onValueInputBlur.bind(this)}
              />
            </div>

            {this.showValueError ?
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
