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
    this.handleActive = debounce(this.handleActive, 100);
    this.observer = new IntersectionObserver(this.handleIntersection.bind(this), {
      root: this.doc.querySelector('docs-content'),
      rootMargin: '0px 0px -95% 0px',
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

  linkAPIRef = (el) => {
    const link = this.doc.createElement('a');
    link.className = 'api-link';
    link.href = `/docs/api/${el.id}`;
    link.textContent = 'API ›';
    link.title = `${el.textContent.trim()} API Reference`;
    el.appendChild(link);
  }

  componentWillUnload() {
    this.observer.disconnect();
  }

  componentDidLoad() {
    const contentEl = this.el.parentElement.parentElement;
    const headings = Array.from(contentEl.querySelectorAll('h2'));
    headings.forEach(this.observeElement);
    headings.forEach(this.linkAPIRef);
  }

  render() {
    return null;
  }
}

const debounce = (fn, wait) => {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(fn, wait, ...args);
  };
};
