import { Component, Element, Event, EventEmitter, Listen, State, h } from '@stencil/core';

import { ColorVariable } from '../color-variables';
import { convertCssToColors, generateColor, updateCssText } from '../parse-css';

@Component({
  tag: 'color-generator',
  styleUrl: 'color-generator.css',
  shadow: true
})
export class ColorGenerator {

  @Element() el!: HTMLElement;
  @Event() demoMessage!: EventEmitter;
  @State() colors: ColorVariable[] = [];
  @State() cssText = DEFAULT_CSS_TEXT;

  @Listen('colorChange')
  onColorChange(ev: any) {
    const colorProperty: string = ev.detail.property;
    const colorValue: string = ev.detail.value;
    const colorIndex = this.colors.findIndex(o => o.property === colorProperty);
    const color = this.colors[colorIndex];
    const genColor = generateColor(color.name, colorProperty, colorValue);

    this.colors[colorIndex] = genColor;
    this.colors = [...this.colors];

    const attrMap = {
      value: '',
      valueRgb: '-rgb',
      contrast: '-contrast',
      contrastRgb: '-contrast-rgb',
      shade: '-shade',
      tint: '-tint',
    };
    const keys = Object.keys(attrMap) as any as (keyof typeof attrMap)[];
    for (const key of keys) {
      this.cssText = updateCssText(colorProperty + attrMap[key], this.cssText, genColor[key]);
    }

    this.demoMessage.emit({ cssText: this.cssText });
  }

  @Listen('cssTextChange')
  onCssTextChange(ev: any) {
    this.cssText = ev.detail;
    const colors = convertCssToColors(this.cssText);

    if (colors.length > 0) {
      this.colors = colors;
      this.demoMessage.emit({ cssText: this.cssText });
    }
  }

  componentWillLoad() {
    this.colors = convertCssToColors(this.cssText);
  }

  componentDidLoad() {
    this.demoMessage.emit({
      cssText: this.cssText
    });
  }

  render() {
    return [
      <color-gen-select-colors colors={this.colors}></color-gen-select-colors>,
      <color-gen-css-text cssText={this.cssText}></color-gen-css-text>
    ];
  }

}

const DEFAULT_CSS_TEXT = `
:root {
  --ion-color-primary: #3880ff;
  --ion-color-primary-rgb: 56,128,255;
  --ion-color-primary-contrast: #ffffff;
  --ion-color-primary-contrast-rgb: 255,255,255;
  --ion-color-primary-shade: #3171e0;
  --ion-color-primary-tint: #4c8dff;

  --ion-color-secondary: #3dc2ff;
  --ion-color-secondary-rgb: 61,194,255;
  --ion-color-secondary-contrast: #ffffff;
  --ion-color-secondary-contrast-rgb: 255,255,255;
  --ion-color-secondary-shade: #36abe0;
  --ion-color-secondary-tint: #50c8ff;

  --ion-color-tertiary: #5260ff;
  --ion-color-tertiary-rgb: 82,96,255;
  --ion-color-tertiary-contrast: #ffffff;
  --ion-color-tertiary-contrast-rgb: 255,255,255;
  --ion-color-tertiary-shade: #4854e0;
  --ion-color-tertiary-tint: #6370ff;

  --ion-color-success: #2dd36f;
  --ion-color-success-rgb: 45,211,111;
  --ion-color-success-contrast: #ffffff;
  --ion-color-success-contrast-rgb: 255,255,255;
  --ion-color-success-shade: #28ba62;
  --ion-color-success-tint: #42d77d;

  --ion-color-warning: #ffc409;
  --ion-color-warning-rgb: 255,196,9;
  --ion-color-warning-contrast: #000000;
  --ion-color-warning-contrast-rgb: 0,0,0;
  --ion-color-warning-shade: #e0ac08;
  --ion-color-warning-tint: #ffca22;

  --ion-color-danger: #eb445a;
  --ion-color-danger-rgb: 235,68,90;
  --ion-color-danger-contrast: #ffffff;
  --ion-color-danger-contrast-rgb: 255,255,255;
  --ion-color-danger-shade: #cf3c4f;
  --ion-color-danger-tint: #ed576b;

  --ion-color-dark: #222428;
  --ion-color-dark-rgb: 34,36,40;
  --ion-color-dark-contrast: #ffffff;
  --ion-color-dark-contrast-rgb: 255,255,255;
  --ion-color-dark-shade: #1e2023;
  --ion-color-dark-tint: #383a3e;

  --ion-color-medium: #92949c;
  --ion-color-medium-rgb: 146,148,156;
  --ion-color-medium-contrast: #ffffff;
  --ion-color-medium-contrast-rgb: 255,255,255;
  --ion-color-medium-shade: #808289;
  --ion-color-medium-tint: #9d9fa6;

  --ion-color-light: #f4f5f8;
  --ion-color-light-rgb: 244,245,248;
  --ion-color-light-contrast: #000000;
  --ion-color-light-contrast-rgb: 0,0,0;
  --ion-color-light-shade: #d7d8da;
  --ion-color-light-tint: #f5f6f9;
}
`.trim();
