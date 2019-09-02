---
title: Android Permissions
template: enterprise-plugin
version: 0.11.0
minor: 0.11.X
---



## Index

### Classes

* [AndroidPermissions](#androidpermissions)

* * *

## Classes

<a id="androidpermissions"></a>

### AndroidPermissions

**AndroidPermissions**:

***name***: Android Permissions

***description***: This plugin is designed to support Android new permissions checking mechanism.

You can find all permissions here: <https://developer.android.com/reference/android/Manifest.permission.html>

***usage***:

    import { AndroidPermissions } from '@ionic-enterprise/android-permissions/ngx';
    
    constructor(private androidPermissions: AndroidPermissions) { }
    
    ...
    
    this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.CAMERA).then(
      result => console.log('Has permission?',result.hasPermission),
      err => this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.CAMERA)
    );
    
    this.androidPermissions.requestPermissions([this.androidPermissions.PERMISSION.CAMERA, this.androidPermissions.PERMISSION.GET_ACCOUNTS]);
    
    

Android 26 and above: due to Android 26's changes to permissions handling (permissions are requested at time of use rather than at runtime,) if your app does not include any functions (eg. other Ionic Native plugins) that utilize a particular permission, then `requestPermission()` and `requestPermissions()` will resolve immediately with no prompt shown to the user. Thus, you must include a function utilizing the feature you would like to use before requesting permission for it.

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