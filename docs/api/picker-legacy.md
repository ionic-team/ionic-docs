---
title: "ion-picker-legacy"
---
import Props from '@ionic-internal/component-api/v8/picker-legacy/props.md';
import Events from '@ionic-internal/component-api/v8/picker-legacy/events.md';
import Methods from '@ionic-internal/component-api/v8/picker-legacy/methods.md';
import Parts from '@ionic-internal/component-api/v8/picker-legacy/parts.md';
import CustomProps from '@ionic-internal/component-api/v8/picker-legacy/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v8/picker-legacy/slots.md';

<head>
  <title>ion-picker-legacy: A Dialog That Displays Buttons and Columns</title>
  <meta name="description" content="A Picker is a dialog that displays a row of buttons and columns underneath. Ion-picker-legacy appears on top of the app's content, and at the bottom of the viewport." />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="scoped" />

:::warning Deprecation Notice

`ion-picker-legacy` is deprecated and will be removed in the next major release. Migrate to [`ion-picker`](./picker.md) as soon as possible.

:::

A Picker is a dialog that displays a row of buttons and columns underneath. It appears on top of the app's content, and at the bottom of the viewport.

## Inline Pickers (Recommended)

`ion-picker-legacy` can be used by writing the component directly in your template. This reduces the number of handlers you need to wire up in order to present the Picker.

import Trigger from '@site/static/usage/v8/picker-legacy/inline/trigger/index.md';

<Trigger />

### Using `isOpen`

The `isOpen` property on `ion-picker-legacy` allows developers to control the presentation state of the Picker from their application state. This means when `isOpen` is set to `true` the Picker will be presented, and when `isOpen` is set to `false` the Picker will be dismissed.

`isOpen` uses a one-way data binding, meaning it will not automatically be set to `false` when the Picker is dismissed. Developers should listen for the `ionPickerDidDismiss` or `didDismiss` event and set `isOpen` to `false`. The reason for this is it prevents the internals of `ion-picker` from being tightly coupled with the state of the application. With a one way data binding, the Picker only needs to concern itself with the boolean value that the reactive variable provides. With a two way data binding, the Picker needs to concern itself with both the boolean value as well as the existence of the reactive variable itself. This can lead to non-deterministic behaviors and make applications harder to debug.

import IsOpen from '@site/static/usage/v8/picker-legacy/inline/isOpen/index.md';

<IsOpen />

## Controller Pickers

The `pickerController` can be used in situations where more control is needed over when the Picker is presented and dismissed.

import Controller from '@site/static/usage/v8/picker-legacy/controller/index.md';

<Controller />

## Multiple Columns

The `columns` property can be used to display a Picker with multiple columns of different options.

import MultipleColumn from '@site/static/usage/v8/picker-legacy/multiple-column/index.md';

<MultipleColumn />

## Interfaces

### PickerButton

```typescript
interface PickerButton {
  text?: string;
  role?: string;
  cssClass?: string | string[];
  handler?: (value: any) => boolean | void;
}
```

### PickerColumn

```typescript
interface PickerColumn {
  name: string;
  align?: string;
  /**
   * Changing this value allows the initial value of a picker column to be set.
   */
  selectedIndex?: number;
  prevSelected?: number;
  prefix?: string;
  suffix?: string;
  options: PickerColumnOption[];
  cssClass?: string | string[];
  columnWidth?: string;
  prefixWidth?: string;
  suffixWidth?: string;
  optionsWidth?: string;
}
```

### PickerColumnOption

```typescript
interface PickerColumnOption {
  text?: string;
  value?: any;
  disabled?: boolean;
  duration?: number;
  transform?: string;
  selected?: boolean;
  /**
   * The optional text to assign as the aria-label on the picker column option.
   */
  ariaLabel?: string;
}
```

### PickerOptions

```typescript
interface PickerOptions {
  columns: PickerColumn[];
  buttons?: PickerButton[];
  cssClass?: string | string[];
  showBackdrop?: boolean;
  backdropDismiss?: boolean;
  animated?: boolean;

  mode?: Mode;
  keyboardClose?: boolean;
  id?: string;
  htmlAttributes?: { [key: string]: any };

  enterAnimation?: AnimationBuilder;
  leaveAnimation?: AnimationBuilder;
}
```

## Properties
<Props />

## Events
<Events />

## Methods
<Methods />

## CSS Shadow Parts
<Parts />

## CSS Custom Properties
<CustomProps />

## Slots
<Slots />
