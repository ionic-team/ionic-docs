---
sidebar_label: 'Media'
---

import DocsCard from '@components/global/DocsCard';
import DocsButton from '@components/page/native/DocsButton';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';

# Media

This plugin provides the ability to record and play back audio files on a device.

<p>
  <a href="https://github.com/apache/cordova-plugin-media" target="_blank" rel="noopener" className="git-link">github.com/apache/cordova-plugin-media</a>
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
      $ npm install cordova-plugin-media {'\n'}$ npm install @awesome-cordova-plugins/media {'\n'}$ ionic cap sync
    </CodeBlock>
  </TabItem>
  <TabItem value="Cordova">
    <CodeBlock className="language-shell">
      $ ionic cordova plugin add cordova-plugin-media {'\n'}$ npm install @awesome-cordova-plugins/media {'\n'}
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
- Browser
- iOS
- Windows

## Usage

### React

[Learn more about using Ionic Native components in React](../native-community.md#react)

### Angular

```tsx
import { Media, MediaObject } from '@awesome-cordova-plugins/media/ngx';


constructor(private media: Media) { }


...


// Create a Media instance.  Expects path to file or url as argument
// We can optionally pass a second argument to track the status of the media

const file: MediaObject = this.media.create('file.mp3');

// to listen to plugin events:

file.onStatusUpdate.subscribe(status => console.log(status)); // fires when file status changes

file.onSuccess.subscribe(() => console.log('Action is successful'));

file.onError.subscribe(error => console.log('Error!', error));

// play the file
file.play();

// pause the file
file.pause();

// get current playback position
file.getCurrentPosition().then((position) => {
  console.log(position);
});

// get file duration
let duration = file.getDuration();
console.log(duration);

// skip to 10 seconds (expects int value in ms)
file.seekTo(10000);

// stop playing the file
file.stop();

// release the native audio resource
// Platform Quirks:
// iOS simply create a new instance and the old one will be overwritten
// Android you must call release() to destroy instances of media when you are done
file.release();



// Recording to a file
const file: MediaObject = this.media.create('path/to/file.mp3');

file.startRecord();

file.stopRecord();


```

Some hints if you are using iOS and recording doesn't work:
1.) Try to use a absolute file path but remove beginning "file://".
Then it looks like: `/var/mobile/Containers/Data/Application/AF438B8B-7724-4FBB-8E69-083463224FC4/tmp/my_file.m4a`
Example: `this.media.create(this.file.tempDirectory.replace(/^file:\/\//, '') + 'my_file.m4a')`
2.) If that's not working, too, create the file before using.
Example:

```tsx
import { Media, MediaObject } from '@awesome-cordova-plugins/media/ngx';
import { File } from '@awesome-cordova-plugins/file/ngx';

...

constructor(private media: Media, private file: File) { }

...

this.file.createFile(this.file.tempDirectory, 'my_file.m4a', true).then(() => {
  let file = this.media.create(this.file.tempDirectory.replace(/^file:\/\//, '') + 'my_file.m4a');
  file.startRecord();
  window.setTimeout(() => file.stopRecord(), 10000);
});
```

You can find the reasons here: https://github.com/ionic-team/ionic-native/issues/1452#issuecomment-299605906
