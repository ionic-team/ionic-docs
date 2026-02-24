```ts
import { Component, ElementRef, ViewChild } from '@angular/core';
import { IonButton, IonContent, IonHeader, IonLabel, IonModal, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html',
  standalone: true,
  imports: [IonButton, IonContent, IonHeader, IonLabel, IonModal, IonTitle, IonToolbar],
})
export class ExampleComponent {
  @ViewChild('modal', { read: ElementRef })
  modal!: ElementRef<HTMLIonModalElement>;

  private baseOpacity!: number;
  private readonly MAX_OPACITY = 0.8;

  onDragStart() {
    const modalEl = this.modal.nativeElement;
    const style = getComputedStyle(modalEl);

    // Fetch the current variable value
    this.baseOpacity = parseFloat(style.getPropertyValue('--backdrop-opacity'));

    // Ensure transitions are off during the active drag
    modalEl.style.transition = 'none';
  }

  onDragMove(event: any) {
    // `progress` is a value from 1 (top) to 0 (bottom)
    const { progress } = event.detail;
    const modalEl = this.modal.nativeElement;
    const initialBreakpoint = modalEl.initialBreakpoint!;
    let dynamicOpacity: number;

    /**
     * Dragging Down: Progress is between 0 and the initial breakpoint
     */
    if (progress <= initialBreakpoint) {
      /**
       * Calculate how far down the user has dragged from the initial
       * breakpoint as a ratio
       */
      const downwardProgressRatio = progress / initialBreakpoint;
      /**
       * Multiplying this by `baseOpacity` ensures that as progress hits 0,
       * the opacity also hits 0 without a sudden jump
       */
      dynamicOpacity = downwardProgressRatio * this.baseOpacity;
    } else {
      /**
       * Dragging Up: Progress is between the initial breakpoint and 1.0
       */

      /**
       * Calculate how far up the user has dragged from the initial
       * breakpoint as a ratio
       */
      const distanceFromStart = progress - initialBreakpoint;
      /**
       * Calculate the total available space to drag up from the initial
       * breakpoint to the top (1.0)
       */
      const range = 1 - initialBreakpoint;
      /**
       * Normalizes that distance into a 0.0 to 1.0 value relative to
       * the available upward space
       */
      const currentGain = distanceFromStart / range;

      // Scale from `baseOpacity` up to `MAX_OPACITY`
      dynamicOpacity = this.baseOpacity + currentGain * (this.MAX_OPACITY - this.baseOpacity);
    }

    modalEl.style.setProperty('--backdrop-opacity', dynamicOpacity.toString());
  }

  onDragEnd(event: any) {
    // `currentBreakpoint` tells us which snap point the modal will animate to after the drag ends
    const { currentBreakpoint } = event.detail;
    const modalEl = this.modal.nativeElement;

    /**
     * If the modal is snapping to the closed state (0), reset the
     * styles.
     */
    if (currentBreakpoint === 0) {
      modalEl.style.removeProperty('--backdrop-opacity');
      return;
    }

    // Determine the target opacity for the snap-back animation
    let targetOpacity = this.baseOpacity;
    /**
     * If snapping to the top (1), set opacity to MAX_OPACITY for a nice
     * visual effect.
     */
    if (currentBreakpoint === 1) {
      targetOpacity = this.MAX_OPACITY;
    }

    // Re-enable transition for a smooth snap-back
    modalEl.style.transition = '--backdrop-opacity 0.3s ease';
    modalEl.style.setProperty('--backdrop-opacity', targetOpacity.toString());
  }
}
```
