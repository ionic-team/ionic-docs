import { Component, Element, Listen, State, Event, EventEmitter } from '@stencil/core';
import { ColorVariable } from '../color-variables';
import { generateColor, convertCssToColors, updateCssText } from '../parse-css';


@Component({
  tag: 'color-generator',
  styleUrl: 'color-generator.css',
  shadow: true
})
export class ColorGenerator {

  @Element() el: HTMLElement;
  @State() colors: ColorVariable[] = [];
  @State() cssText = DEFAULT_CSS_TEXT;

  componentWillLoad() {
    this.colors = convertCssToColors(this.cssText);
  }

  @Event() updatePreview: EventEmitter;

  @Listen('colorChange')
  onColorChange(ev: any) {
    const colorProperty: string = ev.detail.property;
    const colorValue: string = ev.detail.value;

    if (colorProperty.includes('-shade') || colorProperty.includes('-tint')) {

      this.cssText = updateCssText(this.cssText, colorProperty, colorValue);

    } else {

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
      Object.keys(attrMap).forEach(key => {
        this.cssText = updateCssText(this.cssText, colorProperty + attrMap[key], genColor[key]);
      });

    }

    this.updatePreview.emit({cssText: this.cssText});
  }

  @Listen('cssTextChange')
  onCssTextChange(ev: any) {
    this.cssText = ev.detail;
    this.colors = convertCssToColors(this.cssText);
    this.updatePreview.emit({cssText: this.cssText});
  }

  componentDidLoad () {
    this.updatePreview.emit({
      url: '/docs/theming/color-gen/demo/index.html',
      cssText: this.cssText
    });
  }

  render () {
    return [
      <color-gen-select-colors colors={this.colors} />,
      <color-gen-css-text cssText={this.cssText}/>
    ];
  }

}


const DEFAULT_CSS_TEXT = `
/** Ionic CSS Variables **/
:root {

  /** primary **/
  --ion-color-primary: #3880FF;
  --ion-color-primary-rgb: 56,128,255;
  --ion-color-primary-contrast: #ffffff;
  --ion-color-primary-contrast-rgb: 255,255,255;
  --ion-color-primary-shade: #3171e0;
  --ion-color-primary-tint: #4c8dff;

  /** secondary **/
  --ion-color-secondary: #0CD1E8;
  --ion-color-secondary-rgb: 12,209,232;
  --ion-color-secondary-contrast: #000000;
  --ion-color-secondary-contrast-rgb: 0,0,0;
  --ion-color-secondary-shade: #0bb8cc;
  --ion-color-secondary-tint: #0bb8cc;

  /** tertiary **/
  --ion-color-tertiary: #7044FF;
  --ion-color-tertiary-rgb: 112,68,255;
  --ion-color-tertiary-contrast: #ffffff;
  --ion-color-tertiary-contrast-rgb: 255,255,255;
  --ion-color-tertiary-shade: #633ce0;
  --ion-color-tertiary-tint: #7e57ff;

  /** success **/
  --ion-color-success: #10DC60;
  --ion-color-success-rgb: 16,220,96;
  --ion-color-success-contrast: #000000;
  --ion-color-success-contrast-rgb: 0,0,0;
  --ion-color-success-shade: #0ec254;
  --ion-color-success-tint: #28e070;

  /** warning **/
  --ion-color-warning: #FFCE00;
  --ion-color-warning-rgb: 255,206,0;
  --ion-color-warning-contrast: #000000;
  --ion-color-warning-contrast-rgb: 0,0,0;
  --ion-color-warning-shade: #e0b500;
  --ion-color-warning-tint: #ffd31a;

  /** danger **/
  --ion-color-danger: #F04141;
  --ion-color-danger-rgb: 245,61,61;
  --ion-color-danger-contrast: #ffffff;
  --ion-color-danger-contrast-rgb: 255,255,255;
  --ion-color-danger-shade: #d33939;
  --ion-color-danger-tint: #f25454;

  /** dark **/
  --ion-color-dark: #222428;
  --ion-color-dark-rgb: 34,34,34;
  --ion-color-dark-contrast: #ffffff;
  --ion-color-dark-contrast-rgb: 255,255,255;
  --ion-color-dark-shade: #1e2023;
  --ion-color-dark-tint: #383a3e;

  /** medium **/
  --ion-color-medium: #989AA2;
  --ion-color-medium-rgb: 152,154,162;
  --ion-color-medium-contrast: #000000;
  --ion-color-medium-contrast-rgb: 0,0,0;
  --ion-color-medium-shade: #86888f;
  --ion-color-medium-tint: #a2a4ab;

  /** light **/
  --ion-color-light: #F4F5F8;
  --ion-color-light-rgb: 244,244,244;
  --ion-color-light-contrast: #000000;
  --ion-color-light-contrast-rgb: 0,0,0;
  --ion-color-light-shade: #d7d8da;
  --ion-color-light-tint: #f5f6f9;

}
`.trim();
