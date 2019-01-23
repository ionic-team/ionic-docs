## DateTime

DateTime is used to present an interface which makes it easy for users to select dates and times. Datetime will look like a native iOS date picker when rendered on an iOS device and will have a material look on all other platforms. Datetime should always be used within an `ion-item`.

```html
<ion-item>
  <ion-label>Date</ion-label>
  <ion-datetime display-format="MM/DD/YYYY"></ion-datetime>
</ion-item>
```