import { Component, Element, Listen, Prop, State, h } from '@stencil/core';

import { MoreDots } from '../../icons';

@Component({
  tag: 'header-mobile-collapse',
  styleUrl: 'header-mobile-collapse.css',
  shadow: false
})
export class HeaderMobileCollapse {

  @Prop() darkMode = true;

  @State() mobileDropdownActive = false;
  @State() stuck = false;
  @State() queued = false;
  @Element() el!: HTMLElement;

  observer!: IntersectionObserver;

  @Listen('pageChanged', { target: 'body' })
  deactivate() {
    setTimeout(() => {
      this.el.classList.remove('ionic-sub-header--mobile-active');
    }, 200); // give the page a chance to load in the background so it's pretty
  }

  getTriggerEl() {
    // return (<div class="ionic-sub-header__trigger"></div>)
    const trigger = document.createElement('div');
    trigger.id = 'ionic-sub-header__trigger';
    return trigger;
  }

  componentDidLoad() {
    // tslint:disable-next-line
    if (!this.el.before) { return; }

    this.el.before(this.getTriggerEl());
    this.init();
    requestAnimationFrame(() => {
      this.el.classList.add('ionic-sub-header--initialized');
    });
  }

  init() {
    this.observer = new IntersectionObserver(entries => {
      if (this.queued) { return; }

      // no intersection with screen
      if (!this.stuck && entries[0].intersectionRatio === 0) {
        this.queued = true;
        requestAnimationFrame(() => {
          this.el.classList.add('ionic-sub-header--stuck');
          this.stuck = true;
          this.queued = false;
        });

      // fully intersects with screen
      } else if (this.stuck && entries[0].intersectionRatio === 1) {
        this.queued = true;
        requestAnimationFrame(() => {
          this.el.classList.remove('ionic-sub-header--stuck');
          this.stuck = false;
          this.queued = false;
        });
      }
    }, { threshold: [0, 1] });

    const headerEl = document.getElementById('ionic-sub-header__trigger');

    if (this.el && headerEl) {
      this.observer.observe(headerEl);
      setTimeout(() => {
        this.el.classList.add('ionic-sub-header--initialized');
        const navBar = document.querySelector('.navbar-default');
        if (navBar) { navBar.classList.add('navbar--not-fixed'); }
      }, 405);
    }
  }

  handleMobileToggleClick() {
    this.el.classList.toggle('ionic-sub-header--mobile-active');
  }

  render() {
    return ([
      <div
        class="header-mobile-collapse__backdrop"
        onClick={() => this.deactivate()}
      />,
      <ionic-search></ionic-search>,
      <a
        class="ionic-sub-header__mobile-toggle"
        onClick={() => this.handleMobileToggleClick()}
      >
        <MoreDots/>
      </a>,
      <div class="header-mobile-collapse__content">
        <slot/>
      </div>
    ]);
  }
}
