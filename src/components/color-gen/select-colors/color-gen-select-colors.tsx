import { Component, Prop } from '@stencil/core';
import { ColorVariable } from '../color-variables';


@Component({
  tag: 'color-gen-select-colors',
  styleUrl: 'color-gen-select-colors.css'
})

export class ColorGenSelectColors {

  @Prop() colors: ColorVariable[] = [];

  render() {
    return this.colors.map(color => {
      return <color-gen-variable-selector property={color.property} value={color.value} />;
    });
  }

}
