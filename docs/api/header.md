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


Header is a root component of a page that aligns itself to the top of the page. It is recommended to be used as a wrapper for one or more [toolbars](./toolbar), but it can be used to wrap any element. When a toolbar is used inside of a header, the content will be adjusted so it is sized correctly, and the header will account for any device safe areas.


## Basic Usage

import Basic from '@site/static/usage/header/basic/index.md';

<Basic />


## Translucent Header

Headers can match the transparency found in native iOS applications by setting the `translucent` property. In order to see the content scrolling behind the footer, the `fullscreen` property needs to be set on the content. This effect will only apply when the mode is `"ios"` and the device supports [backdrop-filter](https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter#browser_compatibility).

import Translucent from '@site/static/usage/header/translucent/index.md';

<Translucent />


## Fade Header

Many native iOS applications have a fade effect on the toolbar. This can be achieved by setting the `collapse` property on the header to `"fade"`. When the page is first loaded, the background and border on the header will be hidden. As the content is scrolled, the header will fade back in. This effect will only apply when the mode is "ios".

<!-- This functionality can be combined with [Collapsible Large Titles](./title#collapsible-large-titles) as well. The `collapse="condense"` value should be set on the `ion-header` inside of your `ion-content`. The `collapse="fade"` value should be set on the `ion-header` outside of your `ion-content`. -->

import Fade from '@site/static/usage/header/fade/index.md';

<Fade />

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
