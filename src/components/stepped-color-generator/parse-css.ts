import { Color } from '../color-gen/color';

export const generateSteppedColors = (background = '#ffffff', text = '#000000') => {
  const color = new Color(background);
  let steps = '';

  for (let i = 5; i < 100; i = i + 5) {
    const step = i + '0';
    const amount = i / 100.0;

    steps += `  --ion-color-step-${step}: <code-color mode="md" value="${color.mix(text, amount).hex}"></code-color>;`;
    if (i < 95) {
      steps += '\n';
    }
  }

  return steps;
};
