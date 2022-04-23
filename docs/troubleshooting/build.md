---
disableHtmlPreviews: true
title: Build Errors
---

<head>
  <title>Build Errors: Learn to Solve Common Mistakes | Ionic Framework</title>
  <meta
    name="description"
    content="Solve common mistakes that can occur when building apps. View our list of potential build errors then check out our Ionic Documentation for any other questions."
  />
</head>

## 一般的な間違い

### デコレーターにて丸括弧を忘れる

デコレーターはアノテーションの後に丸括弧 `()` を持つべきです。いくつか例を示します: `@Injectable()`, `@Optional()`, `@Input()`, など。

```tsx
@Directive({
  selector: 'my-dir',
})
class MyDirective {
  // 誤り、@Optional() とすべき
  // @Optional はここでは何もしないため、MyDirective は parent が undefined の場合にエラーになる
  constructor( @Optional parent: ParentComponent) { }
}
```

## 一般的なエラー

### すべてのパラメータを解決できない

```shell
Cannot resolve all parameters for 'YourClass'(?). Make sure that all the parameters are decorated with Inject or have valid type annotations and that 'YourClass' is decorated with Injectable.
```

この例外は Angular が `YourClass` のコンストラクタの 1つ以上のパラメータについて困惑していることを意味します。[依存性を注入](https://angular.jp/docs/ts/latest/guide/dependency-injection.html) するため、Angular は 注入するパラメータの型を知る必要があります。パラメータのクラスを指定することで Angular にこのこと（タイプ）を知らせます。次の点を確認してください:

- パラメータのクラスをインポートします。
- パラメータに適切な注釈をつけるか、パラメータの型を指定します。

```tsx
import { MyService } from 'my-service'; // 私をインポートすることを忘れないで！

@Component({
  template: `Hello World`,
})
export class MyClass {
  // service は MyService のタイプです
  constructor(service: MyService) {

  }
}
```

コード内の循環参照がこのエラーの原因になることがあります。循環参照は、2つのオブジェクトが相互に依存していることを意味するため、両方を相互の前に宣言する方法はありません。この問題を回避するには、Angular に組み込まれている[`forwardRef`](https://angular.jp/docs/ts/latest/api/core/index/forwardRef-function.html) 関数を使用します。
```ts
import { forwardRef } from '@angular/core';

@Component({
  selector: 'my-button',
  template: `<div>
    <icon></icon>
    <input type="button" />
  </div>`,
  directives: [forwardRef(() => MyIcon)], // MyIcon はまだ定義されていません
}) // forwardRef は MyIcon が必要なときに MyIcon として解決します
class MyButton {
  constructor() {}
}

@Directive({
  selector: 'icon',
})
class MyIcon {
  constructor(containerButton: MyButton) {} // MyButton が定義されました
}
```

### No provider for ParamType

```shell
No provider for ParamType! (MyClass -> ParamType)
```

これは、Angular は注入されるべきパラメータの型を知っているが、注入方法を知らないことを意味する。

パラメータが Service の場合は、指定したクラスがアプリケーションで使用可能な providers のリストに追加されていることを確認します:

```tsx
import { MyService } from 'my-service';

@Component({
  templateUrl: 'app/app.html',
  providers: [MyService], // 私を忘れないで！
})
class MyApp {}
```

パラメータが別のコンポーネントまたはDirective（たとえば、親コンポーネント）である場合、パラメータを providers のリストに追加するとエラーはなくなりますが、これは前述の [provider の複数のインスタンス](/docs/faq/runtime#provider-) と同じ効果を持ちます。ここでは、コンポーネントクラスの新しいインスタンスを作成しますが、必要なコンポーネントインスタンスへの参照は取得しません。かわりに、注入されるであろうDirectiveまたはコンポーネントがコンポーネントで使用可能であることを確認します（たとえば、親であることを期待している場合は、実際に親であること）。これはおそらく、例を使用すると最も簡単に理解できます:

```tsx
@Component({
  selector: 'my-comp',
  template: '<p my-dir></p>',
  directives: [forwardRef(() => MyDir)],
})
class MyComp {
  constructor() {
    this.name = 'My Component';
  }
}

@Directive({
  selector: '[my-dir]',
})
class MyDir {
  constructor(c: MyComp) {
    // <-- This is the line of interest

    // コンポーネントツリーにMyCompがなく、注入するMyCompがないため、
    // Directiveが通常のdivにある場合のエラーのdivにある場合のエラー
    console.log("Host component's name: " + c.name);
  }
}

@Component({
  template:
    '<my-comp></my-comp>' + // MyDir コンストラクタ内ではエラーなし、MyComp は MyDir の親
    '<my-comp my-dir></my-comp>' + // MyDir コンストラクタ内ではエラーなし、MyComp は MyDir のホスト
    '<div my-dir></div>', // MyDir コンストラクタ内でエラー
  directives: [MyComp, MyDir],
})
class MyApp {}
```

以下に、使用可能な注入するものの図を示します:

```
                 +-------+
                 |  App  |
                 +---+---+
                     |
       +-------------+------------+
       |                          |
+------+------+          +--------+--------+
| Div (MyDir) |          | MyComp (MyDir)  |  <- MyComp は注入可能
+-------------+          +--------+--------+
       ^                          |
MyComp の注入なし            +------+------+
                           | P (MyDir)   | <- MyComp は親から注入可能
                           +-------------+
```

前の例を拡張するために、コンポーネント/Directiveの参照を常に期待しているわけではない場合には、Angular の `@Option` アノテーションを使うことができます:

```tsx
@Directive({
  selector: '[my-dir]',
})
class MyDir {
  constructor(@Optional() c: MyComp) {
    // No longer errors if c is undefined
    if (c) {
      console.log(`Host component's name: ${c.name}`);
    }
  }
}
```

### 既知のプロパティではないため、`propertyName` にバインドできない

```shell
Can't bind to 'propertyName' since it isn't a known property of the 'elementName' element and there are no matching directives with a corresponding property
```

これは、そのプロパティを持たない要素にプロパティをバインドしようとしたときに発生します。要素がコンポーネントの場合、または要素に1つ以上のDirectiveがある場合、コンポーネントもDirectiveもそのプロパティを持ちません。

```html
<!-- div には 'foo' というプロパティがない -->
<div [foo]="bar"></div>
```

### ControlContainer の Provider がない

```shell
No provider for ControlContainer! (NgControlName -> ControlContainer)
```

このエラーは、上記の `No provider` エラーのより具体的なバージョンです。これは、親の [NgForm](https://angular.jp/docs/ts/latest/api/forms/index/NgForm-directive.html) または NgFormModel を指定せずに NgControlName などのフォームコントロールを使用した場合に発生します。ほとんどの場合、これはフォームコントロールが実際のフォーム要素内にあることを確認することで解決できます。NgForm はセレクタとして `form` を使用するので、これは新しいNgFormをインスタンス化します:

```tsx
@Component({
  template:
  '<form>' +
  '<input ngControl="login">' +
  '</form>'
})
```

### コンポーネントファクトリがない

```shell
No component factory found for <component name>
```

このエラーは、ngModule にインポートおよび追加されていない Component、Provider Pipe、Directiveを使用しようとしたときに発生します。新しい Component、Provider、Pipe、Directiveをアプリケーションに追加する場合は必ず、Angularがそれを使えるようにするために、`src/app/app.module.ts` ファイル内の `ngModule` に追加する必要があります。このエラーを修正するには、問題の Component、Provider、Pipe、Directiveを app.module ファイルにインポートし、Provider の場合は `providers` 配列に追加、Component、Pipe、Directiveの場合は宣言配列と `entryComponents` 配列の両方に追加します。
