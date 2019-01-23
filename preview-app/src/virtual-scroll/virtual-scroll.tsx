import { Component, State } from '@stencil/core';

@Component({
  tag: 'page-virtual-scroll',
  styleUrl: 'virtual-scroll.css'
})
export class PageVirtualScroll {

  @State() items = Array.from({ length: 500 }, (_, i) => i);

  render() {
    return [
      <ion-header translucent>
        <ion-toolbar>
          <ion-title>Virtual Scroll</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content fullscreen>
        <ion-virtual-scroll
          items={this.items}
          itemHeight={() => 48}
          renderItem={item => {
            return <ion-item>{item}</ion-item>;
          }}
        ></ion-virtual-scroll>
      </ion-content>
    ];
  }
}
