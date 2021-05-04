import { Component, Element, State, h } from '@stencil/core';

@Component({
  tag: 'layered-colors-select',
  styleUrl: 'layered-colors-select.css'
})
export class ColorBlock {
  @Element() el!: HTMLElement;

  @State() color = 'primary';

  changeColor(ev: CustomEvent) {
    this.color = ev.detail.value;
  }

  render() {
    const selectOptions = {
      'header': 'Select a Color',
      'subHeader': 'The variations of the color will reflect in the table',
      'cssClass': 'layered-colors-select-interface'
    };

    const color = this.color;

    const variations = [
      {
        property: `--ion-color-${color}`,
        name: 'Base',
        description: 'The main color that all variations are derived from',
        value: getComputedStyle(this.el).getPropertyValue(`--ion-color-${color}`)
      },
      {
        property: `--ion-color-${color}-rgb`,
        name: 'Base (rgb)',
        rgb: true,
        description: 'The base color in red, green, blue format',
        value: getComputedStyle(this.el).getPropertyValue(`--ion-color-${color}-rgb`)
      },
      {
        property: `--ion-color-${color}-contrast`,
        name: 'Contrast',
        description: 'The opposite of the base color, should be visible against the base color',
        value: getComputedStyle(this.el).getPropertyValue(`--ion-color-${color}-contrast`)
      },
      {
        property: `--ion-color-${color}-contrast-rgb`,
        name: 'Contrast (rgb)',
        rgb: true,
        description: 'The contrast color in red, green, blue format',
        value: getComputedStyle(this.el).getPropertyValue(`--ion-color-${color}-contrast-rgb`)
      },
      {
        property: `--ion-color-${color}-shade`,
        name: 'Shade',
        description: 'A slightly darker version of the base color',
        value: getComputedStyle(this.el).getPropertyValue(`--ion-color-${color}-shade`)
      },
      {
        property: `--ion-color-${color}-tint`,
        name: 'Tint',
        description: 'A slightly lighter version of the base color',
        value: getComputedStyle(this.el).getPropertyValue(`--ion-color-${color}-tint`)
      }
    ];

    const blockItems = variations.map(variation => {
      const codeColor = variation.rgb ? `rgb(${variation.value})` : `${variation.value}`;

      return (
        <tr>
          <td class="color-name">
            {variation.name}
          </td>
          <td class="color-property">
            <code>{variation.property}</code>
          </td>
          <td class="color-value">
            <code-color mode="md" display={variation.value} value={codeColor}></code-color>
          </td>
          <td class="color-description">
            {variation.description}
          </td>
        </tr>
      );
    });

    return [
      <button class="color-select">
        <span
          class="color-dot"
          style={{
            'background-color': `var(--ion-color-${this.color})`
          }}
        />
        <ion-select
          value={this.color}
          interfaceOptions={selectOptions}
          onIonChange={ev => this.changeColor(ev)}
        >
          <ion-select-option value="primary">Primary</ion-select-option>
          <ion-select-option value="secondary">Secondary</ion-select-option>
          <ion-select-option value="tertiary">Tertiary</ion-select-option>
          <ion-select-option value="success">Success</ion-select-option>
          <ion-select-option value="warning">Warning</ion-select-option>
          <ion-select-option value="danger">Danger</ion-select-option>
          <ion-select-option value="dark">Dark</ion-select-option>
          <ion-select-option value="medium">Medium</ion-select-option>
          <ion-select-option value="light">Light</ion-select-option>
        </ion-select>
      </button>,
      <table>
        <tr>
          <th>Name</th>
          <th>Property</th>
          <th>Default Value</th>
          <th>Description</th>
        </tr>
        {blockItems}
      </table>,
    ];
  }
}
