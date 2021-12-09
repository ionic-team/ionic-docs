# ion-select

Selects are form controls to select an option, or options, from a set of options, similar to a native `<select>` element. When a user taps the select, a dialog appears with all of the options in a large, easy to select list.

A select should be used with child `<ion-select-option>` elements. If the child option is not given a `value` attribute then its text will be used as the value.

If `value` is set on the `<ion-select>`, the selected option will be chosen based on that value.

## Interfaces

By default, select uses [ion-alert](../alert) to open up the overlay of options in an alert. The interface can be changed to use [ion-action-sheet](../action-sheet) or [ion-popover](../popover) by passing `action-sheet` or `popover`, respectively, to the `interface` property. Read on to the other sections for the limitations of the different interfaces.


## Single Selection

By default, the select allows the user to select only one option. The alert interface presents users with a radio button styled list of options. The action sheet interface can only be used with a single value select. The select component's value receives the value of the selected option's value.


## Multiple Selection

By adding the `multiple` attribute to select, users are able to select multiple options. When multiple options can be selected, the alert overlay presents users with a checkbox styled list of options. The select component's value receives an array of all of the selected option values.

Note: the `action-sheet` and `popover` interfaces will not work with multiple selection.

## Object Value References

When using objects for select values, it is possible for the identities of these objects to change if they are coming from a server or database, while the selected value's identity remains the same. For example, this can occur when an existing record with the desired object value is loaded into the select, but the newly retrieved select options now have different identities. This will result in the select appearing to have no value at all, even though the original selection in still intact.

By default, the select uses object equality (`===`) to determine if an option is selected. This can be overridden by providing a property name or a function to the `compareWith` property.

## Select Buttons

The alert supports two buttons: `Cancel` and `OK`. Each button's text can be customized using the `cancelText` and `okText` properties.

The `action-sheet` and `popover` interfaces do not have an `OK` button, clicking on any of the options will automatically close the overlay and select that value. The `popover` interface does not have a `Cancel` button, clicking on the backdrop will close the overlay.


## Interface Options

Since select uses the alert, action sheet and popover interfaces, options can be passed to these components through the `interfaceOptions` property. This can be used to pass a custom header, subheader, css class, and more.

See the [ion-alert docs](../alert), [ion-action-sheet docs](../action-sheet), and [ion-popover docs](../popover) for the properties that each interface accepts.

Note: `interfaceOptions` will not override `inputs` or `buttons` with the `alert` interface.

## Customization

There are two units that make up the Select component and each need to be styled separately. The `ion-select` element is represented on the view by the selected value(s), or placeholder if there is none, and dropdown icon. The interface, which is defined in the [Interfaces](#interfaces) section above, is the dialog that opens when clicking on the `ion-select`. The interface contains all of the options defined by adding `ion-select-option` elements. The following sections will go over the differences between styling these.

### Styling Select Element

As mentioned, the `ion-select` element consists only of the value(s), or placeholder, and icon that is displayed on the view. To customize this, style using a combination of CSS and any of the [CSS custom properties](#css-custom-properties):

```css
ion-select {
  /* Applies to the value and placeholder color */
  color: #545ca7;

  /* Set a different placeholder color */
  --placeholder-color: #971e49;

  /* Set full opacity on the placeholder */
  --placeholder-opacity: 1;
}
```

Alternatively, depending on the [browser support](https://caniuse.com/#feat=mdn-css_selectors_part) needed, CSS shadow parts can be used to style the select:

```css
/* Set the width to the full container and center the content */
ion-select {
  width: 100%;

  justify-content: center;
}

/* Set the flex in order to size the text width to its content */
ion-select::part(placeholder),
ion-select::part(text) {
  flex: 0 0 auto;
}

/* Set the placeholder color and opacity */
ion-select::part(placeholder) {
  color: #20a08a;
  opacity: 1;
}

/*
 * Set the font of the first letter of the placeholder
 * Shadow parts work with pseudo-elements, too!
 * https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-elements
 */
ion-select::part(placeholder)::first-letter {
  font-size: 24px;
  font-weight: 500;
}

/* Set the text color */
ion-select::part(text) {
  color: #545ca7;
}

/* Set the icon color and opacity */
ion-select::part(icon) {
  color: #971e49;
  opacity: 1;
}
```

Notice that by using `::part`, any CSS property on the element can be targeted.

### Styling Select Interface

Customizing the interface dialog should be done by following the Customization section in that interface's documentation:

- [Alert Customization](../alert#customization)
- [Action Sheet Customization](../action-sheet#customization)
- [Popover Customization](../popover#customization)

However, the Select Option does set a class for easier styling and allows for the ability to pass a class to the overlay option, see the [Select Options documentation](../select-option) for usage examples of customizing options.
