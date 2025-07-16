---
title: Cross Platform
---

# クロスプラットフォーム

Ionic は、どんなプラットフォーム向けに開発を行う場合でも簡単に開発できるように構築されています。まさにクロスプラットフォームに対応したフレームワークです。つまり、Android、iOS、Electron、Progressive Web App（PWA）として実行することができ、すべてシングルコードで実装可能です。それぞれのプラットフォームにアプリを最適化するためにいくつかの気をつける点があります。

## ハードウェア API

ネイティブアプリには、カメラを起動したり、位置情報を取得したりといったデバイス内の情報を取得するための API を呼び出すことがよくあります。これらの API 呼び出し処理はウェブブラウザ環境では動きません。なぜならネイティブブリッジが存在しないからです。Ionic にはこの問題に対応するためのいくつかの方法があります。

### Ionic Native

[Ionic Native](../native.md) はネイティブ環境内かどうか検出するための独自の内部ロジックを持っています。それにより、ネイティブ環境ではなかったり Cordova プラグインが存在しない場合は、ランタイムエラーを発生させるかわりに警告メッセージを表示させます。ネイティブ機能が存在しなくても、 アプリがクラッシュすることなく動き続けるということです。

### プラットフォーム検知

Ionic アプリ内では、ネイティブ API を呼び出す際はいつでも、現在の環境がネイティブ環境かどうかを確認することが推奨されます。例:

```tsx
this.platform.ready().then(() => {
  // 'hybrid' detects both Cordova and Capacitor
  if (this.platform.is('hybrid')) {
    // make your native API calls
  } else {
    // fallback to browser APIs
  }
});
```

このコードは、ネイティブ API が使える  かどうか不確かな環境向けに開発していたとしても非常に役に立ちます。

### ブラウザのフォールバック

多くのネイティブ API（例えば File API）はブラウザで利用できません。API は常に改良されネイティブに追いついているので、それらを調査することをお勧めします。これらの 2 つの点を考慮すると、アプリが実行されているプラ ​​ ットフォームに適応するような素晴らしいエクスペリエンスを作成するのはかなり簡単です。

## Responsive UI

さまざまなデバイスで使用される可能性のあるアプリのデプロイを計画している場合、アプリが大きな画面サイズでスムーズに動作することを確認することが重要です。

### レイアウト

多くの人がアプリのレイアウトに気付くことはめったにありませんが、ユーザビリティやユーザエクスペリエンスに大きな影響をあたえる可能性があります。下記の一般的な UI パターンを考えてください:

```html
<ion-content>
  <ion-item>
    <ion-label>Item 1</ion-label>
  </ion-item>
  <ion-item>
    <ion-label>Item 2</ion-label>
  </ion-item>
  <ion-item>
    <ion-label>Item 3</ion-label>
  </ion-item>
  <ion-item>
    <ion-label>Item 4</ion-label>
  </ion-item>
  <ion-item>
    <ion-label>Item 5</ion-label>
  </ion-item>
</ion-content>
```

この場合、5 つのアイテムがそれぞれ 100％の幅で表示されます。これは携帯電話ではきれいに見えるかもしれませんが、大きな画面で見ると話は別です。画面幅が広いため、アイテムが画面いっぱいに引き伸ばされ、画面スペースが使われないままになってしまうのです。

<img src={require('@site/static/img/building/cross-platform-items.png').default} />

To improve this experience, we can wrap the items in a [Grid](../api/grid.md) component. The view can be easily rewritten into something more usable on larger screens:

```html
<ion-grid>
  <ion-row>
    <ion-col>
      <ion-item>
        <ion-label>Item 1</ion-label>
      </ion-item>
    </ion-col>
    <ion-col>
      <ion-item>
        <ion-label>Item 2</ion-label>
      </ion-item>
    </ion-col>
    <ion-col>
      <ion-item>
        <ion-label>Item 3</ion-label>
      </ion-item>
    </ion-col>
    <ion-col>
      <ion-item>
        <ion-label>Item 4</ion-label>
      </ion-item>
    </ion-col>
    <ion-col>
      <ion-item>
        <ion-label>Item 5</ion-label>
      </ion-item>
    </ion-col>
  </ion-row>
</ion-grid>
```

