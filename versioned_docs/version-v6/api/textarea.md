---
title: "ion-textarea"
---
import Props from '@site/static/auto-generated/textarea/props.md';
import Events from '@site/static/auto-generated/textarea/events.md';
import Methods from '@site/static/auto-generated/textarea/methods.md';
import Parts from '@site/static/auto-generated/textarea/parts.md';
import CustomProps from '@site/static/auto-generated/textarea/custom-props.md';
import Slots from '@site/static/auto-generated/textarea/slots.md';

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

import BasicPlayground from '@site/static/usage/textarea/basic/index.md';

<BasicPlayground />

## Autogrow

When the `autoGrow` property is set to `true`, the textarea will grow and shrink based on its contents.

import AutogrowPlayground from '@site/static/usage/textarea/autogrow/index.md';

<AutogrowPlayground />

## Clear on Edit

Setting the `clearOnEdit` property to `true` will clear the textarea after it has been blurred and then typed in again.

import ClearOnEditPlayground from '@site/static/usage/textarea/clear-on-edit/index.md';

<ClearOnEditPlayground />

## Theming

import ThemingPlayground from '@site/static/usage/textarea/theming/index.md';

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