import { Component, Prop, State } from '@stencil/core';

@Component({
  tag: 'page-input'
})
export class PageInput {
  @State() firstName: string;
  @State() lastName: string;

  @Prop({ connect: 'ion-alert-controller' }) alertCtrl: HTMLIonAlertControllerElement;

  async processForm(ev) {
    ev.preventDefault();

    const alert = await this.alertCtrl.create({
      header: 'Account Created',
      message: `Created Account for: ${this.firstName} ${this.lastName}`,
      buttons: [{
        text: 'Ok',
      }]
    });

    alert.present();
  }

  handleFirstNameValue(ev) {
    this.firstName = ev.target.value;
  }

  handleLastNameValue(ev) {
    this.lastName = ev.target.value;
  }

  render() {
    return [
      <ion-header translucent>
        <ion-toolbar>
          <ion-title>Input</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content fullscreen padding>
        <form onSubmit={event => this.processForm(event)}>
          <ion-list>
            <ion-item>
              <ion-input required onInput={event => this.handleFirstNameValue(event)} value={this.firstName} type="text" placeholder="First Name"></ion-input>
            </ion-item>

            <ion-item>
              <ion-input required onInput={event => this.handleLastNameValue(event)} value={this.lastName} type="text" placeholder="Last Name"></ion-input>
            </ion-item>
          </ion-list>

          <div>
            <ion-button expand="block" type="submit">Create Account</ion-button>
          </div>
        </form>
      </ion-content>
    ];
  }
}
