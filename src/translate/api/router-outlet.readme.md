# ion-router-outlet

Router outlet is a component used in routing within an Angular or Vue app. It behaves in a similar way to Angular's built-in router outlet component and Vue's router view component, but contains the logic for providing a stacked navigation, and animating views in and out.

> Note: this component should only be used with Angular and Vue projects. For vanilla or Stencil JavaScript projects, use [`ion-router`](../router) and [`ion-route`](../route).

Although router outlet has methods for navigating around, it's recommended to use the navigation methods in your framework's router.



## ライフサイクルHook

Router OutletでRoutesがレンダリングされた時、アニメーションに関連付けられた特定のIonicイベントにアクセスできます。


| Event Name         | Description                                                          |
|--------------------|------------------------------------------------------------------|
| `ionViewWillEnter` | コンポーネントが表示されるアニメーションがはじまる時に発火します。 |
| `ionViewDidEnter`  | コンポーネントが表示されるアニメーションが終了した時に発火します。 |
| `ionViewWillLeave` | コンポーネントを離脱するアニメーションがはじまる時に発火します。  |
| `ionViewDidLeave`  | コンポーネントを離脱するアニメーションが終了した時に発火します。 |


これらのイベントはIonicのアニメーションシステムと連携し、コンポーネントがアニメーションを完成させたときにアプリの挙動を調整するのに使用できる。これらのイベントはフレームワーク独自のイベントシステムに代わるものではなく、追加されたものです。

Router Guardsを扱うために、以前の`ionViewCanEnter` と `ionViewCanLeave`は、フレームワーク特有の同等のものに置き換えられました。Angularには[Router Guards](https://angular.jp/guide/router#milestone-5-route-guards)があります。

