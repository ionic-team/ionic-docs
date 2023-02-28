

### close

| | |
| --- | --- |
| **Description** | Close the sliding item. Items can also be closed from the [List](./list). |
| **Signature** | `close() => Promise<void>` |


### closeOpened

| | |
| --- | --- |
| **Description** | Close all of the sliding items in the list. Items can also be closed from the [List](./list). |
| **Signature** | `closeOpened() => Promise<boolean>` |


### getOpenAmount

| | |
| --- | --- |
| **Description** | Get the amount the item is open in pixels. |
| **Signature** | `getOpenAmount() => Promise<number>` |


### getSlidingRatio

| | |
| --- | --- |
| **Description** | Get the ratio of the open amount of the item compared to the width of the options. If the number returned is positive, then the options on the right side are open. If the number returned is negative, then the options on the left side are open. If the absolute value of the number is greater than 1, the item is open more than the width of the options. |
| **Signature** | `getSlidingRatio() => Promise<number>` |


### open

| | |
| --- | --- |
| **Description** | Open the sliding item. |
| **Signature** | `open(side: Side ｜ undefined) => Promise<void>` |


