---
title: 'ion-accordion'
---

import Props from '@ionic-internal/component-api/v9/accordion/props.mdx';
import Events from '@ionic-internal/component-api/v9/accordion/events.mdx';
import Methods from '@ionic-internal/component-api/v9/accordion/methods.mdx';
import Parts from '@ionic-internal/component-api/v9/accordion/parts.mdx';
import CustomProps from '@ionic-internal/component-api/v9/accordion/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v9/accordion/slots.mdx';

<head>
  <title>ion-accordion: Accordion Components: How to Build & Examples</title>
  <meta
    name="description"
    content="Ion-accordion components provide collapsible sections in content to reduce vertical space and organize information. Learn how to build one and explore examples."
  />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />

Accordions provide collapsible sections in your content to reduce vertical space while providing a way of organizing and grouping information. All `ion-accordion` components should be grouped inside `ion-accordion-group` components.

## Basic Usage

import Basic from '@site/static/usage/v9/accordion/basic/index.md';

<Basic />

## Toggle Accordions

Which accordion is open is controlled by setting the `value` property on `ion-accordion-group`. Setting this property allows developers to programmatically expand or collapse certain accordions.

import Toggle from '@site/static/usage/v9/accordion/toggle/index.md';

<Toggle />

## Listen for Accordion State Changes

:::caution
Most `ionChange` events emitted by other components such as [Input](./input) and [Textarea](./textarea) bubble. As a result, these events will bubble up and cause your `ionChange` listener on the Accordion Group to fire if the associated components are used inside of an Accordion.

When using other components that emit `ionChange` inside of Accordion it is recommended to have the `ionChange` callback on Accordion Group check the `target` key on the event passed to the callback to verify that `ionChange` is coming from the Accordion Group and not any descendants.
:::

Developers can listen for the `ionChange` event to be notified when accordions expand or collapse.

import ListenChanges from '@site/static/usage/v9/accordion/listen-changes/index.md';

<ListenChanges />

## Multiple Accordions

Developers can allow multiple accordions to be open at once with the `multiple` property.

import Multiple from '@site/static/usage/v9/accordion/multiple/index.md';

<Multiple />

## Disabling Accordions

### Individual Accordion

Individual accordions can be disabled with the `disabled` property on `ion-accordion`.

import DisableIndividual from '@site/static/usage/v9/accordion/disable/individual/index.md';

<DisableIndividual />

### Accordion Group

The accordion group can be disabled with the `disabled` property on `ion-accordion-group`.

import DisableGroup from '@site/static/usage/v9/accordion/disable/group/index.md';

<DisableGroup />

## Readonly Accordions

### Individual Accordion

Individual accordions can be disabled with the `readonly` property on `ion-accordion`.

import ReadonlyIndividual from '@site/static/usage/v9/accordion/readonly/individual/index.md';

<ReadonlyIndividual />

### Accordion Group

The accordion group can be disabled with the `readonly` property on `ion-accordion-group`.

import ReadonlyGroup from '@site/static/usage/v9/accordion/readonly/group/index.md';

<ReadonlyGroup />

## Anatomy

### Header

The `header` slot is used as the toggle that will expand or collapse your accordion. We recommend you use an `ion-item` here to take advantage of the accessibility and theming functionalities.

When using `ion-item` in the `header` slot, the `ion-item`'s `button` prop is set to `true` and the `detail` prop is set to `false`. In addition, we will also automatically add a toggle icon to the `ion-item`. This icon will automatically be rotated when you expand or collapse the accordion. Refer to [Customizing Icons](#icons) for more information.

### Content

The `content` slot is used as the part of the accordion that is revealed or hidden depending on the state of your accordion. You can place anything here except for another `ion-content` instance as only one instance of `ion-content` should be added per page.

## Customization

### Expansion Styles

There are two built in expansion styles: `compact` and `inset`. This expansion style is set via the `expand` property on `ion-accordion-group`.

When `expand="inset"`, the accordion group is given a border radius. On `md` mode, the entire accordion will shift down when it is opened.

import ExpansionStyles from '@site/static/usage/v9/accordion/customization/expansion-styles/index.md';

<ExpansionStyles />

### Advanced Expansion Styles

You can customize the expansion behavior by styling based on the accordion's state. There are four state classes applied to `ion-accordion`. Styling using these classes can allow you to create advanced state transitions:

