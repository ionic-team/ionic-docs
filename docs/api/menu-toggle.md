---
title: "ion-menu-toggle"
hide_table_of_contents: true
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import TOCInline from '@theme/TOCInline';

import Props from '@site/static/auto-generated/menu-toggle/props.md';
import Events from '@site/static/auto-generated/menu-toggle/events.md';
import Methods from '@site/static/auto-generated/menu-toggle/methods.md';
import Parts from '@site/static/auto-generated/menu-toggle/parts.md';
import CustomProps from '@site/static/auto-generated/menu-toggle/custom-props.md';
import Slots from '@site/static/auto-generated/menu-toggle/slots.md';

<head>
  <title>ion-menu-toggle | MenuToggle Component to Open/Close Active Menus</title>
  <meta name="description" content="The MenuToggle component can be used to toggle a menu open or closed—by default, it's only visible when the selected menu is active. Read more about usage." />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

<h2 className="table-of-contents__title">Contents</h2>

<TOCInline
  toc={toc}
  maxHeadingLevel={2}
/>



The MenuToggle component can be used to toggle a menu open or closed.

By default, it's only visible when the selected menu is active. A menu is active when it can be opened/closed. If the menu is disabled or it's being presented as a split-pane, the menu is marked as non-active and ion-menu-toggle hides itself.

In case it's desired to keep `ion-menu-toggle` always visible, the `autoHide` property can be set to `false`.

See the [Menu documentation](./menu#menu-toggle) for an example.

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