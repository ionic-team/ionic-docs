---
sidebar_label: 'Music Controls'
---

import DocsCard from '@components/global/DocsCard';
import DocsButton from '@components/page/native/DocsButton';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

# Music Controls

Music controls for Cordova applications.
Display a 'media' notification with play/pause, previous, next buttons, allowing the user to control the play.
Handle also headset event (plug, unplug, headset button).

<p>
  <a href="https://github.com/ghenry22/cordova-plugin-music-controls2" target="_blank" rel="noopener" className="git-link">github.com/ghenry22/cordova-plugin-music-controls2</a>
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
      $ npm install cordova-plugin-music-controls2 {'\n'}$ npm install @awesome-cordova-plugins/music-controls {'\n'}$
      ionic cap sync
    </CodeBlock>
  </TabItem>
  <TabItem value="Cordova">
    <CodeBlock className="language-shell">
      $ ionic cordova plugin add cordova-plugin-music-controls2 {'\n'}$ npm install
      @awesome-cordova-plugins/music-controls {'\n'}
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
- Windows

## Capacitor

Not Compatible

## Usage

### React

[Learn more about using Ionic Native components in React](../native-community.md#react)

### Angular

```tsx
import { MusicControls } from '@awesome-cordova-plugins/music-controls/ngx';

constructor(private musicControls: MusicControls) { }

...

this.musicControls.create({
  track       : 'Time is Running Out',        // optional, default : ''
  artist      : 'Muse',                       // optional, default : ''
  cover       : 'albums/absolution.jpg',      // optional, default : nothing
  // cover can be a local path (use fullpath 'file:///storage/emulated/...', or only 'my_image.jpg' if my_image.jpg is in the www folder of your app)
  //           or a remote url ('http://...', 'https://...', 'ftp://...')
  isPlaying   : true,                         // optional, default : true
  dismissable : true,                         // optional, default : false

  // hide previous/next/close buttons:
  hasPrev   : false,      // show previous button, optional, default: true
  hasNext   : false,      // show next button, optional, default: true
  hasClose  : true,       // show close button, optional, default: false

// iOS only, optional
  album       : 'Absolution',     // optional, default: ''
  duration : 60, // optional, default: 0
  elapsed : 10, // optional, default: 0
  hasSkipForward : true,  // show skip forward button, optional, default: false
  hasSkipBackward : true, // show skip backward button, optional, default: false
  skipForwardInterval: 15, // display number for skip forward, optional, default: 0
  skipBackwardInterval: 15, // display number for skip backward, optional, default: 0
  hasScrubbing: false, // enable scrubbing from control center and lockscreen progress bar, optional

  // Android only, optional
  // text displayed in the status bar when the notification (and the ticker) are updated, optional
  ticker    : 'Now playing "Time is Running Out"',
  // All icons default to their built-in android equivalents
  playIcon: 'media_play',
  pauseIcon: 'media_pause',
  prevIcon: 'media_prev',
  nextIcon: 'media_next',
  closeIcon: 'media_close',
  notificationIcon: 'notification'
 });

 this.musicControls.subscribe().subscribe(action => {

   function events(action) {
     const message = JSON.parse(action).message;
     	switch(message) {
     		case 'music-controls-next':
     			// Do something
     			break;
     		case 'music-controls-previous':
     			// Do something
     			break;
     		case 'music-controls-pause':
     			// Do something
     			break;
     		case 'music-controls-play':
     			// Do something
     			break;
     		case 'music-controls-destroy':
     			// Do something
     			break;

         // External controls (iOS only)
         case 'music-controls-toggle-play-pause' :
     			// Do something
     			break;
         case 'music-controls-seek-to':
           const seekToInSeconds = JSON.parse(action).position;
           this.musicControls.updateElapsed({
             elapsed: seekToInSeconds,
             isPlaying: true
           });
           // Do something
           break;
         case 'music-controls-skip-forward':
           // Do something
           break;
         case 'music-controls-skip-backward':
           // Do something
           break;

     		// Headset events (Android only)
     		// All media button events are listed below
     		case 'music-controls-media-button' :
     			// Do something
     			break;
     		case 'music-controls-headset-unplugged':
     			// Do something
     			break;
     		case 'music-controls-headset-plugged':
     			// Do something
     			break;
     		default:
     			break;
     	}
     }
    });

 this.musicControls.listen(); // activates the observable above

 this.musicControls.updateIsPlaying(true);


```
