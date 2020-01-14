---
title: Media
template: enterprise-plugin
version: 5.0.2
minor: 5.0.X
---

The Media plugin provides the ability to record and play back audio files on a device.

<native-ent-install plugin-id="media" variables=""></native-ent-install>

## Index

### Enumerations

* [MEDIA_ERROR](#media_error)
* [MEDIA_STATUS](#media_status)

### Classes

* [Media](#media)

### Interfaces

* [MediaError](#mediaerror)

### Type aliases

* [MediaErrorCallback](#mediaerrorcallback)
* [MediaStatusUpdateCallback](#mediastatusupdatecallback)

* * *

## Enumerations

<a id="media_error"></a>

### MEDIA_ERROR

**MEDIA_ERROR**:

<a id="media_error.aborted"></a>

### ABORTED

**ABORTED**: = 1

* * *

<a id="media_error.decode"></a>

### DECODE

**DECODE**: = 3

* * *

<a id="media_error.network"></a>

### NETWORK

**NETWORK**: = 2

* * *

<a id="media_error.supported"></a>

### SUPPORTED

**SUPPORTED**: = 4

* * *

* * *

<a id="media_status"></a>

### MEDIA_STATUS

**MEDIA_STATUS**:

<a id="media_status.none"></a>

### NONE

**NONE**: = 0

* * *

<a id="media_status.paused"></a>

### PAUSED

**PAUSED**: = 3

* * *

<a id="media_status.running"></a>

### RUNNING

**RUNNING**: = 2

* * *

<a id="media_status.starting"></a>

### STARTING

**STARTING**: = 1

* * *

<a id="media_status.stopped"></a>

### STOPPED

**STOPPED**: = 4

* * *

* * *

## Classes

<a id="media"></a>

### Media

***usage***:

```typescript
import { Media, MediaObject } from '@ionic-enterprise/media/ngx';

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

Some hints if you are using iOS and recording doesn't work: 1.) Try to use a absolute file path but remove beginning "file://". Then it looks like: `/var/mobile/Containers/Data/Application/AF438B8B-7724-4FBB-8E69-083463224FC4/tmp/my_file.m4a` Example: `this.media.create(this.file.tempDirectory.replace(/^file:\/\//, '') + 'my_file.m4a')` 2.) If that's not working, too, create the file before using. Example:

```typescript
import { Media, MediaObject } from '@ionic-enterprise/media/ngx';
import { File } from '@ionic-native/file/ngx';

...

constructor(private media: Media, private file: File) { }

...

this.file.createFile(this.file.tempDirectory, 'my_file.m4a', true).then(() => {
  let file = this.media.create(this.file.tempDirectory.replace(/^file:\/\//, '') + 'my_file.m4a');
  file.startRecord();
  window.setTimeout(() => file.stopRecord(), 10000);
});
```

You can find the reasons here: <https://github.com/ionic-team/ionic-native/issues/1452#issuecomment-299605906>

***classes***: MediaObject

***interfaces***: MediaError

<a id="media.create"></a>

### create

▸ **create**(src: *`string`*): `MediaObject`

Open a media file

**Parameters:**

| Name | Type     | Description                         |
| ---- | -------- | ----------------------------------- |
| src  | `string` | A URI containing the audio content. |


**Returns:** `MediaObject`

* * *

* * *

## Interfaces

<a id="mediaerror"></a>

### MediaError

**MediaError**:

<a id="mediaerror.code"></a>

### code

**● code**: *`number`*

Error code

* * *

<a id="mediaerror.message"></a>

### message

**● message**: *`string`*

Error message

* * *

* * *

## Type aliases

<a id="mediaerrorcallback"></a>

### MediaErrorCallback

**Ƭ MediaErrorCallback**: *`function`*

#### Type declaration

▸(error: *[MediaError](#mediaerror)*): `void`

**Parameters:**

| Name  | Type                      |
| ----- | ------------------------- |
| error | [MediaError](#mediaerror) |


**Returns:** `void`

* * *

<a id="mediastatusupdatecallback"></a>

### MediaStatusUpdateCallback

**Ƭ MediaStatusUpdateCallback**: *`function`*

#### Type declaration

▸(statusCode: *`number`*): `void`

**Parameters:**

| Name       | Type     |
| ---------- | -------- |
| statusCode | `number` |


**Returns:** `void`

* * *