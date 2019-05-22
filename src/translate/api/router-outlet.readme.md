# ion-router-outlet

Router OutletはAngularアプリ内のルーティングに使われるコンポーネントです。
Router OutletはAngularに組み込まれているRouter Outletコンポーネントと同じように動作しますが、スタックナビゲーションを提供したり、ビューをアニメーションしたりするロジックが含まれています。


> Note: これはAngularプロジェクト専用です。JavaScript標準の場合は、代わりに `ion-router` と `ion-route` を使用します。

Router Outletにはナビゲートする方法がありますが、Angularルータのナビゲーション方法を使用することをお勧めします。


### ライフサイクルHook

Router OutletでRoutesがレンダリングされた時、アニメーションに関連付けられた特定のIonicイベントにアクセスできます。


| Event Name         | Description                                                          |
|--------------------|------------------------------------------------------------------|
| `ionViewWillEnter` | コンポーネントが表示されるアニメーションがはじまる時に発火します。 |
| `ionViewDidEnter`  | コンポーネントが表示されるアニメーションが終了した時に発火します。 |
| `ionViewWillLeave` | コンポーネントを離脱するアニメーションがはじまる時に発火します。  |
| `ionViewDidLeave`  | コンポーネントを離脱するアニメーションが終了した時に発火します。 |


これらのイベントはIonicのアニメーションシステムと連携し、コンポーネントがアニメーションを完成させたときにアプリの挙動を調整するのに使用できる。これらのイベントはAngular独自のイベントシステムに代わるものではなく、追加されたものです。

Router Guardsを扱うために、以前の`ionViewCanEnter` と `ionViewCanLeave`は、フレームワーク特有の同等のものに置き換えられました。Angularには[Router Guards](https://angular.io/guide/router#milestone-5-route-guards)があります。

