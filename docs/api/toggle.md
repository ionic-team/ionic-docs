---
title: "ion-toggle"
---
import Props from '@site/static/auto-generated/toggle/props.md';
import Events from '@site/static/auto-generated/toggle/events.md';
import Methods from '@site/static/auto-generated/toggle/methods.md';
import Parts from '@site/static/auto-generated/toggle/parts.md';
import CustomProps from '@site/static/auto-generated/toggle/custom-props.md';
import Slots from '@site/static/auto-generated/toggle/slots.md';

<head>
  <title>Toggle | ion-toggle: Custom Toggle Button for Ionic Applications</title>
  <meta name="description" content="Toggle changes the state of a single option. Use ion-toggle to create customizable toggle buttons that can be switched on or off for your applications." />
</head>

import EncapsulationPill from '@components/page/api/EncapsulationPill';

<EncapsulationPill type="shadow" />


Toggles are switches that change the state of a single option. They can be switched on or off by pressing or swiping them. Toggles can also be checked programmatically by setting the `checked` property.

## Basic Usage

import Basic from '@site/static/usage/toggle/basic/index.md';

<Basic />


## On / Off Labels

Toggles can enable on/off labels by setting the `enableOnOffLabels` property. This is important for accessibility as it makes it easier to differentiate between a checked and unchecked toggle.

import OnOff from '@site/static/usage/toggle/on-off/index.md';

<OnOff />


## List Toggles

Toggles can be slotted inside of an item in a list. Native designs place toggles at the end of an item, but they can also be placed at the start.

import List from '@site/static/usage/toggle/list/index.md';

<List />


## Customization

### Customizing Background

The background of the toggle track and handle can be customized using CSS variables. There are also variables for setting the background differently when the toggle is checked.

```css
ion-toggle {
  --background: #000;
  --background-checked: #7a49a5;

  --handle-background: #7a49a5;
  --handle-background-checked: #000;
}
```

Because these variables set the `background` property, which is a shorthand, it can accept any value that the [background property](https://developer.mozilla.org/en-US/docs/Web/CSS/background) accepts.

A more complex case may involve adding an image to the handle background.

```css
ion-toggle {
  --handle-background-checked: #fff url(/assets/power-icon.png) no-repeat center / contain;
}
```

Taking it a step further, we could use the `::before` or `::after` pseudo-elements to position text on top of the background.

```css
ion-toggle::before {
  position: absolute;

  top: 16px;
  left: 10px;

  content: "ON";

  color: white;
  font-size: 8px;

  z-index: 1;
}
```


### Customizing Width

Adjusting the width of the toggle **smaller** will result in a narrower track, with the handle remaining the default width. If desired, set `--handle-width` to make the handle narrower.

```css
ion-toggle {
  width: 40px;
}
```

Adjusting the width of the toggle **larger** will result in a wider track, with the handle remaining the default width. If desired, set `--handle-width` to make the handle wider.

```css
ion-toggle {
  width: 100px;
}
```

### Customizing Height

Adjusting the height of the toggle **smaller** than the default will result in the handle height auto-sizing itself to the track. In `ios` the handle is shorter than the track (`100% - 4px`) and in `md` the handle is taller than the track (`100% + 6px`).

```css
ion-toggle {
  height: 15px;
}
```

:::note
 Note: this does not affect the handle width, width should be set using `--handle-width`.
:::


Adjusting the height of the toggle **larger** will keep the handle in the center at the default height. This can be modified by setting `--handle-height` which can be set to any amount but will not exceed the `--handle-max-height`.

```css
ion-toggle {
  height: 60px;
}
```

:::note
 Note: this does not affect the handle width, width should be set using `--handle-width`.
:::


### Customizing Spacing

The spacing refers to the horizontal gap between the handle and the track. By default, the handle has `2px` of spacing around it in `ios` **only**. In `md` mode there is no default spacing.

To remove the **horizontal** spacing, set `--handle-spacing` to `0px`.

```css
ion-toggle {
  --handle-spacing: 0px;
}
```

Due to the handle having a fixed height, to remove the spacing on the top and bottom, set the height to 100%.

```css
ion-toggle {
  --handle-spacing: 0px;
  --handle-height: 100%;
}
```


### Customizing Border Radius

The `--handle-border-radius` can be used to change the `border-radius` on the handle.

```css
ion-toggle {
  --handle-border-radius: 14px 4px 4px 14px;
}
```

To target the `border-radius` only when the toggle is checked, target `.toggle-checked`:

```css
ion-toggle.toggle-checked {
  --handle-border-radius: 4px 14px 14px 4px;
}
```


### Customizing Box Shadow

The `--handle-box-shadow` can be used to change the `box-shadow` on the handle.

```css
ion-toggle {
  --handle-box-shadow: 4px 0 2px 0 red;
}
```

To target the box shadow only when the toggle is checked, target `.toggle-checked`:

```css
ion-toggle.toggle-checked {
  --handle-box-shadow: -4px 0 2px 0 red;
}
```

See the section on [customizing overflow](#customizing-overflow) to allow the `box-shadow` to overflow the toggle container.


### Customizing Overflow

Setting `overflow` on the toggle will be inherited by the toggle handle. By default, overflow is set to `hidden` in `ios` only. The `box-shadow` will still appear cut off due to the `contain` css property. Set `contain` to `none` in order to overflow the toggle container.

```css
ion-toggle {
  --handle-box-shadow: 0 3px 12px rgba(255, 0, 0, 0.6), 0 3px 1px rgba(50, 70, 255, 0.6);

  overflow: visible;

  contain: none;
}
```

## Interfaces

### ToggleChangeEventDetail

```typescript
interface ToggleChangeEventDetail<T = any> {
  value: T;
  checked: boolean;
}
```

### ToggleCustomEvent

While not required, this interface can be used in place of the `CustomEvent` interface for stronger typing with Ionic events emitted from this component.

```typescript
interface ToggleCustomEvent<T = any> extends CustomEvent {
  detail: ToggleChangeEventDetail<T>;
  target: HTMLIonToggleElement;
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
