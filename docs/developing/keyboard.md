---
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# キーボード

開発者がモバイルアプリやPWAを開発する際に直面する一般的な障害は、画面上のキーボードの存在を考慮してカスタマイズすることです。このガイドでは、アプリケーションでオンスクリーンキーボードを管理するためのさまざまなツールの概要を説明します。

## inputmode

開発者は、 `inputmode` 属性を使用して、入力に入力できるデータのタイプを指定できます。これにより、ユーザーの入力内容に関連するボタンを含むキーボードがブラウザに表示されます。例えば、 `inputmode="email"` を指定すると、 `@` キーを含むキーボードが表示され、その他のemail入力の最適化も行われます。

`inputmode` はグローバル属性であるため、通常の入力エレメントに加えて、`ion-input` や `ion-textarea` などのIonicコンポーネントでも使用できます。

特定のデータ型を必要とする入力では、代わりに `type` 属性を使用する必要があります。たとえば、emailの入力では、 `inputmode.` を指定するのではなく、`type="email"`
を使用する必要があります。これは、入力されるデータが常にemailの形式になるためです。一方、inputがemailまたはユーザー名を受け入れる場合は、入力されるデータが常に `type="email"` になるとは限らないため、 `inputmode=”email”` を使用するのが適切です。

使用可能な値のリストについては、<a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/inputmode" target="_blank" rel="noreferrer">inputmode Documentation</a>を参照してください。

### Usage
<Tabs
  defaultValue="javascript"
  values={[
    { value: 'javascript', label: 'JavaScript' },
    { value: 'angular', label: 'Angular' },
    { value: 'react', label: 'React' },
    { value: 'vue', label: 'Vue' },
  ]
}>
<TabItem value="javascript">

```html
<ion-item>
  <ion-label>Username or Email</ion-label>
  <ion-input inputmode="email"></ion-input>
</ion-item>

<ion-item>
  <ion-label>Enter a number</ion-label>
  <ion-textarea inputmode="numeric"></ion-textarea>
</ion-item>
```
</TabItem>
<TabItem value="angular">

```html
<ion-item>
  <ion-label>Username or Email</ion-label>
  <ion-input inputmode="email"></ion-input>
</ion-item>

<ion-item>
  <ion-label>Enter a number</ion-label>
  <ion-textarea inputmode="numeric"></ion-textarea>
</ion-item>
```
</TabItem>
<TabItem value="react">

```html
<IonItem>
  <IonLabel>Username or Email</IonLabel>
  <IonInput inputmode="email"></IonInput>
</IonItem>

<IonItem>
  <IonLabel>Enter a number</IonLabel>
  <IonTextarea inputmode="numeric"></IonTextarea>
</IonItem>
```
</TabItem>
<TabItem value="vue">

```html
<ion-item>
  <ion-label>Username or Email</ion-label>
  <ion-input inputmode="email"></ion-input>
</ion-item>

<ion-item>
  <ion-label>Enter a number</ion-label>
  <ion-textarea inputmode="numeric"></ion-textarea>
</ion-item>
```
</TabItem>
</Tabs>

import Codepen from '@site/src/components/Codepen';

<Codepen user="ionic" slug="abvJVVv" height="400"></Codepen>

> `inputmode` 属性はChrome 66+ と iOS Safari 12.2+のデバイスでサポートされています: https://caniuse.com/#search=inputmode

## enterkeyhint

`enterkeyhint` 属性を使用すると、開発者は "Enter" キーに表示するアクション・ラベルまたはアイコンのタイプを指定できます。 `enterkeyhint` を使用すると、ユーザが "Enter" キーをタップしたときに何が起こるかを知ることができます。ここで指定する値は、ユーザーが何をしているかによって異なります。たとえば、ユーザーが検索ボックスに入力している場合、開発者はinputが `enterkeyhint="search"` であることを確認する必要があります。

`enterkeyhint` はグローバル属性であるため、通常の入力エレメントに加えて、`ion-input` や `ion-textarea` などのIonicコンポーネントでも使用できます。

使用可能な値のリストについては、 <a href="https://html.spec.whatwg.org/dev/interaction.html#input-modalities:-the-enterkeyhint-attribute" target="_blank" rel="noreferrer">enterkeyhint Standard</a> を参照してください。

### Usage
<Tabs
  defaultValue="javascript"
  values={[
    { value: 'javascript', label: 'JavaScript' },
    { value: 'angular', label: 'Angular' },
    { value: 'react', label: 'React' },
    { value: 'vue', label: 'Vue' },
  ]
}>
<TabItem value="javascript">

```html
<ion-item>
  <ion-label>Enter search query</ion-label>
  <ion-input enterkeyhint="search" type="search"></ion-input>
</ion-item>
```
</TabItem>
<TabItem value="angular">

