```html
<ion-datetime presentation="date" value="2023-01-01"></ion-datetime>

<script>
  const datetime = document.querySelector('ion-datetime');
  datetime.highlightedDates = [
    {
      date: '2023-01-05',
      textColor: '#800080',
      backgroundColor: '#ffc0cb',
    },
    {
      date: '2023-01-10',
      textColor: '#09721b',
      backgroundColor: '#c8e5d0',
    },
    {
      date: '2023-01-20',
      textColor: '#0000ff',
      backgroundColor: '#add8e6',
    },
    {
      date: '2023-01-23',
      textColor: '#440ab8',
      backgroundColor: '#d3c8e5'
    }
  ];
</script>
```
