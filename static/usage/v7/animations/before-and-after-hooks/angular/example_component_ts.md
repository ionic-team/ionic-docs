```ts
import { Component, ElementRef, ViewChildren } from '@angular/core';
import { AnimationController, IonButton, IonCard, IonCardContent } from '@ionic/angular/standalone';
import type { QueryList } from '@angular/core';
import type { Animation } from '@ionic/angular/standalone';

@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html',
  styleUrls: ['example.component.css'],
  imports: [IonButton, IonCard, IonCardContent],
})
export class ExampleComponent {
  @ViewChildren(IonCard, { read: ElementRef }) cardElements!: QueryList<ElementRef<HTMLIonCardElement>>;

  private animation!: Animation;

  constructor(private animationCtrl: AnimationController) {}

  ngAfterViewInit() {
    const cardEl = this.cardElements.get(0);

    const card = cardEl
      ? this.animationCtrl
          .create()
          .addElement(cardEl.nativeElement)
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
          ])
      : null;

    if (card) {
      this.animation = this.animationCtrl.create().duration(2000).addAnimation([card]);
    }
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
