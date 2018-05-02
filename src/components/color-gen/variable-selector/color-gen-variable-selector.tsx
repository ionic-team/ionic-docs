import { Component, Event, EventEmitter, Prop } from '@stencil/core';


@Component({
  tag: 'color-gen-variable-selector',
  styleUrl: 'color-gen-variable-selector.css',
  shadow: true
})
export class VariableSelector {

  @Prop() name: string;
  @Prop() property: string;
  @Prop({ mutable: true }) value: string;
  
  @Event() colorChange: EventEmitter;
  onColorChange(ev: UIEvent) {
    const input = ev.currentTarget as HTMLInputElement;
    this.value = input.value.trim();

    this.colorChange.emit({
      property: this.property,
      value: this.value
    });
  }

  render () {
    return [
      <a>
        <div class="color-name">
          <i class="color-swatch" style={{'backgroundColor': this.value}}></i>
          {this.name}
        </div>
        <div class="color-input">
          <input type="color" value={this.value} onInput={this.onColorChange.bind(this)} tabindex="-1"/>
          <input type="text" value={this.value} onInput={this.onColorChange.bind(this)}/>
        </div>
      </a>
    ];
  }
}
