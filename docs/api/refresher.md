---
title: "ion-refresher"
---
import Props from '@site/static/auto-generated/refresher/props.md';
import Events from '@site/static/auto-generated/refresher/events.md';
import Methods from '@site/static/auto-generated/refresher/methods.md';
import Parts from '@site/static/auto-generated/refresher/parts.md';
import CustomProps from '@site/static/auto-generated/refresher/custom-props.md';
import Slots from '@site/static/auto-generated/refresher/slots.md';

<head>
  <title>ion-refresher: Pull-to-Refresh Page Content on Ionic Apps</title>
  <meta name="description" content="ion-refresher provides pull-to-refresh functionality on content components. Learn how this lets users pull down on a page using touch to retrieve more data." />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';


Refresher provides pull-to-refresh functionality on a content component. The pull-to-refresh pattern lets a user pull down on a list of data in order to retrieve more data.

Data should be modified during the refresher's output events. Once the async operation has completed and the refreshing should end, `complete()` needs to be called on the refresher.


## Basic Usage

import Basic from '@site/static/usage/refresher/basic/index.md';

<Basic />


## Pull Properties

The refresher has several properties for customizing the pull gesture. Set the `pullFactor` to change the speed of the pull, the `pullMin` property to change the minimum distance the user must pull down, and the `pullMax` property to change the maximum distance the user must pull down before the refresher enters the `refreshing` state.

These properties do not apply when the refresher content uses a spinner which enables the native refresher.

import PullProperties from '@site/static/usage/refresher/pull-properties/index.md';

<PullProperties />


## Custom Refresher Content

The default icon, spinner, and text can be customized on the [refresher content](./refresher-content) based on whether the state of the refresher is `pulling` or `refreshing`.

import CustomContent from '@site/static/usage/refresher/custom-content/index.md';

<CustomContent />


## Native Refreshers

Both iOS and Android platforms provide refreshers that take advantage of properties exposed by their respective devices that give pull to refresh a fluid, native-like feel.

Certain properties such as `pullMin` and `snapbackDuration` are not compatible because much of the native refreshers are scroll-based. See [Refresher Properties](#properties) for more information.

### iOS Usage

Using the iOS native `ion-refresher` requires setting the `pullingIcon` property on `ion-refresher-content` to the value of one of the available spinners. See the [Spinner Documentation](spinner.md#properties) for accepted values. The `pullingIcon` defaults to the `lines` spinner on iOS. The spinner tick marks will be progressively shown as the user pulls down on the page.

The iOS native `ion-refresher` relies on rubber band scrolling in order to work properly and is only compatible with iOS devices as a result. We provide a fallback refresher for apps running in iOS mode on devices that do not support rubber band scrolling.

### Android Usage

Using the MD native `ion-refresher` requires setting the `pullingIcon` property on `ion-refresher-content` to the value of one of the available spinners. See the [ion-spinner Documentation](spinner.md#properties) for accepted values. `pullingIcon` defaults to the `circular` spinner on MD.

### Virtual Scroll Usage

Refresher requires a scroll container to function. When using a virtual scrolling solution, you will need to disable scrolling on the `ion-content` and indicate which element container is responsible for the scroll container with the `.ion-content-scroll-host` class target.

```html
<ion-content scroll-y="false">
  <ion-refresher slot="fixed">
    <ion-refresher-content></ion-refresher-content>
  </ion-refresher>
  <virtual-scroll-element class="ion-content-scroll-host">
    <!-- Your virtual scroll content -->
  </virtual-scroll-element>
</ion-content>
```

## Interfaces

### RefresherEventDetail

```typescript
interface RefresherEventDetail {
  complete(): void;
}
```

### RefresherCustomEvent

While not required, this interface can be used in place of the `CustomEvent` interface for stronger typing with Ionic events emitted from this component.

```typescript
interface RefresherCustomEvent extends CustomEvent {
  detail: RefresherEventDetail;
  target: HTMLIonRefresherElement;
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
