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
          <docs-dropdown label="Community" align="right">
            <section>
              <a href="https://ionicframework.com/community" target="_blank">Community Hub</a>
            </section>
            <section>
              <a href="https://forum.ionicframework.com/" target="_blank">Forum</a>
              <a href="http://ionicworldwide.herokuapp.com/" target="_blank">Slack</a>
              <a href="https://spectrum.chat/ionic" target="_blank">Spectrum</a>
              <a href="https://www.meetup.com/topics/ionic-framework/" target="_blank">Meetups</a>
            </section>
            <section>
              <a href="https://blog.ionicframework.com/" target="_blank">Blog</a>
              <a href="https://twitter.com/ionicframework" target="_blank">Twitter</a>
              <a href="https://shop.ionicframework.com/" target="_blank">Swag</a>
            </section>
          </docs-dropdown>
          <docs-dropdown label="Support" align="right">
            <section>
              <a href="https://ionic.zendesk.com/" target="_blank">Help Center</a>
            </section>
            <section>
              <a href="https://ionicframework.com/support" target="_blank">Customer Support</a>
              <a href="https://ionicframework.com/advisory" target="_blank">Enterprise Advisory</a>
            </section>
          </docs-dropdown>
          <a class="outbound" href="https://github.com/ionic-team/ionic" target="_blank">GitHub <Outbound/></a>
        </nav>
      </header>
    );
  }
}
