import { Component, Element, Prop, State } from '@stencil/core';

@Component({
  tag: 'modal-page'
})
export class ModalPage {
  @Element()
  el: HTMLElement;

  @Prop()
  char: string;

  @State()
  character: any;

  characters: any[];

  constructor() {
    this.characters = [
      {
        name: 'Gollum',
        quote: 'Sneaky little hobbitses!',
        image: 'assets/img/avatar-gollum.jpg',
        items: [
          { title: 'Race', note: 'Hobbit' },
          { title: 'Culture', note: 'River Folk' },
          { title: 'Alter Ego', note: 'Smeagol' }
        ]
      },
      {
        name: 'Frodo',
        quote: 'Go back, Sam! I\'m going to Mordor alone!',
        image: 'assets/img/avatar-frodo.jpg',
        items: [
          { title: 'Race', note: 'Hobbit' },
          { title: 'Culture', note: 'Shire Folk' },
          { title: 'Weapon', note: 'Sting' }
        ]
      },
      {
        name: 'Samwise Gamgee',
        quote: 'What we need is a few good taters.',
        image: 'assets/img/avatar-samwise.jpg',
        items: [
          { title: 'Race', note: 'Hobbit' },
          { title: 'Culture', note: 'Shire Folk' },
          { title: 'Nickname', note: 'Sam' }
        ]
      }
    ];
  }

  componentWillLoad() {
    this.character = this.characters.find((item: any) => {
      return item.name === this.char;
    });
  }

  dismiss() {
    (this.el.closest('ion-modal') as any).dismiss();
  }

  render() {
    return [
      <ion-header translucent>
        <ion-toolbar>
          <ion-title>Modal Page</ion-title>

          <ion-buttons slot="end">
            <ion-button onClick={() => this.dismiss()}>Cancel</ion-button>
            <ion-button onClick={() => this.dismiss()}>Post</ion-button>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>,

      <ion-content fullscreen>
        <ion-list>
          <ion-item>
            <ion-avatar slot="start">
              <img src={this.character.image} />
            </ion-avatar>
            <ion-label>
              <h2>{this.character.name}</h2>
              <p>{this.character.quote}</p>
            </ion-label>
          </ion-item>
          {this.character.items.map(item => {
            return (
              <ion-item>
                <ion-label>
                  <h2>{item.title}</h2>
                </ion-label>
                <ion-note slot="end">{item.note}</ion-note>
              </ion-item>
            );
          })}
        </ion-list>
      </ion-content>
    ];
  }
}
