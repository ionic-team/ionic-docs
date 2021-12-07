---
title: 'Splash Screen Image Icon Generator | Generate Cordova Resources'
description: 'Generate perfectly-sized icons and splash screens from PNG source images for your Cordova platforms. Automatically create icons with Ionic Cordova Resources.'
sidebar_label: 'cordova resources'
---

# ionic cordova resources

Automatically create icon and splash screen resources

```shell
$ ionic cordova resources [options]
```

Generate perfectly sized icons and splash screens from PNG source images for your Cordova platforms with this command.

The source image for icons should ideally be at least **1024×1024px** and located at **resources/icon.png**. The source image for splash screens should ideally be at least **2732×2732px** and located at **resources/splash.png**. If you used `ionic start`, there should already be default Ionic resources in the **resources/** directory, which you can overwrite.

You can also generate platform-specific icons and splash screens by placing them in the respective **resources/&lt;platform&gt;/** directory. For example, to generate an icon for Android, place your image at **resources/android/icon.png**.

For best results, the splash screen's artwork should roughly fit within a square (**1200×1200px**) at the center of the image. You can use **[https://code.ionicframework.com/resources/splash.psd](https://code.ionicframework.com/resources/splash.psd)** as a template for your splash screen.

`ionic cordova resources` will automatically update your **config.xml** to reflect the changes in the generated images, which Cordova then configures.

This command uses the `cordova-res` [utility](https://github.com/ionic-team/cordova-res) to generate resources locally.

Cordova reference documentation:

- Icons: **[https://cordova.apache.org/docs/en/latest/config_ref/images.html](https://cordova.apache.org/docs/en/latest/config_ref/images.html)**
- Splash Screens: **[https://cordova.apache.org/docs/en/latest/reference/cordova-plugin-splashscreen/](https://cordova.apache.org/docs/en/latest/reference/cordova-plugin-splashscreen/)**

## Examples

```shell
$ ionic cordova resources
$ ionic cordova resources ios
$ ionic cordova resources android
```

## Inputs

<table className="reference-table">
  <thead>
    <tr>
      <th colSpan="2">
        <h3>platform</h3>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Description</th>
      <td>
        <p>
          The platform for which you would like to generate resources (<code>ios</code>, <code>android</code>)
        </p>
      </td>
    </tr>
  </tbody>
</table>

## Options

<table className="reference-table">
  <thead>
    <tr>
      <th colSpan="2">
        <h3>
          <a href="#option-icon" id="option-icon">
            --icon
          </a>
        </h3>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Description</th>
      <td>
        <p>Generate icon resources</p>
      </td>
    </tr>
    <tr>
      <th>Aliases</th>
      <td>
        <code>-i</code>
      </td>
    </tr>
  </tbody>
  <thead>
    <tr>
      <th colSpan="2">
        <h3>
          <a href="#option-splash" id="option-splash">
            --splash
          </a>
        </h3>
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Description</th>
      <td>
        <p>Generate splash screen resources</p>
      </td>
    </tr>
    <tr>
      <th>Aliases</th>
      <td>
        <code>-s</code>
      </td>
    </tr>
  </tbody>
</table>
