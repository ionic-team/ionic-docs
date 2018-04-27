---
previewUrl: "/docs/docs-content/api/0.2.1/platform-demo.html"
---
# ion-platform



<h2>Methods</h2>
<dl>

<dt><h3>getQueryParam()</h3></dt>
<dd></dd>

<dt><h3>is()</h3></dt>
<dd>Depending on the platform the user is on, `is(platformName)` will
return `true` or `false`. Note that the same app can return `true`
for more than one platform name. For example, an app running from
an iPad would return `true` for the platform names: `mobile`,
`ios`, `ipad`, and `tablet`. Additionally, if the app was running
from Cordova then `cordova` would be true, and if it was running
from a web browser on the iPad then `mobileweb` would be `true`.

*
```
import { Platform } from 'ionic-angular';</dd>

<dt><h3>isLandscape()</h3></dt>
<dd>Returns whether the device is in landscape orientation</dd>

<dt><h3>isPortrait()</h3></dt>
<dd>Returns whether the device is in portration orientation</dd>

<dt><h3>platforms()</h3></dt>
<dd></dd>

<dt><h3>ready()</h3></dt>
<dd></dd>

<dt><h3>versions()</h3></dt>
<dd></dd>

</dl>


