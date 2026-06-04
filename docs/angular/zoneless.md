---
title: Zoneless Change Detection
sidebar_label: Zoneless
---

<head>
  <title>Zoneless Change Detection with Ionic and Angular</title>
  <meta
    name="description"
    content="Run Ionic Angular apps without Zone.js. Learn the change detection contract for overlays, lifecycle hooks, and platform events when using Angular's zoneless change detection."
  />
</head>

Angular 21 makes [zoneless change detection](https://angular.dev/guide/zoneless) the default, removing the dependency on Zone.js. This guide covers what you need to know to run an Ionic Angular app without Zone.js.

With Zone.js, Angular automatically re-renders after almost any asynchronous task. Without it, Angular only re-renders when you explicitly tell it the view is out of date. Most of your app keeps working unchanged, but a few patterns that relied on Zone.js need a small adjustment.

## What keeps working automatically

You do not need to change these. Angular schedules change detection for them in a zoneless app:

- Template event bindings: `(click)`, `(ionChange)`, `(ionInput)`, and every other `(event)` handler.
- Host listeners (`@HostListener`), including the ones Ionic's form value accessors use, so `[(ngModel)]` and reactive forms stay in sync.
- Signal updates that are read in a template.
- The `async` pipe.
- Ionic page lifecycle hooks (`ionViewWillEnter`, `ionViewDidEnter`, `ionViewWillLeave`, `ionViewDidLeave`) that set state synchronously. Ionic notifies Angular after each hook runs.
- Navigation, route transitions, and tab switching.

## What needs a notification

When you update component state from an asynchronous callback that Angular did not wrap, nothing schedules a re-render. The state changes, but the view does not update. This applies to any Angular code, not only Ionic, and the common sources in an Ionic app are:

- Awaiting an overlay result, such as `await modal.onWillDismiss()` or `loading.onDidDismiss().then(...)`.
- Asynchronous work started inside a lifecycle hook, for example a `setTimeout` or `fetch` in `ionViewWillEnter`.
- `Platform` event subscriptions (`backButton`, `resize`, `pause`, `resume`, keyboard events) and `Platform.ready()`.
- Any `setTimeout`, `setInterval`, or RxJS subscription that assigns to a component field.

There are two ways to fix this. Prefer signals.

## Recommended: signals

Writing a [signal](https://angular.dev/guide/signals) that a template reads schedules change detection automatically. This works the same with or without Zone.js, so it is the most portable option.

```ts
import { Component, inject, signal } from '@angular/core';
import { ModalController } from '@ionic/angular/standalone';
import { PickerModal } from './picker.modal';

@Component({
  selector: 'app-home',
  template: `
    <ion-button (click)="pick()">Pick a value</ion-button>
    <p>Selected: {{ selected() }}</p>
  `,
})
export class HomePage {
  private modalCtrl = inject(ModalController);
  readonly selected = signal<string | undefined>(undefined);

  async pick() {
    const modal = await this.modalCtrl.create({ component: PickerModal });
    await modal.present();

    const { data } = await modal.onWillDismiss<string>();
    // Writing the signal updates the view. No markForCheck needed.
    this.selected.set(data);
  }
}
```

## Alternative: `ChangeDetectorRef.markForCheck()`

If you are not using signals for a particular piece of state, inject `ChangeDetectorRef` and call `markForCheck()` after the asynchronous update. It is a no-op-or-better under Zone.js, so it is safe to leave in place if you later re-enable zones.

```ts
import { ChangeDetectorRef, Component, inject } from '@angular/core';

@Component({
  selector: 'app-list',
  template: `@for (item of items; track item) { <ion-item>{{ item }}</ion-item> }`,
})
export class ListPage {
  private cdr = inject(ChangeDetectorRef);
  items: string[] = [];

  ionViewWillEnter() {
    // Asynchronous work inside a lifecycle hook still needs a notification.
    setTimeout(() => {
      this.items = ['A', 'B', 'C'];
      this.cdr.markForCheck();
    }, 1000);
  }
}
```

## Inline overlays with dynamic content

Content projected into an inline `ion-modal` or `ion-popover` follows the same rule. If you populate it asynchronously, update a signal or call `markForCheck()`:

```ts
@Component({
  selector: 'app-inline',
  template: `
    <ion-popover #popover>
      <ng-template>
        <ion-list>
          @for (item of items(); track item) {
          <ion-item>{{ item }}</ion-item>
          }
        </ion-list>
      </ng-template>
    </ion-popover>
  `,
})
export class InlinePage {
  readonly items = signal<string[]>([]);

  open(popover: IonPopover) {
    popover.present();
    setTimeout(() => this.items.set(['A', 'B', 'C', 'D']), 1000);
  }
}
```

Inline overlays also expose their events as outputs (for example `ionModalDidDismiss`), which you can convert to a signal with [`toSignal`](https://angular.dev/api/core/rxjs-interop/toSignal) if you prefer a reactive style.

## Platform events

`Platform` exposes its events as RxJS subjects. Update a signal inside the subscription so the view reflects the change:

```ts
export class AppComponent {
  private platform = inject(Platform);
  readonly isLandscape = signal(false);

  constructor() {
    this.platform.resize.subscribe(() => {
      this.isLandscape.set(this.platform.isLandscape());
    });
  }
}
```

## Staying on Zone.js

If you are not ready to adopt zoneless change detection, you can opt back into Zone.js with `provideZoneChangeDetection()`. Refer to the [Keeping Zone.js section of the Ionic 9 upgrade guide](/docs/updating/9-0.md#keeping-zonejs) for the exact configuration.
