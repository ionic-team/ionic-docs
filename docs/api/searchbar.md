---
title: "ion-searchbar"
hide_table_of_contents: true
demoUrl: "/docs/demos/api/searchbar/index.html"
demoSourceUrl: "https://github.com/ionic-team/ionic-docs/tree/main/static/demos/api/searchbar/index.html"
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

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
import TOCInline from '@theme/TOCInline';

<EncapsulationPill type="scoped" />

<h2 className="table-of-contents__title">コンテンツ</h2>

<TOCInline
  toc={toc}
  maxHeadingLevel={2}
/>



Searchbarは、collection内の検索に使用できるテキストフィールドを表します。これらは、toolbarまたはメインコンテンツの内部に表示できます。

Listを検索するInputの代わりに、Searchbarを使用する必要があります。Searchbarのテキストフィールドに入力すると、クリアボタンが表示されます。クリアボタンをクリックすると、テキストフィールドが消去され、入力はフォーカスされたままになります。キャンセルボタンを有効にすると、入力がクリアされ、クリック時にフォーカスが失われます。

## キーボード表示

### Android

デフォルトでは、入力をタップするとキーボードが表示され、サブミットボタンに虫眼鏡のアイコンが表示されます。オプションで `inputmode` プロパティを `"search"` に設定すると、アイコンが虫眼鏡からarriage returnに変更されます。

### iOS

デフォルトでは、入力をタップするとキーボードが表示され、グレーのSubmitボタンに「return」のテキストが表示されます。オプションで `inputmode` プロパティを `"search"` に設定すると、テキストが "return" から "go" に変わり、ボタンの色もグレーから青に変わります。また、`ion-searchbar` を `form` 要素でラップして、 `action` プロパティを設定することもできます。これにより、キーボードが表示され、"search "という青いSubmitボタンが表示されるようになります。

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



## 使い方

<Tabs groupId="framework" defaultValue="angular" values={[{ value: 'angular', label: 'Angular' }, { value: 'javascript', label: 'Javascript' }, { value: 'react', label: 'React' }, { value: 'stencil', label: 'Stencil' }, { value: 'vue', label: 'Vue' }]}>

<TabItem value="angular">

```html
<!-- Default Searchbar -->
<ion-searchbar></ion-searchbar>

<!-- Searchbar with cancel button always shown -->
<ion-searchbar showCancelButton="always"></ion-searchbar>

<!-- Searchbar with cancel button never shown -->
<ion-searchbar showCancelButton="never"></ion-searchbar>

<!-- Searchbar with cancel button shown on focus -->
<ion-searchbar showCancelButton="focus"></ion-searchbar>

<!-- Searchbar with danger color -->
<ion-searchbar color="danger"></ion-searchbar>

<!-- Searchbar with value -->
<ion-searchbar value="Ionic"></ion-searchbar>

<!-- Searchbar with telephone type -->
<ion-searchbar type="tel"></ion-searchbar>

<!-- Searchbar with numeric inputmode -->
<ion-searchbar inputmode="numeric"></ion-searchbar>

<!-- Searchbar disabled -->
<ion-searchbar disabled="true"></ion-searchbar>

<!-- Searchbar with a cancel button and custom cancel button text -->
<ion-searchbar showCancelButton="focus" cancelButtonText="Custom Cancel"></ion-searchbar>

<!-- Searchbar with a custom debounce -->
<ion-searchbar debounce="500"></ion-searchbar>

<!-- Animated Searchbar -->
<ion-searchbar animated></ion-searchbar>

<!-- Searchbar with a placeholder -->
<ion-searchbar placeholder="Filter Schedules"></ion-searchbar>

<!-- Searchbar in a Toolbar -->
<ion-toolbar>
  <ion-searchbar></ion-searchbar>
</ion-toolbar>
```

</TabItem>


<TabItem value="javascript">

