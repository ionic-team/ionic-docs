# ion-select-option

Select Options are components that are child elements of a Select. Each option defined is passed and displayed in the Select dialog. For more information, see the [Select docs](../select).

## Customization

Each `ion-select-option` component that is added as a child of an `ion-select` is passed to the interface to display it in the dialog. It's important to note that the `ion-select-option` element itself is hidden from the view. This means that attempting to style it will not have any effect on the option in the dialog:

```css
/* DOES NOT work */
ion-select-option {
  color: red;
}
```

Instead, each interface option has the class `.select-interface-option` which can be styled. Keep in mind that due to the overlays being scoped components the selector by itself will not work and a custom `cssClass` is recommended to be passed to the interface.

```css
/* This will NOT work on its own */
.select-interface-option {
  color: red;
}

/*
 * "my-custom-interface" needs to be passed in through
 * the cssClass of the interface options for this to work
 */
.my-custom-interface .select-interface-option {
  color: red;
}
```

> Note: Some interfaces require more in depth styling due to how the options are rendered. See usage for expanded information on this.

The options can be styled individually by adding your own class on the `ion-select-option` which gets passed to the interface option. See the [Usage](#usage) section below for examples of styling and setting individual classes on options.

