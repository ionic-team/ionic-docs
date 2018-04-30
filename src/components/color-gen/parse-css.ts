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


function parseColorVar(colorProperty: string, cssText: string, colors: ColorVariable[]) {
  let splt = cssText.split(colorProperty);
  if (splt.length < 2) {
    return;
  }

  splt = splt[1].trim().split(':');
  if (splt.length < 2) {
    return;
  }

  colors.push({
    property: colorProperty,
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
  '--ion-color-primary',
  '--ion-color-secondary',
  '--ion-color-tertiary',
  '--ion-color-success',
  '--ion-color-warning',
  '--ion-color-danger',
  '--ion-color-light',
  '--ion-color-medium',
  '--ion-color-dark',
];
