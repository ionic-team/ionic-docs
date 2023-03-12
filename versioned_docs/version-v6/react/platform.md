# Platform

## isPlatform

The `isPlatform` method can be used to test if your app is running on a certain platform:

```tsx
import { isPlatform } from '@ionic/react';

isPlatform('ios'); // returns true when running on a iOS device
```

Depending on the platform the user is on, isPlatform(platformName) will return true or false. Note that the same app can return true for more than one platform name. For example, an app running from an iPad would return true for the platform names: mobile, ios, ipad, and tablet. Additionally, if the app was running from Cordova then cordova would be true.

## getPlatforms

The `getPlatforms` method can be used to determine which platforms your app is currently running on.

```tsx
import { getPlatforms } from '@ionic/react';

getPlatforms(); // returns ["iphone", "ios", "mobile", "mobileweb"] from an iPhone
```

Depending on what device you are on, `getPlatforms` can return multiple values. Each possible value is a hierarchy of platforms. For example, on an iPhone, it would return mobile, ios, and iphone.

## Platforms

Below is a table listing all the possible platform values along with corresponding descriptions.

| Platform Name | Description                              |
| ------------- | ---------------------------------------- |
| android       | a device running Android                 |
| capacitor     | a device running Capacitor               |
| cordova       | a device running Cordova                 |
| desktop       | a desktop device                         |
| electron      | a desktop device running Electron        |
| hybrid        | a device running Capacitor or Cordova    |
| ios           | a device running iOS                     |
| ipad          | an iPad device                           |
| iphone        | an iPhone device                         |
| mobile        | a mobile device                          |
| mobileweb     | a web browser running in a mobile device |
| phablet       | a phablet device                         |
| pwa           | a PWA app                                |
| tablet        | a tablet device                          |

## Customizing Platform Detection Functions

The function used to detect a specific platform can be overridden by providing an alternative function in the global [Ionic config](./config). Each function takes `window` as a parameter and returns a boolean.

```tsx
setupIonicReact({
  platform: {
    /** The default `desktop` function returns false for devices with a touchscreen.
     * This is not always wanted, so this function tests the User Agent instead.
     **/
    desktop: (win) => {
      const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(win.navigator.userAgent);
      return !isMobile;
    },
  },
});
```

```ts
type PlatformConfig = {
  android?: ((win: Window) => boolean) | undefined;
  capacitor?: ((win: Window) => boolean) | undefined;
  cordova?: ((win: Window) => boolean) | undefined;
  desktop?: ((win: Window) => boolean) | undefined;
  electron?: ((win: Window) => boolean) | undefined;
  hybrid?: ((win: Window) => boolean) | undefined;
  ios?: ((win: Window) => boolean) | undefined;
  ipad?: ((win: Window) => boolean) | undefined;
  iphone?: ((win: Window) => boolean) | undefined;
  mobile?: ((win: Window) => boolean) | undefined;
  mobileweb?: ((win: Window) => boolean) | undefined;
  phablet?: ((win: Window) => boolean) | undefined;
  pwa?: ((win: Window) => boolean) | undefined;
  tablet?: ((win: Window) => boolean) | undefined;
};
```
