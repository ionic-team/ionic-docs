import { Component } from '@stencil/core';

@Component({
  tag: 'profile-page'
})
export class ProfilePage {
  render() {
    return [
      <ion-header translucent>
        <ion-toolbar>
          <ion-title>Profile</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content fullscreen padding>
        <h1>Welcome to the profile page</h1>
      </ion-content>
    ];
  }
}
