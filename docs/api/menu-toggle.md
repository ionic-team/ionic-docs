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
  <meta name="description" content="MenuToggleコンポーネントは、メニューの開閉を切り替えるために使用します。デフォルトでは、選択されたメニューがアクティブなときにのみ表示されます。使用方法についてもっと読む。" />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

<h2 className="table-of-contents__title">コンテンツ</h2>

<TOCInline
  toc={toc}
  maxHeadingLevel={2}
/>



MenuToggleコンポーネントを使用すると、Menuの表示/非表示を切り替えることができます。

デフォルトでは、選択したMenuがアクティブな場合にのみ表示されます。Menuは、開いたり閉じたりできるときにアクティブになります。Menuが無効になっている場合、または分割ペインとして表示されている場合、メニューは非アクティブとしてマークされ、ion-menu-toggleが非表示になります。

`ion-menu-toggle` を常に表示しておきたい場合は、`autoHide`プロパティを`false`に設定できます。

See the [Menu documentation](./menu#menu-toggle) for an example.

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