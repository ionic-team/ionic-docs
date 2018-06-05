---

---

# ion-loading

An overlay that can be used to indicate activity while blocking user interaction. The loading indicator appears on top of the app's content, and can be dismissed by the app to resume user interaction with the app. It includes an optional backdrop, which can be disabled by setting `showBackdrop: false` upon creation.


### Creating

Loading indicators can be created using a [Loading Controller](../../loading-controller/LoadingController). They can be customized by passing loading options in the loading controller's create method. The spinner name should be passed in the `spinner` property, and any optional HTML can be passed in the `content` property. If a value is not passed to `spinner` the loading indicator will use the spinner specified by the platform.


### Dismissing

The loading indicator can be dismissed automatically after a specific amount of time by passing the number of milliseconds to display it in the `duration` of the loading options. By default the loading indicator will show even during page changes, but this can be disabled by setting `dismissOnPageChange` to `true`. To dismiss the loading indicator after creation, call the `dismiss()` method on the loading instance. The `onDidDismiss` function can be called to perform an action after the loading indicator is dismissed.


<!-- Auto Generated Below -->


## Properties

#### content

string

Optional text content to display in the loading indicator.


#### cssClass

string

Additional classes to apply for custom CSS. If multiple classes are
provided they should be separated by spaces.


#### dismissOnPageChange

boolean

If true, the loading indicator will dismiss when the page changes. Defaults to `false`.


#### duration

number

Number of milliseconds to wait before dismissing the loading indicator.


#### enableBackdropDismiss

boolean

If true, the loading indicator will be dismissed when the backdrop is clicked. Defaults to `false`.


#### enterAnimation

AnimationBuilder

Animation to use when the loading indicator is presented.


#### keyboardClose

boolean


#### leaveAnimation

AnimationBuilder

Animation to use when the loading indicator is dismissed.


#### overlayId

number


#### showBackdrop

boolean

If true, a backdrop will be displayed behind the loading indicator. Defaults to `true`.


#### spinner

string

The name of the spinner to display. Possible values are: `"lines"`, `"lines-small"`, `"dots"`,
`"bubbles"`, `"circles"`, `"crescent"`.


#### translucent

boolean

If true, the loading indicator will be translucent. Defaults to `false`.


#### willAnimate

boolean

If true, the loading indicator will animate. Defaults to `true`.


## Attributes

#### content

string

Optional text content to display in the loading indicator.


#### css-class

string

Additional classes to apply for custom CSS. If multiple classes are
provided they should be separated by spaces.


#### dismiss-on-page-change

boolean

If true, the loading indicator will dismiss when the page changes. Defaults to `false`.


#### duration

number

Number of milliseconds to wait before dismissing the loading indicator.


#### enable-backdrop-dismiss

boolean

If true, the loading indicator will be dismissed when the backdrop is clicked. Defaults to `false`.


#### enter-animation



Animation to use when the loading indicator is presented.


#### keyboard-close

boolean


#### leave-animation



Animation to use when the loading indicator is dismissed.


#### overlay-id

number


#### show-backdrop

boolean

If true, a backdrop will be displayed behind the loading indicator. Defaults to `true`.


#### spinner

string

The name of the spinner to display. Possible values are: `"lines"`, `"lines-small"`, `"dots"`,
`"bubbles"`, `"circles"`, `"crescent"`.


#### translucent

boolean

If true, the loading indicator will be translucent. Defaults to `false`.


#### will-animate

boolean

If true, the loading indicator will animate. Defaults to `true`.


## Events

#### ionLoadingDidDismiss

Emitted after the loading has dismissed.


#### ionLoadingDidLoad

Emitted after the loading has loaded.


#### ionLoadingDidPresent

Emitted after the loading has presented.


#### ionLoadingDidUnload

Emitted after the loading has unloaded.


#### ionLoadingWillDismiss

Emitted before the loading has dismissed.


#### ionLoadingWillPresent

Emitted before the loading has presented.


## Methods

#### dismiss()

Dismiss the loading overlay after it has been presented.


#### onDidDismiss()

Returns a promise that resolves when the loading did dismiss. It also accepts a callback
that is called in the same circustances.


#### onWillDismiss()

Returns a promise that resolves when the loading will dismiss. It also accepts a callback
that is called in the same circustances.

```
const {data, role} = await loading.onWillDismiss();
```


#### present()

Present the loading overlay after it has been created.



----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
