# ion-virtual-scroll

Virtual Scrollは無限スクロールするリストを仮想的に表示します。
テンプレートを作成するためのデータを含むレコードの配列を、Virtual Scrollに渡します。
レコード用に作成されたセルと呼ばれるテンプレートは、アイテム、ヘッダー、およびフッターで構成できます。
パフォーマンス上の理由から、リスト内のすべてのレコードが一度にレンダリングされるわけではありません。;
その代わりに、レコードの小さなサブセット
(ビューポートを満たすのに十分な数)がレンダリングされ、
ユーザーのスクロールに再利用されます。

### 基本
レコードの配列は、 `ion-virtual-scroll` 要素の `items` プロパティに渡されます。
`items` プロパティに指定するデータは配列でなければなりません。
`ion-virtual-scroll` には、`*virtualItem` プロパティを持つアイテムテンプレートが必要です。
`*virtualItem`プロパティは任意の要素に追加することができます。

```html
<ion-virtual-scroll [items]="items">
  <ion-item *virtualItem="let item">
    {{ item }}
  </ion-item>
</ion-virtual-scroll>
```

### HeadersとFootersのSectionについて

HeadersとFootersのSectionはオプションです。
開発者が定義した関数から動的に作成できます。
たとえば、連絡先についての大量のリストでは、通常、アルファベットの文字ごとに区切り線があります。
開発者は、各レコードで呼び出される独自のカスタム関数を提供します。
カスタム関数のロジックは、セクション・テンプレートを作成するかどうか、
およびテンプレートに提供するデータを決定する必要があります。
テンプレートを作成しない場合、カスタム関数は `null` を返します。

```html
<ion-virtual-scroll [items]="items" [headerFn]="myHeaderFn">
  <ion-item-divider *virtualHeader="let header">
    {{ header }}
  </ion-item-divider>
  <ion-item *virtualItem="let item">
    Item: {{ item }}
  </ion-item>
</ion-virtual-scroll>
```

各レコードで呼び出されるカスタム関数の例を次に示します。
個々のレコード、レコードのインデックス番号、およびレコードの配列全体を渡します。
この例では、20レコードごとにヘッダーが挿入されます。
したがって、19番目と20番目のレコードの間、39番目と40番目のレコードの間、
というように、`<ion-item-divider>` が作成され、
テンプレートのデータは
関数から返されたデータから取得されます。

```ts
myHeaderFn(record, recordIndex, records) {
  if (recordIndex % 20 === 0) {
    return 'Header ' + recordIndex;
  }
  return null;
}
```

### Widths と Heights の概算値

virtual scrollのアイテムのHeightがデフォルトサイズである40pxに近くない場合は、
approxItemHeightでHeightの値を指定することが非常に重要です。
ピクセル単位の正確なサイズは必要ありませんが、
見積もりなしではvirtual scrollは正しくレンダリングされません。

各テンプレートのおおよその幅と高さを使用して、
描画するセルの数を決定したり、
スクロール可能領域の高さを計算したりします。
各セルの実際の描画サイズはアプリケーションのCSSから得られるのに対し、
この近似値は初期描画の計算にのみ使用されることに注意してください。

また、Ionicのデフォルトのアイテムのサイズは、
プラットフォームによって高さが若干異なりますが、これは問題ありません。

### Virtual Scrollでの画像の利用

HTTPリクエスト、画像のデコード、および画像のレンダリングによって、スクロール中にjankが発生することがあります。
Ionicは画像をより良く制御するために、HTTPリクエストと画像レンダリングを管理する
`<ion-img>`を提供している。アイテムをすばやくスクロールすると、
`<ion-img>`はいつ要求を行わないか、いつ画像をレンダリングしないかを認識し、
スクロール後に表示可能な画像のみをロードします。
詳細については、[Read more about `ion-img`.](../img) を参照してください。

また、アプリ開発者にとって重要なのは、
画像サイズが固定されていることを確認することであり、
画像が完全にロードされた後、サイズが変更されたり、他の要素サイズに影響を与えたりすることはありません。
簡単に言えば、レンダリングバグが発生しないようにするには、
仮想アイテム内の要素が動的に変化しないことが重要です。

