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

The `initialBreakpoint` property is required so that the sheet modal knows which breakpoint to start at when presenting. The `initialBreakpoint` value must also exist in the `breakpoints` array. Given a `breakpoints` value of `[0, 0.5, 1]`, an `initialBreakpoint` value of `0.5` would be valid as `0.5` is in the `breakpoints` array. An `initialBreakpoint` value of `0.25` would not be valid as `0.25` does not exist in the `breakpoints` array.

The `backdropBreakpoint` property can be used to customize the point at which the `ion-backdrop` will begin to fade in. This is useful when creating interfaces that have content underneath the sheet that should remain interactive. A common use case is a sheet modal that overlays a map where the map is interactive until the sheet is fully expanded.

See [Usage](#usage) for examples on how to use the sheet modal.

> Note: The `swipeToClose` property has no effect when using a sheet modal as sheet modals must be swipeable in order to be usable.

## Preventing a Modal from Dismissing

When entering data into a modal, it is often desirable to have a way of preventing accidental data loss. The `canDismiss` property on `ion-modal` gives developers control over when a modal is allowed to dismiss.

There are two different ways of using the `canDismiss` property.

> Note: When using a sheet modal, `canDismiss` will not be checked on swipe if there is no `0` breakpoint set. However, it will still be checked when pressing `Esc` or the hardware back button.

### Setting a boolean value

Developers can set `canDismiss` to a boolean value. If `canDismiss` is `true`, then the modal will close when users attempt to dismiss the modal. If `canDismiss` is `false`, then the modal will not close when users attempt to dismiss the modal.

Setting a boolean value should be used when you need to require a particular action to be taken prior to a modal being dismissed. For example, if developers want to require that a "Terms of Use" checkbox is checked prior to closing the modal, they could set `canDismiss` to `false` initially and update it to `true` when the checkbox is checked.

### Setting a callback function

Developers can set `canDismiss` to be a function. This function must return a `Promise` that resolves to either `true` or `false`. If the promise resolves to `true`, then the modal will dismiss. If the promise resolves to `false`, then the modal will not dismiss.

Setting a callback function should be used when you have complex dismissing criteria such as showing a confirmation dialog prior to dismissing the modal. The option that users select in this dialog can then be used to determine whether or not the modal should proceed with dismissing.

Note that setting a callback function will cause the swipe gesture to be interrupted when using a card or sheet modal. This is because Ionic does not know what your callback function will resolve to ahead of time.

## Interfaces

### ModalOptions

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
### ModalCustomEvent

While not required, this interface can be used in place of the `CustomEvent` interface for stronger typing with Ionic events emitted from this component.

```typescript
interface ModalCustomEvent extends CustomEvent {
  target: HTMLIonModalElement;
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
  htmlAttributes?: { [key: string]: any };

  enterAnimation?: AnimationBuilder;
  leaveAnimation?: AnimationBuilder;

  breakpoints?: number[];
  initialBreakpoint?: number;
  backdropBreakpoint?: number;
  handle?: boolean;
}
```


## Accessibility

### Keyboard Navigation

| Key   | Function            |
| ----- | ------------------- |
| `Esc` | Dismisses the modal |

### Screen Readers

Modals have the `aria-modal` attribute applied. This attribute can cause assistive technologies to limit navigation to the modal element's contents. As a result, using gestures that move to the next or previous items may not focus elements outside of the modal. This applies even when the backdrop is disabled in sheet modals using the `backdropBreakpoint` property.

Assistive technologies will not limit navigation to the modal element's contents if developers manually move focus. However, manually moving focus outside of a modal is not supported in Ionic for modals that have focus trapping enabled.

See https://w3c.github.io/aria/#aria-modal for more information.

### Focus Trapping

When a modal is presented, focus will be trapped inside of the presented modal. Users can focus other interactive elements inside the modal but will never be able to focus interactive elements outside the modal while the modal is presented. For applications that present multiple stacked modals, focus will be trapped on the modal that was presented last.

Sheet modals that have had their backdrop disabled by the `backdropBreakpoint` property are not subject to focus trapping.

### Sheet Modals

Sheet modals allow users to interact with content behind the modal when the `backdropBreakpoint` property is used. The backdrop will be disabled up to and including the specified `backdropBreakpoint` and will be enabled after it.

When the backdrop is disabled, users will be able to interact with elements outside the sheet modal using a pointer or keyboard. Assistive technologies may not focus outside the sheet modal by default due to the usage of `aria-modal`. We recommend avoiding features such as autofocus here as it can cause assistive technologies to jump between two interactive contexts without warning the user.  
