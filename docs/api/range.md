---
title: "ion-range"
---
import Props from '@ionic-internal/component-api/v8/range/props.md';
import Events from '@ionic-internal/component-api/v8/range/events.md';
import Methods from '@ionic-internal/component-api/v8/range/methods.md';
import Parts from '@ionic-internal/component-api/v8/range/parts.md';
import CustomProps from '@ionic-internal/component-api/v8/range/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v8/range/slots.md';

<head>
  <title>ion-range: Range Slider Knob Controls with Labels</title>
  <meta name="description" content="ion-range lets you select from a range of values by moving the slider. It accepts dual knobs but one controls the value and labels can be placed on either side." />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />


The Range slider lets users select from a range of values by moving the slider knob. By default one knob controls the value of the range. This behavior can be customized using [dual knobs](#dual-knobs).

By default the Range slider has a minimum value of `0` and a maximum value of `100`. This can be configured with the `min` and `max` properties.

## Labels

Labels should be used to describe the range. They can be used visually, and they will also be read out by screen readers when the user is focused on the range. This makes it easy for the user to understand the intent of the range. Range has several ways to assign a label:

- `label` property: used for plaintext labels
- `label` slot: used for custom HTML labels
- `aria-label`: used to provide a label for screen readers but adds no visible label

### Label Placement

The below demo shows how to use the `labelPlacement` property to change the position of the label relative to the range. While the `label` property is used here, `labelPlacement` can also be used with the `label` slot.

import LabelsPlayground from '@site/static/usage/v8/range/labels/index.md';

<LabelsPlayground />

### Label Slot

While plaintext labels should be passed in via the `label` property, if custom HTML is needed, it can be passed through the `label` slot instead.

import LabelSlotPlayground from '@site/static/usage/v8/range/label-slot/index.md';

<LabelSlotPlayground />

### No Visible Label

If no visible label is needed, developers should still supply an `aria-label` so the range is accessible to screen readers.

import NoVisibleLabel from '@site/static/usage/v8/range/no-visible-label/index.md';

<NoVisibleLabel />

## Decorations

Decorative elements can be passed into the `start` or `end` slots of the range. This is useful for adding icons such as low volume or high volume icons. Since these elements are decorative, they should not be announced by assistive technology such as screen readers.

If the directionality of the document is set to left to right, the contents slotted to the `start` position will display to the left of the range, where as contents slotted to the `end` position will display to the right of the range. In right to left (rtl) directionality, the contents slotted to the `start` position will display to the right of the range, where as contents slotted to the `end` position will display to the left of the range.

import DecorationsPlayground from '@site/static/usage/v8/range/slots/index.md';

<DecorationsPlayground />

## Dual Knobs

Dual knobs introduce two knob controls that users can use to select a value at a lower and upper bounds. When selected, the Range will emit an `ionChange` event with a [RangeValue](#rangevalue), containing the upper and lower values selected.

import DualKnobs from '@site/static/usage/v8/range/dual-knobs/index.md';

<DualKnobs />

## Pins

The `pin` attribute will display the value of the Range above the knob when dragged. This allows users to select a specific value within the Range.

With the `pinFormatter` function, developers can customize the formatting of the range value to the user.

import Pins from '@site/static/usage/v8/range/pins/index.md';

<Pins />

## Snapping & Ticks

Ticks show indications for each available value on the Range. In order to use ticks, developers must set both `snaps` and the `ticks` property to `true`.

With snapping enabled, the Range knob will snap to the nearest available value as the knob is dragged and released.

import SnappingTicks from '@site/static/usage/v8/range/snapping-ticks/index.md';

<SnappingTicks />

## Event Handling

### Using `ionChange`

The `ionChange` event emits as the Range knob value changes.

import IonChangeEvent from '@site/static/usage/v8/range/ion-change-event/index.md';

<IonChangeEvent />

### Using `ionKnobMoveStart` and `ionKnobMoveEnd`

The `ionKnobMoveStart` event emits when the Range knob begins dragging, whether through mouse drag, touch gesture or keyboard interaction. Inversely, `ionKnobMoveEnd` emits when the Range knob is released. Both events emit with the `RangeValue` type and work in combination with the `dualKnobs` property.

import IonKnobMoveEvent from '@site/static/usage/v8/range/ion-knob-move-event/index.md';

<IonKnobMoveEvent />

## Theming

### CSS Custom Properties

Range includes [CSS Variables](#css-custom-properties) to quickly theme and customize the appearance of the Range component to match your application's design.

import CSSProps from '@site/static/usage/v8/range/theming/css-properties/index.md';

<CSSProps />

### CSS Shadow Parts

Range includes [CSS Shadow Parts](#css-shadow-parts) to allow complete customization of specific element nodes within the Range component. CSS Shadow Parts offer the most customization capabilities and are the recommended approach when requiring advance styling with the Range component.

import CSSParts from '@site/static/usage/v8/range/theming/css-shadow-parts/index.md';

<CSSParts />

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
