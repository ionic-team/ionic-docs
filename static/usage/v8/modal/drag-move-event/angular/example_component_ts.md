```ts
import { Component, ElementRef, ViewChild } from '@angular/core';
import { IonButton, IonContent, IonHeader, IonLabel, IonModal, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import type { ModalDragEventDetail } from '@ionic/angular/standalone';

@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html',
  standalone: true,
  imports: [IonButton, IonContent, IonHeader, IonLabel, IonModal, IonTitle, IonToolbar],
})
export class ExampleComponent {
  @ViewChild('header', { read: ElementRef })
  header!: ElementRef<HTMLIonHeaderElement>;
  // Assign the current snap breakpoint to the initial breakpoint so
  // that we can track changes during the drag
  currentSnap = 0.25;

  onDragMove(event: CustomEvent<ModalDragEventDetail>) {
    // `progress` is a value from 1 (top) to 0 (bottom)
    // `snapBreakpoint` tells us which snap point the modal will animate to after the drag ends
    const { progress, snapBreakpoint } = event.detail;

    if (this.currentSnap !== snapBreakpoint) {
      this.currentSnap = snapBreakpoint as number;

      console.log('Current snap breakpoint:', snapBreakpoint);
    }

    const headerEl = this.header.nativeElement;
    /**
     * Inverse relationship:
     * 1.0 progress = 0 opacity
     * 0 progress = 1.0 opacity
     */
    const currentOpacity = 1 - progress;

    headerEl.style.opacity = currentOpacity.toString();
  }

  onDragEnd(event: CustomEvent<ModalDragEventDetail>) {
    // `progress` is a value from 1 (top) to 0 (bottom)
    // `snapBreakpoint` tells us which snap point the modal will animate to after the drag ends
    const { progress, snapBreakpoint } = event.detail;
    const headerEl = this.header.nativeElement;

    /**
     * If the modal is snapping to the closed state (0), reset the
     * styles.
     */
    if (snapBreakpoint === 0) {
      headerEl.style.removeProperty('opacity');
      headerEl.style.removeProperty('transition');
      return;
    }

    // Smooth transition to the final resting opacity
    headerEl.style.transition = 'opacity 0.4s ease';
    // The final opacity matches the inverse of the resting progress
    headerEl.style.opacity = (1 - progress).toString();
  }

  /**
   * If the user dismisses the modal (e.g. tapping the backdrop),
   * reset the styles.
   */
  onWillDismiss() {
    const headerEl = this.header.nativeElement;

    // Reset styles when the modal is dismissed
    headerEl.style.removeProperty('opacity');
    headerEl.style.removeProperty('transition');
  }
}
```
