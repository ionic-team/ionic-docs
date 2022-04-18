---
title: 'ion-virtual-scroll | Angular Virtual Scroll List for Ionic Apps'
description: 'ion-virtual-scroll, supported in Angular, displays a virtual, infinite list. Records are passed to the virtual scroll containing the data to create templates.'
sidebar_label: 'ion-virtual-scroll'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# ion-virtual-scroll

Virtual Scroll displays a virtual, "infinite" list. An array of records
is passed to the virtual scroll containing the data to create templates
for. The template created for each record, referred to as a cell, can
consist of items, headers, and footers. For performance reasons, not every record
in the list is rendered at once; instead a small subset of records (enough to fill the viewport)
are rendered and reused as the user scrolls.

## Approximate Widths and Heights

If the height of items in the virtual scroll are not close to the
default size of `40px`, it is extremely important to provide a value for
the `approxItemHeight` property. An exact pixel-perfect size is not necessary,
but without an estimate the virtual scroll will not render correctly.

The approximate width and height of each template is used to help
determine how many cells should be created, and to help calculate
the height of the scrollable area. Note that the actual rendered size
of each cell comes from the app's CSS, whereas this approximation
is only used to help calculate initial dimensions.

It's also important to know that Ionic's default item sizes have
slightly different heights between platforms, which is perfectly fine.

## Images Within Virtual Scroll

HTTP requests, image decoding, and image rendering can cause jank while
scrolling. In order to better control images, Ionic provides `<ion-img>`
to manage HTTP requests and image rendering. While scrolling through items
quickly, `<ion-img>` knows when and when not to make requests, when and
when not to render images, and only loads the images that are viewable
after scrolling. [Read more about `ion-img`.](img.md)

It's also important for app developers to ensure image sizes are locked in,
and after images have fully loaded they do not change size and affect any
other element sizes. Simply put, to ensure rendering bugs are not introduced,
it's vital that elements within a virtual item does not dynamically change.

For virtual scrolling, the natural effects of the `<img>` are not desirable
features. We recommend using the `<ion-img>` component over the native
`<img>` element because when an `<img>` element is added to the DOM, it
immediately makes a HTTP request for the image file. Additionally, `<img>`
renders whenever it wants which could be while the user is scrolling. However,
`<ion-img>` is governed by the containing `ion-content` and does not render
images while scrolling quickly.

## Virtual Scroll Performance Tips

### iOS Cordova WKWebView

