```html
<ion-toggle enable-on-off-labels="true" checked-icon="moon" unchecked-icon="sunny">Dark Mode</ion-toggle>

<script type="module">
  import { addIcons } from 'ionicons';
  import { moon, sunny } from 'ionicons/icons';

  /**
   * Any icons you want to use in your application
   * can be registered in index.ts and then
   * referenced by name anywhere in your application.
   */
  addIcons({ moon, sunny });
</script>
```