virtual scrollingでは、`<img>` のNativeな動作は望ましくありません。
DOMに要素を追加すると、`<img>` 要素は直ちに画像ファイルに対してHTTPリクエストを作成するため、
ネイティブの `<img>` 要素よりも`<ion-img>` コンポーネントを使用することをお薦めします。
さらに、`<img>` は、ユーザーがスクロールしている間であればいつでもレンダリングされます。
ただし、`<ion-img>` は、含有する`ion-content`によって制御され、
すばやくスクロールしても画像をレンダリングしません。

```html
<ion-virtual-scroll [items]="items">
  <ion-item *virtualItem="let item">
    <ion-avatar item-start>
      <ion-img [src]="item.avatarUrl"></ion-img>
    </ion-avatar>
    {{ item.firstName }} {{ item.lastName }}
  </ion-item>
</ion-virtual-scroll>
```

### カスタムコンポーネント

カスタムコンポーネントを仮想スクロール内で使用する場合は、
コンポーネントが正しく描画されるように、
従来の `<div>` でラップすることをお勧めします。
各カスタムコンポーネントの実装と内部はまったく異なる可能性があるため、
寸法が正しく計測されていることを確認するには、`<div>` でラップするのが安全な方法です。

```html
<ion-virtual-scroll [items]="items">
  <div *virtualItem="let item">
    <my-custom-item [item]="item">
      {{ item }}
    </my-custom-item>
  </div>
</ion-virtual-scroll>
```

## Virtual ScrollのパフォーマンスTips

#### iOS Cordova WKWebView

Cordovaを使ってiOSにデプロイする場合は、
[WKWebView plugin](https://blog.ionicframework.com/cordova-ios-performance-improvements-drop-in-speed-with-wkwebview/)
プラグインを使ってiOSの高性能なウェブビューを利用することを強くお勧めします。
さらに、WKWebViewは、以前のUIWebViewよりも
スクロールの効率が優れています。

#### 要素のサイズと位置を固定する

仮想スクロールですべてのアイテムのサイズと位置を効率的に変更するには、
各仮想アイテム内のすべての要素がそのサイズや位置を
動的に変更しないことが非常に重要です。
サイズと位置が変わらないようにする最善の方法は、
各仮想アイテムがCSSを使ってそのサイズにロックされていることです。

#### 画像に `ion-img` を使う

仮想スクロールにイメージを含める場合は、標準の<img>HTML要素ではなく、
必ず[`ion-img`](../img/Img/)要素を使用してください。
`ion-img`では、画像は遅延ロードされるため、表示可能な画像のみがレンダリングされ、
HTTPリクエストはスクロール中に効率的に制御されます。

#### 概算の幅と高さを設定する

前述のように、すべての要素の寸法がロックされます。
ただし、virtual scrollは、レンダリングされるまで寸法を認識しません。
最初のレンダリングでは、
virtual scrollで構築する項目数を設定する必要があります。
`approxItemHeight` などの"approx"プロパティを使用すると、
virtual scrollにおおよそのサイズを指定できるため、
virtual scrollで作成する項目数を決定できます。

#### データセットの変更にはvirtualTrackByを使用する

データは変更されていなくても、イテレータ内の要素のIDは変更されます。
たとえば、RPCからサーバーに対してイテレーターが生成され、
そのRPCが再実行された場合などです。
「データ」が変更されていなくても、2回目の応答では異なるIDを持つオブジェクトが生成され、
IonicはDOM全体を分解して再構築します。
これはハイコストな操作であり、可能であれば回避する必要があります。

#### 効率的なヘッダーおよびフッター機能
各仮想アイテムは非常に効率的でなければなりませんが、実際にそのパフォーマンスを低下させる1つの方法は、
セクション・ヘッダーおよびフッター関数内でDOM操作を実行することです。
これらの関数はデータセット内のすべてのレコードに対して呼び出されるため、
パフォーマンスコストが高いことを確認してください。

