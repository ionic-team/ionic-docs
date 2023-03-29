---
title: "ion-item"
---
import Props from '@ionic-internal/component-api/v7/item/props.md';
import Events from '@ionic-internal/component-api/v7/item/events.md';
import Methods from '@ionic-internal/component-api/v7/item/methods.md';
import Parts from '@ionic-internal/component-api/v7/item/parts.md';
import CustomProps from '@ionic-internal/component-api/v7/item/custom-props.md';
import Slots from '@ionic-internal/component-api/v7/item/slots.md';

<head>
  <title>ion-item: Input, Edit, or Delete iOS and Android Item Elements</title>
  <meta name="description" content="iOS/Android用ion-item要素は、テキスト、アイコン、画像、その他のカスタム要素を含みます。これらはリストに配置され、入力、削除、編集などが可能です。" />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

アイテムは、テキスト、アイコン、アバター、画像、Input、その他のネイティブまたはカスタム要素を含むことができる要素です。一般的には、他のアイテムと一緒に[list](./list)に配置されます。アイテムは、スワイプ、削除、並び替え、編集などが可能です。

## 基本的な使い方

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

Buttonsは、アイテムの外側にあるときよりも、アイテムの内側にあるときの方が小さくスタイルされます。ボタンのサイズをアイテムの外側のボタンと同じにするには、`size`属性に`"default"`を設定します。

import Buttons from '@site/static/usage/v7/item/buttons/index.md';

<Buttons />


## Icons in Items

import Icons from '@site/static/usage/v7/item/icons/index.md';

<Icons />


## Item Inputs

import Inputs from '@site/static/usage/v7/item/inputs/index.md';

<Inputs />

## テーマ

### Colors

import Colors from '@site/static/usage/v7/item/theming/colors/index.md';

<Colors />

### CSS Shadow Parts

import CSSParts from '@site/static/usage/v7/item/theming/css-shadow-parts/index.md';

<CSSParts />

## CSSカスタムプロパティ

import CSSProps from '@site/static/usage/v7/item/theming/css-properties/index.md';

<CSSProps />


### Inputハイライト

input を含むアイテムは、フォーカスされたとき、有効なとき、無効なときに、Inputの下のボーダーを異なる色でハイライトします。デフォルトでは、`md`アイテムは高さが `2px` に設定されたハイライトを持ち、`ios`はハイライトを持ちません（技術的に高さは `0` に設定されています）。高さは `--highlight-height` CSS プロパティを使って変更することができます。ハイライトをオフにするには、この変数を `0` に設定します。

ハイライトの色はアイテムの状態に応じて変化しますが、デフォルトではすべての状態でIonicカラーが使用されます。フォーカスされている場合、Inputのハイライトは `primary` カラーを使用します。Inputが有効な場合は `success` カラーが使用され、無効なInputは `danger` カラーが使用されます。これは提供されているCSSプロパティを使ってカスタマイズすることができます。

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
