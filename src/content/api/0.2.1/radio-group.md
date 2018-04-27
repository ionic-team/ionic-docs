---
previewUrl: "/docs/docs-content/api/0.2.1/radio-group-demo.html"
---
# ion-radio-group

A radio group is a group of [radio buttons](../radio). It allows
a user to select at most one radio button from a set. Checking one radio
button that belongs to a radio group unchecks any previous checked
radio button within the same group.


```html
<ion-list>

  <ion-radio-group>

    <ion-list-header>
      Auto Manufacturers
    </ion-list-header>

    <ion-item>
      <ion-label>Cord</ion-label>
      <ion-radio value="cord"></ion-radio>
    </ion-item>

    <ion-item>
      <ion-label>Duesenberg</ion-label>
      <ion-radio value="duesenberg"></ion-radio>
    </ion-item>

    <ion-item>
      <ion-label>Hudson</ion-label>
      <ion-radio value="hudson"></ion-radio>
    </ion-item>

    <ion-item>
      <ion-label>Packard</ion-label>
      <ion-radio value="packard"></ion-radio>
    </ion-item>

    <ion-item>
      <ion-label>Studebaker</ion-label>
      <ion-radio value="studebaker"></ion-radio>
    </ion-item>

  </ion-radio-group>

</ion-list>
```


<h2>Properties</h2> 

<dl>
<dt>
<h3>allowEmptySelection</h3> 
<strong>Attribute:</strong>  <code>allow-empty-selection</code>
<strong>Type:</strong> <code>boolean</code>
</dt>
<dd></dd>

<dt>
<h3>disabled</h3> 
<strong>Attribute:</strong>  <code>disabled</code>
<strong>Type:</strong> <code>boolean</code>
</dt>
<dd>Indicates that the user cannot interact with the control.</dd>

<dt>
<h3>name</h3> 
<strong>Attribute:</strong>  <code>name</code>
<strong>Type:</strong> <code>string</code>
</dt>
<dd>The name of the control, which is submitted with the form data.</dd>

<dt>
<h3>value</h3> 
<strong>Attribute:</strong>  <code>value</code>
<strong>Type:</strong> <code>string</code>
</dt>
<dd>the value of the radio group.</dd>

</dl>


<h2>Events</h2>

<dl><dt>
<h3>ionChange</h3></dt>
<dd>Emitted when the value has changed.</dd>

</dl>


