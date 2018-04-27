---
previewUrl: "/docs/docs-content/api/0.2.1/content-demo.html"
---
# ion-content

Content component provides an easy to use content area with some useful methods
to control the scrollable area. There should only be one content in a single
view component.

```html
<ion-content>
  Add your content here!
</ion-content>

```

<h2>Properties</h2> 

<dl>
<dt>
<h3>forceOverscroll</h3> 
<strong>Attribute:</strong>  <code>force-overscroll</code>
<strong>Type:</strong> <code>boolean</code>
</dt>
<dd>If true and the content does not cause an overflow scroll, the scroll interaction will cause a bounce.
If the content exceeds the bounds of ionContent, nothing will change.
Note, the does not disable the system bounce on iOS. That is an OS level setting.</dd>

<dt>
<h3>fullscreen</h3> 
<strong>Attribute:</strong>  <code>fullscreen</code>
<strong>Type:</strong> <code>boolean</code>
</dt>
<dd>If true, the content will scroll behind the headers
and footers. This effect can easily be seen by setting the toolbar
to transparent.</dd>

<dt>
<h3>scrollEnabled</h3> 
<strong>Attribute:</strong>  <code>scroll-enabled</code>
<strong>Type:</strong> <code>boolean</code>
</dt>
<dd></dd>

<dt>
<h3>scrollEvents</h3> 
<strong>Attribute:</strong>  <code>scroll-events</code>
<strong>Type:</strong> <code>boolean</code>
</dt>
<dd></dd>

</dl>


<h2>Methods</h2>
<dl>

<dt><h3>scrollByPoint()</h3></dt>
<dd></dd>

<dt><h3>scrollToBottom()</h3></dt>
<dd>Scroll to the bottom of the content component.

Duration of the scroll animation in milliseconds. Defaults to `300`.
Returns a promise which is resolved when the scroll has completed.</dd>

<dt><h3>scrollToPoint()</h3></dt>
<dd></dd>

<dt><h3>scrollToTop()</h3></dt>
<dd>Scroll to the top of the content component.

Duration of the scroll animation in milliseconds. Defaults to `300`.
Returns a promise which is resolved when the scroll has completed.</dd>

</dl>


