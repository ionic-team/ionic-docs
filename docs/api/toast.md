---
title: "ion-toast"
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import Props from '@site/static/auto-generated/toast/props.md';
import Events from '@site/static/auto-generated/toast/events.md';
import Methods from '@site/static/auto-generated/toast/methods.md';
import Parts from '@site/static/auto-generated/toast/parts.md';
import CustomProps from '@site/static/auto-generated/toast/custom-props.md';
import Slots from '@site/static/auto-generated/toast/slots.md';

<head>
  <title>ion-toast Component: A Dismissible App Notification Alert</title>
  <meta name="description" content="ion-toast コンポーネントは、システムメッセージやフィードバックを表示するアプリの通知です。トーストのアラートはコンテンツの上に表示され、インタラクションを再開するには解除されます。" />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

トーストは、最近のアプリケーションでよく使われる小さな通知です。操作に関するフィードバックを提供したり、システムメッセージを表示したりするために使用されます。トーストは、アプリケーションのコンテンツの上に表示され、アプリケーションによって解除されると、アプリケーションとの対話を再開することができます。

## Presenting

### Positioning

Toastsは、ビューポートの上部、下部、または中央に配置できます。positionは作成時に値を渡すことができます。指定できる値は、`top`, `bottom` , `middle` です。位置を指定しない場合、Toastはビューポートの下部に表示されます。

### Controller

import ControllerExample from '@site/static/usage/toast/presenting/controller/index.md';

<ControllerExample />

### Inline

When using Ionic with React or Vue, `ion-toast` can also be placed directly in the template through use of the `isOpen` property. Note that `isOpen` must be set to `false` manually when the toast is dismissed; it will not be updated automatically.

<Tabs defaultValue="react" values={[{ value: 'react', label: 'React' }, { value: 'vue', label: 'Vue' }]}>
<TabItem value="react">

```tsx
import React, { useState } from 'react';
import { IonButton, IonToast } from '@ionic/react';

function Example() {
  const [showToast, setShowToast] = useState(false);

  return (
    <>
      <IonButton onClick={() => setShowToast(true)}>Show Toast</IonButton>
      <IonToast
        isOpen={showToast}
        onDidDismiss={() => setShowToast(false)}
        message="Hello World!"
        duration={1500}
      />
    </>
  );
}
```

</TabItem>
<TabItem value="vue">

```html
<template>
  <ion-button @click="setOpen(true)">Show Toast</ion-button>
  <ion-toast
    :is-open="isOpenRef"
    @didDismiss="setOpen(false)"
    message="Hello World!"
    :duration="1500"
  ></ion-toast>
</template>

<script lang="ts">
import { IonButton, IonToast } from '@ionic/vue';
import { defineComponent, ref } from 'vue';

export default defineComponent({
  components: { IonButton, IonToast },
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

## Dismissing

トーストオプションの `duration` に表示するミリ秒数を渡すことで、特定の時間経過後に自動的にトーストを終了させることができます。もし、 `"cancel"` というロールを持つボタンが追加されていれば、そのボタンがトーストを終了させることになります。作成後にトーストを終了させるには、インスタンスの `dismiss()` メソッドを呼び出してください。

次の例では、`buttons` プロパティを使用して、クリックすると自動的にトーストを消すボタンを追加する方法と、dissue イベントの `role` を収集する方法を示しています。

import ButtonsPlayground from '@site/static/usage/toast/buttons/index.md';

<ButtonsPlayground />

## Icons

トースト内のコンテンツの横にアイコンを追加することができます。一般的に、トーストのアイコンはスタイルやコンテキストを追加するために使用されるべきで、ユーザーの注意を引いたり、トーストの優先順位を上げたりするために使用すべきではありません。より優先順位の高いメッセージをユーザーに伝えたい場合や、応答を保証したい場合は、代わりに [Alert](alert.md) を使用することをお勧めします。

import IconPlayground from '@site/static/usage/toast/icon/index.md';

<IconPlayground />

## Theming

import ThemingPlayground from '@site/static/usage/toast/theming/index.md';

<ThemingPlayground />

## Interfaces

### ToastButton

```typescript
interface ToastButton {
  text?: string;
  icon?: string;
  side?: 'start' | 'end';
  role?: 'cancel' | string;
  cssClass?: string | string[];
  handler?: () => boolean | void | Promise<boolean | void>;
}
```

### ToastOptions

```typescript
interface ToastOptions {
  header?: string;
  message?: string | IonicSafeString;
  cssClass?: string | string[];
  duration?: number;
  buttons?: (ToastButton | string)[];
  position?: 'top' | 'bottom' | 'middle';
  translucent?: boolean;
  animated?: boolean;
  icon?: string;
  htmlAttributes?: { [key: string]: any };

  color?: Color;
  mode?: Mode;
  keyboardClose?: boolean;
  id?: string;

  enterAnimation?: AnimationBuilder;
  leaveAnimation?: AnimationBuilder;
}
```

## アクセシビリティ

### フォーカスの管理

トーストはさりげなく通知するものであり、ユーザーの邪魔をするものではありません。トーストを消すためにユーザーの操作が必要であってはなりません。そのため、トーストが表示されても、フォーカスが自動的に移動することはありません。

### スクリーンリーダー

`ion-toast` は、デフォルトで `aria-live="polite"` と `aria-atomic="true"` が設定されています。

`aria-live` を指定すると、トーストの内容が更新されたときにスクリーンリーダがアナウンスするようになります。しかし、この属性は `'polite'` に設定されているため、スクリーン・リーダーは通常、現在のタスクを中断することはありません。開発者は `htmlAttributes` プロパティを使用して `aria-live` を `'assertive'` に設定することで、この動作をカスタマイズすることができます。これにより、トーストが更新されると、スクリーン・リーダーはすぐにユーザーに通知し、それまでの更新を中断させる可能性があります。

また、`aria-atomic="true"`を設定すると、トースト全体を1つのユニットとしてアナウンスすることができます。これはトーストのコンテンツを動的に更新するときに便利で、スクリーン・リーダーが変更されたコンテンツのみをアナウンスすることを防ぎます。

### ヒント

これは完全なリストではありませんが、トーストを使用する際に従うべきガイドラインをいくつか紹介します。

* トーストの解除にユーザーの操作を必要としないようにします。例えば、トーストに "Dismiss" ボタンがあるのは良いですが、タイムアウト後にトーストが自動的に終了するようにします。通知のためにユーザーの操作が必要な場合は、代わりに [ion-alert](./alert) を使用することを検討してください。

* 複数のトーストを連続して開くことは避けてください。もし `aria-live` が `'assertive'` に設定されている場合、スクリーンリーダーは新しいトーストをアナウンスするために現在のタスクの読み込みを中断し、前のトーストのコンテキストが失われる可能性があります。

* 長いメッセージのトーストの場合は、`duration`プロパティを調整して、ユーザーがトーストの内容を読むのに十分な時間を確保することを検討してください。

## Properties
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
