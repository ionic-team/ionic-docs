
Plugin to use Twitter Single Sign On
Uses Twitter's Fabric SDK
```typescript
import { TwitterConnect } from '@ionic-native/twitter-connect/ngx';

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