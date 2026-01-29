---
title: Overlay Components
sidebar_label: Overlays
---

<head>
  <title>Angular Overlay Components: Modals, Popovers with Custom Injectors</title>
  <meta
    name="description"
    content="Learn how to use overlay components like modals and popovers in Ionic Angular, including passing custom injectors for dependency injection."
  />
</head>

Ionic provides overlay components such as modals and popovers that display content on top of your application. In Angular, these overlays can be created using controllers like `ModalController` and `PopoverController`.

## Creating Overlays

Overlays can be created programmatically using their respective controllers:

```typescript
import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular/standalone';
import { MyModalComponent } from './my-modal.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  constructor(private modalController: ModalController) {}

  async openModal() {
    const modal = await this.modalController.create({
      component: MyModalComponent,
      componentProps: {
        title: 'My Modal',
      },
    });
    await modal.present();
  }
}
```

## Custom Injectors

By default, overlay components use the root injector for dependency injection. This means that services or tokens provided at the route level or within a specific component tree are not accessible inside the overlay.

The `injector` option allows you to pass a custom Angular `Injector` when creating a modal or popover. This enables overlay components to access services and tokens that are not available in the root injector.

### Use Cases

Custom injectors are useful when you need to:

- Access route-scoped services from within an overlay
- Use Angular CDK's `Dir` directive for bidirectional text support
- Access any providers that are not registered at the root level

### Usage

To use a custom injector, pass it to the `create()` method:

```typescript
import { Component, Injector } from '@angular/core';
import { ModalController } from '@ionic/angular/standalone';
import { MyModalComponent } from './my-modal.component';
import { MyRouteService } from './my-route.service';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  providers: [MyRouteService], // Service provided at route level
})
export class FeatureComponent {
  constructor(private modalController: ModalController, private injector: Injector) {}

  async openModal() {
    const modal = await this.modalController.create({
      component: MyModalComponent,
      injector: this.injector, // Pass the component's injector
    });
    await modal.present();
  }
}
```

The modal component can now inject `MyRouteService`:

```typescript
import { Component, inject } from '@angular/core';
import { MyRouteService } from '../my-route.service';

@Component({
  selector: 'app-my-modal',
  templateUrl: './my-modal.component.html',
})
export class MyModalComponent {
  private myRouteService = inject(MyRouteService);
}
```

### Creating a Custom Injector

You can also create a custom injector with specific providers:

```typescript
import { Component, Injector } from '@angular/core';
import { ModalController } from '@ionic/angular/standalone';
import { MyModalComponent } from './my-modal.component';
import { MyService } from './my.service';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
})
export class FeatureComponent {
  constructor(private modalController: ModalController, private injector: Injector) {}

  async openModal() {
    const myService = new MyService();
    myService.configure({ someOption: true });

    const customInjector = Injector.create({
      providers: [{ provide: MyService, useValue: myService }],
      parent: this.injector,
    });

    const modal = await this.modalController.create({
      component: MyModalComponent,
      injector: customInjector,
    });
    await modal.present();
  }
}
```

### Using with Angular CDK Directionality

A common use case is providing the Angular CDK `Dir` directive to overlays for bidirectional text support:

```typescript
import { Component, Injector } from '@angular/core';
import { Dir } from '@angular/cdk/bidi';
import { ModalController } from '@ionic/angular/standalone';
import { MyModalComponent } from './my-modal.component';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
})
export class FeatureComponent {
  constructor(private modalController: ModalController, private injector: Injector) {}

  async openModal() {
    const modal = await this.modalController.create({
      component: MyModalComponent,
      injector: this.injector, // Includes Dir from component tree
    });
    await modal.present();
  }
}
```

### Popover Controller

The `PopoverController` supports the same `injector` option:

```typescript
import { Component, Injector } from '@angular/core';
import { PopoverController } from '@ionic/angular/standalone';
import { MyPopoverComponent } from './my-popover.component';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
})
export class FeatureComponent {
  constructor(private popoverController: PopoverController, private injector: Injector) {}

  async openPopover(event: Event) {
    const popover = await this.popoverController.create({
      component: MyPopoverComponent,
      event: event,
      injector: this.injector,
    });
    await popover.present();
  }
}
```

## Angular Options Types

Ionic Angular exports its own `ModalOptions` and `PopoverOptions` types that extend the core options with Angular-specific properties like `injector`:

- `ModalOptions` - Extends core `ModalOptions` with the `injector` property
- `PopoverOptions` - Extends core `PopoverOptions` with the `injector` property

These types are exported from `@ionic/angular` and `@ionic/angular/standalone`:

```typescript
import type { ModalOptions, PopoverOptions } from '@ionic/angular/standalone';
```

## Docs for Overlays in Ionic

For full docs and to see usage examples, visit the docs page for each of the overlays in Ionic:

- [Action Sheet](https://ionicframework.com/docs/api/action-sheet)
- [Alert](https://ionicframework.com/docs/api/alert)
- [Loading](https://ionicframework.com/docs/api/loading)
- [Modal](https://ionicframework.com/docs/api/modal)
- [Picker](https://ionicframework.com/docs/api/picker)
- [Popover](https://ionicframework.com/docs/api/popover)
- [Toast](https://ionicframework.com/docs/api/toast)
