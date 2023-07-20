---
title: "ion-route-redirect"
---

import Props from '@ionic-internal/component-api/v7/route-redirect/props.md';
import Events from '@ionic-internal/component-api/v7/route-redirect/events.md';
import Methods from '@ionic-internal/component-api/v7/route-redirect/methods.md';
import Parts from '@ionic-internal/component-api/v7/route-redirect/parts.md';
import CustomProps from '@ionic-internal/component-api/v7/route-redirect/custom-props.md';
import Slots from '@ionic-internal/component-api/v7/route-redirect/slots.md';

<head>
  <title>ion-route-redirect Plugin: Redirect 'from' a URL 'to' Another URL</title>
  <meta name="description" content="ion-route-redirectは、ion-routerの直接の子として使用され、URLから他のURLへのリダイレクトを行います。ルートリダイレクトプラグインについては、こちらをご覧ください。" />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';


A route redirect can only be used with an `ion-router` as a direct child of it.

:::note
 Note: このコンポーネントは、バニラおよびステンシルJavaScriptプロジェクトでのみ使用してください。Angularプロジェクトでは、[`ion-router-outlet`](router-outlet.md) と Angularルータを使用してください。
:::


ルートリダイレクトには、2つの設定可能なプロパティがあります。
- `from`
- `to`

これは、ある URL から別の URL へとリダイレクトします。定義された `ion-route-redirect` ルールがマッチすると、ルータは `from` プロパティで指定されたパスから `to` プロパティで指定されたパスへリダイレクトします。リダイレクトを行うには、`from` のパスがナビゲートされる URL と完全に一致する必要があります。


## 複数ルートのリダイレクト

任意の数のリダイレクトルートを `ion-router` の内部で定義することができますが、合致するのは1つだけです。

ルートリダイレクトは、それ自身のリダイレクトの後に別のリダイレクトを呼び出すことはありません。

次の2つのリダイレクトを考えてみましょう。

```html
<ion-router>
  <ion-route-redirect from="/admin" to="/login"></ion-route-redirect>
  <ion-route-redirect from="/login" to="/admin"></ion-route-redirect>
</ion-router>
```

ユーザーが `/admin` に移動した場合、ルーターは `/login` にリダイレクトし、そこで停止します。複数のリダイレクトを評価することはありません。




## 使い方

```html
<!-- Redirects when the user navigates to `/admin` but
will NOT redirect if the user navigates to `/admin/posts` -->
<ion-route-redirect from="/admin" to="/login"></ion-route-redirect>

<!-- By adding the wilcard character (*), the redirect will match
any subpath of admin -->
<ion-route-redirect from="/admin/*" to="/login"></ion-route-redirect>
```

### ルートリダイレクトのガード

リダイレクトルートは、ユーザーが認証されているかどうかなど、与えられた条件に基づいて、ユーザーがアプリケーションの特定の領域に移動するのを防ぐためのガードとして機能することができます。

ルートリダイレクトは動的に追加・削除することができ、一部のルートをアクセスできないようにリダイレクト（ガード）することができます。次の例では、 `isLoggedIn` が `false` の場合、すべての URL `*` は `/login` にリダイレクトされます。

```tsx
const isLoggedIn = false;

const router = document.querySelector('ion-router');
const routeRedirect = document.createElement('ion-route-redirect');
routeRedirect.setAttribute('from', '*');
routeRedirect.setAttribute('to', '/login');

if (!isLoggedIn) {
  router.appendChild(routeRedirect);
}
```

また、`to`の値は条件に基づいて変更することもできます。次の例では、ルートリダイレクトはユーザーがログインしているかどうかをチェックし、ログインしていない場合は `/login` url にリダイレクトします。

```html
<ion-route-redirect id="tutorialRedirect" from="*"></ion-route-redirect>
```

```javascript
const isLoggedIn = false;
const routeRedirect = document.querySelector('#tutorialRedirect');

routeRedirect.setAttribute('to', isLoggedIn ? undefined : '/login');
```

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