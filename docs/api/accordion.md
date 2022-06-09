---
title: "ion-accordion"
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import Props from '@site/static/auto-generated/accordion/props.md';
import Events from '@site/static/auto-generated/accordion/events.md';
import Methods from '@site/static/auto-generated/accordion/methods.md';
import Parts from '@site/static/auto-generated/accordion/parts.md';
import CustomProps from '@site/static/auto-generated/accordion/custom-props.md';
import Slots from '@site/static/auto-generated/accordion/slots.md';

import EncapsulationPill from '@components/page/api/EncapsulationPill';
import APITOCInline from '@components/page/api/APITOCInline';

<EncapsulationPill type="shadow" />

<h2 className="table-of-contents__title">Contents</h2>


Accordions provide collapsible sections in your content to reduce vertical space while providing a way of organizing and grouping information. All `ion-accordion` components should be grouped inside `ion-accordion-group` components.

## Basic Usage

import Basic from '@site/static/usage/accordion/basic/index.md';

<Basic />

## Toggle Accordions

TODO Playground

## Listen for Accordion State Changes

TODO Playground

## Multiple Accordions

TODO  Playground

## Disabling Accordions

### Individual Accordion

Individual accordions can be disabled with the `disabled` property on `ion-accordion`.

import DisableIndividual from '@site/static/usage/accordion/disable-individual/index.md';

<DisableIndividual />

### Accordion Group

The accordion group can be disabled with the `disabled` property on `ion-accordion-group`.

import DisableGroup from '@site/static/usage/accordion/disable-group/index.md';

<DisableGroup />

## Readonly Accordions

### Individual Accordion

Individual accordions can be disabled with the `readonly` property on `ion-accordion`.

import ReadonlyIndividual from '@site/static/usage/accordion/readonly-individual/index.md';

<ReadonlyIndividual />

### Accordion Group

The accordion group can be disabled with the `readonly` property on `ion-accordion-group`.

import ReadonlyGroup from '@site/static/usage/accordion/readonly-group/index.md';

<ReadonlyGroup />

## Anatomy

### Header

The `header` slot is used as the toggle that will expand or collapse your accordion. We recommend you use an `ion-item` here to take advantage of the accessibility and theming functionalities.

When using `ion-item` in the `header` slot, the `ion-item`'s `button` prop is set to `true` and the `detail` prop is set to `false`. In addition, we will also automatically add a toggle icon to the `ion-item`. This icon will automatically be rotated when you expand or collapse the accordion. See [Customizing Icons](#icons) for more information.

### Content

The `content` slot is used as the part of the accordion that is revealed or hidden depending on the state of your accordion. You can place anything here except for another `ion-content` instance as only one instance of `ion-content` should be added per page.

## Customization

### Expansion Styles

There are two built in expansion styles: `compact` and `inset`. This expansion style is set via the `expand` property on `ion-accordion-group`.

When `expand="inset"`, the accordion group is given a border radius. On `md` mode, the entire accordion will shift down when it is opened.

import ExpansionStyles from '@site/static/usage/accordion/customization/expansion-styles/index.md';

<ExpansionStyles />

### Advanced Expansion Styles

You can customize the expansion behavior by styling based on the accordion's state. There are four state classes applied to `ion-accordion`. Styling using these classes can allow you to create advanced state transitions:

| Class Name | Description |
| ---------- | ----------- |
| `.accordion-expanding` | Applied when the accordion is actively expanding |
| `.accordion-expanded` | Applied when the accordion is fully expanded |
| `.accordion-collapsing` | Applied when the accordion is actively collapsing |
| `.accordion-collapsed` | Applied when the accordion is fully collapsed |

If you need to target specific pieces of the accordion, we recommend targeting the element directly. For example, if you want to customize the ion-item in your header slot when the accordion is expanded, you can use the following selector:

```css
ion-accordion.accordion-expanding ion-item[slot="header"],
ion-accordion.accordion-expanded ion-item[slot="header"] {
  --color: red;
}
```

import AdvancedExpansionStyles from '@site/static/usage/accordion/customization/advanced-expansion-styles/index.md';

<AdvancedExpansionStyles />

### Icons

When using an `ion-item` in the `header` slot, we automatically add an `ion-icon`. The type of icon used can be controlled by the `toggleIcon` property, and the slot it is added to can be controlled with the `toggleIconSlot` property.

If you would like to manage the icon yourself or use an icon that is not an `ion-icon`, you can add the `ion-accordion-toggle-icon` class to the icon element.

Regardless of which option you choose, the icon will automatically be rotated when you expand or collapse the accordion.

import Icons from '@site/static/usage/accordion/customization/icons/index.md';

<Icons />

### Theming

TODO Playground

## Accessibility

### Animations

By default, animations are enabled when expanding or collapsing an accordion item. Animations will be automatically disabled when the `prefers-reduced-motion` media query is supported and set to `reduce`. For browsers that do not support this, animations can be disabled by setting the `animated` config in your Ionic Framework app.

TODO Playground

### Keyboard Navigation

When used inside an `ion-accordion-group`, `ion-accordion` has full keyboard support for interacting with the component. The following table details what each key does:

| Key                | Function                                                     |
| ------------------ | ------------------------------------------------------------ |
| `Space` or `Enter` | When focus is on the accordion header, the accordion will collapse or expand depending on the state of the component. |
| `Tab`              | Moves focus to the next focusable element.                   |
| `Shift` + `Tab`    | Moves focus to the previous focusable element.               |
| `Down Arrow`       | - When focus is on an accordion header, moves focus to the next accordion header.  <br />- When focus is on the last accordion header, moves focus to the first accordion header. |
| `Up Arrow`         | - When focus is on an accordion header, moves focus to the previous accordion header.  <br />- When focus is on the first accordion header, moves focus to the last accordion header. |
| `Home`             | When focus is on an accordion header, moves focus to the first accordion header. |
| `End`              | When focus is on an accordion header, moves focus to the last accordion header. |


<Props />
<Events />
<Methods />
<Parts />
<CustomProps />
<Slots />
