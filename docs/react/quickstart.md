---
title: Ionic Reactクイックスタート
sidebar_label: クイックスタート
---

<head>
  <title>Intro to Ionic React Quickstart Using Ionic CLI: React Basics</title>
  <meta
    name="description"
    content="Intro to React Quickstart covers the basics of React and Ionic, including any Ionic-specific features. Learn how to build React apps using the Ionic CLI."
  />
</head>

## Ionic Framework とは

まず、ここに来たばかりの人を歓迎します！Ionic Framework は、 iOS, Android, Electron, Web 上で動作するアプリを構築するための、無償でオープンソースのコンポーネントライブラリです。使い慣れたテクノロジ(HTML、CSS、JavaScript)を使用してアプリケーションを一度作成したら、任意のプラットフォームに展開することができます。

UI コンポーネントに加えて、Ionic Framework は新しいアプリを作るためのコマンドラインツールを提供し、サポートしている様々なプラットフォームにデプロイすることができます。

このガイドでは、Ionic Framework 特有の機能を含め、React と Ionic Framework の基本について説明します。React に精通している方は、ガイドを楽しみ、Ionic Framework について新しいことを学んでください。どちらにも詳しくない方はご安心ください!このガイドでは、基本的なことを説明し、アプリケーションを起動して実行するのに十分な情報を提供します。

## Ionic CLI を使ったプロジェクト新規作成

はじめに、Ionic CLI の最新版をインストールしましょう。

```shell
npm install -g @ionic/cli
```

これによって使えるようになった、グローバルコマンド `ionic` によって、Ionic Framework と他の依存関係を持つ React プロジェクトを作成することができます。新しいプロジェクトを作成するには、次のコマンドを実行します。

```shell
ionic start myApp blank --type=react
cd myApp
```

これで、 `ionic serve` を実行することによって、プロジェクトをブラウザで実行することができます。

## React コンポーネントの確認

アプリケーションのベースは `src` ディレクトリにあり、メインのエントリポイントは `index.tsx` になります。エディタでプロジェクトを開き、`index.tsx` を確認すると、次のように表示されます:

```tsx
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));
```

ここでは何が処理されてるでしょう。最初の 3 行はいくつかの依存関係を import しています。1 つ目は React 自身です。これにより、JSX と呼ばれる HTML に似た構文でコンポーネントを記述できるようになります。JSX については後ほど説明します。

2 番目の import は ReactDOM です。 `ReactDOM.render` メソッドは、コンポーネントを取得し、指定された DOM ノードにレンダリングするための browser/DOM 固有の方法です。

最後のインポートは、単純に `App` という名前のアプリケーションのルートコンポーネントです。これは私たちの最初の React コンポーネントであり、React アプリの起動処理で使用されます。

`App.tsx` を開くと、以下のコードが確認できます。

```tsx
import React from 'react';
import { Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route path="/home" component={Home} exact={true} />
        <Route exact path="/" render={() => <Redirect to="/home" />} />
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);
```

一見、多くのことが起こっているように見えるかもしれないので、最初の import からみていきましょう。

```tsx
import React from 'react';
import { Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';
```

`index.tsx` に似ていますが、まず React をインポートして JSX を使用できるようにする必要があります。

次のインポートは `react-router-dom` からです。Route をインポートし、アプリの URL とレンダリングしたいコンポーネントをマッチさせます。

ReactRouter に続いて、Ionic を import します。React でコンポーネントを使用する前に import する必要があります。Ionic の場合、Button や Card を使いたい時はいつも import しなければなりません。App コンポーネントの場合は、 `IonApp`、 `IonRouterOutlet` 、および `IonReactRouter` を使用します。

`IonReactRouter` は、ReactRouter の BrowserRouter コンポーネントをラップするコンポーネントです。多少の違いはありますが、BrowserRouter と同じように動作します。これらの違いについては、 [React Navigation Docs](navigation.md) で詳しく説明しています。

最後の重要なインポートは `Home` コンポーネントのインポートです。これは、このアプリケーションでナビゲートできるコンポーネントです。ナビゲーション部分については、後で説明します。

