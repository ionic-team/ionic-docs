import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'page-action-sheet'
})
export class PageActionSheet {
  @Prop({ connect: 'ion-action-sheet-controller ' }) actionSheetCtrl: HTMLIonActionSheetControllerElement;

  async showActionSheet() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Albums',
      buttons: [
        { text: 'Delete', role: 'destructive' },
        { text: 'Share' },
        { text: 'Play' },
        { text: 'Favorite' },
        { text: 'Cancel', role: 'cancel' }
      ]
    });

    actionSheet.present();
  }

  render() {
    return [
      <ion-header translucent>
        <ion-toolbar>
          <ion-title>Action Sheet</ion-title>
        </ion-toolbar>
      </ion-header>,
      <ion-content fullscreen padding>
        <ion-action-sheet-controller></ion-action-sheet-controller>

        <ion-button expand="block" onClick={() => this.showActionSheet()}>Show Action Sheet</ion-button>
      </ion-content>
    ];
  }
}
