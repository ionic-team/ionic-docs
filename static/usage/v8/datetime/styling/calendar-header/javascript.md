```html
<ion-datetime presentation="date"></ion-datetime>

<style>
  /*
   * Custom Datetime Calendar Header Parts
   * -------------------------------------------
   */
  ion-datetime::part(calendar-header) {
    background-color: orange;
  }

  ion-datetime::part(month-year-button) {
    background-color: lightblue;
  }

  ion-datetime::part(prev-next-buttons) {
    background-color: firebrick;
  }

  ion-datetime::part(prev-button) {
    color: white;
  }

  ion-datetime::part(next-button) {
    color: black;
  }

  ion-datetime::part(days-of-week) {
    background-color: #9ad162;
    color: white;
  }
</style>
```
