# ion-route-redirect

edirect routerは、`ion-router`の直下で、その範囲でのみ使用できます。

> Note: これは、シンプルなJavaScriptプロジェクトのみを対象としています。Angularプロジェクトの場合は、 `ion-router-outlet` とAngularルーターを使用します。

このrouteには、設定可能な値が2つだけあります。
 - `from`
 - `to`

それらの意味は、あるURLから別のURLへのリダイレクトという文脈の中で明らかです。

一方、リダイレクトが発生するためには、 `from` パスがナビゲーションされたURLと完全に一致する必要があります。

## リダイレクトの評価

任意の数のリダイレクトルートが `ion-router` の内部で定義できますが、一致できるのは1つだけです。

また、リダイレクションルートは無限ループにつながる可能性があるため、別のリダイレクションルータにリダイレクトされることはありません。

次の2つのリダイレクトルールがあるとします：

```html
<ion-router>
  <ion-route-redirect from="/admin" to="/login"/>
  <ion-route-redirect from="/login" to="/admin"/>
</ion-router>
```

ユーザが`/admin`にアクセスしたとき、ルータは`/login`にリダイレクトし、そこで停止します。

ロール内で複数のリダイレクションルールを評価することはありません。


## 例

### シンプルなパス

```html
<ion-route-redirect from="/admin" to="/login">
```

このルートは、ユーザが`/admin`に移動したときに(リダイレクト)適用されますが、ユーザが`/admin/posts`に移動したときには適用されません。

adminのサブパスに一致させるには、ワイルドカード文字(`*`)を使用する必要があります。

```html
<ion-route-redirect from="/admin/*" to="/login">
```

### すべてのルートをloginにリダイレクト

リダイレクトルートは、ユーザーが認証されているかどうかなど、特定の条件に基づいてユーザーがアプリケーションの領域に移動できないようにするため、Guardとして機能します。


```tsx
{!this.isLoggedIn &&
  <ion-route-redirect from="*" to="/login"/> }
```

ルータを動的に追加および削除して、一部のルートがアクセスされないようにリダイレクト(またはguard)できます。

もう1つの方法は、`to` の値を変更することである。なぜなら、`to` の値が与えられた場合、`null` or `undefined`はリダイレクトを無効にするからです。

```tsx
 <ion-route-redirect from="*" to={this.isLoggedin ? undefined : '/login'}/>
```
