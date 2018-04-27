---
---
# ion-fab-button

Floating Action Buttons (FABs) represent the primary action in an application. By default, they have a circular shape. When pressed, the button may open more related actions. As the name suggests, FABs generally float over the content in a fixed position. This is not achieved exclusively by using an `<ion-fab-button>FAB</ion-fab-button>`. They need to be wrapped with an `<ion-fab>` component in order to be fixed over the content:

```html
<ion-content>
  <!-- Fixed Floating Action Button that does not scroll with the content -->
  <ion-fab>
    <ion-fab-button>Button</ion-fab-button>
  </ion-fab>

  <!-- Default Floating Action Button that scrolls with the content.-->
  <ion-fab-button>Button</ion-fab-button>
</ion-content>
```

If the FAB button is not wrapped with `<ion-fab>`, it will scroll with the content. FAB buttons have a default size, a mini size and can accept different colors:

```html
<ion-content>
  <ion-fab-button>Default</ion-fab-button>

  <!-- Mini -->
  <ion-fab-button mini>Mini</ion-fab-button>

  <!-- Colors -->
  <ion-fab-button color="primary">Primary</ion-fab-button>
  <ion-fab-button color="secondary">Secondary</ion-fab-button>
  <ion-fab-button color="danger">Danger</ion-fab-button>
  <ion-fab-button color="light">Light</ion-fab-button>
  <ion-fab-button color="dark">Dark</ion-fab-button>
</ion-content>
```


<h2>Properties</h2> 

<dl>
<dt>
<h3>activated</h3> 
<strong>Attribute:</strong>  <code>activated</code>
<strong>Type:</strong> <code>boolean</code>
</dt>
<dd>If true, the fab button will be show a close icon. Defaults to `false`.</dd>

<dt>
<h3>color</h3> 
<strong>Attribute:</strong>  <code>color</code>
<strong>Type:</strong> <code>string</code>
</dt>
<dd>The color to use from your Sass `$colors` map.
Default options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`.
For more information, see [Theming your App](/docs/theming/theming-your-app).</dd>

<dt>
<h3>disabled</h3> 
<strong>Attribute:</strong>  <code>disabled</code>
<strong>Type:</strong> <code>boolean</code>
</dt>
<dd>If true, the user cannot interact with the fab button. Defaults to `false`.</dd>

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
Possible values are: `"ios"` or `"md"`.
For more information, see [Platform Styles](/docs/theming/platform-specific-styles).</dd>

<dt>
<h3>show</h3> 
<strong>Attribute:</strong>  <code>show</code>
<strong>Type:</strong> <code>boolean</code>
</dt>
<dd></dd>

<dt>
<h3>toggleActive</h3> 
<strong>Attribute:</strong>  <code>toggle-active</code>
</dt>
<dd></dd>

<dt>
<h3>translucent</h3> 
<strong>Attribute:</strong>  <code>translucent</code>
<strong>Type:</strong> <code>boolean</code>
</dt>
<dd>If true, the fab button will be translucent. Defaults to `false`.</dd>

</dl>


