import { Component, State } from '@stencil/core';

@Component({
  tag: 'page-refresher',
  styleUrl: 'refresher.css'
})
export class PageRefresher {
  @State() list = [0, 1, 2, 3, 4, 5];

  doRefresh(ev: CustomEvent) {
    console.log('Begin async operation', ev);
    setTimeout(() => {
      const newItems = [6, 7, 8, 9, 10];
      this.list = this.list.concat(newItems);
      (ev.target as any).complete();
    }, 2000);
  }

  render() {
    return [
      <ion-header translucent>
        <ion-toolbar>
          <ion-title>Refresher</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content fullscreen>
        <ion-refresher id="refresher" disabled={false} slot="fixed" onIonRefresh={event => this.doRefresh(event)}>
          <ion-refresher-content pulling-text="Pull to refresh..." refreshing-spinner="bubbles" refreshing-text="Refreshing...">
          </ion-refresher-content>
        </ion-refresher>

        <ion-list>
          {this.list.map(item => {
            return <ion-item>{item}</ion-item>;
          })}
        </ion-list>
      </ion-content>
    ];
  }
}
