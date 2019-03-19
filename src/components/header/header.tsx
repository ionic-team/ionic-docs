import { Component, Listen, Prop, State } from '@stencil/core';
import { Logo, Outbound } from '../../icons';

@Component({
  tag: 'docs-header',
  styleUrl: 'header.css'
})
export class DocsHeader {
  @State() hidden = false;
  private frameRequested = false;
  private prevScroll = 0;

  @Prop() onToggleClick: (e: Event) => void;

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
        <docs-menu-toggle onClick={this.onToggleClick}/>
        <stencil-route-link url="/docs/">
          <Logo class="HeaderLogo"/>
        </stencil-route-link>
        <docs-section-nav/>
        <nav class="UtilNav">
          <a href="https://ionicframework.com/support" target="_blank">Support</a>
          <a href="https://ionicframework.com/community" target="_blank">Community</a>
          <a class="outbound" href="https://ionicframework.com/docs/v3" target="_blank">v3 <Outbound/></a>
          <a class="outbound" href="https://github.com/ionic-team/ionic" target="_blank">GitHub <Outbound/></a>
          <a class="outbound" href="https://github.com/ionic-jp/ionic-docs" target="_blank">翻訳に協力する <Outbound/></a>
        </nav>
      </header>
    );
  }
}