CSS の import は Ionic から padding や typography などのユーティリティスタイルを取り込んでいます。

すべての import を確認したので、続いて React Component を初めて見てみましょう。

```tsx
const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route path="/home" component={Home} exact={true} />
        <Route exact path="/" render={() => <Redirect to="/home" />} />
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);
```

この React コンポーネントは、アプリの初期ルーティングをセットアップし、アニメーションとレイアウトのためのいくつかの重要な Ionic コンポーネントを含んでいます(IonRouterOutlet と IonApp)。一見変わった書き方にみえますが、React ではデータバインディングを行うために、値が中括弧 (`{}`) で渡されることに注目してください。つまり `Route` コンポーネントでは、 `component` の値を以前の `Home` コンポーネントに設定しています。これにより、React はその値が文字列ではなくコンポーネントへの参照であることを認識します。

:::note
ここで重要なのは、これらはすべて標準の React DOM ライブラリであり、カスタムの統合レイヤや変換ステップがないことです。
:::

## コンポーネントのスタイル

`App` を変更することはあまりありません。これは、コンテナ・コンポーネントの基本的な例です。Router のロジックでは、指定された URL ルートに一致するコンポーネントをレンダリングするだけです。すでに 1 つのコンポーネント/ルータが設定されているので、`Home` コンポーネントを変更します。

現在、 `Home` コンポーネントはこうなっています:

![React home component](/img/guides/react/first-app/home-route.png)

```tsx
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Ionic Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        The world is your oyster.
        <p>
          If you get lost, the{' '}
          <a target="_blank" rel="noopener" href="https://ionicframework.com/docs/">
            docs
          </a>{' '}
          will be your guide.
        </p>
      </IonContent>
    </IonPage>
  );
};
```

最初の `App` コンポーネントと同じように、特定の Ionic コンポーネントの import、React コンポーネントの import、そして React コンポーネント自体の import があります。

`IonPage` は、すべてのページ(ルート/URL を持つコンポーネント)のベースコンポーネントであり、Header、Title、Content コンポーネントなど、フルスクリーンコンポーネントの一般的な構成要素を含んでいます。

:::note
独自のページを作成するときは、 `IonPage` をそのルートコンポーネントにすることを忘れないでください。 `IonPage` をルートコンポーネントにすることは、トランジションが正しく動作することを保証し、Ionic コンポーネントが依存するベース CSS を提供するために重要です。
:::

`IonHeader` は、ページの先頭に存在することを意図したコンポーネントです。`IonHeader` 自体は、いくつかの flexbox のレイアウトを処理する以外は、ほとんど何もしません。これは、`IonToolbar` や `IonSearchbar` などの他のコンポーネントを保持するためのものです。

`IonContent` はその名の通り、私たちのページのメインコンテンツ領域です。ユーザーが操作するスクロール可能なコンテンツと、アプリで使用できるスクロールイベントを提供する責任をもっています。

私たちの現在のコンテンツは比較的シンプルが、実際のアプリで使えるようなものは何も含まれていません。

:::note
簡潔にするために、他のコンポーネントの関数宣言や import 文など、コンポーネントの繰り返し部分を除外しています。
:::

```tsx
<IonPage>
  ...
  <IonContent>
    <IonList>
      <IonItem>
        <IonCheckbox slot="start" />
        <IonLabel>
          <h1>Create Idea</h1>
          <IonNote>Run Idea by Brandy</IonNote>
        </IonLabel>
        <IonBadge color="success" slot="end">
          5 Days
        </IonBadge>
      </IonItem>
    </IonList>
  </IonContent>
</IonPage>
```

この `IonContent` では、 `IonList` と、さらに複雑な `IonItem` コンポーネントを追加します。ここでは `IonItem` を中心に見ていきます。

```tsx
<IonItem>
  <IonCheckbox slot="start" />
  <IonLabel>
    <h1>Create Idea</h1>
    <IonNote>Run Idea by Brandy</IonNote>
  </IonLabel>
  <IonBadge color="success" slot="end">
    5 Days
  </IonBadge>
</IonItem>
```

