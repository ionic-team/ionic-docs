---
previewUrl: "/docs/docs-content/api/0.2.1/back-button-demo.html"
---
# ion-back-button

A back button is a component that allows you navigate back into app history. To
add a back button to your view, all you need is:

```html
<ion-header>
  <ion-toolbar>
    <ion-buttons slot="start">
      <ion-back-button></ion-back-button>
    </ion-buttons>
  </ion-toolbar>
</ion-header>
```

The back button component is smart enough to know what to render and what content to show.

If, however, you want more control over what is shown in the back button, you use the
`text` and `icon` properties.

```html
<ion-header>
  <ion-toolbar>
    <ion-buttons slot="start">
      <ion-back-button text="Volver" icon="add"></ion-back-button>
    </ion-buttons>
  </ion-toolbar>
</ion-header>
```

Or no button text at all:


```html
<ion-header>
  <ion-toolbar>
    <ion-buttons slot="start">
      <ion-back-button text="" icon="add"></ion-back-button>
    </ion-buttons>
  </ion-toolbar>
</ion-header>
```


<h2>Properties</h2> 

<dl>
<dt>
<h3>defaultHref</h3> 
<strong>Attribute:</strong>  <code>default-href</code>
<strong>Type:</strong> <code>string</code>
</dt>
<dd></dd>

<dt>
<h3>icon</h3> 
<strong>Attribute:</strong>  <code>icon</code>
<strong>Type:</strong> <code>string</code>
</dt>
<dd></dd>

<dt>
<h3>mode</h3> 
<strong>Attribute:</strong>  <code>mode</code>
</dt>
<dd>The mode determines which platform styles to use.
Possible values are: `"ios"` or `"md"`.
For more information, see [Platform Styles](/docs/theming/platform-specific-styles).</dd>

<dt>
<h3>text</h3> 
<strong>Attribute:</strong>  <code>text</code>
</dt>
<dd>The text property is used to provide custom text for the back button while using the
default look-and-feel.</dd>

</dl>


