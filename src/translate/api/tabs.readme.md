# ion-tabs


Tabsは、Tabをベースとしたナビゲーションを実装する最上位レベルのナビゲーション・コンポーネントです。
コンポーネントは、個々の [Tab](../tab/) コンポーネントのコンテナです。

`ion-tabs` コンポーネントにはスタイル設定がなく、ナビゲーションを処理するためのルーターアウトレットとして機能します。タブを切り替えるためのUIフィードバックやメカニズムは提供されません。そのためには、`ion-tabs` の直下に `ion-tab-bar` を設けるべきです。

`ion-tabs` と `ion-tab-bar`は、どちらも単独の要素として使用できます。これらは互いに依存せずに動作しますが、通常はネイティブアプリのように動作するタブベースのナビゲーションを実装するために一緒に使います。

`ion-tab-bar` は、`ion-tabs` コンポーネント内の正しい位置に表示されるようにslotの定義が必要です。

## Interfaces

### TabsCustomEvent

While not required, this interface can be used in place of the `CustomEvent` interface for stronger typing with Ionic events emitted from this component.

```typescript
interface TabsCustomEvent extends CustomEvent {
  detail: { tab: string };
  target: HTMLIonTabsElement;
}
```

