```html
<ion-datetime-button datetime="datetime"></ion-datetime-button>

<ion-modal [keepContentsMounted]="true">
  <ng-template>
    <ion-datetime
      id="datetime"
      presentation="date-time"
      value="2023-11-02T01:22:00"
      [formatOptions]="{
        date: {
          weekday: 'short',
          month: 'long',
          day: '2-digit',
        },
        time: {
          hour: '2-digit',
          minute: '2-digit',
        },
      }"
    ></ion-datetime>
  </ng-template>
</ion-modal>
```
