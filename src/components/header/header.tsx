import { Component, Listen, Prop, State, h } from '@stencil/core';
import { Book, Checkmark, Logo, Translation } from '../../icons';

@Component({
  tag: 'docs-header',
  styleUrl: 'header.css'
})
export class DocsHeader {
  @State() hidden = false;
  private frameRequested = false;
  private prevScroll = 0;

  @Prop() onToggleClick: (e: Event) => void;

  @Listen('scroll', { target: 'window' })
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
            <stencil-route url="/docs/:lang([a-z]{2})?/appflow">
              <docs-dropdown label="Appflow">
                <section>
                  <stencil-route-link url="/docs/" urlMatch={/^\/docs\/(?!(appflow)).*$/}>Framework</stencil-route-link>
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
                <stencil-route-link url="/docs/" urlMatch={[/^\/docs(?!\/(api|components|cli|native|enterprise)).*$/]}>Guide</stencil-route-link>
                <stencil-route-link url="/docs/components" urlMatch={['/docs/api', '/docs/components']}>Components</stencil-route-link>
                <stencil-route-link url="/docs/cli">CLI</stencil-route-link>
                <stencil-route-link url="/docs/native" urlMatch={['/docs/native', '/docs/enterprise']}>Native</stencil-route-link>
              </div>
            </stencil-route>
          </stencil-route-switch>
        </nav>

        <nav class="UtilNav">
          <ionic-search>
            <div class="Search__Defaults">
              <div class="Search__Defaults__Section">
                <h4>Getting Started</h4>
                <ul>
                  <li><a href="/docs/installation/cli"><Book/><strong>Installation Guide</strong> | Installation</a></li>
                  <li><a href="/docs/building/running"><Book/><strong>Running an App</strong> | Building</a></li>
                  <li><a href="/docs/layout/structure"><Book/><strong>App Structure</strong> | Layout</a></li>
                  <li><a href="/docs/theming/basics"><Book/><strong>Theming Basics</strong> | Theming</a></li>
                </ul>
              </div>
              <div class="Search__Defaults__Section">
                <h4>Common topics</h4>
                <ul>
                  <li><a href="/docs/building/testing"><Book/><strong>Testing</strong> | Building</a></li>
                  <li><a href="/docs/building/cross-platform#storage"><Book/><strong>Storage</strong> | Building</a></li>
                  <li><a href="/docs/lifecycle/angular"><Book/><strong>Life Cycle Events</strong> | Angular</a></li>
                  <li><a href="/docs/navigation/angular"><Book/><strong>Navigation</strong> | Angular</a></li>
                </ul>
              </div>
              <div class="Search__Defaults__Section">
                <h4>UI Components</h4>
                <ul>
                  <li><a href="/docs/api/button"><Book/><strong>ion-button</strong> | Buttons</a></li>
                  <li><a href="/docs/api/card"><Book/><strong>ion-card</strong> | Cards</a></li>
                  <li><a href="/docs/api/loading"><Book/><strong>ion-loading</strong> | Progress Indicators</a></li>
                  <li><a href="/docs/api/tabs"><Book/><strong>ion-tabs</strong> | Tabs</a></li>
                </ul>
              </div>
              <div class="Search__Defaults__Section">
                <h4>Native</h4>
                <ul>
                  <li><a href="/docs/enterprise/camera"><Book/><strong>Camera</strong> | Native EE</a></li>
                  <li><a href="/docs/enterprise/identity-vault"><Book/><strong>Identity Vault</strong> | Native EE</a></li>
                  <li><a href="/docs/native/firebase"><Book/><strong>Firebase</strong> | Native CE</a></li>
                  <li><a href="/docs/native/barcode-scanner"><Book/><strong>Barcode Scanner</strong> | Native CE</a></li>
                </ul>
              </div>
            </div>
          </ionic-search>
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
              <a href="https://ionicframework.com/support" target="_blank">Help Center</a>
            </section>
            <section>
              <a href="https://ionic.zendesk.com/" target="_blank">Customer Support</a>
              <a href="https://ionicframework.com/advisory" target="_blank">Enterprise Advisory</a>
            </section>
          </docs-dropdown>
          <docs-dropdown icon={Translation} align="right">
            <section>
              <a href="https://ionicframework.com/en/docs/" class="link-active">
                English
                <svg viewBox="0 0 512 512" width="14">
                  <path d="M186.301 339.893L96 249.461l-32 30.507L186.301 402 448 140.506 416 110z"></path>
                </svg>
              </a>
              <a href="https://ionicframework.com/jp/docs/" target="_blank">日本語</a>
            </section>
            <section>
              <a href="https://ionicframework.com/translate" target="_blank">Translate</a>
            </section>
          </docs-dropdown>
          <a href="https://github.com/ionic-team/ionic" target="_blank"><ion-icon name="logo-github"></ion-icon></a>
          <a href="https://twitter.com/ionicframework" target="_blank"><ion-icon name="logo-twitter"></ion-icon></a>
        </nav>
      </header>
    );
  }
}
