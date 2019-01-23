import { Component } from '@stencil/core';

@Component({
  tag: 'page-datetime'
})
export class PageDatetime {
  render() {
    return [
      <ion-header translucent>
        <ion-toolbar>
          <ion-title>DateTime</ion-title>
        </ion-toolbar>
      </ion-header>,
      <ion-content fullscreen>
        <ion-list>
          <ion-item>
            <ion-input placeholder="Title"></ion-input>
          </ion-item>
          <ion-item>
            <ion-input placeholder="Location"></ion-input>
          </ion-item>
          <ion-item-divider></ion-item-divider>
          <ion-item>
            <ion-label>Start Date</ion-label>
            <ion-datetime value="1990-02-19" placeholder="Select Date"></ion-datetime>
          </ion-item>
          <ion-item>
            <ion-label>Start Time</ion-label>
            <ion-datetime display-format="h:mm A" picker-format="h:mm A" value="1990-02-19T07:43Z"></ion-datetime>
          </ion-item>
          <ion-item>
            <ion-label>Ends</ion-label>
            <ion-datetime value="1990-02-20" placeholder="Select Date"></ion-datetime>
          </ion-item>
          <ion-item>
            <ion-label>Repeat</ion-label>
            <ion-datetime placeholder="Never" disabled></ion-datetime>
          </ion-item>
          <ion-item>
            <ion-label>Travel Time</ion-label>
            <ion-datetime placeholder="None" disabled></ion-datetime>
          </ion-item>
          <ion-item-divider></ion-item-divider>
          <ion-item>
            <ion-label>Alert</ion-label>
            <ion-datetime placeholder="None" disabled></ion-datetime>
          </ion-item>
        </ion-list>
      </ion-content>
    ];
  }
}
