---
title: Social Sharing
template: enterprise-plugin
version: 5.6.3
minor: 5.6.X
---

The Social Sharing plugin provides the ability to share text, files, images, and links via social networks, SMS, and email.

<native-ent-install plugin-id="social-sharing" variables=""></native-ent-install>

## Index

### Classes

* [SocialSharing](#socialsharing)

---

## Classes

<a id="socialsharing"></a>

### SocialSharing

**SocialSharing**:

*__name__*: Social Sharing

*__description__*: Share text, files, images, and links via social networks, sms, and email.

For Browser usage check out the Web Share API docs: [https://github.com/EddyVerbruggen/SocialSharing-PhoneGap-Plugin#5-web-share-api](https://github.com/EddyVerbruggen/SocialSharing-PhoneGap-Plugin#5-web-share-api)

*__usage__*:
 ```typescript
import { SocialSharing } from '@ionic-enterprise/social-sharing/ngx';

constructor(private socialSharing: SocialSharing) { }

...

// Check if sharing via email is supported
this.socialSharing.canShareViaEmail().then(() => {
  // Sharing via email is possible
}).catch(() => {
  // Sharing via email is not possible
});

// Share via email
this.socialSharing.shareViaEmail('Body', 'Subject', ['recipient@example.org']).then(() => {
  // Success!
}).catch(() => {
  // Error!
});
```

<a id="socialsharing.cansharevia"></a>

### canShareVia

▸ **canShareVia**(appName: *`string`*, message?: *`string`*, subject?: *`string`*, image?: *`string`*, url?: *`string`*): `Promise`<`any`>

Checks if you can share via a specific app.

**Parameters:**

| Name               | Type     | Description                                                                |
| ------------------ | -------- | -------------------------------------------------------------------------- |
| appName            | `string` | App name or package name. Examples: instagram or com.apple.social.facebook |
| `Optional` message | `string` | \-                                                                        |
| `Optional` subject | `string` | \-                                                                        |
| `Optional` image   | `string` | \-                                                                        |
| `Optional` url     | `string` | \-                                                                        |

**Returns:** `Promise`<`any`>

___

<a id="socialsharing.canshareviaemail"></a>

### canShareViaEmail

▸ **canShareViaEmail**(): `Promise`<`any`>

Checks if you can share via email

**Returns:** `Promise`<`any`>

___

<a id="socialsharing.savetophotoalbum"></a>

### saveToPhotoAlbum

▸ **saveToPhotoAlbum**(fileOrFileArray: *`string` \| `string`[]*): `Promise`<`any`>

Save an array of images to the camera roll

**Parameters:**

| Name            | Type        | Description                            |
| --------------- | ----------- | -------------------------------------- |
| fileOrFileArray | `string` \ | `string`[] |  Single or multiple files |

**Returns:** `Promise`<`any`>

___

<a id="socialsharing.setipadpopupcoordinates"></a>

### setIPadPopupCoordinates

▸ **setIPadPopupCoordinates**(targetBounds: *`string`*): `void`

defines the popup position before call the share method.

**Parameters:**

| Name         | Type     | Description              |
| ------------ | -------- | ------------------------ |
| targetBounds | `string` | left, top, width, height |

**Returns:** `void`

___

<a id="socialsharing.share"></a>

### share

▸ **share**(message?: *`string`*, subject?: *`string`*, file?: *`string` \| `string`[]*, url?: *`string`*): `Promise`<`any`>

Shares using the share sheet

**Parameters:**

| Name               | Type        | Description                                                                                                                                                             |
| ------------------ | ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Optional` message | `string`    | The message you would like to share.                                                                                                                                    |
| `Optional` subject | `string`    | The subject                                                                                                                                                             |
| `Optional` file    | `string` \ | `string`[] |  URL(s) to file(s) or image(s), local path(s) to file(s) or image(s), or base64 data of an image. Only the first file/image will be used on Windows Phone. |
| `Optional` url     | `string`    | A URL to share                                                                                                                                                          |

**Returns:** `Promise`<`any`>

___

<a id="socialsharing.sharevia"></a>

### shareVia

▸ **shareVia**(appName: *`string`*, message: *`string`*, subject?: *`string`*, image?: *`string`*, url?: *`string`*): `Promise`<`any`>

Share via AppName

**Parameters:**

| Name               | Type     | Description                                                                |
| ------------------ | -------- | -------------------------------------------------------------------------- |
| appName            | `string` | App name or package name. Examples: instagram or com.apple.social.facebook |
| message            | `string` | \-                                                                        |
| `Optional` subject | `string` | \-                                                                        |
| `Optional` image   | `string` | \-                                                                        |
| `Optional` url     | `string` | \-                                                                        |

**Returns:** `Promise`<`any`>

___

<a id="socialsharing.shareviaemail"></a>

### shareViaEmail

▸ **shareViaEmail**(message: *`string`*, subject: *`string`*, to: *`string`[]*, cc?: *`string`[]*, bcc?: *`string`[]*, files?: *`string` \| `string`[]*): `Promise`<`any`>

Share via Email

**Parameters:**

| Name             | Type        | Description                                                   |
| ---------------- | ----------- | ------------------------------------------------------------- |
| message          | `string`    | \-                                                           |
| subject          | `string`    | \-                                                           |
| to               | `string`[]  | \-                                                           |
| `Optional` cc    | `string`[]  | Optional                                                      |
| `Optional` bcc   | `string`[]  | Optional                                                      |
| `Optional` files | `string` \ | `string`[] |  Optional URL or local path to file(s) to attach |

**Returns:** `Promise`<`any`>

___

<a id="socialsharing.shareviafacebook"></a>

### shareViaFacebook

▸ **shareViaFacebook**(message: *`string`*, image?: *`string`*, url?: *`string`*): `Promise`<`any`>

Shares directly to Facebook

**Parameters:**

| Name             | Type     | Description |
| ---------------- | -------- | ----------- |
| message          | `string` | \-         |
| `Optional` image | `string` | \-         |
| `Optional` url   | `string` | \-         |

**Returns:** `Promise`<`any`>

___

<a id="socialsharing.shareviafacebookwithpastemessagehint"></a>

### shareViaFacebookWithPasteMessageHint

▸ **shareViaFacebookWithPasteMessageHint**(message: *`string`*, image?: *`string`*, url?: *`string`*, pasteMessageHint?: *`string`*): `Promise`<`any`>

Shares directly to Facebook with a paste message hint

**Parameters:**

| Name                        | Type     | Description |
| --------------------------- | -------- | ----------- |
| message                     | `string` | \-         |
| `Optional` image            | `string` | \-         |
| `Optional` url              | `string` | \-         |
| `Optional` pasteMessageHint | `string` | \-         |

**Returns:** `Promise`<`any`>

___

<a id="socialsharing.shareviainstagram"></a>

### shareViaInstagram

▸ **shareViaInstagram**(message: *`string`*, image: *`string`*): `Promise`<`any`>

Shares directly to Instagram

**Parameters:**

| Name    | Type     | Description |
| ------- | -------- | ----------- |
| message | `string` | \-         |
| image   | `string` | \-         |

**Returns:** `Promise`<`any`>

___

<a id="socialsharing.shareviasms"></a>

### shareViaSMS

▸ **shareViaSMS**(messge: *`string`*, phoneNumber: *`string`*): `Promise`<`any`>

Share via SMS

**Parameters:**

| Name        | Type     | Description                                    |
| ----------- | -------- | ---------------------------------------------- |
| messge      | `string` | message to send                                |
| phoneNumber | `string` | Number or multiple numbers seperated by commas |

**Returns:** `Promise`<`any`>

___

<a id="socialsharing.shareviatwitter"></a>

### shareViaTwitter

▸ **shareViaTwitter**(message: *`string`*, image?: *`string`*, url?: *`string`*): `Promise`<`any`>

Shares directly to Twitter

**Parameters:**

| Name             | Type     | Description |
| ---------------- | -------- | ----------- |
| message          | `string` | \-         |
| `Optional` image | `string` | \-         |
| `Optional` url   | `string` | \-         |

**Returns:** `Promise`<`any`>

___

<a id="socialsharing.shareviawhatsapp"></a>

### shareViaWhatsApp

▸ **shareViaWhatsApp**(message: *`string`*, image?: *`string`*, url?: *`string`*): `Promise`<`any`>

Shares directly to WhatsApp

**Parameters:**

| Name             | Type     | Description |
| ---------------- | -------- | ----------- |
| message          | `string` | \-         |
| `Optional` image | `string` | \-         |
| `Optional` url   | `string` | \-         |

**Returns:** `Promise`<`any`>

___

<a id="socialsharing.shareviawhatsapptoreceiver"></a>

### shareViaWhatsAppToReceiver

▸ **shareViaWhatsAppToReceiver**(receiver: *`string`*, message: *`string`*, image?: *`string`*, url?: *`string`*): `Promise`<`any`>

Shares directly to a WhatsApp Contact

**Parameters:**

| Name             | Type     | Description                                                    |
| ---------------- | -------- | -------------------------------------------------------------- |
| receiver         | `string` | Pass phone number on Android, and Addressbook ID (abid) on iOS |
| message          | `string` | Message to send                                                |
| `Optional` image | `string` | Image to send (does not work on iOS                            |
| `Optional` url   | `string` | Link to send                                                   |

**Returns:** `Promise`<`any`>

___

<a id="socialsharing.sharewithoptions"></a>

### shareWithOptions

▸ **shareWithOptions**(options: *`object`*): `Promise`<`any`>

Shares using the share sheet with additional options and returns a result object or an error message (requires plugin version 5.1.0+)

**Parameters:**

**options: `object`**

The options object with the message, subject, files, url and chooserTitle properties.

| Name                    | Type                    |
| ----------------------- | ----------------------- |
| `Optional` chooserTitle | `string`                |
| `Optional` files        | `string` \| `string`[] |
| `Optional` message      | `string`                |
| `Optional` subject      | `string`                |
| `Optional` url          | `string`                |

**Returns:** `Promise`<`any`>

___

___

