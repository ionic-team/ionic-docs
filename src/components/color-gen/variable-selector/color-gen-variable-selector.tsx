import { Component, Event, EventEmitter, Prop } from '@stencil/core';


@Component({
  tag: 'color-gen-variable-selector',
  styleUrl: 'color-gen-variable-selector.css',
  shadow: true
})
export class VariableSelector {

  @Prop() name: string;
  @Prop() property: string;
  @Prop() editable = true;
  @Prop() isParentOpen = false;
  @Prop({ mutable: true }) value: string;

  @Event() colorChange: EventEmitter;

  onColorChange(ev: UIEvent) {
    const input = ev.currentTarget as HTMLInputElement;

    if (input.matches('[type="text"]') && input.value.trim().length !== 7) return;

    this.value = input.value.trim();
    this.colorChange.emit({
      property: this.property,
      value: this.value
    });
  }

  render () {
    return [
      <div class="color-selector">
        <div class="color-selector__name">
          <i class="color-selector__swatch" style={{'backgroundColor': this.value}}></i>
          {this.name}
        </div>
        {(this.editable)
        ?
          <div class="color-selector__input" onClick={ev => { if (this.isParentOpen) ev.stopPropagation(); }}>
            <div class="color-selector__color-wrap" style={{'backgroundColor': this.value}}>
              <input type="color" value={this.value} onInput={this.onColorChange.bind(this)} tabindex="-1"/>
            </div>
            <input type="text" value={this.value} onInput={this.onColorChange.bind(this)}/>
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
