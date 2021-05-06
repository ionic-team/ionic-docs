import { Color, RGB } from './color';
import { COLOR_VARS, ColorVariable } from './color-variables';

export const generateColor = (name: string, property: string, value: string): ColorVariable => {
  const color = new Color(value);
  const contrast = color.contrast();
  const tint = color.tint();
  const shade = color.shade();

  return {
    name,
    property,
    value,
    valueRgb: rgbToString(color.rgb),
    contrast: contrast.hex,
    contrastRgb: rgbToString(contrast.rgb),
    tint: tint.hex,
    shade: shade.hex,
  };
};

export const convertCssToColors = (cssText: string) => {
  const colors: ColorVariable[] = [];

  COLOR_VARS.forEach(colorVar => {
    const attrMap = {
      value: '',
      valueRgb: '-rgb',
      contrast: '-contrast',
      contrastRgb: '-contrast-rgb',
      shade: '-shade',
      tint: '-tint',
    };

    const color: ColorVariable = { ...colorVar };
    const keys = Object.keys(attrMap) as any as (keyof typeof attrMap)[];
    for (const key of keys) {
      color[key] = parseColorVar(colorVar.property + attrMap[key], cssText);
    }

    colors.push(color);
  });

  return colors;
};

export const updateCssText = (colorAttr: string, cssText: string, newColorValue?: string) => {
  if (typeof newColorValue === 'undefined') {
    return cssText;
  }

  const oldKeyValue = getCssKeyVal(colorAttr, cssText);
  const newKeyValue = `${colorAttr}: ${newColorValue}`;

  cssText = cssText.replace(oldKeyValue, newKeyValue);

  return cssText;
};

const parseColorVar = (colorAttr: any, cssText: string) => {
  const attrKeyVal = getCssKeyVal(colorAttr, cssText);
  return attrKeyVal.trim().split(':')[1].trim();
};

const getCssKeyVal = (colorAttr: any, cssText: string) => {
  const startIndex = cssText.indexOf(colorAttr);
  const valueSplt = cssText.substring(startIndex + colorAttr.length);
  const bracketIndex = valueSplt.indexOf('}');
  const semiColonIndex = valueSplt.indexOf(';');
  const endIndex = startIndex + colorAttr.length + Math.min(bracketIndex, semiColonIndex);

  return cssText.substring(startIndex, endIndex);
};

const rgbToString = (c: RGB): string => {
  return `${c.r},${c.g},${c.b}`;
};
