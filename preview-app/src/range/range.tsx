import { Component, State } from '@stencil/core';

@Component({
  tag: 'page-range',
  styleUrl: 'range.css'
})
export class PageRange {

  @State() brightness = 20;
  @State() contrast = 0;
  @State() warmth = 1300;
  @State() structure = { lower: 33, upper: 60 };

  render() {
    return [
      <ion-header translucent>
        <ion-toolbar>
          <ion-title>Range</ion-title>
        </ion-toolbar>
      </ion-header>,

      <ion-content fullscreen>
        <ion-list>
          <ion-list-header>
            Adjust Display
          </ion-list-header>

          <ion-item>
            <ion-range value={this.brightness}>
              <ion-icon slot="start" size="small" name="sunny"></ion-icon>
              <ion-icon slot="end" name="sunny"></ion-icon>
            </ion-range>
          </ion-item>

          <ion-item>
            <ion-range value={this.contrast} min={-200} max={200} pin={true} color="secondary">
              <ion-icon slot="start" size="small" name="contrast"></ion-icon>
              <ion-icon slot="end" name="contrast"></ion-icon>
            </ion-range>
          </ion-item>

          <ion-item>
            <ion-range dualKnobs={true} pin={true} value={this.structure} color="dark">
              <ion-icon slot="start" size="small" name="brush"></ion-icon>
              <ion-icon slot="end" name="brush"></ion-icon>
            </ion-range>
          </ion-item>

          <ion-item>
            <ion-range min={1000} max={2000} step={100} snaps={true} value={this.warmth} color="danger">
              <ion-icon slot="start" size="small" color="danger" name="thermometer"></ion-icon>
              <ion-icon slot="end" color="danger" name="thermometer"></ion-icon>
            </ion-range>
          </ion-item>
        </ion-list>
      </ion-content>
    ];
  }
}
