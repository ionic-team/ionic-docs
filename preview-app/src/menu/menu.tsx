import { Component, Element } from '@stencil/core';

interface AppPage {
  title: string;
  component: string;
  icon: string;
}

const APP_PAGES: AppPage[] = [
  {
    title: 'Home',
    component: 'home-page',
    icon: 'home'
  },
  {
    title: 'Profile',
    component: 'profile-page',
    icon: 'person'
  }
];

@Component({
  tag: 'page-menu'
})
export class PageMenu {

  @Element() el!: HTMLElement;

  private onMenuClick(page: AppPage) {
    this.el.querySelector('ion-nav')!.setRoot(page.component);
  }

  render() {
    return [
      <ion-menu type="overlay">
        <ion-header translucent>
          <ion-toolbar>
            <ion-title>Menu</ion-title>
          </ion-toolbar>
        </ion-header>
        <ion-content fullscreen forceOverscroll={false}>
          <ion-list>
            <ion-list-header>
              Navigate
          </ion-list-header>

            {APP_PAGES.map(p =>
              <ion-menu-toggle autoHide={false}>
                <ion-item button onClick={() => this.onMenuClick(p)}>
                  <ion-icon slot="start" name={p.icon}></ion-icon>
                  <ion-label>
                    {p.title}
                  </ion-label>
                </ion-item>
              </ion-menu-toggle>
            )}
          </ion-list>
        </ion-content>
      </ion-menu>,

      <ion-nav root="home-page" animated={false} main></ion-nav>
    ];
  }
}
