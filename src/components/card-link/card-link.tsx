import { Component, Element, Prop, Watch } from '@stencil/core';

@Component({
  tag: 'card-link',
  styleUrl: 'card-link.scss'
})
export class CardLink {

  @Element() el: Element;

  @Prop() title: string;

  @Watch('title')
  updateTitle(newTitle: string, oldTitle: string) {
    if (!newTitle) {
      return;
    }
    this.el.classList.remove(oldTitle.toLocaleLowerCase().replace(' ', '-'));
    this.el.classList.add(newTitle.toLocaleLowerCase().replace(' ', '-'));
  }

  render() {

    return [
      this.title && <strong>{this.title}</strong>,
      <span><slot/></span>
    ];
  }
}
