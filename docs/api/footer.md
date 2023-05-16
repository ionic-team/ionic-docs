---
title: "ion-footer"
---
import Props from '@ionic-internal/component-api/v7/footer/props.md';
import Events from '@ionic-internal/component-api/v7/footer/events.md';
import Methods from '@ionic-internal/component-api/v7/footer/methods.md';
import Parts from '@ionic-internal/component-api/v7/footer/parts.md';
import CustomProps from '@ionic-internal/component-api/v7/footer/custom-props.md';
import Slots from '@ionic-internal/component-api/v7/footer/slots.md';

<head>
  <title>Page Footer | Ionic App Footer: Wrapper Root Page Component</title>
  <meta name="description" content="A footer is a root component that sits at the bottom of a page. Ionic footers can be a wrapper for ion-toolbar to make sure the content area is sized correctly." />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';


Footer is a root component of a page that aligns itself to the bottom of the page. It is recommended to be used as a wrapper for one or more [toolbars](./toolbar), but it can be used to wrap any element. When a toolbar is used inside of a footer, the content will be adjusted so it is sized correctly, and the footer will account for any device safe areas.

## Basic Usage

import Basic from '@site/static/usage/v7/footer/basic/index.md';

<Basic />


## Translucent Footer

Footers can match the transparency found in native iOS applications by setting the `translucent` property. In order to see the content scrolling behind the footer, the `fullscreen` property needs to be set on the content. This effect will only apply when the mode is `"ios"` and the device supports [backdrop-filter](https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter#browser_compatibility).

import Translucent from '@site/static/usage/v7/footer/translucent/index.md';

<Translucent />


## Fade Footer

Many native iOS applications have a fade effect on the toolbar. This can be achieved by setting the `collapse` property on the footer to `"fade"`. When the content is scrolled to the end, the background and border on the footer will fade away. This effect will only apply when the mode is `"ios"`.

import Fade from '@site/static/usage/v7/footer/fade/index.md';

<Fade />


### Usage with Virtual Scroll

A fade footer requires a scroll container to work properly. When using a virtual scrolling solution, a custom scroll target needs to be provided. Scrolling on the content needs to be disabled and the `.ion-content-scroll-host` class needs to be added to the element responsible for scrolling.

import CustomScrollTarget from '@site/static/usage/v7/footer/custom-scroll-target/index.md';

<CustomScrollTarget />

## Borders

In `"md"` mode, the footer will have a `box-shadow` on the top. In `"ios"` mode, it will receive a `border` on the top. These can be removed by adding the `.ion-no-border` class to the footer.

import NoBorder from '@site/static/usage/v7/footer/no-border/index.md';

<NoBorder />


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
