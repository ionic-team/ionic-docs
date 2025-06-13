---
title: "ion-reorder-group"
---
import Props from '@ionic-internal/component-api/v8/reorder-group/props.md';
import Events from '@ionic-internal/component-api/v8/reorder-group/events.md';
import Methods from '@ionic-internal/component-api/v8/reorder-group/methods.md';
import Parts from '@ionic-internal/component-api/v8/reorder-group/parts.md';
import CustomProps from '@ionic-internal/component-api/v8/reorder-group/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v8/reorder-group/slots.md';

<head>
  <title>ion-reorder-group: Wrapper Component for Reorder Items</title>
  <meta name="description" content="ion-reorder-group is a wrapper component for items using the ion-reorder component on Ionic apps. Read to learn more about ion-reorder-group usage." />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';


The reorder group is a container for items using the [reorder](./reorder) component. When the user drags an item and drops it in the same or a new position, the `ionReorderEnd` event is dispatched. A handler for this event should be implemented that calls the `complete` method.

The `detail` property of the `ionReorderEnd` event includes all of the relevant information about the reorder operation, including the `from` and `to` indexes. In the context of reordering, an item moves `from` an index `to` a new index. For example usage of the reorder group, see the [reorder](./reorder) documentation.


## Interfaces

### ReorderMoveEventDetail

```typescript
interface ReorderMoveEventDetail {
  from: number;
  to: number;
}
```

### ReorderEndEventDetail

```typescript
interface ReorderEndEventDetail {
  from: number;
  to: number;
  complete: (data?: boolean | any[]) => any;
}
```

### ReorderMoveCustomEvent

While not required, this interface can be used in place of the `CustomEvent` interface for stronger typing with Ionic events emitted from this component.

```typescript
interface ReorderMoveCustomEvent extends CustomEvent {
  detail: ReorderMoveEventDetail;
  target: HTMLIonReorderGroupElement;
}

```

### ReorderEndCustomEvent

While not required, this interface can be used in place of the `CustomEvent` interface for stronger typing with Ionic events emitted from this component.

```typescript
interface ReorderEndCustomEvent extends CustomEvent {
  detail: ReorderEndEventDetail;
  target: HTMLIonReorderGroupElement;
}
```

### ItemReorderEventDetail (deprecated)

**_Deprecated_** — Use the `ionReorderEnd` event with `ReorderEndEventDetail` instead.

```typescript
interface ItemReorderEventDetail {
  from: number;
  to: number;
  complete: (data?: boolean | any[]) => any;
}
```

### ItemReorderCustomEvent (deprecated)

**_Deprecated_** — Use the `ionReorderEnd` event with `ReorderEndCustomEvent` instead.

```typescript
interface ItemReorderCustomEvent extends CustomEvent {
  detail: ItemReorderEventDetail;
  target: HTMLIonReorderGroupElement;
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
