---
title: 'ion-searchbar'
demoUrl: '/docs/demos/api/searchbar/index.html'
demoSourceUrl: 'https://github.com/ionic-team/ionic-docs/tree/main/static/demos/api/searchbar/index.html'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<head>
  <title>Search Bar Icon for Keyboard Text Display | Ion-Search Bar</title>
  <meta
    name="description"
    content="Search bars represent a text field that can be used to search through a collection. Learn to input Ion-Search Bar as an icon on Android & iOS keyboard displays."
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="scoped" />

## Properties

### animated

|                 |                                                        |
| --------------- | ------------------------------------------------------ |
| **Description** | `true`の場合、検索バーのアニメーションを有効にします。 |
| **Attribute**   | `animated`                                             |
| **Type**        | `boolean`                                              |
| **Default**     | `false`                                                |

### autocapitalize

|                 |                                                                                                                                                                                                               |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | テキスト値がユーザーによって入力／編集される際に、自動的に大文字にするかどうか、またどのようにするかについて示します。利用可能なオプション off"`, `"none"`, `"on"`, `"sentences"`, `"words"`, `"characters"`. |
| **Attribute**   | `autocapitalize`                                                                                                                                                                                              |
| **Type**        | `string`                                                                                                                                                                                                      |
| **Default**     | `'off'`                                                                                                                                                                                                       |

### autocomplete

|                 |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | Input のオートコンプリートプロパティを設定します。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| **Attribute**   | `autocomplete`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| **Type**        | `"name" \| "email" \| "tel" \| "url" \| "on" \| "off" \| "honorific-prefix" \| "given-name" \| "additional-name" \| "family-name" \| "honorific-suffix" \| "nickname" \| "username" \| "new-password" \| "current-password" \| "one-time-code" \| "organization-title" \| "organization" \| "street-address" \| "address-line1" \| "address-line2" \| "address-line3" \| "address-level4" \| "address-level3" \| "address-level2" \| "address-level1" \| "country" \| "country-name" \| "postal-code" \| "cc-name" \| "cc-given-name" \| "cc-additional-name" \| "cc-family-name" \| "cc-number" \| "cc-exp" \| "cc-exp-month" \| "cc-exp-year" \| "cc-csc" \| "cc-type" \| "transaction-currency" \| "transaction-amount" \| "language" \| "bday" \| "bday-day" \| "bday-month" \| "bday-year" \| "sex" \| "tel-country-code" \| "tel-national" \| "tel-area-code" \| "tel-local" \| "tel-extension" \| "impp" \| "photo"` |
| **Default**     | `'off'`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |

### autocorrect

|                 |                                                |
| --------------- | ---------------------------------------------- |
| **Description** | Input のオートコレクトプロパティを設定します。 |
| **Attribute**   | `autocorrect`                                  |
| **Type**        | `"off" \| "on"`                                |
| **Default**     | `'off'`                                        |

### cancelButtonIcon

|                 |                                                                                                               |
| --------------- | ------------------------------------------------------------------------------------------------------------- |
| **Description** | キャンセルボタンのアイコンを設定します。 `md` mode のみに適用されます。デフォルトは `arrow-back-sharp` です。 |
| **Attribute**   | `cancel-button-icon`                                                                                          |
| **Type**        | `string`                                                                                                      |
| **Default**     | `config.get('backButtonIcon', arrowBackSharp) as string`                                                      |

### cancelButtonText

|                 |                                                         |
| --------------- | ------------------------------------------------------- |
| **Description** | Set the cancel button text. Only applies to `ios` mode. |
| **Attribute**   | `cancel-button-text`                                    |
| **Type**        | `string`                                                |
| **Default**     | `'Cancel'`                                              |

### clearIcon

|                 |                                                                                                             |
| --------------- | ----------------------------------------------------------------------------------------------------------- |
| **Description** | クリアアイコンを設定します。デフォルトは `ios` の場合は `close-circle` 、`md` の場合は `close-sharp` です。 |
| **Attribute**   | `clear-icon`                                                                                                |
| **Type**        | `string \| undefined`                                                                                       |
| **Default**     | `undefined`                                                                                                 |

### color

