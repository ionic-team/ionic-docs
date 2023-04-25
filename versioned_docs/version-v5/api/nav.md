---
title: 'ion-nav | Nav View Component for Ionic Framework Apps'
description: "ion-nav is a standalone for loading arbitrary, and pushing new, components on to the stack. Loading Nav view, and pushing others, won't affect overall routers."
sidebar_label: 'ion-nav'
demoUrl: '/docs/demos/api/nav/index.html'
demoSourceUrl: 'https://github.com/ionic-team/ionic-docs/tree/main/static/demos/api/nav/index.html'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import Props from '@site/static/auto-generated/v5/nav/props.md';
import Events from '@site/static/auto-generated/v5/nav/events.md';
import Methods from '@site/static/auto-generated/v5/nav/methods.md';
import Parts from '@site/static/auto-generated/v5/nav/parts.md';
import CustomProps from '@site/static/auto-generated/v5/nav/custom-props.md';
import Slots from '@site/static/auto-generated/v5/nav/slots.md';

# ion-nav

Nav is a standalone component for loading arbitrary components and pushing new components on to the stack.

Unlike Router Outlet, Nav is not tied to a particular router. This means that if we load a Nav component, and push other components to the stack, they will not affect the app's overall router. This fits use cases where you could have a modal, which needs its own sub-navigation, without making it tied to the apps URL.

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
