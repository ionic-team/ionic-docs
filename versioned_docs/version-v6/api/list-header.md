---
title: 'ion-list-header'
---

import Props from '@ionic-internal/component-api/v6/list-header/props.md';
import Events from '@ionic-internal/component-api/v6/list-header/events.md';
import Methods from '@ionic-internal/component-api/v6/list-header/methods.md';
import Parts from '@ionic-internal/component-api/v6/list-header/parts.md';
import CustomProps from '@ionic-internal/component-api/v6/list-header/custom-props.md';
import Slots from '@ionic-internal/component-api/v6/list-header/slots.md';

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

List headers are block elements that are used to describe the contents of a [list](./list). Unlike [item dividers](./item-divider), list headers should only be used once at the top of a list of [items](./item).

## Basic Usage

import Basic from '@site/static/usage/v6/list-header/basic/index.md';

<Basic />

## Buttons in List Headers

A [button](./button) placed in a list header can be useful for showing part of a list and redirecting to the full list with the button.

import Buttons from '@site/static/usage/v6/list-header/buttons/index.md';

<Buttons />

## List Header Lines

List headers do not show a bottom border by default. The `lines` property can be modified to `"full"` or `"inset"` which will show a full width border or an inset border with left padding, respectively.

import Lines from '@site/static/usage/v6/list-header/lines/index.md';

<Lines />

## Theming

### Colors

import Colors from '@site/static/usage/v6/list-header/theming/colors/index.md';

<Colors />

### CSS Custom Properties

import CSSProps from '@site/static/usage/v6/list-header/theming/css-properties/index.md';

<CSSProps />

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