```html
<!-- Default Searchbar -->
<ion-searchbar></ion-searchbar>

<!-- Searchbar with cancel button always shown -->
<ion-searchbar show-cancel-button="always"></ion-searchbar>

<!-- Searchbar with cancel button never shown -->
<ion-searchbar show-cancel-button="never"></ion-searchbar>

<!-- Searchbar with cancel button shown on focus -->
<ion-searchbar show-cancel-button="focus"></ion-searchbar>

<!-- Searchbar with danger color -->
<ion-searchbar color="danger"></ion-searchbar>

<!-- Searchbar with value -->
<ion-searchbar value="Ionic"></ion-searchbar>

<!-- Searchbar with telephone type -->
<ion-searchbar type="tel"></ion-searchbar>

<!-- Searchbar with numeric inputmode -->
<ion-searchbar inputmode="numeric"></ion-searchbar>

<!-- Searchbar disabled -->
<ion-searchbar disabled="true"></ion-searchbar>

<!-- Searchbar with a cancel button and custom cancel button text -->
<ion-searchbar show-cancel-button="focus" cancel-button-text="Custom Cancel"></ion-searchbar>

<!-- Searchbar with a custom debounce -->
<ion-searchbar debounce="500"></ion-searchbar>

<!-- Animated Searchbar -->
<ion-searchbar animated></ion-searchbar>

<!-- Searchbar with a placeholder -->
<ion-searchbar placeholder="Filter Schedules"></ion-searchbar>

<!-- Searchbar in a Toolbar -->
<ion-toolbar>
  <ion-searchbar></ion-searchbar>
</ion-toolbar>
```

</TabItem>


<TabItem value="react">

```tsx
import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonSearchbar, IonFooter } from '@ionic/react';

export const SearchBarExamples: React.FC = () => {
  const [searchText, setSearchText] = useState('');
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>IonSearchBar Examples</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <p>Default Searchbar</p>
        <IonSearchbar value={searchText} onIonChange={e => setSearchText(e.detail.value!)}></IonSearchbar>

        <p>Searchbar with cancel button always shown</p>
        <IonSearchbar value={searchText} onIonChange={e => setSearchText(e.detail.value!)} showCancelButton="always"></IonSearchbar>

        <p>Searchbar with cancel button never shown</p>
        <IonSearchbar value={searchText} onIonChange={e => setSearchText(e.detail.value!)} showCancelButton="never"></IonSearchbar>

        <p>Searchbar with cancel button shown on focus</p>
        <IonSearchbar value={searchText} onIonChange={e => setSearchText(e.detail.value!)} showCancelButton="focus"></IonSearchbar>

        <p>Searchbar with danger color</p>
        <IonSearchbar value={searchText} onIonChange={e => setSearchText(e.detail.value!)} color="danger"></IonSearchbar>

        <p>Searchbar with telephone type</p>
        <IonSearchbar value={searchText} onIonChange={e => setSearchText(e.detail.value!)} type="tel"></IonSearchbar>

        <p>Searchbar with numeric inputmode</p>
        <IonSearchbar value={searchText} onIonChange={e => setSearchText(e.detail.value!)} inputmode="numeric"></IonSearchbar>

        <p>Searchbar disabled </p>
        <IonSearchbar value={searchText} onIonChange={e => setSearchText(e.detail.value!)} disabled={true}></IonSearchbar>

        <p>Searchbar with a cancel button and custom cancel button text</p>
        <IonSearchbar value={searchText} onIonChange={e => setSearchText(e.detail.value!)} showCancelButton="focus" cancelButtonText="Custom Cancel"></IonSearchbar>

        <p>Searchbar with a custom debounce - Note: debounce only works on onIonChange event</p>
        <IonSearchbar value={searchText} onIonChange={e => setSearchText(e.detail.value!)} debounce={1000}></IonSearchbar>

        <p>Animated Searchbar</p>
        <IonSearchbar value={searchText} onIonChange={e => setSearchText(e.detail.value!)} animated></IonSearchbar>

        <p>Searchbar with a placeholder</p>
        <IonSearchbar value={searchText} onIonChange={e => setSearchText(e.detail.value!)} placeholder="Filter Schedules"></IonSearchbar>

        <p>Searchbar in a Toolbar</p>
        <IonToolbar>
          <IonSearchbar value={searchText} onIonChange={e => setSearchText(e.detail.value!)}></IonSearchbar>
        </IonToolbar>

      </IonContent>
      <IonFooter>
        <IonToolbar>
          Search Text: {searchText ?? '(none)'}
        </IonToolbar>
      </IonFooter>
    </IonPage>
  );
};
```

