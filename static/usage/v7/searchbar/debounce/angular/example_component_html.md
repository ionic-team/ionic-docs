```html
<ion-searchbar [debounce]="1000" (ionInput)="handleInput($event)"></ion-searchbar>

<ion-list>
  @for (result of results; track result) {
  <ion-item>
    <ion-label>{{ result }}</ion-label>
  </ion-item>
  }
</ion-list>
```
