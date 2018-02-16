# ctrl-dropdown

The `<ctrl-dropdown>` component provides basic logic and methods for building dropdowns. To use it, pass a function as the `renderer` prop and your items array as the `items` prop. The `renderer` prop will be passed the component instance, which you can pull state and methods off of to build your dropdown view.

```html
<ctrl-dropdown
  items={[ 'First', 'Second', 'Third' ]}
  renderer={dropdown => (
    <div>
      <button onClick={dropdown.toggle}>Select</button>
      <ul class={{ 'is-open': dropdown.isOpen }}>
        {dropdown.items.map(item =>
          <li onClick={() => {
            dropdown.select(item);
            dropdown.close();
          }}>{item}</li>
        )}
      </ul>
    </div>
  )}></ctrl-dropdown>
```

## Props

### `autoClose: boolean = false`

Whether the dropdown should close itself on `mouseleave`.

### `autoCloseDelay: number = 300`

The time, in milliseconds, that the dropdown should wait to automatically close itself.

### `items: any[]`

An array of items to be included in the dropdown.

### `onSelect: Function`

A function to be called whenever a new item is selected. Will be passed the newly selected item.

### `renderer: Function`

A function that returns the dropdown view. It will be passed the dropdown instance.

### `setInitial: Function`

A function that sets the initially selected item. It will be passed the items and should return a single item.

## State

### `isOpen`

Whether the dropdown is currently open.

### `selected`

The currently selected item.

## Methods

### `close()`

Closes the dropdown.

### `open()`

Opens the dropdown.

### `select(item)`

Sets the selected item.

### `toggle()`

Toggles the dropdown.
