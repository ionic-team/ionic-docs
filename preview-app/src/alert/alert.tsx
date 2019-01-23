import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'page-alert'
})
export class PageAlert {
  @Prop({ connect: 'ion-alert-controller ' }) alertCtrl: HTMLIonAlertControllerElement;

  async showAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Use this lightsaber?',
      message: 'Do you agree to use this lightsaber to do good across the galaxy?',
      buttons: ['Disagree', 'Agree']
    });

    alert.present();
  }

  render() {
    return [
      <ion-header translucent>
        <ion-toolbar>
          <ion-title>Alert</ion-title>
        </ion-toolbar>
      </ion-header>,
      <ion-content fullscreen padding>
        <ion-alert-controller></ion-alert-controller>
        <ion-button expand="block" onClick={() => this.showAlert()}>Show Alert</ion-button>
      </ion-content>
    ];
  }
}
