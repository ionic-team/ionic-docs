```html
<ion-datetime presentation="date"></ion-datetime>

<script>
  const datetime = document.querySelector('ion-datetime');

  const date = new Date();

  // Set the value of the datetime to 2 days
  // before the current day
  let dayChange = -2;

  // If the day we are going to set the value to
  // is in the previous month then set the day 2 days
  // later instead so it remains in the same month
  if (date.getDate() + dayChange <= 0) {
    dayChange = -dayChange;
  }

  // Set the value of the datetime to the day
  // calculated above
  date.setDate(date.getDate() + dayChange);
  datetime.value = date.toISOString();
</script>

<style>
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
</style>
```
