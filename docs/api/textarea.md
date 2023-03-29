---
title: "ion-textarea"
---
import Props from '@ionic-internal/component-api/v7/textarea/props.md';
import Events from '@ionic-internal/component-api/v7/textarea/events.md';
import Methods from '@ionic-internal/component-api/v7/textarea/methods.md';
import Parts from '@ionic-internal/component-api/v7/textarea/parts.md';
import CustomProps from '@ionic-internal/component-api/v7/textarea/custom-props.md';
import Slots from '@ionic-internal/component-api/v7/textarea/slots.md';

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

import BasicPlayground from '@site/static/usage/v7/textarea/basic/index.md';

<BasicPlayground />

## Label Placement

Labels will take up the width of their content by default. Developers can use the `labelPlacement` property to control how the label is placed relative to the control.

import Labels from '@site/static/usage/v7/textarea/label-placement/index.md';

<LabelPlacement />

## Filled Textareas

Material Design offers filled styles for a textarea. The `fill` property on the item can be set to either `"solid"` or `"outline"`.

Since the `fill` styles visually defines the textarea container, textareas that use `fill` should not be used in `ion-item`.

import Fill from '@site/static/usage/v7/textarea/fill/index.md';

<Fill />

## Helper & Error Text

Helper and error text can be used inside of a textarea with the `helperText` and `errorText` property. The error text will not be displayed unless the `ion-invalid` and `ion-touched` classes are added to the `ion-textarea`. This ensures errors are not shown before the user has a chance to enter data.

In Angular, this is done automatically through form validation. In JavaScript, React and Vue, the class needs to be manually added based on your own validation.

import HelperError from '@site/static/usage/v7/textarea/helper-error/index.md';

<HelperError />

## Textarea Counter

The textarea counter is text that displays under a textarea to notify the user of how many characters have been entered out of the total that the textarea will accept. When adding counter, the default behavior is to format the value that gets displayed as `inputLength` / `maxLength`. This behavior can be customized by passing in a formatter function to the `counterFormatter` property.

import Counter from '@site/static/usage/v7/textarea/counter/index.md';

<Counter />

## Autogrow

When the `autoGrow` property is set to `true`, the textarea will grow and shrink based on its contents.

import AutogrowPlayground from '@site/static/usage/v7/textarea/autogrow/index.md';

<AutogrowPlayground />

## Clear on Edit

Setting the `clearOnEdit` property to `true` will clear the textarea after it has been blurred and then typed in again.

import ClearOnEditPlayground from '@site/static/usage/v7/textarea/clear-on-edit/index.md';

<ClearOnEditPlayground />

## Migrating from Legacy Textarea Syntax

A simpler textarea syntax was introduced in Ionic 7.0. This new syntax reduces the boilerplate required to setup an textarea, resolves accessibility issues, and improves the developer experience.

Developers can perform this migration one textarea at a time. While developers can continue using the legacy syntax, we recommend migrating as soon as possible.


### Using the Modern Syntax

Using the modern syntax involves three steps:

1. Remove `ion-label` and use the `label` property on `ion-textarea` instead. The placement of the label can be configured using the `labelPlacement` property on `ion-textarea`.
2. Move textarea-specific properties from `ion-item` on to `ion-textarea`. This includes the `counter`, `counterFormatter`, `fill`, and `shape` properties.
3. Remove usages of the `helper` and `error` slots on `ion-item` and use the `helperText` and `errorText` properties on `ion-textarea` instead.

import Migration from '@site/static/usage/v7/textarea/migration/index.md';

<Migration />

### Using the Legacy Syntax

Ionic uses heuristics to detect if an app is using the modern textarea syntax. In some instances, it may be preferable to continue using the legacy syntax. Developers can set the `legacy` property on `ion-textarea` to `true` to force that instance of the textarea to use the legacy syntax.

## Theming

import ThemingPlayground from '@site/static/usage/v7/textarea/theming/index.md';

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
