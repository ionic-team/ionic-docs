---
title: "ion-item"
---
import Props from '@ionic-internal/component-api/v7/item/props.md';
import Events from '@ionic-internal/component-api/v7/item/events.md';
import Methods from '@ionic-internal/component-api/v7/item/methods.md';
import Parts from '@ionic-internal/component-api/v7/item/parts.md';
import CustomProps from '@ionic-internal/component-api/v7/item/custom-props.md';
import Slots from '@ionic-internal/component-api/v7/item/slots.md';

import useBaseUrl from '@docusaurus/useBaseUrl';
import BestPracticeFigure from '@components/global/BestPracticeFigure';

<head>
  <title>ion-item: Input, Edit, or Delete iOS and Android Item Elements</title>
  <meta name="description" content="ion-item elements for iOS/Android contain text, icons, images, and other custom elements. They're placed in a list and can be input, deleted, edited, and more." />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

Items are elements that can contain text, icons, avatars, images, inputs, and any other native or custom elements. Items should only be used as rows in a [List](./list) with other items. Items can be swiped, deleted, reordered, edited, and more.


## Basic Usage

Items left align text and add an ellipsis when the text is wider than the item. We can modify this behavior using the CSS Utilities provided by Ionic Framework, such as using `.ion-text-wrap` in the below example. See the [CSS Utilities Documentation](/docs/layout/css-utilities) for more classes that can be added to an item to transform the text.

import Basic from '@site/static/usage/v7/item/basic/index.md';

<Basic />


## Content Types

While items in a list take many forms, they typically support 5 different content types: supporting visuals, text, metadata, actions, and controls. However, not all of these content types should be used together at the same time. The following guide shows the different content types as well as how to properly utilize them in an application.

### Supporting Visuals

Supporting visuals are decorative icons or other adornments for an item. Common examples of supporting visuals are [Avatars](./avatar), [Icons](./icon), and [Thumbnails](./thumbnail). Since this content is not required to understand the intent of the item, it is typically hidden from screen readers using `aria-hidden="true"`.

