```ts
import { Component, ElementRef, ViewChildren } from '@angular/core';
import type { QueryList } from '@angular/core';
import type { Animation } from '@ionic/angular';
import { AnimationController, IonCard } from '@ionic/angular';

@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html',
})
export class ExampleComponent {
  @ViewChildren(IonCard, { read: ElementRef }) cardElements: QueryList<ElementRef<HTMLIonCardElement>>;

  private animation: Animation;

  constructor(private animationCtrl: AnimationController) {}

  ngAfterViewInit() {
    const card = this.animationCtrl
      .create()
      .addElement(this.cardElements.get(0).nativeElement)
      .duration(2000)
      .beforeStyles({
        opacity: 0.2
      })
      .beforeClearStyles(['background'])
      .afterStyles({
        background: 'rgba(0, 255, 0, 0.5)'
      })
      .afterClearStyles(['opacity'])
      .keyframes([
        { offset: 0, transform: 'scale(1)' },
        { offset: 0.5, transform: 'scale(1.5)' },
        { offset: 1, transform: 'scale(1)' }
      ])

    this.animation = this.animationCtrl
      .create()
      .duration(2000)
      .addAnimation([card]);
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
