---
title: ハードウェアの戻るボタン
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<head>
  <title>Androidデバイスでのハードウェアの戻るボタン</title>
  <meta
    name="description"
    content="The hardware back button is found on most Android devices. Read to learn more about hardware back button use in Capacitor and Cordova on Ionic applications."
  />
</head>

ハードウェアの戻るボタンは、ほとんどのAndroidデバイスにあります。ネイティブアプリケーションでは、これを使って、モデルを閉じたり、前のビューに移動したり、アプリを終了したりすることができる。既定値では、 戻るボタンを押すと、現在のビューがナビゲーションスタックからポップされ、前のビューが表示されます。ナビゲーションスタックに前のビューが存在しない場合は、何も起こりません。このガイドでは、ハードウェアの戻るボタンの動作をカスタマイズする方法について説明します。

:::note
ハードウェアの 「戻る」 ボタンとはAndroidデバイスの物理的な 「戻る」 ボタンのことであり、ブラウザの 「戻る」 ボタンや `ion-back-button` ボタンと混同しないでください。このガイドの情報は、Androidデバイスにのみ適用されます。
:::

## CapacitorとCordovaにおける戻るボタン

:::note
The `@capacitor/app` package must be installed in Capacitor apps to use the hardware back button.
:::

When running in a Capacitor or Cordova application, Ionic Framework will emit an `ionBackButton` event when a user presses the hardware back button.

`ionBackButton` イベントを監視して、起動するハンドラを登録できます。このハンドラは、アプリケーションの終了や確認ダイアログのオープンなどのアクションを実行できます。各ハンドラには優先順位を割り当てる必要があります。既定では、ハードウェアの戻るボタンを押すごとに1つのハンドラだけが起動されます。優先順位の値は、どのコールバックを呼び出すかを決定するために使用されます。これが便利なのは、モーダルを開いている場合、ハードウェアの戻るボタンを押したときにモーダルが閉じられたり、アプリが後方に移動したりしないようにしたいからです。一度に1つのハンドラだけを実行すると、モーダルを閉じることができますが、戻るにはハードウェアの戻るボタンをもう一度押す必要があります。

複数のハンドラを起動したい場合があります。各ハンドラのコールバックは、フレームワークに次のハンドラを呼び出すように指示するために使用できるパラメーターとして関数を渡します。

## ブラウザにおける戻るボタン

モバイルブラウザーやPWAでアプリを実行する場合、ハードウェアのバックボタンカスタマイズは制限されます。これは、CapacitorとCordovaが、通常のWebブラウザでは公開されないデバイスAPIを利用しているために違いがあります。例えば、ハードウェアバックボタンを使ってオーバーレイやメニューを閉じる機能は、モバイルブラウザでアプリを実行しているときにはサポートされていません。これらは既知の制限であり、現時点では簡単な解決策はありません。

ハードウェアバックボタンを完全にサポートするには、CapacitorまたはCordovaの使用をお勧めします。

:::note
ブラウザやPWAで実行してる時、 `ionBackButton` イベントは実行されません。
:::

## Basic Usage

````mdx-code-block
<Tabs
  groupId="framework"
  defaultValue="javascript"
  values={[
    { value: 'javascript', label: 'JavaScript' },
    { value: 'angular', label: 'Angular' },
    { value: 'react', label: 'React' },
    { value: 'vue', label: 'Vue' },
  ]
}>
<TabItem value="javascript">

```javascript
document.addEventListener('ionBackButton', (ev) => {
  ev.detail.register(10, () => {
    console.log('Handler was called!');
  });
});

```
</TabItem>
<TabItem value="angular">

```tsx
import { Platform } from '@ionic/angular';

...

constructor(private platform: Platform) {
  this.platform.backButton.subscribeWithPriority(10, () => {
    console.log('Handler was called!');
  });
}

```
</TabItem>
<TabItem value="react">

```tsx
document.addEventListener('ionBackButton', (ev) => {
  ev.detail.register(10, () => {
    console.log('Handler was called!');
  });
});
```
</TabItem>
<TabItem value="vue">

```tsx
import { useBackButton } from '@ionic/vue';

...

export default {
  setup() {
    useBackButton(10, () => {
      console.log('Handler was called!');
    });
  }
}
```
</TabItem>
</Tabs>
````

この例では、ハードウェアバックボタンが押されたときに呼び出されるハンドラを登録しています。優先度を10に設定し、次のハンドラを呼び出すことをフレームワークに指定していません。その結果、優先順位が10未満のハンドラは呼び出されません。優先度が10より大きいハンドラが最初に呼び出されます。

