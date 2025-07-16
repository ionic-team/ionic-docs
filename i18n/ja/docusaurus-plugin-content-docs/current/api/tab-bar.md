---
title: "ion-tab-bar"
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<head>
  <title>ion-tab-bar with CSS Custom Properties for Tab Bar Components</title>
  <meta name="description" content="The tab bar component contains a set of tab buttons and a tab bar must be provided inside of tabs to communicate. Read more about use and CSS custom properties." />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />


  
## Properties


### color

| | |
| --- | --- |
| **Description** | アプリケーションのカラーパレットから使用する色を指定します。デフォルトのオプションは以下の通りです。 `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, と `"dark"` です．色に関する詳しい情報は [theming](/docs/theming/basics) を参照してください。 |
| **Attribute** | `color` |
| **Type** | `"danger" \| "dark" \| "light" \| "medium" \| "primary" \| "secondary" \| "success" \| "tertiary" \| "warning" \| string & Record<never, never> \| undefined` |
| **Default** | `undefined` |



### mode

| | |
| --- | --- |
| **Description** | modeは、どのプラットフォームのスタイルを使用するかを決定します。 |
| **Attribute** | `mode` |
| **Type** | `"ios" \| "md"` |
| **Default** | `undefined` |



### selectedTab

| | |
| --- | --- |
| **Description** | 選択されたタブコンポーネント |
| **Attribute** | `selected-tab` |
| **Type** | `string \| undefined` |
| **Default** | `undefined` |



### translucent

| | |
| --- | --- |
| **Description** | `true`の場合、タブバーを半透明にします。modeが `"ios"` で、デバイスが [`backdrop-filter`](https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter#Browser_compatibility) をサポートしている場合にのみ適用されます。 |
| **Attribute** | `translucent` |
| **Type** | `boolean` |
| **Default** | `false` |



## CSS Custom Properties

| Name | Description |
| --- | --- |
| `--background` | タブバーの背景 |
| `--background` | タブバーの背景 |
| `--border` | タブバーの境界線 |
| `--border` | タブバーの境界線 |
| `--color` | タブバーの色 |
| `--color` | タブバーの色 |

