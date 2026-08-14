---
sidebar_label: ライフサイクル
---

# Vue のライフサイクル

このガイドでは、Ionic Framework のライフサイクルイベントを Ionic Vue アプリケーションで使用する方法について説明します。

## Ionic Framework のライフサイクルメソッド

Ionic Framework はアプリで使えるいくつかのライフサイクルメソッドを提供します:

| イベント名         | 説明                                                                     |
| ------------------ | ------------------------------------------------------------------------ |
| `ionViewWillEnter` | コンポーネントが表示されるアニメーションが **はじまる時に** 発火します。 |
| `ionViewDidEnter`  | コンポーネントが表示されるアニメーションが **終了した時に** 発火します。 |
| `ionViewWillLeave` | コンポーネントを離脱するアニメーションが **はじまる時に** 発火します。   |
| `ionViewDidLeave`  | コンポーネントを離脱するアニメーションが **終了した時に** 発火します。   |

これらのライフサイクルは、ルーターによって直接マッピングされたコンポーネントに対してのみ呼び出されます。つまり、`/pageOne`が`PageOneComponent`にマッピングされた場合、Ionic ライフサイクルは`PageOneComponent`で呼び出されますが、`PageOneComponent`がレンダリングする子コンポーネントでは呼び出されません。

ライフサイクルは、Vue のライフサイクルメソッドと同じように、Vue コンポーネントのルートで関数として定義されます：

```vue
<script setup lang="ts">
import { IonPage } from '@ionic/vue';

const ionViewDidEnter = () => {
  console.log('Home page did enter');
};

const ionViewDidLeave = () => {
  console.log('Home page did leave');
};

const ionViewWillEnter = () => {
  console.log('Home page will enter');
};

const ionViewWillLeave = () => {
  console.log('Home page will leave');
};
</script>
```

### Composition API Hooks

These lifecycles can also be expressed using Vue 3's Composition API:

```vue
<script setup lang="ts">
import { IonPage, onIonViewWillEnter, onIonViewDidEnter, onIonViewWillLeave, onIonViewDidLeave } from '@ionic/vue';

onIonViewDidEnter(() => {
  console.log('Home page did enter');
});

onIonViewDidLeave(() => {
  console.log('Home page did leave');
});

onIonViewWillEnter(() => {
  console.log('Home page will enter');
});

onIonViewWillLeave(() => {
  console.log('Home page will leave');
});
</script>
```

:::note
Pages in your app need to be using the `IonPage` component in order for lifecycle methods and hooks to fire properly.
:::

## Ionic Framework がページのライフを処理する仕組み

Ionic Framework には `<ion-router-outlet>` と呼ばれるルータアウトレットがあります。このアウトレットは、Vue Router の `<router-view>` を拡張し、モバイルデバイスのエクスペリエンスを向上させるためのいくつかの追加機能を提供します。

アプリが `<ion-router-outlet>` でラップされている場合、Ionic Framework はナビゲーションを少し異なる扱いにします。新しいページに移動すると、Ionic Framework は古いページを既存の DOM に保持しますが、ビューからは非表示にして新しいページに移動します。これを行う理由は 2 つあります:

1. 古いページの状態を維持できます(画面上のデータ、スクロール位置など...)
2. ページはすでに存在しており、作成する必要がないため、よりスムーズにページに戻ることができます。

ページが DOM から削除されるのは、UI の戻るボタンやブラウザーの戻るボタンを押すなど、ページが "popped" された場合のみです。

この特別な処理のため、 `<keep-alive>`, `<transition>`,`<router-view>` などの特定の Vue ルータコンポーネントは、Ionic Vue アプリケーションでは使用しないでください。また、各ページのスクロール位置は自動的に保存されるため、ここでは Vue Router のスクロール動作 API は必要ありません。

Vue のすべてのライフサイクルメソッド(`mounted` や `beforeUnmount`など)も使用可能です。ただし、Ionic Vue はページのライフタイムを管理するため、特定のイベントは予期したときに起動しない場合があります。たとえば、mounted はページが最初に表示されたときに起動しますが、ページから離れると、Ionic Framework によってページが DOM 内に保持され、その後ページにアクセスしても再度 `mounted` が呼び出されることはありません。このシナリオは、Ionic Framework のライフサイクル・メソッドが存在する主な理由であり、ネイティブ・フレームワークのイベントが起動しない可能性がある場合でも、ビューの開始時と終了時にロジックを呼び出す方法を提供します。

## 各ライフサイクルメソッドのガイダンス

以下は、ライフサイクルイベントごとのユースケースに関するヒントです。

- `ionViewWillEnter` - `ionViewWillEnter` はビューにナビゲートされるたびに呼び出されるため（初期化されているかどうかに関わらず）、サービスからデータをロードする方法として適しています。
- `ionViewDidEnter` - データをロードする際に `ionViewWillEnter` を使ってパフォーマンスの問題が発生する場合は、代わりに `ionViewDidEnter` でデータ呼び出しを行うことができます。ただし、このイベントはページがユーザーに表示されるまで発火しないため、ロード中のインジケーターや [ion-skeleton-text](../api/skeleton-text) のようなスケルトンスクリーンを使用して、コンテンツが遷移完了後に不自然にフラッシュしないようにすることをおすすめします。
- `ionViewWillLeave` - データソースの購読解除などのクリーンアップに使用できます。現在のページからナビゲートした場合に `beforeUnmount` が発火しないことがあるため、表示中でない状態でアクティブにしたくない場合は、クリーンアップコードをここに置きます。
- `ionViewDidLeave` - このイベントが発火した時点で、新しいページが完全に遷移されたことが分かるため、ビューが表示されている時には通常行わないロジックをここに入れることができます。
