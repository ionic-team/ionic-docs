import { MenuItems } from '../../definitions';

export class NavItem {
  constructor(readonly navItems: MenuItems, readonly defaultUrl?: string) {
  }
}
