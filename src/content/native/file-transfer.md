# FileTransfer 


This plugin allows you to upload and download files.


Repo: [https://github.com/apache/cordova-plugin-file-transfer](https://github.com/apache/cordova-plugin-file-transfer)



## Installation 

<ol>
<li>Install the Cordova and Ionic Native plugins:
<code-block language="shell">$ ionic cordova plugin add cordova-plugin-file-transfer
$ npm install --save @ionic-native/file-transfer
</code-block>
</li>
<li><a href="/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



### Supported Platforms

* Amazon Fire OS
* Android
* Browser
* iOS
* Ubuntu
* Windows
* Windows Phone




### Usage


```typescript
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';

constructor(private transfer: FileTransfer, private file: File) { }

...

const fileTransfer: FileTransferObject = this.transfer.create();

// Upload a file:
fileTransfer.upload(..).then(..).catch(..);

// Download a file:
fileTransfer.download(..).then(..).catch(..);

// Abort active transfer:
fileTransfer.abort();

// full example
upload() {
  let options: FileUploadOptions = {
     fileKey: 'file',
     fileName: 'name.jpg',
     headers: {}
     .....
  }

  fileTransfer.upload('<file path>', '<api endpoint>', options)
   .then((data) => {
     // success
   }, (err) => {
     // error
   })
}

download() {
  const url = 'http://www.example.com/file.pdf';
  fileTransfer.download(url, this.file.dataDirectory + 'file.pdf').then((entry) => {
    console.log('download complete: ' + entry.toURL());
  }, (error) => {
    // handle error
  });
}

```

To store files in a different/publicly accessible directory, please refer to the following link
https://github.com/apache/cordova-plugin-file#where-to-store-files




<p><br></p>

## Instance Members

### FileTransferErrorCode

Error code rejected from upload with FileTransferError
Defined in FileTransferError.
     FILE_NOT_FOUND_ERR: 1   Return when file was not found
     INVALID_URL_ERR: 2,     Return when url was invalid
     CONNECTION_ERR: 3,      Return on connection error
     ABORT_ERR: 4,           Return on aborting
     NOT_MODIFIED_ERR: 5     Return on '304 Not Modified' HTTP response

### create

Creates a new FileTransfer object

<p><br></p>

## FileTransferError

<dl>
<dt><h4>body</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Response body. This attribute is only available when a response is received from the HTTP connection.</dd><dt><h4>code</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>One of the predefined error codes listed below.</dd><dt><h4>exception</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Either e.getMessage or e.toString.</dd><dt><h4>http_status</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>HTTP status code. This attribute is only available when a response
code is received from the HTTP connection.</dd><dt><h4>source</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>URL to the source.</dd><dt><h4>target</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>URL to the target.</dd>
</dl>

## FileUploadOptions

<dl>
<dt><h4>chunkedMode</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Whether to upload the data in chunked streaming mode.
Defaults to true. <span class="tag">optional</span></dd><dt><h4>fileKey</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>The name of the form element.
Defaults to 'file'. <span class="tag">optional</span></dd><dt><h4>fileName</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>The file name to use when saving the file on the server.
Defaults to 'image.jpg'. <span class="tag">optional</span></dd><dt><h4>headers</h4><strong>Type: </strong><code>reflection</code></dt>
<dd>A map of header name/header values. Use an array to specify more
than one value. On iOS, FireOS, and Android, if a header named
Content-Type is present, multipart form data will NOT be used. <span class="tag">optional</span></dd><dt><h4>httpMethod</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>The HTTP method to use - either PUT or POST.
Defaults to POST. <span class="tag">optional</span></dd><dt><h4>mimeType</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>The mime type of the data to upload.
Defaults to image/jpeg. <span class="tag">optional</span></dd><dt><h4>params</h4><strong>Type: </strong><code>reflection</code></dt>
<dd>A set of optional key/value pairs to pass in the HTTP request. <span class="tag">optional</span></dd>
</dl>

## FileUploadResult

<dl>
<dt><h4>bytesSent</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>The number of bytes sent to the server as part of the upload.</dd><dt><h4>headers</h4><strong>Type: </strong><code>reflection</code></dt>
<dd>The HTTP response headers by the server.</dd><dt><h4>response</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>The HTTP response returned by the server.</dd><dt><h4>responseCode</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>The HTTP response code returned by the server.</dd>
</dl>

