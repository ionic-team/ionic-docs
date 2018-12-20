export interface Link {
  text: string;
  href: string;
}

export interface ReferenceKeys {
  Head: (item: any) => any;
  [key: string]: (item: any) => any;
}
