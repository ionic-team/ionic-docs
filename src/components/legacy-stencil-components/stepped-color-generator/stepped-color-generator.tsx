import { Component, Element, Listen, State, h } from '@stencil/core';
import CodeColor from '@site/src/components/CodeColor';

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
  --ion-background-color: <CodeColor mode="md" value="${background}"></CodeColor>;
  --ion-background-color-rgb: <CodeColor mode="md" value="${background}" display="${backgroundColor.toList()}"></CodeColor>;

  --ion-text-color: <CodeColor mode="md" value="${text}"></CodeColor>;
  --ion-text-color-rgb: <CodeColor mode="md" value="${text}" display="${textColor.toList()}"></CodeColor>;

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
  --ion-background-color: <CodeColor mode="md" value="#ffffff"></CodeColor>;
  --ion-background-color-rgb: <CodeColor mode="md" value="#ffffff" display="255,255,255"></CodeColor>;

  --ion-text-color: <CodeColor mode="md" value="#000000"></CodeColor>;
  --ion-text-color-rgb: <CodeColor mode="md" value="#000000" display="0,0,0"></CodeColor>;

  --ion-color-step-50: <CodeColor mode="md" value="#f2f2f2"></CodeColor>;
  --ion-color-step-100: <CodeColor mode="md" value="#e6e6e6"></CodeColor>;
  --ion-color-step-150: <CodeColor mode="md" value="#d9d9d9"></CodeColor>;
  --ion-color-step-200: <CodeColor mode="md" value="#cccccc"></CodeColor>;
  --ion-color-step-250: <CodeColor mode="md" value="#bfbfbf"></CodeColor>;
  --ion-color-step-300: <CodeColor mode="md" value="#b3b3b3"></CodeColor>;
  --ion-color-step-350: <CodeColor mode="md" value="#a6a6a6"></CodeColor>;
  --ion-color-step-400: <CodeColor mode="md" value="#999999"></CodeColor>;
  --ion-color-step-450: <CodeColor mode="md" value="#8c8c8c"></CodeColor>;
  --ion-color-step-500: <CodeColor mode="md" value="#808080"></CodeColor>;
  --ion-color-step-550: <CodeColor mode="md" value="#737373"></CodeColor>;
  --ion-color-step-600: <CodeColor mode="md" value="#666666"></CodeColor>;
  --ion-color-step-650: <CodeColor mode="md" value="#595959"></CodeColor>;
  --ion-color-step-700: <CodeColor mode="md" value="#4d4d4d"></CodeColor>;
  --ion-color-step-750: <CodeColor mode="md" value="#404040"></CodeColor>;
  --ion-color-step-800: <CodeColor mode="md" value="#333333"></CodeColor>;
  --ion-color-step-850: <CodeColor mode="md" value="#262626"></CodeColor>;
  --ion-color-step-900: <CodeColor mode="md" value="#191919"></CodeColor>;
  --ion-color-step-950: <CodeColor mode="md" value="#0d0d0d"></CodeColor>;
}
`.trim();
