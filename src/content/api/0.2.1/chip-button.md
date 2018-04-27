---
---
# ion-chip-button


A chip-button is an inset button that is placed inside of a chip.


```html

<ion-chip>
  <ion-label>Button Chip</ion-label>
  <ion-chip-button fill="clear" color="light">
    <ion-icon name="close-circle"></ion-icon>
  </ion-chip-button>
</ion-chip>

<ion-chip>
  <ion-icon name="pin" color="primary"></ion-icon>
  <ion-label>Icon Chip</ion-label>
  <ion-chip-button>
    <ion-icon name="close"></ion-icon>
  </ion-chip-button>
</ion-chip>

<ion-chip>
  <ion-avatar>
    <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y">
  </ion-avatar>
  <ion-label>Avatar Chip</ion-label>
  <ion-chip-button fill="clear" color="dark">
    <ion-icon name="close-circle"></ion-icon>
  </ion-chip-button>
</ion-chip>
```


<h2>Properties</h2> 

<dl>
<dt>
<h3>color</h3> 
<strong>Attribute:</strong>  <code>color</code>
<strong>Type:</strong> <code>string</code>
</dt>
<dd>The color to use.
Default options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`.</dd>

<dt>
<h3>disabled</h3> 
<strong>Attribute:</strong>  <code>disabled</code>
<strong>Type:</strong> <code>boolean</code>
</dt>
<dd>If true, the user cannot interact with the chip button. Defaults to `false`.</dd>

<dt>
<h3>fill</h3> 
<strong>Attribute:</strong>  <code>fill</code>
<strong>Type:</strong> <code>string</code>
</dt>
<dd>Set to `"clear"` for a transparent button style.</dd>

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

</dl>


