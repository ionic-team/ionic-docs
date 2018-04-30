
export interface ColorVariable {
  property: string;
  value?: string;
  rgb?: string;
  tint?: string;
  shade?: string;
  contrast?: string;
}


export const COLOR_VARIABLES: ColorVariable[] = [
  {
    property: '--ion-color-primary'
  },
  {
    property: '--ion-color-secondary'
  },
  {
    property: '--ion-color-tertiary'
  },
  {
    property: '--ion-color-success'
  },
  {
    property: '--ion-color-warning'
  },
  {
    property: '--ion-color-danger'
  },
  {
    property: '--ion-color-light'
  },
  {
    property: '--ion-color-medium'
  },
  {
    property: '--ion-color-dark'
  },
];
