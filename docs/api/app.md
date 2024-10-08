---
title: "ion-app"
---
import Props from '@ionic-internal/component-api/v8/app/props.md';
import Events from '@ionic-internal/component-api/v8/app/events.md';
import Methods from '@ionic-internal/component-api/v8/app/methods.md';
import Parts from '@ionic-internal/component-api/v8/app/parts.md';
import CustomProps from '@ionic-internal/component-api/v8/app/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v8/app/slots.md';

<head>
  <title>ion-app: Container Element for an Ionic Application</title>
  <meta name="description" content="ion-app is a container element for an Ionic application. Apps can have many Ionic components including menus, headers, content, and footers. Read to learn more." />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

App is a container element for an Ionic application. There should only be one `<ion-app>` element per project. An app can have many Ionic components including menus, headers, content, and footers. The overlay components get appended to the `<ion-app>` when they are presented.

Using `ion-app` enables the following behaviors:

* [Keyboard Lifecycle Events](../developing/keyboard#keyboard-lifecycle-events) without the need for any native plugins
* [Hardware Back Button Listeners](../developing/hardware-back-button) for customizing the hardware back button behavior on Android devices
* Status bar support in Capacitor or Cordova which allows users to scroll to the top of the view by tapping the status bar
* Scroll assist utilities which scroll the content so focused text inputs are not covered by the on-screen keyboard
* [Ripple effect](./ripple-effect) when activating buttons on Material Design mode
* Other tap and focus utilities which make the experience of using an Ionic app feel more native

## Programmatic Focus

Ionic offers focus utilities for components with the `ion-focusable` class. These utilities automatically manage focus for components when certain keyboard keys, like <kbd>Tab</kbd>, are pressed. Components can also be programmatically focused in response to user actions using the `setFocus` method from `ion-app`.

import SetFocus from '@site/static/usage/v8/app/set-focus/index.md';

<SetFocus />

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
