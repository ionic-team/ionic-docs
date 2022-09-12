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
  <meta name="description" content="Search bars represent a text field that can be used to search through a collection. Learn to input Ion-Search Bar as an icon on Android & iOS keyboard displays." />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="scoped" />

Searchbars represent a text field that can be used to search through a collection. They can be displayed inside of a toolbar or the main content. A searchbar should be used instead of an input to search lists.


## Basic Usage

import Basic from '@site/static/usage/searchbar/basic/index.md';

<Basic />


## Search Icon

A search icon is displayed to the left of the input field in a searchbar. It can be customized to any [Ionicon](https://ionic.io/ionicons/).

import SearchIcon from '@site/static/usage/searchbar/search-icon/index.md';

<SearchIcon />


## Clear Button

A clear button is displayed when a searchbar has a value or upon entering input in the searchbar's text field. Clicking on the clear button will erase the text field and the input will remain focused. By default, the clear button is set to show when focusing the searchbar, but it can be set to always show or never show. The icon inside of the clear button can also be customized to any [Ionicon](https://ionic.io/ionicons/).

import ClearButton from '@site/static/usage/searchbar/clear-button/index.md';

<ClearButton />


## Cancel Button

A cancel button can be enabled which will clear the input and lose the focus upon click. By default, cancel buttons are set to never show, but they can be set to always show or only show when focusing the searchbar. The cancel button is displayed as text in `ios` mode, and as an icon in `md` mode. Both the text and icon can be customized using different properties, with the icon accepting any [Ionicon](https://ionic.io/ionicons/).

import CancelButton from '@site/static/usage/searchbar/cancel-button/index.md';

<CancelButton />


## Keyboard Display

### Android

By default, tapping the input will cause the keyboard to appear with a magnifying glass icon on the submit button. You can optionally set the `inputmode` property to `"search"`, which will change the icon from a magnifying glass to a carriage return.

### iOS

By default, tapping the input will cause the keyboard to appear with the text "return" on a gray submit button. You can optionally set the `inputmode` property to `"search"`, which will change the text from "return" to "go", and change the button color from gray to blue. Alternatively, you can wrap the `ion-searchbar` in a `form` element with an `action` property. This will cause the keyboard to appear with a blue submit button that says "search".

## Interfaces

### SearchbarChangeEventDetail

```typescript
interface SearchbarChangeEventDetail {
  value?: string;
}
```

### SearchbarCustomEvent

While not required, this interface can be used in place of the `CustomEvent` interface for stronger typing with Ionic events emitted from this component.

```typescript
interface SearchbarCustomEvent extends CustomEvent {
  detail: SearchbarChangeEventDetail;
  target: HTMLIonSearchbarElement;
}
```


## Properties
<Props />

## Events
<Events />

## Methods
<Methods />

## CSS Shadow Parts
<Parts />

## CSS Custom Properties
<CustomProps />

## Slots
<Slots />