Item は React の概念と Web Component の概念が混在していることを明確に示す重要な要素です。React の概念の最初の明確な例は、 `IonCheckbox` の React コンポーネントの自己終了タグです。これは、子コンテンツを含まないコンポーネントを記述する単純な方法です。

Web コンポーネント側には、 `slot` という特殊な属性があります。これは、レンダリング時に `IonItem` に `IonCheckbox` を配置する場所を知らせるためのキーです。これは React API ではなく、Web 標準 API です。

Ionic Framework の別のコンポーネントである FAB（フローティング・アクション・ボタン）を見てみましょう。FAB は、アプリケーションの他の部分よりも上位のメイン・アクションを提供する優れた方法です。この FAB には、FAB、FAB ボタンおよびアイコンの 3 つのコンポーネントが必要です。

```tsx
import { add } from ‘ionicons/icons’;
…

<IonContent>
  <IonList>
  ...
  </IonList>

  <IonFab vertical="bottom" horizontal="end" slot="fixed">
    <IonFabButton>
      <IonIcon icon={add} />
    </IonFabButton>
  </IonFab>

</IonContent>
```

メインの `IonFab` では、縦方向と横方向の属性（vertical/horizontal）で表示位置を設定しています。また、slot 属性を使用して、レンダー位置を"fixed"に設定します。これにより、 `IonContent` 内のスクロール可能なコンテンツの外側でレンダリングするよう `IonFab` に指示します。