|                 |                                                                                                                                                                                                                                                                                                           |
| --------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | アプリケーションのカラーパレットから使用する色を指定します。デフォルトのオプションは以下の通りです。 `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, と `"dark"` です．色に関する詳しい情報は [theming](/docs/theming/basics) を参照してください。 |
| **Attribute**   | `color`                                                                                                                                                                                                                                                                                                   |
| **Type**        | `"danger" \| "dark" \| "light" \| "medium" \| "primary" \| "secondary" \| "success" \| "tertiary" \| "warning" \| string & Record<never, never> \| undefined`                                                                                                                                             |
| **Default**     | `undefined`                                                                                                                                                                                                                                                                                               |

### debounce

|                 |                                                                                        |
| --------------- | -------------------------------------------------------------------------------------- |
| **Description** | キーを押すたびに `ionInput` イベントが発生するまでの待ち時間をミリ秒単位で設定します。 |
| **Attribute**   | `debounce`                                                                             |
| **Type**        | `number \| undefined`                                                                  |
| **Default**     | `undefined`                                                                            |

### disabled

|                 |                                                           |
| --------------- | --------------------------------------------------------- |
| **Description** | `true`の場合、ユーザは Input と対話することができません。 |
| **Attribute**   | `disabled`                                                |
| **Type**        | `boolean`                                                 |
| **Default**     | `false`                                                   |

### enterkeyhint

|                 |                                                                                                                                              |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | どのエンターキーを表示するかのブラウザへのヒント。指定可能な値。enter"`, `"done"`, `"go"`, `"next"`, `"previous"`, `"search"`, and `"send"`. |
| **Attribute**   | `enterkeyhint`                                                                                                                               |
| **Type**        | `"done" \| "enter" \| "go" \| "next" \| "previous" \| "search" \| "send" \| undefined`                                                       |
| **Default**     | `undefined`                                                                                                                                  |

### inputmode

|                 |                                                                                                                                                        |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Description** | どのキーボードを表示するかのブラウザへのヒント。指定可能な値。none"`, `"text"`, `"tel"`, `"url"`, `"email"`, `"numeric"`, `"decimal"`, and `"search"`. |
| **Attribute**   | `inputmode`                                                                                                                                            |
| **Type**        | `"decimal" \| "email" \| "none" \| "numeric" \| "search" \| "tel" \| "text" \| "url" \| undefined`                                                     |
| **Default**     | `undefined`                                                                                                                                            |

### maxlength

|                 |                                                        |
| --------------- | ------------------------------------------------------ |
| **Description** | この属性は、ユーザが入力できる最大文字数を指定します。 |
| **Attribute**   | `maxlength`                                            |
| **Type**        | `number \| undefined`                                  |
| **Default**     | `undefined`                                            |

### minlength

|                 |                                                            |
| --------------- | ---------------------------------------------------------- |
| **Description** | この属性は、ユーザーが入力できる最小の文字数を指定します。 |
| **Attribute**   | `minlength`                                                |
| **Type**        | `number \| undefined`                                      |
| **Default**     | `undefined`                                                |

### mode

|                 |                                                                   |
| --------------- | ----------------------------------------------------------------- |
| **Description** | mode は、どのプラットフォームのスタイルを使用するかを決定します。 |
| **Attribute**   | `mode`                                                            |
| **Type**        | `"ios" \| "md"`                                                   |
| **Default**     | `undefined`                                                       |

### name

|                 |                                                                                              |
| --------------- | -------------------------------------------------------------------------------------------- |
| **Description** | フォームで使用する場合は、フォーム・データと一緒に送信されるコントロールの名前を設定します。 |
| **Attribute**   | `name`                                                                                       |
| **Type**        | `string`                                                                                     |
| **Default**     | `this.inputId`                                                                               |

### placeholder

