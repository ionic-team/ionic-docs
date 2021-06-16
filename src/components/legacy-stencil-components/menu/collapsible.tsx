import { Component, Element, Prop, State, h } from '@stencil/core';

import { DownArrow } from '../../icons';

@Component({
  tag: 'docs-menu-collapsible',
  styleUrl: 'collapsible.css'
})
export class DocsMenuCollapsible {
  @Prop() heading!: string;
  @State() isOpen = true; // default open
  @Element() el!: HTMLElement;

  hostData() {
    return {
      class: 'docs-menu-collapsible--status-open',
      role: 'button',
      tabindex: '0',
      'aria-label': 'Collapsible Menu'
    };
  }

  toggle() {
    this.isOpen = !this.isOpen;
    removeClassThatStartWith(this.el, 'docs-menu-collapsible--status-');
    this.el.classList.add(
      `docs-menu-collapsible--status-${this.isOpen ? 'open' : 'closed'}`
    );
  }

  render() {
    return [
      <a
        onClick={() => this.toggle()}
        class={`docs-menu-collapsible__title`}
      >
        {this.heading}
        <DownArrow/>
      </a>,
      <div class="docs-menu-collapsible__contents">
        <slot/>
      </div>
    ];
  }
}

const removeClassThatStartWith = (el: HTMLElement, classStart: string) => {
  el.classList.forEach(className => {
    if (className.startsWith(classStart)) {
      el.classList.remove(className);
    }
  });
};
