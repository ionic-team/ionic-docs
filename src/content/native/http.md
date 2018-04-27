# HTTP 


Cordova / Phonegap plugin for communicating with HTTP servers. Supports iOS and Android.

Advantages over Javascript requests:
- Background threading - all requests are done in a background thread
- SSL Pinning


Repo: [https://github.com/silkimen/cordova-plugin-advanced-http](https://github.com/silkimen/cordova-plugin-advanced-http)



## Installation 

<ol>
<li>Install the Cordova and Ionic Native plugins:
<code-block language="shell">$ ionic cordova plugin add cordova-plugin-advanced-http
$ npm install --save @ionic-native/http
</code-block>
</li>
<li><a href="/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



### Supported Platforms

* Android
* iOS




### Usage


```typescript
import { HTTP } from '@ionic-native/http';

constructor(private http: HTTP) {}

...

this.http.get('http://ionic.io', {}, {})
  .then(data => {

    console.log(data.status);
    console.log(data.data); // data received by server
    console.log(data.headers);

  })
  .catch(error => {

    console.log(error.status);
    console.log(error.error); // error message as string
    console.log(error.headers);

  });

```



<p><br></p>

## Instance Members

### getRequestTimeout

Get global request timeout value in seconds.

### acceptAllCerts

Accept all SSL certificates. Or disabled accepting all certificates. Defaults to false.

<dl>
<dt><h4>accept</h4><strong>Type: </strong><code>boolean</code></dt>
<dd>Set to true to accept</dd>
</dl>

### head

Make a HEAD request

<dl>
<dt><h4>url</h4><strong>Type: </strong><code>string</code></dt>
<dd>The url to send the request to</dd><dt><h4>parameters</h4><strong>Type: </strong><code>any</code></dt>
<dd>Parameters to send with the request</dd><dt><h4>headers</h4><strong>Type: </strong><code>any</code></dt>
<dd>The headers to set for this request</dd>
</dl>

### delete

Make a DELETE request

<dl>
<dt><h4>url</h4><strong>Type: </strong><code>string</code></dt>
<dd>The url to send the request to</dd><dt><h4>parameters</h4><strong>Type: </strong><code>any</code></dt>
<dd>Parameters to send with the request</dd><dt><h4>headers</h4><strong>Type: </strong><code>any</code></dt>
<dd>The headers to set for this request</dd>
</dl>

### clearCookies

Clear all cookies.

### post

Make a POST request

<dl>
<dt><h4>url</h4><strong>Type: </strong><code>string</code></dt>
<dd>The url to send the request to</dd><dt><h4>body</h4><strong>Type: </strong><code>any</code></dt>
<dd>The body of the request</dd><dt><h4>headers</h4><strong>Type: </strong><code>any</code></dt>
<dd>The headers to set for this request</dd>
</dl>

### enableSSLPinning

Enable or disable SSL Pinning. This defaults to false.

<dl>
<dt><h4>enable</h4><strong>Type: </strong><code>boolean</code></dt>
<dd>Set to true to enable</dd>
</dl>

### disableRedirect

Disable following redirects automatically.

<dl>
<dt><h4>disable</h4><strong>Type: </strong><code>boolean</code></dt>
<dd>Set to true to disable following redirects automatically</dd>
</dl>

### downloadFile

undefined

<dl>
<dt><h4>url</h4><strong>Type: </strong><code>string</code></dt>
<dd>The url to send the request to</dd><dt><h4>body</h4><strong>Type: </strong><code>any</code></dt>
<dd>The body of the request</dd><dt><h4>headers</h4><strong>Type: </strong><code>any</code></dt>
<dd>The headers to set for this request</dd><dt><h4>filePath</h4><strong>Type: </strong><code>string</code></dt>
<dd>The path to donwload the file to, including the file name.</dd>
</dl>

### removeCookies

Remove cookies for given URL.

<dl>
<dt><h4>url</h4><strong>Type: </strong><code>string</code></dt>
<dd>undefined</dd><dt><h4>cb</h4></dt>
<dd>
</dd>
</dl>

### getDataSerializer

Get the name of the data serializer which will be used for all future POST and PUT requests.

### getCookieString

Resolve cookie string for given URL.

<dl>
<dt><h4>url</h4><strong>Type: </strong><code>string</code></dt>
<dd>
</dd>
</dl>

### getBasicAuthHeader

This returns an object representing a basic HTTP Authorization header of the form.

<dl>
<dt><h4>username</h4><strong>Type: </strong><code>string</code></dt>
<dd>Username</dd><dt><h4>password</h4><strong>Type: </strong><code>string</code></dt>
<dd>Password</dd>
</dl>

### get

Make a GET request

<dl>
<dt><h4>url</h4><strong>Type: </strong><code>string</code></dt>
<dd>The url to send the request to</dd><dt><h4>parameters</h4><strong>Type: </strong><code>any</code></dt>
<dd>Parameters to send with the request</dd><dt><h4>headers</h4><strong>Type: </strong><code>any</code></dt>
<dd>The headers to set for this request</dd>
</dl>

### getHeaders

Get all headers defined for a given hostname.

<dl>
<dt><h4>host</h4><strong>Type: </strong><code>string</code></dt>
<dd>The hostname</dd>
</dl>

### patch

Make a PATCH request

<dl>
<dt><h4>url</h4><strong>Type: </strong><code>string</code></dt>
<dd>The url to send the request to</dd><dt><h4>body</h4><strong>Type: </strong><code>any</code></dt>
<dd>The body of the request</dd><dt><h4>headers</h4><strong>Type: </strong><code>any</code></dt>
<dd>The headers to set for this request</dd>
</dl>

### put

Make a PUT request

<dl>
<dt><h4>url</h4><strong>Type: </strong><code>string</code></dt>
<dd>The url to send the request to</dd><dt><h4>body</h4><strong>Type: </strong><code>any</code></dt>
<dd>The body of the request</dd><dt><h4>headers</h4><strong>Type: </strong><code>any</code></dt>
<dd>The headers to set for this request</dd>
</dl>

### setCookie

Add a custom cookie.

<dl>
<dt><h4>url</h4><strong>Type: </strong><code>string</code></dt>
<dd>Scope of the cookie</dd><dt><h4>cookie</h4><strong>Type: </strong><code>string</code></dt>
<dd>RFC compliant cookie string
</dd>
</dl>

### setDataSerializer

Set the data serializer which will be used for all future POST and PUT requests. Takes a string representing the name of the serializer.

<dl>
<dt><h4>serializer</h4><strong>Type: </strong><code>string</code></dt>
<dd>The name of the serializer. Can be urlencoded, utf8 or json
</dd>
</dl>

### setHeader

Set a header for all future requests. Takes a hostname, a header and a value.

<dl>
<dt><h4>host</h4><strong>Type: </strong><code>string</code></dt>
<dd>The hostname to be used for scoping this header</dd><dt><h4>header</h4><strong>Type: </strong><code>string</code></dt>
<dd>The name of the header</dd><dt><h4>value</h4><strong>Type: </strong><code>string</code></dt>
<dd>The value of the header
</dd>
</dl>

### setRequestTimeout

Set global request timeout value in seconds.

<dl>
<dt><h4>timeout</h4><strong>Type: </strong><code>number</code></dt>
<dd>The timeout in seconds. Default 60
</dd>
</dl>

### uploadFile

undefined

<dl>
<dt><h4>url</h4><strong>Type: </strong><code>string</code></dt>
<dd>The url to send the request to</dd><dt><h4>body</h4><strong>Type: </strong><code>any</code></dt>
<dd>The body of the request</dd><dt><h4>headers</h4><strong>Type: </strong><code>any</code></dt>
<dd>The headers to set for this request</dd><dt><h4>filePath</h4><strong>Type: </strong><code>string</code></dt>
<dd>The local path of the file to upload</dd><dt><h4>name</h4><strong>Type: </strong><code>string</code></dt>
<dd>The name of the parameter to pass the file along as</dd>
</dl>

### useBasicAuth

This sets up all future requests to use Basic HTTP authentication with the given username and password.

<dl>
<dt><h4>username</h4><strong>Type: </strong><code>string</code></dt>
<dd>Username</dd><dt><h4>password</h4><strong>Type: </strong><code>string</code></dt>
<dd>Password
</dd>
</dl>

<p><br></p>

## HTTPResponse

<dl>
<dt><h4>data</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>The data that is in the response. This property usually exists when a promise returned by a request method resolves. <span class="tag">optional</span></dd><dt><h4>error</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Error response from the server. This property usually exists when a promise returned by a request method rejects. <span class="tag">optional</span></dd><dt><h4>headers</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>The headers of the response</dd><dt><h4>status</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>The status number of the response</dd><dt><h4>url</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>The URL of the response. This property will be the final URL obtained after any redirects.</dd>
</dl>

