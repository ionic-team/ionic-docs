# Media 


This plugin provides the ability to record and play back audio files on a device.


Repo: [https://github.com/apache/cordova-plugin-media](https://github.com/apache/cordova-plugin-media)



## Installation 

<ol>
<li>Install the Cordova and Ionic Native plugins:
<code-block language="shell">$ ionic cordova plugin add cordova-plugin-media
$ npm install --save @ionic-native/media
</code-block>
</li>
<li><a href="/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



### Supported Platforms

* Android
* Browser
* iOS
* Windows




### Usage


```typescript
import { Media, MediaObject } from '@ionic-native/media';


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
```typescript
import { Media, MediaObject } from '@ionic-native/media';
import { File } from '@ionic-native/file';

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



<p><br></p>

## Instance Members

### create

Open a media file

<dl>
<dt><h4>src</h4><strong>Type: </strong><code>string</code></dt>
<dd>A URI containing the audio content.</dd>
</dl>

<p><br></p>

## MediaError

<dl>
<dt><h4>code</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Error code</dd><dt><h4>message</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Error message</dd>
</dl>

