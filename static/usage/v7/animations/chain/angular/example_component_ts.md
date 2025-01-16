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

  private cardA!: Animation | null;
  private cardB!: Animation | null;
  private cardC!: Animation | null;

  constructor(private animationCtrl: AnimationController) {}

  ngAfterViewInit() {
    const cardElA = this.cardElements.get(0);
    const cardElB = this.cardElements.get(1);
    const cardElC = this.cardElements.get(2);

    this.cardA = cardElA
      ? this.animationCtrl
          .create()
          .addElement(cardElA.nativeElement)
          .fill('none')
          .duration(1000)
          .keyframes([
            { offset: 0, transform: 'scale(1) rotate(0)' },
            { offset: 0.5, transform: 'scale(1.2) rotate(45deg)' },
            { offset: 1, transform: 'scale(1) rotate(0)' },
          ])
      : null;

    this.cardB = cardElB
      ? this.animationCtrl
          .create()
          .addElement(cardElB.nativeElement)
          .fill('none')
          .duration(1000)
          .keyframes([
            { offset: 0, transform: 'scale(1)', opacity: '1' },
            { offset: 0.5, transform: 'scale(1.2)', opacity: '0.3' },
            { offset: 1, transform: 'scale(1)', opacity: '1' },
          ])
      : null;

    this.cardC = cardElC
      ? this.animationCtrl
          .create()
          .addElement(cardElC.nativeElement)
          .fill('none')
          .duration(1000)
          .keyframes([
            { offset: 0, transform: 'scale(1)', opacity: '0.5' },
            { offset: 0.5, transform: 'scale(0.8)', opacity: '1' },
            { offset: 1, transform: 'scale(1)', opacity: '0.5' },
          ])
      : null;
  }

  async play() {
    await this.cardA?.play();
    await this.cardB?.play();
    await this.cardC?.play();
  }

  pause() {
    this.cardA?.pause();
    this.cardB?.pause();
    this.cardC?.pause();
  }

  async stop() {
    await this.cardA?.stop();
    await this.cardB?.stop();
    await this.cardC?.stop();
  }
}
```
