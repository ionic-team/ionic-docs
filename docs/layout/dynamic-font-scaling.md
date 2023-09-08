# Dynamic Font Scaling

Dynamic Font Scaling is a feature that allows users to choose the size of the text displayed on the screen. This helps users who need larger text for better readability, and it also accommodates users who can read smaller text.

Dynamic Font Scaling is supported on Android, iOS, and iPadOS starting in Ionic v7.5.

## Try It Out

Follow the [Changing the Font Size on a Device](#changing-the-font-size-on-a-device) guide to set your preferred font size, and watch the text in the demo below grow or shrink according to your preferences.

## Enabling Dynamic Font Scaling in Ionic

:::note
This feature is currently opt-in on iOS. However, it will be enabled by default starting in Ionic 8 at which point the following CSS will no longer be necessary.
:::

Dynamic Font Scaling is already enabled by default on Android. Developers can enable it on iOS by setting the following CSS globally:

```css
html {
  --ion-dynamic-font: var(--ion-default-dynamic-font);
}
```

Under the hood, Ionic sets the following CSS on iOS devices to enable Dynamic Font Scaling:

```css
html {
  font: var(--ion-dynamic-font);
}
```

Developers should ensure that the [typography.css](./global-stylesheets#typographycss) file is imported.

## Using Dynamic Font Scaling

### Integrating Custom Components

Developers can configure their custom components to take advantage of Dynamic Font Scaling by converting any pixel font sizes to use [rem units](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units#lengths). An easy way to convert from `px` to `rem` is to divide the pixel font size by the default browser font size, which is typically 16px.

For example, if a component has a font size of `14px`, then this could be converted to `rem` by doing `14px / 16px = 0.875rem`.

Developers should also audit their applications and make any other changes necessary to support larger font sizes. One thing to keep in mind is that the dimensions of your components may need to change to accommodate the larger font sizes. As a result, it may be necessary to change properties such as `width` and `height` to `min-width` and `min-height`. We also recommend having long text wrap to the next line instead of truncating to keep large text readable.

Also note that any Ionic components that have had their font sizes overridden should also be audited to use `rem` units.

### Custom Font Family

We recommend using the default fonts in Ionic as they are designed to look good at any size and ensure consistency with other mobile apps. However, developers can use a custom font family with Dynamic Font Scaling via CSS:

```css
html {
  --ion-dynamic-type: var(--ion-default-dynamic-font);
  --ion-font-family: "Comic Sans";
}
```

### `em` units versus `rem` units

Developers have two options for relative font sizes: `em` and `rem`.

`em` units set the font size of an element relative to the font size of its parent.

In the following example, the computed font size of `.child` is `40px` because it is a child of `.parent` (2em * 20px = 40px).
 
```css
.parent {
  font-size: 20px;
}

.child {
  font-size: 2em;
}
```

However, this unit can have a compounding effect which can cause issues. In the following example, the second `.child` element has a computed font size of `80px` since the font sizes compound.

```html
<div class="parent">
  Parent element with 20px
  <div class="child">
    Child element with 40px
    <div class="child">
      Child element with 80px
    </div>
  </div>
</div>
```

<div style={{ fontSize: '20px' }}>
  Parent element with 20px
  <div style={{ fontSize: '2em' }}>
    Child element with 40px
    <div style={{ fontSize: '2em' }}>
      Child element with 80px
    </div>
  </div>
</div>

Due to this compounding effect, we strongly recommend using `rem` units instead of `em` units when working with Dynamic Font Scaling. `rem` units set the font size of an element relative to the font size of the root element, which is typically `<html>`. The default font size of the root element is typically `16px`.

In the following example, the computed font size of `.child` is `32px` because the font size is being computed relative to `html`, not `.parent`.

```css
.parent {
  font-size: 20px;
}

.child {
  font-size: 2rem;
}
```

## How Dynamic Font Scaling works in Ionic

All Ionic components that define font sizes use [rem units](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units#lengths). This sizes the text in each component relative to the font size of the root element, which is usually the `html` element. This means that as the root element's font size changes, the text in all Ionic components scale in a consistent manner. This avoids the need to manually override each component's font size.

### iOS

Dynamic Font Scaling in Ionic builds on top of an iOS feature called [Dynamic Type](https://developer.apple.com/documentation/uikit/uifont/scaling_fonts_automatically#overview). To do this, Ionic sets the [font](https://developer.mozilla.org/en-US/docs/Web/CSS/font) of the root element to an Apple-defined text style. For consistency, Ionic uses the [body](https://developer.apple.com/documentation/uikit/uifont/textstyle/1616682-body) text style.

Using the Apple-defined text style enables Dynamic Type, allowing all text in Ionic components to scale according to the system-level preference. Note that these Apple-defined fonts only work on Apple devices. As a result, these fonts will not work on Android devices even if your app is using `'ios'` mode.

Ionic follows [Apple's Human Interface Guidelines for Typography](https://developer.apple.com/design/human-interface-guidelines/typography) when an app is in `'ios'` mode. As a result, important content is prioritized when the text size changes. This means a few things:

1. Content in an `ion-header` or an `ion-footer` will have maximum font sizes to prioritize text in `ion-content` which is deemed more important than text in `ion-header` or `ion-footer`. 
2. Components such as `ion-badge` and `ion-back-button` will have minimum font sizes so they remain readable.
3. Text in components such as `ion-tab-bar` and `ion-picker` do not scale according to Apple's Human Interface Guidelines.

### Android

The Android Web View's font scaling mechanism is always enabled in web content and will automatically scale the computed font sizes. This means that any maximum or minimum font sizes specified will still be scaled even if the final font size does not align with the maximum or minimum font sizes specified.

For example, if Android has a font scale of 1.3 (i.e. The font size should be increased 30%) and the maximum font size for an element is `20px`, the computed font size for the element will actually be `26px` because Android will account for the system-level font scale since `20px * 1.3 = 26px`.

## Changing the Font Size on a Device

Font scaling preferences are configured on a per-device basis by the user. This allows the user to scale the font for all applications that support this behavior. This guide shows how to enable font scaling for each platform.

### iOS

Font scaling on iOS can be configured in Settings > Accessibility > Display & Text Size > Larger Text. The slider on that page allows users to make the text larger or smaller across all apps that support font scaling.

Users can also tap the "Large Accessibility Sizes" switch to access more font scale options.

### Android

Font scaling on Android can be configured in Settings > Accessibility > Display size and text. The "Font size" slider on that page allows users to make the text larger or smaller across all apps that support font scaling.

## Troubleshooting

### Dynamic Font Scaling is not working

There are a number of reasons why Dynamic Font Scaling may not have any effect on an app . The following list, while not exhaustive, provides some things to check to debug why Dynamic Font Scaling is not working.

1. Verify that your version of Ionic supports Dynamic Font Scaling. Dynamic Font Scaling was added starting in Ionic v7.5.
2. Dynamic Font Scaling is opt-in on iOS on Ionic 7. Verify that the proper CSS has been set. See [Enabling Dynamic Font Scaling in Ionic](#enabling-dynamic-font-scaling-in-ionic) for more information.
3. Verify that your code does not override the root element's default font size. Manually setting a font size on the root element will prevent Dynamic Font Scaling from working as intended.
4. Verify that your code does not override font sizes on Ionic components. Ionic components that set `font-size` rules will use `rem` units. However, if your app overrides that to use `px`, then that custom rule will need to be converted to use `rem`. See [Integrating Custom Components with Dynamic Font Scaling](#integrating-custom-components-with-dynamic-font-scaling) for more information.



### Maximum and minimum font sizes are not being respected on Android

The Android Web View scales any font sizes defined using the `px` unit by the system-level font scale preference. This means that actual font sizes may be larger or smaller than the font sizes defined in [min()](https://developer.mozilla.org/en-US/docs/Web/CSS/min), [max()](https://developer.mozilla.org/en-US/docs/Web/CSS/max), or [clamp()](https://developer.mozilla.org/en-US/docs/Web/CSS/clamp).

Example:

In the following example we are using the `min()` function to indicate that the font size of `.foo` should be no larger than `14px`.

```css
.foo {
  font-size: min(1rem, 14px);
}
```

If the root element's default font size is `16px`, and the system-level font scale is 1.5 (i.e text sizes should be increased by 50%), then `1rem` will evaluate to `24px` because `16 * 1.5 = 24`. 

This is larger than our defined maximum of `14px`, so one might assume that the evaluated font size of `.foo` is `14px`. However, since the Android Web View scales any font sizes defined using the `px` unit, then the `14px` used in our `min()` function will also be scaled by 1.5.

As a result, this means that maximum computed font size is actually `21px` since `14 * 1.5 = 21` and therefore the overall computed font size of `.foo` is `21px`.

### Font sizes are larger/smaller even with Dynamic Font Scaling disabled

Ionic components define font sizes using [rem units](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units#lengths) even when Dynamic Font Scaling is disabled. This sizes the text in each component relative to the font size of the root element, which is usually the `html` element. As a result, if the font size of `html` changes, the computed font size of all Ionic components will change too.

### Scaled Ionic iOS component font sizes do not exactly match native iOS equivalents

Certain native iOS components such as the Action Sheet make use of private font scales that Ionic does not have access to. While we try to stay as close as possible to the native behavior, text in some components may render slightly larger or smaller than their native counterparts.

### The text size in my Ionic app on iOS changed when enabling Dynamic Font Scaling

The root element's default font size is typically 16px. However, Dynamic Font Scaling on iOS devices make use of the ["Body" text style which has a default font size 17px](https://developer.apple.com/design/human-interface-guidelines/typography#Specifications). Since the text in Ionic components is scaled relative to the root element's font size, some text may get larger or smaller when Dynamic Font Scaling is enabled, even if the system-level text scale did not change.

:::note
iOS provides a "Callout" text style which has a default font size of 16px. However, this font style is currently not exposed to web content. See [the supported text styles in WebKit](https://webkit.org/blog/3709/using-the-system-font-in-web-content/) for more information.
:::