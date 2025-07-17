---
title: 'ion-select-option'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<head>
  <title>Select Option | What Is An Option Select on Ionic Framework Apps</title>
  <meta
    name="description"
    content="What is an option select? Select Options are child element components of a Select—each option defined is passed and displayed in the Select dialog."
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

## Properties

### disabled

|                 |                                                                                                                                                                                                              |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Description** | `true`の場合、ユーザは選択オプションと対話することができません。このプロパティは、`interface="action-sheet"`の場合には適用されない。なぜなら、`ion-action-sheet`はボタンを無効にすることができないからです。 |
| **Attribute**   | `disabled`                                                                                                                                                                                                   |
| **Type**        | `boolean`                                                                                                                                                                                                    |
| **Default**     | `false`                                                                                                                                                                                                      |

### value

|                 |                              |
| --------------- | ---------------------------- |
| **Description** | オプションのテキスト値です。 |
| **Attribute**   | `value`                      |
| **Type**        | `any`                        |
| **Default**     | `undefined`                  |
