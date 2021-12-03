---
sidebar_label: 'ion-content'
demoUrl: '/docs/demos/api/content/index.html'
demoSourceUrl: 'https://github.com/ionic-team/ionic-docs/tree/main/static/demos/api/content/index.html'
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# ion-content

The content component provides an easy to use content area with some useful methods
to control the scrollable area. There should only be one content in a single
view.

Content, along with many other Ionic components, can be customized to modify its padding, margin, and more using the global styles provided in the [CSS Utilities](../layout/css-utilities.md) or by individually styling it using CSS and the available [CSS Custom Properties](#css-custom-properties).

## Fixed Content

In order to place elements outside of the scrollable area, `slot="fixed"` can be added to the element. This will absolutely position the element placing it in the top left. In order to place the element in a different position, style it using [top, right, bottom, and left](https://developer.mozilla.org/en-US/docs/Web/CSS/position).

## Usage

<Tabs groupId="framework" defaultValue="angular" values={[{ value: 'angular', label: 'Angular' }, { value: 'javascript', label: 'Javascript' }, { value: 'react', label: 'React' }, { value: 'stencil', label: 'Stencil' }, { value: 'vue', label: 'Vue' }]}>

<TabItem value="angular">

```html
<ion-content
  [scrollEvents]="true"
  (ionScrollStart)="logScrollStart()"
  (ionScroll)="logScrolling($event)"
  (ionScrollEnd)="logScrollEnd()"
>
  <h1>Main Content</h1>

  <div slot="fixed">
    <h1>Fixed Content</h1>
  </div>
</ion-content>
```

</TabItem>

<TabItem value="javascript">

```html
<ion-content>
  <h1>Main Content</h1>

  <div slot="fixed">
    <h1>Fixed Content</h1>
  </div>
</ion-content>
```

```javascript
var content = document.querySelector('ion-content');
content.scrollEvents = true;
content.addEventListener('ionScrollStart', () => console.log('scroll start'));
content.addEventListener('ionScroll', (ev) => console.log('scroll', ev.detail));
content.addEventListener('ionScrollEnd', () => console.log('scroll end'));
```

</TabItem>

<TabItem value="react">

```tsx
import React from 'react';
import { IonContent } from '@ionic/react';

const ContentExample: React.FC = () => (
  <IonContent scrollEvents={true} onIonScrollStart={() => {}} onIonScroll={() => {}} onIonScrollEnd={() => {}}>
    <h1>Main Content</h1>

    <div slot="fixed">
      <h1>Fixed Content</h1>
    </div>
  </IonContent>
);
```

</TabItem>

<TabItem value="stencil">

```tsx
import { Component, h } from '@stencil/core';

@Component({
  tag: 'content-example',
  styleUrl: 'content-example.css',
})
export class ContentExample {
  logScrollStart() {
    console.log('Scroll start');
  }

  logScrolling(ev) {
    console.log('Scrolling', ev);
  }

  logScrollEnd() {
    console.log('Scroll end');
  }

  render() {
    return [
      <ion-content
        scrollEvents={true}
        onIonScrollStart={() => this.logScrollStart()}
        onIonScroll={(ev) => this.logScrolling(ev)}
        onIonScrollEnd={() => this.logScrollEnd()}
      >
        <h1>Main Content</h1>

        <div slot="fixed">
          <h1>Fixed Content</h1>
        </div>
      </ion-content>,
    ];
  }
}
```

</TabItem>

<TabItem value="vue">

```html
<template>
  <ion-content
    :scroll-events="true"
    @ionScrollStart="logScrollStart()"
    @ionScroll="logScrolling($event)"
    @ionScrollEnd="logScrollEnd()"
  >
    <h1>Main Content</h1>

    <div slot="fixed">
      <h1>Fixed Content</h1>
    </div>
  </ion-content>
</template>

<script>
  import { IonContent } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonContent },
  });
</script>
```

</TabItem>

</Tabs>

## Properties

### color

|                 |                                                                                                                                                                                                                                                                                  |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | The color to use from your application's color palette.<br />Default options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`.<br />For more information on colors, see [theming](../theming/basics.md). |
| **Attribute**   | `color`                                                                                                                                                                                                                                                                          |
| **Type**        | `string \| undefined`                                                                                                                                                                                                                                                            |
| **Default**     | `undefined`                                                                                                                                                                                                                                                                      |

### forceOverscroll

|                 |                                                                                                                                                                                                                                                                            |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | If `true` and the content does not cause an overflow scroll, the scroll interaction will cause a bounce.<br />If the content exceeds the bounds of ionContent, nothing will change.<br />Note, the does not disable the system bounce on iOS. That is an OS level setting. |
| **Attribute**   | `force-overscroll`                                                                                                                                                                                                                                                         |
| **Type**        | `boolean \| undefined`                                                                                                                                                                                                                                                     |
| **Default**     | `undefined`                                                                                                                                                                                                                                                                |

### fullscreen

|                 |                                                                                                                                                    |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | If `true`, the content will scroll behind the headers<br />and footers. This effect can easily be seen by setting the toolbar<br />to transparent. |
| **Attribute**   | `fullscreen`                                                                                                                                       |
| **Type**        | `boolean`                                                                                                                                          |
| **Default**     | `false`                                                                                                                                            |

### scrollEvents

|                 |                                                                                                                                                                           |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | Because of performance reasons, ionScroll events are disabled by default, in order to enable them<br />and start listening from (ionScroll), set this property to `true`. |
| **Attribute**   | `scroll-events`                                                                                                                                                           |
| **Type**        | `boolean`                                                                                                                                                                 |
| **Default**     | `false`                                                                                                                                                                   |

### scrollX

|                 |                                                                                         |
| --------------- | --------------------------------------------------------------------------------------- |
| **Description** | If you want to enable the content scrolling in the X axis, set this property to `true`. |
| **Attribute**   | `scroll-x`                                                                              |
| **Type**        | `boolean`                                                                               |
| **Default**     | `false`                                                                                 |

### scrollY

|                 |                                                                                           |
| --------------- | ----------------------------------------------------------------------------------------- |
| **Description** | If you want to disable the content scrolling in the Y axis, set this property to `false`. |
| **Attribute**   | `scroll-y`                                                                                |
| **Type**        | `boolean`                                                                                 |
| **Default**     | `true`                                                                                    |

## Events

| Name                                 | Description                                                 |
| ------------------------------------ | ----------------------------------------------------------- |
| `ionScroll`                          | Emitted while scrolling. This event is disabled by default. |
| Look at the property: `scrollEvents` |
| `ionScrollEnd`                       | Emitted when the scroll has ended.                          |
| `ionScrollStart`                     | Emitted when the scroll has started.                        |

## Methods

### getScrollElement

|                 |                                                                                                                                                                                                                                                                                                                                                                                                |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Description** | Get the element where the actual scrolling takes place.<br />This element can be used to subscribe to `scroll` events or manually modify<br />`scrollTop`. However, it's recommended to use the API provided by `ion-content`:<br /><br />i.e. Using `ionScroll`, `ionScrollStart`, `ionScrollEnd` for scrolling events<br />and `scrollToPoint()` to scroll the content into a certain point. |
| **Signature**   | `getScrollElement() => Promise<HTMLElement>`                                                                                                                                                                                                                                                                                                                                                   |

### scrollByPoint

|                 |                                                                          |
| --------------- | ------------------------------------------------------------------------ |
| **Description** | Scroll by a specified X/Y distance in the component.                     |
| **Signature**   | `scrollByPoint(x: number, y: number, duration: number) => Promise<void>` |

### scrollToBottom

|                 |                                                      |
| --------------- | ---------------------------------------------------- |
| **Description** | Scroll to the bottom of the component.               |
| **Signature**   | `scrollToBottom(duration?: number) => Promise<void>` |

### scrollToPoint

|                 |                                                                                                                     |
| --------------- | ------------------------------------------------------------------------------------------------------------------- |
| **Description** | Scroll to a specified X/Y location in the component.                                                                |
| **Signature**   | `scrollToPoint(x: number \| undefined \| null, y: number \| undefined \| null, duration?: number) => Promise<void>` |

### scrollToTop

|                 |                                                   |
| --------------- | ------------------------------------------------- |
| **Description** | Scroll to the top of the component.               |
| **Signature**   | `scrollToTop(duration?: number) => Promise<void>` |

## CSS Shadow Parts

| Name         | Description                              |
| ------------ | ---------------------------------------- |
| `background` | The background of the content.           |
| `scroll`     | The scrollable container of the content. |

## CSS Custom Properties

| Name                | Description                                                                                                |
| ------------------- | ---------------------------------------------------------------------------------------------------------- |
| `--background`      | Background of the content                                                                                  |
| `--color`           | Color of the content                                                                                       |
| `--keyboard-offset` | Keyboard offset of the content                                                                             |
| `--offset-bottom`   | Offset bottom of the content                                                                               |
| `--offset-top`      | Offset top of the content                                                                                  |
| `--padding-bottom`  | Bottom padding of the content                                                                              |
| `--padding-end`     | Right padding if direction is left-to-right, and left padding if direction is right-to-left of the content |
| `--padding-start`   | Left padding if direction is left-to-right, and right padding if direction is right-to-left of the content |
| `--padding-top`     | Top padding of the content                                                                                 |

## Slots

| Name    | Description                                                          |
| ------- | -------------------------------------------------------------------- |
| ``      | Content is placed in the scrollable area if provided without a slot. |
| `fixed` | Should be used for fixed content that should not scroll.             |
