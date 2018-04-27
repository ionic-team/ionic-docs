# LinkedIn 


A Cordova plugin that lets you use LinkedIn Native SDKs for Android and iOS.

Please see the [plugin's repo](https://github.com/zyramedia/cordova-plugin-linkedin#installation) for detailed installation steps.


Repo: [https://github.com/zyra/cordova-plugin-linkedin](https://github.com/zyra/cordova-plugin-linkedin)



## Installation 

<ol>
<li>Install the Cordova and Ionic Native plugins:
<code-block language="shell">ionic cordova plugin add cordova-plugin-linkedin --variable APP_ID=YOUR_APP_ID
$ npm install --save @ionic-native/linkedin
</code-block>
</li>
<li><a href="/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



### Supported Platforms

* Android
* iOS




### Usage


```typescript
import { LinkedIn } from '@ionic-native/linkedin';

constructor(private linkedin: LinkedIn) { }

...

// check if there is an active session
this.linkedin.hasActiveSession().then((active) => console.log('has active session?', active));

// login
const scopes = ['r_basicprofile', 'r_emailaddress', 'rw_company_admin', 'w_share'];
this.linkedin.login(scopes, true)
  .then(() => console.log('Logged in!')
  .catch(e => console.log('Error logging in', e));


// get connections
this.linkedin.getRequest('people/~')
  .then(res => console.log(res))
  .catch(e => console.log(e));

// share something on profile
const body = {
  comment: 'Hello world!',
  visibility: {
    code: 'anyone'
  }
}

this.linkedin.postRequest('~/shares', body)
  .then(res => console.log(res))
  .catch(e => console.log(e));


```




<p><br></p>

## Instance Members

### getActiveSession

Checks if there is an active session and returns the access token if it exists.

### getRequest

Make a get request

<dl>
<dt><h4>path</h4><strong>Type: </strong><code>string</code></dt>
<dd>request path</dd>
</dl>

### hasActiveSession

Checks if there is already an existing active session. This should be used to avoid unnecessary login.

### login

Login with the LinkedIn App

<dl>
<dt><h4>scopes</h4></dt>
<dd>Scopes to authorize</dd><dt><h4>promptToInstall</h4><strong>Type: </strong><code>boolean</code></dt>
<dd>set to true to prompt the user to download the LinkedIn app if it's not installed</dd>
</dl>

### logout

Clears the current session

### openProfile

Opens a member's profile

<dl>
<dt><h4>memberId</h4><strong>Type: </strong><code>string</code></dt>
<dd>Member id</dd>
</dl>

### postRequest

Make a post request

<dl>
<dt><h4>path</h4><strong>Type: </strong><code>string</code></dt>
<dd>request path</dd><dt><h4>body</h4><strong>Type: </strong><code>any</code></dt>
<dd>request body</dd>
</dl>

<p><br></p>

