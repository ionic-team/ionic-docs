# ion-tabs

Tabsは、Tabをベースとしたナビゲーションを実装する最上位レベルのナビゲーション・コンポーネントです。
個々の[Tab](../tab/) を含めて構成するコンテナです。

`ion-tabs` は、ナビゲーションを操作するためのrouter outletとして機能する、スタイルのない部品です。
このコンポーネントには、Tabsを切り替えるためのUIフィードバックやメカニズムはありません。
そのためには、`ion-tabs` の直下に `ion-tab-bar` を設けなければなりません

```html
<ion-tabs>
  <ion-tab tab="home">Home Content</ion-tab>
  <ion-tab tab="settings">Settings Content</ion-tab>

  <ion-tab-bar slot="bottom">

    <ion-tab-button tab="home">
      <ion-label>Home</ion-label>
      <ion-icon name="home"></ion-icon>
      <ion-badge>6</ion-badge>
    </ion-tab-button>

    <ion-tab-button tab="settings">
      <ion-label>Settings</ion-label>
      <ion-icon name="settings"></ion-icon>
    </ion-tab-button>

  </ion-tab-bar>
</ion-tabs>
```

`ion-tabs` と `ion-tab-bar` は、どちらも単独の要素として使用できます。互いに依存して動作するわけではないが、通常はネイティブアプリのように感じるタブベースのナビゲーションを実装するために一緒に使います。

`ion-tab-bar` を `ion-tabs` に反映するためには、常に`slot="bottom"`が必要です。

## "tab" プロパティ

それぞれの `ion-tab-button` はタップされるとタブの1つを作動させます。
buttonを `ion-tab` コンテナにリンクするには、対応する `tab` プロパティを使用する必要があります。

```html
<ion-tab tab="settings">
[...]
<ion-tab-button tab="settings">
```

この `ion-tab-button` と `ion-tab` は現在、共通の `tab` プロパティによってリンクされています。

`tab` プロパティはそれぞれのタブを識別し、同じ `ion-tabs` の範囲内で一意である必要があります。`ion-tab` と `ion-tab-button` だけを使用する場合でも、同じプロパティを設定することが重要です。たとえば、 `ion-tabs` を使用せずに `ion-tab-bar` を使用できます。この場合でも、各`ion-tab`には`tab="何か"`のプロパティを指定する必要があります。

### Routerとの統合

IonicのRouter (`ion-router`) を利用する場合、`tab`のプロパティは、`ion-route` の "component" に一致させます:

`ion-tabs` outletの範囲内で以下のrouteを使った場合:

```html
<ion-route url="/settings-page" component="settings"></ion-route>
```

次の `tab` プロパティに一致します:

```html
<ion-tab tab="settings" component="settings-component"></ion-tab>
```

### Angular Routerとの統合

Angularのrouterでタブを使うのはかなり簡単です。ここでは、routeへの参照であるtabを定義するだけです。

```html

<ion-tabs>
  <ion-tab-bar slot="bottom">
    <ion-tab-button tab="schedule">
      <ion-icon name="calendar"></ion-icon>
      <ion-label>Schedule</ion-label>
    </ion-tab-button>
  </ion-tab-bar>
</ion-tabs>
```