If a visual is required to interact with the item, such as an icon button, then the visual is an [action](#actions) not a supporting visual.

<BestPracticeFigure 
  text="Supporting visuals should be rendered in a consistent manner. This makes the information in each item easier to parse."
  doText="Align visuals on the same side in a list"
  doNotText="Don't render visuals with different alignments in the same list"
  doImage={<img alt="A list with several items. Each item has an icon and visible text describing the item. The icon in each item is rendered at the start of the line." src={useBaseUrl('img/item/visuals-do.jpg')} />}
  doNotImage={<img alt="A list with several items. Each item has an icon and visible text describing the item. Some icons are rendered at the start of the line, and some icons are rendered at the end of the line" src={useBaseUrl('img/item/visuals-do-not.jpg')} />}
/>

In the example below, we are creating two lists with supporting visuals. The first list uses icons, and the second list uses avatars. The visuals are decorative, so they all have `aria-hidden="true"`. Additionally, they are presented consistently in the `start` slot.

import SupportingVisuals from '@site/static/usage/v7/item/content-types/supporting-visuals/index.md';

<SupportingVisuals />

### Text

The text content type includes form control labels or other visible text. This text serves to indicate the intent of the item. Try to keep the text short and to the point.

<BestPracticeFigure 
  text={<>If you find that you need a few more sentences to clarify the item's purpose, consider moving the additional sentences to a <a href={useBaseUrl('api/note')}>Note</a> at the bottom of the list. Adding the item to its own list makes it clear which item the text is associated with.</>}
  doText="Move long text outside of the list"
  doNotText="Don't try to fit long text in an item"
  doImage={<img alt="A list with an item that contains a checked checkbox indicating the user wants to receive emails. Text describing how often the user will receive emails as well as how to unsubscribe from emails is placed underneath the list." src={useBaseUrl('img/item/long-text-do.jpg')} />}
  doNotImage={<img alt="A list with an item that contains a checked checkbox indicating the user wants to receive emails. Text describing how often the user will receive emails as well as how to unsubscribe from emails is placed as a single paragraph inline with the checkbox, making the text hard to read and increasing the height of the item." src={useBaseUrl('img/item/long-text-do-not.jpg')} />}
/>

In the example below, we are creating a list with different types of text. The "First Name" and "Last Name" labels serve to indicate what to type into the text inputs.

The "Allow Notifications" label on the toggle has additional text underneath it that notes users can disable notifications. Since this text is short, it is placed inside of the item.

Below that list is another list containing a textarea with a [Note](./note) containing long text underneath. The textarea was placed in its own list to make it apparent that the long text is associated with the textarea and not any other fields.

import Text from '@site/static/usage/v7/item/content-types/text/index.md';

<Text />

### Metadata

Metadata provides additional context for an item such as status text or counts. Components like [Badge](./badge) or [Note](./note) are great ways of showing metadata.

<BestPracticeFigure 
  text="Limit the amount of metadata you include to only the most relevant information."
  doText="Add only the most important metadata"
  doNotText="Don't add too much metadata as it can overwhelm or confuse the user."
  doImage={<img alt="A list that contains several items, each representing a different to-do list. A count of how many tasks in each to-do list is placed at the end of each item." src={useBaseUrl('img/item/metadata-relevant-do.jpg')} />}
  doNotImage={<img alt="A list that contains several items, each representing a different to-do list. Two counts are placed at the end of each item: One count that states the total number of tasks, and another count that states the total number of tasks that are due today." src={useBaseUrl('img/item/metadata-relevant-do-not.jpg')} />}
/>

<BestPracticeFigure 
  text="Developers should also consider how important the metadata is. Drawing attention to the metadata may be helpful for the user or it may distract them from the more important information depending on the use case."
  doText="Prioritize the most important content."
  cautionText="Prioritized metadata may distract from other important content."
  doImage={<img alt="A list that contains several items, each representing a different to-do list. A count of how many tasks in each to-do list is placed at the end of each item." src={useBaseUrl('img/item/metadata-relevant-do.jpg')} />}
  cautionImage={<img alt="A list that contains several items, each representing a different to-do list. A count of how many tasks in each to-do list is placed at the end of each item. However, the count is highlighted in blue which draws the user's attention away from the name of the to-do list." src={useBaseUrl('img/item/metadata-important-caution.jpg')} />}
/>

In the example below, we are creating two lists with different kinds of metadata. The first list uses [Note](./note) to show how many tasks are in each to-do list.

The second list mimics the iOS Mail app to show an inbox. This list makes use of custom metadata including an "unread message" indicator in the "start" slot as well as a timestamp and custom detail icon in the "end" slot. The "unread message" indicator is highlighted in blue to draw the user's attention to the unread messages, while the timestamp is more subtle.

import Metadata from '@site/static/usage/v7/item/content-types/metadata/index.md';

<Metadata />

### Actions

Actions are interactive elements that do something when you activate them. An item can have multiple actions displayed on a line. However, developers should ensure that each action's tap target is large enough to be usable.

Developers should avoid creating <a href="https://dequeuniversity.com/rules/axe/4.4/nested-interactive">nested interactives</a> which can break the user experience with screen readers. For example, developers should avoid adding a button inside the main content of the Item if the `button` property is set to `true`.

<BestPracticeFigure 
  text={<>Actions can be added by using the <a href={useBaseUrl('api/item-sliding')}>Item Sliding</a> component. Actions can also be placed directly inside of the Item without the use of Item Sliding, but this should be limited to no more than 2 actions.</>}
  doText={<>Use an <a href={useBaseUrl('api/item-sliding')}>Item Sliding</a> to reveal multiple actions by swiping on the Item.</>}
  doNotText="Don't put more than 2 actions within an Item."
  doImage={<img alt="A list that contains several items, each representing a contact. Each item has text that states the contact's name as well as several actions including pinning the contact, sharing the contact, and deleting the contact. These actions are revealed by swiping on the item." src={useBaseUrl('img/item/actions-do.jpg')} />}
  doNotImage={<img alt="A list that contains several items, each representing a contact. Each item has text that states the contact's name as well as several actions including pinning the contact, sharing the contact, and deleting the contact. The actions are placed directly on the item. Since there are so many actions, some of the text is cut off." src={useBaseUrl('img/item/actions-do-not.jpg')} />}
/>

In the example below, we are creating a list of contacts. Each item is a stubbed button intended to bring you to the full contact page for that item. There are additional actions associated with each item that users can reveal by swiping on the item.

import Actions from '@site/static/usage/v7/item/content-types/actions/index.md';

<Actions />

### Controls

Controls are form components such as checkboxes, inputs, radios, and more. Each item in a list should have at most two controls due to screen space constraints.

<BestPracticeFigure 
  text={<>Metadata such as helper text or character counts should not be used on form controls in list views. If such metadata is needed, the form control should be placed outside of a list. <a href={useBaseUrl('api/input#filled-inputs')}>Filled Inputs</a> are a great way of visually defining the input container outside of a list.</>}
  doText="Place inputs with metadata outside of the list."
  doNotText="Don't put metadata for inputs in the list."
  doImage={<img alt="There is an email input and a password input. Both have helper text associated with them. Since both are placed outside of a list it is clear which input each helper text is associated with." src={useBaseUrl('img/item/controls-metadata-list-do.jpg')} />}
  doNotImage={<img alt="There is a list containing an email input and a password input. Both have helper texts associated with them. However, the divider between each item and between the helper text makes it hard to tell which input each helper text is associated with." src={useBaseUrl('img/item/controls-metadata-list-do-not.jpg')} />}
/>

<BestPracticeFigure 
  text={<>Alternatively, the metadata can be placed in a <a href={useBaseUrl('api/note')}>Note</a> at the bottom of the list.</>}
  doText="Place metadata for inputs at the end of a list."
  doNotText="Don't put metadata for inputs in the list."
  doImage={<img alt="There are two lists of inputs. The first list contains a password input. Below that list contains text that says 'Password must be at least 16 characters'. The second list contains an email input. This second list is separated so the password length requirement text is clearly associated with the password input above." src={useBaseUrl('img/item/controls-metadata-do.jpg')} />}
  doNotImage={<img alt="There is one list of inputs. One of the inputs is a password input with text below the input that says 'Password must be at least 16 characters'. However, this text is placed directly above another input, so it's not immediately clear which input the text is associated with." src={useBaseUrl('img/item/controls-metadata-do-not.jpg')} />}
/>

<BestPracticeFigure 
  text={<>Items should typically have no more than two controls. If you need more controls, consider adding the additional controls in a <a href="useBaseUrl('api/modal')">Modal</a> that is accessible from the item.</>}
  doText="Move additional controls to a submenu accessible from the item."
  doNotText="Don't use more than two controls within an item."
  doImage={<img alt="There is one list of inputs. One of the inputs is a password input with text below the input that says 'Password must be at least 16 characters'. However, this text is placed directly above another input, so it's not immediately clear which input the text is associated with." src={useBaseUrl('img/item/controls-count-do.jpg')} />}
  doNotImage={<img alt="There are two lists of inputs. The first list contains a password input. Below that list contains text that says 'Password must be at least 16 characters'. The second list contains an email input. This second list is separated so the password length requirement text is clearly associated with the password input above." src={useBaseUrl('img/item/controls-count-do-not.jpg')} />}
/>

In the example below, we are creating a list of to-do tasks. Each item has a checkbox and an input. The checkbox lets the user mark a task as complete, and the input lets the user change the name of the task.

import Controls from '@site/static/usage/v7/item/content-types/controls/index.md';

<Controls />


## Clickable Items

An item is considered "clickable" if it has an `href` or `button` property set. Clickable items have a few visual differences that indicate they can be interacted with. For example, a clickable item receives the ripple effect upon activation in `md` mode, has a highlight when activated in `ios` mode, and has a [detail arrow](#detail-arrows) by default in `ios` mode.

import Clickable from '@site/static/usage/v7/item/clickable/index.md';

<Clickable />


## Detail Arrows

By default [clickable items](#clickable-items) will display a right arrow icon on `ios` mode. To hide the right arrow icon on clickable elements, set the `detail` property to `false`. To show the right arrow icon on an item that doesn't display it naturally, set the `detail` property to `true`.

import DetailArrows from '@site/static/usage/v7/item/detail-arrows/index.md';

<DetailArrows />


<!--

TODO add this functionality back as a css variable

This feature is not enabled by default on clickable items for the `md` mode, but it can be enabled by setting the following CSS variable:

```css
--item-detail-push-show: true;
```

See the [theming documentation](/docs/theming/css-variables) for more information.

-->


## Item Lines

Items show an inset bottom border by default. The border has padding on the left and does not appear under any content that is slotted in the `"start"` slot. The `lines` property can be modified to `"full"` or `"none"` which will show a full width border or no border, respectively.

import Lines from '@site/static/usage/v7/item/lines/index.md';

<Lines />

## Buttons in Items

Buttons are styled smaller inside of items than when they are outside of them. To make the button size match buttons outside of an item, set the `size` attribute to `"default"`.

import Buttons from '@site/static/usage/v7/item/buttons/index.md';

<Buttons />

## Item Inputs

import Inputs from '@site/static/usage/v7/item/inputs/index.md';

<Inputs />

## Theming

### Colors

import Colors from '@site/static/usage/v7/item/theming/colors/index.md';

<Colors />

### CSS Shadow Parts

import CSSParts from '@site/static/usage/v7/item/theming/css-shadow-parts/index.md';

<CSSParts />

### CSS Custom Properties

import CSSProps from '@site/static/usage/v7/item/theming/css-properties/index.md';

<CSSProps />


### Input Highlight

Items containing an input will highlight the bottom border of the input with a different color when focused, valid, or invalid. By default, `md` items have a highlight with a height set to `2px` and `ios` has no highlight (technically the height is set to `0`). The height can be changed using the `--highlight-height` CSS property. To turn off the highlight, set this variable to `0`.

The highlight color changes based on the item state, but all of the states use Ionic colors by default. When focused, the input highlight will use the `primary` color. If the input is valid it will use the `success` color, and invalid inputs will use the `danger` color. This can be customized using the provided CSS properties.

import InputHighlight from '@site/static/usage/v7/item/theming/input-highlight/index.md';

<InputHighlight />

## Guidelines

The following guidelines will help ensure your list items are easy to understand and use.

1. Items should only be used inside of [Lists](./list).
2. Items inside of a list should be presented in a consistent format. For example, if your items present decorative icons, the icons should be positioned in the same way between items.
3. Items should never render [nested interactives](https://dequeuniversity.com/rules/axe/4.4/nested-interactive). Screen readers are unable to select the correct interactive element when nested interactives are used. For example, avoid placing a button inside of an `ion-item` that has `button="true"`.
4. Use [content types](#content-types) correctly. The Item component is designed to be a row in a [List](./list) and should not be used as a general purpose container.

## Properties
<Props />

## Events
<Events />

## Methods
<Methods />

## CSS Shadow Parts
<Parts />

## CSS Custom Properties
<CustomProps />

## Slots
<Slots />
