import { Component, Element, Prop, State } from '@stencil/core';

@Component({
  tag: 'ctrl-dropdown',
  styleUrl: './ctrl-dropdown.scss'
})
export class CtrlDropdown {
  @Element() el: HTMLElement;
  @Prop() onSelect: (selected: any) => void = () => null;
  @Prop() renderer: (component: any) => any = () => null;
  @Prop() setInitial: (items: any[]) => any = items => items[0];
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

  hostData() {
    return {
      'class': { 'is-open': this.isOpen }
    };
  }

  render() {
    return this.renderer(this);
  }
}
