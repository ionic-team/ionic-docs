# Dynamic Font Scaling

Dynamic Font Scaling is a feature that allows users to choose the size of the text displayed on the screen. This helps users who need larger text for better readability, and it also accommodates users who can read smaller text.

## Enabling Dynamic Font Scaling in Ionic

:::note
This feature is currently opt-in on iOS. However, it will be enabled by default starting in Ionic 8 at which point the following CSS will no longer be necessary.
:::

Dynamic Font Scaling is already enabled by default on Android. Developers can enable it on iOS by setting the following CSS globally:

```css
html {
  --ion-dynamic-type: var(--ion-default-dynamic-font);
}
```

Under the hood, Ionic sets the following CSS on iOS devices to enable Dynamic Font Scaling:

```css
html {
  font: var(--ion-dynamic-type);
}
```

Developers should ensure that the [typography.css](./global-stylesheets#typographycss) file is imported.

## Integrating Custom Components with Dynamic Font Scaling

Developers can configure their custom components to take advantage of Dynamic Font Scaling by converting any pixel font sizes to use [rem units](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units#lengths). An easy way to convert from `px` to `rem` is to divide the pixel font size by the default browser font size, which is typically 16px.

For example, if a component has a font size of `14px`, then this could be converted to `rem` by doing `14px / 16px = 0.875rem`.

Developers should also audit their applications and make any other changes necessary to support larger font sizes. One thing to keep in mind is that the dimensions of your components may need to change to accommodate the larger font sizes. As a result, it may be necessary to change properties such as `width` and `height` to `min-width` and `min-height`. We also recommend having long text wrap to the next line instead of truncating to keep large text readable.

Also note that any Ionic components that have had their font sizes overridden should also be audited to use `rem` units.

## Using a Custom Font Family with Dynamic Font Scaling

We recommend using the default fonts in Ionic as they are designed to look good at any size and ensure consistency with other mobile apps. However, developers can use a custom font family with Dynamic Font Scaling via CSS:

```css
html {
  --ion-dynamic-type: var(--ion-default-dynamic-font);
  --ion-font-family: "Comic Sans";
}
```

## How Dynamic Font Scaling works in Ionic

All Ionic components that define font sizes use [rem units](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units#lengths). This sizes the text in each component relative to the font size of the root element, which is usually the `html` element. This means that as the root element's font size changes, the text in all Ionic components scale in a consistent manner. This avoids the need to manually override each component's font size.

### iOS

Dynamic Font Scaling in Ionic builds on top of an iOS feature called [Dynamic Type](https://developer.apple.com/documentation/uikit/uifont/scaling_fonts_automatically#overview). To do this, Ionic sets the [font](https://developer.mozilla.org/en-US/docs/Web/CSS/font) of the root element to an Apple-defined text style. For consistency, Ionic uses the [body](https://developer.apple.com/documentation/uikit/uifont/textstyle/1616682-body) text style.

Using the Apple-defined text style enables Dynamic Type, allowing all text in Ionic components to scale according to the system-level preference. Note that these Apple-defined fonts only work on Apple devices. As a result, these fonts will not work on Android devices even if your app is using `'ios'` mode.

Ionic follows [Apple's Human Interface Guidelines for Typography](https://developer.apple.com/design/human-interface-guidelines/typography) when an app is in `'ios'` mode. As a result, important content is prioritized when the text size changes. For example, content in an `ion-header` or an `ion-footer` will have maximum font sizes to prioritize text in `ion-content` which is deemed more important than text in `ion-header` or `ion-footer`. Additionally, certain components will have minimum font sizes so they remain readable.

### Android

The Android Web View's font scaling mechanism is always enabled in web content and will automatically scale the computed font sizes. This means that any maximum or minimum font sizes specified will still be scaled even if the final font size does not align with the maximum or minimum font sizes specified.

For example, if Android has a font scale of 1.3 (i.e. The font size should be increased 30%) and the maximum font size for an element is `20px`, the computed font size for the element will actually be `26px` because Android will account for the system-level font scale since `20px * 1.3 = 26px`.

## How to change the font size on a device

Font scaling preferences are configured on a per-device basis by the user. This allows the user to scale the font for all applications that support this behavior. This guide shows how to enable font scaling for each platform.

### iOS

Font scaling on iOS can be configured in Settings > Accessibility > Display & Text Size > Larger Text. The slider on that page allows users to make the text larger or smaller across all apps that support font scaling.

Users can also tap the "Large Accessibility Sizes" switch to access more font scale options.

### Android

Font scaling on Android can be configured in Settings > Accessibility > Display size and text. The "Font size" slider on that page allows users to make the text larger or smaller across all apps that support font scaling.

## Troubleshooting

### Maximum and minimum font sizes are not being respected on Android

The Android Web View scales the computed font sizes by the system-level font scale preference. This means that actual font sizes may be larger or smaller than the font sizes defined in [min()](https://developer.mozilla.org/en-US/docs/Web/CSS/min), [max()](https://developer.mozilla.org/en-US/docs/Web/CSS/max), or [clamp()](https://developer.mozilla.org/en-US/docs/Web/CSS/clamp).

### Font sizes are larger/smaller even with Dynamic Font Scaling disabled

Ionic components define font sizes using [rem units](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units#lengths) even when Dynamic Font Scaling is disabled. This sizes the text in each component relative to the font size of the root element, which is usually the `html` element. As a result, if the font size of `html` changes, the computed font size of all Ionic components will change too.

### Scaled Ionic iOS component font sizes do not exactly match native iOS equivalents

Certain native iOS components such as the Action Sheet make use of private font scales that Ionic does not have access to. While we try to stay as close as possible to the native behavior, some components may render slightly larger or smaller than their native counterparts.

### The text size in my Ionic app on iOS changed when enabling Dynamic Font Scaling

The root element's default font size is typically 16px. However, Dynamic Font Scaling on iOS devices make use of the ["Body" text style which has a default font size 17px](https://developer.apple.com/design/human-interface-guidelines/typography#Specifications). Since the text in Ionic components is scaled relative to the root element's font size, some text may get larger or smaller when Dynamic Font Scaling is enabled, even if the system-level text scale did not change.

:::note
iOS provides a "Callout" text style which has a default font size of 16px. However, this font style is currently not exposed to web content. See [the supported text styles in WebKit](https://webkit.org/blog/3709/using-the-system-font-in-web-content/) for more information.
:::