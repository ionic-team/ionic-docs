```html
<ion-app>
  <ion-content>
    <div class="container">
      <ion-button
        [color]="modeValue === 'ios' ? 'secondary' : 'tertiary'"
        [fill]="modeValue === 'ios' ? 'outline' : 'solid'"
        (click)="showMode()"
      >
        {{ modeValue }}
      </ion-button>
      <div class="mode-value" *ngIf="modeValue">
        Current mode: {{ modeValue }}
      </div>
    </div>
  </ion-content>
</ion-app>
<style>
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .mode-value {
    margin-top: 16px;
    font-weight: bold;
  }
</style>
```