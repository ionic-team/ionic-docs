---
title: "ion-breadcrumbs"
---
import Props from '@ionic-internal/component-api/v7/breadcrumbs/props.md';
import Events from '@ionic-internal/component-api/v7/breadcrumbs/events.md';
import Methods from '@ionic-internal/component-api/v7/breadcrumbs/methods.md';
import Parts from '@ionic-internal/component-api/v7/breadcrumbs/parts.md';
import CustomProps from '@ionic-internal/component-api/v7/breadcrumbs/custom-props.md';
import Slots from '@ionic-internal/component-api/v7/breadcrumbs/slots.md';



import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

Breadcrumbsは、ユーザーがアプリやサイトのどこにいるのかを示すために使用されるナビゲーションアイテムです。大規模なサイトや、階層的に配置されたページを持つアプリで使用する必要があります。Breadcrumbsは、表示可能な最大数に応じて折りたたむことができ、折りたたんだインジケータをクリックすると、詳細情報を示すポップオーバーが表示され、折りたたんだBreadcrumbを展開することができます。

## 基本的な使い方

import Basic from '@site/static/usage/v7/breadcrumbs/basic/index.md';

<Basic />

## Using Icons

### アイテムでのアイコン

import IconsOnItems from '@site/static/usage/v7/breadcrumbs/icons/icons-on-items/index.md';

<IconsOnItems />

### Custom Separators

import CustomSeparators from '@site/static/usage/v7/breadcrumbs/icons/custom-separators/index.md';

<CustomSeparators />

## Collapsing Items

### Max Items

`maxItems` の値よりも多くのアイテムがある場合、breadcrumbsは折りたたまれます。デフォルトでは、最初と最後のアイテムのみが表示されます。

import MaxItems from '@site/static/usage/v7/breadcrumbs/collapsing-items/max-items/index.md';

<MaxItems />

### Items Before or After Collapse

アイテムが折りたたまれた後、表示するアイテムの数は `itemsBeforeCollapse` と `itemsAfterCollapse` プロパティで制御することができます。

import ItemsBeforeAfter from '@site/static/usage/v7/breadcrumbs/collapsing-items/items-before-after/index.md';

<ItemsBeforeAfter />

### Collapsed Indicator Click -- Expand Breadcrumbs

インジケータをクリックすると、`ionCollapsedClick` イベントが発生します。これは、例えば、breadcrumbsを展開するために使うことができます。

import ExpandOnClick from '@site/static/usage/v7/breadcrumbs/collapsing-items/expand-on-click/index.md';

<ExpandOnClick />

### Collapsed Indicator Click -- Present Popover

また、`ionCollapsedClick` イベントは、隠されたパンくずを表示するオーバーレイ（この場合は `ion-popover` ）を提示するために使用することができます。

import PopoverOnClick from '@site/static/usage/v7/breadcrumbs/collapsing-items/popover-on-click/index.md';

<PopoverOnClick />

## テーマ

### Colors

import Colors from '@site/static/usage/v7/breadcrumbs/theming/colors/index.md';

<Colors />

## CSSカスタムプロパティ

import CSSProps from '@site/static/usage/v7/breadcrumbs/theming/css-properties/index.md';

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
