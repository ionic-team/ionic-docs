---
title: "ion-grid"
---
import Props from '@ionic-internal/component-api/v7/grid/props.md';
import Events from '@ionic-internal/component-api/v7/grid/events.md';
import Methods from '@ionic-internal/component-api/v7/grid/methods.md';
import Parts from '@ionic-internal/component-api/v7/grid/parts.md';
import CustomProps from '@ionic-internal/component-api/v7/grid/custom-props.md';
import Slots from '@ionic-internal/component-api/v7/grid/slots.md';

<head>
  <title>Ion-Grid: Display Grids to Build Mobile-First Custom App Layout</title>
  <meta name="description" content="Ion-Gridは、12カラムのレイアウトと画面サイズに応じて異なるブレークポイントを持つカスタムアプリケーションの表示レイアウトを構築するためのモバイルファーストのフレックスボックスシステムです。" />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />


グリッドは、カスタムレイアウトを構築するための強力なモバイルファーストのフレックスボックスシステムです。グリッド、[row(s)](row.md)、 [column(s)](col.md) の3つのユニットで構成されています。カラムは行を埋めるように展開され、追加のカラムに合うようにサイズを変更します。これは、画面サイズに応じて異なるブレークポイントを持つ12列のレイアウトをベースにしています。カラムの数は、CSSを使ってカスタマイズすることができます。

## 概要