同じ優先順位値を持つハンドラが存在する場合は、最後に登録されたハンドラが呼び出されます。詳細は、 [Handlers with the Same Priorities](#handlers-with-the-same-priorities) を参照してください。

## 複数ハンドラの呼び出し

各ハードウェアバックボタンコールバックには、 `processNextHandler` パラメータがあります。この関数を呼び出すと、ハードウェアバックボタンハンドラの呼び出しを続行できます。

````mdx-code-block
<Tabs
  groupId="framework"
  defaultValue="javascript"
  values={[
    { value: 'javascript', label: 'JavaScript' },
    { value: 'angular', label: 'Angular' },
    { value: 'react', label: 'React' },
    { value: 'vue', label: 'Vue' },
  ]
}>
<TabItem value="javascript">

```javascript
document.addEventListener('ionBackButton', (ev) => {
  ev.detail.register(5, () => {
    console.log('Another handler was called!');
  });

  ev.detail.register(10, (processNextHandler) => {
    console.log('Handler was called!');

    processNextHandler();
  });
});

```
</TabItem>
<TabItem value="angular">

```tsx
import { Platform } from '@ionic/angular';

...

constructor(private platform: Platform) {
  this.platform.backButton.subscribeWithPriority(5, () => {
    console.log('Another handler was called!');
  });

  this.platform.backButton.subscribeWithPriority(10, (processNextHandler) => {
    console.log('Handler was called!');

    processNextHandler();
  });
}

```
</TabItem>
<TabItem value="react">

```tsx
document.addEventListener('ionBackButton', (ev) => {
  ev.detail.register(5, () => {
    console.log('Another handler was called!');
  });

  ev.detail.register(10, (processNextHandler) => {
    console.log('Handler was called!');

    processNextHandler();
  });
});
```
</TabItem>
<TabItem value="vue">

```tsx
import { useBackButton } from '@ionic/vue';

...

export default {
  setup() {
    useBackButton(5, () => {
      console.log('Another handler was called!');
    });

    useBackButton(10, (processNextHandler) => {
      console.log('Handler was called!');

      processNextHandler();
    });
  }
}
```
</TabItem>
</Tabs>
````

この例は、次のハンドラを起動するようにIonic Frameworkに指示する方法を示しています。すべてのコールバックには、パラメータとして `processNextHandler` 関数が用意されています。これをコールすると、次のハンドラ (存在する場合) が起動されます。

## 同じ優先順位のハンドラ

内部的には、Ionic Frameworkはハードウェアのバックボタンハンドラを管理するためにプライオリティキューに似たものを使用します。優先順位の値が最大のハンドラが最初に呼び出されます。同じ優先順位のハンドラが複数存在する場合、このキューに追加された同じ優先順位の _last_ handlerが、最初に呼び出されるハンドラになります。

```javascript
document.addEventListener('ionBackButton', (ev) => {
  // Handler A
  ev.detail.register(10, (processNextHandler) => {
    console.log('Handler A was called!');

    processNextHandler();
  });

  // Handler B
  ev.detail.register(10, (processNextHandler) => {
    console.log('Handler B was called!');

    processNextHandler();
  });
});
```

上の例では、ハンドラAとBの両方の優先度は10です。ハンドラBは最後に登録されているため、Ionic FrameworkはハンドラAを呼び出す前にハンドラBを呼び出します。

## アプリの終了

場合によっては、ハードウェアの戻るボタンを押したときにアプリケーションを終了することをお勧めします。これは、Capacitor/Cordovaが提供するメソッドと組み合わせた `ionBackButton` イベントを使用することで実現できます。

````mdx-code-block
<Tabs
  groupId="framework"
  defaultValue="javascript"
  values={[
    { value: 'javascript', label: 'JavaScript' },
    { value: 'angular', label: 'Angular' },
    { value: 'react', label: 'React' },
    { value: 'vue', label: 'Vue' },
  ]
}>
<TabItem value="javascript">

```tsx
import { BackButtonEvent } from '@ionic/core';
import { App } from '@capacitor/app';

...

const routerEl = document.querySelector('ion-router');
document.addEventListener('ionBackButton', (ev: BackButtonEvent) => {
  ev.detail.register(-1, () => {
    const path = window.location.pathname;
    if (path === routerEl.root) {
      App.exitApp();
    }
  });
});
```
</TabItem>
<TabItem value="angular">

```tsx
import { Optional } from '@angular/core';
import { IonRouterOutlet, Platform } from '@ionic/angular';
import { App } from '@capacitor/app';

...

constructor(
  private platform: Platform,
  @Optional() private routerOutlet?: IonRouterOutlet
) {
  this.platform.backButton.subscribeWithPriority(-1, () => {
    if (!this.routerOutlet.canGoBack()) {
      App.exitApp();
    }
  });
}

```
</TabItem>
<TabItem value="react">

```tsx
import { useIonRouter } from '@ionic/react';
import { App } from '@capacitor/app';

...

const ionRouter = useIonRouter();
document.addEventListener('ionBackButton', (ev) => {
  ev.detail.register(-1, () => {
    if (!ionRouter.canGoBack()) {
      App.exitApp();
    }
  });
});
```
</TabItem>
<TabItem value="vue">

```tsx
import { useBackButton, useIonRouter } from '@ionic/vue';
import { App } from '@capacitor/app';

...

export default {
  setup() {
    const ionRouter = useIonRouter();
    useBackButton(-1, () => {
      if (!ionRouter.canGoBack()) {
        App.exitApp();
      }
    });
  }
}
```
</TabItem>
</Tabs>
````

この例は、ユーザがハードウェアの戻るボタンを押したときにアプリケーションが終了し、ナビゲーションスタックに何も残っていないことを示しています。アプリを終了する前に確認ダイアログを表示することも可能です。

アプリケーションを終了する前に、ユーザーがルート・ページにあるかどうかを確認することをお勧めします。開発者は、Ionic Angularの `IonRouterOutlet` で`canGoBack` 、 Ionic ReactおよびIonic Vueの `IonRouter` で `canGoBack` メソッドを使用できます。

## 内部フレームワークハンドラ

次の表は、Ionic Frameworkが使用するすべての内部ハードウェアバックボタンイベントハンドラの一覧です。 `Propagates` 列は、その特定のハンドラがIonic Frameworkに次の戻るボタンハンドラを呼び出すように指示するかどうかを示します。

| Handler    | Priority | Propagates | Description                                                                                                                              |
| ---------- | -------- | ---------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| Overlays   | 100      | No         | Applies to overlay components `ion-action-sheet`, `ion-alert`, `ion-loading`, `ion-modal`, `ion-popover`, and `ion-picker`. |
| Menu       | 99       | No         | Applies to `ion-menu`.                                                                                                                   |
| Navigation | 0        | Yes        | Applies to routing navigation (i.e. Angular Routing).                                                                                    |
