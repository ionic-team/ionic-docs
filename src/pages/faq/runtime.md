---
previousText: 'Build Errors'
previousUrl: '/docs/faq/build'
nextText: 'Native Errors'
nextUrl: '/docs/faq/native'
---

# ランタイムエラー

## 真っ白なアプリケーション

> 私のアプリケーションにはエラーはありません。なぜ真っ白な画面が表示されるのでしょうか？

この事象が発生しうる理由がいくつかあります。もしあなたがフォーラム上で解決策を見つけられなかった場合、これらを確認して下さい:

- ルート `@Component` に `template` または `templateUrl` がある。
- ルート `@Component` テンプレートには `root` プロパティを持つ `<ion-nav>` がある:

  ```html
  <ion-nav [root]="rootPage"></ion-nav>
  ```

## ディレクティブが動作しない

> なぜ私のカスタムコンポーネント/ディレクティブは動作しないのでしょうか？

あなたが確認できるものがいくつか存在します。

- あなたが使いたい `@Component` の `directives` 配列の中に含める。(ionic-angular のバージョンが RC0 の場合のみ)
- あなたのセレクタに何らかのスペルミスがあるか。
- あなたはセレクタを属性、要素、またはクラスとして正しく利用しているか。
- あなたのセレクタが[正しい文法](http://learnangular2.com/components/)であるか:
  - 属性セレクタの場合は `[attr]`
  - 要素セレクタの場合は `element`
  - クラスセレクタの場合は `.class`

以下に、属性セレクタの例を挙げます:

```typescript
@Directive({
  selector: '[my-dir]' // <-- [my-dir] because it is an attribute
})                     // Could be my-dir, [my-dir], .my-dir
class MyDir {
  constructor() {
    console.log('I'm alive!');
  }
}

@Component({
  // We add my-dir as an attribute to match the directive's selector
  template: `<div my-dir>Hello World</div>`,

  // Alternatively, if you were attaching the directive to an element it would be:
  // template: `<my-dir>Hello World</my-dir>`
  // and if you were attaching by class the template would be:
  // template: `<div class="my-dir">Hello World</div>`

  directives: [MyDir] // <-- Don't forget me! (only if your ionic-angular version is below RC0)
})
class MyPage { }
```

## クリックの遅延

> なぜ私のクリックイベントは遅延するのでしょうか？

一般的に、我々は標準的なクリックイベントを要素に追加する場合は `(click)` のみを勧めています。
これには `<button>` や `<a>` 要素も含まります。これにより、
画面を読むときに各要素がクリック可能であることを伝えることができるため、アクセシビリティを
向上します。

しかしながら、おそらくあなたは通常はなクリックできない要素に `(click)` イベントを要素に追加することを
求められるかもしれません。もしあなたがこれを実行すると、要素をクリックしてイベントが発火するまで
`300ms` の遅延が発生するかもしれません。この遅延を改善するには、あなたは
要素に `tappable` 属性を追加することができます。

```html
 <div tappable (click)="doClick()">I am clickable!</div>
```

## Cordova プラグインがブラウザ上で動作しない

あなたの開発中のある時点で、Cordova プラグインを呼び出そうとしますが、
警告:

```shell
[Warning] Native: tried calling StatusBar.styleDefault, but Cordova is not
available. Make sure to include cordova.js or run in a device/simulator
(app.bundle.js, line 83388)
```

これは、あなたがネイティブプラグインを呼び出そうとしますが、Cordova プラグインが利用できないときに発生します。
ありがたいことに、Ionic Native はエラーの代わりに良い警告を表示してくれます。

他のケースでは、プラグインが Ionic Native を介して利用されない場合、プラグインは
より曖昧な警告を表示することができます。

```shell
EXCEPTION: Error: Uncaught (in promise): TypeError: undefined is not an object
(evaluating 'navigator.camera.getPicture')
```

もしこれが発生した場合は、そのプラグインを実機かシミュレーターでテストしてみてください。

## provider の複数のインスタンス

あなたは provider をすべてのコンポーネントで利用可能にしたいので、すべてのコンポーネントに provider を注入した場合、
provider の複数のインスタンスが生成されます。You should
inject the provider once in the parent component if you want it to be available
to the child components.

```typescript
let id = 0;
export class MyService {
  id: number;

  constructor() {
    this.id = id++;
  }
}

@Component({
  selector: 'my-component',
  template: 'Hello World',
  providers: [MyService] // <-- Creates a new instance of MyService :(
})                       // Unnecessary because MyService is in App's providers
class MyComp {
  // id is 1, s is a different MyService instance than MyApp
  constructor(s: MyService) {
    console.log('MyService id is: ' + s.id);
  }
}

@Component({
  template: '<my-component></my-component>',
  providers: [MyService], // MyService only needs to be here
  directives: [MyComp]
})
class MyApp {
  // id is 0
  constructor(s: MyService) {
    console.log('MyService id is: ' + s.id);
  }
}
```
