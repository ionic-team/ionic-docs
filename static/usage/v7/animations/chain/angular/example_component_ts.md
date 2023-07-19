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

  private cardA: Animation;
  private cardB: Animation;
  private cardC: Animation;

  constructor(private animationCtrl: AnimationController) {}

  ngAfterViewInit() {
    this.cardA = this.animationCtrl
      .create()
      .addElement(this.cardElements.get(0).nativeElement)
      .fill('none')
      .duration(1000)
      .keyframes([
        { offset: 0, transform: 'scale(1) rotate(0)' },
        { offset: 0.5, transform: 'scale(1.2) rotate(45deg)' },
        { offset: 1, transform: 'scale(1) rotate(0)' },
      ]);

    this.cardB = this.animationCtrl
      .create()
      .addElement(this.cardElements.get(1).nativeElement)
      .fill('none')
      .duration(1000)
      .keyframes([
        { offset: 0, transform: 'scale(1)', opacity: '1' },
        { offset: 0.5, transform: 'scale(1.2)', opacity: '0.3' },
        { offset: 1, transform: 'scale(1)', opacity: '1' },
      ]);

    this.cardC = this.animationCtrl
      .create()
      .addElement(this.cardElements.get(2).nativeElement)
      .fill('none')
      .duration(1000)
      .keyframes([
        { offset: 0, transform: 'scale(1)', opacity: '0.5' },
        { offset: 0.5, transform: 'scale(0.8)', opacity: '1' },
        { offset: 1, transform: 'scale(1)', opacity: '0.5' },
      ]);
  }

  async play() {
    await this.cardA.play();
    await this.cardB.play();
    await this.cardC.play();
  }

  pause() {
    this.cardA.pause();
    this.cardB.pause();
    this.cardC.pause();
  }

  stop() {
    this.cardA.stop();
    this.cardB.stop();
    this.cardC.stop();
  }
}
```
