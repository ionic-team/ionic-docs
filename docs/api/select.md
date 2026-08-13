---
title: "ion-select"
---
import Props from '@ionic-internal/component-api/v8/select/props.md';
import Events from '@ionic-internal/component-api/v8/select/events.md';
import Methods from '@ionic-internal/component-api/v8/select/methods.md';
import Parts from '@ionic-internal/component-api/v8/select/parts.md';
import CustomProps from '@ionic-internal/component-api/v8/select/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v8/select/slots.md';

<head>
  <title>ion-select: Select One or Multiple Value Boxes or Placeholders</title>
  <meta name="description" content="ion-selectは、選択された値（複数可）、またはプレースホルダー、ドロップダウンのアイコンによって表現されます。 selectをタップすると、選択しやすいリストを表示するダイアログボックスが表示されます。" />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

セレクトは、一連のオプションから1つまたは複数のオプションを選択するためのフォームコントロールです。ユーザーがセレクトをタップすると、ダイアログが表示され、すべてのオプションが大きく選択しやすいリストに表示されます。

selectは、子要素 `<ion-select-option>` とともに使用する必要があります。子要素のオプションに`value`属性が指定されていない場合、そのtextが値として使用されます。

`value` が `<ion-select>` にセットされている場合、オプションはその値に基づいて選択済みになります。

## Labels

ラベルは、Selectを説明するために使用します。これらは視覚的に使用することができ、また、ユーザーがSelectにフォーカスしているときには、スクリーンリーダーによって読み上げられます。これにより、ユーザーはSelectの意図を理解しやすくなります。セレクトには、ラベルを割り当てるいくつかの方法があります：

セレクトには、コンポーネントにラベルを指定するためのいくつかのオプションがあります：

- `label`プロパティ：プレーンテキストのラベルに使用します。
- `label`スロット：カスタム HTML ラベルに使用する。
- `aria-label`：スクリーンリーダー用のラベルとして使用されるが、ラベルは表示されない。

### Label Placement

ラベルはデフォルトではコンテンツの幅を占めます。開発者は `labelPlacement` プロパティを使用して、コントロールに対するラベルの配置を制御することができます。ここでは `label` プロパティを使用しているが、`labelPlacement` は `label` スロットと一緒に使用することもできます。

import LabelPlacement from '@site/static/usage/v8/select/label-placement/index.md';

<LabelPlacement />

### Label Slot

プレーンテキストのラベルは `label` プロパティで渡すべきですが、カスタムHTMLが必要な場合は、代わりに `label` スロットで渡すことができます。

import LabelSlot from '@site/static/usage/v8/select/label-slot/index.md';

<LabelSlot />

### No Visible Label

表示するラベルが必要ない場合でも、開発者は`aria-label`を指定する必要があります

import NoVisibleLabel from '@site/static/usage/v8/select/no-visible-label/index.md';

<NoVisibleLabel />

## Single Selection

デフォルトでは、selectを使用すると、ユーザは1つのOptionだけを選択できます。Alertのインターフェースでは、Optionのリストがradio button形式で表示されます。action sheetインタフェースは、1つの値選択でのみ使用できます。selectコンポーネントの値は、選択したオプションの値の値を受け取ります。

