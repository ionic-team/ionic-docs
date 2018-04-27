# TwitterConnect 


Plugin to use Twitter Single Sign On
Uses Twitter's Fabric SDK
```typescript
import { TwitterConnect } from '@ionic-native/twitter-connect';

constructor(private twitter: TwitterConnect) { }

...

function onSuccess(response) {
  console.log(response);

  // Will console log something like:
  // {
  //   userName: 'myuser',
  //   userId: '12358102',
  //   secret: 'tokenSecret'
  //   token: 'accessTokenHere'
  // }
}

this.twitter.login().then(onSuccess, onError);

this.twitter.logout().then(onLogoutSuccess, onLogoutError);
```

Repo: [https://github.com/chroa/twitter-connect-plugin](https://github.com/chroa/twitter-connect-plugin)



## Installation 

<ol>
<li>Install the Cordova and Ionic Native plugins:
<code-block language="shell">ionic cordova plugin add https://github.com/chroa/twitter-connect-plugin --variable FABRIC_KEY=<Fabric API Key> --variable TWITTER_KEY=<Twitter Consumer Key> --variable TWITTER_SECRET=<Twitter Consumer Secret>
$ npm install --save @ionic-native/twitter-connect
</code-block>
</li>
<li><a href="/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



### Supported Platforms

* Android
* iOS




### Usage

null



<p><br></p>

## Instance Members

### login

Logs in

### logout

Logs out

### showUser

Returns user's profile information

<p><br></p>

## TwitterConnectResponse

<dl>
<dt><h4>secret</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Twitter OAuth Secret</dd><dt><h4>token</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Twitter OAuth Token</dd><dt><h4>userId</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Twitter User ID</dd><dt><h4>userName</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Twitter Username</dd>
</dl>

