---
sidebar_label: よくある質問
slug: /native/faq
---

# Frequently Asked Question

## What is Capacitor? 

Capacitor a native runtime built by the Ionic team that offers web developers the ability to deploy their web apps to a native device. Capacitor also exposing native device capabilities through JavaScript so developers could access features like native location services, filesystem access, or notifications as if they are interacting with any other JavaScript library. 

## Permission Issues

If you're using a plugin, it may require adding additional permissions to your native project after you install the plugin. For instance, the Capacitor Camera plugin requires the following permission for iOS:

- `NSCameraUsageDescription` (`Privacy - Camera Usage Description`)
- `NSPhotoLibraryAddUsageDescription` (`Privacy - Photo Library Additions Usage Description`)
- `NSPhotoLibraryUsageDescription` (`Privacy - Photo Library Usage Description`)

You need to manually add those permissions to the `info.plist` in your native project. Otherwise, calls to the native camera API will fail. 


## Unexpected behaviour

If for some reason the plugin does not behave in a way that is unexpected, please [open an issue on our github repo](https://github.com/ionic-team/capacitor-plugins)! Providing a clear issue report along with a reproduction can help get your issue resolved.
