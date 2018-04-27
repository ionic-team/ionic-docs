---
previewUrl: "/docs/docs-content/api/0.2.1/chip-demo.html"
---
# ion-chip

Chips represent complex entities in small blocks, such as a contact. A chip can contain several different elements such as avatars, text, buttons, and icons.


```html
<ion-chip>
  <ion-label>Default</ion-label>
</ion-chip>

<ion-chip>
  <ion-label color="secondary">Secondary Label</ion-label>
</ion-chip>

<ion-chip color="secondary">
  <ion-label color="dark">Secondary w/ Dark label</ion-label>
</ion-chip>

<ion-chip>
  <ion-icon name="pin"></ion-icon>
  <ion-label>Default</ion-label>
</ion-chip>

<ion-chip>
  <ion-icon name="heart" color="dark"></ion-icon>
  <ion-label>Default</ion-label>
</ion-chip>

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
<h3>mode</h3> 
<strong>Attribute:</strong>  <code>mode</code>
</dt>
<dd>The mode determines which platform styles to use.
Possible values are: `"ios"` or `"md"`.</dd>

</dl>


