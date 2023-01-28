---
title: "ionic package build"
sidebar_label: "package build"
---
<head>
  <title>ionic package build: Create a Package Build on Appflow | Ionic</title>
  <meta name="description" content="The ionic package build command creates a package build on Appflow. If it is successful, it downloads the created app package file in the current directory." />
</head>

:::warning
This command has been deprecated and will be removed in an upcoming major release of the Ionic CLI.
:::

Create a package build on Appflow

```shell
$ ionic package build [platform] [type] [options]
```

This command creates a package build on Appflow. While the build is running, it prints the remote build log to the terminal. If the build is successful, it downloads the created app package file in the current directory. Downloading build artifacts can be skipped by supplying the flag `skip-download`.

Apart from `--commit`, every option can be specified using the full name setup within the [Dashboard](https://dashboard.ionicframework.com).

The `--signing-certificate` option is mandatory for any iOS build but not for Android debug builds.

Customizing the build:
- The `--environment` and `--native-config` options can be used to customize the groups of values exposed to the build.
- Override the preferred platform with `--build-stack`. This is useful for building older iOS apps.

Deploying the build to an App Store:
- The `--destination` option can be used to deliver the app created by the build to the configured App Store. This can be used only together with build type `release` for Android and build types `app-store` or `enterprise` for iOS.

Downloading build artifacts:
- By default once the build is complete, all artifacts are downloaded for the selected platform. `aab` and `apk` for Android `ipa` and `dsym` for iOS.
- The `--artifact-type` option can be used to limit artifact downloads to only of that type. For instance, with Android, you can specify `aab` if you do not wish to download `apk`.

### platform
The platform to package (`android`, `ios`)


### type
The build type (`debug`, `release`, `development`, `ad-hoc`, `app-store`, `enterprise`)




### Options

 - `--signing-certificate=<name>`: Signing certificate 
      
 - `--environment=<name>`: The group of environment variables exposed to your build 
      
 - `--native-config=<name>`: The group of native config variables exposed to your build 
      
 - `--destination=<name>`: The configuration to deploy the build artifact to the app store 
      
 - `--build-file-name=<name>`: The name for the downloaded build file 
      
 - `--artifact-type=<name>`: The artifact type (`aab`, `apk`, `ipa`, `dsym`) 
      
 - `--skip-download`: Skip downloading build artifacts after command succeeds. 
      


### Advanced Options

 - `--commit=<sha1>`: Commit (defaults to HEAD) 
      
 - `--build-stack=<name>`: Target platform (`"Android"`, `"iOS - Xcode 11 (Preferred)"`, `"iOS - Xcode 10"`) 
      
 - `--ipa-name=<name>`: The name for the downloaded ipa file 
      
 - `--dsym-name=<name>`: The name for the downloaded dsym file 
      
 - `--apk-name=<name>`: The name for the downloaded apk file 
      
 - `--aab-name=<name>`: The name for the downloaded aab file 
      

## Examples

```shell
$ ionic package build android debug
$ ionic package build ios development --signing-certificate="iOS Signing Certificate Name"
$ ionic package build android debug --environment="My Custom Environment Name"
$ ionic package build android debug --native-config="My Custom Native Config Name"
$ ionic package build android debug --commit=2345cd3305a1cf94de34e93b73a932f25baac77c
$ ionic package build android debug --artifact-type=aab
$ ionic package build android debug --skip-download
$ ionic package build android debug --aab-name="my-app-prod.aab" --apk-name="my-app-prod.apk"
$ ionic package build ios development --signing-certificate="iOS Signing Certificate Name" --build-stack="iOS - Xcode 9"
$ ionic package build ios development --signing-certificate="iOS Signing Certificate Name" --ipa-name=my_custom_file_name.ipa
$ ionic package build ios app-store --signing-certificate="iOS Signing Certificate Name" --destination="Apple App Store Destination"
```
