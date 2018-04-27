---
---
# ion-refresher-content

The refresher content contains the text, icon and spinner to display during a pull-to-refresh. Ionic provides the pulling icon and refreshing spinner based on the platform. However, the default icon, spinner, and text can be customized based on the state of the refresher.

```html
<ion-content>
  <ion-refresher slot="fixed">
    <ion-refresher-content
      pulling-icon="arrow-dropdown"
      pulling-text="Pull to refresh"
      refreshing-spinner="circles"
      refreshing-text="Refreshing...">
    </ion-refresher-content>
  </ion-refresher>
</ion-content>
```


<h2>Properties</h2> 

<dl>
<dt>
<h3>pullingIcon</h3> 
<strong>Attribute:</strong>  <code>pulling-icon</code>
<strong>Type:</strong> <code>string</code>
</dt>
<dd>A static icon to display when you begin to pull down</dd>

<dt>
<h3>pullingText</h3> 
<strong>Attribute:</strong>  <code>pulling-text</code>
<strong>Type:</strong> <code>string</code>
</dt>
<dd>The text you want to display when you begin to pull down</dd>

<dt>
<h3>refreshingSpinner</h3> 
<strong>Attribute:</strong>  <code>refreshing-spinner</code>
<strong>Type:</strong> <code>string</code>
</dt>
<dd>An animated SVG spinner that shows when refreshing begins</dd>

<dt>
<h3>refreshingText</h3> 
<strong>Attribute:</strong>  <code>refreshing-text</code>
<strong>Type:</strong> <code>string</code>
</dt>
<dd>The text you want to display when performing a refresh</dd>

</dl>


