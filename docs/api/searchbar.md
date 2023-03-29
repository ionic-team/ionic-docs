---
title: "ion-searchbar"
---
import Props from '@ionic-internal/component-api/v7/searchbar/props.md';
import Events from '@ionic-internal/component-api/v7/searchbar/events.md';
import Methods from '@ionic-internal/component-api/v7/searchbar/methods.md';
import Parts from '@ionic-internal/component-api/v7/searchbar/parts.md';
import CustomProps from '@ionic-internal/component-api/v7/searchbar/custom-props.md';
import Slots from '@ionic-internal/component-api/v7/searchbar/slots.md';

<head>
  <title>Search Bar Icon for Keyboard Text Display | Ion-Search Bar</title>
  <meta name="description" content="Search barsは、コレクションを検索するために使用できるテキストフィールドを表します。AndroidとiOSのキーボード表示で、Ion-Search Barをアイコンとして入力する方法をご紹介します。" />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="scoped" />

検索バーは、コレクションを検索するために使用できるテキストフィールドを表します。ツールバーやメインコンテンツの中に表示することができます。検索バーは、検索リストへの入力の代わりに使用する必要があります。


## 基本的な使い方

import Basic from '@site/static/usage/v7/searchbar/basic/index.md';

<Basic />


## 検索アイコン

検索バーのInputフィールドの左に表示される検索アイコンです。任意の [Ionicon](https://ionic.io/ionicons/) にカスタマイズすることが可能です。

import SearchIcon from '@site/static/usage/v7/searchbar/search-icon/index.md';

<SearchIcon />


## クリアボタン

検索バーに値があるとき、または検索バーのテキストフィールドに入力があったときに、クリアボタンが表示されます。クリアボタンをクリックすると、テキストフィールドは消去され、入力はフォーカスされたままになります。デフォルトでは、クリアボタンは検索バーをフォーカスしたときに表示されるように設定されていますが、常に表示する、または全く表示しないように設定することができます。また、クリアボタン内のアイコンは、任意の[Ionicon](https://ionic.io/ionicons/)にカスタマイズすることができます。

import ClearButton from '@site/static/usage/v7/searchbar/clear-button/index.md';

<ClearButton />


## キャンセルボタン

キャンセルボタンを有効にすると、クリックすると入力がクリアされ、フォーカスが失われます。デフォルトでは、キャンセルボタンは表示されないように設定されていますが、常に表示するように設定したり、検索バーにフォーカスが当たったときのみ表示するように設定したりすることができます。キャンセルボタンは `ios` モードではテキストとして、`md` モードではアイコンとして表示されます。テキストとアイコンはそれぞれ別のプロパティでカスタマイズでき、アイコンは任意の[Ionicon](https://ionic.io/ionicons/)を使用することができます。

import CancelButton from '@site/static/usage/v7/searchbar/cancel-button/index.md';

<CancelButton />


## ツールバーの中に配置した検索バー

検索バーは、ツールバーの中に配置されたときにネイティブに見えるようにスタイルされています。iOSでは、検索バーは、ページタイトルを含むツールバーの下にある、独自のツールバーに配置されるべきです。Material Designでは、検索バーは、独自のツールバーに永続的に表示されるか、ページタイトルを含むツールバーの上に展開されるかのいずれかです。

<!-- Reuse the playground from the Toolbar directory -->
import Toolbar from '@site/static/usage/v7/toolbar/searchbars/index.md';

<Toolbar />


## Debounce

検索バーにDebounceを設定して、`ionChange`イベントのトリガーを遅延させることができます。これは、入力に文字が入力されるたびにデータを要求するのではなく、要求を出すのを待つために使うことができるので、データを問い合わせるときに便利です。

import Debounce from '@site/static/usage/v7/searchbar/debounce/index.md';

<Debounce />


## テーマ

### Colors

import Colors from '@site/static/usage/v7/searchbar/theming/colors/index.md';

<Colors />

## CSSカスタムプロパティ

検索バーは、スコープをつけてカプセル化されています。これは、実行時に各スタイルに追加のクラスを付加することで、CSSを自動的にスコープ化することを意味します。CSSでscopedセレクタを上書きするには、[higher specificity](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity) セレクタが必要です。そのため、クラスを追加してカスタマイズすることをお勧めします。

import CSSProps from '@site/static/usage/v7/searchbar/theming/css-properties/index.md';

<CSSProps />


## キーボード表示

### Android

デフォルトでは、Inputをタップするとキーボードが表示され、サブミットボタンに虫眼鏡のアイコンが表示されます。オプションで `inputmode` プロパティを `"search"` に設定すると、アイコンが虫眼鏡からarriage returnに変更されます。

### iOS

デフォルトでは、Inputをタップするとキーボードが表示され、グレーのSubmitボタンに「return」のテキストが表示されます。オプションで `inputmode` プロパティを `"search"` に設定すると、テキストが "return" から "go" に変わり、ボタンの色もグレーから青に変わります。また、`ion-searchbar` を `form` 要素でラップして、 `action` プロパティを設定することもできます。これにより、キーボードが表示され、"search "という青いSubmitボタンが表示されるようになります。

## Interfaces

### SearchbarChangeEventDetail

```typescript
interface SearchbarChangeEventDetail {
  value?: string;
}
```

### SearchbarCustomEvent

必須ではありませんが、このコンポーネントから発行される Ionic イベントでより強く型付けを行うために、`CustomEvent` インターフェースの代わりにこのインターフェースを使用することが可能です。

```typescript
interface SearchbarCustomEvent extends CustomEvent {
  detail: SearchbarChangeEventDetail;
  target: HTMLIonSearchbarElement;
}
```


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
