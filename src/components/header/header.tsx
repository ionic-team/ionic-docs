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
        <docs-section-nav/>
        <nav class="UtilNav">
          <a href="https://ionicframework.com/support" target="_blank">Support</a>
          <a href="https://ionicframework.com/community" target="_blank">Community</a>
          <a class="outbound" href="https://github.com/ionic-team/ionic" target="_blank">GitHub <Outbound/></a>
        </nav>
      </header>
    );
  }
}
