---
title: "ion-toast"
hide_table_of_contents: true
demoUrl: "/docs/demos/api/toast/index.html"
demoSourceUrl: "https://github.com/ionic-team/ionic-docs/tree/main/static/demos/api/toast/index.html"
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
import TOCInline from '@theme/TOCInline';

<EncapsulationPill type="shadow" />

<h2 className="table-of-contents__title">コンテンツ</h2>

<TOCInline
  toc={toc}
  maxHeadingLevel={2}
/>



Toastは、現代のアプリケーションで一般的に使用される小さな通知です。操作に関するフィードバックを提供したり、システムメッセージを表示したりするために使用できます。Toastはアプリのコンテンツの上に表示され、終了するとアプリとの対話を再開することができます。

## ポジション

Toastsは、ビューポートの上部、下部、または中央に配置できます。positionは作成時に値を渡すことができます。指定できる値は、`top`, `bottom` , `middle` です。位置を指定しない場合、Toastはビューポートの下部に表示されます。

## Dismissing

トーストオプションの `duration` に表示するミリ秒数を渡すことで、特定の時間経過後に自動的にトーストを終了させることができます。もし、 `"cancel"` というロールを持つボタンが追加されていれば、そのボタンがトーストを終了させることになります。作成後にトーストを終了させるには、インスタンスの `dismiss()` メソッドを呼び出してください。

## アイコン

トースト内のコンテンツの横にアイコンを追加することができます。一般的に、トーストのアイコンはスタイルやコンテキストを追加するために使用されるべきで、ユーザーの注意を引いたり、トーストの優先順位を上げたりするために使用すべきではありません。より優先順位の高いメッセージをユーザーに伝えたい場合や、応答を保証したい場合は、代わりに [Alert](alert.md) を使用することをお勧めします。

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

`aria-live`は、スクリーンリーダーがトーストを提示したときに、その内容をアナウンスするようにします。しかし、この属性は `'polite'` に設定されているため、スクリーン・リーダーは通常、現在のタスクを中断しません。開発者は `htmlAttributes` プロパティを使用して `aria-live` を `'assertive'` に設定することで、この動作をカスタマイズすることができます。これにより、スクリーンリーダーはトーストが表示されるとすぐにユーザーに通知し、それまでの更新を中断させる可能性があります。

また、`aria-atomic="true"`を設定すると、トースト全体を1つのユニットとしてアナウンスすることができます。これはトーストのコンテンツを動的に更新するときに便利で、スクリーン・リーダーが変更されたコンテンツのみをアナウンスすることを防ぎます。

### ヒント

これは完全なリストではありませんが、トーストを使用する際に従うべきガイドラインをいくつか紹介します。

* トーストの解除にユーザーの操作を必要としないようにします。例えば、トーストに "Dismiss" ボタンがあるのは良いですが、タイムアウト後にトーストが自動的に終了するようにします。通知のためにユーザーの操作が必要な場合は、代わりに [ion-alert](./alert) を使用することを検討してください。

* 複数のトーストを連続して開くことは避けてください。もし `aria-live` が `'assertive'` に設定されている場合、スクリーンリーダーは新しいトーストをアナウンスするために現在のタスクの読み込みを中断し、前のトーストのコンテキストが失われる可能性があります。

* 長いメッセージのトーストの場合は、`duration`プロパティを調整して、ユーザーがトーストの内容を読むのに十分な時間を確保することを検討してください。



## 使い方

<Tabs groupId="framework" defaultValue="angular" values={[{ value: 'angular', label: 'Angular' }, { value: 'javascript', label: 'Javascript' }, { value: 'react', label: 'React' }, { value: 'stencil', label: 'Stencil' }, { value: 'vue', label: 'Vue' }]}>

<TabItem value="angular">

```typescript
import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'toast-example',
  templateUrl: 'toast-example.html',
  styleUrls: ['./toast-example.css'],
})
export class ToastExample {

  constructor(public toastController: ToastController) {}

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Your settings have been saved.',
      duration: 2000
    });
    toast.present();
  }

  async presentToastWithOptions() {
    const toast = await this.toastController.create({
      header: 'Toast header',
      message: 'Click to Close',
      icon: 'information-circle',
      position: 'top',
      buttons: [
        {
          side: 'start',
          icon: 'star',
          text: 'Favorite',
          handler: () => {
            console.log('Favorite clicked');
          }
        }, {
          text: 'Done',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    await toast.present();

    const { role } = await toast.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

}
```


</TabItem>


<TabItem value="javascript">

```javascript
async function presentToast() {
  const toast = document.createElement('ion-toast');
  toast.message = 'Your settings have been saved.';
  toast.duration = 2000;

  document.body.appendChild(toast);
  return toast.present();
}

async function presentToastWithOptions() {
  const toast = document.createElement('ion-toast');
  toast.header = 'Toast header';
  toast.message = 'Click to Close';
  toast.icon = 'information-circle',
  toast.position = 'top';
  toast.buttons = [
    {
      side: 'start',
      icon: 'star',
      text: 'Favorite',
      handler: () => {
        console.log('Favorite clicked');
      }
    }, {
      text: 'Done',
      role: 'cancel',
      handler: () => {
        console.log('Cancel clicked');
      }
    }
  ];

  document.body.appendChild(toast);
  await toast.present();

  const { role } = await toast.onDidDismiss();
  console.log('onDidDismiss resolved with role', role);
}
```


