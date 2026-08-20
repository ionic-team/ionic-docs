```html
<ion-list>
  <!-- The reorder gesture is disabled by default, enable it to drag and drop items -->
  <ion-reorder-group disabled="false">
    <ion-item>
      <ion-label>Buy groceries</ion-label>
      <ion-icon name="warning" color="warning" slot="end"></ion-icon>
      <ion-reorder slot="end"></ion-reorder>
    </ion-item>
    <ion-item>
      <ion-label>Call the bank</ion-label>
      <ion-icon name="warning" color="warning" slot="end"></ion-icon>
      <ion-reorder slot="end"></ion-reorder>
    </ion-item>
    <ion-item>
      <ion-label>Finish project report</ion-label>
      <ion-icon name="ellipse" color="light" slot="end"></ion-icon>
      <ion-reorder slot="end"></ion-reorder>
    </ion-item>
    <ion-item>
      <ion-label>Book flight tickets</ion-label>
      <ion-icon name="ellipse" color="light" slot="end"></ion-icon>
      <ion-reorder slot="end"></ion-reorder>
    </ion-item>
    <ion-item>
      <ion-label>Read a book</ion-label>
      <ion-icon name="caret-down" color="secondary" slot="end"></ion-icon>
      <ion-reorder slot="end"></ion-reorder>
    </ion-item>
  </ion-reorder-group>
</ion-list>

<script>
  const reorderGroup = document.querySelector('ion-reorder-group');
  const icons = document.querySelectorAll('ion-icon');
  reorderGroup.addEventListener('ionReorderStart', ({ detail }) => {
    console.log('Reorder started');

    // Hide the icons when the reorder starts
    icons.forEach((icon) => {
      icon.style.opacity = 0;
    });
  });

  reorderGroup.addEventListener('ionReorderEnd', ({ detail }) => {
    console.log('Dragged from index', detail.from, 'to', detail.to);

    // Show the icons again
    icons.forEach((icon) => {
      icon.style.opacity = 1;
    });

    // Finish the reorder
    detail.complete();
  });
</script>
```
