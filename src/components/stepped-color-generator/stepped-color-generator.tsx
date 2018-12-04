import { Component, Element, Listen, State } from '@stencil/core';
// import { convertCssToColors, generateColor, updateCssText } from '../color-gen/parse-css';
import { generateSteppedColors } from './parse-css';
import { Color } from '../color-gen/color';


@Component({
  tag: 'stepped-color-generator',
  styleUrl: 'stepped-color-generator.css'
})
export class ColorGenerator {
  @State() cssText = DEFAULT_CSS_TEXT;

  @State() backgroundColor = '#ffffff';
  @State() textColor = '#000000';

  @Element() el: HTMLElement;

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
  --ion-background-color: <code-color value="${background}"></code-color>;
  --ion-background-color-rgb: <code-color value="${background}" display="${backgroundColor.toList()}"></code-color>;

  --ion-text-color: <code-color value="${text}"></code-color>;
  --ion-text-color-rgb: <code-color value="${text}" display="${textColor.toList()}"></code-color>;

${steppedColors}
}`;
  }

  @Listen('cssTextChange')
  onCssTextChange(ev: any) {
    this.cssText = ev.detail;
  }

  render() {
    return [
      // <div class="stepped-color-header">
      //   <h3>Generate Stepped Color Variables</h3>
      //   <p>Create a custom background and text color theme for your app. Update the background or text color’s hex values below, then copy and paste the generated code directly into your Ionic project.</p>
      // </div>,
      <div class="stepped-color-pickers">
        <color-gen-variable-selector id="background" name="Background" value={ this.backgroundColor }></color-gen-variable-selector>
        <color-gen-variable-selector id="text" name="Text" value={ this.textColor }></color-gen-variable-selector>
      </div>,
      <color-gen-css-text cssText={this.cssText}></color-gen-css-text>
    ];
  }

}


const DEFAULT_CSS_TEXT = `
:root {
  --ion-background-color: <code-color value="#ffffff"></code-color>;
  --ion-background-color-rgb: <code-color value="#ffffff" display="255,255,255"></code-color>;

  --ion-text-color: <code-color value="#000000"></code-color>;
  --ion-text-color-rgb: <code-color value="#000000" display="0,0,0"></code-color>;

  --ion-color-step-50: <code-color value="#f2f2f2"></code-color>;
  --ion-color-step-100: <code-color value="#e6e6e6"></code-color>;
  --ion-color-step-150: <code-color value="#d9d9d9"></code-color>;
  --ion-color-step-200: <code-color value="#cccccc"></code-color>;
  --ion-color-step-250: <code-color value="#bfbfbf"></code-color>;
  --ion-color-step-300: <code-color value="#b3b3b3"></code-color>;
  --ion-color-step-350: <code-color value="#a6a6a6"></code-color>;
  --ion-color-step-400: <code-color value="#999999"></code-color>;
  --ion-color-step-450: <code-color value="#8c8c8c"></code-color>;
  --ion-color-step-500: <code-color value="#808080"></code-color>;
  --ion-color-step-550: <code-color value="#737373"></code-color>;
  --ion-color-step-600: <code-color value="#666666"></code-color>;
  --ion-color-step-650: <code-color value="#595959"></code-color>;
  --ion-color-step-700: <code-color value="#4d4d4d"></code-color>;
  --ion-color-step-750: <code-color value="#404040"></code-color>;
  --ion-color-step-800: <code-color value="#333333"></code-color>;
  --ion-color-step-850: <code-color value="#262626"></code-color>;
  --ion-color-step-900: <code-color value="#191919"></code-color>;
  --ion-color-step-950: <code-color value="#0d0d0d"></code-color>;
}
`.trim();
