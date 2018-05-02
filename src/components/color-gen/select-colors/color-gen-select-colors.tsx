import { Component, Prop } from '@stencil/core';
import { ColorVariable } from '../color-variables';


@Component({
  tag: 'color-gen-select-colors',
  styleUrl: 'color-gen-select-colors.css'
})

export class ColorGenSelectColors {

  @Prop() colors: ColorVariable[] = [];


  render() {
    const listItems = this.colors.map(color => {
      return (
        <li>
          <color-gen-variable-selector name={color.name} property={color.property} value={color.value} />
          <color-gen-variable-selector name={color.name + '-shade'} property={color.property + '-shade'} value={color.shade} />
          <color-gen-variable-selector name={color.name + '-tint'} property={color.property + '-tint'} value={color.tint} />
        </li>
      )
    })

    return (
      <ul>
        { listItems }
      </ul>
    )
  }

}
