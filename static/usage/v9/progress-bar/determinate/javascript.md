```html
<ion-progress-bar></ion-progress-bar>

<script>
  let progress = 0;
  let progressBar = document.querySelector('ion-progress-bar');

  setInterval(() => {
    progressBar.value = progress += 0.01;

    // Reset the progress bar when it reaches 100%
    // to continuously show the demo
    if (progress > 1) {
      setTimeout(() => {
        progressBar.value = progress = 0;
      }, 1000);
    }
  }, 50);
</script>
```
