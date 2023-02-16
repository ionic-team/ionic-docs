```html
<ion-datetime presentation="date"></ion-datetime>

<script>
  const datetime = document.querySelector('ion-datetime');
  datetime.highlightedDates = (isoString) => {
    const date = new Date(isoString);
    const utcDay = date.getUTCDate();

    if(utcDay % 5 === 0) {
      return {
        textColor: '#800080',
        backgroundColor: '#ffc0cb',
      };
    }

    if(utcDay % 3 === 0) {
      return {
        textColor: '#0000ff',
        backgroundColor: '#add8e6',
      };
    }

    return undefined;
  };
</script>
```
