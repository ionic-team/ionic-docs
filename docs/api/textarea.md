---
title: "ion-textarea"
---
import Props from '@ionic-internal/component-api/v8/textarea/props.md';
import Events from '@ionic-internal/component-api/v8/textarea/events.md';
import Methods from '@ionic-internal/component-api/v8/textarea/methods.md';
import Parts from '@ionic-internal/component-api/v8/textarea/parts.md';
import CustomProps from '@ionic-internal/component-api/v8/textarea/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v8/textarea/slots.md';

<head>
  <title>Ionic Textarea Component and CSS Properties for Multi-Line Input</title>
  <meta name="description" content="Textarea is for multi-line input. The component accepts native textarea attributes in addition to Ionic properties. Read to learn about use and CSS elements." />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="scoped" />

The textarea component is used for multi-line text input. A native textarea element is rendered inside of the component. The user experience and interactivity of the textarea component is improved by having control over the native textarea.

Unlike the native textarea element, the Ionic textarea does not support loading its value from the inner content. The textarea value should be set in the `value` attribute.

The textarea component accepts the [native textarea attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea) in addition to the Ionic properties.

## Basic Usage

import BasicPlayground from '@site/static/usage/v8/textarea/basic/index.md';

<BasicPlayground />

## Labels

Labels should be used to describe the textarea. They can be used visually, and they will also be read out by screen readers when the user is focused on the textarea. This makes it easy for the user to understand the intent of the textarea. Textarea has several ways to assign a label:

- `label` property: used for plaintext labels
- `label` slot: used for custom HTML labels (experimental)
- `aria-label`: used to provide a label for screen readers but adds no visible label

### Label Placement

Labels will take up the width of their content by default. Developers can use the `labelPlacement` property to control how the label is placed relative to the control.

import LabelPlacement from '@site/static/usage/v8/textarea/label-placement/index.md';

<LabelPlacement />

### Label Slot (experimental)

While plaintext labels should be passed in via the `label` property, if custom HTML is needed, it can be passed through the `label` slot instead.

Note that this feature is considered experimental because it relies on a simulated version of [Web Component slots](https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_templates_and_slots). As a result, the simulated behavior may not exactly match the native slot behavior.

import LabelSlot from '@site/static/usage/v8/textarea/label-slot/index.md';

<LabelSlot />

### No Visible Label

If no visible label is needed, developers should still supply an `aria-label` so the textarea is accessible to screen readers.

import NoVisibleLabel from '@site/static/usage/v8/textarea/no-visible-label/index.md';

<NoVisibleLabel />

## Filled Textareas

Material Design offers filled styles for a textarea. The `fill` property on the item can be set to either `"solid"` or `"outline"`.

Filled textareas can be used on iOS by setting the textarea's `mode` to `md`.

:::warning
Textareas that use `fill` should not be used in an `ion-item` due to styling conflicts between the components.
:::

import Fill from '@site/static/usage/v8/textarea/fill/index.md';

<Fill />

## Helper & Error Text

Helper and error text can be used inside of a textarea with the `helperText` and `errorText` property. The error text will not be displayed unless the `ion-invalid` and `ion-touched` classes are added to the `ion-textarea`. This ensures errors are not shown before the user has a chance to enter data.

In Angular, this is done automatically through form validation. In JavaScript, React and Vue, the class needs to be manually added based on your own validation.

import HelperError from '@site/static/usage/v8/textarea/helper-error/index.md';

<HelperError />

## Textarea Counter

The textarea counter is text that displays under a textarea to notify the user of how many characters have been entered out of the total that the textarea will accept. When adding counter, the default behavior is to format the value that gets displayed as `inputLength` / `maxLength`. This behavior can be customized by passing in a formatter function to the `counterFormatter` property.

import Counter from '@site/static/usage/v8/textarea/counter/index.md';

<Counter />

## Autogrow

When the `autoGrow` property is set to `true`, the textarea will grow and shrink based on its contents.

import AutogrowPlayground from '@site/static/usage/v8/textarea/autogrow/index.md';

<AutogrowPlayground />

## Clear on Edit

Setting the `clearOnEdit` property to `true` will clear the textarea after it has been blurred and then typed in again.

import ClearOnEditPlayground from '@site/static/usage/v8/textarea/clear-on-edit/index.md';

<ClearOnEditPlayground />

## Start and End Slots (experimental)

The `start` and `end` slots can be used to place icons, buttons, or prefix/suffix text on either side of the textarea.

Note that this feature is considered experimental because it relies on a simulated version of [Web Component slots](https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_templates_and_slots). As a result, the simulated behavior may not exactly match the native slot behavior.

:::note
In most cases, [Icon](./icon.md) components placed in these slots should have `aria-hidden="true"`. See the [Icon accessibility docs](https://ionicframework.com/docs/api/icon#accessibility) for more information.

If slot content is meant to be interacted with, it should be wrapped in an interactive element such as a [Button](./button.md). This ensures that the content can be tabbed to.
:::

import StartEndSlots from '@site/static/usage/v8/textarea/start-end-slots/index.md';

<StartEndSlots />

## Theming

import ThemingPlayground from '@site/static/usage/v8/textarea/theming/index.md';

<ThemingPlayground />

## Interfaces

### TextareaChangeEventDetail

```typescript
interface TextareaChangeEventDetail {
  value?: string | null;
}
```

### TextareaCustomEvent

While not required, this interface can be used in place of the `CustomEvent` interface for stronger typing with Ionic events emitted from this component.

```typescript
interface TextareaCustomEvent extends CustomEvent {
  detail: TextareaChangeEventDetail;
  target: HTMLIonTextareaElement;
}
```

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
