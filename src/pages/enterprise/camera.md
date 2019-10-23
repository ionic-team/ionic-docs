---
title: Camera
template: enterprise-plugin
version: 4.0.3
minor: 4.0.X
---

<native-ent-install plugin-id="camera" variables=""></native-ent-install>

## Index

### Enumerations

* [DestinationType](#destinationtype)
* [Direction](#direction)
* [EncodingType](#encodingtype)
* [MediaType](#mediatype)
* [PictureSourceType](#picturesourcetype)
* [PopoverArrowDirection](#popoverarrowdirection)

### Classes

* [Camera](#camera)

### Interfaces

* [CameraOptions](#cameraoptions)
* [CameraPopoverOptions](#camerapopoveroptions)

---

## Enumerations

<a id="destinationtype"></a>

###  DestinationType

**DestinationType**: 

<a id="destinationtype.data_url"></a>

###  DATA_URL

**DATA_URL**:  = 0

___
<a id="destinationtype.file_url"></a>

###  FILE_URL

**FILE_URL**:  = 1

___
<a id="destinationtype.native_uri"></a>

###  NATIVE_URI

**NATIVE_URI**:  = 2

___

___
<a id="direction"></a>

###  Direction

**Direction**: 

<a id="direction.back"></a>

###  BACK

**BACK**:  = 0

___
<a id="direction.front"></a>

###  FRONT

**FRONT**:  = 1

___

___
<a id="encodingtype"></a>

###  EncodingType

**EncodingType**: 

<a id="encodingtype.jpeg"></a>

###  JPEG

**JPEG**:  = 0

___
<a id="encodingtype.png"></a>

###  PNG

**PNG**:  = 1

___

___
<a id="mediatype"></a>

###  MediaType

**MediaType**: 

<a id="mediatype.allmedia"></a>

###  ALLMEDIA

**ALLMEDIA**:  = 2

___
<a id="mediatype.picture"></a>

###  PICTURE

**PICTURE**:  = 0

___
<a id="mediatype.video"></a>

###  VIDEO

**VIDEO**:  = 1

___

___
<a id="picturesourcetype"></a>

###  PictureSourceType

**PictureSourceType**: 

<a id="picturesourcetype.camera"></a>

###  CAMERA

**CAMERA**:  = 1

___
<a id="picturesourcetype.photolibrary"></a>

###  PHOTOLIBRARY

**PHOTOLIBRARY**:  = 0

___
<a id="picturesourcetype.savedphotoalbum"></a>

###  SAVEDPHOTOALBUM

**SAVEDPHOTOALBUM**:  = 2

___

___
<a id="popoverarrowdirection"></a>

###  PopoverArrowDirection

**PopoverArrowDirection**: 

<a id="popoverarrowdirection.arrow_any"></a>

###  ARROW_ANY

**ARROW_ANY**:  = 5

___
<a id="popoverarrowdirection.arrow_down"></a>

###  ARROW_DOWN

**ARROW_DOWN**:  = 2

___
<a id="popoverarrowdirection.arrow_left"></a>

###  ARROW_LEFT

**ARROW_LEFT**:  = 3

___
<a id="popoverarrowdirection.arrow_right"></a>

###  ARROW_RIGHT

**ARROW_RIGHT**:  = 4

___
<a id="popoverarrowdirection.arrow_up"></a>

###  ARROW_UP

**ARROW_UP**:  = 1

___

___

## Classes

<a id="camera"></a>

###  Camera

**Camera**: 

*__name__*: Camera

*__description__*: Take a photo or capture video.

\[Warning\] Since IOS 10 the camera requires permissions to be placed in your config.xml add

```xml
<config-file parent="NSCameraUsageDescription" platform="ios" target="*-Info.plist">
 <string>You can take photos</string>
</config-file>
```

inside of the <platform name='ios> section

*__usage__*:
 ```typescript
import { Camera, CameraOptions } from '@ionic-enterprise/camera/ngx';

constructor(private camera: Camera) { }

...

const options: CameraOptions = {
  quality: 100,
  destinationType: this.camera.DestinationType.FILE_URI,
  encodingType: this.camera.EncodingType.JPEG,
  mediaType: this.camera.MediaType.PICTURE
}

this.camera.getPicture(options).then((imageData) => {
 // imageData is either a base64 encoded string or a file URI
 // If it's base64 (DATA_URL):
 let base64Image = 'data:image/jpeg;base64,' + imageData;
}, (err) => {
 // Handle error
});
```

*__interfaces__*: CameraOptions CameraPopoverOptions

<a id="camera.destinationtype"></a>

###  DestinationType

**● DestinationType**: *`object`*

Constant for possible destination types

#### Type declaration

 DATA_URL: `number`

Return base64 encoded string. DATA\_URL can be very memory intensive and cause app crashes or out of memory errors. Use FILE\_URI or NATIVE\_URI if possible

 FILE_URI: `number`

Return file uri (content://media/external/images/media/2 for Android)

 NATIVE_URI: `number`

Return native uri (eg. asset-library://... for iOS)

___
<a id="camera.direction"></a>

###  Direction

**● Direction**: *`object`*

Convenience constant

#### Type declaration

 BACK: `number`

Use the back-facing camera

 FRONT: `number`

Use the front-facing camera

___
<a id="camera.encodingtype"></a>

###  EncodingType

**● EncodingType**: *`object`*

Convenience constant

#### Type declaration

 JPEG: `number`

Return JPEG encoded image

 PNG: `number`

Return PNG encoded image

___
<a id="camera.mediatype"></a>

###  MediaType

**● MediaType**: *`object`*

Convenience constant

#### Type declaration

 ALLMEDIA: `number`

Allow selection from all media types

 PICTURE: `number`

Allow selection of still pictures only. DEFAULT. Will return format specified via DestinationType

 VIDEO: `number`

Allow selection of video only, ONLY RETURNS URL

___
<a id="camera.picturesourcetype"></a>

###  PictureSourceType

**● PictureSourceType**: *`object`*

Convenience constant

#### Type declaration

 CAMERA: `number`

Take picture from camera

 PHOTOLIBRARY: `number`

Choose image from picture library (same as SAVEDPHOTOALBUM for Android)

 SAVEDPHOTOALBUM: `number`

Choose image from picture library (same as PHOTOLIBRARY for Android)

___
<a id="camera.popoverarrowdirection"></a>

###  PopoverArrowDirection

**● PopoverArrowDirection**: *`object`*

Convenience constant

#### Type declaration

 ARROW_ANY: `number`

 ARROW_DOWN: `number`

 ARROW_LEFT: `number`

 ARROW_RIGHT: `number`

 ARROW_UP: `number`

___
<a id="camera.cleanup"></a>

###  cleanup

▸ **cleanup**(): `Promise`<`any`>

Remove intermediate image files that are kept in temporary storage after calling camera.getPicture. Applies only when the value of Camera.sourceType equals Camera.PictureSourceType.CAMERA and the Camera.destinationType equals Camera.DestinationType.FILE\_URI.

**Returns:** `Promise`<`any`>

___
<a id="camera.getpicture"></a>

###  getPicture

▸ **getPicture**(options?: *[CameraOptions](#cameraoptions)*): `Promise`<`any`>

Take a picture or video, or load one from the library.

**Parameters:**

| Name | Type |
| ------ | ------ |
| `Optional` options | [CameraOptions](#cameraoptions) |

**Returns:** `Promise`<`any`>
Returns a Promise that resolves with Base64 encoding of the image data, or the image file URI, depending on cameraOptions, otherwise rejects with an error.

___

___

## Interfaces

<a id="cameraoptions"></a>

###  CameraOptions

**CameraOptions**: 

<a id="cameraoptions.allowedit"></a>

### `<Optional>` allowEdit

**● allowEdit**: *`boolean`*

Allow simple editing of image before selection.

___
<a id="cameraoptions.cameradirection"></a>

### `<Optional>` cameraDirection

**● cameraDirection**: *`number`*

Choose the camera to use (front- or back-facing). Defined in Camera.Direction. Default is BACK. BACK: 0 FRONT: 1

___
<a id="cameraoptions.correctorientation"></a>

### `<Optional>` correctOrientation

**● correctOrientation**: *`boolean`*

Rotate the image to correct for the orientation of the device during capture.

___
<a id="cameraoptions.destinationtype"></a>

### `<Optional>` destinationType

**● destinationType**: *`number`*

Choose the format of the return value. Defined in Camera.DestinationType. Default is FILE\_URI. DATA\_URL : 0, Return image as base64-encoded string (DATA\_URL can be very memory intensive and cause app crashes or out of memory errors. Use FILE\_URI or NATIVE\_URI if possible), FILE\_URI : 1, Return image file URI, NATIVE\_URI : 2 Return image native URI (e.g., assets-library:// on iOS or content:// on Android)

___
<a id="cameraoptions.encodingtype"></a>

### `<Optional>` encodingType

**● encodingType**: *`number`*

Choose the returned image file's encoding. Defined in Camera.EncodingType. Default is JPEG JPEG : 0 Return JPEG encoded image PNG : 1 Return PNG encoded image

___
<a id="cameraoptions.mediatype"></a>

### `<Optional>` mediaType

**● mediaType**: *`number`*

Set the type of media to select from. Only works when PictureSourceType is PHOTOLIBRARY or SAVEDPHOTOALBUM. Defined in Camera.MediaType PICTURE: 0 allow selection of still pictures only. DEFAULT. Will return format specified via DestinationType VIDEO: 1 allow selection of video only, WILL ALWAYS RETURN FILE\_URI ALLMEDIA : 2 allow selection from all media types

___
<a id="cameraoptions.popoveroptions"></a>

### `<Optional>` popoverOptions

**● popoverOptions**: *[CameraPopoverOptions](#camerapopoveroptions)*

iOS-only options that specify popover location in iPad. Defined in CameraPopoverOptions.

___
<a id="cameraoptions.quality"></a>

### `<Optional>` quality

**● quality**: *`number`*

Picture quality in range 0-100. Default is 50

___
<a id="cameraoptions.savetophotoalbum"></a>

### `<Optional>` saveToPhotoAlbum

**● saveToPhotoAlbum**: *`boolean`*

Save the image to the photo album on the device after capture.

___
<a id="cameraoptions.sourcetype"></a>

### `<Optional>` sourceType

**● sourceType**: *`number`*

Set the source of the picture. Defined in Camera.PictureSourceType. Default is CAMERA. PHOTOLIBRARY : 0, CAMERA : 1, SAVEDPHOTOALBUM : 2

___
<a id="cameraoptions.targetheight"></a>

### `<Optional>` targetHeight

**● targetHeight**: *`number`*

Height in pixels to scale image. Must be used with targetWidth. Aspect ratio remains constant.

___
<a id="cameraoptions.targetwidth"></a>

### `<Optional>` targetWidth

**● targetWidth**: *`number`*

Width in pixels to scale image. Must be used with targetHeight. Aspect ratio remains constant.

___

___
<a id="camerapopoveroptions"></a>

###  CameraPopoverOptions

**CameraPopoverOptions**: 

iOS-only parameters that specify the anchor element location and arrow direction of the popover when selecting images from an iPad's library or album.

<a id="camerapopoveroptions.arrowdir"></a>

###  arrowDir

**● arrowDir**: *`number`*

Direction the arrow on the popover should point. Defined in Camera.PopoverArrowDirection Matches iOS UIPopoverArrowDirection constants. ARROW\_UP : 1, ARROW\_DOWN : 2, ARROW\_LEFT : 4, ARROW\_RIGHT : 8, ARROW\_ANY : 15

___
<a id="camerapopoveroptions.height"></a>

###  height

**● height**: *`number`*

___
<a id="camerapopoveroptions.width"></a>

###  width

**● width**: *`number`*

___
<a id="camerapopoveroptions.x"></a>

###  x

**● x**: *`number`*

___
<a id="camerapopoveroptions.y"></a>

###  y

**● y**: *`number`*

___

___

