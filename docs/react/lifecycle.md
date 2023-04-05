---
title: React Lifecycle
sidebar_label: ライフサイクル
---

<head>
  <title>React Lifecycle: A Guide to Ionic React App Component Lifecycles</title>
  <meta
    name="description"
    content="The React Lifecycle guide discusses how to use the Ionic Lifecycle events in an Ionic React application. Read to learn more about React component lifecycles."
  />
</head>

このガイドでは、Ionic ReactアプリケーションでIonicのライフサイクルイベントを利用する方法について説明します。

## Ionicのライフサイクルメソッド

Ionicは、アプリで利用できるいくつかのライフサイクルメソッドを提供します:

| Event Name         | Description                                                          |
|--------------------|------------------------------------------------------------------|
| `ionViewWillEnter` | コンポーネントが表示されるアニメーションがはじまる時に発火します。 |
| `ionViewDidEnter`  | コンポーネントが表示されるアニメーションが終了した時に発火します。 |
| `ionViewWillLeave` | コンポーネントを離脱するアニメーションがはじまる時に発火します。  |
| `ionViewDidLeave`  | コンポーネントを離脱するアニメーションが終了した時に発火します。 |

これらのライフサイクルは、ルーターによって直接マッピングされたコンポーネントに対してのみ呼び出されます。つまり、`/pageOne`が`PageOneComponent`にマッピングされた場合、Ionicライフサイクルは`PageOneComponent`で呼び出されますが、`PageOneComponent`がレンダリングする子コンポーネントでは呼び出されません。

これらのメソッドにアクセスする方法は、クラスベースのコンポーネントを使用しているか、機能的なコンポーネントを使用しているかによって異なります。以下では、両方の方法について説明します。

## クラスベースのコンポーネントにおけるライフサイクルメソッド

クラスベースのコンポーネントでIonicのライフサイクルメソッドを使用するには、次のように `withIonLifeCycle` という higher order component (HOC) でコンポーネントをラップする必要があります:

```tsx
export default withIonLifeCycle(HomePage);
```

:::note
`withIonLifeCycle` は `@ionic/react` からインポートします
:::

そして、クラスコンポーネントに適切なライフサイクルメソッドを追加すると、イベントが発生した時にHOCがそのメソッドを呼び出します。以下は、各ライフサイクルメソッドを実装したコンポーネント全体です:

```tsx
import React from 'react';
import { IonHeader, IonPage, IonToolbar, IonTitle, IonContent, withIonLifeCycle } from '@ionic/react';

class HomePage extends React.Component {
  ionViewWillEnter() {
    console.log('ionViewWillEnter event fired');
  }

  ionViewWillLeave() {
    console.log('ionViewWillLeave event fired');
  }

  ionViewDidEnter() {
    console.log('ionViewDidEnter event fired');
  }

  ionViewDidLeave() {
    console.log('ionViewDidLeave event fired');
  }

  render() {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Home</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent></IonContent>
      </IonPage>
    );
  }
}

export default withIonLifeCycle(HomePage);
```

## Functionベースのコンポーネントにおけるライフサイクルメソッド

Ionic Reactは、ファンクションコンポーネントで使用できる各ライフサイクルメソッドのフックをエクスポートします。各フックは、イベントが発生したときに呼び出すメソッドを実行します。

```tsx
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  useIonViewDidEnter,
  useIonViewDidLeave,
  useIonViewWillEnter,
  useIonViewWillLeave,
} from '@ionic/react';
import React from 'react';

const HomePage: React.FC = () => {
  useIonViewDidEnter(() => {
    console.log('ionViewDidEnter event fired');
  });

  useIonViewDidLeave(() => {
    console.log('ionViewDidLeave event fired');
  });

  useIonViewWillEnter(() => {
    console.log('ionViewWillEnter event fired');
  });

  useIonViewWillLeave(() => {
    console.log('ionViewWillLeave event fired');
  });

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Home</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent></IonContent>
    </IonPage>
  );
};

export default HomePage;
```

:::note
クラスコンポーネントのように、ファンクションコンポーネントを `withIonLifeCycle` HOC でラップする必要はありません。
:::

## Reactライフサイクルメソッド

Reactのすべてのライフサイクルメソッド（ `componentDidMount` 、`componentWillUnmount` など）も使用できます。 ただし、Ionic Reactはページのライフタイムを管理するため、特定のイベントが期待どおりに発生しない場合があります。 たとえば、最初にページが表示されたときは `componentDidMount` が起動しますが、ページから移動した時にIonicはページをDOMツリーに保持しているため、その後の当該ページへのアクセスでは `componentDidMount` を再度呼び出さない場合があります。 このシナリオは、Ionicライフサイクルメソッドが存在する主な理由であり、ネイティブフレームワークのイベントが発生しない場合にビューが開始および終了するときにロジックを呼び出す方法を提供します。

## 各ライフサイクルメソッドのガイドライン

以下は、各ライフサイクルイベントのユースケースに関するヒントです。

- `ionViewWillEnter` - コンポーネントが初期化されているかどうかに関係なくビューが表示される度に `ionViewWillEnter` が呼び出されるため、サービスからデータをロードするのに適したメソッドです。
- `ionViewDidEnter` - データのロード時に `ionViewWillEnter` を使用することでパフォーマンスの問題が発生する場合は、代わりに `ionViewDidEnter` でデータ呼び出しを行うことができます。 ただし、ページがユーザーに表示されるまでこのイベントは発生しません。そのため、ロードインジケーターまたはスケルトンスクリーンを使用して、表示が完了した後にコンテンツが不自然にフラッシュしないようにすることができます。
- `ionViewWillLeave` - データソースからの unsubscribe など、クリーンアップに使用できます。  `componentWillUnmount` は現在のページから移動しても起動しない場合があるため、画面が表示されていないときにアクティブにしたくない場合は、クリーンアップコードをここに配置します。
- `ionViewDidLeave` - このイベントが発生すると、新しいページに完全に移行したことがわかります。そのため、ビューが表示されているときに通常実行しないロジックはここに移動できます。
