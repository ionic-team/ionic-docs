---
title: "ion-refresher"
---
import Props from '@ionic-internal/component-api/v7/refresher/props.md';
import Events from '@ionic-internal/component-api/v7/refresher/events.md';
import Methods from '@ionic-internal/component-api/v7/refresher/methods.md';
import Parts from '@ionic-internal/component-api/v7/refresher/parts.md';
import CustomProps from '@ionic-internal/component-api/v7/refresher/custom-props.md';
import Slots from '@ionic-internal/component-api/v7/refresher/slots.md';

<head>
  <title>ion-refresher: Pull-to-Refresh Page Content on Ionic Apps</title>
  <meta name="description" content="ion-refresher provides pull-to-refresh functionality on content components. Learn how this lets users pull down on a page using touch to retrieve more data." />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';


Refresher provides pull-to-refresh functionality on a content component. The pull-to-refresh pattern lets a user pull down on a list of data in order to retrieve more data.

Data should be modified during the refresher's output events. Once the async operation has completed and the refreshing should end, `complete()` needs to be called on the refresher.


## Basic Usage

import Basic from '@site/static/usage/v7/refresher/basic/index.md';

<Basic />


## Pull Properties

The refresher has several properties for customizing the pull gesture. Set the `pullFactor` to change the speed of the pull, the `pullMin` property to change the minimum distance the user must pull down, and the `pullMax` property to change the maximum distance the user must pull down before the refresher enters the `refreshing` state.

These properties do not apply when the [native refresher](#native-refreshers) is enabled.

import PullProperties from '@site/static/usage/v7/refresher/pull-properties/index.md';

<PullProperties />


## Custom Refresher Content

The default icon, spinner, and text can be customized on the [refresher content](./refresher-content) based on whether the state of the refresher is `pulling` or `refreshing`.

Setting `pullingIcon` will disable the [native refresher](#native-refreshers).

import CustomContent from '@site/static/usage/v7/refresher/custom-content/index.md';

<CustomContent />


## Native Refreshers

Both iOS and Android platforms provide refreshers that use properties exposed by their respective devices in order to give pull-to-refresh a fluid, native-like feel.

The iOS and Material Design native refreshers are enabled by default in Ionic. However, the native iOS refresher relies on rubber band scrolling in order to work properly and is only compatible with iOS devices as a result. We provide a fallback refresher for apps running in iOS mode on devices that do not support rubber band scrolling.

The native refresher uses a `circular` spinner for Material Design, while iOS uses the `lines` spinner. On iOS, the tick marks will progressively show as the page is pulled down.

Certain refresher properties such as the [Pull Properties](#pull-properties), `closeDuration` and `snapbackDuration` are not compatible because much of the native refreshers are scroll-based. See [Properties](#properties) for more information on unsupported properties.

The native refreshers can be disabled by setting the `pullingIcon` on the [refresher content](#custom-refresher-content) to any icon or spinner. See the [Ionicons](https://ionic.io/ionicons) and [Spinner](./spinner) documentation for accepted values.


## Usage with Virtual Scroll

Refresher requires a scroll container to function. When using a virtual scrolling solution, you will need to disable scrolling on the `ion-content` and indicate which element container is responsible for the scroll container with the `.ion-content-scroll-host` class target.

import CustomScrollTarget from '@site/static/usage/v7/refresher/custom-scroll-target/index.md';

<CustomScrollTarget />


## Advanced Usage

While the refresher can be used with any type of content, a common use case in native apps is to display a list of data that gets updated on refresh. In the below example, the app generates a list of data and then appends data to the top of the list when the refresh is completed. In a real app, the data would be received and updated after sending a request via a network or database call.

import Advanced from '@site/static/usage/v7/refresher/advanced/index.md';

<Advanced />


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
