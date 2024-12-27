```ts
import { Component, ElementRef, ViewChild } from '@angular/core';
import { IonButton, IonCard, IonCardContent } from '@ionic/angular/standalone';
import type { Animation } from '@ionic/angular/standalone';
import { AnimationController } from '@ionic/angular/standalone';

@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html',
  styleUrls: ['example.component.css'],
  imports: [IonButton, IonCard, IonCardContent],
})
export class ExampleComponent {
  @ViewChild(IonCard, { read: ElementRef }) card!: ElementRef<HTMLIonCardElement>;

  private animation!: Animation;

  constructor(private animationCtrl: AnimationController) {}

  ngAfterViewInit() {
    this.animation = this.animationCtrl
      .create()
      .addElement(this.card.nativeElement)
      .duration(1500)
      .iterations(Infinity)
      .fromTo('transform', 'translateX(0px)', 'translateX(100px)')
      .fromTo('opacity', '1', '0.2');
  }

  play() {
    this.animation.play();
  }

  pause() {
    this.animation.pause();
  }

  stop() {
    this.animation.stop();
  }
}
```
