```ts
import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonModal, IonLabel } from '@ionic/angular/standalone';

@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html',
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonModal, IonLabel],
})
export class ExampleComponent implements OnInit {
  @ViewChild('modal', { static: true }) modal!: IonModal;
  @ViewChild('appPage', { static: true }) appPage!: ElementRef<HTMLDivElement>;

  presentingElement: HTMLElement | undefined;

  private readonly DARKEST_PERCENT = 50;
  private readonly BRIGHTNESS_RANGE = 100 - this.DARKEST_PERCENT;

  ngOnInit() {
    this.presentingElement = this.appPage.nativeElement;
  }

  onModalWillPresent() {
    const appEl = this.appPage.nativeElement;

    appEl.style.transition = 'filter 0.4s ease';
    // Set to max darkness immediately
    appEl.style.setProperty('filter', `brightness(${this.DARKEST_PERCENT}%)`, 'important');
  }

  onDragStart() {
    const appEl = this.appPage.nativeElement;

    // Ensure transitions are off during the active drag
    appEl.style.transition = 'none';
  }

  onDragMove(event: any) {
    // `progress` is a value from 1 (top) to 0 (bottom)
    const { progress } = event.detail;

    const appEl = this.appPage.nativeElement;
    /**
     * Calculate the current brightness based on how far the user has
     * dragged.
     *
     * When dragging up, the background should become darker,
     * and when dragging down, it should become lighter.
     */
    const brightnessValue = 100 - progress * this.BRIGHTNESS_RANGE;

    // Update the brightness in real-time as the user drags
    appEl.style.setProperty('filter', `brightness(${brightnessValue}%)`, 'important');
  }

  onDragEnd(event: any) {
    // `progress` is a value from 1 (top) to 0 (bottom)
    const { progress } = event.detail;

    const appEl = this.appPage.nativeElement;
    /**
     * Snap the background brightness based on the user's drag intent.
     * Progress > 0.4 implies an intent to open (snap dark),
     * while < 0.4 implies a dismissal (snap bright).
     */
    const brightnessValue = progress > 0.4 ? this.DARKEST_PERCENT : 100;

    // Reset to max darkness on snap-back for a nice visual effect
    appEl.style.setProperty('filter', `brightness(${brightnessValue}%)`, 'important');

    // Re-enable transition for a smooth snap-back
    appEl.style.transition = 'filter 0.4s ease';
  }

  onModalWillDismiss() {
    const appEl = this.appPage.nativeElement;

    // Clean up styles when the modal is dismissed
    appEl.style.removeProperty('filter');
    appEl.style.removeProperty('transition');
  }
}
```
