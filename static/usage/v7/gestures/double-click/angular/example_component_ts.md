```ts
import { Component, ElementRef, ViewChild } from '@angular/core';
import { GestureController, IonCard, IonCardContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html',
  styleUrls: ['./example.component.css'],
  imports: [IonCard, IonCardContent],
})
export class ExampleComponent {
  @ViewChild('card', { read: ElementRef }) card!: ElementRef<HTMLIonCardElement>;

  private currentOffset: number = 0;
  private lastOnStart: number = 0;
  private DOUBLE_CLICK_THRESHOLD: number = 500;

  constructor(private el: ElementRef, private gestureCtrl: GestureController) {}

  ngAfterViewInit() {
    const gesture = this.gestureCtrl.create({
      el: this.card.nativeElement,
      threshold: 0,
      onStart: () => this.onStart(),
      gestureName: 'double-click',
    });

    gesture.enable();
  }

  private onStart() {
    const now = Date.now();

    if (Math.abs(now - this.lastOnStart) <= this.DOUBLE_CLICK_THRESHOLD) {
      this.card.nativeElement.style.setProperty('transform', this.getNewTransform());
      this.lastOnStart = 0;
    } else {
      this.lastOnStart = now;
    }
  }

  private getNewTransform() {
    if (this.currentOffset >= 100) {
      this.currentOffset = 0;
    } else {
      this.currentOffset += 20;
    }

    return `translateX(${this.currentOffset}px)`;
  }
}
```
