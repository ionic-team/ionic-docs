import { Component, Element, Listen, Prop, State, h } from '@stencil/core';

@Component({
  tag: 'docs-tabs',
  styleUrl: 'tabs.css'
})
export class DocsTabs {
  @Prop() listenFor?: string;
  @State() selected: HTMLDocsTabElement | null = null;
  @State() tabs: HTMLDocsTabElement[] = [];
  @Element() el!: HTMLDocsTabElement;

  // if an event with a name that matches the 'listenFor' property is heard,
  // check the tabs to see if the event has a value that matches a tab title
  // The original purpose for this is the Framework Selection dropdown
  @Listen('local-storage', { target: 'window' })
  listenForFrameworkSelection(event: any) {
    if (typeof this.listenFor !== 'undefined' && event.detail.key === this.listenFor) {
      this.tabs.forEach(tab => {
        if (tab.tab.toLowerCase() === event.detail.value.toLowerCase()) {
          this.select(tab);
        }
      });
    }
  }

  componentDidLoad() {
    this.tabs = Array.from(this.el.querySelectorAll('docs-tab'));
    this.select(this.tabs.find(t => t.hasAttribute('selected')) || this.tabs[0]);
  }

  select(tab: HTMLDocsTabElement) {
    if (this.selected !== null) {
      this.selected.removeAttribute('selected');
    }

    this.selected = tab;
    this.selected.setAttribute('selected', '');
  }

  toTabButton = (tab: HTMLDocsTabElement) => {
    const label = tab.getAttribute('tab');
    const isSelected = this.selected === tab;
    const buttonClass = {
      'Tabs-button': true,
      'is-selected': isSelected
    };

    return (
      <button
        role="tab"
        aria-selected={isSelected ? 'true' : 'false'}
        onClick={() => this.select(tab)}
        class={buttonClass}
      >
        {label}
      </button>
    );
  }

  hostData() {
    return {
      role: 'tablist',
      class: {
        'Tabs': true
      }
    };
  }

  render() {
    return [
      <header class="Tabs-header">
        {this.tabs.map(this.toTabButton)}
      </header>,
      <slot/>
    ];
  }
}
