import { Component, Element, Event, EventEmitter, Prop } from '@stencil/core';

@Component({
  tag: 'component-preview',
  styleUrl: 'component-preview.scss'
})
export class ComponentPreview {
  @Element() el: HTMLElement;
  @Prop({ context: 'document' }) doc!: Document;
  @Event() previewMessage: EventEmitter;
  observer: any;

  componentWillLoad() {
    this.observer = new IntersectionObserver(this.handleIntersection.bind(this), {
      root: this.doc.querySelector('docs-content'),
      rootMargin: '0px 0px -75% 0px',
      threshold: 0
    });
  }

  handleIntersection(entries) {
    entries
      .filter(entry => entry.isIntersecting)
      .map(entry => entry.target)
      .forEach(this.handleActive);
  }

  handleActive = (active) => {
    window.history.replaceState(null, null, `#${active.id}`);
    this.previewMessage.emit({
      active: active.id
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

  componentDidLoad() {
    const contentEl = this.el.parentElement.parentElement;
    Array.from(contentEl.querySelectorAll('h2')).forEach(this.observeElement);
  }

  render() {
    return null;
  }
}
