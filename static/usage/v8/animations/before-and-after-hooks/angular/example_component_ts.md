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
        filter: 'invert(75%)',
      })
      .beforeClearStyles(['box-shadow'])
      .afterStyles({
        'box-shadow': 'rgba(255, 0, 50, 0.4) 0px 4px 16px 6px',
      })
      .afterClearStyles(['filter'])
      .keyframes([
        { offset: 0, transform: 'scale(1)' },
        { offset: 0.5, transform: 'scale(1.5)' },
        { offset: 1, transform: 'scale(1)' },
      ]);

    this.animation = this.animationCtrl.create().duration(2000).addAnimation([card]);
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
