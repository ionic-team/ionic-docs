# CSS Shadow Parts

CSS Shadow Parts allow developers to style CSS properties on an element inside of a shadow tree. This is extremely useful in customizing Ionic Framework <a href="https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM" target="_blank" rel="noopener noreferrer">Shadow DOM</a> components.

## Why Shadow Parts?

Ionic Framework is a distributed set of <a href="https://developer.mozilla.org/en-US/docs/Web/Web_Components" target="_blank" rel="noopener noreferrer">Web Components</a>. Web Components follow the <a href="https://w3c.github.io/webcomponents/spec/shadow/" target="_blank" rel="noopener noreferrer">Shadow DOM specification</a> in order to encapsulate styles and markup.

:::note
Ionic Framework components are **not all** Shadow DOM components. If the component is a Shadow DOM component, there will be a badge in the top right of its [component documentation](../components.md). An example of a Shadow DOM component is the [button component](../api/button.md).
:::

Shadow DOM is useful for preventing styles from leaking out of components and unintentionally applying to other elements. For example, we assign a `.button` class to our `ion-button` component. Without Shadow DOM encapsulation, if a user were to set the class `.button` on one of their own elements, it would inherit the Ionic Framework button styles. Since `ion-button` is a Shadow component, this is not a problem.

However, due to this encapsulation, styles aren’t able to bleed into inner elements of Shadow components either. This means that if a Shadow component renders elements inside of its shadow tree, the inner elements cannot be targeted directly with CSS. Using the `ion-select` component as an example, it renders the following markup:

```html
<ion-select>
  #shadow-root
  <div class="”select-text" select-placeholder”></div>
  <div class="”select-icon”"></div>
</ion-select>
```

The placeholder text and icon elements are inside of the `#shadow-root`, which means the following CSS will **NOT** work to style the placeholder:

```css
/* Does NOT work */
ion-select .select-placeholder {
  color: blue;
}
```

So how do we solve this? [CSS Shadow Parts](#shadow-parts-explained)!

## Shadow Parts Explained

Shadow parts allow developers to style inside a shadow tree, from outside of that shadow tree. In order to do so, the [part must be exposed](#exposing-a-part) and then it can be styled by using [::part](#how-part-works).

### Exposing a part

When creating a Shadow DOM component, a part can be added to an element inside of a shadow tree by assigning a `part` attribute on the element. This is added to the component in Ionic Framework and requires no action from an end user.

Continuing to use the `ion-select` component as an example, the markup is updated to look like the following:

```html
<ion-select>
  #shadow-root
  <div part="”placeholder”" class="”select-text" select-placeholder”></div>
  <div part="”icon”" class="”select-icon”"></div>
</ion-select>
```

The above shows two parts: `placeholder` and `icon`. See the [select documentation](../api/select.md#css-shadow-parts) for all of its parts.

With these parts exposed, the element can now be styled directly using [::part](#how-part-works).

### How ::part works

The <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/::part" target="_blank" rel="noopener noreferrer">`::part()`</a> pseudo-element allows developers to select elements inside of a shadow tree that have been exposed via a part attribute.

Since we know that `ion-select` exposes a `placeholder` part for styling the text when there is no value selected, we can customize it in the following way:

```css
ion-select::part(placeholder) {
  color: blue;
  opacity: 1;
}
```

Styling using `::part` allows any CSS property that is accepted by that element to be changed.

In addition to being able to target the part, <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements" target="_blank" rel="noopener noreferrer">pseudo-elements</a> can be styled without them being explicitly exposed:

```css
ion-select::part(placeholder)::first-letter {
  font-size: 22px;
  font-weight: 500;
}
```

Parts work with most <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes" target="_blank" rel="noopener noreferrer">psuedo-classes</a>, as well:

```css
ion-item::part(native):hover {
  color: green;
}
```

:::note
There are some known limitations with [vendor prefixed pseudo-elements](#vendor-prefixed-pseudo-elements) and [structural pseudo-classes](#structural-pseudo-classes).
:::

## Ionic Framework Parts

All exposed parts for an Ionic Framework component can be found under the CSS Shadow Parts heading on its API page. To view all components and their API pages, see the [Component documentation](../components.md).

In order to have parts a component must meet the following criteria:

- It is a [Shadow DOM](../reference/glossary.md#shadow) component. If it is a [Scoped](../reference/glossary.md#scoped)> or Light DOM component, the child elements can be targeted directly. If a component is Scoped or Shadow, it will be listed by its name on its [component documentation page](../components.md).
- It contains children elements. For example, `ion-card-header` is a Shadow component, but all styles are applied to the host element. Since it has no child elements, there’s no need for parts.
- The children elements are not structural. In certain components, including `ion-title`, the child element is a structural element used to position the inner elements. We do not recommend customizing structural elements as this can have unexpected results.

:::note
We welcome recommendations for additional parts. Please create a <a href="https://github.com/ionic-team/ionic-framework/issues/new?assignees=&labels=&template=feature_request.md&title=feat%3A+" target="_blank" rel="noopener noreferrer">new GitHub issue</a> with as much information as possible when requesting a part.
:::

## Known Limitations

### Browser Support

CSS Shadow Parts are supported in the recent versions of all of the major browsers. However, some of the older versions do not support shadow parts. Verify the <a href="https://caniuse.com/#feat=mdn-css_selectors_part" target="_blank" rel="noopener noreferrer">browser support</a> meets the requirements before implementing parts in an app. If browser support for older versions is required, we recommend continuing to use [CSS Variables](../theming/css-variables.md) for styling.

### Vendor Prefixed Pseudo-Elements

<a href="https://developer.mozilla.org/en-US/docs/Glossary/Vendor_Prefix" target="_blank" rel="noopener noreferrer">
  Vendor prefixed
</a> pseudo-elements are not supported at this time. An example of this would be any of the `::-webkit-scrollbar` pseudo-elements:

```css
/* Does NOT work */
my-component::part(scroll)::-webkit-scrollbar {
  background: green;
}
```

See <a href="https://github.com/w3c/csswg-drafts/issues/4530" target="_blank" rel="noopener noreferrer">this issue on GitHub</a> for more information.

### Structural Pseudo-Classes

Most pseudo-classes are supported with parts, however, <a href="https://www.w3.org/TR/selectors-4/#structural-pseudos" target="_blank" rel="noopener noreferrer">structural pseudo-classes</a> are not. An example of structural pseudo-classes that do not work is below.

```css
/* Does NOT work */
my-component::part(container):first-child {
  background: green;
}

/* Does NOT work */
my-component::part(container):last-child {
  background: green;
}
```

### Chaining Parts

The `::part()` pseudo-element can not match additional `::part()`s.

For example, `my-component::part(button)::part(label)` does not match anything. This is because doing so would expose more structural information than is intended.

If the `<my-component>`’s internal button uses something like `part="label => button-label"` to forward the button’s internal parts up into the panel’s own part element map, then a selector like `my-component::part(button-label)` would select just the one button’s label, ignoring any other labels.