| Class Name              | Description                                       |
| ----------------------- | ------------------------------------------------- |
| `.accordion-expanding`  | Applied when the accordion is actively expanding  |
| `.accordion-expanded`   | Applied when the accordion is fully expanded      |
| `.accordion-collapsing` | Applied when the accordion is actively collapsing |
| `.accordion-collapsed`  | Applied when the accordion is fully collapsed     |

If you need to target specific pieces of the accordion, we recommend targeting the element directly. For example, if you want to customize the ion-item in your header slot when the accordion is expanded, you can use the following selector:

```css
ion-accordion.accordion-expanding ion-item[slot='header'],
ion-accordion.accordion-expanded ion-item[slot='header'] {
  --color: red;
}
```

import AdvancedExpansionStyles from '@site/static/usage/v9/accordion/customization/advanced-expansion-styles/index.md';

<AdvancedExpansionStyles />

### Icons

When using an `ion-item` in the `header` slot, we automatically add an `ion-icon`. The type of icon used can be controlled by the `toggleIcon` property, and the slot it is added to can be controlled with the `toggleIconSlot` property.

If you would like to manage the icon yourself or use an icon that is not an `ion-icon`, you can add the `ion-accordion-toggle-icon` class to the icon element.

Regardless of which option you choose, the icon will automatically be rotated when you expand or collapse the accordion.

import Icons from '@site/static/usage/v9/accordion/customization/icons/index.md';

<Icons />

### Theming

Since `ion-accordion` acts as a shell around the header and content elements, you can easily theme the accordion however you would like. You can theme the header by targeting the slotted `ion-item`. Since you are using `ion-item`, you also have access to all of the [ion-item CSS Variables](./item#css-custom-properties) and [ion-item Shadow Parts](./item#css-shadow-parts). Theming the content is also easily achieved by targeting the element that is in the `content` slot.

import Theming from '@site/static/usage/v9/accordion/customization/theming/index.md';

<Theming />

## Accessibility

### Animations

By default, animations are enabled when expanding or collapsing an accordion item. Animations will be automatically disabled when the `prefers-reduced-motion` media query is supported and set to `reduce`. For browsers that do not support this, animations can be disabled by setting the `animated` config in your Ionic Framework app.

import AccessibilityAnimations from '@site/static/usage/v9/accordion/accessibility/animations/index.md';

<AccessibilityAnimations />

### Keyboard Interactions

When used inside an `ion-accordion-group`, `ion-accordion` has full keyboard support for interacting with the component. The following table details what each key does:

| Key                                  | Description                                                                                                                                                                          |
| ------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| <kbd>Space</kbd> or <kbd>Enter</kbd> | When focus is on the accordion header, the accordion will collapse or expand depending on the state of the component.                                                                |
| <kbd>Tab</kbd>                       | Moves focus to the next focusable element.                                                                                                                                           |
| <kbd>Shift</kbd> + <kbd>Tab</kbd>    | Moves focus to the previous focusable element.                                                                                                                                       |
| <kbd>Down Arrow</kbd>                | - When focus is on an accordion header, moves focus to the next accordion header. <br />- When focus is on the last accordion header, moves focus to the first accordion header.     |
| <kbd>Up Arrow</kbd>                  | - When focus is on an accordion header, moves focus to the previous accordion header. <br />- When focus is on the first accordion header, moves focus to the last accordion header. |
| <kbd>Home</kbd>                      | When focus is on an accordion header, moves focus to the first accordion header.                                                                                                     |
| <kbd>End</kbd>                       | When focus is on an accordion header, moves focus to the last accordion header.                                                                                                      |

## Performance

### Animations

The accordion animation works by knowing the height of the `content` slot when the animation starts. The accordion expects that this height will remain consistent throughout the animation. As a result, developers should avoid performing any operation that may change the height of the content during the animation.

For example, lazily loading images may cause layout shifts as they load. As the animation plays, a lazily loaded image (such as a native `<img>` with `loading="lazy"`) loads its data and changes its dimensions to fit, which can change the height of the `content` slot. Developers have a few options for avoiding this:

1. Load images eagerly by omitting `loading="lazy"`. An `<img>` does not lazy load by default, so the image loads up front instead of during the animation. This is the simplest option and works well if you have small images that do not significantly benefit from lazy loading.

2. Reserve space for the image ahead of time. If you need lazy loading and know the dimensions of the images (such as loading icons of the same size), set a width and height on the `<img>` using its attributes or CSS. This gives you the benefit of lazy loading while avoiding layout shifts.

3. If neither of these options are applicable, developers may want to consider disabling animations altogether by using the `animated` property on [ion-accordion-group](./accordion-group).

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
