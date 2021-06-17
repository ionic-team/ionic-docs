import { Component, Prop, State, h } from '@stencil/core';

import { ColorVariable } from '../color-variables';

@Component({
  tag: 'color-gen-select-colors',
  styleUrl: 'color-gen-select-colors.css'
})

export class ColorGenSelectColors {

  @State() activeColor = '';

  @Prop() colors: ColorVariable[] = [];

  toggleActiveColor(color: string) {
    if (this.activeColor === color) {
      this.activeColor = '';
      return;
    }
    this.activeColor = color;
  }

  render() {

    const listItems = this.colors.map(color => {
      const isOpen = (this.activeColor === color.name) ? true : false;
      return (
        <li class={{ 'controls__item': true, 'is-open': isOpen }}>

          <color-gen-variable-selector
            name={color.name}
            property={color.property}
            value={color.value}
            isParentOpen={isOpen}
            onClick={() => {
              this.toggleActiveColor(color.name);
            }}
          />

          <svg width="10px" height="6px" viewBox="0 0 10 6" version="1.1" xmlns="http://www.w3.org/2000/svg">
              <g id="Welcome" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round">
                  <g id="Desktop-HD" transform="translate(-1025.000000, -335.000000)" stroke="#AEB4BE" stroke-width="2">
                      <polyline id="arrow" transform="translate(1030.000000, 338.000000) rotate(90.000000) translate(-1030.000000, -338.000000) " points="1028 334 1032 338.020022 1028 342"></polyline>
                  </g>
              </g>
          </svg>

          <ul class="controls__sub">
            <li>
              <color-gen-variable-selector
                name={color.name + '-shade'}
                property={color.property + '-shade'}
                value={color.shade}
                editable={false}
              />
            </li>
            <li>
              <color-gen-variable-selector
                name={color.name + '-tint'}
                property={color.property + '-tint'}
                value={color.tint}
                editable={false}
              />
            </li>
          </ul>
        </li>
      );
    });

    return (
      <ul class="controls">
        {listItems}
      </ul>
    );
  }

}
