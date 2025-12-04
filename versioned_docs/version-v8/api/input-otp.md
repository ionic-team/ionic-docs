---
title: "ion-input-otp"
---
import Props from '@ionic-internal/component-api/v8/input-otp/props.md';
import Events from '@ionic-internal/component-api/v8/input-otp/events.md';
import Methods from '@ionic-internal/component-api/v8/input-otp/methods.md';
import Parts from '@ionic-internal/component-api/v8/input-otp/parts.md';
import CustomProps from '@ionic-internal/component-api/v8/input-otp/custom-props.mdx';
import Slots from '@ionic-internal/component-api/v8/input-otp/slots.md';

<head>
  <title>ion-input-otp: One-Time Password Input Component</title>
  <meta name="description" content="ion-input-otp is a component for entering one-time passwords (OTP) with support for multiple input boxes and automatic focus management." />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="scoped" />

The Input OTP component is a specialized input component designed for entering one-time passwords (OTP). It provides a user-friendly interface for entering verification codes with support for multiple input boxes and automatic focus management.

## Basic Usage

The component provides 4 input boxes by default, which is a common length for many verification codes. The number of input boxes can be customized using the `length` property.

import Basic from '@site/static/usage/v8/input-otp/basic/index.md';

<Basic />

## Type

The `type` property determines the input format, supporting either numeric or alphanumeric verification codes. It accepts two values: `number` and `text`. It uses `type="number"` by default for entering numeric verification codes. When `type="text"` is specified, it accepts alphanumeric input. This flexibility allows handling different OTP formats, whether numeric-only codes (like SMS verification codes) or alphanumeric codes (like backup codes or recovery keys).

The `type` property automatically sets both the `inputmode` and `pattern` attributes:
- When `type="number"`:
  - Sets `inputmode="numeric"` to show a numeric keyboard on mobile devices
  - Sets `pattern="[\p{N}]"` to allow only numeric input
- When `type="text"`:
  - Sets `inputmode="text"` to show a standard keyboard
  - Sets `pattern="[\p{L}\p{N}]"` to allow alphanumeric input

