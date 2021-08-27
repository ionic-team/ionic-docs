import { Component, Listen, Prop, State, h } from '@stencil/core';

import { Checkmark, ForwardArrow, Logo, Translation } from '../../icons';
import { l10n } from '../../l10n';
import { link } from '../nav/link';

@Component({
  tag: 'docs-header',
  styleUrl: 'header.css'
})
export class DocsHeader {
  @State() hidden = false;
  private frameRequested = false;
  private prevScroll = 0;

  @Prop() toggleClickFn!: (e: Event) => void;

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

  renderMenu(section: 'Framework' | 'Native' | 'CLI' | 'Studio') {
    return [
      <docs-dropdown label={section}>
        <section>
          <stencil-route-link url="/docs/">Framework {section === 'Framework' ? <Checkmark/> : null}</stencil-route-link>
          <stencil-route-link url="/docs/native">Native {section === 'Native' ? <Checkmark/> : null}</stencil-route-link>
          <stencil-route-link url="/docs/cli">CLI {section === 'CLI' ? <Checkmark/> : null}</stencil-route-link>
        </section>
        <section>
          {link(['Appflow', 'https://ionic.io/docs/appflow' ])}
          {link(['Capacitor', 'https://capacitor.ionicframework.com/docs/' ])}
          {link(['Stencil', 'https://stenciljs.com' ])}
          {link(['Identity Vault', 'https://ionic.io/docs/identity-vault' ])}
          {link(['Auth Connect', 'https://ionic.io/docs/auth-connect' ])}
          {link(['Secure Storage', 'https://ionic.io/docs/secure-storage' ])}
          {link(['Premier Plugins', 'https://ionic.io/docs/premier-plugins' ])}
        </section>
        {section === 'Framework' ? <section>
          {link(['Framework v4', 'https://ionicframework.com/docs/v4/components' ])}
          {link(['Framework v3', 'https://ionicframework.com/docs/v3' ])}
        </section> : null}
      </docs-dropdown>,
      // show Ionic related links in the top bar
      ['Framework'].indexOf(section) > -1 ? <div class="SectionNav-tabs">
        <stencil-route-link url="/docs/" urlMatch={[/^\/docs(?!\/(api|components|cli|native)).*$/, '__/docs/__']}>{l10n.getString('header-guide')}</stencil-route-link>
        <stencil-route-link url="/docs/components" urlMatch={['/docs/api', '/docs/components']}>{l10n.getString('header-components')}</stencil-route-link>
        <stencil-route-link url="/docs/cli">{l10n.getString('header-cli')}</stencil-route-link>
        <stencil-route-link url="/docs/native" urlMatch={['/docs/native']}>{l10n.getString('header-native')}</stencil-route-link>
      </div> : null,
      ];
  }

  render() {
    const { getString } = l10n;
    return (
      <header>
        <docs-menu-toggle onClick={this.toggleClickFn}/>

        <a href="https://ionicframework.com">
          <Logo class="HeaderLogo"/>
        </a>

        <header-mobile-collapse>
          <nav class="SectionNav">
            <stencil-route-switch>
              <stencil-route url="/docs/studio">
                {this.renderMenu('Studio')}
              </stencil-route>
              <stencil-route url="/docs/native">
                {this.renderMenu('Native')}
              </stencil-route>
              <stencil-route url="/docs/cli">
                {this.renderMenu('CLI')}
              </stencil-route>
              <stencil-route>
                {this.renderMenu('Framework')}
              </stencil-route>
            </stencil-route-switch>
          </nav>

          <div class="jobs-wrapper">
            <a class="jobs" href="https://ionic.io/about/jobs#positions" target="_blank" rel="noopener">
              <span class="start">
                <svg width="12" height="12" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0)" fill="#D0FDFF"><path d="M4.4 2.9a.65.65 0 011.22 0l.8 2.25c.07.18.22.33.4.4l2.25.8a.65.65 0 010 1.22l-2.25.8a.65.65 0 00-.4.4l-.8 2.25a.65.65 0 01-1.22 0l-.8-2.25a.65.65 0 00-.4-.4l-2.25-.8a.65.65 0 010-1.22l2.25-.8c.18-.07.33-.22.4-.4l.8-2.25zM9.04 1.2c.15-.4.72-.4.87 0l.29.81c.04.13.14.23.27.28l.8.29c.41.14.41.72 0 .87l-.8.28a.46.46 0 00-.27.28l-.3.8c-.14.41-.71.41-.86 0l-.29-.8a.46.46 0 00-.28-.28l-.8-.28a.46.46 0 010-.87l.8-.3a.46.46 0 00.28-.27l.29-.8zM1.5.48c.1-.3.5-.3.6 0l.24.65c.03.1.1.16.2.2l.65.23c.29.1.29.5 0 .61l-.65.24c-.1.03-.17.1-.2.2l-.23.65c-.1.28-.51.28-.62 0l-.23-.66a.32.32 0 00-.2-.2l-.65-.23a.32.32 0 010-.6l.65-.24c.1-.04.17-.1.2-.2l.23-.65z"/></g><defs><clipPath id="clip0"><path fill="#fff" d="M0 0h12v12H0z"/></clipPath></defs></svg>
                Ionic is hiring
              </span>
              <span class="end">
                Work with us
                <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" width="14" height="12" viewBox="0 0 512 512"><title>Arrow Forward</title><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="48" d="M268 112l144 144-144 144M392 256H100"/></svg>  
              </span>
            </a>
          </div>

          <nav class="UtilNav">
            <ionic-search></ionic-search>
            <docs-dropdown label={getString('header-community')} align="right">
              <section>
                <a href="https://ionicframework.com/community" target="_blank">Community Hub</a>
              </section>
              <section>
                <a href="https://forum.ionicframework.com/" target="_blank">Forum</a>
                <a href="https://www.meetup.com/topics/ionic-framework/" target="_blank">Meetups</a>
              </section>
              <section>
                <a href="https://blog.ionicframework.com/" target="_blank">Blog</a>
                <a href="https://twitter.com/ionicframework" target="_blank">Twitter</a>
              </section>
            </docs-dropdown>
            <docs-dropdown label={getString('header-support')} align="right">
              <section>
                <a href="https://ionicframework.com/support" target="_blank">Help Center</a>
              </section>
              <section>
                <a href="https://ionic.zendesk.com/" target="_blank">Customer Support</a>
                <a href="https://ionicframework.com/advisory" target="_blank">Enterprise Advisory</a>
              </section>
            </docs-dropdown>
            <docs-dropdown icon={Translation} align="right" label="Translations" class="label-sm-only">
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
              {/* WIP Languages - included for pre-rendering, but hidden */}
              <div style={{ display: 'none' }}>
                <a href="/docs/zh">Chinese</a>
                <a href="/docs/fr">French</a>
                <a href="/docs/pt">Portuguese</a>
                <a href="/docs/es">Spanish</a>
              </div>
            </docs-dropdown>
            <a href="https://github.com/ionic-team/ionic" target="_blank">
              <ion-icon name="logo-github" class="lg-only"></ion-icon>
              <span class="sm-only">GitHub <ForwardArrow class="Dropdown-arrow"/></span>
            </a>
            <a href="https://twitter.com/ionicframework" target="_blank">
              <ion-icon name="logo-twitter" class="lg-only"></ion-icon>
              <span class="sm-only">Twitter <ForwardArrow class="Dropdown-arrow"/></span>
            </a>
          </nav>
        </header-mobile-collapse>
      </header>
    );
  }
}
