```html
<ion-searchbar show-cancel-button="focus" class="custom"></ion-searchbar>

<style>
/* Scoped components require higher specificity to customize */
ion-searchbar.custom {
  --background: #19422d;
  --color: #fff;
  --placeholder-color: #fff;
  --icon-color: #fff;
  --clear-button-color: #fff;

  --border-radius: 4px;
}

ion-searchbar.ios.custom {
  --cancel-button-color: #19422d;
}

ion-searchbar.md.custom {
  --cancel-button-color: #fff;
}
</style>
```
