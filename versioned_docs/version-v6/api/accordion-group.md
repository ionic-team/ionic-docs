---
title: "ion-accordion-group"
---
import Props from '@site/static/auto-generated/accordion-group/props.md';
import Events from '@site/static/auto-generated/accordion-group/events.md';
import Methods from '@site/static/auto-generated/accordion-group/methods.md';
import Parts from '@site/static/auto-generated/accordion-group/parts.md';
import CustomProps from '@site/static/auto-generated/accordion-group/custom-props.md';
import Slots from '@site/static/auto-generated/accordion-group/slots.md';

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

Accordion group is a container for accordion instances. It manages the state of the accordions and provides keyboard navigation.

See the [Accordion](./accordion) documentation for more information.


## Interfaces

### AccordionGroupChangeEventDetail

```typescript
interface AccordionGroupChangeEventDetail<T = any> {
  value: T;
}
```

### AccordionGroupCustomEvent

While not required, this interface can be used in place of the `CustomEvent` interface for stronger typing with Ionic events emitted from this component.

```typescript
interface AccordionGroupCustomEvent<T = any> extends CustomEvent {
  detail: AccordionGroupChangeEventDetail<T>;
  target: HTMLIonAccordionGroupElement;
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
