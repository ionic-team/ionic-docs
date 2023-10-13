---
title: "ion-item"
---
import Props from '@ionic-internal/component-api/v7/item/props.md';
import Events from '@ionic-internal/component-api/v7/item/events.md';
import Methods from '@ionic-internal/component-api/v7/item/methods.md';
import Parts from '@ionic-internal/component-api/v7/item/parts.md';
import CustomProps from '@ionic-internal/component-api/v7/item/custom-props.md';
import Slots from '@ionic-internal/component-api/v7/item/slots.md';

import useBaseUrl from '@docusaurus/useBaseUrl';
import BestPracticeFigure from '@components/global/BestPracticeFigure';

<head>
  <title>ion-item: Input, Edit, or Delete iOS and Android Item Elements</title>
  <meta name="description" content="iOS/Android用ion-item要素は、テキスト、アイコン、画像、その他のカスタム要素を含みます。これらはリストに配置され、入力、削除、編集などが可能です。" />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

アイテムは、テキスト、アイコン、アバター、画像、Input、その他のネイティブまたはカスタム要素を含むことができる要素です。アイテムは他のアイテムと一緒に[リスト](./list)の行としてのみ使用してください。アイテムはスワイプ、削除、並び替え、編集などができます。


## 基本的な使い方

アイテムはテキストを左寄せにし、テキストがアイテムより幅が広い場合は省略記号を追加しています。この動作は、Ionic Framework が提供する CSS Utilities を使って変更することができます。例えば、以下の例では `.ion-text-wrap` を使っています。テキストを変換するためにアイテムに追加できる他のクラスについては、[CSS Utilities Documentation](/docs/layout/css-utilities) を参照してください。

import Basic from '@site/static/usage/v7/item/basic/index.md';

<Basic />


## コンテンツの種類

リスト内のアイテムは様々な形をとりますが、一般的にビジュアル、テキスト、メタデータ、アクション、コントロールの5つの異なるコンテンツタイプをサポートします。しかし、これらのコンテンツタイプをすべて同時に使うべきではありません。以下のガイドでは、異なるコンテンツタイプと、アプリケーションでの適切な利用方法を示します。

### 補助ビジュアル

補助ビジュアル 補助ビジュアルはアイテムの装飾アイコンやその他の飾りです。サポーティングビジュアルの一般的な例は、[アバター](./avatar)、 [アイコン](./icon)、[サムネイル](./thumbnail)です。このコンテンツはアイテムの意図を理解するために必要ではないので、通常`aria-hidden="true"`を使ってスクリーンリーダーから隠されます。

