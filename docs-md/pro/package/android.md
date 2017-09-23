---
layout: fluid/pro_docs_base
category: pro-package
id: pro-native-builds
title: Android Keystore - Ionic Pro Documentation
body_class: 'pro-docs'
hide_header_search: true
dark_header: true
---

# Android App Keystore

The [Android keystore](https://developer.android.com/training/articles/keystore.html), used for signing apps, can be generated using keytool, which is included in the [Java JDK](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html). Change `MY-RELEASE-KEY` and `MY_ALIAS_NAME` to be relevant to your app. The tool will ask you to enter a keystore password and a key password.

```bash
$ keytool -genkey -v -keystore MY-RELEASE-KEY.keystore -alias MY_ALIAS_NAME -keyalg RSA -keysize 2048 -validity 10000
```