</TabItem>


<TabItem value="stencil">

```tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'searchbar-example',
  styleUrl: 'searchbar-example.css'
})
export class SearchbarExample {
  render() {
    return [
       // Default Searchbar
      <ion-searchbar></ion-searchbar>,

      // Searchbar with cancel button always shown
      <ion-searchbar showCancelButton="always"></ion-searchbar>,

      // Searchbar with cancel button never shown
      <ion-searchbar showCancelButton="never"></ion-searchbar>,

      // Searchbar with cancel button shown on focus
      <ion-searchbar showCancelButton="focus"></ion-searchbar>,

      // Searchbar with danger color
      <ion-searchbar color="danger"></ion-searchbar>,

      // Searchbar with value
      <ion-searchbar value="Ionic"></ion-searchbar>,

      // Searchbar with telephone type
      <ion-searchbar type="tel"></ion-searchbar>,

      // Searchbar with numeric inputmode
      <ion-searchbar inputmode="numeric"></ion-searchbar>,

      // Searchbar disabled
      <ion-searchbar disabled={true}></ion-searchbar>,

      // Searchbar with a cancel button and custom cancel button text
      <ion-searchbar showCancelButton="focus" cancelButtonText="Custom Cancel"></ion-searchbar>,

      // Searchbar with a custom debounce
      <ion-searchbar debounce={500}></ion-searchbar>,

      // Animated Searchbar
      <ion-searchbar animated={true}></ion-searchbar>,

      // Searchbar with a placeholder
      <ion-searchbar placeholder="Filter Schedules"></ion-searchbar>,

      // Searchbar in a Toolbar
      <ion-toolbar>
        <ion-searchbar></ion-searchbar>
      </ion-toolbar>
    ];
  }
}
```


</TabItem>


<TabItem value="vue">

```html
<template>
  <!-- Default Searchbar -->
  <ion-searchbar></ion-searchbar>

  <!-- Searchbar with cancel button always shown -->
  <ion-searchbar show-cancel-button="always"></ion-searchbar>

  <!-- Searchbar with cancel button never shown -->
  <ion-searchbar show-cancel-button="never"></ion-searchbar>

  <!-- Searchbar with cancel button shown on focus -->
  <ion-searchbar show-cancel-button="focus"></ion-searchbar>

  <!-- Searchbar with danger color -->
  <ion-searchbar color="danger"></ion-searchbar>

  <!-- Searchbar with value -->
  <ion-searchbar value="Ionic"></ion-searchbar>

  <!-- Searchbar with telephone type -->
  <ion-searchbar type="tel"></ion-searchbar>

  <!-- Searchbar with numeric inputmode -->
  <ion-searchbar inputmode="numeric"></ion-searchbar>

  <!-- Searchbar disabled -->
  <ion-searchbar disabled="true"></ion-searchbar>

  <!-- Searchbar with a cancel button and custom cancel button text -->
  <ion-searchbar show-cancel-button="focus" cancel-button-text="Custom Cancel"></ion-searchbar>

  <!-- Searchbar with a custom debounce -->
  <ion-searchbar debounce="500"></ion-searchbar>

  <!-- Animated Searchbar -->
  <ion-searchbar animated></ion-searchbar>

  <!-- Searchbar with a placeholder -->
  <ion-searchbar placeholder="Filter Schedules"></ion-searchbar>

  <!-- Searchbar in a Toolbar -->
  <ion-toolbar>
    <ion-searchbar></ion-searchbar>
  </ion-toolbar>
</template>

<script>
import { IonSearchbar, IonToolbar } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: { IonSearchbar, IonToolbar }
});
</script>
```

</TabItem>

</Tabs>

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