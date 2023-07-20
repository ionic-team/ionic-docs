---
title: ランタイムの問題
---

<head>
  <title>Solve App Runtime Issues: Blank App, Plugins Not Working, etc.</title>
  <meta
    name="description"
    content="There are many causes of app runtime issues. Read how to solve issues such as a blank app, plugins not working, Angular change detection, and more with Ionic."
  />
</head>

## 真っ白なアプリケーション

:::note
私のアプリケーションにはエラーはありません。なぜ真っ白な画面が表示されるのでしょうか？
:::

この事象が発生しうる理由がいくつかあります。もしあなたがフォーラム上で解決策を見つけられなかった場合、これらを確認して下さい:

- ポリフィルには古い android のブラウザ/バージョンは含まれない

`@angular/cli@7.3` 以上のプロジェクトの場合、ポリフィルは自動的に含まれます。その前に作成されたプロジェクトでは、ポリフィルを手動で有効にする必要があります。

`src/polyfills.ts` にて、Android 4.4をサポートするために ES6ポリフィルをすべて有効にする必要があります。

あるいは、プロジェクトを更新して、`@angular/cli` パッケージと `@angular-devkit` パッケージの最新リリースを使用し、`angular.json` のビルドオプションオブジェクトに `es5BrowserSupport` オプションを含めることもできます:

```diff
        "input": "src/global.scss"
      }
    ],
-   "scripts": []
+   "scripts": [],
+   "es5BrowserSupport": true
  },
  "configurations": {
    "production": {
```

これにより、古いブラウザに必要なポリフィルが自動的に追加されます。

## ディレクティブが動作しない

:::note
なぜ私のカスタムコンポーネント/ディレクティブは動作しないのでしょうか？
:::

あなたが確認できるものがいくつか存在します。

- セレクタにスペルミスがない
- 属性、要素、クラスとして、セレクタを正確に使用している
- セレクタの構文が適切:
  - 属性セレクタの場合は `[attr]`
  - 要素セレクタの場合は `element`
  - クラスセレクタの場合は `.class`

以下に、属性セレクタの例を挙げます:

```tsx
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

:::note
なぜ私のクリックイベントは遅延するのでしょうか？
:::

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

## Angular Change Detection

:::note
Why does Angular change detection run very frequently when my components are initializing?
:::

Angular uses a library called [zone.js](https://github.com/angular/angular/tree/master/packages/zone.js/)
which helps it determine when to run change detection.

As of zone.js `0.8.27`, certain APIs for Web Components also cause change
detection to run. This can have the undesirable side effect of your app
slowing down when a large number of components are initializing.

To prevent this from happening, the zone.js flag that manages this portion of
change detection can be disabled. In the `src` directory of your application,
create a file called `zone-flags.ts`. Place the following code into the file:

```tsx
(window as any).__Zone_disable_customElements = true;
```

The `zone-flags.ts` file then needs to be imported into your application's
`polyfills.ts` file. Be sure to import it _before_ `zone.js` is imported:

```tsx
...

import './zone-flags.ts';
import 'zone.js/dist/zone'; // Included with Angular CLI

...
```

This change will only affect applications that depend on zone.js `0.8.27` or
newer. Older versions will not be affected by this change.

:::note
This flag is automatically included when creating an Ionic app via
:::
the Ionic CLI.

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
provider の複数のインスタンスが生成されます。
子コンポーネントで使用できるようにする場合は、親コンポーネントに一度だけ Provider を
注入する必要があります。

```tsx
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
  providers: [MyService], // <-- MyService の新しいインスタンスの生成 :(
}) // 不要。なぜなら MyService は App の providers の中だらか
class MyComp {
  // id は 1, s は MyApp とは異なる MyService インスタンス
  constructor(s: MyService) {
    console.log('MyService id is: ' + s.id);
  }
}

@Component({
  template: '<my-component></my-component>',
  providers: [MyService], // MyService はここのみ必要
  directives: [MyComp],
})
class MyApp {
  // id は 0
  constructor(s: MyService) {
    console.log('MyService id is: ' + s.id);
  }
}
```
