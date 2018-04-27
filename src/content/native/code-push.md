# CodePush 


CodePush plugin for Cordova by Microsoft that supports iOS and Android.

For more info, please see https://github.com/Dellos7/example-cordova-code-push-plugin


Repo: [https://github.com/Microsoft/cordova-plugin-code-push](https://github.com/Microsoft/cordova-plugin-code-push)



## Installation 

<ol>
<li>Install the Cordova and Ionic Native plugins:
<code-block language="shell">$ ionic cordova plugin add cordova-plugin-code-push
$ npm install --save @ionic-native/code-push
</code-block>
</li>
<li><a href="/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



### Supported Platforms

* Android
* iOS




### Usage


```typescript
import { CodePush } from '@ionic-native/code-push';

constructor(private codePush: CodePush) { }

...

// note - mostly error & completed methods of observable will not fire
// as syncStatus will contain the current state of the update
this.codePush.sync().subscribe((syncStatus) => console.log(syncStatus));

const downloadProgress = (progress) => { console.log(`Downloaded ${progress.receivedBytes} of ${progress.totalBytes}`); }
this.codePush.sync({}, downloadProgress).subscribe((syncStatus) => console.log(syncStatus));

```




<p><br></p>

## Instance Members

### checkForUpdate

Checks with the CodePush server if an update package is available for download.

<dl>
<dt><h4>deploymentKey</h4><strong>Type: </strong><code>string</code></dt>
<dd>null <span class="tag">optional</span></dd>
</dl>

### getCurrentPackage

Get the current package information.

### getPendingPackage

Gets the pending package information, if any. A pending package is one that has been installed but the application still runs the old code.
This happens only after a package has been installed using ON_NEXT_RESTART or ON_NEXT_RESUME mode, but the application was not restarted/resumed yet.

### notifyApplicationReady

Notifies the plugin that the update operation succeeded and that the application is ready.
Calling this function is required on the first run after an update. On every subsequent application run, calling this function is a noop.
If using sync API, calling this function is not required since sync calls it internally.

### restartApplication

Reloads the application. If there is a pending update package installed using ON_NEXT_RESTART or ON_NEXT_RESUME modes, the update
will be immediately visible to the user. Otherwise, calling this function will simply reload the current version of the application.

### sync

Convenience method for installing updates in one method call.
This method is provided for simplicity, and its behavior can be replicated by using window.codePush.checkForUpdate(), RemotePackage's download() and LocalPackage's install() methods.

<dl>
<dt><h4>syncOptions</h4><strong>Type: </strong><code>SyncOptions</code></dt>
<dd>See SyncOptions table below <span class="tag">optional</span></dd><dt><h4>downloadProgress</h4><strong>Type: </strong><code>SuccessCallback</code></dt>
<dd>See SuccessCallback table below <span class="tag">optional</span></dd>
</dl>

<p><br></p>

## Callback

## CodePushCordovaPlugin

<dl>

</dl>

## Configuration

<dl>
<dt><h4>appVersion</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined</dd><dt><h4>clientUniqueId</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined</dd><dt><h4>deploymentKey</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined</dd><dt><h4>ignoreAppVersion</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined <span class="tag">optional</span></dd><dt><h4>serverUrl</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined</dd>
</dl>

## DownloadProgress

<dl>
<dt><h4>receivedBytes</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined</dd><dt><h4>totalBytes</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined</dd>
</dl>

## ErrorCallback

## IDiffManifest

<dl>
<dt><h4>deletedFiles</h4><strong>Type: </strong><code>string[]</code></dt>
<dd>undefined</dd>
</dl>

## ILocalPackage

<dl>
<dt><h4>appVersion</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined</dd><dt><h4>deploymentKey</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined</dd><dt><h4>description</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined</dd><dt><h4>failedInstall</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined</dd><dt><h4>isFirstRun</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Indicates if the current application run is the first one after the package was applied.</dd><dt><h4>isMandatory</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined</dd><dt><h4>label</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined</dd><dt><h4>localPath</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>The local storage path where this package is located.</dd><dt><h4>packageHash</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined</dd><dt><h4>packageSize</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined</dd>
</dl>

## IPackage

<dl>
<dt><h4>appVersion</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined</dd><dt><h4>deploymentKey</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined</dd><dt><h4>description</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined</dd><dt><h4>failedInstall</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined</dd><dt><h4>isMandatory</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined</dd><dt><h4>label</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined</dd><dt><h4>packageHash</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined</dd><dt><h4>packageSize</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined</dd>
</dl>

## IPackageInfoMetadata

<dl>
<dt><h4>appVersion</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined</dd><dt><h4>deploymentKey</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined</dd><dt><h4>description</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined</dd><dt><h4>failedInstall</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined</dd><dt><h4>isFirstRun</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Indicates if the current application run is the first one after the package was applied.</dd><dt><h4>isMandatory</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined</dd><dt><h4>label</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined</dd><dt><h4>localPath</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>The local storage path where this package is located.</dd><dt><h4>nativeBuildTime</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined</dd><dt><h4>packageHash</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined</dd><dt><h4>packageSize</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined</dd>
</dl>

## IRemotePackage

<dl>
<dt><h4>appVersion</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined</dd><dt><h4>deploymentKey</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined</dd><dt><h4>description</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined</dd><dt><h4>downloadUrl</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>The URL at which the package is available for download.</dd><dt><h4>failedInstall</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined</dd><dt><h4>isMandatory</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined</dd><dt><h4>label</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined</dd><dt><h4>packageHash</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined</dd><dt><h4>packageSize</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined</dd>
</dl>

## InstallOptions

<dl>
<dt><h4>installMode</h4><strong>Type: </strong><code>reference</code></dt>
<dd>Used to specify the InstallMode used for the install operation. This is optional and defaults to InstallMode.ON_NEXT_RESTART. <span class="tag">optional</span></dd><dt><h4>mandatoryInstallMode</h4><strong>Type: </strong><code>reference</code></dt>
<dd>Used to specify the InstallMode used for the install operation if the update is mandatory. This is optional and defaults to InstallMode.IMMEDIATE. <span class="tag">optional</span></dd><dt><h4>minimumBackgroundDuration</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>If installMode === ON_NEXT_RESUME, the minimum amount of time (in seconds) which needs to pass with the app in the background before an update install occurs when the app is resumed. <span class="tag">optional</span></dd>
</dl>

## LocalPackage_Static

<dl>

</dl>

## NativeUpdateNotification

<dl>
<dt><h4>appVersion</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined</dd><dt><h4>updateAppVersion</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined</dd>
</dl>

## RemotePackage_Static

<dl>

</dl>

## SuccessCallback

## SyncOptions

<dl>
<dt><h4>deploymentKey</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Overrides the config.xml deployment key when checking for updates. <span class="tag">optional</span></dd><dt><h4>ignoreFailedUpdates</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Optional boolean flag. If set, previous updates which were rolled back will be ignored. Defaults to true. <span class="tag">optional</span></dd><dt><h4>installMode</h4><strong>Type: </strong><code>reference</code></dt>
<dd>Used to specify the InstallMode used for the install operation. This is optional and defaults to InstallMode.ON_NEXT_RESTART. <span class="tag">optional</span></dd><dt><h4>mandatoryInstallMode</h4><strong>Type: </strong><code>reference</code></dt>
<dd>Used to specify the InstallMode used for the install operation if the update is mandatory. This is optional and defaults to InstallMode.IMMEDIATE. <span class="tag">optional</span></dd><dt><h4>minimumBackgroundDuration</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>If installMode === ON_NEXT_RESUME, the minimum amount of time (in seconds) which needs to pass with the app in the background before an update install occurs when the app is resumed. <span class="tag">optional</span></dd><dt><h4>updateDialog</h4><strong>Type: </strong><code>union</code></dt>
<dd>Used to enable, disable or customize the user interaction during sync.
If set to false, user interaction will be disabled. If set to true, the user will be alerted or asked to confirm new updates, based on whether the update is mandatory.
To customize the user dialog, this option can be set to a custom UpdateDialogOptions instance. <span class="tag">optional</span></dd>
</dl>

## UpdateDialogOptions

<dl>
<dt><h4>appendReleaseDescription</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Flag indicating if the update description provided by the CodePush server should be displayed in the dialog box appended to the update message. <span class="tag">optional</span></dd><dt><h4>descriptionPrefix</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Optional prefix to add to the release description. <span class="tag">optional</span></dd><dt><h4>mandatoryContinueButtonLabel</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>The label of the continue button in case of a mandatory update. <span class="tag">optional</span></dd><dt><h4>mandatoryUpdateMessage</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>If a mandatory update is available and this option is set, the message will be displayed to the user in an alert dialog before downloading and installing the update.
The user will not be able to cancel the operation, since the update is mandatory. <span class="tag">optional</span></dd><dt><h4>optionalIgnoreButtonLabel</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>The label of the cancel button in case of an optional update. <span class="tag">optional</span></dd><dt><h4>optionalInstallButtonLabel</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>The label of the confirmation button in case of an optional update. <span class="tag">optional</span></dd><dt><h4>optionalUpdateMessage</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>If an optional update is available and this option is set, the message will be displayed to the user in a confirmation dialog.
If the user confirms the update, it will be downloaded and installed. Otherwise, the update update is not downloaded. <span class="tag">optional</span></dd><dt><h4>updateTitle</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>The title of the dialog box used for interacting with the user in case of a mandatory or optional update.
This title will only be used if at least one of mandatoryUpdateMessage or optionalUpdateMessage options are set. <span class="tag">optional</span></dd>
</dl>

