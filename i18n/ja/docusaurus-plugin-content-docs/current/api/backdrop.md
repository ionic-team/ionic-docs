---
title: 'ion-backdrop'
demoUrl: '/docs/demos/api/backdrop/index.html'
demoSourceUrl: 'https://github.com/ionic-team/ionic-docs/tree/main/static/demos/api/backdrop/index.html'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<head>
  <title>Ionic-Backdrop Component Full Screen Overlay| Ionic Framework</title>
  <meta
    name="description"
    content="Ionic-backdrops are full-screen components that overlay other components. Learn more about backdrops, their usage, and their properties here."
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

## Properties

### stopPropagation

|                 |                                                            |
| --------------- | ---------------------------------------------------------- |
| **Description** | `true`の場合、バックドロップはタップ時に伝搬を停止します。 |
| **Attribute**   | `stop-propagation`                                         |
| **Type**        | `boolean`                                                  |
| **Default**     | `true`                                                     |

### tappable

|                 |                                                                                      |
| --------------- | ------------------------------------------------------------------------------------ |
| **Description** | `true`の場合、背景をクリックすることができ、`ionBackdropTap`イベントを発生させます。 |
| **Attribute**   | `tappable`                                                                           |
| **Type**        | `boolean`                                                                            |
| **Default**     | `true`                                                                               |

### visible

|                 |                                              |
| --------------- | -------------------------------------------- |
| **Description** | `true`の場合、バックドロップが表示されます。 |
| **Attribute**   | `visible`                                    |
| **Type**        | `boolean`                                    |
| **Default**     | `true`                                       |

## Events

| Name             | Description                                      |
| ---------------- | ------------------------------------------------ |
| `ionBackdropTap` | バックドロップがタップされたときに発行されます。 |
