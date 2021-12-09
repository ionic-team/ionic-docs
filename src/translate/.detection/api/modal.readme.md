# ion-modal

A Modal is a dialog that appears on top of the app's content, and must be dismissed by the app before interaction can resume. It is useful as a select component when there are a lot of options to choose from, or when filtering items in a list, as well as many other use cases.

## Presenting

There are two ways to use `ion-modal`: inline or via the `modalController`. Each method comes with different considerations, so be sure to use the approach that best fits your use case.

## Inline Modals

`ion-modal` can be used by writing the component directly in your template. This reduces the number of handlers you need to wire up in order to present the modal. See [Usage](#usage) for an example of how to write a modal inline. 

When using `ion-modal` with Angular, React, or Vue, the component you pass in will be destroyed when the modal is dismissed. As this functionality is provided by the JavaScript framework, using `ion-modal` without a JavaScript framework will not destroy the component you passed in. If this is a needed functionality, we recommend using the `modalController` instead.

### Angular 

Since the component you passed in needs to be created when the modal is presented and destroyed when the modal is dismissed, we are unable to project the content using `<ng-content>` internally. Instead, we use `<ng-container>` which expects an `<ng-template>` to be passed in. As a result, when passing in your component you will need to wrap it in an `<ng-template>`:

```html
<ion-modal [isOpen]="isModalOpen">
  <ng-template>
    <app-modal-content></app-modal-content>
  </ng-template>
</ion-modal>
```

### When to use

Using a modal inline is useful when you do not want to explicitly wire up click events to open the modal. For example, you can use the `is-open` property to easily present or dismiss a modal based on some state in your application.

If you need fine grained control over when the modal is presented and dismissed, we recommend you use the `modalController`. 

## Controller Modals

`ion-modal` can also be presented programmatically by using the `modalController` imported from Ionic Framework. This allows you to have complete control over when a modal is presented above and beyond the customization that inline modals give you. See [Usage](#usage) for an example of how to use the `modalController`.

### When to use

We typically recommend that you write your modals inline as it streamlines the amount of code in your application. You should only use the `modalController` for complex use cases where writing a modal inline is impractical.

## Card Modal

Developers can create a card modal effect where the modal appears as a card stacked on top of your app's main content. To create a card modal, developers need to set the `presentingElement` property and the `swipeToClose` properties on `ion-modal`.

The `presentingElement` property accepts a reference to the element that should display under your modal. This is typically a reference to `ion-router-outlet`.

The `swipeToClose` property can be used to control whether or not the card modal can be swiped to close.

See [Usage](#usage) for examples on how to use the sheet modal.

## Sheet Modal

Developers can create a sheet modal effect similar to the drawer components available in maps applications. To create a sheet modal, developers need to set the `breakpoints` and `initialBreakpoint` properties on `ion-modal`.

The `breakpoints` property accepts an array which states each breakpoint that the sheet can snap to when swiped. A `breakpoints` property of `[0, 0.5, 1]` would indicate that the sheet can be swiped to show 0% of the modal, 50% of the modal, and 100% of the modal. When the modal is swiped to 0%, the modal will be automatically dismissed.

The `initialBreakpoint` property is required so that the sheet modal knows which breakpoint to start at when presenting. The `initalBreakpoint` value must also exist in the `breakpoints` array. Given a `breakpoints` value of `[0, 0.5, 1]`, an `initialBreakpoint` value of `0.5` would be valid as `0.5` is in the `breakpoints` array. An `initialBreakpoint` value of `0.25` would not be valid as `0.25` does not exist in the `breakpoints` array.

The `backdropBreakpoint` property can be used to customize the point at which the `ion-backdrop` will begin to fade in. This is useful when creating interfaces that have content underneath the sheet that should remain interactive. A common use case is a sheet modal that overlays a map where the map is interactive until the sheet is fully expanded.

See [Usage](#usage) for examples on how to use the sheet modal.

> Note: The `swipeToClose` property has no effect when using a sheet modal as sheet modals must be swipeable in order to be usable.

## Interfaces

Below you will find all of the options available to you when using the `modalController`. These options should be supplied when calling `modalController.create()`.

```typescript
interface ModalOptions {
  component: any;
  componentProps?: { [key: string]: any };
  presentingElement?: HTMLElement;
  showBackdrop?: boolean;
  backdropDismiss?: boolean;
  cssClass?: string | string[];
  animated?: boolean;
  swipeToClose?: boolean;

  mode?: 'ios' | 'md';
  keyboardClose?: boolean;
  id?: string;

  enterAnimation?: AnimationBuilder;
  leaveAnimation?: AnimationBuilder;
}
```

## Dismissing

The modal can be dismissed after creation by calling the `dismiss()` method on the modal controller. The `onDidDismiss` function can be called to perform an action after the modal is dismissed.

## Styling

Modals are presented at the root of your application so they overlay your entire app. This behavior applies to both inline modals and modals presented from a controller. As a result, custom modal styles can not be scoped to a particular component as they will not apply to the modal. Instead, styles must be applied globally. For most developers, placing the custom styles in `global.css` is sufficient.

> If you are building an Ionic Angular app, the styles need to be added to a global stylesheet file. Read [Style Placement](#style-placement) in the Angular section below for more information.

> `ion-modal` works under the assumption that stacked modals are the same size. As a result, each subsequent modal will have no box shadow and a backdrop opacity of `0`. This is to avoid the effect of shadows and backdrops getting darker with each added modal. This can be changed by setting the `--box-shadow` and `--backdrop-opacity` CSS variables:
``` 
ion-modal.stack-modal {
  --box-shadow: 0 28px 48px rgba(0, 0, 0, 0.4);
  --backdrop-opacity: var(--ion-backdrop-opacity, 0.32);
}
```

## Interfaces

### ModalOptions

```typescript
interface ModalOptions<T extends ComponentRef = ComponentRef> {
  component: T;
  componentProps?: ComponentProps<T>;
  presentingElement?: HTMLElement;
  showBackdrop?: boolean;
  backdropDismiss?: boolean;
  cssClass?: string | string[];
  animated?: boolean;
  swipeToClose?: boolean;

  mode?: Mode;
  keyboardClose?: boolean;
  id?: string;
  htmlAttributes?: ModalAttributes;

  enterAnimation?: AnimationBuilder;
  leaveAnimation?: AnimationBuilder;

  breakpoints?: number[];
  initialBreakpoint?: number;
  backdropBreakpoint?: number;
  handle?: boolean;
}
```

### ModalAttributes

```typescript
interface ModalAttributes extends JSXBase.HTMLAttributes<HTMLElement> {}
```

