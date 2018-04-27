---
---
# ion-segment-button

Segment buttons are groups of related buttons inside of a [Segment](../../segment/Segment). They are displayed in a horizontal row. A segment button can be checked by default by adding the `checked` attribute or by setting the `value` of the segment to the `value` of the segment button. Only one segment button should be selected at a time.

```html
<!-- Segment buttons with text -->
<ion-segment>
  <ion-segment-button>
    Friends
  </ion-segment-button>
  <ion-segment-button>
    Enemies
  </ion-segment-button>
</ion-segment>

<!-- Segment buttons with the first checked and the last disabled -->
<ion-segment>
  <ion-segment-button checked>
    Paid
  </ion-segment-button>
  <ion-segment-button>
    Free
  </ion-segment-button>
  <ion-segment-button disabled>
    Top
  </ion-segment-button>
</ion-segment>

<!-- Segment buttons with values and icons -->
<ion-segment>
  <ion-segment-button value="camera">
    <ion-icon name="camera"></ion-icon>
  </ion-segment-button>
  <ion-segment-button value="bookmark">
    <ion-icon name="bookmark"></ion-icon>
  </ion-segment-button>
</ion-segment>

<!-- Segment with a value that checks the last button -->
<ion-segment value="shared">
  <ion-segment-button value="bookmarks">
    Bookmarks
  </ion-segment-button>
  <ion-segment-button value="reading">
    Reading List
  </ion-segment-button>
  <ion-segment-button value="shared">
    Shared Links
  </ion-segment-button>
</ion-segment>
```

<h2>Properties</h2> 

<dl>
<dt>
<h3>activated</h3> 
<strong>Attribute:</strong>  <code>activated</code>
<strong>Type:</strong> <code>boolean</code>
</dt>
<dd></dd>

<dt>
<h3>checked</h3> 
<strong>Attribute:</strong>  <code>checked</code>
<strong>Type:</strong> <code>boolean</code>
</dt>
<dd>If true, the segment button is selected. Defaults to `false`.</dd>

<dt>
<h3>color</h3> 
<strong>Attribute:</strong>  <code>color</code>
<strong>Type:</strong> <code>string</code>
</dt>
<dd>The color to use for the text color.
Default options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`.</dd>

<dt>
<h3>disabled</h3> 
<strong>Attribute:</strong>  <code>disabled</code>
<strong>Type:</strong> <code>boolean</code>
</dt>
<dd></dd>

<dt>
<h3>href</h3> 
<strong>Attribute:</strong>  <code>href</code>
<strong>Type:</strong> <code>string</code>
</dt>
<dd>Contains a URL or a URL fragment that the hyperlink points to.
If this property is set, an anchor tag will be rendered.</dd>

<dt>
<h3>mode</h3> 
<strong>Attribute:</strong>  <code>mode</code>
</dt>
<dd>The mode determines which platform styles to use.
Possible values are: `"ios"` or `"md"`.</dd>

<dt>
<h3>value</h3> 
<strong>Attribute:</strong>  <code>value</code>
<strong>Type:</strong> <code>string</code>
</dt>
<dd>The value of the segment button.</dd>

</dl>


<h2>Events</h2>

<dl><dt>
<h3>ionClick</h3></dt>
<dd>Emitted when the segment button is clicked.</dd>

</dl>


