---
sidebar_label: 'Unvired Cordova SDK'
---

import DocsCard from '@components/global/DocsCard';
import DocsButton from '@components/page/native/DocsButton';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

# Unvired Cordova SDK

## This plugin lets you build apps which connect to Unvired Mobile Platform (UMP).

## iOS Requirements

This plugin uses Cocoapods to install dependent libraries. Please make sure you have a valid Cocoapods installation.
Once you have it ready, do update the cocoapods repo by running the following command before you install this plugin.

```
pod repo update
```

<p>
  <a href="https://github.com/unvired/cordova-plugin-unvired-sdk/" target="_blank" rel="noopener" className="git-link">
    <svg viewBox="0 0 512 512">
      <path d="M416 160c0-35.3-28.7-64-64-64s-64 28.7-64 64c0 23.7 12.9 44.3 32 55.4v8.6c0 19.9-7.8 33.7-25.3 44.9-15.4 9.8-38.1 17.1-67.5 21.5-14 2.1-25.7 6-35.2 10.7V151.4c19.1-11.1 32-31.7 32-55.4 0-35.3-28.7-64-64-64S96 60.7 96 96c0 23.7 12.9 44.3 32 55.4v209.2c-19.1 11.1-32 31.7-32 55.4 0 35.3 28.7 64 64 64s64-28.7 64-64c0-16.6-6.3-31.7-16.7-43.1 1.9-4.9 9.7-16.3 29.4-19.3 38.8-5.8 68.9-15.9 92.3-30.8 36-22.8 55-57 55-98.8v-8.6c19.1-11.1 32-31.7 32-55.4zM160 56c22.1 0 40 17.9 40 40s-17.9 40-40 40-40-17.9-40-40 17.9-40 40-40zm0 400c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40zm192-256c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40z"></path>
    </svg>{' '}
    https://github.com/unvired/cordova-plugin-unvired-sdk/
  </a>
</p>

<h2>Stuck on a Cordova issue?</h2>
<DocsCard
  className="cordova-ee-card"
  header="Don't waste precious time on plugin issues."
  href="https://ionicframework.com/sales?product_of_interest=Ionic%20Native"
>
  <div>
    <img src="/docs/icons/native-cordova-bot.png" class="cordova-ee-img" />
    <p>
      If you're building a serious project, you can't afford to spend hours troubleshooting. Ionic’s experts offer
      premium advisory services for both community plugins and premier plugins.
    </p>
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
      $ npm install https://github.com/unvired/cordova-plugin-unvired-sdk {'\n'}$ npm install @awesome-cordova-plugins/unvired-cordova-sdk{' '}
      {'\n'}$ ionic cap sync
    </CodeBlock>
  </TabItem>
  <TabItem value="Cordova">
    <CodeBlock className="language-shell">
      $ ionic cordova plugin add https://github.com/unvired/cordova-plugin-unvired-sdk {'\n'}$ npm install @awesome-cordova-plugins/unvired-cordova-sdk{' '}
      {'\n'}
    </CodeBlock>
  </TabItem>
  <TabItem value="Enterprise">
    <blockquote>
      Ionic Enterprise comes with fully supported and maintained plugins from the Ionic Team. &nbsp;
      <a class="btn" href="https://ionic.io/docs/premier-plugins">
        Learn More
      </a> or if you're interested in an enterprise version of this plugin <a
        class="btn"
        href="https://ionicframework.com/sales?product_of_interest=Ionic%20Enterprise%20Engine"
      >
        Contact Us
      </a>
    </blockquote>
  </TabItem>
</Tabs>

## Supported Platforms

- iOS
- Android
- Windows
- Browser

## Usage

### React