|                 |                                                                                                                                                                                                                                                                                                                                                                              |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | Input の placeholder を設定します。 `placeholder` には、文字列としてプレーンテキストまたは HTML のいずれかを指定することができます。通常 HTML 用に予約されている文字を表示するには、エスケープする必要があります。例えば `<Ionic>` は `&lt;Ionic&gt;` になります。詳細は [セキュリティ・ドキュメンテーション](https://ionicframework.com/docs/faq/security) をご覧ください。 |
| **Attribute**   | `placeholder`                                                                                                                                                                                                                                                                                                                                                                |
| **Type**        | `string`                                                                                                                                                                                                                                                                                                                                                                     |
| **Default**     | `'Search'`                                                                                                                                                                                                                                                                                                                                                                   |

### searchIcon

|                 |                                                                                                                              |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| **Description** | 検索アイコンとして使用するアイコンです。デフォルトは `ios` mode では `search-outline` 、`md` mode では `search-sharp` です。 |
| **Attribute**   | `search-icon`                                                                                                                |
| **Type**        | `string \| undefined`                                                                                                        |
| **Default**     | `undefined`                                                                                                                  |

### showCancelButton

|                 |                                                                                                                                                                                                                                                                                             |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | キャンセルボタンに関する動作を設定します。デフォルトは `"never"` です。focus"` に設定すると、フォーカスが当たったときにキャンセルボタンを表示します。never"`に設定すると、キャンセルボタンを非表示にします。always"` に設定すると、フォーカスの状態に関係なくキャンセルボタンを表示します。 |
| **Attribute**   | `show-cancel-button`                                                                                                                                                                                                                                                                        |
| **Type**        | `"always" \| "focus" \| "never"`                                                                                                                                                                                                                                                            |
| **Default**     | `'never'`                                                                                                                                                                                                                                                                                   |

### showClearButton

|                 |                                                                                                                                                                                                                                                                                                                                               |
| --------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | クリアボタンに関する動作を設定します。デフォルトは `"focus"` です。`"focus"`に設定すると、Input が空でない場合、フォーカス時にクリアボタンを表示します。`"never"`に設定すると、クリアボタンを非表示にします。`"always"`に設定すると、フォーカスの状態に関係なくクリアボタンを表示するが、Input が空でない場合にのみクリアボタンを表示します。 |
| **Attribute**   | `show-clear-button`                                                                                                                                                                                                                                                                                                                           |
| **Type**        | `"always" \| "focus" \| "never"`                                                                                                                                                                                                                                                                                                              |
| **Default**     | `'always'`                                                                                                                                                                                                                                                                                                                                    |

### spellcheck

|                 |                                                      |
| --------------- | ---------------------------------------------------- |
| **Description** | `true`の場合、入力値のスペルチェックを有効にします。 |
| **Attribute**   | `spellcheck`                                         |
| **Type**        | `boolean`                                            |
| **Default**     | `false`                                              |

### type

|                 |                                                                             |
| --------------- | --------------------------------------------------------------------------- |
| **Description** | Input の種類を設定します。                                                  |
| **Attribute**   | `type`                                                                      |
| **Type**        | `"email" \| "number" \| "password" \| "search" \| "tel" \| "text" \| "url"` |
| **Default**     | `'search'`                                                                  |

### value

|                 |                               |
| --------------- | ----------------------------- |
| **Description** | 検索バーの値。                |
| **Attribute**   | `value`                       |
| **Type**        | `null \| string \| undefined` |
| **Default**     | `''`                          |

## Events

| Name        | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `ionBlur`   | Input のフォーカスが外れたときに発行されます。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| `ionCancel` | キャンセルボタンがクリックされたときに発行されます。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| `ionChange` | onChange`イベントは、ユーザが要素の値を変更したときに`<ion-searchbar>` 要素に対して発生する。ionInput` イベントとは異なり、要素の値が変更されるたびに `ionChange` イベントが発生するわけではない。 ionChange`イベントは、ユーザによって値が変更されたときに発生する。これは、要素のフォーカスが外れたときや、"Enter" キーが押されたときに発生する。また、クリアボタンやキャンセルボタンをクリックしたときにも`ionChange`イベントが発生することがある。  プログラムで`value` プロパティを設定した場合には、このイベントは発生しない。 |
| `ionClear`  | Clear Input ボタンがクリックされたときに発行されます。                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| `ionFocus`  | Input にフォーカスが当たったときに発行されます。                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| `ionInput`  | ion-searchbar`要素の `value` が変更されたときに発行されます。                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |

## Methods

### getInputElement

|                 |                                                                   |
| --------------- | ----------------------------------------------------------------- |
| **Description** | 要素の内部で使用されているネイティブの `<input>` 要素を返します。 |
| **Signature**   | `getInputElement() => Promise<HTMLInputElement>`                  |

### setFocus

|                 |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Description** | ion-searchbar`のネイティブ`input`にフォーカスを設定する。グローバルな`input.focus()`の代わりにこのメソッドを使用する。  ページ入力時に入力にフォーカスを当てたい開発者は、`ionViewDidEnter()`ライフサイクルメソッド内で`setFocus()`を呼び出す必要がある。  オーバーレイが表示されたときに入力にフォーカスを当てたい開発者は、`didPresent`が解決した後に`setFocus` を呼び出してください。 詳細については、[managing focus](/docs/developing/managing-focus)を参照してください。 |
| **Signature**   | `setFocus() => Promise<void>`                                                                                                                                                                                                                                                                                                                                                                                                                                                  |

## CSS Custom Properties

| Name                        | Description                           |
| --------------------------- | ------------------------------------- |
| `--background`              | 検索バーの Input の背景               |
| `--background`              | 検索バーの Input の背景               |
| `--border-radius`           | 検索バーの Input のボーダー半径       |
| `--border-radius`           | 検索バーの Input のボーダー半径       |
| `--box-shadow`              | 検索バーの Input のボックスシャドウ   |
| `--box-shadow`              | 検索バーの Input のボックスシャドウ   |
| `--cancel-button-color`     | 検索バーのキャンセルボタンの色        |
| `--cancel-button-color`     | 検索バーのキャンセルボタンの色        |
| `--clear-button-color`      | 検索バーのクリアボタンの色            |
| `--clear-button-color`      | 検索バーのクリアボタンの色            |
| `--color`                   | 検索バーのテキストの色                |
| `--color`                   | 検索バーのテキストの色                |
| `--icon-color`              | 検索バーのアイコンの色                |
| `--icon-color`              | 検索バーのアイコンの色                |
| `--placeholder-color`       | 検索バーの Placeholder の色           |
| `--placeholder-color`       | 検索バーの Placeholder の色           |
| `--placeholder-font-style`  | 検索バーの Placeholder の Font Style  |
| `--placeholder-font-style`  | 検索バーの Placeholder の Font Style  |
| `--placeholder-font-weight` | 検索バーの Placeholder の Font Weight |
| `--placeholder-font-weight` | 検索バーの Placeholder の Font Weight |
| `--placeholder-opacity`     | 検索バーの Placeholder の不透明度     |
| `--placeholder-opacity`     | 検索バーの Placeholder の不透明度     |
