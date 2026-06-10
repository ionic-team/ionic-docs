```html
<ion-header>
  <ion-toolbar>
    <ion-title>App</ion-title>
  </ion-toolbar>
</ion-header>
<ion-content class="ion-padding">
  <ion-button id="open-modal" expand="block">Open Sheet Modal</ion-button>

  <ion-modal trigger="open-modal" initial-breakpoint="0.25">
    <ion-content class="ion-padding">
      <div class="ion-margin-top">
        <ion-label>Drag the handle to adjust the header's visibility.</ion-label>
      </div>
    </ion-content>
  </ion-modal>
</ion-content>

<script>
  const modal = document.querySelector('ion-modal');
  const header = document.querySelector('ion-header');
  // Assign the current snap breakpoint to the initial breakpoint so
  // that we can track changes during the drag
  let currentSnap = 0.25;
  modal.breakpoints = [0, 0.25, 0.5, 0.75, 1];

  modal.addEventListener('ionDragMove', (event) => {
    // `progress` is a value from 1 (top) to 0 (bottom)
    // `snapBreakpoint` tells us which snap point the modal will animate to after the drag ends
    const { progress, snapBreakpoint } = event.detail;

    if (currentSnap !== snapBreakpoint) {
      currentSnap = snapBreakpoint;

      console.log('Current snap breakpoint:', snapBreakpoint);
    }

    /**
     * Inverse relationship:
     * 1.0 progress = 0 opacity
     * 0 progress = 1.0 opacity
     */
    const currentOpacity = 1 - progress;

    header.style.opacity = currentOpacity;
  });

  modal.addEventListener('ionDragEnd', (event) => {
    // `snapBreakpoint` tells us which snap point the modal will animate to after the drag ends
    const { progress, snapBreakpoint } = event.detail;

    /**
     * If the modal is snapping to the closed state (0), reset the
     * styles.
     */
    if (snapBreakpoint === 0) {
      header.style.removeProperty('opacity');
      return;
    }

    // Smooth transition to the final resting opacity
    header.style.transition = 'opacity 0.4s ease';
    // The final opacity matches the inverse of the resting progress
    header.style.opacity = 1 - progress;
  });

  /**
   * If the user dismisses the modal (e.g. tapping the backdrop),
   * reset the styles.
   */
  modal.addEventListener('willDismiss', (event) => {
    // Reset styles when the modal is dismissed
    header.style.removeProperty('opacity');
    header.style.removeProperty('transition');
  });
</script>
```
