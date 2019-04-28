# ion-progress-bar

ion-progress-bar is a horizontal progress bar to visualize the progression of an operation and activity. You can choose between two types: `determinate` and `indeterminate`.

## Progress Type

### Determinate

If the percentage of an operation is known, you should use the determinate type. This is the default type and the progress is represented by the `value` property.

A buffer shows circles as animation to indicate some activity. If the `buffer` property is smaller than 1 you can show the addditional buffering progress. 

### Indeterminate

If an operation is in progress and it's not necessary to indicate how long it will take.

If you add `reversed="true"`, you receive a query which is used to indicate pre-loading.
