

### canGoBack

| | |
| --- | --- |
| **Description** | Returns `true` if the current view can go back. |
| **Signature** | `canGoBack(view?: ViewController) => Promise<boolean>` |


### getActive

| | |
| --- | --- |
| **Description** | Get the active view. |
| **Signature** | `getActive() => Promise<ViewController ｜ undefined>` |


### getByIndex

| | |
| --- | --- |
| **Description** | Get the view at the specified index. |
| **Signature** | `getByIndex(index: number) => Promise<ViewController ｜ undefined>` |


### getPrevious

| | |
| --- | --- |
| **Description** | Get the previous view. |
| **Signature** | `getPrevious(view?: ViewController) => Promise<ViewController ｜ undefined>` |


### insert

| | |
| --- | --- |
| **Description** | Inserts a component into the navigation stack at the specified index. This is useful to add a component at any point in the navigation stack. |
| **Signature** | `insert<T extends NavComponent>(insertIndex: number, component: T, componentProps?: ComponentProps<T> ｜ null, opts?: NavOptions ｜ null, done?: TransitionDoneFn) => Promise<boolean>` |


### insertPages

| | |
| --- | --- |
| **Description** | Inserts an array of components into the navigation stack at the specified index. The last component in the array will become instantiated as a view, and animate in to become the active view. |
| **Signature** | `insertPages(insertIndex: number, insertComponents: NavComponent[] ｜ NavComponentWithProps[], opts?: NavOptions ｜ null, done?: TransitionDoneFn) => Promise<boolean>` |


### pop

| | |
| --- | --- |
| **Description** | Pop a component off of the navigation stack. Navigates back from the current component. |
| **Signature** | `pop(opts?: NavOptions ｜ null, done?: TransitionDoneFn) => Promise<boolean>` |


### popTo

| | |
| --- | --- |
| **Description** | Pop to a specific index in the navigation stack. |
| **Signature** | `popTo(indexOrViewCtrl: number ｜ ViewController, opts?: NavOptions ｜ null, done?: TransitionDoneFn) => Promise<boolean>` |


### popToRoot

| | |
| --- | --- |
| **Description** | Navigate back to the root of the stack, no matter how far back that is. |
| **Signature** | `popToRoot(opts?: NavOptions ｜ null, done?: TransitionDoneFn) => Promise<boolean>` |


### push

| | |
| --- | --- |
| **Description** | Push a new component onto the current navigation stack. Pass any additional information along as an object. This additional information is accessible through NavParams. |
| **Signature** | `push<T extends NavComponent>(component: T, componentProps?: ComponentProps<T> ｜ null, opts?: NavOptions ｜ null, done?: TransitionDoneFn) => Promise<boolean>` |


### removeIndex

| | |
| --- | --- |
| **Description** | Removes a component from the navigation stack at the specified index. |
| **Signature** | `removeIndex(startIndex: number, removeCount?: number, opts?: NavOptions ｜ null, done?: TransitionDoneFn) => Promise<boolean>` |


### setPages

| | |
| --- | --- |
| **Description** | Set the views of the current navigation stack and navigate to the last view. By default animations are disabled, but they can be enabled by passing options to the navigation controller. Navigation parameters can also be passed to the individual pages in the array. |
| **Signature** | `setPages(views: NavComponent[] ｜ NavComponentWithProps[], opts?: NavOptions ｜ null, done?: TransitionDoneFn) => Promise<boolean>` |


### setRoot

| | |
| --- | --- |
| **Description** | Set the root for the current navigation stack to a component. |
| **Signature** | `setRoot<T extends NavComponent>(component: T, componentProps?: ComponentProps<T> ｜ null, opts?: NavOptions ｜ null, done?: TransitionDoneFn) => Promise<boolean>` |


