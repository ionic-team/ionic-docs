---
title: Security
---

<head>
  <title>Angular、React、Vueアプリのセキュリティ - Ionic Framework</title>
  <meta
    name="description"
    content="ユーザー入力のサニタイズ、組み込みサニタイザーからの除外など、Ionicのセキュリティ情報を確認します。Angular、React、Vueを使用したアプリのセキュリティについて学びます。"
  />
</head>

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## ユーザー入力のサニタイズ

`ion-alert`などのコンポーネントでは、開発者はカスタムまたはユーザー提供のコンテンツを許可できます。このコンテンツはプレーンテキストまたは HTML であり、信頼できないものとして扱う必要があります。信頼できない入力と同様に、それを使用する前にサニタイズすることが重要です。特に、サニタイズせずに`innerHTML`のようなものを使用すると、悪意のある行為者が悪意のあるコンテンツを入力し、[クロスサイトスクリプティング攻撃（XSS）](https://en.wikipedia.org/wiki/Cross-site_scripting)を実行する攻撃ベクトルを提供する可能性があります。

Ionic には、提供するコンポーネント用の基本的なサニタイズ実装が組み込まれています。ただし、これは包括的なソリューションではありません。渡されるすべてのデータがサニタイズされていることを確認するのは開発者の責任です。異なるフレームワークには、ユーザー入力をサニタイズするための異なるソリューションがあるため、開発者は特定のフレームワークが提供する機能に精通する必要があります。

フレームワークを使用していない開発者、またはフレームワークが必要なサニタイズメソッドを提供していない開発者には、[sanitize-html](https://www.npmjs.com/package/sanitize-html)の使用を推奨します。このパッケージは、開発者がアプリケーションで許可する正確なタグと属性を指定できるシンプルな HTML サニタイザーを提供します。

### Angular

Angular には`DomSanitizer`クラスが組み込まれています。これは、値が DOM で安全に使用できることを保証することで、XSS の問題を防ぐのに役立ちます。デフォルトでは、Angular は安全でないと判断した値をマークします。たとえば、以下のリンクは、JavaScript を実行しようとするため、Angular によって安全でないとマークされます。

```tsx
public myUrl: string = 'javascript:alert("oh no!")';

...

<a [href]="myUrl">Click Me!</a>
```

Angular が提供する組み込みの保護機能の詳細については、[Angular Security Guide](https://angular.io/guide/security)を参照してください。

### React

React DOM は、JSX に埋め込まれた値を文字列に変換してからレンダリングする前にエスケープします。たとえば、以下の例では、`name`がレンダリングされる前に文字列に変換されるため、安全です：

```jsx
const name = values.name;
const element = <h1>Hello, {name}!</h1>;
```

ただし、これは誰かがアンカー要素の`href`属性などの場所に JavaScript を注入することを防ぐものではありません。以下は安全ではなく、XSS 攻撃が発生する可能性があります：

```jsx
const userInput = 'javascript:alert("Oh no!")';
const element = <a href={userInput}>Click Me!</a>;
```

開発者がより包括的なサニタイズを実現する必要がある場合は、[sanitize-html](https://www.npmjs.com/package/sanitize-html)パッケージを使用できます。

### Vue

Vue は組み込みのサニタイズメソッドを提供していません。開発者は[sanitize-html](https://www.npmjs.com/package/sanitize-html)などのパッケージを使用することを推奨します。

`v-html`などのディレクティブにバインドする際のセキュリティ推奨事項の詳細については、[Vue Syntax Guide](https://vuejs.org/v2/guide/syntax.html#Raw-HTML)を参照してください。

## `innerHTML`を介したカスタム HTML 解析の有効化

`ion-alert`、`ion-infinite-scroll-content`、`ion-loading`、`ion-refresher-content`、`ion-toast`は、特定のプロパティに対して文字列としてカスタム HTML を受け入れることができます。これらの文字列は`innerHTML`を使用して DOM に追加され、開発者が適切にサニタイズする必要があります。この動作はデフォルトで無効になっているため、影響を受けるコンポーネントに渡される値は常にプレーンテキストとして解釈されます。開発者は、[IonicConfig](../developing/config#ionicconfig)で`innerHTMLTemplatesEnabled: true`を設定することで、このカスタム HTML 動作を有効にできます。

## 組み込みサニタイザーからの除外

`ion-toast`などのコンポーネントに複雑な HTML を追加したい開発者は、Ionic Framework に組み込まれているサニタイザーから除外する必要があります。開発者は、アプリ全体でサニタイザーを無効にするか、ケースバイケースでバイパスすることができます。

:::note
サニタイズ機能をバイパスすると、アプリケーションが<a href="https://en.wikipedia.org/wiki/Cross-site_scripting" target="_blank" rel="noreferrer">XSS 攻撃</a>に対して脆弱になる可能性があります。サニタイザーを無効にする際は、十分に注意してください。
:::

### 設定によるサニタイザーの無効化

Ionic Framework は、デフォルトで`true`に設定されている`sanitizerEnabled`というアプリケーション設定オプションを提供します。この値を`false`に設定すると、Ionic Framework の組み込みサニタイザーをグローバルに無効にできます。これは、Angular などの他のフレームワークが提供するサニタイズ機能を無効にしないことに注意してください。

### ケースバイケースでサニタイザーをバイパス

開発者は、特定のシナリオでサニタイザーから除外することも選択できます。Ionic Framework は、開発者がこれを行うことを可能にする`IonicSafeString`クラスを提供します。

:::note
サニタイザーをバイパスして、関連する Ionic コンポーネントでサニタイズされていないカスタム HTML を使用するには、Ionic 設定で`innerHTMLTemplatesEnabled`を`true`に設定する必要があります。

`innerHTMLTemplatesEnabled`が`false`に設定されている場合、`IonicSafeString`を使用しないでください。

詳細については、[カスタム HTML 解析の有効化](#enabling-custom-html-parsing-via-innerhtml)を参照してください。
:::

#### 使用方法

````mdx-code-block
<Tabs
  groupId="framework"
  defaultValue="angular"
  values={[
    { value: 'angular', label: 'Angular' },
    { value: 'angular-standalone', label: 'Angular (Standalone)' },
    { value: 'javascript', label: 'JavaScript' },
    { value: 'react', label: 'React' },
  ]
}>
<TabItem value="angular">

```tsx
import { IonicSafeString, ToastController } from '@ionic/angular';

...

constructor(private toastController: ToastController) {}

async presentToast() {
  const toast = await this.toastController.create({
      message: new IonicSafeString('<ion-button>Hello!</ion-button>'),
      duration: 2000
  });
  toast.present();
}

```
</TabItem>
<TabItem value="angular-standalone">

```tsx
import { IonicSafeString, ToastController } from '@ionic/angular/standalone';

...

constructor(private toastController: ToastController) {}

async presentToast() {
  const toast = await this.toastController.create({
      message: new IonicSafeString('<ion-button>Hello!</ion-button>'),
      duration: 2000
  });
  toast.present();
}

```
</TabItem>
<TabItem value="javascript">

```javascript
import { IonicSafeString } from '@ionic/core';

...

const async presentToast = () => {
  const toast = document.createElement('ion-toast');
  toast.message = new IonicSafeString('<ion-button>Hello!</ion-button>');
  toast.duration = 2000;

  document.body.appendChild(toast);
  return toast.present();
}

```
</TabItem>
<TabItem value="react">

```tsx
import React, { useState } from 'react';
import { Animation, IonButton, IonContent, IonicSafeString, IonToast } from '@ionic/react';

export const ToastExample: React.FC = () => {
  const [showToast, setShowToast] = useState(false);

  return (
    <IonContent>
      <IonButton onClick={() => setShowToast(true)} expand="block">Show Toast</IonButton>
      <IonToast
        isOpen={showToast}
        onDidDismiss={() => setShowToast(false)}
        message={new IonicSafeString('<ion-button>Hello!</ion-button>')}
        duration={2000}
      />
    </IonContent>
  )
};
```
</TabItem>
</Tabs>
````

## コンテンツセキュリティポリシー（CSP）

[コンテンツセキュリティポリシー（CSP）](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP)は、クロスサイトスクリプティング（XSS）やデータインジェクションなどの特定のタイプの攻撃から Web アプリケーションを保護するのに役立つセキュリティメカニズムです。これは、スクリプト、スタイルシート、画像などのコンテンツのソースを、Web ページで読み込みおよび実行できるようにするかどうかをブラウザに指示する HTTP ヘッダーを通じて実装されます。

CSP の主な目的は、コードインジェクション攻撃に関連するリスクを軽減することです。ポリシーを定義することで、Web 開発者は、ブラウザがさまざまなタイプのコンテンツの読み込みと実行を許可するドメインまたはソースを指定できます。これにより、悪意のあるスクリプトや不正なコンテンツによって引き起こされる可能性のある損害を効果的に制限できます。

### CSP の有効化

開発者は、ポリシーの詳細とスクリプトおよびスタイルタグの期待される nonce 値を含む meta タグを設定することで、アプリケーションに CSP を割り当てることができます。

```html
<meta
  http-equiv="Content-Security-Policy"
  content="default-src 'self'; script-src 'self' 'nonce-randomNonceGoesHere'; style-src 'self' 'nonce-randomNonceGoesHere';"
/>
```

### Ionic と CSP

Ionic Framework は、Web コンポーネントのスタイルシートを構築する際に使用される nonce 値を設定するのに役立つ関数を提供します。この関数は、Ionic コンポーネントが読み込まれる前に呼び出す必要があります。これは、nonce 値を Web コンポーネントに渡して、CSP 環境で使用できるようにするために必要です。

```ts
import { setNonce } from '@ionic/core/loader';

setNonce('randomNonceGoesHere');
```

:::tip

Angular では、これはアプリケーションがブートストラップされる前に`main.ts`ファイルで呼び出すことができます。

:::

Stencil Web コンポーネントで CSP を使用する方法の詳細については、[Stencil documentation](https://stenciljs.com/docs/csp-nonce)を参照してください。

### Angular

Angular 16 以降、Angular は nonce 値を設定するための 2 つのオプションを提供します。

1. ルートアプリケーション要素に`ngCspNonce`属性を`<app ngCspNonce="randomNonceGoesHere"></app>`として設定します。レスポンスを構築する際に、ヘッダーと`index.html`の両方に nonce を追加できるサーバーサイドテンプレートにアクセスできる場合は、このアプローチを使用します。
2. [`CSP_NONCE`](https://angular.io/api/core/CSP_NONCE)インジェクショントークンを使用して nonce を提供します。実行時に nonce にアクセスでき、`index.html`をキャッシュできるようにしたい場合は、このアプローチを使用します。

:::tip

`CSP_NONCE`インジェクショントークンを提供する場合、モジュールプロジェクトの場合は`AppModule`にプロバイダーを設定し、スタンドアロンプロジェクトの場合は`bootstrapApplication`内に設定します。

:::

Angular で CSP を使用する方法の詳細については、[Angular documentation](https://angular.io/guide/security#content-security-policy)を参照してください。
