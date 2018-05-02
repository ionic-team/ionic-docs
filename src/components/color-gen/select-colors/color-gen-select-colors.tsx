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
