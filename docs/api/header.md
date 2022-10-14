---
title: "ion-header"
---
import Props from '@site/static/auto-generated/header/props.md';
import Events from '@site/static/auto-generated/header/events.md';
import Methods from '@site/static/auto-generated/header/methods.md';
import Parts from '@site/static/auto-generated/header/parts.md';
import CustomProps from '@site/static/auto-generated/header/custom-props.md';
import Slots from '@site/static/auto-generated/header/slots.md';

<head>
  <title>ion-header: Header Parent Component for Ionic Framework Apps</title>
  <meta name="description" content="Ion-header is a parent component that holds the toolbar. It's important to note that ion-header needs to be the one of the three root elements of a page." />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';


Header is a parent component that holds the toolbar component.
It's important to note that ion-header needs to be the one of the three root elements of a page

## Basic Usage

import Basic from '@site/static/usage/header/basic/index.md';

<Basic />


## Fade Header

The `collapse` property can be set to `'fade'` on a page's main `ion-header` to have the background color of the toolbars fade in as users scroll. This provides the same fade effect that is found in many native iOS applications.

This functionality can be combined with [Collapsible Large Titles](https://ionicframework.com/docs/api/title#collapsible-large-titles) as well. The `collapse="condense"` value should be set on the `ion-header` inside of your `ion-content`. The `collapse="fade"` value should be set on the `ion-header` outside of your `ion-content`.

### Usage with Virtual Scroll

Fade and collapsible large titles require a scroll container to function. When using a virtual scrolling solution, you will need to disable scrolling on the `ion-content` and indicate which element container is responsible for the scroll container with the `.ion-content-scroll-host` class target.

```html
<ion-header collapse="fade">
  <ion-toolbar>
    <ion-title>Header</ion-title>
  </ion-toolbar>
</ion-header>
<ion-content fullscreen="true" scroll-y="false">
  <ion-header collapse="condense">
    <ion-toolbar>
      <ion-title size="large">Header</ion-title>
    </ion-toolbar>
  </ion-header>
  <virtual-scroll-element class="ion-content-scroll-host">
    <!-- Your virtual scroll content -->
  </virtual-scroll-element>
</ion-content>
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
