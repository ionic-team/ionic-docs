import { Component, Element, Prop, State } from '@stencil/core';

@Component({
  tag: 'ctrl-dropdown',
  styleUrl: './ctrl-dropdown.css'
})
export class CtrlDropdown {
  @Element() el: HTMLElement;
  @Prop() onSelect: Function = () => null;
  @Prop() renderer: Function = () => null;
  @Prop() setInitial: Function = items => items[0];
  @Prop() items: any[] = [];
  @Prop() autoClose: boolean = false;
  @State() isOpen = false;
  @State() selected: any;

  componentDidLoad() {
    this.selected = this.setInitial(this.items);
    if (this.autoClose) {
      this.el.addEventListener('mouseleave', this.close);
    }
  }

  select = (item) => {
    this.selected = item;
    this.onSelect(this.selected);
  }

  toggle = () => {
    this.isOpen = !this.isOpen;
  }

  close = () => {
    this.isOpen = false;
  }

  open = () => {
    this.isOpen = true;
  }

  render() {
    return this.renderer(this);
  }
}