See the [Pattern](#pattern) section for more details on pattern validation and customization.

import Type from '@site/static/usage/v8/input-otp/type/index.md';

<Type />

## Shape

The `shape` property controls the border radius of the input boxes, creating rounded or sharp corners.

import Shape from '@site/static/usage/v8/input-otp/shape/index.md';

<Shape />

## Fill

The `fill` property controls the background style of the input boxes, offering bordered or filled backgrounds.

import Fill from '@site/static/usage/v8/input-otp/fill/index.md';

<Fill />

## Size

The `size` property provides different size options for the input boxes.

import Size from '@site/static/usage/v8/input-otp/size/index.md';

<Size />

## Separators

The `separators` property adds visual dividers between one or more of the input boxes. Separators can be defined in three ways:
- Comma-separated string of numbers (e.g., `"1,3"`)
- Array of numbers (e.g., `[1, 3]`)
- String `"all"` to show separators between every input box

The numbers represent the index after which a separator should appear. For example, `"1,3"` displays a separator after the first and third input box. This can be used to create visually distinct groupings of input boxes, but it will still have one value.

import Separators from '@site/static/usage/v8/input-otp/separators/index.md';

<Separators />

## States

The component supports various states for automatic styling of input boxes:
- `disabled` and `readonly` states via respective properties
- Form validation states: `valid` and `invalid` visually indicated through CSS classes
- In Angular: validation states are automatically managed through the framework's value accessors and form validation
- For other frameworks: developers must manually add `ion-valid`, `ion-invalid`, and `ion-touched` classes
- `ion-invalid` styles only display when touched (`ion-touched`)
- `ion-valid` styles only display when focused (`has-focus`)

import States from '@site/static/usage/v8/input-otp/states/index.md';

<States />

## Pattern

The `pattern` property enables custom validation using regular expressions. It accepts a [string regular expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions/Cheatsheet) or [unicode regular expression](https://www.regular-expressions.info/unicode.html) to validate allowed characters. The `pattern` must match the entire value, not just a subset. Default patterns:
- `type="number"`: `"[\p{N}]"` for matching any kind of numeric character in any script.
- `type="text"`: `"[\p{L}\p{N}]"` for any kind of numeric character in any script and any kind of letter from any language.

The component will prevent users from entering any characters that don't match the specified pattern. Developers can override these defaults by providing their own pattern string to match specific input requirements.

:::tip
When using a custom `pattern`, remember that the `type` property controls which keyboard appears on mobile devices:
- Use `type="number"` for numeric-only patterns to show the numeric keyboard
- Use `type="text"` for patterns that include letters to show the alphanumeric keyboard
:::

import Pattern from '@site/static/usage/v8/input-otp/pattern/index.md';

<Pattern />

## Theming

### Colors

The `color` property changes the color palette for input boxes. For `outline` fills, this property changes the caret color, highlight color and border color. For `solid` fills, this property changes the caret color and highlight color.

:::note
The `color` property does *not* change the text color of the input OTP. For that, use the [`--color` CSS property](#css-custom-properties-1).
:::

import Colors from '@site/static/usage/v8/input-otp/theming/colors/index.md';

<Colors />

### CSS Custom Properties

Input OTP uses scoped encapsulation, which means it will automatically scope its CSS by appending each of the styles with an additional class at runtime. Overriding scoped selectors in CSS requires a [higher specificity](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity) selector. Targeting the `ion-input-otp` for customization will not work; therefore we recommend adding a class and customizing it that way. Due to certain styles being applied based on the `fill`, you may need to override properties on the fills separately.

import CSSProps from '@site/static/usage/v8/input-otp/theming/css-properties/index.md';

<CSSProps />

## Accessibility

### Keyboard Interactions

The keyboard navigation for Input OTP follows the [ARIA Authoring Practices Guide](https://www.w3.org/WAI/ARIA/apg/practices/keyboard-interface/)'s recommendations for composite widgets. It is treated as a composite widget because it contains multiple focusable elements (input boxes) that function as a single control.

These keyboard interactions apply to all `ion-input-otp` elements when the component is not disabled.

| Key | Description |
| --- | --- |
| <kbd>Tab</kbd> | When first tabbing into the component, focus moves to the first empty box. If all boxes are filled, focus moves to the last box. Once inside the component, tabbing moves to the next focusable element on the page. |
| <kbd>Shift</kbd> + <kbd>Tab</kbd> | When tabbing backwards into the component, focus moves to the first empty box. If all boxes are filled, focus moves to the last box. Once inside the component, shift tabbing focus moves to the previous focusable element on the page. |
| <kbd>ArrowRight</kbd> | Moves focus to the next input box, stopping at the first empty box. In RTL mode, moves focus back to any previous box that contains a value. |
| <kbd>ArrowLeft</kbd> | Moves focus back to any previous box that contains a value. In RTL mode, moves focus to the next input box, stopping at the first empty box. |
| Any character matching the `pattern` property | Fills the current box and automatically moves focus to the next empty box. If all boxes are filled, focus remains on the last box. If the current box has a value, override the value with the entered character. In RTL mode, input fills boxes from right to left. |
| <kbd>Backspace</kbd> | In an empty box: moves focus back one box and clears its value. <br/> In a box with a value: clears that value. <br/> With values in boxes to the right: shifts them all one position to the left. In RTL mode, with values in boxes to the left: shifts them all one position to the right. |
| <kbd>Ctrl</kbd> + <kbd>V</kbd> <br/> <kbd>Cmd</kbd> + <kbd>V</kbd> | Pastes content starting from the first box, regardless of which box is currently focused. All existing values are cleared before pasting. For example, if you have "1234" in all boxes and paste "56", the result will be "56" in the first two boxes with the remaining boxes empty. If the pasted content is longer than the available boxes, the extra characters are ignored. |

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
