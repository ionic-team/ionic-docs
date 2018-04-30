import { Component, Event, EventEmitter, Prop } from '@stencil/core';


@Component({
  tag: 'color-gen-variable-selector',
  styleUrl: 'color-gen-variable-selector.css',
  shadow: true
})
export class VariableSelector {

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
      <section>
        <div class="color-square">
          <input type="color" value={this.value} onInput={this.onColorChange.bind(this)} tabindex="-1"/>
        </div>
        <div class="color-value">
          <input type="text" value={this.value} onInput={this.onColorChange.bind(this)}/>
        </div>
        <div class="property-label">
          {this.property}
        </div>
      </section>
    ];
  }
}
