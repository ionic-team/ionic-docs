---
title: レスポンシブグリッド
---

<head>
  <title>レスポンシブグリッドシステムとスクリーンサイズに応じたカルムレイアウト</title>
  <meta
    name="description"
    content="Ionic's responsive grid is a powerful mobile-first flexbox system for building custom layouts based on a 12 column layout with breakpoints based on screen size."
  />
</head>

グリッドは、カスタムレイアウトを構築するための強力なモバイルファーストのフレックスボックスシステムです。グリッドは、[grid](../api/grid.md), [row(s)](../api/row.md), [column(s)](../api/col.md) という三つの単位で構成されています。列はその行を埋めるように拡張され、追加の列に合うようにサイズが変更されます。これは、画面サイズに応じて異なるブレイクポイントを持つ12列のレイアウトに基づいています。カラムの数はCSSを使ってカスタマイズすることができます。

## How it works

```html
<ion-grid>
  <ion-row>
    <ion-col>
      <div>1 of 3</div>
    </ion-col>
    <ion-col>
      <div>2 of 3</div>
    </ion-col>
    <ion-col>
      <div>3 of 3</div>
    </ion-col>
  </ion-row>
</ion-grid>
```

- グリッドは、すべての行と列のためのコンテナとして機能します。グリッドはコンテナの幅いっぱいに表示されます。
  しかし、`fixed`属性を追加すると、スクリーンサイズごとの幅を指定することができます。
- 行は、列を適切に並べるための水平方向のグループです。
- コンテンツは列の中に配置されるべきで、列のみが行の直接の子となることができます。
- `size-{breakpoint}` 属性は、1行あたりデフォルトの12列のうち、使用する列の数を指定します。
  つまり、`size="4"` を指定すると、グリッドの1/3、つまり12列のうち4列を占有することができます。
- sizeに値を指定しないカラムは、自動的に同じ幅になります。例えば、`size-sm`を4つ指定すると、スモールブレイクポイント以上の幅は、それぞれ自動的に25%になります。
- カラムの幅はパーセンテージで設定されるため、常に流動的で、親要素からの相対的な大きさになります。
- カラムは個々のカラムの間にパディングを持ちますが、パディングはグリッドとカラムから削除することができます。
  しかし、グリッドに `ion-no-padding` クラスを追加することで、グリッドとカラムからパディングを取り除くことができます。グリッドに適用できるその他のスタイルについては、[CSS ユーティリティ](css-utilities.md) を参照してください。
- グリッドの階層は、レスポンシブ・ブレークポイントごとに、すべてのブレークポイント（特小）、小、中、大、特大の5段階あります。
- グリッドの階層は最小幅を基準にしており、その階層とそれより大きな階層に適用されます。
  (例: `size-sm="4"` は、小型、中型、大型、特大のデバイスに適用されます)。
