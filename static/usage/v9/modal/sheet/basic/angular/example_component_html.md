```html
<ion-header>
  <ion-toolbar>
    <ion-title>App</ion-title>
  </ion-toolbar>
</ion-header>
<ion-content class="ion-padding">
  <ion-button id="open-modal" expand="block">Open Sheet Modal</ion-button>

  <ion-modal #modal trigger="open-modal" [initialBreakpoint]="0.25" [breakpoints]="[0, 0.25, 0.5, 0.75]">
    <ng-template>
      <ion-content>
        <ion-searchbar placeholder="Search" (click)="modal.setCurrentBreakpoint(0.75)"></ion-searchbar>
        <ion-list>
          <ion-item>
            <ion-avatar slot="start">
              <img src="https://i.pravatar.cc/300?u=b" alt="Portrait of Connor Smith" />
            </ion-avatar>
            <ion-label>
              <h2>Connor Smith</h2>
              <p>Sales Rep</p>
            </ion-label>
          </ion-item>
          <ion-item>
            <ion-avatar slot="start">
              <img src="https://i.pravatar.cc/300?u=a" alt="Portrait of Daniel Smith" />
            </ion-avatar>
            <ion-label>
              <h2>Daniel Smith</h2>
              <p>Product Designer</p>
            </ion-label>
          </ion-item>
          <ion-item>
            <ion-avatar slot="start">
              <img src="https://i.pravatar.cc/300?u=d" alt="Portrait of Greg Smith" />
            </ion-avatar>
            <ion-label>
              <h2>Greg Smith</h2>
              <p>Director of Operations</p>
            </ion-label>
          </ion-item>
          <ion-item>
            <ion-avatar slot="start">
              <img src="https://i.pravatar.cc/300?u=l" alt="Portrait of Zoey Smith" />
            </ion-avatar>
            <ion-label>
              <h2>Zoey Smith</h2>
              <p>CEO</p>
            </ion-label>
          </ion-item>
        </ion-list>
      </ion-content>
    </ng-template>
  </ion-modal>
</ion-content>
```
