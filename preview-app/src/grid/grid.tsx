import { Component } from '@stencil/core';

@Component({
  tag: 'page-grid',
  styleUrl: 'grid.css'
})
export class PageGrid {
  render() {
    return [
      <ion-header translucent>
        <ion-toolbar>
          <ion-title>Grid</ion-title>
        </ion-toolbar>
      </ion-header>,
      <ion-content fullscreen>
        <ion-grid>
          <ion-row>
            <ion-col><div>1 of 2</div></ion-col>
            <ion-col><div>2 of 2</div></ion-col>
          </ion-row>
          <ion-row>
            <ion-col><div>1 of 3</div></ion-col>
            <ion-col><div>2 of 3</div></ion-col>
            <ion-col><div>3 of 3</div></ion-col>
          </ion-row>
          <ion-row>
            <ion-col><div>1 of 3</div></ion-col>
            <ion-col col-6><div>2 of 3</div></ion-col>
            <ion-col><div>3 of 3</div></ion-col>
          </ion-row>
          <ion-row>
            <ion-col col-6><div>1 of 3</div></ion-col>
            <ion-col><div>2 of 3</div></ion-col>
            <ion-col><div>3 of 3</div></ion-col>
          </ion-row>
          <ion-row>
            <ion-col offset-4><div>1 of 2</div></ion-col>
            <ion-col><div>2 of 2</div></ion-col>
          </ion-row>
          <ion-row>
            <ion-col><div>1 of 2</div></ion-col>
            <ion-col offset-4><div>2 of 2</div></ion-col>
          </ion-row>
          <ion-row>
            <ion-col><div>1 of 4</div></ion-col>
            <ion-col><div>2 of 4</div></ion-col>
            <ion-col><div>3 of 4</div></ion-col>
            <ion-col><div>4 of 4</div></ion-col>
          </ion-row>
        </ion-grid>
      </ion-content>
    ];
  }
}
