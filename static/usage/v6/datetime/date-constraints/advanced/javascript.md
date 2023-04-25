```html
<ion-datetime></ion-datetime>

<script>
  const datetime = document.querySelector('ion-datetime');
  datetime.isDateEnabled = (dateString) => {
    const date = new Date(dateString);
    const utcDay = date.getUTCDay();

    /**
     * Date will be enabled if it is not
     * Sunday or Saturday
     */
    return utcDay !== 0 && utcDay !== 6;
  }
</script>
```
