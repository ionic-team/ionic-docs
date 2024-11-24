---
title: "ion-picker"
---
import Props from '@ionic-internal/component-api/v8/picker/props.md';
import Events from '@ionic-internal/component-api/v8/picker/events.md';
import Methods from '@ionic-internal/component-api/v8/picker/methods.md';
import Parts from '@ionic-internal/component-api/v8/picker/parts.md';
import CustomProps from '@ionic-internal/component-api/v8/picker/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v8/picker/slots.md';

<head>
  <title>ion-picker: Display a list of options in columns</title>
  <meta name="description" content="ピッカーは、ユーザーが選択できるオプションを持つ1つまたは複数の列を表示します。" />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

ピッカーは、ユーザーが選択できるオプションを持つ1つまたは複数の列を表示します。

import Basic from '@site/static/usage/v8/picker/basic/index.md';

<Basic />

## Prefix と Suffix コンテンツ

`prefix` スロットと `suffix` スロットを使用して、ピッカーに追加コンテンツを追加します。

import PrefixSuffix from '@site/static/usage/v8/picker/prefix-suffix/index.md';

<PrefixSuffix />

## テーマ

### CSS変数

ピッカーのハイライトとフェードは `ion-picker` の CSS 変数を使ってカスタマイズできる。開発者は、`ion-picker-column-options` を直接ターゲットにして、ホストレベルのスタイリングを使用することで、個々の外観をカスタマイズすることができます。

import CSSProps from '@site/static/usage/v8/picker/theming/css-properties/index.md';

<CSSProps />

## Picker を Modal で使う

ピッカーは`ion-modal`のようなオーバーレイの中に表示することができ、確認ボタンやキャンセルボタンを使ってピッカー体験を作り出すことができる。

import ModalExample from '@site/static/usage/v8/picker/modal/index.md';

<ModalExample />
  
## Accessibility

### Screen Readers

Picker supports navigation using a screen reader by implementing the [`slider` role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/slider_role) on each [Picker Column](./picker-column). The following gestures can be used to navigate the Picker.

| Gesture | Function |
| - | - |
| Swipe Left | Move focus to the previous Picker Column. |
| Swipe Right | Move focus to the next Picker Column. |
| Swipe Up | Select the next option in the Picker Column. |
| Swipe Down | Select the previous option in the Picker Column. |
| Double Tap and Slide Up/Down | Adjust the selected option in the Picker Column. Can be used as an alternative to swiping up and down. |

:::caution
The Swipe Up and Swipe Down gestures rely on the correct key events being synthesized as noted on the [`slider` documentation](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/slider_role). [Chromium-based browsers do not synthesize keyboard events correctly](https://issues.chromium.org/issues/40816094), but the "Double Tap and Slide Up/Down" gesture can be used as an alternative until this has been implemented in Chromium-based browsers.
:::

### Keyboard Navigation

Each [Picker Column](./picker-column) can be navigated using the keyboard when focused.

| Key                | Function                                                     |
| ------------------ | ------------------------------------------------------------ |
| `ArrowUp` | Scroll to the previous option. |
| `ArrowDown` | Scroll to the next option. |
| `PageUp` | Scroll up by more than one option. |
| `PageDown` | Scroll down by more than one option. | 
| `Home` | Scroll to the first option. |
| `End` | Scroll to the last option. |

## Accessibility

### Screen Readers

Picker supports navigation using a screen reader by implementing the [`slider` role](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/slider_role) on each [Picker Column](./picker-column). The following gestures can be used to navigate the Picker.

| Gesture | Function |
| - | - |
| Swipe Left | Move focus to the previous Picker Column. |
| Swipe Right | Move focus to the next Picker Column. |
| Swipe Up | Select the next option in the Picker Column. |
| Swipe Down | Select the previous option in the Picker Column. |
| Double Tap and Slide Up/Down | Adjust the selected option in the Picker Column. Can be used as an alternative to swiping up and down. |

:::caution
The Swipe Up and Swipe Down gestures rely on the correct key events being synthesized as noted on the [`slider` documentation](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/slider_role). [Chromium-based browsers do not synthesize keyboard events correctly](https://issues.chromium.org/issues/40816094), but the "Double Tap and Slide Up/Down" gesture can be used as an alternative until this has been implemented in Chromium-based browsers.
:::

### Keyboard Interactions

Each [Picker Column](./picker-column) can be navigated using the keyboard when focused.

| Key                  | Description                          |
| -------------------- | ------------------------------------ |
| <kbd>ArrowUp</kbd>   | Scroll to the previous option.       |
| <kbd>ArrowDown</kbd> | Scroll to the next option.           |
| <kbd>PageUp</kbd>    | Scroll up by more than one option.   |
| <kbd>PageDown</kbd>  | Scroll down by more than one option. |
| <kbd>Home</kbd>      | Scroll to the first option.          |
| <kbd>End</kbd>       | Scroll to the last option.           |

## プロパティ
<Props />

## イベント
<Events />

## メソッド
<Methods />

## CSS Shadow Parts
<Parts />

## CSSカスタムプロパティ
<CustomProps />

## Slots
<Slots />