Now let's wire up a click handler to this. What we want to do is when we click the button, we'll navigate to a new page (which we'll create in a moment). To do this, we'll need to get access to React Router's `useHistory` hook API. Thankfully the `useHistory` hook makes this easy since it can be imported from the react-router package.

```tsx
import { add } from 'ionicons/icons';
import { useHistory } from 'react-router';
...
const Home: React.FC<RouteComponentProps> = () => {
  const history = useHistory();
  return (
    <IonPage>
      <IonHeader>...</IonHeader>
      <IonContent>
        <IonList>...</IonList>
        <IonFab vertical="bottom" horizontal="end" slot="fixed">
          <IonFabButton onClick={() => history.push('/new')}>
            <IonIcon icon={add} />
          </IonFabButton>
        </IonFab>
      </IonContent>
    </IonPage>
  );
}
export default Home;
```

コンポーネント宣言では、`RouteComponentProps` 型 (`react-router` から import)の `props` を渡しています。この `props`オブジェクトは、React Router から履歴 API へのアクセスを提供し、新しいルートをナビゲーション・スタックにプッシュできるようにします。`IonFabButton` では、クリックハンドラーを追加し、 `props.history.push` を呼び出して新しいルートを渡すだけです。この場合は、 `new` に移動します。

```tsx
<IonFabButton onClick={() => props.history.push('/new')} >
```

## 新しい Route の作成

これで、アプリケーション内をナビゲートするための環境が整ったので、新しいコンポーネントを作成し、新しい route をルーターの宣言に追加する必要があります。 `App.tsx` を開いて、 `new` の route を追加します。

```tsx
...
import Home from './pages/Home';

import NewItem from './pages/NewItem';
...
const App: React.FC = () => {
  const isAuthed = true;
  return (
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet>
          <Route path="/home" component={Home} />
          <Route path="/new" component={NewItem} />
          <Redirect exact from="/" to="/home" />
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  );
}
export default App;
```

ルータに route `/new` のエントリが追加されたので、必要なコンポーネント `NewItem` を作成します。これは `src/pages/NewItem.tsx` にあります。

とりあえず、 `NewItem.tsx` にプレースホルダの内容を入力してみましょう。

```tsx
import { IonBackButton, IonButtons, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';

const NewItem: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton />
          </IonButtons>
          <IonTitle>New Item</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent></IonContent>
    </IonPage>
  );
};
export default NewItem;
```

:::note
Each view must contain an `IonPage` component. Page transitions will not work correctly without it. See the [IonPage Documentation](navigation.md#ionpage) for more information.
:::

ここの内容は非常に単純で、 `Home` コンポーネントに似ているはずです。新しいのは `IonBackButton` コンポーネントです。これは、前のルートに戻るために使用されます。まっすぐ前に?では、ページをリロードしたらどうなりますか?

この場合、メモリ内の履歴が失われるため、戻るボタンが消えます。これに対処するには、 `defaultHref` 属性値を、履歴がない場合にナビゲートする URL に設定します。

```tsx
return (
  <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonButtons slot="start">
          <IonBackButton defaultHref="/home" />
        </IonButtons>
        <IonTitle>New Item</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent />
  </IonPage>
);
```

ここでリロードすると、アプリの履歴がなければ、ホームルートに戻ることができます。

## Adding Icons

Ionic React comes with (https://ionic.io/ionicons/) pre-installed. All you need to do is import the icon of your choice from the `ionicons` package, and pass it to an `IonIcon` component through the `icon` prop:

```tsx
import React from 'react';
import { IonButton, IonContent, IonIcon } from '@ionic/react';
import { camera } from 'ionicons/icons';

export const IconExample: React.FC = () => {
  <IonContent>
    <IonButton>
      <IonIcon icon={camera} />
      Take Picture
    </IonButton>
  </IonContent>;
};
```

Note that for React, we are passing the imported SVG reference, **not** the icon name as a string.

Developers also have the option of setting different icons based upon the mode:

```tsx
import React from 'react';
import { IonButton, IonContent, IonIcon } from '@ionic/react';
import { logoAndroid, logoApple } from 'ionicons/icons';

export const IconExample: React.FC = () => {
  <IonContent>
    <IonButton>
      <IonIcon ios={logoApple} md={logoAndroid} />
    </IonButton>
  </IonContent>;
};
```

## Build a Native App

UI コンポーネントやナビゲーションなど、Ionic React アプリの基本的な部分はすでに完成しています。Ionic Framework のコンポーネントの素晴らしいところは、iOS、Android、PWA を含むどこでも動作することです。モバイル、デスクトップ、その他にもデプロイするために、Ionic のクロスプラットフォームライブラリ [Capacitor](https://capacitorjs.com) を使用することができます。一貫性のある Web に特化した API セットを提供することで、 Web 標準をサポートするプラットフォーム上の豊富なネイティブデバイス機能にアクセスしながら、アプリケーションを可能な限り Web 標準に近づけることが可能になります。

ネイティブ機能を追加するのは簡単で、最初にプロジェクトに Capacitor を追加します:

```shell
ionic integrations enable capacitor
```

次に、プロジェクトをビルドしてから利用するプラットフォームを選択します:

```shell
ionic build
ionic cap add ios
ionic cap add android
```

iOS と Android のプロジェクトを開いたり、ビルド、実行するのに、ネイティブの IDE(Xcode と Android Studio)を使います:

```shell
ionic cap open ios
ionic cap open android
```

詳細は [こちら](https://capacitorjs.com/docs/getting-started/with-ionic) をご覧ください。

次に、 [すべての利用可能な APIs](https://capacitorjs.com/docs/apis) を確認します。[Camera API](https://capacitorjs.com/docs/apis/camera) を含むすばらしい機能があります。以下の数行のコードでカメラ機能を実装することができます￥:

```tsx
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/react';
import React, { useState } from 'react';
import { Plugins, CameraResultType } from '@capacitor/core';

const Home: React.FC = () => {
  const { Camera } = Plugins;
  const [photo, setPhoto] = useState();
  const takePhoto = async () => {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Uri,
    });
    setPhoto(image.webPath);
  };
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Ionic Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <img src={photo} />
        <IonButton onClick={takePhoto}>Take Photo</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Home;
```

## 次にすること

このガイドでは、Ionic React アプリの作成の基本、基本的なナビゲーションの追加、ネイティブアプリを構築する方法としての Capacitor の紹介について説明した。React と Capacitor で完全な Ionic アプリを作るには、[First App guide](your-first-app.md)を参照してください。

Ionic のコンポーネントの詳細は [component API pages](https://ionicframework.com/docs/components) をチェックしてほしい。React の詳細については、 [React Docs](https://reactjs.org/) を参照ください。ネイティブ機能の構築を続けるには、 [Capacitor docs](https://capacitorjs.com/docs/) を参照してください。

アプリ構築をお楽しみください! 🎉