アイコン・ボタンのように、アイテムとのインタラクションにビジュアルが必要な場合、そのビジュアルはサポート・ビジュアルではなく、 [アクション](#actions) となります。

<BestPracticeFigure 
  text="Supporting visuals should be rendered in a consistent manner. This makes the information in each item easier to parse."
  doText="Align visuals on the same side in a list"
  doNotText="Don't render visuals with different alignments in the same list"
  doImage={<img alt="A list with several items. Each item has an icon and visible text describing the item. The icon in each item is rendered at the start of the line." src={useBaseUrl('img/item/visuals-do.jpg')} />}
  doNotImage={<img alt="A list with several items. Each item has an icon and visible text describing the item. Some icons are rendered at the start of the line, and some icons are rendered at the end of the line" src={useBaseUrl('img/item/visuals-do-not.jpg')} />}
/>

下の例では、ビジュアルをサポートする2つのリストを作成しています。最初のリストはアイコンを使い、2番目のリストはアバターを使います。ビジュアルは装飾的なものなので、すべて `aria-hidden="true"` を指定しています。さらに、これらは `start` スロットで一貫して表示されます。

import SupportingVisuals from '@site/static/usage/v7/item/content-types/supporting-visuals/index.md';

<SupportingVisuals />

### テキスト

テキスト・コンテンツ・タイプには、フォーム制御ラベルやその他の可視テキストが含まれます。このテキストは項目の意図を示す役割を果たします。テキストは短く、要点をまとめるようにしてください。

<BestPracticeFigure 
  text={<>If you find that you need a few more sentences to clarify the item's purpose, consider moving the additional sentences to a <a href={useBaseUrl('api/note')}>Note</a> at the bottom of the list. Adding the item to its own list makes it clear which item the text is associated with.</>}
  doText="Move long text outside of the list"
  doNotText="Don't try to fit long text in an item"
  doImage={<img alt="A list with an item that contains a checked checkbox indicating the user wants to receive emails. Text describing how often the user will receive emails as well as how to unsubscribe from emails is placed underneath the list." src={useBaseUrl('img/item/long-text-do.jpg')} />}
  doNotImage={<img alt="A list with an item that contains a checked checkbox indicating the user wants to receive emails. Text describing how often the user will receive emails as well as how to unsubscribe from emails is placed as a single paragraph inline with the checkbox, making the text hard to read and increasing the height of the item." src={useBaseUrl('img/item/long-text-do-not.jpg')} />}
/>

下の例では、さまざまなタイプのテキストでリストを作成しています。"First Name"と "Last Name "のラベルは、テキスト入力に何を入力すべきかを示しています。

トグルの "Allow Notifications"ラベルの下には、ユーザーが通知を無効にできることを示すテキストが追加されています。このテキストは短いので、アイテムの内側に配置されています。

そのリストの下には、 [Note](./note) の下に長いテキストを含むtextareaを含む別のリストがあります。textareaは、長いテキストが他のフィールドではなく、textareaに関連付けられていることを明らかにするために、それ自身のリストに配置されました。

import Text from '@site/static/usage/v7/item/content-types/text/index.md';

<Text />

### メタデータ

メタデータは、ステータステキストやカウントのようなアイテムの追加コンテキストを提供します。Badge](./badge)や[Note](./note)のようなコンポーネントは、メタデータを表示する素晴らしい方法です。

<BestPracticeFigure 
  text="Limit the amount of metadata you include to only the most relevant information."
  doText="Add only the most important metadata"
  doNotText="Don't add too much metadata as it can overwhelm or confuse the user."
  doImage={<img alt="A list that contains several items, each representing a different to-do list. A count of how many tasks in each to-do list is placed at the end of each item." src={useBaseUrl('img/item/metadata-relevant-do.jpg')} />}
  doNotImage={<img alt="A list that contains several items, each representing a different to-do list. Two counts are placed at the end of each item: One count that states the total number of tasks, and another count that states the total number of tasks that are due today." src={useBaseUrl('img/item/metadata-relevant-do-not.jpg')} />}
/>

<BestPracticeFigure 
  text="Developers should also consider how important the metadata is. Drawing attention to the metadata may be helpful for the user or it may distract them from the more important information depending on the use case."
  doText="Prioritize the most important content."
  cautionText="Prioritized metadata may distract from other important content."
  doImage={<img alt="A list that contains several items, each representing a different to-do list. A count of how many tasks in each to-do list is placed at the end of each item." src={useBaseUrl('img/item/metadata-relevant-do.jpg')} />}
  cautionImage={<img alt="A list that contains several items, each representing a different to-do list. A count of how many tasks in each to-do list is placed at the end of each item. However, the count is highlighted in blue which draws the user's attention away from the name of the to-do list." src={useBaseUrl('img/item/metadata-important-caution.jpg')} />}
/>

以下の例では、異なる種類のメタデータを持つ2つのリストを作成している。最初のリストは[Note](./note)を使って、それぞれのToDoリストにいくつのタスクがあるかを表示している。

つ目のリストは、iOSのメールアプリを真似て受信トレイを表示しています。このリストでは、"開始"スロットに "未読メッセージ"インジケータ、"終了"スロットにタイムスタンプとカスタム詳細アイコンを含むカスタムメタデータを使用しています。"未読メッセージ"インジケータは、未読メッセージにユーザーの注意を引くために青くハイライトされ、タイムスタンプはより控えめです。

import Metadata from '@site/static/usage/v7/item/content-types/metadata/index.md';

<Metadata />

### アクション

アクションは、アクティブにすると何かをするインタラクティブな要素です。アイテムは1行に複数のアクションを表示することができます。しかし、開発者は、各アクションのタップターゲットが十分に大きいことを確認する必要があります。

開発者は、<a href="https://dequeuniversity.com/rules/axe/4.4/nested-interactive">入れ子になったインタラクティブ機能</a>を作成することは避けるべきです。例えば、 `button` プロパティが `true` に設定されている場合、開発者はアイテムのメインコンテンツ内にボタンを追加することを避けるべきです。

<BestPracticeFigure 
  text={<>Actions can be added by using the <a href={useBaseUrl('api/item-sliding')}>Item Sliding</a> component. Actions can also be placed directly inside of the Item without the use of Item Sliding, but this should be limited to no more than 2 actions.</>}
  doText={<>Use an <a href={useBaseUrl('api/item-sliding')}>Item Sliding</a> to reveal multiple actions by swiping on the Item.</>}
  doNotText="Don't put more than 2 actions within an Item."
  doImage={<img alt="A list that contains several items, each representing a contact. Each item has text that states the contact's name as well as several actions including pinning the contact, sharing the contact, and deleting the contact. These actions are revealed by swiping on the item." src={useBaseUrl('img/item/actions-do.jpg')} />}
  doNotImage={<img alt="A list that contains several items, each representing a contact. Each item has text that states the contact's name as well as several actions including pinning the contact, sharing the contact, and deleting the contact. The actions are placed directly on the item. Since there are so many actions, some of the text is cut off." src={useBaseUrl('img/item/actions-do-not.jpg')} />}
/>

下の例では、連絡先のリストを作成しています。各項目は、その項目の完全な連絡先ページに移動するためのスタブボタンです。各項目には、ユーザーが項目をスワイプすることで表示できる追加アクションがあります。

import Actions from '@site/static/usage/v7/item/content-types/actions/index.md';

<Actions />

### コントロール

コントロールは、チェックボックス、入力、ラジオなどのフォームコンポーネントです。リスト内の各項目は、画面スペースの制約上、最大でも2つのコントロールを持つ必要があります。

<BestPracticeFigure 
  text={<>Metadata such as helper text or character counts should not be used on form controls in list views. If such metadata is needed, the form control should be placed outside of a list. <a href={useBaseUrl('api/input#filled-inputs')}>Filled Inputs</a> are a great way of visually defining the input container outside of a list.</>}
  doText="Place inputs with metadata outside of the list."
  doNotText="Don't put metadata for inputs in the list."
  doImage={<img alt="There is an email input and a password input. Both have helper text associated with them. Since both are placed outside of a list it is clear which input each helper text is associated with." src={useBaseUrl('img/item/controls-metadata-list-do.jpg')} />}
  doNotImage={<img alt="There is a list containing an email input and a password input. Both have helper texts associated with them. However, the divider between each item and between the helper text makes it hard to tell which input each helper text is associated with." src={useBaseUrl('img/item/controls-metadata-list-do-not.jpg')} />}
/>

<BestPracticeFigure 
  text={<>Alternatively, the metadata can be placed in a <a href={useBaseUrl('api/note')}>Note</a> at the bottom of the list.</>}
  doText="Place metadata for inputs at the end of a list."
  doNotText="Don't put metadata for inputs in the list."
  doImage={<img alt="There are two lists of inputs. The first list contains a password input. Below that list contains text that says 'Password must be at least 16 characters'. The second list contains an email input. This second list is separated so the password length requirement text is clearly associated with the password input above." src={useBaseUrl('img/item/controls-metadata-do.jpg')} />}
  doNotImage={<img alt="There is one list of inputs. One of the inputs is a password input with text below the input that says 'Password must be at least 16 characters'. However, this text is placed directly above another input, so it's not immediately clear which input the text is associated with." src={useBaseUrl('img/item/controls-metadata-do-not.jpg')} />}
/>

<BestPracticeFigure 
  text={<>Items should typically have no more than two controls. If you need more controls, consider adding the additional controls in a <a href="useBaseUrl('api/modal')">Modal</a> that is accessible from the item.</>}
  doText="Move additional controls to a submenu accessible from the item."
  doNotText="Don't use more than two controls within an item."
  doImage={<img alt="There is one list of inputs. One of the inputs is a password input with text below the input that says 'Password must be at least 16 characters'. However, this text is placed directly above another input, so it's not immediately clear which input the text is associated with." src={useBaseUrl('img/item/controls-count-do.jpg')} />}
  doNotImage={<img alt="There are two lists of inputs. The first list contains a password input. Below that list contains text that says 'Password must be at least 16 characters'. The second list contains an email input. This second list is separated so the password length requirement text is clearly associated with the password input above." src={useBaseUrl('img/item/controls-count-do-not.jpg')} />}
/>

以下の例では、ToDoタスクのリストを作成しています。それぞれの項目にはチェックボックスと入力があります。チェックボックスはユーザーがタスクを完了としてマークできるようにし、入力はユーザーがタスクの名前を変更できるようにします。

import Controls from '@site/static/usage/v7/item/content-types/controls/index.md';

<Controls />


## クリック可能なItems

`href` か `button` プロパティが設定されている場合、itemは "clickable（クリック可能）" と見なされます。clickableなitemsには、インタラクティブに操作できることを示す視覚的な違いがいくつかあります。たとえば、clickableなitemは、`md` modeではrippleエフェクトを持ち、`ios` modeではハイライト表示され、`ios` modeでの [detail arrow](/#detail-arrows) が表示されます。

import Clickable from '@site/static/usage/v7/item/clickable/index.md';

<Clickable />


## Detail Arrows

デフォルトでは、[clickableなitems](/#clickable-items) は、`ios` modeで右矢印アイコンを表示します。clickableな要素の右矢印アイコンを非表示にするには、 `detail` プロパティを `false` に設定します。自動的に表示されない項目に右矢印アイコンを表示するには、`detail`プロパティを `true` に設定します。

import DetailArrows from '@site/static/usage/v7/item/detail-arrows/index.md';

<DetailArrows />


<!--

TODO add this functionality back as a css variable

This feature is not enabled by default on clickable items for the `md` mode, but it can be enabled by setting the following CSS variable:

```css
--item-detail-push-show: true;
```

See the [theming documentation](/docs/theming/css-variables) for more information.

-->


## Item Lines

アイテムはデフォルトで下部のボーダーを挿入して表示します。ボーダーは左側にパディングを持ち、 `"start"` スロットにスロットされたコンテンツの下に表示されることはありません。 `lines` プロパティを `"full"` または `"none"` に変更すると、それぞれ全幅のボーダーが表示され、ボーダーを表示しないようになります。

import Lines from '@site/static/usage/v7/item/lines/index.md';

<Lines />

## Buttons in Items

Buttonsは、アイテムの外側にあるときよりも、アイテムの内側にあるときの方が小さくスタイルされます。ボタンのサイズをアイテムの外側のボタンと同じにするには、`size`属性に`"default"`を設定します。

import Buttons from '@site/static/usage/v7/item/buttons/index.md';

<Buttons />

## Item Inputs

import Inputs from '@site/static/usage/v7/item/inputs/index.md';

<Inputs />

## テーマ

### Colors

import Colors from '@site/static/usage/v7/item/theming/colors/index.md';

<Colors />

### CSS Shadow Parts

import CSSParts from '@site/static/usage/v7/item/theming/css-shadow-parts/index.md';

<CSSParts />

## CSSカスタムプロパティ

import CSSProps from '@site/static/usage/v7/item/theming/css-properties/index.md';

<CSSProps />

## ガイドライン

以下のガイドラインは、リスト項目を理解しやすく、使いやすくするのに役立ちます。

1. アイテムは [Lists](./list) の中だけで使用してください。
2. リスト内のアイテムは、一貫したフォーマットで表示されるべきです。例えば、アイテムに装飾的なアイコンを表示する場合、アイコンはアイテム間で同じように配置されるべきです。
3. アイテムは決して[入れ子になったインタラクティヴ](https://dequeuniversity.com/rules/axe/4.4/nested-interactive)をレンダリングすべきではありません。入れ子になったインタラクティブ要素が使用されている場合、スクリーンリーダーは正しいインタラクティブ要素を選択することができません。例えば、`button="true"`を持つ`ion-item`の中にボタンを置くことは避けてください。
4. コンテントタイプ](#content-types)を正しく使用してください。Itemコンポーネントは、[List](./list)内の行として設計されており、汎用コンテナとして使用すべきではありません。

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
