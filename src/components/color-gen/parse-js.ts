import { COLOR_VARS, ColorVariable } from './color-variables';
import { getCssKeyVal, parseColorVar } from './parse-css';

export function convertCssToColors(cssText: string) {
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
    Object.keys(attrMap).forEach(key => {
      color[key] = parseColorVar(colorVar.property + attrMap[key], cssText);
    });

    colors.push(color);
  });

  return colors;
}

export function updateJsText(colorAttr: string, cssText: string, newColorValue: string) {
  const oldKeyValue = getCssKeyVal(colorAttr, cssText);
  const newKeyValue = `${colorAttr}: ${newColorValue}`;

  cssText = cssText.replace(oldKeyValue, newKeyValue);

  return cssText;
}
