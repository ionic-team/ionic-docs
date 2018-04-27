---
previewUrl: "/docs/docs-content/api/0.2.1/segment-demo.html"
---
# ion-segment

Segments display a group of related buttons, sometimes known as segmented controls, in a horizontal row. They can be displayed inside of a toolbar or the main content.

Their functionality is similar to tabs, where selecting one will deselect all others. Segments are useful for toggling between different views inside of the content. Tabs should be used instead of a segment when clicking on a control should navigate between pages.

```html
<!-- Default Segment -->
<ion-segment>
  <ion-segment-button value="friends">
    Friends
  </ion-segment-button>
  <ion-segment-button value="enemies">
    Enemies
  </ion-segment-button>
</ion-segment>

<!-- Disabled Segment -->
<ion-segment disabled>
  <ion-segment-button value="sunny" checked>
    Sunny
  </ion-segment-button>
  <ion-segment-button value="rainy">
    Rainy
  </ion-segment-button>
</ion-segment>

<!-- Segment with anchors -->
<ion-segment>
  <ion-segment-button href="#dogs" value="dogs">
    Dogs
  </ion-segment-button>
  <ion-segment-button href="#cats" value="cats">
    Cats
  </ion-segment-button>
</ion-segment>

<!-- Segment with secondary color -->
<ion-segment color="secondary">
  <ion-segment-button value="standard">
    Standard
  </ion-segment-button>
  <ion-segment-button value="hybrid">
    Hybrid
  </ion-segment-button>
  <ion-segment-button value="sat">
    Satellite
  </ion-segment-button>
</ion-segment>

<!-- Segment in a toolbar -->
<ion-toolbar>
  <ion-segment>
    <ion-segment-button value="camera">
      <ion-icon name="camera"></ion-icon>
    </ion-segment-button>
    <ion-segment-button value="bookmark">
      <ion-icon name="bookmark"></ion-icon>
    </ion-segment-button>
  </ion-segment>
</ion-toolbar>
```


<h2>Properties</h2> 

<dl>
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
<dd>the value of the segment.</dd>

</dl>


<h2>Events</h2>

<dl><dt>
<h3>ionChange</h3></dt>
<dd>Emitted when the value property has changed.</dd>

</dl>


