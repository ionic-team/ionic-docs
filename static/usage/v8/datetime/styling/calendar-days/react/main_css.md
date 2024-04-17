```css
/*
* Custom Datetime Day Parts
* -------------------------------------------
*/

ion-datetime::part(calendar-day) {
  color: #da5296;
}

ion-datetime::part(calendar-day today) {
  color: #8462d1;
}

ion-datetime::part(calendar-day):focus {
  background-color: rgb(154 209 98 / 0.2);
  box-shadow: 0px 0px 0px 4px rgb(154 209 98 / 0.2);
}

/*
* Custom Material Design Datetime Day Parts
* -------------------------------------------
*/

ion-datetime.md::part(calendar-day active),
ion-datetime.md::part(calendar-day active):focus {
  background-color: #9ad162;
  border-color: #9ad162;
  color: #fff;
}

ion-datetime.md::part(calendar-day today) {
  border-color: #8462d1;
}

/*
* Custom iOS Datetime Day Parts
* -------------------------------------------
*/

ion-datetime.ios::part(calendar-day active),
ion-datetime.ios::part(calendar-day active):focus {
  background-color: rgb(154 209 98 / 0.2);
  color: #9ad162;
}
```
