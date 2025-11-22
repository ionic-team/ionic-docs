---
title: Ionic React Quickstart
sidebar_label: Quickstart
---

<head>
  <title>Ionic CLIを使用したIonic Reactクイックスタート: Reactの基本</title>
  <meta
    name="description"
    content="Ionic Reactクイックスタートでは、Ionic固有の機能を含むReactとIonicの基本をカバーします。Ionic CLIを使用してReactアプリを構築する方法を学びます。"
  />
</head>

import DocsCard from '@components/global/DocsCard';
import DocsCards from '@components/global/DocsCards';

ようこそ！このガイドでは、Ionic React 開発の基本を説明します。開発環境のセットアップ、シンプルなプロジェクトの生成、プロジェクト構造の探索、Ionic コンポーネントの動作方法を学びます。最初の実際のアプリを構築する前に Ionic React に慣れるのに最適です。

Ionic React とは何か、React エコシステムにどのように適合するかの高レベルの概要をお探しの場合は、[Ionic React の概要](overview)を参照してください。

## 前提条件

始める前に、マシンに Node.js と npm がインストールされていることを確認してください。
次を実行して確認できます：

```shell
node -v
npm -v
```

Node.js と npm がない場合は、[こちらから Node.js をダウンロード](https://nodejs.org/en/download)してください（npm が含まれています）。

## Ionic CLI でプロジェクトを作成

まず、最新の[Ionic CLI](../cli)をインストールします：

```shell
npm install -g @ionic/cli
```

次に、次のコマンドを実行して新しいプロジェクトを作成し、実行します：

```shell
ionic start myApp blank --type react

cd myApp
ionic serve
```

`ionic serve`を実行すると、プロジェクトがブラウザで開きます。

![Screenshot of the Ionic React Home page](/img/guides/quickstart/home-page.png 'Ionic React Home Component')

## Explore the Project Structure

Your new app's directory will look like this:

```shell
└── src/
    ├── App.tsx
    ├── components
    │   ├── ExploreContainer.css
    │   └── ExploreContainer.tsx
    ├── main.tsx
    └── pages
        ├── Home.css
        └── Home.tsx
```

:::info
以下の例のすべてのファイルパスは、プロジェクトのルートディレクトリを基準にしています。
:::

アプリの構造を理解するために、これらのファイルを見ていきましょう。

## View the App Component

The root of your app is defined in `App.tsx`:

```tsx title="src/App.tsx"
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';

// ..CSS imports...

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
```

これにより、Ionic の`IonApp`と`IonReactRouter`コンポーネントを使用してアプリケーションのルートが設定されます。`IonRouterOutlet`は、ページが表示される場所です。

## View Routes

Routes are defined within the `IonRouterOutlet` in `App.tsx`:

```tsx title="src/App.tsx"
<IonRouterOutlet>
  <Route exact path="/home">
    <Home />
  </Route>
  <Route exact path="/">
    <Redirect to="/home" />
  </Route>
</IonRouterOutlet>
```

ルート URL（`/`）にアクセスすると、`Home`コンポーネントが読み込まれます。

## View the Home Page

The Home page component, defined in `Home.tsx`, imports the Ionic components and defines the page template:

```tsx title="src/pages/Home.tsx"
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer />
      </IonContent>
    </IonPage>
  );
};

export default Home;
```

これにより、ヘッダーとスクロール可能なコンテンツ領域を持つページが作成されます。`IonPage`コンポーネントは基本的なページ構造を提供し、すべてのページで使用する必要があります。2 番目のヘッダーは、コンテンツの上部にあるときに表示される[折りたたみ可能な大きなタイトル](/docs/api/title.md#collapsible-large-titles)を示し、スクロールダウンすると最初のヘッダーの小さなタイトルを表示するために縮小されます。

:::tip 詳細情報
Ionic レイアウトコンポーネントの詳細については、[Header](/docs/api/header.md)、[Toolbar](/docs/api/toolbar.md)、[Title](/docs/api/title.md)、[Content](/docs/api/content.md)のドキュメントを参照してください。
:::

## Ionic コンポーネントを追加

より多くの Ionic UI コンポーネントで Home ページを強化できます。たとえば、`Home.tsx`の`IonContent`の最後に[Button](/docs/api/button.md)をインポートして追加します：

```tsx title="src/pages/Home.tsx"
import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
// ...existing imports...

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        {/* ...existing content... */}

        <IonButton>Navigate</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Home;
```

## Add a New Page

Create a new page at `New.tsx`:

```tsx title="src/pages/New.tsx"
import { IonBackButton, IonButtons, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

const New: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/"></IonBackButton>
          </IonButtons>
          <IonTitle>New</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">New</IonTitle>
          </IonToolbar>
        </IonHeader>
      </IonContent>
    </IonPage>
  );
};

export default New;
```

これにより、[Toolbar](/docs/api/toolbar.md)に[Back Button](/docs/api/back-button.md)を持つページが作成されます。戻るボタンは、前のページへのナビゲーション、または履歴がない場合は`/`へのナビゲーションを自動的に処理します。

:::warning
独自のページを作成する際は、常に`IonPage`をルートコンポーネントとして使用してください。これは、ページ間の適切な遷移、Ionic コンポーネントが依存する基本 CSS スタイリング、アプリ全体での一貫したレイアウト動作に不可欠です。
:::

## Navigate to the New Page

To navigate to the new page, create a route for it by first importing it at the top of `App.tsx` after the `Home` import:

```tsx title="src/App.tsx"
import New from './pages/New';
```

Then, add its route in `IonRouterOutlet`:

```tsx title="src/App.tsx"
<IonRouterOutlet>
  <Route exact path="/home">
    <Home />
  </Route>
  <Route exact path="/new">
    <New />
  </Route>
  <Route exact path="/">
    <Redirect to="/home" />
  </Route>
</IonRouterOutlet>
```

Once that is done, update the button in `Home.tsx`:

```tsx title="src/pages/Home.tsx"
<IonButton routerLink="/new">Navigate</IonButton>
```

:::info
React Router の`history`プロップを使用して、プログラム的にナビゲーションを実行することもできます。詳細については、[React Navigation ドキュメント](/docs/react/navigation.md#navigating-using-history)を参照してください。
:::

## 新しいページにアイコンを追加

Ionic React には[Ionicons](https://ionic.io/ionicons/)がプリインストールされています。`IonIcon`コンポーネントの`icon`プロパティを設定することで、任意のアイコンを使用できます。

`New.tsx`のインポートを更新して、`IonIcon`と`heart`および`logoIonic`アイコンをインポートします：

```tsx title="src/pages/New.tsx"
import { IonBackButton, IonButtons, IonContent, IonHeader, IonIcon, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { heart, logoIonic } from 'ionicons/icons';
```

次に、それらを`IonContent`内に含めます：

```tsx title="src/pages/New.tsx"
<IonIcon icon={heart} />
<IonIcon icon={logoIonic} />
```

インポートされた SVG 参照を渡していることに注意してください。文字列としてのアイコン名**ではありません**。

詳細については、[Icon ドキュメント](/docs/api/icon.md)と[Ionicons ドキュメント](https://ionic.io/ionicons/)を参照してください。

## コンポーネントメソッドを呼び出す

コンテンツ領域を下部にスクロールできるボタンを追加しましょう。

Update `New.tsx` to add a `ref` on `IonContent` and a button and some items after the existing icons:

```tsx title="src/pages/New.tsx"
<IonContent ref={content}>
  <IonIcon icon={heart} />
  <IonIcon icon={logoIonic} />

  <IonButton onClick={scrollToBottom}>Scroll to Bottom</IonButton>

  {/* Add lots of content to make scrolling possible */}
  {Array.from({ length: 50 }, (_, i) => (
    <IonItem key={i}>
      <IonLabel>Item {i + 1}</IonLabel>
    </IonItem>
  ))}
</IonContent>
```

Then, add the imports for the additional components and define the `scrollToBottom` function:

```tsx title="src/pages/New.tsx"
import { useRef } from 'react';
import { IonButton, IonBackButton, IonButtons, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { heart, logoIonic } from 'ionicons/icons';

const New: React.FC = () => {
  const content = useRef<HTMLIonContentElement>(null);

  const scrollToBottom = () => {
    content.current?.scrollToBottom(300);
  };

  return (
    // ...existing template...
  );
};

export default New;
```

To call methods on Ionic components:

1. Create a `ref` for the component
2. Call the method directly on `ref.current`

このパターンは、React refs がコンポーネントインスタンスを`.current`プロパティに保存するために必要です。

各コンポーネントの利用可能なメソッドは、API ドキュメントの[Methods](/docs/api/content.md#methods)セクションで見つけることができます。

## デバイスで実行

Ionic のコンポーネントは、iOS、Android、PWA のどこでも動作します。モバイルにデプロイするには、[Capacitor](https://capacitorjs.com)を使用します：

```shell
ionic build
ionic cap add ios
ionic cap add android
```

ネイティブプロジェクトを IDE で開きます：

```shell
ionic cap open ios
ionic cap open android
```

詳細については、[Capacitor の Getting Started ガイド](https://capacitorjs.com/docs/getting-started/with-ionic)を参照してください。

## さらに探索

このガイドでは、Ionic React アプリの作成、ナビゲーションの追加、ネイティブビルド用の Capacitor の導入の基本をカバーしました。さらに深く掘り下げるには、以下を確認してください：

<DocsCards>

<DocsCard header="最初のアプリを構築" href="your-first-app" icon="/icons/component-content-icon.png">
  <p>Ionic Reactとネイティブデバイス機能を使用して実際のPhoto Galleryアプリを構築します。</p>
</DocsCard>

<DocsCard header="Reactドキュメント" href="https://react.dev/learn" icon="/icons/logo-react-icon.png">
  <p>公式Reactドキュメントから、Reactのコアコンセプト、ツール、ベストプラクティスについて詳しく学びます。</p>
</DocsCard>

<DocsCard header="ナビゲーション" href="navigation" icon="/icons/component-navigation-icon.png">
  <p>React Routerを使用してIonic Reactアプリでルーティングとナビゲーションを処理する方法を発見します。</p>
</DocsCard>

<DocsCard header="コンポーネント" href="/docs/components" icon="/icons/guide-components-icon.png">
  <p>美しいアプリを構築するためのIonicの豊富なUIコンポーネントライブラリを探索します。</p>
</DocsCard>

<DocsCard header="テーマ設定" href="/docs/theming/basics" icon="/icons/guide-theming-icon.png">
  <p>Ionicの強力なテーマ設定システムを使用してアプリの外観と操作性をカスタマイズする方法を学びます。</p>
</DocsCard>

<DocsCard header="Capacitorドキュメント" href="https://capacitorjs.com/docs/" icon="/icons/guide-capacitor-icon.png">
  <p>
    Capacitorを使用してネイティブデバイス機能にアクセスし、アプリをiOS、Android、Webにデプロイする方法を探索します。
  </p>
</DocsCard>

</DocsCards>
