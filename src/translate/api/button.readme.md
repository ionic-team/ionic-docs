# ion-button

Buttonはクリック可能な要素を提供し、Form内や、標準の単機能なButton機能を必要とする任意の場所で使用できます。text、icon、またはその両方を表示できます。Buttonは、いくつかの属性を利用して特定の外観になるようにスタイル設定できます。

## Expand

この属性では、Buttonの横幅を指定します。デフォルトでは、ボタンはinline-blockですが、Expandを設定すると、Buttonは横幅100%のblock要素になります。

| Value          | Details                                                                      |
|----------------|------------------------------------------------------------------------------|
| `block`        | Full-width button with rounded corners.                                      |
| `full`         | Full-width button with square corners and no border on the left or right.    |

## Fill

この属性は、Buttonのbackgroundとborder-colorを設定します。デフォルトでは、Buttonはtoolbar内にない限り、backgroundは塗りつぶされます。toolbar内にある場合は、backgroundは透明になります。

| Value          | Details                                                                      |
|----------------|------------------------------------------------------------------------------|
| `clear`        | Button with a transparent background that resembles a flat button.           |
| `outline`      | Button with a transparent background and a visible border.                   |
| `solid`        | Button with a filled background. Useful for buttons in a toolbar.            |

## Size

この属性は、Buttonのサイズを指定します。この属性を設定すると、Buttonの高さとpaddingが変更されます。

| Value          | Details                                                                      |
|----------------|------------------------------------------------------------------------------|
| `small`        | Button with less height and padding. Default for buttons in an item.         |
| `default`      | Button with the default height and padding. Useful for buttons in an item.   |
| `large`        | Button with more height and padding.                                         |

