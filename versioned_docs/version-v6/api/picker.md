---
title: 'ion-picker'
---

import Props from './auto-generated/picker/props.md';
import Events from './auto-generated/picker/events.md';
import Methods from './auto-generated/picker/methods.md';
import Parts from './auto-generated/picker/parts.md';
import CustomProps from './auto-generated/picker/custom-props.md';
import Slots from './auto-generated/picker/slots.md';

<head>
  <title>Picker | Display Buttons and Columns for ion-picker on Ionic Apps</title>
  <meta
    name="description"
    content="A Picker is a dialog that displays a row of buttons and columns underneath. Ion-picker appears on top of the app's content, and at the bottom of the viewport."
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="scoped" />

A Picker is a dialog that displays a row of buttons and columns underneath. It appears on top of the app's content, and at the bottom of the viewport.

## Single Column

Display a list of options in a single, scrollable column.

import SingleColumn from '@site/static/usage/v6/picker/single-column/index.md';

<SingleColumn />

## Multiple Columns

Display multiple columns of different options.

import MultipleColumn from '@site/static/usage/v6/picker/multiple-column/index.md';

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
