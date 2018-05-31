import { Component, Event, EventEmitter } from '@stencil/core';

const components = [
  'Action Sheet',
  'Alert',
  'Badge',
  'Button',
  'Card',
  'Checkbox',
  'DateTime',
  'Fab',
  'Footer',
  'Grid',
  'Header',
  'Infinite Scroll',
  'Input',
  'List',
  'Loading',
  'Menu',
  'Modal',
  'Nav',
  'Popover',
  'Radio',
  'Range',
  'Refresher',
  'Searchbar',
  'Select',
  'Slides',
  'Spinner',
  'Tabs',
  'Toast',
  'Toggle',
  'Virtual Scroll'
];

@Component({
  tag: 'component-preview',
  styleUrl: 'component-preview.scss'
})
export class ComponentPreview {
  @Event() previewMessage: EventEmitter;

  observer = new IntersectionObserver(this.handleIntersection.bind(this), {
    root: document.querySelector('docs-content'),
    rootMargin: '0px 0px -50% 0px',
    threshold: 0.5
  });

  handleIntersection(entries) {
    entries
      .filter(entry => entry.intersectionRatio >= 0.5)
      .forEach(this.notifyPreview);
  }

  notifyPreview = (active) => {
    this.previewMessage.emit({
      active: active.target.textContent
    });
  }

  observeElement = (el) => {
    if (el instanceof HTMLElement) {
      this.observer.observe(el);
    }
  }

  componentDidUnload() {
    this.observer.disconnect();
  }

  render() {
    return components.map(name =>
      <h2 class="component-preview-title" ref={this.observeElement}>{name}</h2>
    );
  }
}
