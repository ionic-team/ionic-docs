---
title: 'Facebook Connect Plugin | Facebook Docs in Ionic Documentation'
description: "Ionic Documentation's Facebook Docs explain how to use the Facebook Connect Cordova Plugin to obtain access to the native FB application on iOS and Android."
sidebar_label: 'Facebook'
---

import DocsCard from '@components/global/DocsCard';
import DocsButton from '@components/page/native/DocsButton';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

# Facebook

Use the Facebook Connect plugin to obtain access to the native FB application on iOS and Android.

Requires Cordova plugin: `cordova-plugin-facebook-connect`. For more info, please see the [Facebook Connect](https://github.com/cordova-plugin-facebook-connect/cordova-plugin-facebook-connect).

#### Installation

To use the FB plugin, you first have to create a new Facebook App inside of the Facebook developer portal at [https://developers.facebook.com/apps](https://developers.facebook.com/apps).

[![The Facebook Developer Portal with a highlighted 'Add a New App' button.](/img/docs/native/Facebook/1.png "Facebook Developer Portal - Add a New App Button")](https://developers.facebook.com/apps/)

Retrieve the `App ID` and `App Name`.

[![Dashboard view of a Facebook app showing the App ID and API Version details.](/img/docs/native/Facebook/2.png "Facebook App Dashboard with App ID and API Version")](https://developers.facebook.com/apps/)

Then type in the following command in your Terminal, where APP_ID and APP_NAME are the values from the Facebook Developer portal.

```bash
 ionic cordova plugin add cordova-plugin-facebook-connect --variable APP_ID="123456789" --variable APP_NAME="myApplication"
```

After, you'll need to add the native platforms you'll be using to your app in the Facebook Developer portal under your app's Settings:

[![Dropdown menu in the Facebook App Settings showing options including 'Dashboard' and 'Settings'.](/img/docs/native/Facebook/3.png "Facebook App Settings Menu")](https://developers.facebook.com/apps/)

Click `'Add Platform'`.

[![Facebook App Basic Settings screen with an 'Add Platform' option visible.](/img/docs/native/Facebook/4.png "Facebook App Basic Settings with Add Platform Option")](https://developers.facebook.com/apps/)

At this point you'll need to open your project's [`config.xml`](https://cordova.apache.org/docs/en/latest/config_ref/index.html) file, found in the root directory of your project.

Take note of the `id` for the next step:

```
<widget id="com.mycompany.testapp" version="0.0.1" xmlns="http://www.w3.org/ns/widgets" xmlns:cdv="http://cordova.apache.org/ns/1.0">
```

You can also edit the `id` to whatever you'd like it to be.

#### iOS Install

Under 'Bundle ID', add the `id` from your `config.xml` file:

[![Field to enter the iOS Bundle ID in the Facebook App Settings for iOS installation.](/img/docs/native/Facebook/5.png "iOS Bundle ID Configuration in Facebook App Settings")](https://developers.facebook.com/apps/)

#### Android Install

Under 'Google Play Package Name', add the `id` from your `config.xml` file:

[![Field to enter the Google Play Package Name in the Facebook App Settings for Android installation.](/img/docs/native/Facebook/6.png "Android Package Name Configuration in Facebook App Settings")](https://developers.facebook.com/apps/)

And that's it! You can now make calls to Facebook using the plugin.

## Events

App events allow you to understand the makeup of users engaging with your app, measure the performance of your Facebook mobile app ads, and reach specific sets of your users with Facebook mobile app ads.

- [iOS] [https://developers.facebook.com/docs/ios/app-events](https://developers.facebook.com/docs/ios/app-events)
- [Android] [https://developers.facebook.com/docs/android/app-events](https://developers.facebook.com/docs/android/app-events)
- [JS] Does not have an Events API, so the plugin functions are empty and will return an automatic success

Activation events are automatically tracked for you in the plugin.

Events are listed on the [insights page](https://www.facebook.com/insights/).

For tracking events, see `logEvent` and `logPurchase`.

<p>
  <a href="https://github.com/cordova-plugin-facebook-connect/cordova-plugin-facebook-connect" target="_blank" rel="noopener" className="git-link">github.com/cordova-plugin-facebook-connect/cordova-plugin-facebook-connect</a>
</p>

<h2>Stuck on a Cordova issue?</h2>
<DocsCard
  className="cordova-ee-card"
  header="Don't waste precious time on plugin issues."
  href="https://ionicframework.com/sales?product_of_interest=Ionic%20Native"
>
  <div>
    <img src="/docs/icons/native-cordova-bot.png" className="cordova-ee-img" />
    <p>If you're building a serious project, you can't afford to spend hours troubleshooting. Ionic’s experts offer premium advisory services for both community plugins and premier plugins.</p>
    <DocsButton className="native-ee-detail">Contact Us Today!</DocsButton>
  </div>
</DocsCard>

<h2 id="installation">
  <a href="#installation">Installation</a>
</h2>
<Tabs
  groupId="runtime"
  defaultValue="Capacitor"
  values={[
    { value: 'Capacitor', label: 'Capacitor' },
    { value: 'Cordova', label: 'Cordova' },
    { value: 'Enterprise', label: 'Enterprise' },
  ]}
>
  <TabItem value="Capacitor">
    <CodeBlock className="language-shell">
      $ npm install cordova-plugin-facebook-connect {'\n'}$ npm install @awesome-cordova-plugins/facebook {'\n'}$ ionic
      cap sync
    </CodeBlock>
  </TabItem>
  <TabItem value="Cordova">
    <CodeBlock className="language-shell">
      $ ionic cordova plugin add cordova-plugin-facebook-connect {'\n'}$ npm install @awesome-cordova-plugins/facebook{' '}
      {'\n'}
    </CodeBlock>
  </TabItem>
  <TabItem value="Enterprise">
    <blockquote>
      Ionic Enterprise comes with fully supported and maintained plugins from the Ionic Team. &nbsp;
      <a className="btn" href="https://ionic.io/docs/premier-plugins">Learn More</a> or if you're interested in an enterprise version of this plugin <a className="btn" href="https://ionicframework.com/sales?product_of_interest=Ionic%20Enterprise%20Engine">Contact Us</a>
    </blockquote>
  </TabItem>
</Tabs>

## Supported Platforms

- Android
- iOS
- Browser

## Usage

### React

[Learn more about using Ionic Native components in React](../native-community.md#react)

### Angular

```tsx
import { Facebook, FacebookLoginResponse } from '@awesome-cordova-plugins/facebook/ngx';

constructor(private fb: Facebook) { }

...

this.fb.login(['public_profile', 'user_friends', 'email'])
  .then((res: FacebookLoginResponse) => console.log('Logged into Facebook!', res))
  .catch(e => console.log('Error logging into Facebook', e));


this.fb.logEvent(this.fb.EVENTS.EVENT_NAME_ADDED_TO_CART);

```
