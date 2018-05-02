import { COLOR_VARS, ColorVariable } from './color-variables';
import { Color, RGB } from './color';

export function generateColor(name: string, property: string, value: string):ColorVariable {
  const color = new Color(value);
  const contrast = color.contrast();
  const tint = color.tint();
  const shade = color.shade();

  return {
    name: name,
    property: property,
    value: color.hex,
    valueRgb: rgbToString(color.rgb),
    contrast: contrast.hex,
    contrastRgb: rgbToString(contrast.rgb),
    tint: tint.hex,
    shade: shade.hex,
  }
}

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

  const color = generateColor(colorAttr.name, colorAttr.property, splt[1].trim())
  colors.push(color);
}

function rgbToString(c: RGB):string {
  return `${c.r},${c.g},${c.b}`
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
