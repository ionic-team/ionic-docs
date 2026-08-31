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

このガイドでは、Ionic React アプリケーションで Ionic のライフサイクルイベントを利用する方法について説明します。

## Ionic のライフサイクルメソッド

Ionic は、アプリで利用できるいくつかのライフサイクルメソッドを提供します:

| イベント名         | 説明                                                                     |
| ------------------ | ------------------------------------------------------------------------ |
| `ionViewWillEnter` | コンポーネントが表示されるアニメーションが **はじまる時に** 発火します。 |
| `ionViewDidEnter`  | コンポーネントが表示されるアニメーションが **終了した時に** 発火します。 |
| `ionViewWillLeave` | コンポーネントを離脱するアニメーションが **はじまる時に** 発火します。   |
| `ionViewDidLeave`  | コンポーネントを離脱するアニメーションが **終了した時に**発火します。    |

これらのライフサイクルは、ルーターによって直接マッピングされたコンポーネントに対してのみ呼び出されます。つまり、`/pageOne`が`PageOneComponent`にマッピングされた場合、Ionic ライフサイクルは`PageOneComponent`で呼び出されますが、`PageOneComponent`がレンダリングする子コンポーネントでは呼び出されません。

これらのメソッドにアクセスする方法は、クラスベースのコンポーネントを使用しているか、機能的なコンポーネントを使用しているかによって異なります。以下では、両方の方法について説明します。

## クラスベースのコンポーネントにおけるライフサイクルメソッド

クラスベースのコンポーネントで Ionic のライフサイクルメソッドを使用するには、次のように `withIonLifeCycle` という高階コンポーネント（HOC）でコンポーネントをラップする必要があります:

```tsx
export default withIonLifeCycle(HomePage);
```

:::note
`withIonLifeCycle` は `@ionic/react` からインポートします
:::

そして、クラスコンポーネントに適切なライフサイクルメソッドを追加すると、イベントが発生した時に HOC がそのメソッドを呼び出します。以下は、各ライフサイクルメソッドを実装したコンポーネント全体です:

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

## Function ベースのコンポーネントにおけるライフサイクルメソッド

Ionic React は、ファンクションコンポーネントで使用できる各ライフサイクルメソッドのフックをエクスポートします。各フックは、イベントが発生したときに呼び出すメソッドを実行します。

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

Developers can also optionally pass reactive dependencies to each lifecycle hook. These are then passed to the underlying [React useEffect hook](https://react.dev/reference/react/useEffect#useeffect):

```tsx
const [data, setData] = useState('foo');

useIonViewDidEnter(() => {
  console.log('ionViewDidEnter event fired');
}, [data]);
```

## React ライフサイクルメソッド

React のすべてのライフサイクルメソッド（ `componentDidMount` 、`componentWillUnmount` など）も使用できます。 ただし、Ionic React はページのライフタイムを管理するため、特定のイベントが期待どおりに発生しない場合があります。 たとえば、最初にページが表示されたときは `componentDidMount` が起動しますが、ページから移動した時に Ionic はページを DOM ツリーに保持しているため、その後の当該ページへのアクセスでは `componentDidMount` を再度呼び出さない場合があります。 このシナリオは、Ionic ライフサイクルメソッドが存在する主な理由であり、ネイティブフレームワークのイベントが発生しない場合にビューが開始および終了するときにロジックを呼び出す方法を提供します。

## 各ライフサイクルメソッドのガイドライン

以下は、各ライフサイクルイベントのユースケースに関するヒントです。

- `ionViewWillEnter` - `ionViewWillEnter`はビューがナビゲートされるたびに（初期化されているかどうかに関わらず）呼び出されるため、サービスからデータをロードする良い方法です。
- `ionViewDidEnter` - データをロードするときに`ionViewWillEnter`を使用してパフォーマンスの問題が発生した場合、代わりに`ionViewDidEnter`でデータ呼び出しを行うことができます。ただし、このイベントはページがユーザーに表示された後にしか発火しないため、読み込みインジケーターやスケルトンスクリーンを使用すると、トランジション完了後にコンテンツが不自然にちらつくのを防ぐことができます。
- `ionViewWillLeave` - データソースからの購読解除などのクリーンアップに使用できます。`componentWillUnmount`は現在のページからナビゲートしたときに発火しない場合があるため、画面が表示されていない間にアクティブにしたくない場合は、この場所にクリーンアップコードを配置してください。
- `ionViewDidLeave` - このイベントが発火すると、新しいページのトランジションが完全に終了したことがわかります。そのため、通常ビューが表示されているときには行わないロジックをここで実行できます。

## ページ間で状態を受け渡す

Ionic React はページのライフタイムを管理するため、ユーザーがアプリケーションをナビゲートすると、以前のページの状態が更新されることがあります。これは、React の `useEffect` や React Router の `useLocation` を使って決定された状態に影響を与えることがあります。例えば、`PageA` が `useLocation` を呼び出した場合、ユーザーが `PageA` から `PageB` に移動すると `useLocation` の状態は変化します。

開発者は、前のページが定義された状態にしかアクセスしないことを保証するために、適切なチェックを含める必要があります。

例えば、以下のコードは `testObject` が定義されていない場合、エラーになります： `{ state.testObject.childKey }` となります。

その代わりに、開発者は `testObject` が定義されている場合にのみ `childKey` にアクセスする必要があります： `{ state.testObject?.childKey }` となります。
