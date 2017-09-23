---
layout: fluid/pro_docs_base
category: pro-deploy
id: pro-live-deploy-plugin-api
title: Deploy PLugin API - Ionic Pro Documentation
body_class: 'pro-docs'
hide_header_search: true
dark_header: true
---

# Deploy Plugin API

When using `UPDATE_METHOD="auto"` or `UPDATE_METHOD="background"`, the plugin manages updates for you. If you'd like to manually control updates, the Ionic plugin has a number of functions available to manage the update lifecycle.

Here's an example of stringing together the API functions to perform an update:

```js
declare var IonicCordova

export function update(appId: string, channelName: string, callback: (err: any, success: boolean) => void) {
  IonicCordova.deploy.check(appId, channelName, (res: any) => {
    console.log("Check result:", res)

    if (res && res === 'true') {
      IonicCordova.deploy.download(appId, () => {
        IonicCordova.deploy.extract(appId, () => {
          IonicCordova.deploy.redirect(appId, () => {
            callback(null, true)
          }, (e: any) => {handleError(e, callback)})
        }, (e: any) => {handleError(e, callback)})
      }, (e: any) => {handleError(e, callback)})
    }
  }, (e: any) => {handleError(e, callback)})
}

export function handleError(error: any, callback: (err: any, success: boolean) => void) {
  console.error(error)
  callback(error, false)
}
```

If you'd like to customize your Deploy setup, you can merely only perform the calls you want. For instance, you could perform `check`, `download`, and `extract` on Login and `redirect` on Logout for apps that are continuously running.

`IonicCordova.deploy.init(app_id, server_host, success, failure)`

Initializes the plugin with an app ID and API host specified in js-land.  Can be used to change these variables at runtime

`IonicCordova.deploy.check(app_id, channel_tag, success, failure)`

Check for updates from a specified channel, will change the saved channel from the install step

`IonicCordova.deploy.download(app_id, success, failure)`

If an update is present, download it

`IonicCordova.deploy.extract(app_id, success, failure)`

If an update has been downloaded, extract it and set the default redirect location for next app start.

`IonicCordova.deploy.redirect(app_id, success, failure)`

Redirect to the latest version of the app on this device.

`IonicCordova.deploy.info(app_id, success, failure)`

Get info on current version for this device.

`IonicCordova.deploy.getVersions(app_id, success, failure)`

List downloaded versions on this device.

`IonicCordova.deploy.deleteVersion(app_id, uuid, success, failure)`

Delete a downloaded version by UUID from this device.
