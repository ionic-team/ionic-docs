---
sidebar_label: 'Zoom'
---

import DocsCard from '@components/global/DocsCard';
import DocsButton from '@components/page/native/DocsButton';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

# Zoom

A Cordova plugin to use Zoom Video Conferencing services on Cordova applications.

<p>
  <a href="https://github.com/zoom/zoom-sdk-ionic" target="_blank" rel="noopener" className="git-link">
    <svg viewBox="0 0 512 512">
      <path d="M416 160c0-35.3-28.7-64-64-64s-64 28.7-64 64c0 23.7 12.9 44.3 32 55.4v8.6c0 19.9-7.8 33.7-25.3 44.9-15.4 9.8-38.1 17.1-67.5 21.5-14 2.1-25.7 6-35.2 10.7V151.4c19.1-11.1 32-31.7 32-55.4 0-35.3-28.7-64-64-64S96 60.7 96 96c0 23.7 12.9 44.3 32 55.4v209.2c-19.1 11.1-32 31.7-32 55.4 0 35.3 28.7 64 64 64s64-28.7 64-64c0-16.6-6.3-31.7-16.7-43.1 1.9-4.9 9.7-16.3 29.4-19.3 38.8-5.8 68.9-15.9 92.3-30.8 36-22.8 55-57 55-98.8v-8.6c19.1-11.1 32-31.7 32-55.4zM160 56c22.1 0 40 17.9 40 40s-17.9 40-40 40-40-17.9-40-40 17.9-40 40-40zm0 400c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40zm192-256c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40z"></path>
    </svg>{' '}
    https://github.com/zoom/zoom-sdk-ionic
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
      $ npm install cordova.plugin.zoom {'\n'}$ npm install @awesome-cordova-plugins/zoom {'\n'}$ ionic cap sync
    </CodeBlock>
  </TabItem>
  <TabItem value="Cordova">
    <CodeBlock className="language-shell">
      $ ionic cordova plugin add cordova.plugin.zoom {'\n'}$ npm install @awesome-cordova-plugins/zoom {'\n'}
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

- Android
- iOS

## Usage

### React

[Learn more about using Ionic Native components in React](../native-community.md#react)

### Angular

```tsx
import { Zoom } from '@awesome-cordova-plugins/zoom';


constructor(private zoomService: Zoom) { }

...

// Initialize Zoom SDK, need to be called when app fired up.
this.zoomService.initialize(API_KEY, API_SECRET)
  .then((success: any) => console.log(success))
  .catch((error: any) => console.log(error));

// Log user in with Zoom username and password.
this.zoomService.login(userName, password)
  .then((success: any) => console.log(success))
  .catch((error: any) => console.log(error));

// Log user out.
this.zoomService.logout()
  .then((success: boolean) => console.log(success))
  .catch((error: any) => console.log(error));

// Check whether user is logged in.
this.zoomService.isLoggedIn()
  .then((success: boolean) => console.log(success))
  .catch((error: any) => console.log(error));

// meeting options (Only available for Android)
let options = {
"no_driving_mode":true,
"no_invite":true,
"no_meeting_end_message":true,
"no_titlebar":false,
"no_bottom_toolbar":false,
"no_dial_in_via_phone":true,
"no_dial_out_to_phone":true,
"no_disconnect_audio":true,
"no_share":true,
"no_audio":true,
"no_video":true,
"no_meeting_error_message":true
};

// Join meeting.
this.zoomService.joinMeeting(meetingNumber, meetingPassword, displayName, options)
  .then((success: any) => console.log(success))
  .catch((error: any) => console.log(error));

// Start an existing meeting for non-login user.
this.zoomService.startMeetingWithZAK(meetingNumber, displayName, zoomToken, zoomAccessToken, userId, options)
  .then((success: any) => console.log(success))
  .catch((error: any) => console.log(error));

// Start an existing meeting for logged in user.
this.zoomService.startMeeting(meetingNumber, vanityId, options)
  .then((success: any) => console.log(success))
  .catch((error: any) => console.log(error));

// Start an instant meeting for logged in user.
this.zoomService.startInstantMeeting()
  .then((success: anu) => console.log(success))
  .catch((error: any) => console.log(error));

// Set language.
this.zoomService.setLanguage("en-US")
  .then((success: any) => console.log(success))
  .catch((error: any) => console.log(error));
```
