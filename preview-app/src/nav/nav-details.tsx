import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'nav-details'
})
export class NavDetails {

  @Prop() tech: any;

  render() {
    return [
      <ion-header translucent>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-back-button defaultHref="/"></ion-back-button>
          </ion-buttons>
          <ion-title>{this.tech.title}</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content fullscreen padding>
        <ion-icon name={`logo-${this.tech.icon}`} style={{ 'color': this.tech.color }} size="large"></ion-icon>
        <p>{this.tech.description}</p>
      </ion-content>
    ];
  }
}
