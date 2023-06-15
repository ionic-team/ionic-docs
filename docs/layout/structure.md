---
title: Structure
initialTab: 'preview'
---

import DocsCard from '@components/global/DocsCard';
import DocsCards from '@components/global/DocsCards';

<head>
  <title>Structure Layout | Structures for Content Layout on Ionic Apps</title>
  <meta
    name="description"
    content="Ionic provides several different layouts that can be used to structure an app and its content—from single page layouts, to split pane views and modals."
  />
</head>

Ionic Framework provides several different layouts that can be used to structure an app. From single page layouts, to split pane views and modals.

## Header and Footer Layout

### Header

The most simple layout available consists of a [header](../api/header.md) and [content](../api/content.md). Most pages in an app generally have both of these, but a header is not required in order to use content.

import Header from '@site/static/usage/v7/header/basic/index.md';

<Header />

### Footer

While a toolbar in a header appears above the content, a footer appears below the content. A header and a footer can also be used together on the same page.

import Footer from '@site/static/usage/v7/footer/basic/index.md';

<Footer />

## Tabs Layout

A layout consisting of horizontal [tabs](../api/tabs.md) can be used to let the user quickly change between content views. Each tab can contain static content or a navigation stack by using a [router outlet](../api/router-outlet.md) or [nav](../api/nav.md).

import Tabs from '@site/static/usage/v7/tabs/router/index.md';

<Tabs />

## Menu Layout

A standard layout among mobile apps includes the ability to toggle a side [menu](../api/menu.md) by clicking a button or swiping it open from the side. Side menus are generally used for navigation, but they can contain any content.

import Menu from '@site/static/usage/v7/menu/basic/index.md';

<Menu />

## Split Pane Layout

A [split pane](../api/split-pane.md) layout has a more complex structure because it can combine the previous layouts. It allows for multiple views to be displayed when the viewport is above a specified breakpoint. If the device's screen size is below a certain size, the split pane view will be hidden.

By default, the split pane view will show when the screen is larger than `768px`, or the `md` breakpoint, but this can be customized to use different breakpoints by setting the `when` property. Below is an example where the split pane contains a menu that is visible for `xs` screens and up, or when the viewport is larger than `0px`. This will show the split pane for all screen sizes.

It's important to note that the element with the `id` matching the `contentId` specified by the split pane will be the main content that is always visible. This can be any element, including a [nav](../api/nav.md), [router outlet](../api/router-outlet.md), or [tabs](../api/tabs.md).

import SplitPane from '@site/static/usage/v7/split-pane/basic/index.md';

<SplitPane />
