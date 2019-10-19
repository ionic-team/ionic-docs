import { Component, Element, Event, EventEmitter, Listen, State, h } from '@stencil/core';
import { ColorVariable } from '../color-variables';
import { convertCssToColors, generateColor, updateCssText } from '../parse-css';
import { updateJsText } from '../parse-js';


@Component({
  tag: 'color-generator',
  styleUrl: 'color-generator.css',
  shadow: true
})
export class ColorGenerator {

  @Element() el: HTMLElement;
  @Event() demoMessage: EventEmitter;
  @State() colors: ColorVariable[] = [];
  @State() cssText = DEFAULT_CSS_TEXT;
  @State() jsText = DEFAULT_JS_TEXT;

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
    Object.keys(attrMap).forEach(key => {
      this.cssText = updateCssText(colorProperty + attrMap[key], this.cssText, genColor[key]);
    });

    Object.keys(attrMap).forEach(key => {
      this.jsText = updateJsText(colorProperty + attrMap[key], this.jsText, genColor[key]);
    });

    this.demoMessage.emit({ cssText: this.cssText });

    this.demoMessage.emit({ jsText: this.jsText });
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

  @Listen('jsTextChange')
  onJsTextChange(ev: any) {
    this.jsText = ev.detail;
    const colors = convertCssToColors(this.jsText);

    if (colors.length > 0) {
      this.colors = colors;
      this.demoMessage.emit({ jsText: this.jsText });
    }
  }

  componentWillLoad() {
    this.colors = convertCssToColors(this.cssText);
  }

  componentDidLoad() {
    this.demoMessage.emit({
      cssText: this.cssText,
      jsText: this.jsText
    });
  }

