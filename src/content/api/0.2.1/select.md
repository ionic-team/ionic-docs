---
previewUrl: "/docs/docs-content/api/0.2.1/select-demo.html"
---
# ion-select

The `<ion-select>` element is similar to a native `<select>` element, however, it is easier for users to sort through and select the preferred option or options. When a user taps the select component, a dialog appears with all of the options in a large, easy to select list.

It should be used with child `ion-select-option` elements. If the child option is not given a `value` attribute then it will use its text as the value.

If `value` is set on the `ion-select`, the selected option will be based on that value. Otherwise, the `selected` attribute can be used on the `ion-select-option` elements.

## Interfaces

By default, the `ion-select` uses the [AlertController API](../../alert/AlertController) to open up the overlay of options in an alert. The interface can be changed to use the [ActionSheetController API](../../action-sheet/ActionSheetController) or [PopoverController API](../../popover/PopoverController) by passing `action-sheet` or `popover`, respectively, to the `interface` property. Read on to the other sections for the limitations of the different interfaces.

## Single Value: Radio Buttons

The standard `ion-select` component allows the user to select only one option. When selecting only one option the alert interface presents users with a radio button styled list of options. The action sheet interface can only be used with a single value select. The `ion-select` component's value receives the value of the selected option's value.

```html
<ion-item>
  <ion-label>Gender</ion-label>
  <ion-select id="gender">
    <ion-select-option value="f">Female</ion-select-option>
    <ion-select-option value="m">Male</ion-select-option>
  </ion-select>
</ion-item>
```

### Multiple Value: Checkboxes

By adding the `multiple="true"` attribute to `ion-select`, users are able to select multiple options. When multiple options can be selected, the alert overlay presents users with a checkbox styled list of options. The `ion-select` component's value receives an array of all the selected option values. In the example below, because each option is not given a `value`, it will use the option's text as the value.

Note: the `action-sheet` and `popover` interfaces will not work with a multiple-value select.

```html
<ion-item>
  <ion-label>Toppings</ion-label>
  <ion-select id="toppings" multiple="true">
    <ion-select-option>Bacon</ion-select-option>
    <ion-select-option>Black Olives</ion-select-option>
    <ion-select-option>Extra Cheese</ion-select-option>
    <ion-select-option>Mushrooms</ion-select-option>
    <ion-select-option>Pepperoni</ion-select-option>
    <ion-select-option>Sausage</ion-select-option>
  </ion-select>
</ion-item>
```

## Select Buttons

By default, the two buttons read `Cancel` and `OK`. Each button's text can be customized using the `cancelText` and `okText` attributes:

```html
<ion-select ok-text="Okay" cancel-text="Dismiss">
  ...
</ion-select>
```

The `action-sheet` and `popover` interfaces do not have an `OK` button, clicking on any of the options will automatically close the overlay and select that value. The `popover` interface does not have a `Cancel` button, clicking on the backdrop will close the overlay.

## Interface Options

Since `ion-select` uses the `Alert`, `Action Sheet` and `Popover` interfaces, options can be passed to these components through the `interfaceOptions` property. This can be used to pass a custom title, subTitle, css class, and more. See the [AlertController API docs](../../alert/AlertController/#create), [ActionSheetController API docs](../../action-sheet/ActionSheetController/#create), and [PopoverController API docs](../../popover/PopoverController/#create) for the properties that each interface accepts.

For example, to change the `title` and `subTitle` of the overlay, pass it into `interfaceOptions`.

```html
<ion-select id="customSelect">
  ...
</ion-select>
```

```javascript
var customSelect = document.getElementById('customSelect');
customSelect.interfaceOptions = {
  header: 'Pizza Toppings',
  subHeader: 'Select your toppings'
};
```


<h2>Properties</h2> 

<dl>
<dt>
<h3>cancelText</h3> 
<strong>Attribute:</strong>  <code>cancel-text</code>
<strong>Type:</strong> <code>string</code>
</dt>
<dd>The text to display on the cancel button. Default: `Cancel`.</dd>

<dt>
<h3>disabled</h3> 
<strong>Attribute:</strong>  <code>disabled</code>
<strong>Type:</strong> <code>boolean</code>
</dt>
<dd>If true, the user cannot interact with the select. Defaults to `false`.</dd>

<dt>
<h3>interface</h3> 
<strong>Attribute:</strong>  <code>interface</code>
<strong>Type:</strong> <code>string</code>
</dt>
<dd>The interface the select should use: `action-sheet`, `popover` or `alert`. Default: `alert`.</dd>

<dt>
<h3>interfaceOptions</h3> 
<strong>Attribute:</strong>  <code>interface-options</code>
<strong>Type:</strong> <code>any</code>
</dt>
<dd>Any additional options that the `alert`, `action-sheet` or `popover` interface
can take. See the [AlertController API docs](../../alert/AlertController/#create), the
[ActionSheetController API docs](../../action-sheet/ActionSheetController/#create) and the
[PopoverController API docs](../../popover/PopoverController/#create) for the
create options for each interface.</dd>

<dt>
<h3>multiple</h3> 
<strong>Attribute:</strong>  <code>multiple</code>
<strong>Type:</strong> <code>boolean</code>
</dt>
<dd>If true, the select can accept multiple values.</dd>

<dt>
<h3>name</h3> 
<strong>Attribute:</strong>  <code>name</code>
<strong>Type:</strong> <code>string</code>
</dt>
<dd>The name of the control, which is submitted with the form data.</dd>

<dt>
<h3>okText</h3> 
<strong>Attribute:</strong>  <code>ok-text</code>
<strong>Type:</strong> <code>string</code>
</dt>
<dd>The text to display on the ok button. Default: `OK`.</dd>

<dt>
<h3>placeholder</h3> 
<strong>Attribute:</strong>  <code>placeholder</code>
<strong>Type:</strong> <code>string</code>
</dt>
<dd>The text to display when the select is empty.</dd>

<dt>
<h3>selectedText</h3> 
<strong>Attribute:</strong>  <code>selected-text</code>
<strong>Type:</strong> <code>string</code>
</dt>
<dd>The text to display instead of the selected option's value.</dd>

<dt>
<h3>value</h3> 
<strong>Attribute:</strong>  <code>value</code>
</dt>
<dd>the value of the select.</dd>

</dl>


<h2>Events</h2>

<dl><dt>
<h3>ionBlur</h3></dt>
<dd>Emitted when the select loses focus.</dd>

<dt>
<h3>ionCancel</h3></dt>
<dd>Emitted when the selection is cancelled.</dd>

<dt>
<h3>ionChange</h3></dt>
<dd>Emitted when the value has changed.</dd>

<dt>
<h3>ionFocus</h3></dt>
<dd>Emitted when the select has focus.</dd>

<dt>
<h3>ionStyle</h3></dt>
<dd>Emitted when the styles change.</dd>

</dl>


