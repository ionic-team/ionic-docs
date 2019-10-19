---
previousText: '配置'
previousUrl: '/docs/react/config'
---

# Platform Utils

## isPlatform

The `isPlatform` method can be used to test if your app is running on a certain platform:

```typescript
import { isPlatform } from '@ionic/react';

isPlatform('ios'); // returns true when running on a iOS device
```

Depending on the platform the user is on, isPlatform(platformName) will return true or false. Note that the same app can return true for more than one platform name. For example, an app running from an iPad would return true for the platform names: mobile, ios, ipad, and tablet. Additionally, if the app was running from Cordova then cordova would be true.

## getPlatforms

The `getPlatforms` method can be used to determine which platforms your app is currently running on.

```typescript
import { getPlatforms } from '@ionic/react';

getPlatforms(); // returns ["iphone", "ios", "mobile", "mobileweb"] from an iPhone
```

Depending on what device you are on, `getPlatforms` can return multiple values. Each possible value is a hierarchy of platforms. For example, on an iPhone, it would return mobile, ios, and iphone.