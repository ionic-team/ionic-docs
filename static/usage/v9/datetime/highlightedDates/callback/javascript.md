```html
<ion-datetime presentation="date"></ion-datetime>

<script>
  var datetime = document.querySelector('ion-datetime');
  datetime.highlightedDates = (isoString) => {
    const date = new Date(isoString);
    const utcDay = date.getUTCDate();

    if (utcDay % 5 === 0) {
      return {
        textColor: '#800080',
        backgroundColor: '#ffc0cb',
        border: '1px solid #e91e63',
      };
    }

    if (utcDay % 3 === 0) {
      return {
        textColor: 'var(--ion-color-secondary)',
        backgroundColor: 'rgb(var(--ion-color-secondary-rgb), 0.18)',
        border: '1px solid var(--ion-color-secondary-shade)',
      };
    }

    return undefined;
  };
</script>
```
