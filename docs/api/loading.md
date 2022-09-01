---
title: "ion-loading"
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import Props from '@site/static/auto-generated/loading/props.md';
import Events from '@site/static/auto-generated/loading/events.md';
import Methods from '@site/static/auto-generated/loading/methods.md';
import Parts from '@site/static/auto-generated/loading/parts.md';
import CustomProps from '@site/static/auto-generated/loading/custom-props.md';
import Slots from '@site/static/auto-generated/loading/slots.md';

<head>
  <title>Loading | Application Loading Indicator Overlay | ion-loading</title>
  <meta name="description" content="ion-loadingは、ユーザーのインタラクションをブロックしながら、アクティビティを表示します。ローディングインジケータは、アプリのコンテンツの上に表示され、解除することができます。" />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="scoped" />


ユーザインタラクションをブロックしながらアクティビティを示すためのオーバーレイです。ローディング・インジケータはアプリのコンテンツの上に表示され、ユーザーの操作を再開するために消すことができます。オプションでbackdropが含まれており、`showBackdrop: false` で無効にすることができます。

## 基本的な使い方

一度表示されると、ロードインジケータはデフォルトで無期限に表示されます。開発者は、コンポーネント上で `dismiss()` メソッドを呼び出すことで、作成後にローディングインジケータを手動で解除することができます。onDidDismiss` 関数を呼び出すと、ローディングインジケータが解除された後にアクションを実行することができます。

また、ロードオプションの `duration` に表示するミリ秒数を渡すことで、特定の時間が経過した後にロードインジケータを自動的に解除するよう設定することもできます。

### Controller

import Controller from '@site/static/usage/loading/controller/index.md';

<Controller />

### インライン

Ionic ReactとIonic Vueのユーザーは、`ion-loading`コンポーネントをテンプレートで直接使用するオプションもあります。

<Tabs defaultValue="react" values={[{ value: 'react', label: 'React' }, { value: 'vue', label: 'Vue' }]}>
<TabItem value="react">

```tsx
import React, { useState } from 'react';
import { IonLoading, IonButton, IonContent } from '@ionic/react';

export const LoadingExample: React.FC = () => {
  const [showLoading, setShowLoading] = useState(false);

  return (
    <IonContent>
      <IonButton onClick={() => setShowLoading(true)}>Show Loading</IonButton>
      <IonLoading
        cssClass='my-custom-class'
        isOpen={showLoading}
        onDidDismiss={() => setShowLoading(false)}
        message={'Please wait...'}
        duration={5000}
      />
    </IonContent>
  );
};
```
</TabItem>
<TabItem value="vue">

```html
<template>
  <ion-content>
    <ion-button @click="setOpen(true)">Show Loading</ion-button>
    <ion-loading
      :is-open="isOpenRef"
      cssClass="my-custom-class"
      message="Please wait..."
      :duration="timeout"
      @didDismiss="setOpen(false)"
    >
    </ion-loading>
  </ion-content>
</template>

<script lang="ts">
import { IonButton, IonContent, IonLoading } from '@ionic/vue';
import { defineComponent, ref } from 'vue';
export default defineComponent({
  props: {
    timeout: { type: Number, default: 1000 },
  },
  components: { IonButton, IonContent, IonLoading },
  setup() {
    const isOpenRef = ref(false);
    const setOpen = (state: boolean) => isOpenRef.value = state;
    
    return { isOpenRef, setOpen }
  }
});
</script>
```
</TabItem>
</Tabs>

## カスタマイズ

### スピナー

使用するスピナーは `spinner` プロパティを使用してカスタマイズすることができます。オプションの完全なリストは [spinner property documentation](#spinner) を参照してください。

import Spinners from '@site/static/usage/loading/spinners/index.md';

<Spinners />

### テーマ

Loading は scoped encapsulation を使用しています。これは、実行時に各スタイルに追加のクラスを付加することで、自動的に CSS をスコープ化することを意味します。CSSでscopedセレクタをオーバーライドするには、[higher specificity](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity) セレクタが必要です。

カスタムクラスを渡して、それを使ってホストと内部要素にカスタムスタイルを追加することをお勧めします。

import Theming from '@site/static/usage/loading/theming/index.md';

<Theming />

:::note
 `ion-loading` is presented at the root of your application, so we recommend placing any `ion-loading` styles in a global stylesheet.
:::


## Interfaces

### LoadingOptions

```typescript
interface LoadingOptions {
  spinner?: SpinnerTypes | null;
  message?: string | IonicSafeString;
  cssClass?: string | string[];
  showBackdrop?: boolean;
  duration?: number;
  translucent?: boolean;
  animated?: boolean;
  backdropDismiss?: boolean;
  mode?: Mode;
  keyboardClose?: boolean;
  id?: string;
  htmlAttributes?: { [key: string]: any };

  enterAnimation?: AnimationBuilder;
  leaveAnimation?: AnimationBuilder;
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
