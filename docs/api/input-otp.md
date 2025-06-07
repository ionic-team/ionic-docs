---
title: "ion-input-otp"
---
import Props from '@ionic-internal/component-api/v8/input-otp/props.md';
import Events from '@ionic-internal/component-api/v8/input-otp/events.md';
import Methods from '@ionic-internal/component-api/v8/input-otp/methods.md';
import Parts from '@ionic-internal/component-api/v8/input-otp/parts.md';
import CustomProps from '@ionic-internal/component-api/v8/input-otp/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v8/input-otp/slots.md';

<head>
  <title>ion-input-otp: ワンタイムパスワード入力コンポーネント</title>
  <meta name="description" content="ion-input-otp は、ワンタイムパスワード (OTP) を入力するためのコンポーネントで、複数の入力ボックスと自動フォーカス管理をサポートしています。" />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="scoped" />

Input OTP コンポーネントは、ワンタイムパスワード（OTP）入力用に設計された入力コンポーネントです。複数の入力ボックスと自動フォーカス管理をサポートし、 検証コードを入力するためのユーザーフレンドリーなインターフェイスを提供します。

## 基本的な使用法

このコンポーネントはデフォルトで4つの入力ボックスを提供します。入力ボックスの数は `length` プロパティを使用してカスタマイズすることができます。

import Basic from '@site/static/usage/v8/input-otp/basic/index.md';

<Basic />

## Type

`type` プロパティは入力形式を決定し、数字または英数字の検証コードをサポートします。プロパティには2つの値を指定できる： `number`と `text` です。デフォルトでは `type="number"` を使用し、数字認証コードを入力を受け付けます。 `type="text"` を指定すると、英数字の入力を受け付ける。この柔軟性により、数字のみのコード（SMS 認証コードのような）や英数字のコード（バックアップコードやリカバリキーのような）など、さまざまな OTP フォーマットを扱うことができます

`type` プロパティは `inputmode` 属性と `pattern` 属性の両方を自動的に設定します：
- `type="number"` の場合：
  - `inputmode="numeric"`を設定し、モバイルデバイスに数字キーボードを表示します。
  - `pattern="[\p{N}]"`を設定し、数字入力のみを許可します。
- `type="text"`の場合
  - 標準のキーボードを表示するには `inputmode="text"` を設定します。
  - `pattern="[\p{L}\p{N}]"` を設定し、英数字の入力を許可する。

