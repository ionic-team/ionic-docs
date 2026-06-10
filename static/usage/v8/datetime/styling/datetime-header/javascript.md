```html
<ion-datetime presentation="date">
  <span slot="title">Select Date</span>
</ion-datetime>

<style>
  /*
   * Custom Datetime Header Parts
   * -------------------------------------------
   */
  ion-datetime::part(datetime-header) {
    background-color: orange;
  }

  ion-datetime::part(datetime-title) {
    background-color: pink;
  }

  ion-datetime::part(datetime-selected-date) {
    background-color: violet;
  }
</style>
```
