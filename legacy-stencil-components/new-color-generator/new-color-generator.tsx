import { Component, Element, Listen, State, h } from '@stencil/core';
import CodeColor from '@site/src/components/CodeColor';

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
  --ion-color-${name}: <CodeColor mode="md" value="${color.value}"></CodeColor>;
  --ion-color-${name}-rgb: <CodeColor mode="md" value="${color.value}" display="${color.valueRgb}"></CodeColor>;
  --ion-color-${name}-contrast: <CodeColor mode="md" value="${color.contrast}"></CodeColor>;
  --ion-color-${name}-contrast-rgb: <CodeColor mode="md" value="${color.contrast}" display="${color.contrastRgb}"></CodeColor>;
  --ion-color-${name}-shade: <CodeColor mode="md" value="${color.shade}"></CodeColor>;
  --ion-color-${name}-tint: <CodeColor mode="md" value="${color.tint}"></CodeColor>;
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
  --ion-color-new: <CodeColor mode="md" value="#69bb7b"></CodeColor>;
  --ion-color-new-rgb: <CodeColor mode="md" value="#69bb7b" display="105,187,123"></CodeColor>;
  --ion-color-new-contrast: <CodeColor mode="md" value="#ffffff"></CodeColor>;
  --ion-color-new-contrast-rgb: <CodeColor mode="md" value="#ffffff" display="255,255,255"></CodeColor>;
  --ion-color-new-shade: <CodeColor mode="md" value="#5ca56c"></CodeColor>;
  --ion-color-new-tint: <CodeColor mode="md" value="#78c288"></CodeColor>;
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
