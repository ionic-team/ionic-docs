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

![Ionic life cycle events demo](/img/guides/lifecycle/ioniclifecycle.png)

## Angular の Life Cycle Events

Ionic は Angular が提供する Life Cycle Events を取り入れています。最もよく使う 2 つの Angular イベントは次のとおりです。

| Event Name    | Description                                                                                                                                             |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `ngOnInit`    | コンポーネントの初期化中に発生します。このイベントを使用して、ローカルメンバーを初期化し、一度だけ実行する必要がある Service を呼び出すことができます。 |
| `ngOnDestroy` | Angular がビューを破棄する直前に発生します。 observables の unsubscribe などのクリーンアップに役立ちます。                                              |

Angular の Component Life Cycle イベントの詳細については、それらの [component lifecycle docs](https://angular.jp/guide/lifecycle-hooks) をご覧ください。

:::note
`ion-nav` または `ion-router-outlet` を使用するコンポーネントは、 `OnPush` 変更検出方式を使用しないでください。そうすることで、 `ngOnInit` などのライフサイクル・フックが起動するのを防ぐことができます。また、非同期状態の変更は正しくレンダリングされない場合があります。
:::

## Ionic の Page Events

Angular の Life Cycle Events に加えて、Ionic Angular には、使用可能ないくつかの追加イベントがあります:

| Event Name         | Description                                                              |
| ------------------ | ------------------------------------------------------------------------ |
| `ionViewWillEnter` | コンポーネントが表示されるアニメーションがはじまる時に発火します。       |
| `ionViewDidEnter`  | コンポーネントが表示されるアニメーションが **終了した時に** 発火します。 |
| `ionViewWillLeave` | コンポーネントを離脱するアニメーションが **はじまる時に** 発火します。   |
| `ionViewDidLeave`  | コンポーネントを離脱するアニメーションが **終了した時に** 発火します。   |

これらのライフサイクルは、ルーターによって直接マッピングされたコンポーネントに対してのみ呼び出されます。つまり、`/pageOne`が`PageOneComponent`にマッピングされた場合、Ionic ライフサイクルは`PageOneComponent`で呼び出されますが、`PageOneComponent`がレンダリングする子コンポーネントでは呼び出されません。

`ionViewWillEnter`と`ionViewDidEnter`の違いは、いつ発火するかです。前者は `ngOnInit` の直後でページ遷移が始まる前に、後者は遷移が終わった後に直接呼び出されます。

`ionViewWillLeave` と `ionViewDidLeave` についてですが、 `ionViewWillLeave` は現在のページから離脱する処理がはじまる前に呼び出されますが、 `ionViewDidLeave` は新しいページに遷移する処理が成功してから呼び出されます (新しいページの `ionViewDidEnter` が発火した後になります)。

![Ionic life cycle events demo](/img/guides/lifecycle/ioniclifecycle.gif)

## Ionic が Page の Life をどのように処理するか

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

## Life Cycle メソッドのガイダンス

以下は、life cycle events ごとのユースケースに関するヒントです。

- `ngOnInit` - コンポーネントを初期化し、Service からアクセスごとに更新する必要がないデータをロードします。
- `ionViewWillEnter` - `ionViewWillEnter` は View がナビゲートされる度に呼び出されるので（初期化されているかどうかにかかわらず）、Service からデータをロードするのに適したメソッドです。ただし、アニメーション中にデータがを取得すると、大量の DOM 操作が開始される可能性があります。これにより、ぎこちないアニメーションが発生する可能性があります。
- `ionViewDidEnter` - `ionViewWillEnter` を使ってデータを取得していてパフォーマンスに問題がある時は、`ionViewDidEnter` を代わりに使うことができます。ただし、Page がユーザーに表示されるまではこのイベントは発火しません。そのため、ロードインジケータまたはスケルトン画面を使用することをお勧めします。これにより、遷移が完了した後にコンテンツが不自然に点滅することはありません。
- `ionViewWillLeave` - observables の unsubscribing のように、クリーンアップで利用します。 `ngOnDestroy` はあなたが現在のページから遷移する時には発火しない可能性がありますので、画面が表示されていない時にアクティブにしたくない場合はここでクリーンアップの処理を行います。
- `ionViewDidLeave` - このイベントが発生すると、新しいページへと完全に遷移したことがわかります。そのため、ビューが表示されているときに通常は行わない可能性があるロジックはすべてここに移動できます。
- `ngOnDestroy` - `ionViewWillLeave` でクリーンアップしたくないページのクリーンアップロジックはここにおいてください。
