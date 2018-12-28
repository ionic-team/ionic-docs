import { Component, State } from '@stencil/core';
import Logo from './logo';

@Component({
  tag: 'docs-header',
  styleUrl: 'header.css'
})
export class DocsHeader {
  @State() hidden = false;
  private frameRequested = false;
  private prevScroll = 0;

  componentDidLoad() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentDidUnload() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    if (!this.frameRequested) {
      requestAnimationFrame(() => {
        const { scrollY } = window;
        this.hidden = scrollY > 60 && scrollY > this.prevScroll;
        this.prevScroll = scrollY;
        this.frameRequested = false;
      });
      this.frameRequested = true;
    }
  }

  hostData() {
    return {
      class: { hidden: this.hidden }
    };
  }

  render() {
    return (
      <header>
        <stencil-route-link url="/docs/">
          <Logo/>
        </stencil-route-link>
        <nav>
          <a href="#">Community</a>
          <a href="#">Support</a>
          <a href="#">GitHub</a>
        </nav>
      </header>
    );
  }
}
