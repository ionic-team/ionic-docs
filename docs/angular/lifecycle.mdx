---
title: Ionic PageのLife Cycle
sidebar_label: ライフサイクル
---

<head>
  <title>AngularのページコンポーネントのLife Cycle - すべてのイベントのドキュメンテーション</title>
  <meta
    name="description"
    content="This guide covers how the page life cycle works in an Ionic app built with Angular. Learn how Ionic embraces life cycle events provided by Angular components."
  />
</head>

このガイドでは、Ionic と Angular を使用して構築されたアプリでの Page Life Cycle のしくみについて説明します。（追記：Life Cycle とは、表示をはじめてから破棄するまでを指します。この間の特定のタイミングに設定されているイベントを Life Cycle Events といいます）

![Flowchart illustrating the Ionic page life cycle events and their sequence.](/img/guides/lifecycle/ioniclifecycle.png 'Ionic Lifecycle Diagram')

## Angular のライフサイクルイベント

Ionic は Angular が提供するライフサイクルイベントを取り入れています。最もよく使う 2 つの Angular イベントは次のとおりです。

| イベント名    | 説明                                                                                                                                                    |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `ngOnInit`    | コンポーネントの初期化中に発生します。このイベントを使用して、ローカルメンバーを初期化し、一度だけ実行する必要がある Service を呼び出すことができます。 |
| `ngOnDestroy` | Angular がビューを破棄する直前に発生します。 observables の unsubscribe などのクリーンアップに役立ちます。                                              |