</TabItem>


<TabItem value="react">

```tsx
/* Using the useIonToast Hook */

import React from 'react';
import { IonButton, IonContent, IonPage, useIonToast } from '@ionic/react';

const ToastExample: React.FC = () => {
  const [present, dismiss] = useIonToast();

  return (
    <IonPage>
      <IonContent>
        <IonButton
          expand="block"
          onClick={() =>
            present({
              buttons: [{ text: 'hide', handler: () => dismiss() }],
              message: 'toast from hook, click hide to dismiss',
              onDidDismiss: () => console.log('dismissed'),
              onWillDismiss: () => console.log('will dismiss'),
            })
          }
        >
          Show Toast
        </IonButton>
        <IonButton
          expand="block"
          onClick={() => present('hello from hook', 3000)}
        >
          Show Toast using params, closes in 3 secs
        </IonButton>
        <IonButton expand="block" onClick={dismiss}>
          Hide Toast
        </IonButton>
      </IonContent>
    </IonPage>
  );
};
```

```tsx
/* Using the IonToast Component */

import React, { useState } from 'react';
import { IonToast, IonContent, IonButton } from '@ionic/react';
import { informationCircle, star } from 'ionicons/icons';

export const ToastExample: React.FC = () => {
  const [showToast1, setShowToast1] = useState(false);
  const [showToast2, setShowToast2] = useState(false);

  return (
    <IonContent>
      <IonButton onClick={() => setShowToast1(true)} expand="block">Show Toast 1</IonButton>
      <IonButton onClick={() => setShowToast2(true)} expand="block">Show Toast 2</IonButton>
      <IonToast
        isOpen={showToast1}
        onDidDismiss={() => setShowToast1(false)}
        message="Your settings have been saved."
        duration={200}
      />

      <IonToast
        isOpen={showToast2}
        onDidDismiss={() => setShowToast2(false)}
        message="Click to Close"
        icon={informationCircle}
        position="top"
        buttons={[
          {
            side: 'start',
            icon: star,
            text: 'Favorite',
            handler: () => {
              console.log('Favorite clicked');
            }
          },
          {
            text: 'Done',
            role: 'cancel',
            handler: () => {
              console.log('Cancel clicked');
            }
          }
        ]}
      />
    </IonContent>
  );
};
```


</TabItem>


<TabItem value="stencil">

```tsx
import { Component, h } from '@stencil/core';

import { toastController } from '@ionic/core';

@Component({
  tag: 'toast-example',
  styleUrl: 'toast-example.css'
})
export class ToastExample {
  async presentToast() {
    const toast = await toastController.create({
      message: 'Your settings have been saved.',
      duration: 2000
    });
    toast.present();
  }

  async presentToastWithOptions() {
    const toast = await toastController.create({
      header: 'Toast header',
      message: 'Click to Close',
      icon: 'information-circle',
      position: 'top',
      buttons: [
        {
          side: 'start',
          icon: 'star',
          text: 'Favorite',
          handler: () => {
            console.log('Favorite clicked');
          }
        }, {
          text: 'Done',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    await toast.present();

    const { role } = await toast.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  render() {
    return [
      <ion-content>
        <ion-button onClick={() => this.presentToast()}>Present Toast</ion-button>
        <ion-button onClick={() => this.presentToastWithOptions()}>Present Toast: Options</ion-button>
      </ion-content>
    ];
  }
}
```


</TabItem>


<TabItem value="vue">

```html
<template>
  <ion-page>
    <ion-content class="ion-padding">
      <ion-button @click="openToast">Open Toast</ion-button>
      <ion-button @click="openToastOptions">Open Toast: Options</ion-button>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonButton, IonContent, IonPage, toastController } from '@ionic/vue';
import { informationCircle } from 'ionicons/icons';

export default {
  components: { IonButton, IonContent, IonPage },
  methods: {
    async openToast() {
      const toast = await toastController
        .create({
          message: 'Your settings have been saved.',
          duration: 2000
        })
      return toast.present();
    },
    async openToastOptions() {
      const toast = await toastController
        .create({
          header: 'Toast header',
          message: 'Click to Close',
          icon: informationCircle,
          position: 'top',
          buttons: [
            {
              side: 'start',
              icon: 'star',
              text: 'Favorite',
              handler: () => {
                console.log('Favorite clicked');
              }
            }, {
              text: 'Done',
              role: 'cancel',
              handler: () => {
                console.log('Cancel clicked');
              }
            }
          ]
        })
      await toast.present();

      const { role } = await toast.onDidDismiss();
      console.log('onDidDismiss resolved with role', role);
    },
  },
}
</script>
```

Developers can also use this component directly in their template:

```html
<template>
  <ion-button @click="setOpen(true)">Show Toast</ion-button>
  <ion-toast
    :is-open="isOpenRef"
    message="Your settings have been saved."
    :duration="2000"
    @didDismiss="setOpen(false)"
  >
  </ion-toast>
</template>

<script>
import { IonToast, IonButton } from '@ionic/vue';
import { defineComponent, ref } from 'vue';

export default defineComponent({
  components: { IonToast, IonButton },
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