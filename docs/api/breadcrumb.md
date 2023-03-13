---
title: "ion-breadcrumb"
---
import Props from '@site/static/auto-generated/breadcrumb/props.md';
import Events from '@site/static/auto-generated/breadcrumb/events.md';
import Methods from '@site/static/auto-generated/breadcrumb/methods.md';
import Parts from '@site/static/auto-generated/breadcrumb/parts.md';
import CustomProps from '@site/static/auto-generated/breadcrumb/custom-props.md';
import Slots from '@site/static/auto-generated/breadcrumb/slots.md';

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />


A Breadcrumb is a single navigation item that is a child of the Breadcrumbs component. A breadcrumb can link elsewhere in an app or it can be plain text. Each breadcrumb has a separator between it and the next breadcrumb and can optionally contain an icon.

See the [Breadcrumbs](./breadcrumbs) documentation for more information.

## Interfaces

### BreadcrumbCollapsedClickEventDetail

```typescript
interface BreadcrumbCollapsedClickEventDetail {
  collapsedBreadcrumbs?: HTMLIonBreadcrumbElement[];
}
```

### BreadcrumbCustomEvent

While not required, this interface can be used in place of the `CustomEvent` interface for stronger typing .

```typescript
interface BreadcrumbCustomEvent extends CustomEvent {
  detail: BreadcrumbCollapsedClickEventDetail;
  target: HTMLIonBreadcrumbElement;
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
