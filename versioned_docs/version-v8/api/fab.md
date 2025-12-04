---
title: "ion-fab"
---
import Props from '@ionic-internal/component-api/v8/fab/props.md';
import Events from '@ionic-internal/component-api/v8/fab/events.md';
import Methods from '@ionic-internal/component-api/v8/fab/methods.md';
import Parts from '@ionic-internal/component-api/v8/fab/parts.md';
import CustomProps from '@ionic-internal/component-api/v8/fab/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v8/fab/slots.md';

<head>
  <title>ion-fab: Ionic Floating Action Button for Android and iOS</title>
  <meta name="description" content="Fabs, floating action buttons, are container elements that contain one or more fab buttons. Use ion-fab when creating Android and iOS apps with Ionic Framework." />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

Fabs are container elements that contain one or more [fab buttons](./fab-button). They should be placed in a fixed position that does not scroll with the content. Fabs should have one main fab button. Fabs can also contain one or more [fab lists](./fab-list) which contain related buttons that show when the main fab button is clicked.

## Basic Usage

import BasicUsage from '@site/static/usage/v8/fab/basic/index.md';

<BasicUsage />

## List Side

The `side` property of the [fab list](./fab-list) component controls where it appears relative to the main fab button. A single fab can have multiple fab lists as long as they all have different values for `side`.

import ListSide from '@site/static/usage/v8/fab/list-side/index.md';

<ListSide />

## Positioning

In order to place the fab in a fixed position, it should be assigned to the `fixed` slot of the outer [content](./content) component. Use the `vertical` and `horizontal` props to control the alignment of the fab in the viewport. The `edge` prop will cause the fab button to overlap with the app's header or footer.

import Positioning from '@site/static/usage/v8/fab/positioning/index.md';

<Positioning />

### Safe Area

If there is no `ion-header` or `ion-footer` component, the fab may be covered by a device's notch, status bar, or other device UI. In these cases, the [safe area](/docs/theming/advanced#safe-area-padding) on the top and bottom is not taken into account. This can be adjusted by using the [`--ion-safe-area-(dir)` variables](/docs/theming/advanced#application-variables).

When using a fab with `vertical` set to `"top"` without an `ion-header`, the top margin needs to be set:

```css
ion-fab {
  margin-top: var(--ion-safe-area-top, 0);
}
```

And when using a fab with `vertical` set to `"bottom"` without an `ion-footer`, the bottom margin needs to be set:

```css
ion-fab {
  margin-bottom: var(--ion-safe-area-bottom, 0);
}
```

If there is an `ion-header` (for a fab with `vertical` set to `"top"`) or `ion-footer` (for a fab with `vertical` set to `"bottom"`), no CSS adjustment is needed because the fab gets positioned relative to the header or footer.

import SafeArea from '@site/static/usage/v8/fab/safe-area/index.md';

<SafeArea />

### Relative to Infinite List

In scenarios where a view contains many interactive elements, such as an infinitely-scrolling list, it may be challenging for users to navigate to the Floating Action Button (FAB) if it is placed below all the items in the DOM.

By setting the `fixedSlotPlacement` property on [Content](./content) to `before`, the FAB will be placed before the main content in the DOM. This ensures that the FAB receives keyboard focus before other interactive elements receive focus, making it easier for users to access the FAB.

import BeforeContent from '@site/static/usage/v8/fab/before-content/index.md';

<BeforeContent />

## Button Sizing

Setting the `size` property of the main fab button to `"small"` will render it at a mini size. Note that this property will not have an effect when used with the inner fab buttons.

import ButtonSizing from '@site/static/usage/v8/fab/button-sizing/index.md';

<ButtonSizing />

## Theming

### Colors

import Colors from '@site/static/usage/v8/fab/theming/colors/index.md';

<Colors />

### CSS Custom Properties

import CSSCustomProperties from '@site/static/usage/v8/fab/theming/css-custom-properties/index.md';

<CSSCustomProperties />

### CSS Shadow Parts

import CSSShadowParts from '@site/static/usage/v8/fab/theming/css-shadow-parts/index.md';

<CSSShadowParts />

## Accessibility

### Labels

Since FABs are allowed to contain only icons, developers must provide an `aria-label` on each `ion-fab-button` instance. Without this label, assistive technologies will not be able to announce the purpose of each button.

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
