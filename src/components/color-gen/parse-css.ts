import { ColorVariable } from './color-variables';


export function convertCssToColors(cssText: string) {
  cssText = cssText
              .replace(/\;/g, ' ')
              .replace(/\{/g, ' ')
              .replace(/\}/g, ' ')
              .replace(/\s/g, ' ');

  const colors: ColorVariable[] = [];

  COLOR_VARS.forEach(colorVar => {
    parseColorVar(colorVar, cssText, colors);
  });

  return colors;
}


function parseColorVar(colorAttr: any, cssText: string, colors: ColorVariable[]) {
  let splt = cssText.split(colorAttr.property);
  if (splt.length < 2) {
    return;
  }

  splt = splt[1].trim().split(':');
  if (splt.length < 2) {
    return;
  }

  colors.push({
    name: colorAttr.name,
    property: colorAttr.property,
    value: splt[1].trim()
  });
}


export function updateCssText(cssText: string, colorProperty: string, newColorValue: string) {
  const startIndex = cssText.indexOf(colorProperty);

  const valueSplt = cssText.substring(startIndex + colorProperty.length);

  const bracketIndex = valueSplt.indexOf('}');
  const semiColonIndex = valueSplt.indexOf(';');
  const endIndex = startIndex + colorProperty.length + Math.min(bracketIndex, semiColonIndex);

  const oldKeyValue = cssText.substring(startIndex, endIndex);
  const newKeyValue = `${colorProperty}: ${newColorValue}`;

  cssText = cssText.replace(oldKeyValue, newKeyValue);

  return cssText;
}


const COLOR_VARS = [
  {
    name: 'Primary',
    property:'--ion-color-primary',
  },
  {
    name: 'Secondary',
    property:'--ion-color-secondary',
  },
  {
    name: 'Tertiary',
    property:'--ion-color-tertiary',
  },
  {
    name: 'Success',
    property:'--ion-color-success',
  },
  {
    name: 'Warning',
    property:'--ion-color-warning',
  },
  {
    name: 'Danger',
    property:'--ion-color-danger',
  },
  {
    name: 'Dark',
    property:'--ion-color-dark',
  },
  {
    name: 'Medium',
    property:'--ion-color-medium',
  },
  {
    name: 'Light',
    property:'--ion-color-light',
  }
];
