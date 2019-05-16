import { Component, Listen, Prop, State } from '@stencil/core';
import { Checkmark, Logo } from '../../icons';

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

        <nav class="SectionNav">
          <stencil-route-switch>
            <stencil-route url="/docs/appflow">
              <docs-dropdown label="Appflow">
                <section>
                  <stencil-route-link url="/docs/" urlMatch={/^\/docs\/(?!(appflow)).*$/}>フレームワーク</stencil-route-link>
                  <stencil-route-link url="/docs/appflow">Appflow <Checkmark/></stencil-route-link>
                </section>
                <section>
                  <a href="https://ionicframework.com/docs/v3">Framework v3</a>
                  <a href="https://stenciljs.com">Stencil</a>
                  <a href="https://capacitor.ionicframework.com">Capacitor</a>
                </section>
              </docs-dropdown>
            </stencil-route>
            <stencil-route>
              <docs-dropdown label="Framework">
                <section>
                  <stencil-route-link url="/docs/" urlMatch={/^\/docs\/(?!(appflow)).*$/}>Framework <Checkmark/></stencil-route-link>
                  <stencil-route-link url="/docs/appflow">Appflow</stencil-route-link>
                </section>
                <section>
                  <a href="https://ionicframework.com/docs/v3">Framework v3</a>
                  <a href="https://stenciljs.com">Stencil</a>
                  <a href="https://capacitor.ionicframework.com">Capacitor</a>
                </section>
              </docs-dropdown>
              <div class="SectionNav-tabs">
                <stencil-route-link url="/docs/" urlMatch={[/^\/docs(?!\/(api|components|cli|native|enterprise)).*$/]}>ガイド</stencil-route-link>
                <stencil-route-link url="/docs/components" urlMatch={['/docs/api', '/docs/components']}>コンポーネント</stencil-route-link>
                <stencil-route-link url="/docs/cli">CLI</stencil-route-link>
                <stencil-route-link url="/docs/native" urlMatch={['/docs/native', '/docs/enterprise']}>ネイティブ</stencil-route-link>
              </div>
            </stencil-route>
          </stencil-route-switch>
        </nav>

        <nav class="UtilNav">
          <ionic-search></ionic-search>
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
          <a class="outbound" href="https://github.com/ionic-team/ionic" target="_blank"><ion-icon name="logo-github"></ion-icon></a>
        </nav>
      </header>
    );
  }
}
