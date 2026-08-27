---
title: 'ion-grid'
---
import Props from '@ionic-internal/component-api/v9/grid/props.md';
import Events from '@ionic-internal/component-api/v9/grid/events.md';
import Methods from '@ionic-internal/component-api/v9/grid/methods.md';
import Parts from '@ionic-internal/component-api/v9/grid/parts.md';
import CustomProps from '@ionic-internal/component-api/v9/grid/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v9/grid/slots.md';

<head>
  <title>ion-grid: Display Grids for Mobile-First Custom App Layout</title>
  <meta name="description" content="Ion-Gridは、12カラムのレイアウトと画面サイズに応じて異なるブレークポイントを持つカスタムアプリケーションの表示レイアウトを構築するためのモバイルファーストのフレックスボックスシステムです。" />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />


グリッドは、カスタムレイアウトを構築するための強力なモバイルファーストのフレックスボックスシステムです。グリッド、[row(s)](row.md)、 [column(s)](col.md) の 3 つのユニットで構成されています。カラムは行を埋めるように展開され、追加のカラムに合うようにサイズを変更します。これは、画面サイズに応じて異なるブレークポイントを持つ 12 列のレイアウトをベースにしています。カラムの数は、CSS を使ってカスタマイズすることができます。

## 概要

- グリッドは、すべての行と列を格納するコンテナとして機能します。グリッドはコンテナの全幅を占めますが、
  `fixed`プロパティを追加すると、画面サイズに基づいて幅が設定されます。詳細は下記の[固定グリッド](#fixed-grid)を参照してください。
- 行は列を横方向に整列させる水平のグループです。
- コンテンツは列内に配置する必要があり、行の直下に配置できるのは列のみです。
- `size`プロパティは、1 行あたりのデフォルト 12 列のうち使用する列数を示します。
  したがって、`size="4"`を列に追加すると、グリッドの 3 分の 1、つまり 12 列のうち 4 列分を占めることができます。
- サイズが設定されていない列は、自動的に等しい幅になります。例えば、4 列がある場合、それぞれ自動的に 25％の幅になります。
- 列の幅はパーセンテージで設定されるため、常に可変であり、親要素に対して相対的にサイズが調整されます。
- 個々の列の間にはパディングがあります。ただし、グリッドと列に`ion-no-padding`クラスを追加することで
  パディングを削除することができます。グリッドに適用できるその他のスタイルについては、[CSS ユーティリティ](../layout/css-utilities)を参照してください。
- グリッドには、5 つのグリッド階層があります。それぞれのレスポンシブブレークポイントに対応しています：すべてのブレークポイント（超小）、小、中、大、超大です。
- グリッド階層は最小幅を基準にしており、その階層およびそれ以上の大きさの階層に適用されます
  （例：`size-sm="4"`は小、中、大、超大のデバイスに適用されます）。
- グリッドは CSS 変数を通じてカスタマイズできます。詳細は[グリッドのカスタマイズ](#customizing-the-grid)を参照してください。

## デフォルトのブレイキング・ポイント {/* #default-breakpoints */}

グリッドのデフォルトのブレークポイントと、それに対応するプロパティは以下の表で定義されています。現時点ではブレークポイントの値をカスタマイズすることはできません。カスタマイズできない理由については、[メディアクエリの変数](../theming/advanced#variables-in-media-queries)を参照してください。

| Name | Value  | Width Property | Offset Property | Push Property | Pull Property | Description                          |
| ---- | ------ | -------------- | --------------- | ------------- | ------------- | ------------------------------------ |
| xs   | 0      | `size`         | `offset`        | `push`        | `pull`        | Set columns when (min-width: 0)      |
| sm   | 576px  | `sizeSm`       | `offsetSm`      | `pushSm`      | `pullSm`      | Set columns when (min-width: 576px)  |
| md   | 768px  | `sizeMd`       | `offsetMd`      | `pushMd`      | `pullMd`      | Set columns when (min-width: 768px)  |
| lg   | 992px  | `sizeLg`       | `offsetLg`      | `pushLg`      | `pullLg`      | Set columns when (min-width: 992px)  |
| xl   | 1200px | `sizeXl`       | `offsetXl`      | `pushXl`      | `pullXl`      | Set columns when (min-width: 1200px) |


## 基本的な使い方

デフォルトでは、すべてのデバイスと画面サイズにおいて、列は行の中で同じ幅を占めます。

import Basic from '@site/static/usage/v9/grid/basic/index.mdx';

<Basic />


## グリッドの固定 {/* #fixed-grid */}

グリッドはコンテナの幅の 100%を使用します。グリッドに`fixed`プロパティを追加することで、画面サイズに基づいて幅が設定されます。各ブレークポイントのグリッド幅は以下の表に示されていますが、カスタマイズすることも可能です。詳細については、[グリッドのカスタマイズ](#customizing-the-grid)を参照してください。以下の例を StackBlitz で開き、画面のサイズを変更してグリッド幅の変化を確認してください。

| Name | Value  | Description                                       |
| ---- | ------ | ------------------------------------------------- |
| xs   | 100%   | Width is 100% for xs screens                      |
| sm   | 540px  | Set grid width to 540px when (min-width: 576px)   |
| md   | 720px  | Set grid width to 720px when (min-width: 768px)   |
| lg   | 960px  | Set grid width to 960px when (min-width: 992px)   |
| xl   | 1140px | Set grid width to 1140px when (min-width: 1200px) |

import Fixed from '@site/static/usage/v9/grid/fixed/index.mdx';

<Fixed />


## カラムのサイズ

カラムは特定のサイズに設定して、全カラム数のうち特定の数を占めるようにすることや、コンテンツに応じて幅を変更することができます。デフォルトのカラム数は 12 ですが、カスタマイズすることも可能です。詳細については、以下の[カラム数](#number-of-columns)のセクションを参照してください。

### コンテンツベースサイズ

`size`を`"auto"`に設定することで、カラムはコンテンツの自然な幅に基づいたサイズを設定することができます。これは、カラムを特定のピクセル数のような絶対的な幅に設定するときに必要です。自動幅のカラムの隣にあるカラムは、行を埋めるようにリサイズされます。

import SizeAuto from '@site/static/usage/v9/grid/size-auto/index.mdx';

<SizeAuto />


### 指定されたサイズ

カラムの `size` を設定すると、他のカラムは自動的にそのカラムの周りにリサイズされます。すべてのカラムにサイズが指定され、それがカラムの総数に満たない場合、カラムの後に空白ができます。

import Size from '@site/static/usage/v9/grid/size/index.mdx';

<Size />

### レスポンシブサイズ

`size`プロパティは、すべての[ブレークポイント](#default-breakpoints)でカラム幅を変更します。カラムはまた、ブレークポイント名が「size」の末尾に付加された複数のサイズプロパティを提供します。これらのプロパティを使用して、画面サイズに応じてカラムの幅を変更することができます。以下の例を StackBlitz で開き、画面のサイズを変更してカラム幅の変化を確認してください。

import SizeResponsive from '@site/static/usage/v9/grid/size-responsive/index.mdx';

<SizeResponsive />


## 列のオフセット

カラムは、全カラム数のうち一定のカラム数だけ右にずらすオフセットが可能です。

### 指定されたオフセット

カラムは、`offset`プロパティを用いて右に移動させることができます。このプロパティは、カラムの左マージンを指定したカラムの数だけ増やします。また、その右側にカラムが存在する場合は、そのカラムを移動させます。

import Offset from '@site/static/usage/v9/grid/offset/index.mdx';

<Offset />

### レスポンシブオフセット

`offset`プロパティは、すべての[ブレークポイント](#default-breakpoints)で列の左マージンを変更します。列には、ブレークポイント名を"offset"の末尾に付けた複数のオフセットプロパティもあります。これらのプロパティは、画面サイズに応じて列のオフセットを変更するために使用できます。以下の例を StackBlitz で開き、画面サイズを変更して列のオフセットがどのように変化するかを確認してください。

import OffsetResponsive from '@site/static/usage/v9/grid/offset-responsive/index.mdx';

<OffsetResponsive />


## コラム プッシュ＆プル

カラムの総数のうち、一定のカラム数だけ、カラムを右に押したり、左に引いたりすることができます。

### 指定されたプッシュ＆プル

`push`と`pull`のプロパティを追加することで、カラムの並び替えを行うことができます。これらのプロパティは、指定された列数だけ列の `left` と `right` を調整し、列の並び替えを簡単に行うことができます。この場合、他のカラムが配置されている場所にカラムを移動させると、カラムが重なることになります。

import PushPull from '@site/static/usage/v9/grid/push-pull/index.mdx';

<PushPull />

### プッシュ＆プルのレスポンシブ対応

`push`および`pull`プロパティは、すべての[ブレークポイント](#default-breakpoints)で列の位置を変更します。列には、ブレークポイント名を"push" / "pull"の末尾に付けた複数の`push`および`pull`プロパティもあります。これらのプロパティは、画面サイズに応じて列の位置を変更するために使用できます。以下の例を StackBlitz で開き、画面サイズを変更して列の位置がどのように変化するかを確認してください。

import PushPullResponsive from '@site/static/usage/v9/grid/push-pull-responsive/index.mdx';

<PushPullResponsive />

## Alignment

### 垂直方向のアライメント

すべての列は、行に異なるクラスを追加することで垂直に整列させることができます。使用可能なクラスのリストは[CSS ユーティリティ](/layout/css-utilities#flex-container-properties)を参照してください。

import VerticalAlignment from '@site/static/usage/v9/grid/vertical-alignment/index.mdx';

<VerticalAlignment />


### 水平アライメント

すべての列は、行に異なるクラスを追加することで水平方向に整列させることができます。使用可能なクラスのリストは[CSS ユーティリティ](/layout/css-utilities.md#flex-container-properties)を参照してください。

import HorizontalAlignment from '@site/static/usage/v9/grid/horizontal-alignment/index.mdx';

<HorizontalAlignment />

## グリッドのカスタマイズ {/* #customizing-the-grid */}

組み込みの CSS 変数を使用することで、定義済みのグリッド属性をカスタマイズすることができます。パディングの値やカラム数などを変更することができます。

### 固定幅

固定グリッドの幅は、すべてのブレークポイントに対して`--ion-grid-width` CSS 変数で設定できます。個別のブレークポイントを上書きするには、`--ion-grid-width-{breakpoint}` CSS 変数を使用してください。各ブレークポイントのデフォルト値は、[固定グリッド](#fixed-grid)セクションに記載されています。以下の例を StackBlitz で開き、画面サイズを変更してグリッド幅がどのように変化するかを確認してください。

import Width from '@site/static/usage/v9/grid/customizing/width/index.mdx';

<Width />

### 列数 {/* #number-of-columns */}

グリッドのカラム数は `--ion-grid-columns` という CSS 変数で変更することができます。デフォルトでは 12 列ですが、これを任意の正の整数に変更し、各列の幅を計算するために使用することができます。

import ColumnNumber from '@site/static/usage/v9/grid/customizing/column-number/index.mdx';

<ColumnNumber />

### Padding

グリッドコンテナの padding は、CSS 変数 `--ion-grid-padding` を用いてすべてのブレイクポイントに対して設定することができます。個々のブレイクポイントを上書きするには、 `--ion-grid-padding-{breakpoint}` CSS 変数を使用します。

列の padding は、CSS 変数 `--ion-grid-column-padding` ですべてのブレイクポイントに対して設定できます。個々のブレイクポイントを上書きするには、 `--ion-grid-column-padding-{breakpoint}` CSS 変数を使用します。

import Padding from '@site/static/usage/v9/grid/customizing/padding/index.mdx';

<Padding />

## プロパティ
<Props />

## イベント
<Events />

## メソッド
<Methods />

## CSS Shadow Parts
<Parts />

## CSS カスタムプロパティ
<CustomProps />

## Slots
<Slots />
