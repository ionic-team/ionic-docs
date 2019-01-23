import '@ionic/core';
import { Component, Listen } from '@stencil/core';

@Component({
  tag: 'component-preview'
})
export class ComponentPreview {

  @Listen('window:message')
  handleMessage({ data }: MessageEvent) {
    if (data.active) {
      window.location.hash = data.active;
    }
  }

  render() {
    const pages = Object.entries(DEMOS);
    return (
      <ion-app>
        <ion-router useHash={true}>
          <ion-route url="/" component="page-index" componentProps={{ pages }}/>
          {pages.map(([key, { page }]) => (
            <ion-route url={key} component={page} />
          ))}
        </ion-router>
        <ion-router-outlet animated={false} no-router />

      </ion-app>
    );
  }
}

const DEMOS = {
  'ion-action-sheet': {
    name: 'Action Sheet',
    page: 'page-action-sheet'
  },
  'ion-alert': {
    name: 'Alert',
    page: 'page-alert'
  },
  'ion-badge': {
    name: 'Badge',
    page: 'page-badge'
  },
  'ion-button': {
    name: 'Button',
    page: 'page-button'
  },
  'ion-card': {
    name: 'Card',
    page: 'page-card'
  },
  'ion-checkbox': {
    name: 'Checkbox',
    page: 'page-checkbox'
  },
  'ion-datetime': {
    name: 'Datetime',
    page: 'page-datetime'
  },
  'ion-fab': {
    name: 'Fab',
    page: 'page-fab'
  },
  'ion-grid': {
    name: 'Grid',
    page: 'page-grid'
  },
  'ion-infinite-scroll': {
    name: 'Infinite Scroll',
    page: 'page-infinite-scroll'
  },
  'ion-input': {
    name: 'Input',
    page: 'page-input'
  },
  'ion-list': {
    name: 'List',
    page: 'page-list'
  },
  'ion-loading': {
    name: 'Loading',
    page: 'page-loading'
  },
  'ion-menu': {
    name: 'Menu',
    page: 'page-menu'
  },
  'ion-modal': {
    name: 'Modal',
    page: 'page-modal'
  },
  'ion-nav': {
    name: 'Navigation',
    page: 'page-nav'
  },
  'ion-popover': {
    name: 'Popover',
    page: 'page-popover'
  },
  'ion-range': {
    name: 'Range',
    page: 'page-range'
  },
  'ion-refresher': {
    name: 'Refresher',
    page: 'page-refresher'
  },
  'ion-searchbar': {
    name: 'Searchbar',
    page: 'page-searchbar'
  },
  'ion-select': {
    name: 'Select',
    page: 'page-select'
  },
  'ion-slides': {
    name: 'Slides',
    page: 'page-slides'
  },
  'ion-spinner': {
    name: 'Spinner',
    page: 'page-spinner'
  },
  'ion-tabs': {
    name: 'Tabs',
    page: 'page-tabs'
  },
  'ion-toast': {
    name: 'Toast',
    page: 'page-toast'
  },
  'ion-virtual-scroll': {
    name: 'Virtual Scroll',
    page: 'page-virtual-scroll'
  }
};
