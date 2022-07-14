---
title: "ion-breadcrumbs"
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import Props from '@site/static/auto-generated/breadcrumbs/props.md';
import Events from '@site/static/auto-generated/breadcrumbs/events.md';
import Methods from '@site/static/auto-generated/breadcrumbs/methods.md';
import Parts from '@site/static/auto-generated/breadcrumbs/parts.md';
import CustomProps from '@site/static/auto-generated/breadcrumbs/custom-props.md';
import Slots from '@site/static/auto-generated/breadcrumbs/slots.md';



import EncapsulationPill from '@components/page/api/EncapsulationPill';
import APITOCInline from '@components/page/api/APITOCInline';

<EncapsulationPill type="shadow" />

Breadcrumbsは、ユーザーがアプリやサイトのどこにいるのかを示すために使用されるナビゲーションアイテムです。大規模なサイトや、階層的に配置されたページを持つアプリで使用する必要があります。Breadcrumbsは、表示可能な最大数に応じて折りたたむことができ、折りたたんだインジケータをクリックすると、詳細情報を示すポップオーバーが表示され、折りたたんだBreadcrumbを展開することができます。

## 基本的な使い方

import Basic from '@site/static/usage/breadcrumbs/basic/index.md';

<Basic />

## Using Icons

### Icons on Items

import IconsOnItems from '@site/static/usage/breadcrumbs/icons/icons-on-items/index.md';

<IconsOnItems />

### Custom Separators

import CustomSeparators from '@site/static/usage/breadcrumbs/icons/custom-separators/index.md';

<CustomSeparators />

## Collapsing Items

### Max Items

`maxItems` の値よりも多くのアイテムがある場合、breadcrumbsは折りたたまれます。デフォルトでは、最初と最後のアイテムのみが表示されます。

import MaxItems from '@site/static/usage/breadcrumbs/collapsing-items/max-items/index.md';

<MaxItems />

### Items Before or After Collapse

アイテムが折りたたまれた後、表示するアイテムの数は `itemsBeforeCollapse` と `itemsAfterCollapse` プロパティで制御することができます。

import ItemsBeforeAfter from '@site/static/usage/breadcrumbs/collapsing-items/items-before-after/index.md';

<ItemsBeforeAfter />

### Collapsed Indicator Click -- Expand Breadcrumbs

インジケータをクリックすると、`ionCollapsedClick` イベントが発生します。これは、例えば、breadcrumbsを展開するために使うことができます。

import ExpandOnClick from '@site/static/usage/breadcrumbs/collapsing-items/expand-on-click/index.md';

<ExpandOnClick />

### Collapsed Indicator Click -- Present Popover

また、`ionCollapsedClick` イベントは、隠されたパンくずを表示するオーバーレイ（この場合は `ion-popover` ）を提示するために使用することができます。

import PopoverOnClick from '@site/static/usage/breadcrumbs/collapsing-items/popover-on-click/index.md';

<PopoverOnClick />

## Styling

## Color Property

import ColorProp from '@site/static/usage/breadcrumbs/styling/color/index.md';

<ColorProp />

## CSS Properties

import CSSProps from '@site/static/usage/breadcrumbs/styling/css-props/index.md';

<CSSProps />


## プロパティ
<Props />

## イベント
<Events />

## メソッド
<Methods />

## CSS Shadow Parts
<Parts />

## CSSカスタムプロパティ
<CustomProps />

## Slots
<Slots />