When deploying to iOS with Cordova, it's highly recommended to use the
[WKWebView plugin](https://blog.ionicframework.com/cordova-ios-performance-improvements-drop-in-speed-with-wkwebview/)
in order to take advantage of iOS's higher performing webview. Additionally,
WKWebView is superior at scrolling efficiently in comparison to the older
UIWebView.

### Lock in element dimensions and locations

In order for virtual scroll to efficiently size and locate every item, it's
very important every element within each virtual item does not dynamically
change its dimensions or location. The best way to ensure size and location
does not change, it's recommended each virtual item has locked in its size
via CSS.

### Use `ion-img` for images

When including images within Virtual Scroll, be sure to use
[`ion-img`](img.md) rather than the standard `<img>` HTML element.
With `ion-img`, images are lazy loaded so only the viewable ones are
rendered, and HTTP requests are efficiently controlled while scrolling.

### Set Approximate Widths and Heights

As mentioned above, all elements should lock in their dimensions. However,
virtual scroll isn't aware of the dimensions until after they have been
rendered. For the initial render, virtual scroll still needs to set
how many items should be built. With "approx" property inputs, such as
`approxItemHeight`, we're able to give virtual scroll an approximate size,
therefore allowing virtual scroll to decide how many items should be
created.

### Changing dataset should use `trackBy`

It is possible for the identities of elements in the iterator to change
while the data does not. This can happen, for example, if the iterator
produced from an RPC to the server, and that RPC is re-run. Even if the
"data" hasn't changed, the second response will produce objects with
different identities, and Ionic will tear down the entire DOM and rebuild
it. This is an expensive operation and should be avoided if possible.

### Efficient headers and footer functions

Each virtual item must stay extremely efficient, but one way to really
kill its performance is to perform any DOM operations within section header
and footer functions. These functions are called for every record in the
dataset, so please make sure they're performant.

## React

The Virtual Scroll component is not supported in React.

## Vue

`ion-virtual-scroll` is not supported in Vue. We plan on integrating with existing community-driven solutions for virtual scroll in the near future. Follow our [GitHub issue thread](https://github.com/ionic-team/ionic-framework/issues/17887) for the latest updates.

## Usage

```html
<ion-content>
  <ion-virtual-scroll [items]="items" approxItemHeight="320px">
    <ion-card *virtualItem="let item; let itemBounds = bounds;">
      <div>
        <ion-img [src]="item.imgSrc" [height]="item.imgHeight" [alt]="item.name"></ion-img>
      </div>
      <ion-card-header>
        <ion-card-title>{{ item.name }}</ion-card-title>
      </ion-card-header>
      <ion-card-content>{{ item.content }}</ion-card-content>
    </ion-card>
  </ion-virtual-scroll>
</ion-content>
```

```tsx
export class VirtualScrollPageComponent {
  items: any[] = [];

  constructor() {
    for (let i = 0; i < 1000; i++) {
      this.items.push({
        name: i + ' - ' + images[rotateImg],
        imgSrc: getImgSrc(),
        avatarSrc: getImgSrc(),
        imgHeight: Math.floor(Math.random() * 50 + 150),
        content: lorem.substring(0, Math.random() * (lorem.length - 100) + 100),
      });

      rotateImg++;
      if (rotateImg === images.length) {
        rotateImg = 0;
      }
    }
  }
}

const lorem =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, seddo eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

const images = [
  'bandit',
  'batmobile',
  'blues-brothers',
  'bueller',
  'delorean',
  'eleanor',
  'general-lee',
  'ghostbusters',
  'knight-rider',
  'mirth-mobile',
];

function getImgSrc() {
  const src = 'https://dummyimage.com/600x400/${Math.round( Math.random() * 99999)}/fff.png';
  rotateImg++;
  if (rotateImg === images.length) {
    rotateImg = 0;
  }
  return src;
}

let rotateImg = 0;
```

### Basic

The array of records should be passed to the `items` property on the `ion-virtual-scroll` element.
The data given to the `items` property must be an array. An item template with the `*virtualItem` property is required in the `ion-virtual-scroll`. The `*virtualItem` property can be added to any element.

```html
<ion-virtual-scroll [items]="items">
  <ion-item *virtualItem="let item"> {{ item }} </ion-item>
</ion-virtual-scroll>
```

### Section Headers and Footers

Section headers and footers are optional. They can be dynamically created
from developer-defined functions. For example, a large list of contacts
usually has a divider for each letter in the alphabet. Developers provide
their own custom function to be called on each record. The logic in the
custom function should determine whether to create the section template
and what data to provide to the template. The custom function should
return `null` if a template shouldn't be created.

```html
<ion-virtual-scroll [items]="items" [headerFn]="myHeaderFn">
  <ion-item-divider *virtualHeader="let header"> {{ header }} </ion-item-divider>
  <ion-item *virtualItem="let item"> Item: {{ item }} </ion-item>
</ion-virtual-scroll>
```

Below is an example of a custom function called on every record. It
gets passed the individual record, the record's index number,
and the entire array of records. In this example, after every 20
records a header will be inserted. So between the 19th and 20th records,
between the 39th and 40th, and so on, a `<ion-item-divider>` will
be created and the template's data will come from the function's
returned data.

```ts
myHeaderFn(record, recordIndex, records) {
  if (recordIndex % 20 === 0) {
    return 'Header ' + recordIndex;
  }
  return null;
}
```

### Custom Components

If a custom component is going to be used within Virtual Scroll, it's best
to wrap it with a `<div>` to ensure the component is rendered correctly. Since
each custom component's implementation and internals can be quite different, wrapping
within a `<div>` is a safe way to make sure dimensions are measured correctly.

```html
<ion-virtual-scroll [items]="items">
  <div *virtualItem="let item">
    <my-custom-item [item]="item"> {{ item }} </my-custom-item>
  </div>
</ion-virtual-scroll>
```

## Properties

### approxFooterHeight

|                 |                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Description** | The approximate width of each footer template's cell.<br />This dimension is used to help determine how many cells should<br />be created when initialized, and to help calculate the height of<br />the scrollable area. This height value can only use `px` units.<br />Note that the actual rendered size of each cell comes from the<br />app's CSS, whereas this approximation is used to help calculate<br />initial dimensions before the item has been rendered. |
| **Attribute**   | `approx-footer-height`                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| **Type**        | `number`                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| **Default**     | `30`                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |

### approxHeaderHeight

|                 |                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | The approximate height of each header template's cell.<br />This dimension is used to help determine how many cells should<br />be created when initialized, and to help calculate the height of<br />the scrollable area. This height value can only use `px` units.<br />Note that the actual rendered size of each cell comes from the<br />app's CSS, whereas this approximation is used to help calculate<br />initial dimensions before the item has been rendered. |
| **Attribute**   | `approx-header-height`                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| **Type**        | `number`                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| **Default**     | `30`                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |

### approxItemHeight

|                 |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | It is important to provide this<br />if virtual item height will be significantly larger than the default<br />The approximate height of each virtual item template's cell.<br />This dimension is used to help determine how many cells should<br />be created when initialized, and to help calculate the height of<br />the scrollable area. This height value can only use `px` units.<br />Note that the actual rendered size of each cell comes from the<br />app's CSS, whereas this approximation is used to help calculate<br />initial dimensions before the item has been rendered. |
| **Attribute**   | `approx-item-height`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| **Type**        | `number`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| **Default**     | `45`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |

### footerFn

|                 |                                                                                                                                                                                                                                                                                                                                                             |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | Section footers and the data used within its given<br />template can be dynamically created by passing a function to `footerFn`.<br />The logic within the footer function can decide if the footer template<br />should be used, and what data to give to the footer template. The function<br />must return `null` if a footer cell shouldn't be created. |
| **Attribute**   | `undefined`                                                                                                                                                                                                                                                                                                                                                 |
| **Type**        | `((item: any, index: number, items: any[]) => string \| null \| undefined) \| undefined`                                                                                                                                                                                                                                                                    |
| **Default**     | `undefined`                                                                                                                                                                                                                                                                                                                                                 |

### footerHeight

|                 |                                                                      |
| --------------- | -------------------------------------------------------------------- |
| **Description** | An optional function that maps each item footer within their height. |
| **Attribute**   | `undefined`                                                          |
| **Type**        | `((item: any, index: number) => number) \| undefined`                |
| **Default**     | `undefined`                                                          |

### headerFn

|                 |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | Section headers and the data used within its given<br />template can be dynamically created by passing a function to `headerFn`.<br />For example, a large list of contacts usually has dividers between each<br />letter in the alphabet. App's can provide their own custom `headerFn`<br />which is called with each record within the dataset. The logic within<br />the header function can decide if the header template should be used,<br />and what data to give to the header template. The function must return<br />`null` if a header cell shouldn't be created. |
| **Attribute**   | `undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| **Type**        | `((item: any, index: number, items: any[]) => string \| null \| undefined) \| undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| **Default**     | `undefined`                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |

### headerHeight

|                 |                                                                      |
| --------------- | -------------------------------------------------------------------- |
| **Description** | An optional function that maps each item header within their height. |
| **Attribute**   | `undefined`                                                          |
| **Type**        | `((item: any, index: number) => number) \| undefined`                |
| **Default**     | `undefined`                                                          |

### itemHeight

|                 |                                                                                                                                                                                                                                                                                                                                            |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Description** | An optional function that maps each item within their height.<br />When this function is provides, heavy optimizations and fast path can be taked by<br />`ion-virtual-scroll` leading to massive performance improvements.<br /><br />This function allows to skip all DOM reads, which can be Doing so leads<br />to massive performance |
| **Attribute**   | `undefined`                                                                                                                                                                                                                                                                                                                                |
| **Type**        | `((item: any, index: number) => number) \| undefined`                                                                                                                                                                                                                                                                                      |
| **Default**     | `undefined`                                                                                                                                                                                                                                                                                                                                |

### items

|                 |                                                                                                                                                                                                                                                  |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Description** | The data that builds the templates within the virtual scroll.<br />It's important to note that when this data has changed, then the<br />entire virtual scroll is reset, which is an expensive operation and<br />should be avoided if possible. |
| **Attribute**   | `undefined`                                                                                                                                                                                                                                      |
| **Type**        | `any[] \| undefined`                                                                                                                                                                                                                             |
| **Default**     | `undefined`                                                                                                                                                                                                                                      |

### nodeRender

|                 |                                                                                         |
| --------------- | --------------------------------------------------------------------------------------- |
| **Description** | NOTE: only Vanilla JS API.                                                              |
| **Attribute**   | `undefined`                                                                             |
| **Type**        | `((el: HTMLElement \| null, cell: Cell, domIndex: number) => HTMLElement) \| undefined` |
| **Default**     | `undefined`                                                                             |

### renderFooter

|                 |                                                                                                                                |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| **Description** | NOTE: only JSX API for stencil.<br /><br />Provide a render function for the footer to be rendered. Returns a JSX virtual-dom. |
| **Attribute**   | `undefined`                                                                                                                    |
| **Type**        | `((item: any, index: number) => any) \| undefined`                                                                             |
| **Default**     | `undefined`                                                                                                                    |

### renderHeader

|                 |                                                                                                                                |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| **Description** | NOTE: only JSX API for stencil.<br /><br />Provide a render function for the header to be rendered. Returns a JSX virtual-dom. |
| **Attribute**   | `undefined`                                                                                                                    |
| **Type**        | `((item: any, index: number) => any) \| undefined`                                                                             |
| **Default**     | `undefined`                                                                                                                    |

### renderItem

|                 |                                                                                                                               |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| **Description** | NOTE: only JSX API for stencil.<br /><br />Provide a render function for the items to be rendered. Returns a JSX virtual-dom. |
| **Attribute**   | `undefined`                                                                                                                   |
| **Type**        | `((item: any, index: number) => any) \| undefined`                                                                            |
| **Default**     | `undefined`                                                                                                                   |

## Methods

### checkEnd

|                 |                                                                                                                                                                                           |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | This method marks the tail the items array as dirty, so they can be re-rendered.<br /><br />It's equivalent to calling:<br /><br />`js<br />virtualScroll.checkRange(lastItemLen);<br />` |
| **Signature**   | `checkEnd() => Promise<void>`                                                                                                                                                             |

### checkRange

|                 |                                                                                                                                                                                                                                                       |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | This method marks a subset of items as dirty, so they can be re-rendered. Items should be marked as<br />dirty any time the content or their style changes.<br /><br />The subset of items to be updated can are specifing by an offset and a length. |
| **Signature**   | `checkRange(offset: number, len?: number) => Promise<void>`                                                                                                                                                                                           |

### positionForItem

|                 |                                                              |
| --------------- | ------------------------------------------------------------ |
| **Description** | Returns the position of the virtual item at the given index. |
| **Signature**   | `positionForItem(index: number) => Promise<number>`          |