```html
<ion-item>
  <ion-label>Enter search query</ion-label>
  <ion-input enterkeyhint="search" type="search"></ion-input>
</ion-item>
```
</TabItem>
<TabItem value="react">

```html
<IonItem>
  <IonLabel>Enter search query</IonLabel>
  <IonInput enterkeyhint="search" type="search"></IonInput>
</IonItem>
```
</TabItem>
<TabItem value="vue">

```html
<ion-item>
  <ion-label>Enter search query</ion-label>
  <ion-input enterkeyhint="search" type="search"></ion-input>
</ion-item>
```
</TabItem>
</Tabs>

<Codepen user="ionic" slug="GRpWyRB" height="350"></Codepen>

> `enterkeyhint` 属性は Chrome 77+ and iOS Safari 13.4+ のデバイスでサポートされています

## ダークモード

デフォルトでは、キーボードテーマはOSによって決定されます。たとえば、iOSでダークモードが有効になっている場合、アプリケーションのCSSにダークテーマがない場合でも、アプリケーションのキーボードはダークテーマで表示されます。

モバイルWebブラウザやPWAでアプリを実行しているとき、キーボードを特定のテーマで表示させる方法はありません。

CapacitorまたはCordovaでアプリを実行しているとき、キーボードを特定のテーマで表示させることができます。この設定の詳細については、 <a href="https://capacitor.ionicframework.com/docs/apis/keyboard#keyboard-configuration-ios-only-" target="_blank">Capacitor Keyboard Documentation</a> を参照してください。


## アクセサリバーを非表示にする

ウェブベースのアプリケーションを実行すると、iOSはキーボードの上にアクセサリバーを表示する。これにより、ユーザーは次または前の入力に移動したり、キーボードを閉じることができます。

モバイルWebブラウザやPWAでアプリを実行する場合、アクセサリバーを非表示にする方法はありません。

CapacitorやCordovaでアプリを実行しているときは、アクセサリバーを隠すことができます。この設定の詳細については、 <a href="https://capacitor.ionicframework.com/docs/apis/keyboard#keyboard-configuration-ios-only-" target="_blank">Capacitor Keyboard Documentation</a> を参照してください。


## キーボードのライフサイクルイベント

スクリーンキーボードの存在を検出することは、そうでなければキーボードによって隠される入力の位置を調整するのに有用です。CapacitorとCordovaアプリでは、開発者は一般的にネイティブのキーボードプラグインを使ってキーボードライフサイクルイベントをListenします。モバイルブラウザやPWAで動作するアプリでは、サポートされていればVisual Viewport APIを使用することができる。Ionic Frameworkはこれらの両方のアプローチをラップし、`window` に `ionKeyboardDidShow` と `ionKeyboardDidHide` イベントを発行します。 `ionKeyboardDidShow` のイベントペイロードには、キーボードの高さの近似値がピクセル単位で含まれています。

### Usage
<Tabs
  defaultValue="javascript"
  values={[
    { value: 'javascript', label: 'JavaScript' },
    { value: 'angular', label: 'Angular' },
    { value: 'react', label: 'React' },
    { value: 'vue', label: 'Vue' },
  ]
}>
<TabItem value="javascript">

```javascript
window.addEventListener('ionKeyboardDidShow', ev => {
  const { keyboardHeight } = ev;
  // Do something with the keyboard height such as translating an input above the keyboard.
});

window.addEventListener('ionKeyboardDidHide', () => {
  // Move input back to original location
});
```
</TabItem>
<TabItem value="angular">

```typescript
import { Platform } from '@ionic/angular';

...

constructor(private platform: Platform) {
  this.platform.keyboardDidShow.subscribe(ev => {
    const { keyboardHeight } = ev;
    // Do something with the keyboard height such as translating an input above the keyboard.
  });
  
  this.platform.keyboardDidHide.subscribe(() => {
    // Move input back to original location
  });
}
```
</TabItem>
<TabItem value="react">

```tsx
import { useKeyboardState } from '@ionic/react-hooks/keyboard';

...

const { isOpen, keyboardHeight } = useKeyboardState();

// Do something with the keyboard height such as translating an input above the keyboard
```
</TabItem>
<TabItem value="vue">

```typescript
import { useKeyboard } from '@ionic/vue';
import { watch } from 'vue';

...

const { isOpen, keyboardHeight } = useKeyboard();

watch(keyboardHeight, () => {
  console.log(`Is Keyboard Open: ${isOpen.value}, Keyboard Height: ${keyboardHeight.value}`);
});


```
</TabItem>
</Tabs>

> モバイルWebブラウザやPWAで動作するアプリでは、 Keyboard Lifecycle EventsはChrome 62以降とiOS Safari 13.0以降でのみサポートされています。