  render() {
    return [
      <color-gen-select-colors colors={this.colors}></color-gen-select-colors>,
      <color-gen-css-text cssText={this.cssText}></color-gen-css-text>,
      <color-gen-js-text jsText={this.jsText}></color-gen-js-text>
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

  --ion-color-secondary: #0cd1e8;
  --ion-color-secondary-rgb: 12,209,232;
  --ion-color-secondary-contrast: #ffffff;
  --ion-color-secondary-contrast-rgb: 255,255,255;
  --ion-color-secondary-shade: #0bb8cc;
  --ion-color-secondary-tint: #24d6ea;

  --ion-color-tertiary: #7044ff;
  --ion-color-tertiary-rgb: 112,68,255;
  --ion-color-tertiary-contrast: #ffffff;
  --ion-color-tertiary-contrast-rgb: 255,255,255;
  --ion-color-tertiary-shade: #633ce0;
  --ion-color-tertiary-tint: #7e57ff;

  --ion-color-success: #10dc60;
  --ion-color-success-rgb: 16,220,96;
  --ion-color-success-contrast: #ffffff;
  --ion-color-success-contrast-rgb: 255,255,255;
  --ion-color-success-shade: #0ec254;
  --ion-color-success-tint: #28e070;

  --ion-color-warning: #ffce00;
  --ion-color-warning-rgb: 255,206,0;
  --ion-color-warning-contrast: #ffffff;
  --ion-color-warning-contrast-rgb: 255,255,255;
  --ion-color-warning-shade: #e0b500;
  --ion-color-warning-tint: #ffd31a;

  --ion-color-danger: #f04141;
  --ion-color-danger-rgb: 245,61,61;
  --ion-color-danger-contrast: #ffffff;
  --ion-color-danger-contrast-rgb: 255,255,255;
  --ion-color-danger-shade: #d33939;
  --ion-color-danger-tint: #f25454;

  --ion-color-dark: #222428;
  --ion-color-dark-rgb: 34,34,34;
  --ion-color-dark-contrast: #ffffff;
  --ion-color-dark-contrast-rgb: 255,255,255;
  --ion-color-dark-shade: #1e2023;
  --ion-color-dark-tint: #383a3e;

  --ion-color-medium: #989aa2;
  --ion-color-medium-rgb: 152,154,162;
  --ion-color-medium-contrast: #ffffff;
  --ion-color-medium-contrast-rgb: 255,255,255;
  --ion-color-medium-shade: #86888f;
  --ion-color-medium-tint: #a2a4ab;

  --ion-color-light: #f4f5f8;
  --ion-color-light-rgb: 244,244,244;
  --ion-color-light-contrast: #000000;
  --ion-color-light-contrast-rgb: 0,0,0;
  --ion-color-light-shade: #d7d8da;
  --ion-color-light-tint: #f5f6f9;
}
`.trim();

const DEFAULT_JS_TEXT = `
let themes = [
  {
    name: 'default',
    styles: [
      { themeVariable: '--ion-color-primary', value: '#3880ff' },
      { themeVariable: '--ion-color-primary-rgb', value: '56,128,255' },
      { themeVariable: '--ion-color-primary-contrast', value: '#ffffff' },
      { themeVariable: '--ion-color-primary-contrast-rgb', value: '255,255,255' },
      { themeVariable: '--ion-color-primary-shade', value: '#3171e0' },
      { themeVariable: '--ion-color-primary-tint', value: '#4c8dff' },

      { themeVariable: '--ion-color-secondary', value: '#0cd1e8' },
      { themeVariable: '--ion-color-secondary-rgb', value: '12,209,232' },
      { themeVariable: '--ion-color-secondary-contrast', value: '#ffffff' },
      { themeVariable: '--ion-color-secondary-contrast-rgb', value: '255,255,255' },
      { themeVariable: '--ion-color-secondary-shade', value: '#0bb8cc' },
      { themeVariable: '--ion-color-secondary-tint', value: '#24d6ea' },

      { themeVariable: '--ion-color-tertiary', value: '#7044ff' },
      { themeVariable: '--ion-color-tertiary-rgb', value: '112,68,255' },
      { themeVariable: '--ion-color-tertiary-contrast', value: '#ffffff' },
      { themeVariable: '--ion-color-tertiary-contrast-rgb', value: '255,255,255' },
      { themeVariable: '--ion-color-tertiary-shade', value: '#633ce0' },
      { themeVariable: '--ion-color-tertiary-tint', value: '#7e57ff' },

      { themeVariable: '--ion-color-success', value: '#10dc60' },
      { themeVariable: '--ion-color-success-rgb', value: '16,220,96' },
      { themeVariable: '--ion-color-success-contrast', value: '#ffffff' },
      { themeVariable: '--ion-color-success-contrast-rgb', value: '255,255,255' },
      { themeVariable: '--ion-color-success-shade', value: '#0ec254' },
      { themeVariable: '--ion-color-success-tint', value: '#28e070' },

      { themeVariable: '--ion-color-warning', value: '#ffce00' },
      { themeVariable: '--ion-color-warning-rgb', value: '255,206,0' },
      { themeVariable: '--ion-color-warning-contrast', value: '#ffffff' },
      { themeVariable: '--ion-color-warning-contrast-rgb', value: '255,255,255' },
      { themeVariable: '--ion-color-warning-shade', value: '#e0b500' },
      { themeVariable: '--ion-color-warning-tint', value: '#ffd31a' },

      { themeVariable: '--ion-color-danger', value: '#f04141' },
      { themeVariable: '--ion-color-danger-rgb', value: '245,61,61' },
      { themeVariable: '--ion-color-danger-contrast', value: '#ffffff' },
      { themeVariable: '--ion-color-danger-contrast-rgb', value: '255,255,255' },
      { themeVariable: '--ion-color-danger-shade', value: '#d33939' },
      { themeVariable: '--ion-color-danger-tint', value: '#f25454' },

      { themeVariable: '--ion-color-dark', value: '#222428' },
      { themeVariable: '--ion-color-dark-rgb', value: '34,34,34' },
      { themeVariable: '--ion-color-dark-contrast', value: '#ffffff' },
      { themeVariable: '--ion-color-dark-contrast-rgb', value: '255,255,255' },
      { themeVariable: '--ion-color-dark-shade', value: '#1e2023' },
      { themeVariable: '--ion-color-dark-tint', value: '#383a3e' },

      { themeVariable: '--ion-color-medium', value: '#989aa2' },
      { themeVariable: '--ion-color-medium-rgb', value: '152,154,162' },
      { themeVariable: '--ion-color-medium-contrast', value: '#ffffff' },
      { themeVariable: '--ion-color-medium-contrast-rgb', value: '255,255,255' },
      { themeVariable: '--ion-color-medium-shade', value: '#86888f' },
      { themeVariable: '--ion-color-medium-tint', value: '#a2a4ab' },

      { themeVariable: '--ion-color-light', value: '#f4f5f8' },
      { themeVariable: '--ion-color-light-rgb', value: '244,244,244' },
      { themeVariable: '--ion-color-light-contrast', value: '#000000' },
      { themeVariable: '--ion-color-light-contrast-rgb', value: '0,0,0' },
      { themeVariable: '--ion-color-light-shade', value: '#d7d8da' },
      { themeVariable: '--ion-color-light-tint', value: '#f5f6f9' }
    ]
  }
];
`.trim();
