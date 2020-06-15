import { Component, Element, Listen, State, h } from '@stencil/core';

import { Color } from '../color-gen/color';

import { generateSteppedColors } from './parse-css';

@Component({
  tag: 'stepped-color-generator',
  styleUrl: 'stepped-color-generator.css'
})
export class ColorGenerator {
  @State() cssText = DEFAULT_CSS_TEXT;

  @State() backgroundColor = '#ffffff';
  @State() textColor = '#000000';

  @Element() el!: HTMLElement;

  @Listen('colorChange')
  onColorChange() {
    const background = (this.el.querySelector('#background') as any).value;
    const text = (this.el.querySelector('#text') as any).value;

    this.backgroundColor = background;
    this.textColor = text;

    const backgroundColor = new Color(background);
    const textColor = new Color(text);

    const steppedColors = generateSteppedColors(background, text);

    this.cssText =
`:root {
  --ion-background-color: <code-color mode="md" value="${background}"></code-color>;
  --ion-background-color-rgb: <code-color mode="md" value="${background}" display="${backgroundColor.toList()}"></code-color>;

  --ion-text-color: <code-color mode="md" value="${text}"></code-color>;
  --ion-text-color-rgb: <code-color mode="md" value="${text}" display="${textColor.toList()}"></code-color>;

${steppedColors}
}`;
  }

  @Listen('cssTextChange')
  onCssTextChange(ev: any) {
    this.cssText = ev.detail;
  }

  render() {
    return [
      <div class="stepped-color-pickers">
        <color-gen-variable-selector id="background" name="Background" value={this.backgroundColor}></color-gen-variable-selector>
        <color-gen-variable-selector id="text" name="Text" value={this.textColor}></color-gen-variable-selector>
      </div>,
      <color-gen-css-text cssText={this.cssText}></color-gen-css-text>
    ];
  }

}

const DEFAULT_CSS_TEXT = `
:root {
  --ion-background-color: <code-color mode="md" value="#ffffff"></code-color>;
  --ion-background-color-rgb: <code-color mode="md" value="#ffffff" display="255,255,255"></code-color>;

  --ion-text-color: <code-color mode="md" value="#000000"></code-color>;
  --ion-text-color-rgb: <code-color mode="md" value="#000000" display="0,0,0"></code-color>;

  --ion-color-step-50: <code-color mode="md" value="#f2f2f2"></code-color>;
  --ion-color-step-100: <code-color mode="md" value="#e6e6e6"></code-color>;
  --ion-color-step-150: <code-color mode="md" value="#d9d9d9"></code-color>;
  --ion-color-step-200: <code-color mode="md" value="#cccccc"></code-color>;
  --ion-color-step-250: <code-color mode="md" value="#bfbfbf"></code-color>;
  --ion-color-step-300: <code-color mode="md" value="#b3b3b3"></code-color>;
  --ion-color-step-350: <code-color mode="md" value="#a6a6a6"></code-color>;
  --ion-color-step-400: <code-color mode="md" value="#999999"></code-color>;
  --ion-color-step-450: <code-color mode="md" value="#8c8c8c"></code-color>;
  --ion-color-step-500: <code-color mode="md" value="#808080"></code-color>;
  --ion-color-step-550: <code-color mode="md" value="#737373"></code-color>;
  --ion-color-step-600: <code-color mode="md" value="#666666"></code-color>;
  --ion-color-step-650: <code-color mode="md" value="#595959"></code-color>;
  --ion-color-step-700: <code-color mode="md" value="#4d4d4d"></code-color>;
  --ion-color-step-750: <code-color mode="md" value="#404040"></code-color>;
  --ion-color-step-800: <code-color mode="md" value="#333333"></code-color>;
  --ion-color-step-850: <code-color mode="md" value="#262626"></code-color>;
  --ion-color-step-900: <code-color mode="md" value="#191919"></code-color>;
  --ion-color-step-950: <code-color mode="md" value="#0d0d0d"></code-color>;
}
`.trim();
