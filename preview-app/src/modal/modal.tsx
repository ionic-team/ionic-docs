import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'page-modal'
})
export class Modal {
  @Prop({ connect: 'ion-modal-controller' }) modalCtrl: HTMLIonModalControllerElement;

  async openModal(char: string) {
    const modal = await this.modalCtrl.create({
      component: 'modal-page',
      componentProps: { char }
    });

    modal.present();
  }

  render() {
    return [
      <ion-header translucent>
        <ion-toolbar>
          <ion-title>Modal</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content fullscreen padding>
        <ion-list>
          <ion-list-header>
            Hobbits
          </ion-list-header>

          <ion-item button onClick={() => this.openModal('Gollum')}>
            Gollum
          </ion-item>
          <ion-item button onClick={() => this.openModal('Frodo Baggins')}>
            Frodo Baggins
          </ion-item>
          <ion-item button onClick={() => this.openModal('Sam')}>
            Sam
          </ion-item>
        </ion-list>
      </ion-content>
    ];
  }
}
