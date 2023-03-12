---
title: "ion-item"
---
import Props from '@site/static/auto-generated/item/props.md';
import Events from '@site/static/auto-generated/item/events.md';
import Methods from '@site/static/auto-generated/item/methods.md';
import Parts from '@site/static/auto-generated/item/parts.md';
import CustomProps from '@site/static/auto-generated/item/custom-props.md';
import Slots from '@site/static/auto-generated/item/slots.md';

<head>
  <title>ion-item: Input, Edit, or Delete iOS and Android Item Elements</title>
  <meta name="description" content="iOS/Android用ion-item要素は、テキスト、アイコン、画像、その他のカスタム要素を含みます。これらはリストに配置され、入力、削除、編集などが可能です。" />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

アイテムは、テキスト、アイコン、アバター、画像、入力、その他のネイティブまたはカスタム要素を含むことができる要素です。一般的には、他のアイテムと一緒に[list](./list)に配置されます。アイテムは、スワイプ、削除、並び替え、編集などが可能です。

## Basic Usage

アイテムはテキストを左寄せにし、テキストがアイテムより幅が広い場合は省略記号を追加しています。この動作は、Ionic Framework が提供する CSS Utilities を使って変更することができます。例えば、以下の例では `.ion-text-wrap` を使っています。テキストを変換するためにアイテムに追加できる他のクラスについては、[CSS Utilities Documentation](/docs/layout/css-utilities) を参照してください。

import Basic from '@site/static/usage/v7/item/basic/index.md';

<Basic />


## クリック可能なItems

`href` か `button` プロパティが設定されている場合、itemは "clickable（クリック可能）" と見なされます。clickableなitemsには、インタラクティブに操作できることを示す視覚的な違いがいくつかあります。たとえば、clickableなitemは、`md` modeではrippleエフェクトを持ち、`ios` modeではハイライト表示され、`ios` modeでの [detail arrow](/#detail-arrows) が表示されます。

import Clickable from '@site/static/usage/v7/item/clickable/index.md';

<Clickable />


## Detail Arrows

デフォルトでは、[clickableなitems](/#clickable-items) は、`ios` modeで右矢印アイコンを表示します。clickableな要素の右矢印アイコンを非表示にするには、 `detail` プロパティを `false` に設定します。自動的に表示されない項目に右矢印アイコンを表示するには、`detail`プロパティを `true` に設定します。

import DetailArrows from '@site/static/usage/v7/item/detail-arrows/index.md';

<DetailArrows />


<!--

TODO add this functionality back as a css variable

This feature is not enabled by default on clickable items for the `md` mode, but it can be enabled by setting the following CSS variable:

```css
--item-detail-push-show: true;
```

See the [theming documentation](/docs/theming/css-variables) for more information.

-->


## Item Lines

アイテムはデフォルトで下部のボーダーを挿入して表示します。ボーダーは左側にパディングを持ち、 `"start"` スロットにスロットされたコンテンツの下に表示されることはありません。 `lines` プロパティを `"full"` または `"none"` に変更すると、それぞれ全幅のボーダーが表示され、ボーダーを表示しないようになります。

import Lines from '@site/static/usage/v7/item/lines/index.md';

<Lines />


## Media Items

[Avatars](./avatar) and [Thumbnails](./thumbnail) can be slotted inside of an item. This is useful when making lists of images and text.

import Media from '@site/static/usage/v7/item/media/index.md';

<Media />


## Buttons in Items

Buttons are styled smaller inside of items than when they are outside of them. To make the button size match buttons outside of an item, set the `size` attribute to `"default"`.

import Buttons from '@site/static/usage/v7/item/buttons/index.md';

<Buttons />


## Icons in Items

import Icons from '@site/static/usage/v7/item/icons/index.md';

<Icons />


## Item Inputs

import Inputs from '@site/static/usage/v7/item/inputs/index.md';

<Inputs />

## Theming

### Colors

import Colors from '@site/static/usage/v7/item/theming/colors/index.md';

<Colors />

### CSS Shadow Parts

import CSSParts from '@site/static/usage/v7/item/theming/css-shadow-parts/index.md';

<CSSParts />

### CSS Custom Properties

import CSSProps from '@site/static/usage/v7/item/theming/css-properties/index.md';

<CSSProps />


### Input Highlight

Items containing an input will highlight the bottom border of the input with a different color when focused, valid, or invalid. By default, `md` items have a highlight with a height set to `2px` and `ios` has no highlight (technically the height is set to `0`). The height can be changed using the `--highlight-height` CSS property. To turn off the highlight, set this variable to `0`.

The highlight color changes based on the item state, but all of the states use Ionic colors by default. When focused, the input highlight will use the `primary` color. If the input is valid it will use the `success` color, and invalid inputs will use the `danger` color. This can be customized using the provided CSS properties.

import InputHighlight from '@site/static/usage/v7/item/theming/input-highlight/index.md';

<InputHighlight />


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
