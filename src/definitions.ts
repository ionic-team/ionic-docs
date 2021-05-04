export interface Page {
  title: string | null;
  body: string | null;
  [key: string]: any;
}

export interface Link {
  text: string;
  href: string;
}

export interface ReferenceKeys {
  Head: (item: any) => any;
  [key: string]: (item: any) => any;
}

export type MenuItem = [string, string];

export interface MenuItems {
  [key: string]: string | MenuItems | MenuItem[];
}
