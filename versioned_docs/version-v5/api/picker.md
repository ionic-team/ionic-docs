---
sidebar_label: 'ion-picker'
demoUrl: '/docs/demos/api/picker/index.html'
demoSourceUrl: 'https://github.com/ionic-team/ionic-docs/tree/main/static/demos/api/picker/index.html'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# ion-picker

A Picker is a dialog that displays a row of buttons and columns underneath. It appears on top of the app's content, and at the bottom of the viewport.

## Usage

```tsx
/* Using with useIonPicker Hook */

import React, { useState } from 'react';
import { IonButton, IonContent, IonPage, useIonPicker } from '@ionic/react';

const PickerExample: React.FC = () => {
  const [present] = useIonPicker();
  const [value, setValue] = useState('');
  return (
    <IonPage>
      <IonContent>
        <IonButton
          expand="block"
          onClick={() =>
            present({
              buttons: [
                {
                  text: 'Confirm',
                  handler: (selected) => {
                    setValue(selected.animal.value);
                  },
                },
              ],
              columns: [
                {
                  name: 'animal',
                  options: [
                    { text: 'Dog', value: 'dog' },
                    { text: 'Cat', value: 'cat' },
                    { text: 'Bird', value: 'bird' },
                  ],
                },
              ],
            })
          }
        >
          Show Picker
        </IonButton>
        <IonButton
          expand="block"
          onClick={() =>
            present(
              [
                {
                  name: 'animal',
                  options: [
                    { text: 'Dog', value: 'dog' },
                    { text: 'Cat', value: 'cat' },
                    { text: 'Bird', value: 'bird' },
                  ],
                },
                {
                  name: 'vehicle',
                  options: [
                    { text: 'Car', value: 'car' },
                    { text: 'Truck', value: 'truck' },
                    { text: 'Bike', value: 'bike' },
                  ],
                },
              ],
              [
                {
                  text: 'Confirm',
                  handler: (selected) => {
                    setValue(`${selected.animal.value}, ${selected.vehicle.value}`);
                  },
                },
              ]
            )
          }
        >
          Show Picker using params
        </IonButton>
        {value && <div>Selected Value: {value}</div>}
      </IonContent>
    </IonPage>
  );
};
```

## Properties

### animated

|                 |                                     |
| --------------- | ----------------------------------- |
| **Description** | If `true`, the picker will animate. |
| **Attribute**   | `animated`                          |
| **Type**        | `boolean`                           |
| **Default**     | `true`                              |

### backdropDismiss

|                 |                                                                       |
| --------------- | --------------------------------------------------------------------- |
| **Description** | If `true`, the picker will be dismissed when the backdrop is clicked. |
| **Attribute**   | `backdrop-dismiss`                                                    |
| **Type**        | `boolean`                                                             |
| **Default**     | `true`                                                                |

### buttons

|                 |                                                            |
| --------------- | ---------------------------------------------------------- |
| **Description** | Array of buttons to be displayed at the top of the picker. |
| **Attribute**   | `undefined`                                                |
| **Type**        | `PickerButton[]`                                           |
| **Default**     | `[]`                                                       |

### columns

|                 |                                                 |
| --------------- | ----------------------------------------------- |
| **Description** | Array of columns to be displayed in the picker. |
| **Attribute**   | `undefined`                                     |
| **Type**        | `PickerColumn[]`                                |
| **Default**     | `[]`                                            |

### cssClass

|                 |                                                                                                                       |
| --------------- | --------------------------------------------------------------------------------------------------------------------- |
| **Description** | Additional classes to apply for custom CSS. If multiple classes are<br />provided they should be separated by spaces. |
| **Attribute**   | `css-class`                                                                                                           |
| **Type**        | `string \| string[] \| undefined`                                                                                     |
| **Default**     | `undefined`                                                                                                           |

### duration

|                 |                                                              |
| --------------- | ------------------------------------------------------------ |
| **Description** | Number of milliseconds to wait before dismissing the picker. |
| **Attribute**   | `duration`                                                   |
| **Type**        | `number`                                                     |
| **Default**     | `0`                                                          |

