---
previousText: ''
previousUrl: ''
nextText: ''
nextUrl: ''
---

# Platform

The Platform service can be used to get information about your current device. You can get all of the platforms associated with the device using the platforms method, including whether the app is being viewed from a tablet, if it's on a mobile device or browser, and the exact platform (iOS, Android, etc). You can also get the orientation of the device, if it uses right-to-left language direction, and much much more. With this information you can completely customize your app to fit any device.

## Usage

```typescript
import { Platform } from '@ionic/angular';

@Component({...})
export MyPage {
  constructor(public plt: Platform) {

  }
}
```

## Methods

### `is(platformName: Platforms) => boolean`

Depending on the platform the user is on, is(platformName) will return true or false. Note that the same app can return true for more than one platform name. For example, an app running from an iPad would return true for the platform names: mobile, ios, ipad, and tablet. Additionally, if the app was running from Cordova then cordova would be true, and if it was running from a web browser on the iPad then mobileweb would be true.

 #### Parameters

| Name.               | Type                | Description                                                                                                                                  |
|---------------------|---------------------|----------------------------------------------------------------------------------------------------------------------------------------------|
| `platformName`      | `Platforms`         | Name of the platform. Available options are android, cordova, core, ios, ipad, iphone, mobile, mobileweb, phablet, tablet, desktop, electron |