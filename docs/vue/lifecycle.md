---
sidebar_label: ライフサイクル
---

# Vueのライフサイクル

このガイドでは、Ionic FrameworkのライフサイクルイベントをIonic Vueアプリケーションで使用する方法について説明します。

## Ionic Frameworkのライフサイクルメソッド

Ionic Frameworkはアプリで使えるいくつかのライフサイクルメソッドを提供します:

| Event Name         | Description                                                          |
|--------------------|------------------------------------------------------------------|
| `ionViewWillEnter` | コンポーネントが表示されるアニメーションがはじまる時に発火します。 |
| `ionViewDidEnter`  | コンポーネントが表示されるアニメーションが終了した時に発火します。 |
| `ionViewWillLeave` | コンポーネントを離脱するアニメーションがはじまる時に発火します。  |
| `ionViewDidLeave`  | コンポーネントを離脱するアニメーションが終了した時に発火します。 |

これらのライフサイクルは、ルーターによって直接マッピングされたコンポーネントに対してのみ呼び出されます。つまり、`/pageOne`が`PageOneComponent`にマッピングされた場合、Ionicライフサイクルは`PageOneComponent`で呼び出されますが、`PageOneComponent`がレンダリングする子コンポーネントでは呼び出されません。

ライフサイクルは、Vueのライフサイクルメソッドと同じように、Vueコンポーネントのルートで関数として定義されます：

```tsx
import { IonPage } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Home',
  ionViewDidEnter() {
    console.log('Home page did enter');
  },
  ionViewDidLeave() {
    console.log('Home page did leave');
  },
  ionViewWillEnter() {
    console.log('Home page will enter');
  },
  ionViewWillLeave() {
    console.log('Home page will leave');
  },
  components: {
    IonPage,
  },
});
```

### Composition API Hooks

These lifecycles can also be expressed using Vue 3's Composition API:

```tsx
import { IonPage, onIonViewWillEnter, onIonViewDidEnter, onIonViewWillLeave, onIonViewDidLeave } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Home',
  components: {
    IonPage,
  },
  setup() {
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
  },
});
```

:::note
Pages in your app need to be using the `IonPage` component in order for lifecycle methods and hooks to fire properly.
:::

## Ionic Frameworkがページのライフを処理する仕組み

Ionic Frameworkには `<ion-router-outlet>` と呼ばれるルータアウトレットがあります。このアウトレットは、Vue Routerの `<router-view>` を拡張し、モバイルデバイスのエクスペリエンスを向上させるためのいくつかの追加機能を提供します。

アプリが `<ion-router-outlet>` でラップされている場合、Ionic Frameworkはナビゲーションを少し異なる扱いにします。新しいページに移動すると、Ionic Frameworkは古いページを既存のDOMに保持しますが、ビューからは非表示にして新しいページに移動します。これを行う理由は2つあります:

1. 古いページの状態を維持できます(画面上のデータ、スクロール位置など...)
2. ページはすでに存在しており、作成する必要がないため、よりスムーズにページに戻ることができます。

ページがDOMから削除されるのは、UIの戻るボタンやブラウザーの戻るボタンを押すなど、ページが "popped" された場合のみです。

この特別な処理のため、 `<keep-alive>`, `<transition>`,`<router-view>` などの特定のVueルータコンポーネントは、Ionic Vueアプリケーションでは使用しないでください。また、各ページのスクロール位置は自動的に保存されるため、ここではVue Routerのスクロール動作APIは必要ありません。

Vueのすべてのライフサイクルメソッド(`mounted` や `beforeUnmount`など)も使用可能です。ただし、Ionic Vueはページのライフタイムを管理するため、特定のイベントは予期したときに起動しない場合があります。たとえば、mountedはページが最初に表示されたときに起動しますが、ページから離れると、Ionic FrameworkによってページがDOM内に保持され、その後ページにアクセスしても再度 `mounted` が呼び出されることはありません。このシナリオは、Ionic Frameworkのライフサイクル・メソッドが存在する主な理由であり、ネイティブ・フレームワークのイベントが起動しない可能性がある場合でも、ビューの開始時と終了時にロジックを呼び出す方法を提供します。


## 各ライフサイクルメソッドのガイダンス

以下は、life cycle eventsごとのユースケースに関するヒントです。

- `ionViewWillEnter` - `ionViewWillEnter` はViewがナビゲートされる度に呼び出されるので（初期化されているかどうかにかかわらず）、Serviceからデータをロードするのに適したメソッドです。ただし、アニメーション中にデータがを取得すると、大量のDOM操作が開始される可能性があります。これにより、ぎこちないアニメーションが発生する可能性があります。
- `ionViewDidEnter` - `ionViewWillEnter` を使ってデータを取得していてパフォーマンスに問題がある時は、`ionViewDidEnter` を代わりに使うことができます。ただし、Pageがユーザーに表示されるまではこのイベントは発火しません。そのため、ロードインジケータまたは [ion-skeleton-text](../api/skeleton-text) を使ったスケルトン画面を使用することをお勧めします。これにより、遷移が完了した後にコンテンツが不自然に点滅することはありません。
- `ionViewWillLeave` - observablesのunsubscribingのように、クリーンアップで利用します。 `ngOnDestroy` はあなたが現在のページから遷移する時には発火しない可能性がありますので、画面が表示されていない時にアクティブにしたくない場合はここでクリーンアップの処理を行います。
- `ionViewDidLeave` - このイベントが発生すると、新しいページへと完全に遷移したことがわかります。そのため、ビューが表示されているときに通常は行わない可能性があるロジックはすべてここに移動できます。
