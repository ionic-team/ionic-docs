```html
<ion-header>
  <ion-toolbar>
    <ion-title>Dashboard</ion-title>
  </ion-toolbar>
</ion-header>
<ion-content>
  <ion-list>
    @for (item of items; track item.id) {
    <ion-item [routerLink]="['/example/dashboard', item.id]">
      <ion-label>{{ item.name }}</ion-label>
    </ion-item>
    }
  </ion-list>
</ion-content>
```