単一選択時のキーボード操作については、以下の[キーボード操作](#single-selection-1)のセクションで説明しています。

import SingleSelectionExample from '@site/static/usage/v8/select/basic/single-selection/index.md';

<SingleSelectionExample />

## 複数選択

select に `multiple` 属性を追加することで、ユーザは複数のオプションを選択することができます。複数のオプションを選択できる場合、アラート、ポップオーバー、またはモーダルオーバーレイは、チェックボックススタイルのオプションリストをユーザに提示します。select コンポーネントの値は、選択されたすべてのオプション値の配列を受け取ります。

:::note

注意: `action-sheet` インターフェースは複数選択では動作しません。

:::

複数選択時のキーボード操作については、以下の[キーボード操作](#multiple-selection-1)のセクションで説明しています。

import MultipleSelectionExample from '@site/static/usage/v8/select/basic/multiple-selection/index.md';

<MultipleSelectionExample />

## インターフェイス {/* #interfaces */}

デフォルトでは、selectは [ion-alert](alert.md) を使用してアラートのオプションのオーバーレイを開きます。インターフェイスは、`interface` プロパティに `action-sheet`、`popover`、`modal` を渡すことで、[ion-action-sheet](action-sheet.md)、[ion-popover](popover.md)、[ion-modal](modal.md) を使用するように変更することができます。それぞれのインターフェースの制限事項については、他のセクションを参照してください。

### Alert

import AlertExample from '@site/static/usage/v8/select/basic/single-selection/index.md';

<AlertExample />

### Action Sheet

import ActionSheetExample from '@site/static/usage/v8/select/interfaces/action-sheet/index.md';

<ActionSheetExample />

### Popover

import PopoverExample from '@site/static/usage/v8/select/interfaces/popover/index.md';

<PopoverExample />

### Modal

import ModalExample from '@site/static/usage/v8/select/interfaces/modal/index.md';

<ModalExample />

## Responding to Interaction

Selectとのユーザーインタラクションを処理する主な方法は、`ionChange`、`ionDismiss`、および`ionCancel`イベントです。これらおよびSelectが発火する他のイベントの詳細については、[Events](#events)を参照してください。

import RespondingToInteractionExample from '@site/static/usage/v8/select/basic/responding-to-interaction/index.md';

<RespondingToInteractionExample />

## オブジェクト値の参照

Selectの値にオブジェクトを使用する場合、Selectの値のidentityはそのままで、サーバやデータベースから取得したオブジェクトのidentityが変わってしまうことがあります。例えば、希望するオブジェクト値を持つ既存のレコードがSelectに読み込まれたが、新しく取得されたselectオプションのIDが異なる場合、このようなことが起こりえます。その結果、Selectは、元のSelectがそのまま残っているにもかかわらず、全く値がないように見えることになります。

デフォルトでは、Select はオプションが選択されているかどうかを決定するために厳密な等式 (`===`) を使用します。これは、プロパティ名または関数を `compareWith` プロパティに指定することでオーバーライドできます。

### Using compareWith

import UsingCompareWithExample from '@site/static/usage/v8/select/objects-as-values/using-comparewith/index.md';

<UsingCompareWithExample />

### Object Values and Multiple Selection

import ObjectValuesAndMultipleSelectionExample from '@site/static/usage/v8/select/objects-as-values/multiple-selection/index.md';

<ObjectValuesAndMultipleSelectionExample />

## Justification

開発者は `justify` プロパティを使って、ラベルとコントロールの行の詰め方をコントロールすることができる。

import JustifyExample from '@site/static/usage/v8/select/justify/index.md';

<JustifyExample />

## Filled Selects

Material DesignはセレクトにFilledスタイルを提供します。select の `fill` プロパティは `"solid"` または `"outline"` のいずれかに設定できます。

iOSでは、Selectの `mode` を `md` に設定することで、Filled Selectsを使うことができます。

:::warning
コンポーネント間のスタイリングの競合のため、`fill`を使用するセレクトは`ion-item`内で使用すべきではありません。
:::

import FillExample from '@site/static/usage/v8/select/fill/index.md';

<FillExample />

## Select Buttons

アラートは `Cancel` と `OK` の2つのボタンをサポートしている。それぞれのボタンのテキストは `cancelText` と `okText` プロパティを使ってカスタマイズすることができます。

`action-sheet` と `popover` インターフェースには `OK` ボタンがありません。オプションのいずれかをクリックすると自動的にオーバーレイが閉じ、その値が選択されます。 `popover` インターフェースには `Cancel` ボタンがなく、背景をクリックするとオーバーレイが閉じます。

`modal`インターフェースには、ヘッダーに単一の`Close`ボタンがあります。このボタンは、モーダルを閉じることのみを担当します。
このボタンをクリックした後、または代替方法でモーダルが閉じられた場合でも、行われた選択は保持されます。

import ButtonTextExample from '@site/static/usage/v8/select/customization/button-text/index.md';

<ButtonTextExample />

## インターフェイスオプション

selectはalert、action sheet、popover、modalの各インターフェイスを使用するので、`interfaceOptions`プロパティを通してこれらのコンポーネントにオプションを渡すことができます。これを使用して、カスタムヘッダー、サブヘッダー、CSS クラスなどを渡すことができます。

各インターフェースが受け入れるプロパティについては、[ion-alertドキュメント](alert.md)、[ion-action-sheetドキュメント](action-sheet.md)、[ion-popoverドキュメント](popover.md)、および[ion-modalドキュメント](modal.md)を参照してください。

注意: `alert` インターフェイスでは、`interfaceOptions` は `inputs` や `buttons` を上書きしません。

import InterfaceOptionsExample from '@site/static/usage/v8/select/customization/interface-options/index.md';

<InterfaceOptionsExample />

## Start and End Slots

`start`と`end`スロットは、セレクトの両側にアイコン、ボタン、またはプレフィックス/サフィックステキストを配置するために使用できます。スロットコンテンツがクリックされた場合、セレクトは開きません。

:::note
ほとんどの場合、これらのスロットに配置された[Icon](./icon.md)コンポーネントは`aria-hidden="true"`を持つべきです。詳細については、[Iconアクセシビリティドキュメント](https://ionicframework.com/docs/api/icon#accessibility)を参照してください。

スロットコンテンツが操作対象である場合、[Button](./button.md)などのインタラクティブ要素でラップする必要があります。これにより、コンテンツにタブで移動できるようになります。
:::

import StartEndSlots from '@site/static/usage/v8/select/start-end-slots/index.md';

<StartEndSlots />

## カスタマイズ

Selectコンポーネントには2つのユニットがあり、それぞれ別々にスタイルを設定する必要があります。 `ion-select`要素は、ビュー上で選択された値、ない場合はプレースホルダ、ドロップダウンのアイコンによって表現されます。インターフェイスは上記の[インターフェイス](#interfaces)セクションで定義されており、`ion-select`をクリックしたときに開くダイアログです。インターフェイスには `ion-select-option` 要素を追加することで定義されるすべてのオプションが含まれています。以下のセクションでは、これらのスタイリングの違いについて説明します。

### Select要素のスタイリング

前述の通り、`ion-select`要素は値、プレースホルダ、ビューに表示されるアイコンのみで構成されています。これをカスタマイズするには、CSSと[CSSカスタムプロパティ](#css-custom-properties)を組み合わせてスタイルを設定します。

また、必要な[ブラウザサポート](https://caniuse.com/#feat=mdn-css_selectors_part)によっては、CSSのシャドウパーツを使用してセレクトのスタイルを設定することもできます。 `part` を使用することで、要素上の任意の CSS プロパティを対象とすることができることに注意してください。

import StylingSelectExample from '@site/static/usage/v8/select/customization/styling-select/index.md';

<StylingSelectExample />

### セレクトインターフェースのスタイリング

インターフェイス・ダイアログのカスタマイズは、そのインターフェイスのドキュメントのスタイリングセクション（CSS Shadow Parts、CSS カスタムプロパティ、スロット）に
従って行ってください。

- [Alert](alert.md#css-shadow-parts)
- [Action Sheet](action-sheet.md#css-shadow-parts)
- [Popover](popover.md#css-shadow-parts)
- [Modal](modal.md#css-shadow-parts)

ただし、Select Optionはスタイリングを容易にするためにクラスを設定し、オーバーレイオプションにクラスを渡すことができます。オプションのカスタマイズ例については、[Select Optionsドキュメント](select-option.md)を参照してください。

### カスタム切り替えアイコン {/* #custom-toggle-icons */}

選択テキストの隣に表示されるアイコンは、`toggleIcon` プロパティと `expandedIcon` プロパティを使用して、任意の [Ionicon](https://ionic.io/ionicons) に設定することができます。

import CustomToggleIconsExample from '@site/static/usage/v8/select/customization/custom-toggle-icons/index.md';

<CustomToggleIconsExample />

### アイコンの反転動作

デフォルトでは、セレクトを開いているとき、トグルアイコンは `md` モードでは自動的に回転し、`ios` モードでは静止します。この動作はCSSを使ってカスタマイズすることができます。

以下の例では[custom `toggleIcon`](#custom-toggle-icons)を使って、`ios`モードでのトグルアイコンの反転動作をより分かりやすく説明しています。

import IconFlipBehaviorExample from '@site/static/usage/v8/select/customization/icon-flip-behavior/index.md';

<IconFlipBehaviorExample />

## Typeahead Component

Typeaheadまたはオートコンプリート機能は、既存のIonicコンポーネントを使用して構築できます。利用可能なスクリーンスペースを最大限に活用するために、`ion-modal`を使用することをお勧めします。

import TypeaheadExample from '@site/static/usage/v8/select/typeahead/index.md';

<TypeaheadExample />

## Helper & Error Text

ヘルパーテキストとエラーテキストは、`helperText`と`errorText`プロパティを使用してセレクト内で使用できます。エラーテキストは、`ion-invalid`と`ion-touched`クラスが`ion-select`に追加されていない限り表示されません。これにより、ユーザーがデータを入力する前にエラーが表示されることはありません。

Angularでは、これはフォームバリデーションによって自動的に行われます。JavaScript、React、Vueでは、独自のバリデーションに基づいてクラスを手動で追加する必要があります。

import HelperError from '@site/static/usage/v8/select/helper-error/index.md';

<HelperError />

## インターフェイス

### SelectChangeEventDetail

```typescript
interface SelectChangeEventDetail<T = any> {
  value: T;
}
```

### SelectCustomEvent

必須ではありませんが、このインターフェイスを `CustomEvent` インターフェイスの代わりに使用することで、このコンポーネントから発行される Ionic イベントをより強力に片付けすることができます。

```typescript
interface SelectCustomEvent<T = any> extends CustomEvent {
  detail: SelectChangeEventDetail<T>;
  target: HTMLIonSelectElement;
}
```

## アクセシビリティ

### キーボード操作

Ionic のキーボード操作は、すべてのプラットフォームで一貫した体験を提供するため、iOS ネイティブの選択要素ではなく Web の実装パターンに従います。

次の条件を満たす場合、これらのキーボード操作はすべての `ion-select` 要素に適用されます。

- 選択要素が閉じている。
- 選択要素にフォーカスがある。
- 選択要素が無効化されていない。

| キー             | 説明                                                                                                               |
| ---------------- | ------------------------------------------------------------------------------------------------------------------ |
| <kbd>Enter</kbd> | オーバーレイを開き、最初に選択されているオプションにフォーカスします。選択がない場合は最初の項目に移動します。     |
| <kbd>Space</kbd> | オーバーレイを開き、最初に選択されているオプションにフォーカスします。選択がない場合は最初の項目に移動します。     |

#### 単一選択 {/* #single-selection-1 */}

単一選択のキーボード操作は、[ARIA のラジオボタン実装パターン](https://www.w3.org/WAI/ARIA/apg/patterns/radio/)に従います。

これらのキーボード操作は、オーバーレイが表示され、フォーカスされている場合に`ion-action-sheet`、`ion-alert`、`ion-popover`、および`ion-modal`要素に適用されます。

| キー                  | 説明                                                                                                                                                                                                                                                                           |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| <kbd>ArrowDown</kbd>  | リスト内の次のオプションにフォーカスして選択します。次のオプションがない場合は、先頭に戻ります。                                                                                                                                                                               |
| <kbd>ArrowLeft</kbd>  | リスト内の前のオプションにフォーカスして選択します。前のオプションがない場合は、末尾に移動します。                                                                                                                                                                             |
| <kbd>ArrowRight</kbd> | リスト内の次のオプションにフォーカスして選択します。次のオプションがない場合は、先頭に戻ります。                                                                                                                                                                               |
| <kbd>ArrowUp</kbd>    | リスト内の前のオプションにフォーカスして選択します。前のオプションがない場合は、末尾に移動します。                                                                                                                                                                             |
| <kbd>Enter</kbd>      | オプションにフォーカスがある場合は、そのオプションを選択します。「OK」ボタンが**ない**オーバーレイでは、値をすぐに確定し、オーバーレイを閉じて `ion-select` 要素へフォーカスを戻します。<br /><br/>「OK」ボタンにフォーカスがある場合は、選択内容を保存してオーバーレイを閉じ、`ion-select` 要素へフォーカスを戻します。 |
| <kbd>Escape</kbd>     | 選択内容を変更せずにオーバーレイを閉じ、`ion-select` 要素へフォーカスを戻します。                                                                                                                                                                                              |
| <kbd>Space</kbd>      | フォーカス中のラジオボタンが未選択なら、現在の選択を解除してそのボタンを選択します。すでに選択されている場合は何もしません。「OK」ボタンがないオーバーレイでは、値をすぐに確定してオーバーレイを閉じます。                                                                         |
| <kbd>Tab</kbd>        | オーバーレイ上の次のフォーカス可能な要素（キャンセルボタン、「OK」ボタン、選択中または最初のオプション）へ移動します。次の要素がオプションなら選択中のオプションに、そうでなければ最初のオプションにフォーカスします。                                                             |

#### 複数選択 {/* #multiple-selection-1 */}

複数選択のキーボード操作は、[ARIA のチェックボックス実装パターン](https://www.w3.org/WAI/ARIA/apg/patterns/checkbox/)に従います。

これらのキーボード操作は、オーバーレイが表示され、複数選択が有効になっている場合に`ion-alert`、`ion-popover`、および`ion-modal`要素に適用されます。

| キー             | 説明                                                                                                                                                                                                |
| ---------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <kbd>Enter</kbd> | 「OK」ボタンにフォーカスがある場合は、選択内容を保存してオーバーレイを閉じ、`ion-select` 要素へフォーカスを戻します。                                                                                 |
| <kbd>Escape</kbd> | 選択内容を変更せずにオーバーレイを閉じ、`ion-select` 要素へフォーカスを戻します。                                                                                                                    |
| <kbd>Space</kbd> | 現在フォーカスしているオプションを選択または選択解除します。他の選択済みオプションは解除しません。「OK」ボタンがないオーバーレイでは、値をすぐに確定します。                                         |
| <kbd>Tab</kbd>   | オーバーレイ上の次のフォーカス可能な要素（キャンセルボタン、「OK」ボタン、いずれかのオプション）へ移動します。次の要素がオプションリストの場合は、各オプションを順に移動します。                       |

## プロパティ
<Props />

## イベント {/* #events */}
<Events />

## メソッド
<Methods />

## CSS Shadow Parts
<Parts />

## CSS カスタムプロパティ {/* #css-custom-properties */}
<CustomProps />

## Slots
<Slots />