Angular のコンポーネントライフサイクルイベントの詳細については、[コンポーネントライフサイクルのドキュメント](https://angular.jp/guide/lifecycle-hooks)をご覧ください。

:::note
`ion-nav` または `ion-router-outlet` を使用するコンポーネントは、 `OnPush` 変更検出方式を使用しないでください。そうすることで、 `ngOnInit` などのライフサイクル・フックが起動するのを防ぐことができます。また、非同期状態の変更は正しくレンダリングされない場合があります。
:::

## Ionic のページイベント

Angular のライフサイクルイベントに加えて、Ionic Angular には、使用可能ないくつかの追加イベントがあります:

| イベント名         | 説明                                                                     |
| ------------------ | ------------------------------------------------------------------------ |
| `ionViewWillEnter` | コンポーネントが表示されるアニメーションがはじまる時に発火します。       |
| `ionViewDidEnter`  | コンポーネントが表示されるアニメーションが **終了した時に** 発火します。 |
| `ionViewWillLeave` | コンポーネントを離脱するアニメーションが **はじまる時に** 発火します。   |
| `ionViewDidLeave`  | コンポーネントを離脱するアニメーションが **終了した時に** 発火します。   |

これらのライフサイクルは、ルーターによって直接マッピングされたコンポーネントに対してのみ呼び出されます。つまり、`/pageOne`が`PageOneComponent`にマッピングされた場合、Ionic ライフサイクルは`PageOneComponent`で呼び出されますが、`PageOneComponent`がレンダリングする子コンポーネントでは呼び出されません。

`ionViewWillEnter`と`ionViewDidEnter`の違いは、いつ発火するかです。前者は `ngOnInit` の直後でページ遷移が始まる前に、後者は遷移が終わった後に直接呼び出されます。

`ionViewWillLeave` と `ionViewDidLeave` についてですが、 `ionViewWillLeave` は現在のページから離脱する処理がはじまる前に呼び出されますが、 `ionViewDidLeave` は新しいページに遷移する処理が成功してから呼び出されます (新しいページの `ionViewDidEnter` が発火した後になります)。

![Animated GIF showing Ionic page life cycle events in a console log as a page transition occurs.](/img/guides/lifecycle/ioniclifecycle.gif 'Ionic Lifecycle Animation')

## Ionic がページのライフサイクルを処理する仕組み

Ionic は `<ion-router-outlet />` という router outlet を持っています。この outlet が Angular の `<router-outlet />` を継承し、さらに拡張して、モバイルデバイスのためのより良い体験を可能にしました。

`<ion-router-outlet />` にアプリがラップされることで、Ionic はナビゲーションの扱いを少し変更します。新しいページに遷移すると、Ionic は古いページを既存の DOM に残しますが、ビューから隠して新しいページに移行します。これを行う理由は 2 つあります:

1. 古いページの状態を維持することができます（画面上のデータ、スクロール位置など）。
2. ページがすでに存在しており作成し直す必要がないため、ページへの移行がスムーズになります。

たとえば、UI の "戻る" ボタンまたはブラウザの "戻る" ボタンを押すことによってページが「Pop」されると、ページは DOM から削除されるだけとなります。

この特別な処理のために、`ngOnInit` と `ngOnDestroy` のメソッドは通常そうあるべきだと思うときには発火しないかもしれません。

`ngOnInit` はページが新しく作成されるたびに発火するだけなので、ページに戻ったときには発火されません。たとえば、タブのインタフェースで各ページ間を移動しても、各ページの `ngOnInit` メソッドは最初の 1 回だけ呼び出され、その後の表示では呼び出されません。`ngOnDestroy` はページが 「Pop」したときにのみ発生します。

## ルートガード

Ionic 3 では、いつページにアクセスすることができるか（ `ionViewCanEnter` ）と離脱できるか（`ionViewCanLeave`）を制御するのに役立つ、いくつかの追加のライフサイクルメソッドがありました。これらは、許可されていないユーザーからページを保護したり、ユーザーがページを離れたくないときにユーザーをページ上に保持したりするために使用できます（フォーム入力中など）。

これらの方法は、Angular のルートガードを使用するために Ionic 4 で削除されました。

ルートガードは、ルートに対して特定のアクションを実行できるかどうかを判断するのに役立ちます。それらは特定のインターフェースを実装するクラスです。`CanActive` と `CanDeactivate` のインターフェイスは、`ionViewCanEnter` と `ionViewCanLeave` と同様のロジックでイベントを削除することができます。

```tsx
@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.authService.isAuthenticated();
  }
}
```

このガードを使用するには、それをルート定義の適切なパラメータに追加します:

```tsx
{ path: 'settings', canActivate: [AuthGuard], loadChildren: '...',  }
```

ルートガードの使い方の詳細については、Angular の [router documentation](https://angular.jp/guide/router) を参照してください。

## ライフサイクルメソッドのガイダンス

以下は、ライフサイクルイベントごとのユースケースに関するヒントです。

- `ngOnInit` - コンポーネントを初期化し、各訪問時に更新が不要なサービスからデータを読み込みます。
- `ionViewWillEnter` - `ionViewWillEnter` はビューがナビゲートされるたびに（初期化されているかどうかに関係なく）呼ばれるため、サービスからデータをロードするのに適したメソッドです。ただし、アニメーション中にデータが返ってくると、多くの DOM 操作が開始され、アニメーションがぎこちなくなることがあります。
- `ionViewDidEnter` - データをロードするときに `ionViewWillEnter` を使用してパフォーマンスに問題が生じる場合は、代わりに `ionViewDidEnter` でデータ呼び出しを行うことができます。ただし、このイベントはページがユーザーに表示されてから発火するため、コンテンツが遷移完了後に不自然にフラッシュしないよう、ローディングインジケーターやスケルトンスクリーンを使用することを検討してください。
- `ionViewWillLeave` - Observable の購読解除のようなクリーンアップに使用できます。`ngOnDestroy` は現在のページからナビゲートしたときに発火しない可能性があるため、スクリーンが表示されていない間にアクティブにしたくない場合は、ここにクリーンアップコードを置いてください。
- `ionViewDidLeave` - このイベントが発火すると、新しいページが完全に遷移したことがわかるので、通常ビューが表示されているときには行わないロジックをここで実行できます。
- `ngOnDestroy` - `ionViewWillLeave` でクリーンアップしたくないページ用のクリーンアップロジック。
