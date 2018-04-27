---
---
# ion-item-options

The option buttons for an `ion-item-sliding`. These buttons can be placed either on the left or right side.
You can combine the `(ionSwipe)` event plus the `expandable` directive to create a full swipe action for the item.


```html
<ion-item-sliding>
  <ion-item>
    Item 1
  </ion-item>
  <ion-item-options side="right" (ionSwipe)="saveItem(item)">
    <ion-item-option expandable (click)="saveItem(item)">
      <ion-icon name="star"></ion-icon>
    </ion-item-option>
  </ion-item-options>
</ion-item-sliding>
```


<h2>Properties</h2> 

<dl>
<dt>
<h3>side</h3> 
<strong>Attribute:</strong>  <code>side</code>
</dt>
<dd>The side the option button should be on. Defaults to `"right"`.
If you have multiple `ion-item-options`, a side must be provided for each.</dd>

</dl>


<h2>Events</h2>

<dl><dt>
<h3>ionSwipe</h3></dt>
<dd>Emitted when the item has been fully swiped.</dd>

</dl>


<h2>Methods</h2>
<dl>

<dt><h3>fireSwipeEvent()</h3></dt>
<dd></dd>

<dt><h3>isRightSide()</h3></dt>
<dd></dd>

<dt><h3>width()</h3></dt>
<dd></dd>

</dl>


