# ion-popover

Popoverは、現在のページの上部に表示されるダイアログです。これは何にでも使用できますが、通常はナビゲーションバーに収まらないオーバーフローアクションに使用されます。

There are two ways to use `ion-popover`: inline or via the `popoverController`. Each method comes with different considerations, so be sure to use the approach that best fits your use case.

## Inline Popovers

`ion-popover` can be used by writing the component directly in your template. This reduces the number of handlers you need to wire up in order to present the popover. See [Usage](#usage) for an example of how to write a popover inline. 

When using `ion-popover` with Angular, React, or Vue, the component you pass in will be destroyed when the popover is dismissed. As this functionality is provided by the JavaScript framework, using `ion-popover` without a JavaScript framework will not destroy the component you passed in. If this is a needed functionality, we recommend using the `popoverController` instead.

### Angular 

Since the component you passed in needs to be created when the popover is presented and destroyed when the popover is dismissed, we are unable to project the content using `<ng-content>` internally. Instead, we use `<ng-container>` which expects an `<ng-template>` to be passed in. As a result, when passing in your component you will need to wrap it in an `<ng-template>`:

```html
<ion-popover [isOpen]="isPopoverOpen">
  <ng-template>
    <app-popover-content></app-popover-content>
  </ng-template>
</ion-popover>
```

### When to use

Using a popover inline is useful when you do not want to explicitly wire up click events to open the popover. For example, you can use the `trigger` property to designate a button that should present the popover when clicked. You can also use the `trigger-action` property to customize whether the popover should be presented when the trigger is left clicked, right clicked, or hovered over.

If you need fine grained control over when the popover is presented and dismissed, we recommend you use the `popoverController`. 

## Controller Popovers

`ion-popover` can also be presented programmatically by using the `popoverController` imported from Ionic Framework. This allows you to have complete control over when a popover is presented above and beyond the customization that inline popovers give you. See [Usage](#usage) for an example of how to use the `popoverController`.

### When to use

We typically recommend that you write your popovers inline as it streamlines the amount of code in your application. You should only use the `popoverController` for complex use cases where writing a popover inline is impractical. When using a controller, your popover is not created ahead of time, so properties such as `trigger` and `trigger-action` are not applicable here. In addition, nested popovers are not compatible with the controller approach because the popover is automatically added to the root of your application when the `create` method is called.


## Styling

Popovers are presented at the root of your application so they overlay your entire app. This behavior applies to both inline popovers and popovers presented from a controller. As a result, custom popover styles can not be scoped to a particular component as they will not apply to the popover. Instead, styles must be applied globally. For most developers, placing the custom styles in `global.css` is sufficient.

> If you are building an Ionic Angular app, the styles need to be added to a global stylesheet file. Read [Style Placement](#style-placement) in the Angular section below for more information.


## Triggers

A trigger for an `ion-popover` is the element that will open a popover when interacted with. The interaction behavior can be customized by setting the `trigger-action` property. Note that `trigger-action="context-menu"` will prevent your system's default context menu from opening. View the [Usage](#usage) section for an example of how to use triggers.

> Triggers are not applicable when using the `popoverController` because the `ion-popover` is not created ahead of time.

## Positioning

### Reference

When presenting a popover, Ionic Framework needs a reference point to present the popover relative to. With `reference="event"`, the popover will be presented relative to the x-y coordinates of the pointer event that was dispatched on your trigger element. With `reference="trigger"`, the popover will be presented relative to the bounding box of your trigger element.

### Side

Regardless of what you choose for your reference point, you can position a popover to the `top`, `right`, `left`, or `bottom` of your reference point by using the `side` property. You can also use the `start` or `end` values if you would like the side to switch based on LTR or RTL modes.

### Alignment

The `alignment` property allows you to line up an edge of your popover with a corresponding edge on your trigger element. The exact edge that is used depends on the value of the `side` property. 

### Offsets

If you need finer grained control over the positioning of your popover you can use the `--offset-x` and `--offset-y` CSS Variables. For example, `--offset-x: 10px` will move your popover content to the right by `10px`.

## Sizing

When making dropdown menus, you may want to have the width of the popover match the width of the trigger element. Doing this without knowing the trigger width ahead of time is tricky. You can set the `size` property to `'cover'` and Ionic Framework will ensure that the width of the popover matches the width of your trigger element. If you are using the `popoverController`, you must provide an event via the `event` option and Ionic Framework will use `event.target` as the reference element.

## Nested Popovers

When using `ion-popover` inline, you can nested popovers to create nested dropdown menus. When doing this, only the backdrop on the first popover will appear so that the screen does not get progressively darker as you open more popovers. See the [Usage](./#usage) section for an example on how to write a nested popover.

You can use the `dismissOnSelect` property to automatically close the popover when the popover content has been clicked. This behavior does not apply when clicking a trigger element for another popover.

> Nested popovers cannot be created when using the `popoverController` because the popover is automatically added to the root of your application when the `create` method is called.

## Interfaces

Below you will find all of the options available to you when using the `popoverController`. These options should be supplied when calling `popoverController.create()`.

```typescript
interface PopoverOptions {
  component: any;
  componentProps?: { [key: string]: any };
  showBackdrop?: boolean;
  backdropDismiss?: boolean;
  translucent?: boolean;
  cssClass?: string | string[];
  event?: Event;
  animated?: boolean;

  mode?: 'ios' | 'md';
  keyboardClose?: boolean;
  id?: string;
  htmlAttributes?: PopoverAttributes;

  enterAnimation?: AnimationBuilder;
  leaveAnimation?: AnimationBuilder;
  
  size?: PopoverSize;
  dismissOnSelect?: boolean;
  reference?: PositionReference;
  side?: PositionSide;
  align?: PositionAlign;
}
```

### PopoverAttributes

```typescript
interface PopoverAttributes extends JSXBase.HTMLAttributes<HTMLElement> {}
```

## Types

Below you will find all of the custom types for `ion-popover`:

```typescript
type PopoverSize = 'cover' | 'auto';
type TriggerAction = 'click' | 'hover' | 'context-menu';
type PositionReference = 'trigger' | 'event';
type PositionSide = 'top' | 'right' | 'bottom' | 'left' | 'start' | 'end';
type PositionAlign = 'start' | 'center' | 'end';
```

## Accessibility

### Keyboard Navigation

`ion-popover` has basic keyboard support for navigating between focusable elements inside of the popover. The following table details what each key does:

| Key                | Function                                                     |
| ------------------ | ------------------------------------------------------------ |
| `Tab`              | Moves focus to the next focusable element.                   |
| `Shift` + `Tab`    | Moves focus to the previous focusable element.               |
| `Esc`              | Closes the popover. |
| `Space` or `Enter` | Clicks the focusable element. |


`ion-popover` has full arrow key support for navigating between `ion-item` elements with the `button` property. The most common use case for this is as a dropdown menu in a desktop-focused application. In addition to the basic keyboard support, the following table details arrow key support for dropdown menus:

| Key                | Function                                                       |
| ------------------ | -------------------------------------------------------------- |
| `ArrowUp`          | Moves focus to the previous focusable element.                 |
| `ArrowDown`        | Moves focus to the next focusable element.                     |
| `Home`             | Moves focus to the first focusable element.                    |
| `End`              | Moves focus to the last focusable element.                     |
| `ArrowLeft`        | When used in a child popover, closes the popover and returns focus to the parent popover. |
| `Space`, `Enter`, and `ArrowRight`       | When focusing a trigger element, opens the associated popover. |