### enterAnimation

|                 |                                                         |
| --------------- | ------------------------------------------------------- |
| **Description** | Animation to use when the picker is presented.          |
| **Attribute**   | `undefined`                                             |
| **Type**        | `((baseEl: any, opts?: any) => Animation) \| undefined` |
| **Default**     | `undefined`                                             |

### keyboardClose

|                 |                                                                                        |
| --------------- | -------------------------------------------------------------------------------------- |
| **Description** | If `true`, the keyboard will be automatically dismissed when the overlay is presented. |
| **Attribute**   | `keyboard-close`                                                                       |
| **Type**        | `boolean`                                                                              |
| **Default**     | `true`                                                                                 |

### leaveAnimation

|                 |                                                         |
| --------------- | ------------------------------------------------------- |
| **Description** | Animation to use when the picker is dismissed.          |
| **Attribute**   | `undefined`                                             |
| **Type**        | `((baseEl: any, opts?: any) => Animation) \| undefined` |
| **Default**     | `undefined`                                             |

### mode

|                 |                                                   |
| --------------- | ------------------------------------------------- |
| **Description** | The mode determines which platform styles to use. |
| **Attribute**   | `mode`                                            |
| **Type**        | `"ios" \| "md"`                                   |
| **Default**     | `undefined`                                       |

### showBackdrop

|                 |                                                            |
| --------------- | ---------------------------------------------------------- |
| **Description** | If `true`, a backdrop will be displayed behind the picker. |
| **Attribute**   | `show-backdrop`                                            |
| **Type**        | `boolean`                                                  |
| **Default**     | `true`                                                     |

## Events

| Name                   | Description                              |
| ---------------------- | ---------------------------------------- |
| `ionPickerDidDismiss`  | Emitted after the picker has dismissed.  |
| `ionPickerDidPresent`  | Emitted after the picker has presented.  |
| `ionPickerWillDismiss` | Emitted before the picker has dismissed. |
| `ionPickerWillPresent` | Emitted before the picker has presented. |

## Methods

### dismiss

|                 |                                                                       |
| --------------- | --------------------------------------------------------------------- |
| **Description** | Dismiss the picker overlay after it has been presented.               |
| **Signature**   | `dismiss(data?: any, role?: string \| undefined) => Promise<boolean>` |

### getColumn

|                 |                                                                 |
| --------------- | --------------------------------------------------------------- |
| **Description** | Get the column that matches the specified name.                 |
| **Signature**   | `getColumn(name: string) => Promise<PickerColumn \| undefined>` |

### onDidDismiss

|                 |                                                              |
| --------------- | ------------------------------------------------------------ |
| **Description** | Returns a promise that resolves when the picker did dismiss. |
| **Signature**   | `onDidDismiss<T = any>() => Promise<OverlayEventDetail<T>>`  |

### onWillDismiss

|                 |                                                               |
| --------------- | ------------------------------------------------------------- |
| **Description** | Returns a promise that resolves when the picker will dismiss. |
| **Signature**   | `onWillDismiss<T = any>() => Promise<OverlayEventDetail<T>>`  |

### present

|                 |                                                       |
| --------------- | ----------------------------------------------------- |
| **Description** | Present the picker overlay after it has been created. |
| **Signature**   | `present() => Promise<void>`                          |

## CSS Custom Properties

| Name                 | Description                            |
| -------------------- | -------------------------------------- |
| `--backdrop-opacity` | Opacity of the backdrop                |
| `--background`       | Background of the picker               |
| `--background-rgb`   | Background of the picker in rgb format |
| `--border-color`     | Border color of the picker             |
| `--border-radius`    | Border radius of the picker            |
| `--border-style`     | Border style of the picker             |
| `--border-width`     | Border width of the picker             |
| `--height`           | Height of the picker                   |
| `--max-height`       | Maximum height of the picker           |
| `--max-width`        | Maximum width of the picker            |
| `--min-height`       | Minimum height of the picker           |
| `--min-width`        | Minimum width of the picker            |
| `--width`            | Width of the picker                    |
