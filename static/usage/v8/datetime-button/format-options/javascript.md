```html
<ion-datetime-button datetime="datetime"></ion-datetime-button>

<ion-modal keep-contents-mounted="true">
  <ion-datetime id="datetime" presentation="date-time" value="2023-11-02T01:22:00"></ion-datetime>
</ion-modal>

<script>
  const datetime = document.querySelector('ion-datetime');
  datetime.formatOptions = {
    date: {
      weekday: 'short',
      month: 'long',
      day: '2-digit',
    },
    time: {
      hour: '2-digit',
      minute: '2-digit',
    },
  };
</script>
```
