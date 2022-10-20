---
title: "ion-reorder-group"
hide_table_of_contents: true
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import TOCInline from '@theme/TOCInline';

import Props from '@site/static/auto-generated/reorder-group/props.md';
import Events from '@site/static/auto-generated/reorder-group/events.md';
import Methods from '@site/static/auto-generated/reorder-group/methods.md';
import Parts from '@site/static/auto-generated/reorder-group/parts.md';
import CustomProps from '@site/static/auto-generated/reorder-group/custom-props.md';
import Slots from '@site/static/auto-generated/reorder-group/slots.md';

<head>
  <title>ion-reorder-group: Wrapper Component for Ionic Framework Apps</title>
  <meta name="description" content="ion-reorder-group is a wrapper component for items using the ion-reorder component on Ionic apps. Read to learn more about ion-reorder-group usage." />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';


<h2 className="table-of-contents__title">Contents</h2>

<TOCInline
  toc={toc}
  maxHeadingLevel={2}
/>


The reorder group is a wrapper component for items using the `ion-reorder` component. See the [Reorder documentation](reorder.md) for further information about the anchor component that is used to drag items within the `ion-reorder-group`.

Once the user drags an item and drops it in a new position, the `ionItemReorder` event is dispatched. A handler for it should be implemented that calls the `complete` method.

The `detail` property of the `ionItemReorder` event includes all of the relevant information about the reorder operation, including the `from` and `to` indexes. In the context of reordering, an item moves `from` an index `to` a new index.


## Interfaces

### ItemReorderEventDetail

```typescript
interface ItemReorderEventDetail {
  from: number;
  to: number;
  complete: (data?: boolean | any[]) => any;
}
```

### ItemReorderCustomEvent

While not required, this interface can be used in place of the `CustomEvent` interface for stronger typing with Ionic events emitted from this component.

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
