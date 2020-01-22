---
title: Android Permissions
template: enterprise-plugin
version: 0.11.0
minor: 0.11.X
---

The Android Permissions plugin is designed to support Android's new permissions checking mechanism, introduced in Android 8.0 (API level 26). Permissions are requested at time of use rather than at runtime. You can find all permissions [here](https://developer.android.com/reference/android/Manifest.permission.html).

<native-ent-install plugin-id="android-permissions" variables=""></native-ent-install>

## Index

### Classes

* [AndroidPermissions](#androidpermissions)

* * *

## Classes

<a id="androidpermissions"></a>

### AndroidPermissions

***usage***:

```typescript
import { AndroidPermissions } from '@ionic-enterprise/android-permissions/ngx';

constructor(private androidPermissions: AndroidPermissions) { }

...

this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.CAMERA).then(
  result => console.log('Has permission?',result.hasPermission),
  err => this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.CAMERA)
);

this.androidPermissions.requestPermissions([this.androidPermissions.PERMISSION.CAMERA, this.androidPermissions.PERMISSION.GET_ACCOUNTS]);
```

<a id="androidpermissions.permission"></a>

### PERMISSION

**● PERMISSION**: *`any`*

* * *

<a id="androidpermissions.checkpermission"></a>

### checkPermission

▸ **checkPermission**(permission: *`string`*): `Promise`<`any`>

Check permission

**Parameters:**

| Name       | Type     | Description                |
| ---------- | -------- | -------------------------- |
| permission | `string` | The name of the permission |


**Returns:** `Promise`<`any`> Returns a promise

* * *

<a id="androidpermissions.haspermission"></a>

### hasPermission

▸ **hasPermission**(permission: *`string`*): `Promise`<`any`>

This function still works now, will not support in the future.

**Parameters:**

| Name       | Type     | Description                |
| ---------- | -------- | -------------------------- |
| permission | `string` | The name of the permission |


**Returns:** `Promise`<`any`> Returns a promise

* * *

<a id="androidpermissions.requestpermission"></a>

### requestPermission

▸ **requestPermission**(permission: *`string`*): `Promise`<`any`>

Request permission

**Parameters:**

| Name       | Type     | Description                           |
| ---------- | -------- | ------------------------------------- |
| permission | `string` | The name of the permission to request |


**Returns:** `Promise`<`any`>

* * *

<a id="androidpermissions.requestpermissions"></a>

### requestPermissions

▸ **requestPermissions**(permissions: *`string`[]*): `Promise`<`any`>

Request permissions

**Parameters:**

| Name        | Type       | Description               |
| ----------- | ---------- | ------------------------- |
| permissions | `string`[] | An array with permissions |


**Returns:** `Promise`<`any`> Returns a promise

* * *

* * *