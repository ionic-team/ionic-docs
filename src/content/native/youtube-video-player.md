# YoutubeVideoPlayer 


Plays YouTube videos in Native YouTube App


Repo: [https://github.com/ihadeed/CordovaYoutubeVideoPlayer](https://github.com/ihadeed/CordovaYoutubeVideoPlayer)



## Installation 

<ol>
<li>Install the Cordova and Ionic Native plugins:
<code-block language="shell">$ ionic cordova plugin add cordova-plugin-youtube-video-player
$ npm install --save @ionic-native/youtube-video-player
</code-block>
</li>
<li><a href="/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



### Supported Platforms

* Android
* iOS




### Usage


For Android 5.0+ you will need to add the following to config.xml
```xml
<preference name="YouTubeDataApiKey" value="[YOUR YOUTUBE API]" />
```
For more information: https://developers.google.com/youtube/v3/getting-started


```typescript
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';

constructor(private youtube: YoutubeVideoPlayer) { }

...


this.youtube.openVideo('myvideoid');

```




<p><br></p>

## Instance Members

### openVideo

Plays a YouTube video

<dl>
<dt><h4>videoId</h4><strong>Type: </strong><code>string</code></dt>
<dd>Video ID
</dd>
</dl>

<p><br></p>

