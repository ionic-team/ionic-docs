import { Component, State } from '@stencil/core';

@Component({
  tag: 'page-searchbar',
  styleUrl: 'searchbar.css'
})
export class PageSearchbar {

  @State() items;

  constructor() {
    this.initializeItems();
  }

  initializeItems() {
    this.items = [
      'Amsterdam',
      'Bogota',
      'Buenos Aires',
      'Cairo',
      'Dhaka',
      'Edinburgh',
      'Geneva',
      'Genoa',
      'Glasglow',
      'Hanoi',
      'Hong Kong',
      'Islamabad',
      'Istanbul',
      'Jakarta',
      'Kiel',
      'Kyoto',
      'Le Havre',
      'Lebanon',
      'Lhasa',
      'Lima',
      'London',
      'Los Angeles',
      'Madrid',
      'Manila',
      'New York',
      'Olympia',
      'Oslo',
      'Panama City',
      'Peking',
      'Philadelphia',
      'San Francisco',
      'Seoul',
      'Taipeh',
      'Tel Aviv',
      'Tokio',
      'Uelzen',
      'Washington'
    ];
  }

  getItems(ev) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the ev target
    const val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() !== '') {
      this.items = this.items.filter(item => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      });
    }
  }

  render() {
    return [
      <ion-header translucent>
        <ion-toolbar>
          <ion-title>Searchbar</ion-title>
        </ion-toolbar>
        <ion-toolbar>
          <ion-searchbar onIonInput={event => this.getItems(event)}></ion-searchbar>
        </ion-toolbar>
      </ion-header>,

      <ion-content fullscreen>
        <ion-list>
          {
            this.items.map(item => {
              return (
                <ion-item>
                  <ion-label>
                    {item}
                  </ion-label>
                </ion-item>
              );
            })
          }
        </ion-list>
      </ion-content>
    ];
  }
}
