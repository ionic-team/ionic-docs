```ts
import { Component, ElementRef, ViewChild } from '@angular/core';
import type { Animation } from '@ionic/angular';
import { AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html',
})
export class ExampleComponent {
  @ViewChild('square', { static: true }) square: ElementRef;

  private animation: Animation;

  constructor(private animationCtrl: AnimationController) {}

  ngAfterViewInit() {
    this.animation = this.animationCtrl
      .create()
      .addElement(this.square.nativeElement)
      .duration(3000)
      .iterations(Infinity)
      .keyframes([
        { offset: 0, background: 'red' },
        { offset: 0.72, background: 'var(--background)' },
        { offset: 1, background: 'green' },
      ]);
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
