import { Component } from '@stencil/core';

@Component({
  tag: 'page-list'
})
export class PageList {

  render() {
    return [
      <ion-header translucent>
        <ion-toolbar>
          <ion-title>List</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content fullscreen>
        <ion-list>
          <ion-list-header>
            Recent Conversations
          </ion-list-header>

          <ion-item>
            <ion-avatar slot="start">
              <img src="assets/img/avatar-finn.png"></img>
            </ion-avatar>
            <ion-label>
              <h2>Finn</h2>
              <h3>I'm a big deal</h3>
              <p>Listen, I've had a pretty messed up day...</p>
            </ion-label>
          </ion-item>

          <ion-item>
            <ion-avatar slot="start">
              <img src="assets/img/avatar-han.png"></img>
            </ion-avatar>
            <ion-label>
              <h2>Han</h2>
              <h3>Look, kid...</h3>
              <p>I've got enough on my plate as it is, and I...</p>
            </ion-label>
          </ion-item>

          <ion-item>
            <ion-avatar slot="start">
              <img src="assets/img/avatar-rey.png"></img>
            </ion-avatar>
            <ion-label>
              <h2>Rey</h2>
              <h3>I can handle myself</h3>
              <p>You will remove these restraints and leave...</p>
            </ion-label>
          </ion-item>

          <ion-item>
            <ion-avatar slot="start">
              <img src="assets/img/avatar-luke.png"></img>
            </ion-avatar>
            <ion-label>
              <h2>Luke</h2>
              <h3>Your thoughts betray you</h3>
              <p>I feel the good in you, the conflict...</p>
            </ion-label>
          </ion-item>
        </ion-list>

        <ion-list>
          <ion-list-header>
            Online
          </ion-list-header>

          <ion-item>
            <ion-avatar slot="start">
              <img src="assets/img/avatar-poe.png"></img>
            </ion-avatar>
            <ion-label>
              <h2>Poe</h2>
              <h3>New Ride</h3>
              <p>I just upgraded my X-Wing. Next time...</p>
            </ion-label>
          </ion-item>

          <ion-item>
            <ion-avatar slot="start">
              <img src="assets/img/avatar-ben.png"></img>
            </ion-avatar>
            <ion-label>
              <h2>Ben</h2>
              <h3>Move Along</h3>
              <p>These aren't the droids you're looking for...</p>
            </ion-label>
          </ion-item>

          <ion-item>
            <ion-avatar slot="start">
              <img src="assets/img/avatar-leia.png"></img>
            </ion-avatar>
            <ion-label>
              <h2>Leia</h2>
              <h3>You're My Only Hope</h3>
              <p>I've placed information vital to the survival...</p>
            </ion-label>
          </ion-item>

          <ion-item>
            <ion-avatar slot="start">
              <img src="assets/img/avatar-yoda.png"></img>
            </ion-avatar>
            <ion-label>
              <h2>Yoda</h2>
              <h3>Size matters not</h3>
              <p>Do or do not. There is no try...</p>
            </ion-label>
          </ion-item>
        </ion-list>
      </ion-content>
    ];
  }
}
