---
title: "ion-tab"
---

import Props from '@ionic-internal/component-api/v8/tab/props.md';
import Events from '@ionic-internal/component-api/v8/tab/events.md';
import Methods from '@ionic-internal/component-api/v8/tab/methods.md';
import Parts from '@ionic-internal/component-api/v8/tab/parts.md';
import CustomProps from '@ionic-internal/component-api/v8/tab/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v8/tab/slots.md';

<head>
  <title>ion-tab: Ionic Framework Application Component</title>
  <meta name="description" content="ion-tab is a child component of tabs. Each ion-tab can contain a top level navigation stack for an application or a single view. Read to learn more." />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />


The tab component is a child component of [tabs](tabs.md). Each tab can contain a top level navigation stack for an app or a single view. An app can have many tabs, all with their own independent navigation.

:::note
Angular, React, and Vue can only use this component when the `ion-tabs` component is configured for [basic usage](./tabs.md#basic-usage). When setting up tabs with routing, the `ion-tab` component cannot be used.

In JavaScript, this component can be used with the `ion-tabs` component configured for either [basic usage](./tabs.md#basic-usage) or [usage with router](./tabs.md#usage-with-router).
:::


See the [tabs documentation](tabs.md) for more details on configuring tabs.



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