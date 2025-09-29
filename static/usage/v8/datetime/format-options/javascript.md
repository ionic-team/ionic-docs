```html
<ion-datetime value="2023-11-02T01:22:00">
  <span slot="title">Select Date</span>
</ion-datetime>

<script>
  const datetime = document.querySelector('ion-datetime');
  datetime.formatOptions = {
    time: { hour: '2-digit', minute: '2-digit' },
    date: { day: '2-digit', month: 'long' },
  };
</script>
```
