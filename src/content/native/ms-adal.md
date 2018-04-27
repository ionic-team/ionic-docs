# MSAdal 


Active Directory Authentication Library (ADAL) plugin.
Active Directory Authentication Library ([ADAL](https://docs.microsoft.com/en-us/dotnet/api/microsoft.identitymodel.clients.activedirectory?view=azure-dotnet))
plugin provides easy to use authentication functionality for your Apache Cordova apps by taking advantage of
Windows Server Active Directory and Windows Azure Active Directory. Here you can find the source code for the library.

Repo: [https://github.com/AzureAD/azure-activedirectory-library-for-cordova](https://github.com/AzureAD/azure-activedirectory-library-for-cordova)



## Installation 

<ol>
<li>Install the Cordova and Ionic Native plugins:
<code-block language="shell">$ ionic cordova plugin add cordova-plugin-ms-adal
$ npm install --save @ionic-native/ms-adal
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
import { MSAdal, AuthenticationContext, AuthenticationResult } from '@ionic-native/ms-adal';


constructor(private msAdal: MSAdal) {}

...

let authContext: AuthenticationContext = this.msAdal.createAuthenticationContext('https://login.windows.net/common');

authContext.acquireTokenAsync('https://graph.windows.net', 'a5d92493-ae5a-4a9f-bcbf-9f1d354067d3', 'http://MyDirectorySearcherApp')
  .then((authResponse: AuthenticationResult) => {
    console.log('Token is' , authResponse.accessToken);
    console.log('Token will expire on', authResponse.expiresOn);
  })
  .catch((e: any) => console.log('Authentication failed', e));


```




<p><br></p>

## Instance Members

### createAuthenticationContext



<dl>
<dt><h4>authority</h4><strong>Type: </strong><code>string</code></dt>
<dd>null</dd><dt><h4>validateAuthority</h4><strong>Type: </strong><code>boolean</code></dt>
<dd>null</dd>
</dl>

<p><br></p>

## AuthenticationResult

<dl>
<dt><h4>accesSTokenType</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined</dd><dt><h4>accessToken</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined</dd><dt><h4>expiresOn</h4><strong>Type: </strong><code>reference</code></dt>
<dd>undefined</dd><dt><h4>idToken</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined</dd><dt><h4>isMultipleResourceRefreshToken</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined</dd><dt><h4>status</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined</dd><dt><h4>statusCode</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined</dd><dt><h4>tenantId</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined</dd><dt><h4>userInfo</h4><strong>Type: </strong><code>reference</code></dt>
<dd>undefined</dd>
</dl>

## TokenCache

<dl>

</dl>

## TokenCacheItem

<dl>
<dt><h4>accessToken</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined</dd><dt><h4>authority</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined</dd><dt><h4>clientId</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined</dd><dt><h4>displayableId</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined</dd><dt><h4>expiresOn</h4><strong>Type: </strong><code>reference</code></dt>
<dd>undefined</dd><dt><h4>isMultipleResourceRefreshToken</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined</dd><dt><h4>resource</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined</dd><dt><h4>tenantId</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined</dd><dt><h4>userInfo</h4><strong>Type: </strong><code>reference</code></dt>
<dd>undefined</dd>
</dl>

## UserInfo

<dl>
<dt><h4>displayableId</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined</dd><dt><h4>familyName</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined</dd><dt><h4>givenName</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined</dd><dt><h4>identityProvider</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined</dd><dt><h4>passwordChangeUrl</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined</dd><dt><h4>passwordExpiresOn</h4><strong>Type: </strong><code>reference</code></dt>
<dd>undefined</dd><dt><h4>uniqueId</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined</dd><dt><h4>userId</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined</dd>
</dl>

