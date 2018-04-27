---
previewUrl: "/docs/docs-content/api/0.2.1/refresher-demo.html"
---
# ion-refresher

The refresher provides pull-to-refresh functionality on a content component.
The pull-to-refresh pattern lets a user pull down on a list of data using touch
in order to retrieve more data.

Data should be modified during the refresher's output events. Once the async
operation has completed and the refreshing should end, call `complete()` on the
refresher.


```html
<ion-content>
  <ion-refresher slot="fixed">
    <ion-refresher-content>
    </ion-refresher-content>
  </ion-refresher>
</ion-content>
```


<h2>Properties</h2> 

<dl>
<dt>
<h3>closeDuration</h3> 
<strong>Attribute:</strong>  <code>close-duration</code>
<strong>Type:</strong> <code>string</code>
</dt>
<dd>Time it takes to close the refresher. Defaults to `280ms`.</dd>

<dt>
<h3>disabled</h3> 
<strong>Attribute:</strong>  <code>disabled</code>
<strong>Type:</strong> <code>boolean</code>
</dt>
<dd>If true, the refresher will be hidden. Defaults to `true`.</dd>

<dt>
<h3>pullMax</h3> 
<strong>Attribute:</strong>  <code>pull-max</code>
<strong>Type:</strong> <code>any</code>
</dt>
<dd>The maximum distance of the pull until the refresher
will automatically go into the `refreshing` state.
Defaults to the result of `pullMin + 60`.</dd>

<dt>
<h3>pullMin</h3> 
<strong>Attribute:</strong>  <code>pull-min</code>
<strong>Type:</strong> <code>number</code>
</dt>
<dd>The minimum distance the user must pull down until the
refresher will go into the `refreshing` state. Defaults to `60`.</dd>

<dt>
<h3>snapbackDuration</h3> 
<strong>Attribute:</strong>  <code>snapback-duration</code>
<strong>Type:</strong> <code>string</code>
</dt>
<dd>Time it takes the refresher to to snap back to the `refreshing` state. Defaults to `280ms`.</dd>

</dl>


<h2>Events</h2>

<dl><dt>
<h3>ionPull</h3></dt>
<dd>Emitted while the user is pulling down the content and exposing the refresher.</dd>

<dt>
<h3>ionRefresh</h3></dt>
<dd>Emitted when the user lets go of the content and has pulled down
further than the `pullMin` or pulls the content down and exceeds the pullMax.
Updates the refresher state to `refreshing`. The `complete()` method should be
called when the async operation has completed.</dd>

<dt>
<h3>ionStart</h3></dt>
<dd>Emitted when the user begins to start pulling down.</dd>

</dl>


<h2>Methods</h2>
<dl>

<dt><h3>cancel()</h3></dt>
<dd>Changes the refresher's state from `refreshing` to `cancelling`.</dd>

<dt><h3>complete()</h3></dt>
<dd>Call `complete()` when your async operation has completed.
For example, the `refreshing` state is while the app is performing
an asynchronous operation, such as receiving more data from an
AJAX request. Once the data has been received, you then call this
method to signify that the refreshing has completed and to close
the refresher. This method also changes the refresher's state from
`refreshing` to `completing`.</dd>

<dt><h3>getProgress()</h3></dt>
<dd>A number representing how far down the user has pulled.
The number `0` represents the user hasn't pulled down at all. The
number `1`, and anything greater than `1`, represents that the user
has pulled far enough down that when they let go then the refresh will
happen. If they let go and the number is less than `1`, then the
refresh will not happen, and the content will return to it's original
position.</dd>

</dl>


