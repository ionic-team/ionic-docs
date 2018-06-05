---

---

# ion-select

Selects are form controls to select an option, or options, from a set of options, similar to a native `<select>` element. When a user taps the select, a dialog appears with all of the options in a large, easy to select list.

A select should be used with child `<ion-select-option>` elements. If the child option is not given a `value` attribute then its text will be used as the value.

If `value` is set on the `<ion-select>`, the selected option will be chosen based on that value. Otherwise, the `selected` attribute can be used on the `<ion-select-option>`.


## Interfaces

By default, select uses the [AlertController API](../../alert/AlertController) to open up the overlay of options in an alert. The interface can be changed to use the [ActionSheetController API](../../action-sheet/ActionSheetController) or [PopoverController API](../../popover/PopoverController) by passing `action-sheet` or `popover`, respectively, to the `interface` property. Read on to the other sections for the limitations of the different interfaces.


## Single Selection

By default, the select allows the user to select only one option. The alert interface presents users with a radio button styled list of options. The action sheet interface can only be used with a single value select. The select component's value receives the value of the selected option's value.


### Multiple Selection

By adding the `multiple` attribute to select, users are able to select multiple options. When multiple options can be selected, the alert overlay presents users with a checkbox styled list of options. The select component's value receives an array of all of the selected option values.

Note: the `action-sheet` and `popover` interfaces will not work with multiple selection.


## Select Buttons

By default, the alert has two buttons: `Cancel` and `OK`. Each button's text can be customized using the `cancelText` and `okText` properties.

The `action-sheet` and `popover` interfaces do not have an `OK` button, clicking on any of the options will automatically close the overlay and select that value. The `popover` interface does not have a `Cancel` button, clicking on the backdrop will close the overlay.


## Interface Options

Since select uses the alert, action sheet and popover interfaces, options can be passed to these components through the `interfaceOptions` property. This can be used to pass a custom header, subheader, css class, and more. See the [AlertController API docs](../../alert/AlertController/#create), [ActionSheetController API docs](../../action-sheet/ActionSheetController/#create), and [PopoverController API docs](../../popover/PopoverController/#create) for the properties that each interface accepts.


<!-- Auto Generated Below -->


## Properties

#### cancelText

string

The text to display on the cancel button. Default: `Cancel`.


#### disabled

boolean

If true, the user cannot interact with the select. Defaults to `false`.


#### interface

string

The interface the select should use: `action-sheet`, `popover` or `alert`. Default: `alert`.


#### interfaceOptions

any

Any additional options that the `alert`, `action-sheet` or `popover` interface
can take. See the [AlertController API docs](../../alert/AlertController/#create), the
[ActionSheetController API docs](../../action-sheet/ActionSheetController/#create) and the
[PopoverController API docs](../../popover/PopoverController/#create) for the
create options for each interface.


#### multiple

boolean

If true, the select can accept multiple values.


#### name

string

The name of the control, which is submitted with the form data.


#### okText

string

The text to display on the ok button. Default: `OK`.


#### placeholder

string

The text to display when the select is empty.


#### selectedText

string

The text to display instead of the selected option's value.


#### value

any

the value of the select.


## Attributes

#### cancel-text

string

The text to display on the cancel button. Default: `Cancel`.


#### disabled

boolean

If true, the user cannot interact with the select. Defaults to `false`.


#### interface

string

The interface the select should use: `action-sheet`, `popover` or `alert`. Default: `alert`.


#### interface-options

any

Any additional options that the `alert`, `action-sheet` or `popover` interface
can take. See the [AlertController API docs](../../alert/AlertController/#create), the
[ActionSheetController API docs](../../action-sheet/ActionSheetController/#create) and the
[PopoverController API docs](../../popover/PopoverController/#create) for the
create options for each interface.


#### multiple

boolean

If true, the select can accept multiple values.


#### name

string

The name of the control, which is submitted with the form data.


#### ok-text

string

The text to display on the ok button. Default: `OK`.


#### placeholder

string

The text to display when the select is empty.


#### selected-text

string

The text to display instead of the selected option's value.


#### value

any

the value of the select.


## Events

#### ionBlur

Emitted when the select loses focus.


#### ionCancel

Emitted when the selection is cancelled.


#### ionChange

Emitted when the value has changed.


#### ionFocus

Emitted when the select has focus.


#### ionStyle

Emitted when the styles change.



----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