パターンの検証やカスタマイズの詳細については、[パターン](#pattern)のセクションを参照してください。

import Type from '@site/static/usage/v8/input-otp/type/index.md';

<Type />

## Shape

`shape` プロパティは、入力ボックスのボーダー半径をコントロールし、丸みを帯びたコーナーやシャープなコーナーを作成します。

import Shape from '@site/static/usage/v8/input-otp/shape/index.md';

<Shape />

## Fill

`fill` プロパティは入力ボックスの背景のスタイルをコントロールし、縁取りまたは塗りつぶしの背景を提供します。

import Fill from '@site/static/usage/v8/input-otp/fill/index.md';

<Fill />

## Size

`size`プロパティは入力ボックスに異なるサイズのオプションを提供します。

import Size from '@site/static/usage/v8/input-otp/size/index.md';

<Size />

## Separators

`separators` プロパティは1つ以上の入力ボックスの間に視覚的な仕切りを追加します。セパレータは3つの方法で定義できます：
- カンマで区切られた数値の文字列 (例: `"1,3"`)
- 数字の配列 (例: `[1, 3]`)
- 文字列 `"all"` (すべての入力ボックスの間にセパレータを表示する)

数字はセパレータが表示されるべきインデックスを表します。例えば、`"1,3"` は1番目と3番目の入力ボックスの後にセパレータを表示します。これは、入力ボックスを視覚的に区別してグループ化するために使用できますが、それでも値は1つです。

import Separators from '@site/static/usage/v8/input-otp/separators/index.md';

<Separators />

## States

このコンポーネントは、入力ボックスの自動スタイリングのためのさまざまな状態をサポートしています：
- それぞれのプロパティによる `disabled` と `readonly` 状態
- フォームバリデーション状態： CSSクラスによって視覚的に示される `valid` と `invalid` の状態
- Angularの場合：バリデーション状態は、フレームワークの値アクセサとフォームバリデーションによって自動的に管理されます
- 他のフレームワークの場合: 開発者は `ion-valid`、`ion-invalid`、`ion-touched` クラスを手動で追加する必要があります
- `onvalid` スタイルはタッチされたときのみ表示されます (`ion-touched`)
- `ion-valid` スタイルはフォーカスされたときのみ表示されます (`has-focus`)

import States from '@site/static/usage/v8/input-otp/states/index.md';

<States />

## Pattern

`pattern` プロパティは正規表現を使ったカスタムバリデーションを可能にします。 [文字列の正規表現](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions/Cheatsheet)または[unicodeの正規表現](https://www.regular-expressions.info/unicode.html)を使用して、許可される文字を検証することができます。 `pattern`はサブセットだけでなく、値全体にマッチする必要があります。デフォルトのパターン
- `type="number"`: `"[\p{N}]"`  スクリプト内のあらゆる種類の数値文字にマッチします。
- `type="text"`: `"[\p{L}\p{N}]"` あらゆるスクリプトのあらゆる種類の数字と、あらゆる言語のあらゆる種類の文字にマッチします。

このコンポーネントは、指定されたパターンにマッチしない文字の入力を防ぎます。開発者は、特定の入力要件に一致する独自のパターン文字列を提供することで、これらのデフォルトをオーバーライドできます。

:::tip
カスタム `pattern` を使用する場合、`type` プロパティがモバイルデバイスに表示されるキーボードを制御することを覚えておいてください：
- 数字のみのパターンには `type="number"` を使い、数字キーボードを表示します。
- 英数字キーボードを表示するには、文字を含むパターンには `type="text"` を使用します。
:::

import Pattern from '@site/static/usage/v8/input-otp/pattern/index.md';

<Pattern />

## Theming

### Colors

`color`プロパティは入力ボックスのカラーパレットを変更します。アウトライン塗りつぶしの場合、このプロパティはキャレットカラー、ハイライトカラー、ボーダーカラーを変更します。 `solid` 塗りつぶしの場合、このプロパティはキャレットカラーとハイライトカラーを変更します。

:::note
The `color` property does *not* change the text color of the input OTP. For that, use the [`--color` CSS property](#css-custom-properties-1).
:::

import Colors from '@site/static/usage/v8/input-otp/theming/colors/index.md';

<Colors />

### CSS Custom Properties

Input OTPはスコープされたカプセル化を使用しています。これは、実行時に各スタイルに追加のクラスを追加することで、CSSを自動的にスコープすることを意味します。CSSでスコープされたセレクタをオーバーライドするには、[より高い特異性](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity) セレクタが必要です。そのため、クラスを追加してカスタマイズすることをお勧めします。特定のスタイルが `fill` に基づいて適用されるため、`fill` のプロパティを個別にオーバーライドする必要があるかもしれません。

import CSSProps from '@site/static/usage/v8/input-otp/theming/css-properties/index.md';

<CSSProps />

## Accessibility

### Keyboard Interactions

Input OTPのキーボードナビゲーションは、[ARIA Authoring Practices Guide](https://www.w3.org/WAI/ARIA/apg/practices/keyboard-interface/) の複合ウィジェットに関する推奨に従っています。これは、1つのコントロールとして機能する複数のフォーカス可能な要素（入力ボックス）を含むため、複合ウィジェットとして扱われます。

コンポーネントが無効になっていない場合、これらのキーボード操作はすべての `ion-input-otp` 要素に適用されます。

| Key | Description |
| --- | --- |
| <kbd>Tab</kbd> | When first tabbing into the component, focus moves to the first empty box. If all boxes are filled, focus moves to the last box. Once inside the component, tabbing moves to the next focusable element on the page. |
| <kbd>Shift</kbd> + <kbd>Tab</kbd> | When tabbing backwards into the component, focus moves to the first empty box. If all boxes are filled, focus moves to the last box. Once inside the component, shift tabbing focus moves to the previous focusable element on the page. |
| <kbd>ArrowRight</kbd> | Moves focus to the next input box, stopping at the first empty box. In RTL mode, moves focus back to any previous box that contains a value. |
| <kbd>ArrowLeft</kbd> | Moves focus back to any previous box that contains a value. In RTL mode, moves focus to the next input box, stopping at the first empty box. |
| Any character matching the `pattern` property | Fills the current box and automatically moves focus to the next empty box. If all boxes are filled, focus remains on the last box. If the current box has a value, override the value with the entered character. In RTL mode, input fills boxes from right to left. |
| <kbd>Backspace</kbd> | In an empty box: moves focus back one box and clears its value. <br/> In a box with a value: clears that value. <br/> With values in boxes to the right: shifts them all one position to the left. In RTL mode, with values in boxes to the left: shifts them all one position to the right. |
| <kbd>Ctrl</kbd> + <kbd>V</kbd> <br/> <kbd>Cmd</kbd> + <kbd>V</kbd> | Pastes content starting from the first box, regardless of which box is currently focused. All existing values are cleared before pasting. For example, if you have "1234" in all boxes and paste "56", the result will be "56" in the first two boxes with the remaining boxes empty. If the pasted content is longer than the available boxes, the extra characters are ignored. |

## Properties
<Props />

## Events
<Events />

## Methods
<Methods />

## CSS Shadow Parts
<Parts />

## CSS Custom Properties
<CustomProps />

## Slots
<Slots />
