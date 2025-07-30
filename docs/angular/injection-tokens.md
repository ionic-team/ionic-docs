---
title: Angular Injection Tokens
sidebar_label: Injection Tokens
---

<head>
  <title>Angular Injection Tokens | Access Ionic Elements via Dependency Injection</title>
  <meta
    name="description"
    content="Learn how to use Ionic's Angular injection tokens to access Ionic elements through Angular's dependency injection system for more streamlined component interactions."
  />
</head>

Ionic provides Angular injection tokens that allow you to access Ionic elements through Angular's dependency injection system. This provides a more Angular-idiomatic way to interact with Ionic components programmatically.

## IonModalToken

The `IonModalToken` injection token allows you to inject a reference to the current modal element directly into your Angular components. This is particularly useful when you need to programmatically control modal behavior, listen to modal events, or access modal properties.

Starting in `@ionic/angular` v8.7.0, you can use this injection token to streamline modal interactions in your Angular applications.

### Basic Usage

To use the `IonModalToken`, inject it into your component's constructor:

```tsx
import { Component, inject } from '@angular/core';
import { IonButton, IonContent, IonHeader, IonModalToken, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-modal',
  template: `
    <ion-header>
      <ion-toolbar>
        <ion-title>Modal Content</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <p>This is modal content</p>
      <ion-button (click)="closeModal()">Close Modal</ion-button>
    </ion-content>
  `,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton],
})
export class ModalComponent {
  private modalToken = inject(IonModalToken);

  closeModal() {
    this.modalToken.dismiss();
  }
}
```

### Listening to Modal Events

You can use the injected modal reference to listen to modal lifecycle events:

```tsx
import { Component, inject, OnInit } from '@angular/core';
import { IonButton, IonContent, IonHeader, IonModalToken, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-modal',
  template: `
    <ion-header>
      <ion-toolbar>
        <ion-title>Modal with Events</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <p>Check the console for modal events</p>
      <ion-button (click)="closeModal()">Close</ion-button>
    </ion-content>
  `,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton],
})
export class ModalComponent implements OnInit {
  private modalToken = inject(IonModalToken);

  ngOnInit() {
    this.modalToken.addEventListener('ionModalWillDismiss', (event) => {
      console.log('Modal will dismiss:', event.detail);
    });

    this.modalToken.addEventListener('ionModalDidDismiss', (event) => {
      console.log('Modal did dismiss:', event.detail);
    });
  }

  closeModal() {
    this.modalToken.dismiss({ result: 'closed by button' });
  }
}
```

### Accessing Modal Properties

The injected modal reference provides access to all modal properties and methods:

```tsx
import { Component, inject, OnInit } from '@angular/core';
import { IonButton, IonContent, IonHeader, IonModalToken, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-modal',
  template: `
    <ion-header>
      <ion-toolbar>
        <ion-title>Modal Properties</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <p>Modal ID: {{ modalId }}</p>
      <ion-button (click)="toggleBackdropDismiss()"> Toggle Backdrop Dismiss: {{ backdropDismiss }} </ion-button>
    </ion-content>
  `,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton],
})
export class ModalComponent implements OnInit {
  private modalToken = inject(IonModalToken);

  modalId = '';
  backdropDismiss = true;

  ngOnInit() {
    this.modalId = this.modalToken.id || 'No ID';
    this.backdropDismiss = this.modalToken.backdropDismiss;
  }

  toggleBackdropDismiss() {
    this.backdropDismiss = !this.backdropDismiss;
    this.modalToken.backdropDismiss = this.backdropDismiss;
  }
}
```

### Opening a Modal with Injection Token Content

When opening a modal that uses the injection token, you can pass the component directly to the modal controller:

```tsx
import { Component, inject } from '@angular/core';
import { IonContent, IonButton, ModalController } from '@ionic/angular/standalone';
import { ModalContentComponent } from './modal-content.component';

@Component({
  selector: 'app-home',
  template: `
    <ion-content>
      <ion-button (click)="openModal()">Open Modal</ion-button>
    </ion-content>
  `,
})
export class HomePage {
  private modalController = inject(ModalController);

  async openModal() {
    const modal = await this.modalController.create({
      component: ModalContentComponent,
      componentProps: {
        // Any props you want to pass to the modal content
      },
    });

    await modal.present();
  }
}
```

## Benefits

Using injection tokens provides several advantages:

- **Type Safety**: Full TypeScript support with proper typing for the modal element
- **Angular Integration**: Works seamlessly with Angular's dependency injection system
- **Simplified Code**: Eliminates the need for `ViewChild` queries or manual element references
- **Better Testing**: Easier to mock and test components that use injection tokens
- **Standalone Components**: Full compatibility with Angular's standalone component architecture