- グリッドは CSS 変数で簡単にカスタマイズすることができます。グリッドのカスタマイズ](#customizing-the-grid)を参照してください。

### ライブでの実装例

Angularの場合は [こちら](https://stackblitz.com/edit/ionic-ng-basic-grid) 、Reactの場合は [こちら](https://stackblitz.com/edit/ionic-react-basic-grid) で、ライブでの実装例を見ることができます。

## グリッドの大きさ

デフォルトでは、グリッドは100%の幅を占めます。画面サイズに応じた幅を設定するには、 `fixed` 属性を追加します。各ブレークポイントにおけるグリッドの幅は、CSS変数 `--ion-grid-width-{breakpoint}` で定義される。詳しくは、[グリッドのカスタマイズ](#customizing-the-grid) を参照してください。

| Name | Value  | Description                                       |
| ---- | ------ | ------------------------------------------------- |
| xs   | 100%   | Don't set the grid width for xs screens           |
| sm   | 540px  | Set grid width to 540px when (min-width: 576px)   |
| md   | 720px  | Set grid width to 720px when (min-width: 768px)   |
| lg   | 960px  | Set grid width to 960px when (min-width: 992px)   |
| xl   | 1140px | Set grid width to 1140px when (min-width: 1200px) |

### ライブでの実装例

Angularの場合は [こちら](https://stackblitz.com/edit/ionic-ng-fixed-width-grid) 、Reactの場合は [こちら](https://stackblitz.com/edit/ionic-react-fixed-width-grid) で、ライブの例を見ることができます。

## グリッドの属性

グリッドは、デフォルトでは画面の幅いっぱいに表示されます。これは、以下の属性を使って変更できます。

| Property | Description                                       |
| -------- | ------------------------------------------------- |
| fixed    | Set a max width based on the current screen size. |

## デフォルトのブレークポイント

デフォルトのブレークポイントは、以下の表で定義されています。現時点では、ブレイクポイントをカスタマイズすることはできません。カスタマイズできない理由については、 [Variables in Media Queries](../theming/advanced.md#variables-in-media-queries) を参照してください。

| Name | Value  | Width Prefix | Offset Prefix | Push Prefix | Pull Prefix | Description                          |
| ---- | ------ | ------------ | ------------- | ----------- | ----------- | ------------------------------------ |
| xs   | 0      | `size-`      | `offset-`     | `push-`     | `pull-`     | Set columns when (min-width: 0)      |
| sm   | 576px  | `size-sm-`   | `offset-sm-`  | `push-sm-`  | `pull-sm-`  | Set columns when (min-width: 576px)  |
| md   | 768px  | `size-md-`   | `offset-md-`  | `push-md-`  | `pull-md-`  | Set columns when (min-width: 768px)  |
| lg   | 992px  | `size-lg-`   | `offset-lg-`  | `push-lg-`  | `pull-lg-`  | Set columns when (min-width: 992px)  |
| xl   | 1200px | `size-xl-`   | `offset-xl-`  | `push-xl-`  | `pull-xl-`  | Set columns when (min-width: 1200px) |

## オートレイアウトカラム

### 均等な幅

デフォルトでは、すべてのデバイスと画面サイズにおいて、カラムは行の中で同じ幅を占めます。

```html
<ion-grid>
  <ion-row>
    <ion-col>
      <div>1 of 2</div>
    </ion-col>
    <ion-col>
      <div>2 of 2</div>
    </ion-col>
  </ion-row>
  <ion-row>
    <ion-col>
      <div>1 of 3</div>
    </ion-col>
    <ion-col>
      <div>2 of 3</div>
    </ion-col>
    <ion-col>
      <div>3 of 3</div>
    </ion-col>
  </ion-row>
</ion-grid>
```

### 1列の幅を設定する

1つのカラムの幅を設定すると、他のカラムは自動的にその幅にリサイズされます。これは、あらかじめ定義されたグリッド属性を使って行うことができます。以下の例では、中央のカラムの幅に関係なく、他のカラムがリサイズされます。

```html
<ion-grid>
  <ion-row>
    <ion-col>
      <div>1 of 3</div>
    </ion-col>
    <ion-col size="8">
      <div>2 of 3 (wider)</div>
    </ion-col>
    <ion-col>
      <div>3 of 3</div>
    </ion-col>
  </ion-row>
  <ion-row>
    <ion-col>
      <div>1 of 3</div>
    </ion-col>
    <ion-col size="6">
      <div>2 of 3 (wider)</div>
    </ion-col>
    <ion-col>
      <div>3 of 3</div>
    </ion-col>
  </ion-row>
</ion-grid>
```

#### ライブでの実装例

Angularでは [こちら](https://stackblitz.com/edit/ionic-ng-set-width-col) 、Reactでは [こちら](https://stackblitz.com/edit/ionic-react-set-width-col) で、実例を見ることができます。

### 可変幅

`size-{breakpoint}` プロパティを `"auto"` に設定することで、カラムはそのコンテンツの自然な幅に基づいてサイズを変更することができます。これは、ピクセルでカラムの幅を設定する場合に非常に便利です。可変幅のカラムの隣のカラムは、行を埋めるようにリサイズされます。

```html
<ion-grid>
  <ion-row>
    <ion-col>
      <div>1 of 3</div>
    </ion-col>
    <ion-col size="auto">
      <div>Variable width content</div>
    </ion-col>
    <ion-col>
      <div>3 of 3</div>
    </ion-col>
  </ion-row>
  <ion-row>
    <ion-col>
      <div>1 of 4</div>
    </ion-col>
    <ion-col>
      <div>2 of 4</div>
    </ion-col>
    <ion-col size="auto">
      <div>
        <ion-input placeholder="Variable width input"></ion-input>
      </div>
    </ion-col>
    <ion-col>
      <div>4 of 4</div>
    </ion-col>
  </ion-row>
</ion-grid>
```

#### ライブでの実装例

Angularでは [こちら](https://stackblitz.com/edit/ionic-ng-var-width-col) 、Reactでは [こちら](https://stackblitz.com/edit/ionic-react-var-width-col) で、実例を見ることができます。

## レスポンシブ属性

### すべてのブレークポイント

すべてのデバイスとスクリーンに対してカラムの幅をカスタマイズするには、`size` プロパティを設定します。このプロパティの値は、利用可能なカラムのうち、このカラムが占めるべきカラムの数を決定します。

```html
<ion-grid>
  <ion-row>
    <ion-col size="4">
      <div>1 of 4</div>
    </ion-col>
    <ion-col size="2">
      <div>2 of 4</div>
    </ion-col>
    <ion-col size="2">
      <div>3 of 4</div>
    </ion-col>
    <ion-col size="4">
      <div>4 of 4</div>
    </ion-col>
  </ion-row>
</ion-grid>
```

### 積み上げから水平へ

width属性とbreakpoint属性の組み合わせで、超小型画面では積み上げ型、小型画面では水平型になるようなグリッドを作成することができます。

```html
<ion-grid>
  <ion-row>
    <ion-col size="12" size-sm>
      <div>1 of 4</div>
    </ion-col>
    <ion-col size="12" size-sm>
      <div>2 of 4</div>
    </ion-col>
    <ion-col size="12" size-sm>
      <div>3 of 4</div>
    </ion-col>
    <ion-col size="12" size-sm>
      <div>4 of 4</div>
    </ion-col>
  </ion-row>
</ion-grid>
```

#### ライブでの実装例

Angularでは [こちら](https://stackblitz.com/edit/ionic-ng-stacked-horizontal-grid) 、Reactでは [こちら](https://stackblitz.com/edit/ionic-react-stacked-horizontal-grid) で実例を見ることができます。

##並び替え

### カラムのオフセット

offset` プロパティを追加することで、カラムを右に移動させることができます。このプロパティは、カラムの左側のマージンを指定したカラム数だけ増加させる。例えば、以下のグリッドでは、最後のカラムは3カラム分オフセットされ、3カラムを占めることになります。

```html
<ion-grid>
  <ion-row>
    <ion-col size="3">
      <div>1 of 2</div>
    </ion-col>
    <ion-col size="3" offset="3">
      <div>2 of 2</div>
    </ion-col>
  </ion-row>
</ion-grid>
```

また、スクリーンのブレークポイントに基づいてオフセットを追加することもできます。以下は、`md`スクリーン以上では最後のカラムが3カラム分オフセットされるグリッドの例です。

```html
<ion-grid>
  <ion-row>
    <ion-col size-md="3">
      <div>1 of 3</div>
    </ion-col>
    <ion-col size-md="3">
      <div>2 of 3</div>
    </ion-col>
    <ion-col size-md="3" offset-md="3">
      <div>3 of 3</div>
    </ion-col>
  </ion-row>
</ion-grid>
```

#### ライブでの実装例

Angularでは [こちら](https://stackblitz.com/edit/ionic-ng-offset-grid-cols) 、Reactでは [こちら](https://stackblitz.com/edit/ionic-react-offset-grid-cols) で、実例を見ることができます。

### プッシュとプル

`push` と `pull` というプロパティを追加することで、カラムの並び替えを行うことができます。これらのプロパティは、カラムの `left` と `right` を指定したカラム数だけ調整し、カラムの並び替えを簡単に行うことができます。例えば、以下のグリッドでは、`1 of 2`と記述されたカラムが実際には最後のカラムとなり、`2 of 2`が最初のカラムとなります。

```html
<ion-grid>
  <ion-row>
    <ion-col size="9" push="3">
      <div>1 of 2</div>
    </ion-col>
    <ion-col size="3" pull="9">
      <div>2 of 2</div>
    </ion-col>
  </ion-row>
</ion-grid>
```

また、画面のブレークポイントに基づいてPushとPullを追加することができます。以下の例では、`3 of 3`のカラムの記述があるカラムは、実際には`md`画面以上の最初のカラムになります。

```html
<ion-grid>
  <ion-row>
    <ion-col size-md="6" push-md="3">
      <div>1 of 3</div>
    </ion-col>
    <ion-col size-md="3" push-md="3">
      <div>2 of 3</div>
    </ion-col>
    <ion-col size-md="3" pull-md="9">
      <div>3 of 3</div>
    </ion-col>
  </ion-row>
</ion-grid>
```

#### ライブでの実装例

Angularでは [こちら](https://stackblitz.com/edit/ionic-ng-grid-push-pull) 、Reactでは [こちら](https://stackblitz.com/edit/ionic-react-grid-push-pull) で実例を見ることができます。

## アライメント

### 垂直方向のアラインメント

行に異なるクラスを追加することで、すべての列を行の内側に垂直に整列させることができます。利用可能なクラスの一覧は、[css utilities](css-utilities.md#flex-container-properties) を参照してください。

```html
<ion-grid>
  <ion-row class="ion-align-items-start">
    <ion-col>
      <div>1 of 4</div>
    </ion-col>
    <ion-col>
      <div>2 of 4</div>
    </ion-col>
    <ion-col>
      <div>3 of 4</div>
    </ion-col>
    <ion-col>
      <div>4 of 4 # # #</div>
    </ion-col>
  </ion-row>

  <ion-row class="ion-align-items-center">
    <ion-col>
      <div>1 of 4</div>
    </ion-col>
    <ion-col>
      <div>2 of 4</div>
    </ion-col>
    <ion-col>
      <div>3 of 4</div>
    </ion-col>
    <ion-col>
      <div>4 of 4 # # #</div>
    </ion-col>
  </ion-row>

  <ion-row class="ion-align-items-end">
    <ion-col>
      <div>1 of 4</div>
    </ion-col>
    <ion-col>
      <div>2 of 4</div>
    </ion-col>
    <ion-col>
      <div>3 of 4</div>
    </ion-col>
    <ion-col>
      <div>4 of 4 # # #</div>
    </ion-col>
  </ion-row>
</ion-grid>
```

カラムはまた、カラムに直接alignmentクラスを追加することによって、他のカラムと異なるように自分自身を配置することができます。利用可能なクラスの一覧は、[css utilities](css-utilities.md#flex-item-properties) を参照してください。

```html
<ion-grid>
  <ion-row>
    <ion-col class="ion-align-self-start">
      <div>1 of 4</div>
    </ion-col>
    <ion-col class="ion-align-self-center">
      <div>2 of 4</div>
    </ion-col>
    <ion-col class="ion-align-self-end">
      <div>3 of 4</div>
    </ion-col>
    <ion-col>
      <div>4 of 4 # # #</div>
    </ion-col>
  </ion-row>
</ion-grid>
```

#### ライブでの実装例

Angularでは [こちら](https://stackblitz.com/edit/ionic-ng-grid-vertical-align) 、Reactでは [こちら](https://stackblitz.com/edit/ionic-react-grid-vertical-align) で、実例を見ることができます。

### 水平方向の整列

行に異なるクラスを追加することで、すべての列を行の内側に水平に揃えることができます。利用可能なクラスの一覧は、[cssユーティリティ](css-utilities.md#flex-container-properties) を参照してください。

```html
<ion-grid>
  <ion-row class="ion-justify-content-start">
    <ion-col size="3">
      <div>1 of 2</div>
    </ion-col>
    <ion-col size="3">
      <div>2 of 2</div>
    </ion-col>
  </ion-row>

  <ion-row class="ion-justify-content-center">
    <ion-col size="3">
      <div>1 of 2</div>
    </ion-col>
    <ion-col size="3">
      <div>2 of 2</div>
    </ion-col>
  </ion-row>

  <ion-row class="ion-justify-content-end">
    <ion-col size="3">
      <div>1 of 2</div>
    </ion-col>
    <ion-col size="3">
      <div>2 of 2</div>
    </ion-col>
  </ion-row>

  <ion-row class="ion-justify-content-around">
    <ion-col size="3">
      <div>1 of 2</div>
    </ion-col>
    <ion-col size="3">
      <div>2 of 2</div>
    </ion-col>
  </ion-row>

  <ion-row class="ion-justify-content-between">
    <ion-col size="3">
      <div>1 of 2</div>
    </ion-col>
    <ion-col size="3">
      <div>2 of 2</div>
    </ion-col>
  </ion-row>
</ion-grid>
```

#### ライブでの実装例

Angularでは [こちら](https://stackblitz.com/edit/ionic-ng-grid-horizontal-align) 、Reactでは [こちら](https://stackblitz.com/edit/ionic-react-grid-horizontal-align) で実例を見ることができます。

## グリッドのカスタマイズ

組み込みの CSS 変数を使用すると、定義済みのグリッド属性をカスタマイズすることができます。パディングの値やカラムの数などを変更できます。

### 列の数

グリッドのカラム数は、CSS変数 `--ion-grid-columns` で変更することができます。デフォルトでは12列ですが、これを任意の正の整数に変更し、個々の列の幅を計算するために使用することができます。

```css
--ion-grid-columns: 12;
```

### グリッドのPadding

グリッドコンテナのPaddingは、CSS変数 `--ion-grid-padding` を使ってすべてのブレークポイントに対して設定することができます。個々のブレイクポイントを上書きするには、CSS変数 `--ion-grid-padding-{breakpoint}` を使用します。

```css
--ion-grid-padding: 5px;

--ion-grid-padding-xs: 5px;
--ion-grid-padding-sm: 5px;
--ion-grid-padding-md: 5px;
--ion-grid-padding-lg: 5px;
--ion-grid-padding-xl: 5px;
```

### Grid width

固定グリッドの幅の値を画面サイズに応じてカスタマイズするには、各ブレークポイントごとに `--ion-grid-width-{breakpoint}` の値をオーバーライドします。

```css
--ion-grid-width-xs: 100%;
--ion-grid-width-sm: 540px;
--ion-grid-width-md: 720px;
--ion-grid-width-lg: 960px;
--ion-grid-width-xl: 1140px;
```

### Column Padding

列のpaddingは `--ion-grid-column-padding` CSS 変数で全てのブレークポイントに対して設定することができます。個々のブレークポイントを上書きするには、CSS変数 `--ion-grid-column-padding-{breakpoint}` を使用します。

```css
--ion-grid-column-padding: 5px;

--ion-grid-column-padding-xs: 5px;
--ion-grid-column-padding-sm: 5px;
--ion-grid-column-padding-md: 5px;
--ion-grid-column-padding-lg: 5px;
--ion-grid-column-padding-xl: 5px;
```