[Learn more about using Ionic Native components in React](../native-community.md#react)

### Angular

```tsx
import { UnviredCordovaSDK } from '@awesome-cordova-plugins/unvired-cordova-sdk/ngx';


constructor(private unviredSDK: UnviredCordovaSDK) { }

...
// This is usually done in app.component.ts of your app.
// Before you can interact with UMP, you need to initialize the SDK and authenticate with UMP.
// SDK Initialization
let loginParameters = new LoginParameters()
loginParameters.appName = 'UNVIRED_DIGITAL_FORMS'
loginParameters.metadataPath = '../assets/metadata.json'
let loginResult: LoginResult
try {
  loginResult = await this.unviredSDK.login(loginParameters)
}
catch (error) {
  this.unviredSDK.logError("AppComponent", "Initialize", "Error during login: " + error)
}


switch (loginResult.type) {
case LoginListenerType.auth_activation_required:
// App is not activated. i.e, User is using the app for the very first time.
// App needs to be activated before it can interact with UMP.
// At this point of time, you basically navigate to a login screen & accept username / password from the user.
// Set the username & password to loginParameters object and call authenticateAndActivate
try {
 // Execute this block of code in a login screen.
let loginParameters = new LoginParameters();
loginParameters.url = '&lt;UMP_URL>';
loginParameters.company = '&lt;Company>';
loginParameters.username = '&lt;Username>';
loginParameters.password = '&lt;Password>';
loginParameters.loginType = LoginType.unvired;
let authenticateActivateResult: AuthenticateActivateResult = await this.unviredSDK.authenticateAndActivate(loginParameters);
if (authenticateActivateResult.type === AuthenticateAndActivateResultType.auth_activation_success) {
// App is fully setup. Navigate to your app's home screen.
} else if (authenticateActivateResult.type === AuthenticateAndActivateResultType.auth_activation_error) {
console.log("Error during login: " + authenticateActivateResult.error)
} catch (error) {
this.unviredSDK.logError('LoginPage', 'auth_activation_required', 'ERROR: ' + error);
}
break;



case LoginListenerType.app_requires_login:
// App is already activated. But, the user needs to enter credentials because the setting LOCAL_PASSWORD is set to YES in Unvired Admin Cockpit.
// To set LOCAL_PASSWORD property for your app, contact your administrator.
try {
 // Execute this block of code in a login screen.
 let loginParameters = new LoginParameters()
 loginParameters.username = '&lt;Username>';
 loginParameters.password = '&lt;Password>';
 let authenticateLocalResult: AuthenticateLocalResult = await this.unviredSDK.authenticateLocal(loginParameters);
 if (authenticateLocalResult.type === AuthenticateLocalResultType.login_success) {
 // App is fully setup. Navigate to your app's home screen.
 } else if (authenticateLocalResult.type === AuthenticateLocalResultType.login_error) {
  console.log("Error during local login: " + authenticateActivateResult.error)
 } catch (error) {
  this.unviredSDK.logError('LoginPage', 'app_requires_login', 'ERROR: ' + error);
}
break;



case login_success:
// The setting LOCAL_PASSWORD is set to false.
// App is fully initialized. Users can interact with the UMP
// Navigate to Home screen
break;
}





// Synchronization APIs
// Make sync call.
let result = await this.unviredSDK.syncForeground(RequestType.QUERY, null, {"CUSTOMER_HEADER": {"field1" : "value1", "field2" : "value2"}}, 'UNVIRED_DIGITAL_FORMS_PA_MOBILE_GET_USERS', true)

// Make async call.
let result = await this.unviredSDK.syncBackground(RequestType.QUERY, null, inputObj, 'UNVIRED_DIGITAL_FORMS_PA_MOBILE_GET_USERS', 'INPUT_GET_USERS', 'GUID', false)
// Note: Subscribe to NotificationListener to get updates on data processing in background
// However, only one screen can listen to background data updates at any point of time.
this.unviredSDK.registerNotifListener().subscribe( data => {
switch (data.type) {
case NotificationListenerType.dataSend:
break;
case NotificationListenerType.dataChanged:
break;
case NotificationListenerType.dataReceived:
break;
.
.
.
}})





// Database APIs
// Insert a record onto database
this.unviredsdk.dbInsert("CUSTOMER_HEADER", {"NAME":"USER","NO":"0039"}, true);

// Update a record in database
this.unviredSDK.dbUpdate('CUSTOMER_HEADER', {"NAME":"UPDATED_USER","NO":"UPDATED_NO"}, "FORM_ID = '5caed815892215034dacad56'")

// Delete a record in database
this.unviredSDK.dbDelete('CUSTOMER_HEADER', "FORM_ID = '5caed815892215034dacad56'")

// Execute a SQL Query
this.unviredSDK.dbExecuteStatement('SELECT * FROM CUSTOMER_HEADER WHERE CUSTOMER_ID = "0039"')

```
