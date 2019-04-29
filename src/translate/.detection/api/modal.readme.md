# ion-modal

A Modal is a dialog that appears on top of the app's content, and must be dismissed by the app before interaction can resume. It is useful as a select component when there are a lot of options to choose from, or when filtering items in a list, as well as many other use cases.


### Creating

Modals can be created using a [Modal Controller](../modal-controller). They can be customized by passing modal options in the modal controller's create method.


### Passing parameters

When a modal is created, parameters might be passed to the newly created modal:

```ts
// Create a modal using MyModalComponent with some initial data
const modal = await modalController.create({
  component: MyModalComponent,
  componentProps: {
    'prop1': value,
    'prop2': value2
  }
});
```

Under the hood, the controller creates a new `ion-modal` and attaches the specified component to it.
It also assigns the specified `componentProps` to the component's instance:

```js
// pseudo-code
const instance = create(MyModalComponent);
instance.prop1 = value;
instance.prop2 = value2;
```

This way, your component can access the passed params, check the "Usage" section for further code example for each frameworks.


### Returning data

Modals can also return data back to the controller when they are dismissed.

```js
const modal = await modalController.create({...});
const { data } = await modal.onDidDismiss();
console.log(data);
```

```js
// Dismiss the top modal returning some data object
modalController.dismiss({
  'result': value
})
```