全体を `ion-grid` 要素で囲むことで、Ionic のグリッドシステムがこのレイアウトに適用されます。それぞれの項目を一つの列で囲むことで、各項目をグリッド内で同じ幅に保ち、同じ行内に表示させます。

<img src={require('@site/static/img/building/cross-platform-grid.png').default} />

`<ion-grid>` 要素に `fixed` 属性を追加することでより良くすることができます。これにより、グリッドは画面幅に基づいて固定幅を持つようになります。どんなに大きな画面でもグリッド幅が不自然に大きくなることはありません。

<img src={require('@site/static/img/building/cross-platform-grid-fixed.png').default} />

`ion-col` プロパティを追加することで列の幅をよりカスタマイズすることができます。

```html
<ion-grid fixed>
  <ion-row>
    <ion-col size="12" size-sm="9" size-md="6" size-lg="4" size-xl="3">
      <ion-item>
        <ion-label>Item 1</ion-label>
      </ion-item>
    </ion-col>
    <ion-col size="12" size-sm="9" size-md="6" size-lg="4" size-xl="3">
      <ion-item>
        <ion-label>Item 2</ion-label>
      </ion-item>
    </ion-col>
    <ion-col size="12" size-sm="9" size-md="6" size-lg="4" size-xl="3">
      <ion-item>
        <ion-label>Item 3</ion-label>
      </ion-item>
    </ion-col>
    <ion-col size="12" size-sm="9" size-md="6" size-lg="4" size-xl="3">
      <ion-item>
        <ion-label>Item 4</ion-label>
      </ion-item>
    </ion-col>
    <ion-col size="12" size-sm="9" size-md="6" size-lg="4" size-xl="3">
      <ion-item>
        <ion-label>Item 5</ion-label>
      </ion-item>
    </ion-col>
  </ion-row>
</ion-grid>
```

上の例ではたくさんのコードが追加されていますが、キーポイントは下記になります:

- `ion-col`は`size`属性からその幅の値を取得します。`size`の値は使用可能な列の合計数になり、デフォルト値は 12 です。

- `size`属性は`size-{breakpoint}`の形式で各画面幅に応じたブレークポイントを持つこともできます。

グリッドのカスタマイズについてより詳細な情報は[Grid]((../api/grid.md)をご覧ください。

## ストレージ

ほとんどのアプリは何らかの種類のデータをローカルに保存する必要があります。 XHR リクエストから JSON を保存する場合でも、認証トークンを保存する場合でも、さまざまなストレージの選択肢があります。さらに、アプリがネイティブ環境で実行されている場合には、SQLite データベースが利用され、そこにデータを格納することが可能です。これらのさまざまなストレージメカニズムにはそれぞれ独自の長所と短所がありますが、Ionic 開発者はそれを心配する必要はありません。

### Ionic Storage

この場合、<a href="https://github.com/ionic-team/ionic-storage" target="_blank">Ionic のストレージライブラリ</a>は複数の環境において最適な選択肢です。Ionic のストレージクラスは、十分にテストされた LocalForage ライブラリ上に構築され、適応性の高いストレージメカニズムを提供します。

現在、ネイティブ向けには SQLite を通して実行され、他にも IndexedDB（使用可能であれば）、WebSql、ローカルストレージなどが内部的に使用されます。これらのすべてに対応し、安定した API を使ってデータの読み書きが可能です。

```tsx
class MyClass {
  constructor(public storage: Storage) {}

  async setData(key, value) {
    const res = await this.storage.set(key, value);
    console.log(res);
  }

  async getData(key) {
    const keyVal = await this.storage.get(key);
    console.log('Key is', keyVal);
  }
}
```

PouchDB といった他のストレージを選択することも可能です。
