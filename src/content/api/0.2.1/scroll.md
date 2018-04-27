---
---
# ion-scroll



<h2>Properties</h2> 

<dl>
<dt>
<h3>forceOverscroll</h3> 
<strong>Attribute:</strong>  <code>force-overscroll</code>
<strong>Type:</strong> <code>boolean</code>
</dt>
<dd>If true and the content does not cause an overflow scroll, the scroll interaction will cause a bounce.
If the content exceeds the bounds of ionScroll, nothing will change.
Note, the does not disable the system bounce on iOS. That is an OS level setting.</dd>

<dt>
<h3>mode</h3> 
<strong>Attribute:</strong>  <code>mode</code>
<strong>Type:</strong> <code>string</code>
</dt>
<dd></dd>

<dt>
<h3>scrollEvents</h3> 
<strong>Attribute:</strong>  <code>scroll-events</code>
<strong>Type:</strong> <code>boolean</code>
</dt>
<dd></dd>

</dl>


<h2>Events</h2>

<dl><dt>
<h3>ionScroll</h3></dt>
<dd>Emitted while scrolling. This event is disabled by default.
Look at the property: `scrollEvents`</dd>

<dt>
<h3>ionScrollEnd</h3></dt>
<dd>Emitted when the scroll has ended.</dd>

<dt>
<h3>ionScrollStart</h3></dt>
<dd>Emitted when the scroll has started.</dd>

</dl>


<h2>Methods</h2>
<dl>

<dt><h3>scrollByPoint()</h3></dt>
<dd></dd>

<dt><h3>scrollToBottom()</h3></dt>
<dd></dd>

<dt><h3>scrollToPoint()</h3></dt>
<dd></dd>

<dt><h3>scrollToTop()</h3></dt>
<dd></dd>

</dl>