- グリッドは、すべての行と列のコンテナとして機能します。グリッドは、そのコンテナの幅を完全に占有します。
  が、`fixed`プロパティを追加すると、画面サイズに応じた幅が設定されます。後述の[Fixed Grid](#fixed-grid)を参照してください。
- 行は、列を適切に並べるための水平方向のグループです。
- コンテンツは列の中に配置されるべきで、列だけが行の直属の子になることができる。
- `size`プロパティは、1行あたりデフォルトの12列のうち、使用する列の数を示します。
  つまり、`size="4"`をカラムに追加することで、グリッドの1/3、つまり12カラムのうち4カラムを占有することができます。
- sizeに値を指定しないカラムは、自動的に等しい幅を持つようになります。例えば、4つのカラムは、それぞれ自動的に25％の幅になります。
- カラムの幅はパーセンテージで設定されるため、常に流動的で親要素からの相対的なサイズになります。
- 個々のカラムの間にはパディングがあります。しかし、パディングはグリッドから削除することができます。
  カラムを表示するには、グリッドに `ion-no-padding` クラスを追加します。グリッドに適用できるその他のスタイルについては、[CSS Utilities](../layout/css-utilities) を参照してください。
- グリッドの階層は5つあり、レスポンシブ・ブレークポイントごとに1つずつ、すべてのブレークポイント（特小）、小、中、大、特大が用意されています。
- グリッドの階層は最小幅を基準としており、その階層とそれよりも大きい階層に適用されます。
  (例: `size-sm="4"` は、小型、中型、大型、特大のデバイスに適用されます)。
- グリッドはCSS変数でカスタマイズすることができます。 [グリッドのカスタマイズ](#customizing-the-grid) を参照してください。

## デフォルトのブレイキング・ポイント

グリッドのデフォルトのブレークポイントとそれに対応するプロパティは、以下の表で定義されています。ブレイクポイントの値は、現時点ではカスタマイズすることができません。カスタマイズできない理由については、 [メディアクエリの変数](../theming/advanced#variables-in-media-queries) を参照してください。

| Name | Value  | Width Property | Offset Property | Push Property | Pull Property | Description                          |
| ---- | ------ | -------------- | --------------- | ------------- | ------------- | ------------------------------------ |
| xs   | 0      | `size`         | `offset`        | `push`        | `pull`        | Set columns when (min-width: 0)      |
| sm   | 576px  | `sizeSm`       | `offsetSm`      | `pushSm`      | `pullSm`      | Set columns when (min-width: 576px)  |
| md   | 768px  | `sizeMd`       | `offsetMd`      | `pushMd`      | `pullMd`      | Set columns when (min-width: 768px)  |
| lg   | 992px  | `sizeLg`       | `offsetLg`      | `pushLg`      | `pullLg`      | Set columns when (min-width: 992px)  |
| xl   | 1200px | `sizeXl`       | `offsetXl`      | `pushXl`      | `pullXl`      | Set columns when (min-width: 1200px) |


## 基本的な使い方

デフォルトでは、すべてのデバイスと画面サイズにおいて、列は行の中で同じ幅を占めます。

import Basic from '@site/static/usage/v7/grid/basic/index.md';

<Basic />


## グリッドの固定

グリッドはコンテナの幅を100%占有します。グリッドに `fixed` プロパティを追加することで、画面サイズに応じた幅を設定することができます。各ブレイクポイントのグリッドの幅は以下の表に記載されていますが、カスタマイズすることも可能です。詳しくは、[グリッドのカスタマイズ](#customizing-the-grid) を参照してください。以下の例をStackBlitzで開き、画面のサイズを変更すると、グリッドの幅が変化することを確認できます。

| Name | Value  | Description                                       |
| ---- | ------ | ------------------------------------------------- |
| xs   | 100%   | Width is 100% for xs screens                      |
| sm   | 540px  | Set grid width to 540px when (min-width: 576px)   |
| md   | 720px  | Set grid width to 720px when (min-width: 768px)   |
| lg   | 960px  | Set grid width to 960px when (min-width: 992px)   |
| xl   | 1140px | Set grid width to 1140px when (min-width: 1200px) |

import Fixed from '@site/static/usage/v7/grid/fixed/index.md';

<Fixed />


## カラムのサイズ

カラムは、全体のカラム数のうち特定の数を占めるように特定のサイズに設定したり、コンテンツに応じて幅を変更したりすることができます。デフォルトのカラム数は12ですが、これはカスタマイズ可能です。詳しくは、下記の [カラム数](#number-of-columns) の項を参照してください。

### コンテンツベースサイズ

`size`を`"auto"`に設定することで、カラムはコンテンツの自然な幅に基づいたサイズを設定することができます。これは、カラムを特定のピクセル数のような絶対的な幅に設定するときに必要です。自動幅のカラムの隣にあるカラムは、行を埋めるようにリサイズされます。

import SizeAuto from '@site/static/usage/v7/grid/size-auto/index.md';

<SizeAuto />


### 指定されたサイズ

カラムの `size` を設定すると、他のカラムは自動的にそのカラムの周りにリサイズされます。すべてのカラムにサイズが指定され、それがカラムの総数に満たない場合、カラムの後に空白ができます。

import Size from '@site/static/usage/v7/grid/size/index.md';

<Size />

### レスポンシブサイズ

`size`プロパティは、すべての [ブレークポイント](#default-breakpoints) の列幅を変更します。また、Columnでは、"size" の末尾にブレークポイント名を付加したいくつかのsizeプロパティが用意されています。これらのプロパティは、画面サイズに応じてカラムの幅を変更するために使用することができます。以下の例をStackBlitzで開き、画面のサイズを変更すると、カラムの幅が変化するのがわかります。

import SizeResponsive from '@site/static/usage/v7/grid/size-responsive/index.md';

<SizeResponsive />


## 列のオフセット

カラムは、全カラム数のうち一定のカラム数だけ右にずらすオフセットが可能です。

### 指定されたオフセット

カラムは、`offset`プロパティを用いて右に移動させることができます。このプロパティは、カラムの左マージンを指定したカラムの数だけ増やします。また、その右側にカラムが存在する場合は、そのカラムを移動させます。

import Offset from '@site/static/usage/v7/grid/offset/index.md';

<Offset />

### レスポンシブオフセット

`offset`プロパティは、すべての[ブレークポイント](#default-breakpoints)に対して、カラムの左マージンを変更します。また、カラムには、"offset"の末尾にブレークポイント名が付加されたいくつかのoffsetプロパティが用意されています。これらのプロパティは、画面サイズに応じてカラムのオフセットを変更するために使用することができます。以下の例をStackBlitzで開き、画面のサイズを変更すると、カラムのオフセットが変化するのを確認できます。

import OffsetResponsive from '@site/static/usage/v7/grid/offset-responsive/index.md';

<OffsetResponsive />


## コラム プッシュ＆プル

カラムの総数のうち、一定のカラム数だけ、カラムを右に押したり、左に引いたりすることができます。

### 指定されたプッシュ＆プル

`push`と`pull`のプロパティを追加することで、カラムの並び替えを行うことができます。これらのプロパティは、指定された列数だけ列の `left` と `right` を調整し、列の並び替えを簡単に行うことができます。この場合、他のカラムが配置されている場所にカラムを移動させると、カラムが重なることになります。

import PushPull from '@site/static/usage/v7/grid/push-pull/index.md';

<PushPull />

### プッシュ＆プルのレスポンシブ対応

`push`と`pull`プロパティは、すべての[ブレークポイント](#default-breakpoints)に対して、カラムの位置を変更します。また、カラムには、"push" / "pull "の末尾にブレークポイント名を付加した `push` と `pull` プロパティがいくつかあります。これらのプロパティは、画面サイズに応じてカラムの位置を変更するために使用することができます。以下の例をStackBlitzで開き、画面のサイズを変更すると、列の位置が変化するのがわかります。

import PushPullResponsive from '@site/static/usage/v7/grid/push-pull-responsive/index.md';

<PushPullResponsive />

## Alignment

### 垂直方向のアライメント

行に異なるクラスを追加することで、すべての列を行の内側に垂直に揃えることができます。利用可能なクラスの一覧は、[css utilities](/layout/css-utilities#flex-container-properties) を参照してください。

import VerticalAlignment from '@site/static/usage/v7/grid/vertical-alignment/index.md';

<VerticalAlignment />


### 水平アライメント

行に異なるクラスを追加することで、すべての列を行の内側に水平に揃えることができます。利用可能なクラスの一覧は、[css utilities](/layout/css-utilities.md#flex-container-properties) を参照してください。

import HorizontalAlignment from '@site/static/usage/v7/grid/horizontal-alignment/index.md';

<HorizontalAlignment />

## グリッドのカスタマイズ

組み込みのCSS変数を使用することで、定義済みのグリッド属性をカスタマイズすることができます。パディングの値やカラム数などを変更することができます。

### 固定幅

固定グリッドの幅は、CSS変数 `--ion-grid-width` を用いてすべてのブレイクポイントに対して設定することができます。個々のブレイクポイントを上書きするには、`--ion-grid-width-{breakpoint}` CSS変数を使用します。各ブレークポイントのデフォルト値は、[固定グリッド](#fixed-grid)セクションに記載されています。以下の例をStackBlitzで開き、画面のサイズを変更すると、グリッドの幅が変化するのが確認できます。

import Width from '@site/static/usage/v7/grid/customizing/width/index.md';

<Width />

### 列数

グリッドのカラム数は `--ion-grid-columns` というCSS変数で変更することができます。デフォルトでは12列ですが、これを任意の正の整数に変更し、各列の幅を計算するために使用することができます。

import ColumnNumber from '@site/static/usage/v7/grid/customizing/column-number/index.md';

<ColumnNumber />

### Padding

グリッドコンテナのpaddingは、CSS変数 `--ion-grid-padding` を用いてすべてのブレイクポイントに対して設定することができます。個々のブレイクポイントを上書きするには、 `--ion-grid-padding-{breakpoint}` CSS変数を使用します。

列の padding は、CSS 変数 `--ion-grid-column-padding` ですべてのブレイクポイントに対して設定できます。個々のブレイクポイントを上書きするには、 `--ion-grid-column-padding-{breakpoint}` CSS変数を使用します。

import Padding from '@site/static/usage/v7/grid/customizing/padding/index.md';

<Padding />

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
