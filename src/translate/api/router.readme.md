# ion-router

Routerは、一般的なJavaScriptプロジェクト内でルーティングを処理するためのコンポーネントです。Angularプロジェクトの場合は、 `ion-router-outlet` とAngularルーターを使用します。

アプリケーションはコードベースに単一の `ion-router` コンポーネントを持たなければならない。
このコンポーネントは、ブラウザの履歴とのすべての対話を制御し、イベント・システムを介して更新を集約します。

`ion-router` は、`ion-nav` と `ion-tabs` 、 `ion-router-outlet` というIonicのナビゲーション機能のURL調整機能に過ぎません。

つまり、 `ion-router` はDOMにアクセスすることはなく、コンポーネントを表示することも、何らかのライフサイクルイベントを発行することもなく、ブラウザのURLに基づいて、`ion-nav` と `ion-tabs` 、 `ion-router-outlet`  に何をいつ「show」すべきかを指示するだけです。

コンポーネント(ロード/選択)とURLの間の関係を設定するために、`ion-router` はJSX/HTMLを使ってルートのツリーを定義する宣言的な構文を利用します。

Angularを使用している場合は、[ion-router-outlet](../router-outlet)を参照してください。


## Interfaces

### RouterEventDetail

```typescript
interface RouterEventDetail {
  from: string | null;
  redirectedFrom: string | null;
  to: string;
}
```

### RouterCustomEvent

While not required, this interface can be used in place of the `CustomEvent` interface for stronger typing with Ionic events emitted from this component.

```typescript
interface RouterCustomEvent extends CustomEvent {
  detail: RouterEventDetail;
  target: HTMLIonRouterElement;
}
```
