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
  @Prop() autoClose = false;
  @Prop() autoCloseDelay = 300;
  @State() isOpen = false;
  @State() selected: any;

  private closeTimeout: any;

  componentWillLoad() {
    this.selected = this.setInitial(this.items);
  }

  componentDidLoad() {
    if (this.autoClose) {
      this.el.addEventListener('mouseleave', this.scheduleClose);
      this.el.addEventListener('mouseenter', this.cancelClose);
    }
  }

  cancelClose = () => {
    clearTimeout(this.closeTimeout);
  }

  scheduleClose = () => {
    this.closeTimeout = setTimeout(
      this.close,
      this.autoCloseDelay
    );
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
