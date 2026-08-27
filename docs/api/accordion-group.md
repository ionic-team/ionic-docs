---
title: 'ion-accordion-group'
---

import Props from '@ionic-internal/component-api/v9/accordion-group/props.mdx';
import Events from '@ionic-internal/component-api/v9/accordion-group/events.mdx';
import Methods from '@ionic-internal/component-api/v9/accordion-group/methods.mdx';
import Parts from '@ionic-internal/component-api/v9/accordion-group/parts.mdx';
import CustomProps from '@ionic-internal/component-api/v9/accordion-group/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v9/accordion-group/slots.mdx';

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

Accordion group is a container for accordion instances. It manages the state of the accordions and provides keyboard navigation.

Refer to the [Accordion](./accordion) documentation for more information.

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
