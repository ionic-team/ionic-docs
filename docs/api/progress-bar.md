---
title: "ion-progress-bar"
hide_table_of_contents: true
demoUrl: "/docs/demos/api/progress-bar/index.html"
demoSourceUrl: "https://github.com/ionic-team/ionic-docs/tree/main/static/demos/api/progress-bar/index.html"
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import Props from '@site/static/auto-generated/progress-bar/props.md';
import Events from '@site/static/auto-generated/progress-bar/events.md';
import Methods from '@site/static/auto-generated/progress-bar/methods.md';
import Parts from '@site/static/auto-generated/progress-bar/parts.md';
import CustomProps from '@site/static/auto-generated/progress-bar/custom-props.md';
import Slots from '@site/static/auto-generated/progress-bar/slots.md';

<head>
  <title>Progress Bar | Horizontal App Progress Bar for Loading Indicator</title>
  <meta name="description" content="ion-progress-barは、水平方向の読み込みインジケーターで、フォームの送信や更新の保存など、進行中のアプリ処理のステータスをユーザーに知らせます。" />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';
import TOCInline from '@theme/TOCInline';

<EncapsulationPill type="shadow" />

<h2 className="table-of-contents__title">コンテンツ</h2>

<TOCInline
  toc={toc}
  maxHeadingLevel={2}
/>



プログレスバーは、アプリのロード、フォームの送信、更新の保存など、進行中の処理の状態をユーザーに知らせるものです。プログレスバーには2つのタイプがあります。プログレスバーには、`determinate`と`indeterminate`の2種類があります。

## 進捗のタイプ

### Determinate

Determinateはデフォルトのタイプです。操作のパーセンテージがわかっている場合に使用されるべきです。進行状況は `value` プロパティを設定することで表現されます。これは、進捗が0から100%まで増加するように表示するために使用できます。

`buffer` プロパティが設定されている場合、バッファストリームがアニメーションの円と共に表示され、アクティビティを示します。また、`buffer`プロパティの値は、目に見えるトラックの量によって表されます。もし、`buffer`の値が `value` プロパティよりも小さい場合、可視トラックはありません。もし `buffer` が `1` と等しい場合は、バッファストリームは隠されます。

### Indeterminate

Indeterminateタイプは、処理にかかる時間が不明な場合に使用します。プログレスバーは `value` と連動しておらず、処理が完了するまでトラックに沿ってスライドしつづけます。



## 使い方

<Tabs groupId="framework" defaultValue="angular" values={[{ value: 'angular', label: 'Angular' }, { value: 'javascript', label: 'Javascript' }, { value: 'react', label: 'React' }, { value: 'stencil', label: 'Stencil' }, { value: 'vue', label: 'Vue' }]}>

<TabItem value="angular">

```html
<!-- Default Progressbar -->
<ion-progress-bar></ion-progress-bar>

<!-- Default Progressbar with 50 percent -->
<ion-progress-bar value="0.5"></ion-progress-bar>

<!-- Colorize Progressbar -->
<ion-progress-bar color="primary" value="0.5"></ion-progress-bar>
<ion-progress-bar color="secondary" value="0.5"></ion-progress-bar>

<!-- Other types -->
<ion-progress-bar value="0.25" buffer="0.5"></ion-progress-bar>
<ion-progress-bar type="indeterminate"></ion-progress-bar>
<ion-progress-bar type="indeterminate" reversed="true"></ion-progress-bar>
```


</TabItem>


<TabItem value="javascript">

```html
<!-- Default Progressbar -->
<ion-progress-bar></ion-progress-bar>

<!-- Default Progressbar with 50 percent -->
<ion-progress-bar value="0.5"></ion-progress-bar>

<!-- Colorize Progressbar -->
<ion-progress-bar color="primary" value="0.5"></ion-progress-bar>
<ion-progress-bar color="secondary" value="0.5"></ion-progress-bar>

<!-- Other types -->
<ion-progress-bar value="0.25" buffer="0.5"></ion-progress-bar>
<ion-progress-bar type="indeterminate"></ion-progress-bar>
<ion-progress-bar type="indeterminate" reversed="true"></ion-progress-bar>
```


</TabItem>


<TabItem value="react">

```tsx
import React from 'react';
import { IonProgressBar, IonContent } from '@ionic/react';

export const ProgressbarExample: React.FC = () => (
  <IonContent>
    {/*-- Default Progressbar --*/}
    <IonProgressBar></IonProgressBar><br />

    {/*-- Default Progressbar with 50 percent --*/}
    <IonProgressBar value={0.5}></IonProgressBar><br />

    {/*-- Colorize Progressbar --*/}
    <IonProgressBar color="primary" value={0.5}></IonProgressBar><br />
    <IonProgressBar color="secondary" value={0.5}></IonProgressBar><br />

    {/*-- Other types --*/}
    <IonProgressBar value={0.25} buffer={0.5}></IonProgressBar><br />
    <IonProgressBar type="indeterminate"></IonProgressBar><br />
    <IonProgressBar type="indeterminate" reversed={true}></IonProgressBar><br />
  </IonContent>
);
```


</TabItem>


<TabItem value="stencil">

```tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'progress-bar-example',
  styleUrl: 'progress-bar-example.css'
})
export class ProgressBarExample {
  render() {
    return [
      // Default Progressbar
      <ion-progress-bar></ion-progress-bar>,

      // Default Progressbar with 50 percent
      <ion-progress-bar value={0.5}></ion-progress-bar>,

      // Colorize Progressbar
      <ion-progress-bar color="primary" value={0.5}></ion-progress-bar>,
      <ion-progress-bar color="secondary" value={0.5}></ion-progress-bar>,

      // Other types
      <ion-progress-bar value={0.25} buffer={0.5}></ion-progress-bar>,
      <ion-progress-bar type="indeterminate"></ion-progress-bar>,
      <ion-progress-bar type="indeterminate" reversed={true}></ion-progress-bar>
    ];
  }
}
```


</TabItem>


<TabItem value="vue">

```html
<template>
  <!-- Default Progressbar -->
  <ion-progress-bar></ion-progress-bar>

  <!-- Default Progressbar with 50 percent -->
  <ion-progress-bar value="0.5"></ion-progress-bar>

  <!-- Colorize Progressbar -->
  <ion-progress-bar color="primary" value="0.5"></ion-progress-bar>
  <ion-progress-bar color="secondary" value="0.5"></ion-progress-bar>

  <!-- Other types -->
  <ion-progress-bar value="0.25" buffer="0.5"></ion-progress-bar>
  <ion-progress-bar type="indeterminate"></ion-progress-bar>
  <ion-progress-bar type="indeterminate" reversed="true"></ion-progress-bar>
</template>

<script>
import { IonProgressBar } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: { IonProgressBar }
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