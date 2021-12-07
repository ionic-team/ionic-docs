---
sidebar_label: 'ion-col'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# ion-col

Columns are cellular components of the [grid](grid.md) system and go inside of a [row](row.md).
They will expand to fill their row. All content within a grid should go inside of a column.

See [Grid Layout](../layout/grid.md) for more information.

## Column Alignment

By default, columns will stretch to fill the entire height of the row. Columns are [flex items](https://developer.mozilla.org/en-US/docs/Glossary/Flex_Item), so there are several [CSS classes](../layout/css-utilities.md#flex-item-properties) that can be applied to a column to customize this behavior.

## Properties

### offset

|                 |                                                                                                                       |
| --------------- | --------------------------------------------------------------------------------------------------------------------- |
| **Description** | The amount to offset the column, in terms of how many columns it should shift to the end<br />of the total available. |
| **Attribute**   | `offset`                                                                                                              |
| **Type**        | `string \| undefined`                                                                                                 |
| **Default**     | `undefined`                                                                                                           |

### offsetLg

|                 |                                                                                                                                      |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| **Description** | The amount to offset the column for lg screens, in terms of how many columns it should shift<br />to the end of the total available. |
| **Attribute**   | `offset-lg`                                                                                                                          |
| **Type**        | `string \| undefined`                                                                                                                |
| **Default**     | `undefined`                                                                                                                          |

### offsetMd

|                 |                                                                                                                                      |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| **Description** | The amount to offset the column for md screens, in terms of how many columns it should shift<br />to the end of the total available. |
| **Attribute**   | `offset-md`                                                                                                                          |
| **Type**        | `string \| undefined`                                                                                                                |
| **Default**     | `undefined`                                                                                                                          |

### offsetSm

|                 |                                                                                                                                      |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| **Description** | The amount to offset the column for sm screens, in terms of how many columns it should shift<br />to the end of the total available. |
| **Attribute**   | `offset-sm`                                                                                                                          |
| **Type**        | `string \| undefined`                                                                                                                |
| **Default**     | `undefined`                                                                                                                          |

### offsetXl

|                 |                                                                                                                                      |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| **Description** | The amount to offset the column for xl screens, in terms of how many columns it should shift<br />to the end of the total available. |
| **Attribute**   | `offset-xl`                                                                                                                          |
| **Type**        | `string \| undefined`                                                                                                                |
| **Default**     | `undefined`                                                                                                                          |

### offsetXs

|                 |                                                                                                                                      |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| **Description** | The amount to offset the column for xs screens, in terms of how many columns it should shift<br />to the end of the total available. |
| **Attribute**   | `offset-xs`                                                                                                                          |
| **Type**        | `string \| undefined`                                                                                                                |
| **Default**     | `undefined`                                                                                                                          |

### pull

|                 |                                                                                                                       |
| --------------- | --------------------------------------------------------------------------------------------------------------------- |
| **Description** | The amount to pull the column, in terms of how many columns it should shift to the start of<br />the total available. |
| **Attribute**   | `pull`                                                                                                                |
| **Type**        | `string \| undefined`                                                                                                 |
| **Default**     | `undefined`                                                                                                           |

### pullLg

|                 |                                                                                                                                      |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| **Description** | The amount to pull the column for lg screens, in terms of how many columns it should shift<br />to the start of the total available. |
| **Attribute**   | `pull-lg`                                                                                                                            |
| **Type**        | `string \| undefined`                                                                                                                |
| **Default**     | `undefined`                                                                                                                          |

### pullMd

|                 |                                                                                                                                      |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| **Description** | The amount to pull the column for md screens, in terms of how many columns it should shift<br />to the start of the total available. |
| **Attribute**   | `pull-md`                                                                                                                            |
| **Type**        | `string \| undefined`                                                                                                                |
| **Default**     | `undefined`                                                                                                                          |

### pullSm

|                 |                                                                                                                                      |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| **Description** | The amount to pull the column for sm screens, in terms of how many columns it should shift<br />to the start of the total available. |
| **Attribute**   | `pull-sm`                                                                                                                            |
| **Type**        | `string \| undefined`                                                                                                                |
| **Default**     | `undefined`                                                                                                                          |

### pullXl

|                 |                                                                                                                                      |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| **Description** | The amount to pull the column for xl screens, in terms of how many columns it should shift<br />to the start of the total available. |
| **Attribute**   | `pull-xl`                                                                                                                            |
| **Type**        | `string \| undefined`                                                                                                                |
| **Default**     | `undefined`                                                                                                                          |

### pullXs

|                 |                                                                                                                                      |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| **Description** | The amount to pull the column for xs screens, in terms of how many columns it should shift<br />to the start of the total available. |
| **Attribute**   | `pull-xs`                                                                                                                            |
| **Type**        | `string \| undefined`                                                                                                                |
| **Default**     | `undefined`                                                                                                                          |

### push

|                 |                                                                                                                     |
| --------------- | ------------------------------------------------------------------------------------------------------------------- |
| **Description** | The amount to push the column, in terms of how many columns it should shift to the end<br />of the total available. |
| **Attribute**   | `push`                                                                                                              |
| **Type**        | `string \| undefined`                                                                                               |
| **Default**     | `undefined`                                                                                                         |

### pushLg

|                 |                                                                                                                                    |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | The amount to push the column for lg screens, in terms of how many columns it should shift<br />to the end of the total available. |
| **Attribute**   | `push-lg`                                                                                                                          |
| **Type**        | `string \| undefined`                                                                                                              |
| **Default**     | `undefined`                                                                                                                        |

### pushMd

|                 |                                                                                                                                    |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | The amount to push the column for md screens, in terms of how many columns it should shift<br />to the end of the total available. |
| **Attribute**   | `push-md`                                                                                                                          |
| **Type**        | `string \| undefined`                                                                                                              |
| **Default**     | `undefined`                                                                                                                        |

### pushSm

|                 |                                                                                                                                    |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | The amount to push the column for sm screens, in terms of how many columns it should shift<br />to the end of the total available. |
| **Attribute**   | `push-sm`                                                                                                                          |
| **Type**        | `string \| undefined`                                                                                                              |
| **Default**     | `undefined`                                                                                                                        |

### pushXl

|                 |                                                                                                                                    |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | The amount to push the column for xl screens, in terms of how many columns it should shift<br />to the end of the total available. |
| **Attribute**   | `push-xl`                                                                                                                          |
| **Type**        | `string \| undefined`                                                                                                              |
| **Default**     | `undefined`                                                                                                                        |

### pushXs

|                 |                                                                                                                                    |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | The amount to push the column for xs screens, in terms of how many columns it should shift<br />to the end of the total available. |
| **Attribute**   | `push-xs`                                                                                                                          |
| **Type**        | `string \| undefined`                                                                                                              |
| **Default**     | `undefined`                                                                                                                        |

### size

|                 |                                                                                                                                                                            |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | The size of the column, in terms of how many columns it should take up out of the total<br />available. If `"auto"` is passed, the column will be the size of its content. |
| **Attribute**   | `size`                                                                                                                                                                     |
| **Type**        | `string \| undefined`                                                                                                                                                      |
| **Default**     | `undefined`                                                                                                                                                                |

### sizeLg

|                 |                                                                                                                                                                                           |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | The size of the column for lg screens, in terms of how many columns it should take up out<br />of the total available. If `"auto"` is passed, the column will be the size of its content. |
| **Attribute**   | `size-lg`                                                                                                                                                                                 |
| **Type**        | `string \| undefined`                                                                                                                                                                     |
| **Default**     | `undefined`                                                                                                                                                                               |

### sizeMd

|                 |                                                                                                                                                                                           |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | The size of the column for md screens, in terms of how many columns it should take up out<br />of the total available. If `"auto"` is passed, the column will be the size of its content. |
| **Attribute**   | `size-md`                                                                                                                                                                                 |
| **Type**        | `string \| undefined`                                                                                                                                                                     |
| **Default**     | `undefined`                                                                                                                                                                               |

### sizeSm

|                 |                                                                                                                                                                                           |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | The size of the column for sm screens, in terms of how many columns it should take up out<br />of the total available. If `"auto"` is passed, the column will be the size of its content. |
| **Attribute**   | `size-sm`                                                                                                                                                                                 |
| **Type**        | `string \| undefined`                                                                                                                                                                     |
| **Default**     | `undefined`                                                                                                                                                                               |

### sizeXl

|                 |                                                                                                                                                                                           |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | The size of the column for xl screens, in terms of how many columns it should take up out<br />of the total available. If `"auto"` is passed, the column will be the size of its content. |
| **Attribute**   | `size-xl`                                                                                                                                                                                 |
| **Type**        | `string \| undefined`                                                                                                                                                                     |
| **Default**     | `undefined`                                                                                                                                                                               |

### sizeXs

|                 |                                                                                                                                                                                           |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | The size of the column for xs screens, in terms of how many columns it should take up out<br />of the total available. If `"auto"` is passed, the column will be the size of its content. |
| **Attribute**   | `size-xs`                                                                                                                                                                                 |
| **Type**        | `string \| undefined`                                                                                                                                                                     |
| **Default**     | `undefined`                                                                                                                                                                               |

## CSS Custom Properties

| Name                           | Description                                 |
| ------------------------------ | ------------------------------------------- |
| `--ion-grid-column-padding`    | Padding for the Column                      |
| `--ion-grid-column-padding-lg` | Padding for the Column on lg screens and up |
| `--ion-grid-column-padding-md` | Padding for the Column on md screens and up |
| `--ion-grid-column-padding-sm` | Padding for the Column on sm screens and up |
| `--ion-grid-column-padding-xl` | Padding for the Column on xl screens and up |
| `--ion-grid-column-padding-xs` | Padding for the Column on xs screens and up |
| `--ion-grid-columns`           | The number of total Columns in the Grid     |
