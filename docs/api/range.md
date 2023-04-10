---
title: "ion-range"
---
import Props from '@ionic-internal/component-api/v7/range/props.md';
import Events from '@ionic-internal/component-api/v7/range/events.md';
import Methods from '@ionic-internal/component-api/v7/range/methods.md';
import Parts from '@ionic-internal/component-api/v7/range/parts.md';
import CustomProps from '@ionic-internal/component-api/v7/range/custom-props.md';
import Slots from '@ionic-internal/component-api/v7/range/slots.md';

<head>
  <title>Range Slider | ion-range: Slider Knob Controls with Labels</title>
  <meta name="description" content="ion-range lets you select from a range of values by moving the slider. It accepts dual knobs but one controls the value and labels can be placed on either side." />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />


The Range slider lets users select from a range of values by moving the slider knob. By default one knob controls the value of the range. This behavior can be customized using [dual knobs](#dual-knobs).

By default the Range slider has a minimum value of `0` and a maximum value of `100`. This can be configured with the `min` and `max` properties.

## Basic Usage

import Basic from '@site/static/usage/v7/range/basic/index.md';

<Basic />

## Label Placement

import LabelsPlayground from '@site/static/usage/v7/range/labels/index.md';

<LabelsPlayground />

## Decorations

Decorative elements can be passed into the `start` or `end` slots of the range. This is useful for adding icons such as low volume or high volume icons. Since these elements are decorative, they should not be announced by assistive technology such as screen readers.

If the directionality of the document is set to left to right, the contents slotted to the `start` position will display to the left of the range, where as contents slotted to the `end` position will display to the right of the range. In right to left (rtl) directionality, the contents slotted to the `start` position will display to the right of the range, where as contents slotted to the `end` position will display to the left of the range.

import DecorationsPlayground from '@site/static/usage/v7/range/slots/index.md';

<DecorationsPlayground />

## Dual Knobs

Dual knobs introduce two knob controls that users can use to select a value at a lower and upper bounds. When selected, the Range will emit an `ionChange` event with a [RangeValue](#rangevalue), containing the upper and lower values selected.

import DualKnobs from '@site/static/usage/v7/range/dual-knobs/index.md';

<DualKnobs />

## Pins

The `pin` attribute will display the value of the Range above the knob when dragged. This allows users to select a specific value within the Range.

With the `pinFormatter` function, developers can customize the formatting of the range value to the user.

import Pins from '@site/static/usage/v7/range/pins/index.md';

<Pins />

## Snapping & Ticks

Ticks show indications for each available value on the Range. In order to use ticks, developers must set both `snaps` and the `ticks` property to `true`.

With snapping enabled, the Range knob will snap to the nearest available value as the knob is dragged and released.

import SnappingTicks from '@site/static/usage/v7/range/snapping-ticks/index.md';

<SnappingTicks />

## Event Handling

### Using `ionChange`

The `ionChange` event emits as the Range knob value changes.

import IonChangeEvent from '@site/static/usage/v7/range/ion-change-event/index.md';

<IonChangeEvent />

### Using `ionKnobMoveStart` and `ionKnobMoveEnd`

The `ionKnobMoveStart` event emits when the Range knob begins dragging, whether through mouse drag, touch gesture or keyboard interaction. Inversely, `ionKnobMoveEnd` emits when the Range knob is released. Both events emit with the `RangeValue` type and work in combination with the `dualKnobs` property.

import IonKnobMoveEvent from '@site/static/usage/v7/range/ion-knob-move-event/index.md';

<IonKnobMoveEvent />

## Theming

### CSS Custom Properties

Range includes [CSS Variables](#css-custom-properties) to quickly theme and customize the appearance of the Range component to match your application's design.

import CSSProps from '@site/static/usage/v7/range/theming/css-properties/index.md';

<CSSProps />

### CSS Shadow Parts

Range includes [CSS Shadow Parts](#css-shadow-parts) to allow complete customization of specific element nodes within the Range component. CSS Shadow Parts offer the most customization capabilities and are the recommended approach when requiring advance styling with the Range component.

import CSSParts from '@site/static/usage/v7/range/theming/css-shadow-parts/index.md';

<CSSParts />

## Migrating from Legacy Range Syntax

A simpler range syntax was introduced in Ionic 7.0. This new syntax reduces the boilerplate required to setup an range, resolves accessibility issues, and improves the developer experience.

Developers can perform this migration one range at a time. While developers can continue using the legacy syntax, we recommend migrating as soon as possible.

### Using the Modern Syntax

Using the modern syntax involves removing the `ion-label` and passing the label directly inside of `ion-range` using `slot="label"`. The placement of the label can be configured using the `labelPlacement` property on `ion-range`.

import Migration from '@site/static/usage/v7/range/migration/index.md';

<Migration />


:::note
In past versions of Ionic, `ion-item` was required for `ion-range` to function properly. Starting in Ionic 7.0, `ion-range` should only be used in an `ion-item` when the item is placed in an `ion-list`. Additionally, `ion-item` is no longer required for `ion-range` to function properly.
:::

### Using the Legacy Syntax

Ionic uses heuristics to detect if an app is using the modern range syntax. In some instances, it may be preferable to continue using the legacy syntax. Developers can set the `legacy` property on `ion-range` to `true` to force that instance of the range to use the legacy syntax.


## Interfaces

### RangeChangeEventDetail

```typescript
interface RangeChangeEventDetail {
  value: RangeValue;
}
```

### RangeKnobMoveStartEventDetail

```typescript
interface RangeKnobMoveStartEventDetail {
  value: RangeValue;
}
```

### RangeKnobMoveEndEventDetail

```typescript
interface RangeKnobMoveEndEventDetail {
  value: RangeValue;
}
```

### RangeCustomEvent

While not required, this interface can be used in place of the `CustomEvent` interface for stronger typing with Ionic events emitted from this component.

```typescript
interface RangeCustomEvent extends CustomEvent {
  detail: RangeChangeEventDetail;
  target: HTMLIonRangeElement;
}
```

## Types

### RangeValue

```typescript
type RangeValue = number | { lower: number, upper: number };
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
