# DocumentViewer 


This plugin offers a slim API to view PDF files which are either stored in the apps assets folder (/www/*) or in any other file system directory available via the cordova file plugin.


Repo: [https://github.com/sitewaerts/cordova-plugin-document-viewer](https://github.com/sitewaerts/cordova-plugin-document-viewer)



## Installation 

<ol>
<li>Install the Cordova and Ionic Native plugins:
<code-block language="shell">$ ionic cordova plugin add cordova-plugin-document-viewer
$ npm install --save @ionic-native/document-viewer
</code-block>
</li>
<li><a href="/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



### Supported Platforms

* Android
* iOS
* Windows




### Usage


```typescript
import { DocumentViewer } from '@ionic-native/document-viewer';


constructor(private document: DocumentViewer) { }

...
const options: DocumentViewerOptions = {
  title: 'My PDF'
}

this.document.viewDocument('assets/myFile.pdf', 'application/pdf', options)

```




<p><br></p>

## Instance Members

### canViewDocument

Check if the document can be shown

<dl>
<dt><h4>url</h4><strong>Type: </strong><code>string</code></dt>
<dd>Url to the file</dd><dt><h4>contentType</h4><strong>Type: </strong><code>string</code></dt>
<dd>Content type of the file</dd><dt><h4>options</h4><strong>Type: </strong><code>DocumentViewerOptions</code></dt>
<dd>See DocumentViewerOptions table below</dd><dt><h4>onPossible</h4><strong>Type: </strong><code>Function</code></dt>
<dd>See Function table below <span class="tag">optional</span></dd><dt><h4>onMissingApp</h4><strong>Type: </strong><code>Function</code></dt>
<dd>See Function table below <span class="tag">optional</span></dd><dt><h4>onImpossible</h4><strong>Type: </strong><code>Function</code></dt>
<dd>See Function table below <span class="tag">optional</span></dd><dt><h4>onError</h4><strong>Type: </strong><code>Function</code></dt>
<dd>See Function table below <span class="tag">optional</span></dd>
</dl>

### getSupportInfo

Displays the email composer pre-filled with data.

### viewDocument

Opens the file

<dl>
<dt><h4>url</h4><strong>Type: </strong><code>string</code></dt>
<dd>Url to the file</dd><dt><h4>contentType</h4><strong>Type: </strong><code>string</code></dt>
<dd>Content type of the file</dd><dt><h4>options</h4><strong>Type: </strong><code>DocumentViewerOptions</code></dt>
<dd>See DocumentViewerOptions table below</dd><dt><h4>onShow</h4><strong>Type: </strong><code>Function</code></dt>
<dd>See Function table below <span class="tag">optional</span></dd><dt><h4>onClose</h4><strong>Type: </strong><code>Function</code></dt>
<dd>See Function table below <span class="tag">optional</span></dd><dt><h4>onMissingApp</h4><strong>Type: </strong><code>Function</code></dt>
<dd>See Function table below <span class="tag">optional</span></dd><dt><h4>onError</h4><strong>Type: </strong><code>Function</code></dt>
<dd>See Function table below <span class="tag">optional</span></dd>
</dl>

<p><br></p>

## DocumentViewerOptions

<dl>
<dt><h4>autoClose</h4><strong>Type: </strong><code>reflection</code></dt>
<dd>undefined <span class="tag">optional</span></dd><dt><h4>bookmarks</h4><strong>Type: </strong><code>reflection</code></dt>
<dd>undefined <span class="tag">optional</span></dd><dt><h4>documentView</h4><strong>Type: </strong><code>reflection</code></dt>
<dd>undefined <span class="tag">optional</span></dd><dt><h4>email</h4><strong>Type: </strong><code>reflection</code></dt>
<dd>undefined <span class="tag">optional</span></dd><dt><h4>navigationView</h4><strong>Type: </strong><code>reflection</code></dt>
<dd>undefined <span class="tag">optional</span></dd><dt><h4>openWith</h4><strong>Type: </strong><code>reflection</code></dt>
<dd>undefined <span class="tag">optional</span></dd><dt><h4>print</h4><strong>Type: </strong><code>reflection</code></dt>
<dd>undefined <span class="tag">optional</span></dd><dt><h4>search</h4><strong>Type: </strong><code>reflection</code></dt>
<dd>undefined <span class="tag">optional</span></dd><dt><h4>title</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined <span class="tag">optional</span></dd>
</dl>

