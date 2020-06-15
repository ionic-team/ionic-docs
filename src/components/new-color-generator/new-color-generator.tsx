import { Component, Element, Listen, State, h } from '@stencil/core';

import { generateColor } from '../color-gen/parse-css';

@Component({
  tag: 'new-color-generator',
  styleUrl: 'new-color-generator.css'
})
export class ColorGenerator {
  @State() cssText = DEFAULT_CSS_TEXT;

  @State() name = 'New';
  @State() value = '#69bb7b';

  @Element() el!: HTMLElement;

  @Listen('nameChange')
  onNameChange(ev: any) {
    this.name = ev.detail.name;
    this.updateCssText();
  }

  @Listen('colorChange')
  onColorChange(ev: any) {
    this.value = ev.detail.value;
    this.updateCssText();
  }

  updateCssText() {
    const name = this.name.toLowerCase();
    const value = this.value;
    const selector = `.ion-color-${name}`;

    const color = generateColor(name, selector, value);

    this.cssText =
`:root {
  --ion-color-${name}: <code-color mode="md" value="${color.value}"></code-color>;
  --ion-color-${name}-rgb: <code-color mode="md" value="${color.value}" display="${color.valueRgb}"></code-color>;
  --ion-color-${name}-contrast: <code-color mode="md" value="${color.contrast}"></code-color>;
  --ion-color-${name}-contrast-rgb: <code-color mode="md" value="${color.contrast}" display="${color.contrastRgb}"></code-color>;
  --ion-color-${name}-shade: <code-color mode="md" value="${color.shade}"></code-color>;
  --ion-color-${name}-tint: <code-color mode="md" value="${color.tint}"></code-color>;
}

${selector} {
  --ion-color-base: var(--ion-color-${name});
  --ion-color-base-rgb: var(--ion-color-${name}-rgb);
  --ion-color-contrast: var(--ion-color-${name}-contrast);
  --ion-color-contrast-rgb: var(--ion-color-${name}-contrast-rgb);
  --ion-color-shade: var(--ion-color-${name}-shade);
  --ion-color-tint: var(--ion-color-${name}-tint);
}
`;
  }

  @Listen('cssTextChange')
  onCssTextChange(ev: any) {
    this.cssText = ev.detail;
  }

  render() {
    return [
      <color-gen-variable-selector id="base" is-new="true" name={this.name} value={this.value}></color-gen-variable-selector>,
      <color-gen-css-text header={false} cssText={this.cssText}></color-gen-css-text>
    ];
  }

}

const DEFAULT_CSS_TEXT = `
:root {
  --ion-color-new: <code-color mode="md" value="#69bb7b"></code-color>;
  --ion-color-new-rgb: <code-color mode="md" value="#69bb7b" display="105,187,123"></code-color>;
  --ion-color-new-contrast: <code-color mode="md" value="#ffffff"></code-color>;
  --ion-color-new-contrast-rgb: <code-color mode="md" value="#ffffff" display="255,255,255"></code-color>;
  --ion-color-new-shade: <code-color mode="md" value="#5ca56c"></code-color>;
  --ion-color-new-tint: <code-color mode="md" value="#78c288"></code-color>;
}

.ion-color-new {
  --ion-color-base: var(--ion-color-new);
  --ion-color-base-rgb: var(--ion-color-new-rgb);
  --ion-color-contrast: var(--ion-color-new-contrast);
  --ion-color-contrast-rgb: var(--ion-color-new-contrast-rgb);
  --ion-color-shade: var(--ion-color-new-shade);
  --ion-color-tint: var(--ion-color-new-tint);
}
`.trim();
