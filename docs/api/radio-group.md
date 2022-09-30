---
title: "ion-radio-group"
---
import Props from '@site/static/auto-generated/radio-group/props.md';
import Events from '@site/static/auto-generated/radio-group/events.md';
import Methods from '@site/static/auto-generated/radio-group/methods.md';
import Parts from '@site/static/auto-generated/radio-group/parts.md';
import CustomProps from '@site/static/auto-generated/radio-group/custom-props.md';
import Slots from '@site/static/auto-generated/radio-group/slots.md';

<head>
  <title>ion-radio-group | Radio Button Group Usage for Ionic Apps</title>
  <meta name="description" content="A radio group is a group of radio buttons. Radio groups allow a user to select at most one radio button from a set. Learn more about ion-radio-group usage." />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';


A radio group is a container for a group of [radios](./radio). It allows a user to select at most one radio button from a set. Checking one radio button that belongs to a radio group unchecks any previous checked radio button within the same group. For example usage of the radio group, see the [radio](./radio) documentation.


## Interfaces

### RadioGroupChangeEventDetail

```typescript
interface RadioGroupChangeEventDetail<T = any> {
  value: T;
}
```

### RadioGroupCustomEvent

While not required, this interface can be used in place of the `CustomEvent` interface for stronger typing with Ionic events emitted from this component.

```typescript
interface RadioGroupCustomEvent<T = any> extends CustomEvent {
  detail: RadioGroupChangeEventDetail<T>;
  target: HTMLIonRadioGroupElement;
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
