---
title: Badge
template: enterprise-plugin
version: 0.8.8
minor: 0.8.X
---

The Badge plugin enables an application to inform its users that it has something for them — for example, unread messages — when the application isn’t running in the foreground.

Android Note: Badges have historically only been a feature implemented by third party launchers and not visible unless one of those launchers was being used (E.G. Samsung or Nova Launcher) and if enabled by the user. As of Android 8 (Oreo), [notification badges](https://developer.android.com/training/notify-user/badges) were introduced officially to reflect unread notifications. This plugin is unlikely to work as expected on devices running Android 8 or newer. Please see the [local notifications plugin docs](https://github.com/katzer/cordova-plugin-local-notifications) for more information on badge use with notifications.

<native-ent-install plugin-id="badge" variables=""></native-ent-install>

## Index

### Classes

* [Badge](#badge)

---

## Classes

<a id="badge"></a>

###  Badge

**Badge**:

*__usage__*:
 ```typescript
import { Badge } from '@ionic-enterprise/badge/ngx';

constructor(private badge: Badge) { }

...

this.badge.set(10);
this.badge.increase(1);
this.badge.clear();
```

<a id="badge.clear"></a>

###  clear

▸ **clear**(): `Promise`<`boolean`>

Clear the badge of the app icon.

**Returns:** `Promise`<`boolean`>

___
<a id="badge.decrease"></a>

###  decrease

▸ **decrease**(decreaseBy: *`number`*): `Promise`<`any`>

Decrease the badge number.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| decreaseBy | `number` |  Count to subtract from the current badge number |

**Returns:** `Promise`<`any`>

___
<a id="badge.get"></a>

###  get

▸ **get**(): `Promise`<`any`>

Get the badge of the app icon.

**Returns:** `Promise`<`any`>

___
<a id="badge.haspermission"></a>

###  hasPermission

▸ **hasPermission**(): `Promise`<`any`>

Determine if the app has permission to show badges.

**Returns:** `Promise`<`any`>

___
<a id="badge.increase"></a>

###  increase

▸ **increase**(increaseBy: *`number`*): `Promise`<`any`>

Increase the badge number.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| increaseBy | `number` |  Count to add to the current badge number |

**Returns:** `Promise`<`any`>

___
<a id="badge.issupported"></a>

###  isSupported

▸ **isSupported**(): `Promise`<`any`>

Check support to show badges.

**Returns:** `Promise`<`any`>

___
<a id="badge.requestpermission"></a>

###  requestPermission

▸ **requestPermission**(): `Promise`<`any`>

Register permission to set badge notifications

**Returns:** `Promise`<`any`>

___
<a id="badge.set"></a>

###  set

▸ **set**(badgeNumber: *`number`*): `Promise`<`any`>

Set the badge of the app icon.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| badgeNumber | `number` |  The new badge number. |

**Returns:** `Promise`<`any`>

___

___

