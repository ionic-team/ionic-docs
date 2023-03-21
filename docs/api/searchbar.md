---
title: "ion-searchbar"
---
import Props from '@site/static/auto-generated/searchbar/props.md';
import Events from '@site/static/auto-generated/searchbar/events.md';
import Methods from '@site/static/auto-generated/searchbar/methods.md';
import Parts from '@site/static/auto-generated/searchbar/parts.md';
import CustomProps from '@site/static/auto-generated/searchbar/custom-props.md';
import Slots from '@site/static/auto-generated/searchbar/slots.md';

<head>
  <title>Search Bar Icon for Keyboard Text Display | Ion-Search Bar</title>
  <meta name="description" content="Search barsは、コレクションを検索するために使用できるテキストフィールドを表します。AndroidとiOSのキーボード表示で、Ion-Search Barをアイコンとして入力する方法をご紹介します。" />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="scoped" />

Searchbars represent a text field that can be used to search through a collection. They can be displayed inside of a toolbar or the main content. A searchbar should be used instead of an input to search lists.


## 基本的な使い方

import Basic from '@site/static/usage/v7/searchbar/basic/index.md';

<Basic />


## Search Icon

A search icon is displayed to the left of the input field in a searchbar. It can be customized to any [Ionicon](https://ionic.io/ionicons/).

import SearchIcon from '@site/static/usage/v7/searchbar/search-icon/index.md';

<SearchIcon />


## Clear Button

A clear button is displayed when a searchbar has a value or upon entering input in the searchbar's text field. Clicking on the clear button will erase the text field and the input will remain focused. By default, the clear button is set to show when focusing the searchbar, but it can be set to always show or never show. The icon inside of the clear button can also be customized to any [Ionicon](https://ionic.io/ionicons/).

import ClearButton from '@site/static/usage/v7/searchbar/clear-button/index.md';

<ClearButton />


## Cancel Button

A cancel button can be enabled which will clear the input and lose the focus upon click. By default, cancel buttons are set to never show, but they can be set to always show or only show when focusing the searchbar. The cancel button is displayed as text in `ios` mode, and as an icon in `md` mode. Both the text and icon can be customized using different properties, with the icon accepting any [Ionicon](https://ionic.io/ionicons/).

import CancelButton from '@site/static/usage/v7/searchbar/cancel-button/index.md';

<CancelButton />


## Searchbars in Toolbars

Searchbars are styled to look native when placed inside of a toolbar. In iOS, searchbars should be placed in their own toolbar, under a toolbar that contains the page title. In Material Design, searchbars are either persistently displayed in their own toolbar, or expand over a toolbar containing the page title.

<!-- Reuse the playground from the Toolbar directory -->
import Toolbar from '@site/static/usage/v7/toolbar/searchbars/index.md';

<Toolbar />


## Debounce

A debounce can be set on the searchbar in order to delay triggering the `ionChange` event. This is useful when querying data, as it can be used to wait to make a request instead of requesting the data each time a character is entered in the input.

import Debounce from '@site/static/usage/v7/searchbar/debounce/index.md';

<Debounce />


## テーマ

### Colors

import Colors from '@site/static/usage/v7/searchbar/theming/colors/index.md';

<Colors />

## CSSカスタムプロパティ

Searchbar uses scoped encapsulation, which means it will automatically scope its CSS by appending each of the styles with an additional class at runtime. Overriding scoped selectors in CSS requires a [higher specificity](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity) selector. Targeting the `ion-searchbar` for customization will not work, therefore we recommend adding a class and customizing it that way.

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
