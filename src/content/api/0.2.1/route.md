---
---
# ion-route



<h2>Properties</h2> 

<dl>
<dt>
<h3>component</h3> 
<strong>Attribute:</strong>  <code>component</code>
<strong>Type:</strong> <code>string</code>
</dt>
<dd>Name of the component to load/select in the navigation outlet (`ion-tabs`, `ion-nav`)
when the route matches.

The value of this property is not always the tagname of the component to load,
in ion-tabs it actually refers to the name of the `ion-tab` to select.</dd>

<dt>
<h3>componentProps</h3> 
<strong>Attribute:</strong>  <code>component-props</code>
</dt>
<dd>Props to pass when the `component` specified in this route load.</dd>

<dt>
<h3>url</h3> 
<strong>Attribute:</strong>  <code>url</code>
<strong>Type:</strong> <code>string</code>
</dt>
<dd>Relative path that needs to match in order for this route to apply.</dd>

</dl>


<h2>Events</h2>

<dl><dt>
<h3>ionRouteDataChanged</h3></dt>
<dd>Used internaly by `ion-router` to know when this route did change.</dd>

</dl>


