/**
 * Every field `generateColor` fills in. `ColorVariable` itself has them all optional
 * because it also describes colors parsed out of CSS, where any of them may be absent.
 */
export type GeneratedColorVariable = Required<Omit<ColorVariable, 'property'>>;

export interface ColorVariable {
  property?: string;
  value?: string;
  valueRgb?: string;
  contrast?: string;
  contrastRgb?: string;
  tint?: string;
  shade?: string;
}

export const COLOR_NAMES = [
  'Primary',
  'Secondary',
  'Tertiary',
  'Success',
  'Warning',
  'Danger',
  'Dark',
  'Medium',
  'Light',
];
