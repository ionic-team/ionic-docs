
export interface ColorVariable {
  property: string;
  name: string;
  value?: string;
  valueRgb?: string;
  contrast?: string;
  contrastRgb?: string;
  tint?: string;
  shade?: string;
}

export const COLOR_VARS: ColorVariable[] = [
  {
    name: 'Primary',
    property: '--ion-color-primary'
  },
  {
    name: 'Secondary',
    property: '--ion-color-secondary'
  },
  {
    name: 'Tertiary',
    property: '--ion-color-tertiary'
  },
  {
    name: 'Success',
    property: '--ion-color-success'
  },
  {
    name: 'Warning',
    property: '--ion-color-warning'
  },
  {
    name: 'Danger',
    property: '--ion-color-danger'
  },
  {
    name: 'Dark',
    property: '--ion-color-dark'
  },
  {
    name: 'Medium',
    property: '--ion-color-medium'
  },
  {
    name: 'Light',
    property: '--ion-color-light'
  }
];
