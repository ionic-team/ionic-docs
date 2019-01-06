import { Component, Listen, State } from '@stencil/core';
import { Outbound } from '../../icons';
import Logo from './logo';

@Component({
  tag: 'docs-header',
  styleUrl: 'header.css'
})
export class DocsHeader {
  @State() hidden = false;
  private frameRequested = false;
  private prevScroll = 0;

  @Listen('window:scroll')
  handleScroll() {
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
        <nav class="SectionNav">
          <stencil-route-link url="/docs/" exact>Guide</stencil-route-link>
          <stencil-route-link url="/docs/api">API</stencil-route-link>
          <stencil-route-link url="/docs/cli">CLI</stencil-route-link>
          <stencil-route-link url="/docs/native">Native</stencil-route-link>
        </nav>
        <nav>
          <a href="https://ionicframework.com/support">Support</a>
          <a href="https://ionicframework.com/community">Community</a>
          <a class="outbound" href="https://github.com/ionic-team/ionic">GitHub <Outbound/></a>
        </nav>
      </header>
    );
  }
}
