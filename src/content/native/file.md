# File 


This plugin implements a File API allowing read/write access to files residing on the device.

The File class implements static convenience functions to access files and directories.

Example:
```
import { File } from '@ionic-native/file';

constructor(private file: File) { }

...

this.file.checkDir(this.file.dataDirectory, 'mydir').then(_ => console.log('Directory exists')).catch(err =>
  console.log('Directory doesn't exist'));

```

 This plugin is based on several specs, including : The HTML5 File API http: //www.w3.org/TR/FileAPI/
 The (now-defunct) Directories and System extensions Latest: http: //www.w3.org/TR/2012/WD-file-system-api-20120417/
 Although most of the plugin code was written when an earlier spec was current: http:
  //www.w3.org/TR/2011/WD-file-system-api-20110419/ It also implements the FileWriter spec : http:
  //dev.w3.org/2009/dap/file-system/file-writer.html
 @interfaces
 IFile
 Entry
 DirectoryEntry
 DirectoryReader
 FileSystem


Repo: [https://github.com/apache/cordova-plugin-file](https://github.com/apache/cordova-plugin-file)



## Installation 

<ol>
<li>Install the Cordova and Ionic Native plugins:
<code-block language="shell">$ ionic cordova plugin add cordova-plugin-file
$ npm install --save @ionic-native/file
</code-block>
</li>
<li><a href="/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



### Supported Platforms

* Android
* Browser
* iOS
* macOS
* Windows




### Usage

null



<p><br></p>

## Instance Members

### getDirectory

Get a directory

<dl>
<dt><h4>directoryEntry</h4><strong>Type: </strong><code>DirectoryEntry</code></dt>
<dd>See DirectoryEntry table below</dd><dt><h4>directoryName</h4><strong>Type: </strong><code>string</code></dt>
<dd>Directory name</dd><dt><h4>flags</h4><strong>Type: </strong><code>Flags</code></dt>
<dd>See Flags table below</dd>
</dl>

### applicationDirectory

 Read-only directory where the application is installed.

### getFile

Get a file

<dl>
<dt><h4>directoryEntry</h4><strong>Type: </strong><code>DirectoryEntry</code></dt>
<dd>See DirectoryEntry table below</dd><dt><h4>fileName</h4><strong>Type: </strong><code>string</code></dt>
<dd>File name</dd><dt><h4>flags</h4><strong>Type: </strong><code>Flags</code></dt>
<dd>See Flags table below</dd>
</dl>

### cacheDirectory

Cached files that should survive app restarts.
Apps should not rely on the OS to delete files in here.

### applicationStorageDirectory

 Read-only directory where the application is installed.

### listDir

List files and directory from a given path.

<dl>
<dt><h4>path</h4><strong>Type: </strong><code>string</code></dt>
<dd>Base FileSystem. Please refer to the iOS and Android filesystems above</dd><dt><h4>dirName</h4><strong>Type: </strong><code>string</code></dt>
<dd>Name of directory</dd>
</dl>

### cordovaFileError



### copyFile

Copy a file in various methods. If file exists, will fail to copy.

<dl>
<dt><h4>path</h4><strong>Type: </strong><code>string</code></dt>
<dd>Base FileSystem. Please refer to the iOS and Android filesystem above</dd><dt><h4>fileName</h4><strong>Type: </strong><code>string</code></dt>
<dd>Name of file to copy</dd><dt><h4>newPath</h4><strong>Type: </strong><code>string</code></dt>
<dd>Base FileSystem of new location</dd><dt><h4>newFileName</h4><strong>Type: </strong><code>string</code></dt>
<dd>New name of file to copy to (leave blank to remain the same)</dd>
</dl>

### copyDir

Copy a directory in various methods. If destination directory exists, will fail to copy.

<dl>
<dt><h4>path</h4><strong>Type: </strong><code>string</code></dt>
<dd>Base FileSystem. Please refer to the iOS and Android filesystems above</dd><dt><h4>dirName</h4><strong>Type: </strong><code>string</code></dt>
<dd>Name of directory to copy</dd><dt><h4>newPath</h4><strong>Type: </strong><code>string</code></dt>
<dd>Base FileSystem of new location</dd><dt><h4>newDirName</h4><strong>Type: </strong><code>string</code></dt>
<dd>New name of directory to copy to (leave blank to remain the same)</dd>
</dl>

### checkFile

Check if a file exists in a certain path, directory.

<dl>
<dt><h4>path</h4><strong>Type: </strong><code>string</code></dt>
<dd>Base FileSystem. Please refer to the iOS and Android filesystem above</dd><dt><h4>file</h4><strong>Type: </strong><code>string</code></dt>
<dd>Name of file to check</dd>
</dl>

### checkDir

Check if a directory exists in a certain path, directory.

<dl>
<dt><h4>path</h4><strong>Type: </strong><code>string</code></dt>
<dd>Base FileSystem. Please refer to the iOS and Android filesystem above</dd><dt><h4>dir</h4><strong>Type: </strong><code>string</code></dt>
<dd>Name of directory to check</dd>
</dl>

### readAsArrayBuffer

Read file and return data as an ArrayBuffer.

<dl>
<dt><h4>path</h4><strong>Type: </strong><code>string</code></dt>
<dd>Base FileSystem. Please refer to the iOS and Android filesystem above</dd><dt><h4>file</h4><strong>Type: </strong><code>string</code></dt>
<dd>Name of file, relative to path.</dd>
</dl>

### externalApplicationStorageDirectory

Android: the application space on external storage.

### dataDirectory

Where to put app-specific data files.

### documentsDirectory

iOS: Files private to the app, but that are meaningful to other applications (e.g. Office files)

### createFile

Creates a new file in the specific path.
The replace boolean value determines whether to replace an existing file with the same name.
If an existing file exists and the replace value is false, the promise will fail and return an error.

<dl>
<dt><h4>path</h4><strong>Type: </strong><code>string</code></dt>
<dd>Base FileSystem. Please refer to the iOS and Android filesystem above</dd><dt><h4>fileName</h4><strong>Type: </strong><code>string</code></dt>
<dd>Name of file to create</dd><dt><h4>replace</h4><strong>Type: </strong><code>boolean</code></dt>
<dd>If true, replaces file with same name. If false returns error</dd>
</dl>

### createDir

Creates a new directory in the specific path.
The replace boolean value determines whether to replace an existing directory with the same name.
If an existing directory exists and the replace value is false, the promise will fail and return an error.

<dl>
<dt><h4>path</h4><strong>Type: </strong><code>string</code></dt>
<dd>Base FileSystem. Please refer to the iOS and Android filesystem above</dd><dt><h4>dirName</h4><strong>Type: </strong><code>string</code></dt>
<dd>Name of directory to create</dd><dt><h4>replace</h4><strong>Type: </strong><code>boolean</code></dt>
<dd>If true, replaces file with same name. If false returns error</dd>
</dl>

### readAsText

Read the contents of a file as text.

<dl>
<dt><h4>path</h4><strong>Type: </strong><code>string</code></dt>
<dd>Base FileSystem. Please refer to the iOS and Android filesystem above</dd><dt><h4>file</h4><strong>Type: </strong><code>string</code></dt>
<dd>Name of file, relative to path.</dd>
</dl>

### externalDataDirectory

 Android: Where to put app-specific data files on external storage.

### externalCacheDirectory

Android: the application cache on external storage.

### readFile



<dl>
<dt><h4>path</h4><strong>Type: </strong><code>string</code></dt>
<dd>null</dd><dt><h4>file</h4><strong>Type: </strong><code>string</code></dt>
<dd>null</dd><dt><h4>readAs</h4></dt>
<dd>null</dd>
</dl>

### getFreeDiskSpace

Get free disk space in Bytes

### externalRootDirectory

Android: the external storage (SD card) root.

### removeFile

Removes a file from a desired location.

<dl>
<dt><h4>path</h4><strong>Type: </strong><code>string</code></dt>
<dd>Base FileSystem. Please refer to the iOS and Android filesystem above</dd><dt><h4>fileName</h4><strong>Type: </strong><code>string</code></dt>
<dd>Name of file to remove</dd>
</dl>

### moveFile

Move a file to a given path.

<dl>
<dt><h4>path</h4><strong>Type: </strong><code>string</code></dt>
<dd>Base FileSystem. Please refer to the iOS and Android filesystem above</dd><dt><h4>fileName</h4><strong>Type: </strong><code>string</code></dt>
<dd>Name of file to move</dd><dt><h4>newPath</h4><strong>Type: </strong><code>string</code></dt>
<dd>Base FileSystem of new location</dd><dt><h4>newFileName</h4><strong>Type: </strong><code>string</code></dt>
<dd>New name of file to move to (leave blank to remain the same)</dd>
</dl>

### moveDir

Move a directory to a given path.

<dl>
<dt><h4>path</h4><strong>Type: </strong><code>string</code></dt>
<dd>The source path to the directory</dd><dt><h4>dirName</h4><strong>Type: </strong><code>string</code></dt>
<dd>The source directory name</dd><dt><h4>newPath</h4><strong>Type: </strong><code>string</code></dt>
<dd>The destination path to the directory</dd><dt><h4>newDirName</h4><strong>Type: </strong><code>string</code></dt>
<dd>The destination directory name</dd>
</dl>

### removeRecursively

Removes all files and the directory from a desired location.

<dl>
<dt><h4>path</h4><strong>Type: </strong><code>string</code></dt>
<dd>Base FileSystem. Please refer to the iOS and Android filesystem above</dd><dt><h4>dirName</h4><strong>Type: </strong><code>string</code></dt>
<dd>Name of directory</dd>
</dl>

### readAsDataURL

Read file and return data as a base64 encoded data url.
A data url is of the form:
     data: [<mediatype>][;base64],<data>

<dl>
<dt><h4>path</h4><strong>Type: </strong><code>string</code></dt>
<dd>Base FileSystem. Please refer to the iOS and Android filesystem above</dd><dt><h4>file</h4><strong>Type: </strong><code>string</code></dt>
<dd>Name of file, relative to path.</dd>
</dl>

### readAsBinaryString

Read file and return data as a binary data.

<dl>
<dt><h4>path</h4><strong>Type: </strong><code>string</code></dt>
<dd>Base FileSystem. Please refer to the iOS and Android filesystem above</dd><dt><h4>file</h4><strong>Type: </strong><code>string</code></dt>
<dd>Name of file, relative to path.</dd>
</dl>

### removeDir

Remove a directory at a given path.

<dl>
<dt><h4>path</h4><strong>Type: </strong><code>string</code></dt>
<dd>The path to the directory</dd><dt><h4>dirName</h4><strong>Type: </strong><code>string</code></dt>
<dd>The directory name</dd>
</dl>

### resolveDirectoryUrl

Resolves a local directory url

<dl>
<dt><h4>directoryUrl</h4><strong>Type: </strong><code>string</code></dt>
<dd>directory system url</dd>
</dl>

### resolveLocalFilesystemUrl

Resolves a local file system URL

<dl>
<dt><h4>fileUrl</h4><strong>Type: </strong><code>string</code></dt>
<dd>file system url</dd>
</dl>

### sharedDirectory

BlackBerry10: Files globally available to all apps

### syncedDataDirectory

iOS: Holds app-specific files that should be synced (e.g. to iCloud).

### tempDirectory

iOS: Temp directory that the OS can clear at will.

### writeExistingFile

Write to an existing file.

<dl>
<dt><h4>path</h4><strong>Type: </strong><code>string</code></dt>
<dd>Base FileSystem. Please refer to the iOS and Android filesystem above</dd><dt><h4>fileName</h4><strong>Type: </strong><code>string</code></dt>
<dd>path relative to base path</dd><dt><h4>text</h4></dt>
<dd>content or blob to write</dd>
</dl>

### writeFile



<dl>
<dt><h4>path</h4><strong>Type: </strong><code>string</code></dt>
<dd>null</dd><dt><h4>fileName</h4><strong>Type: </strong><code>string</code></dt>
<dd>null</dd><dt><h4>text</h4></dt>
<dd>null</dd><dt><h4>options</h4><strong>Type: </strong><code>IWriteOptions</code></dt>
<dd>See IWriteOptions table below</dd>
</dl>

<p><br></p>

## DirectoryEntry

<dl>
<dt><h4>filesystem</h4><strong>Type: </strong><code>reference</code></dt>
<dd>The file system on which the entry resides.</dd><dt><h4>fullPath</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>The full absolute path from the root to the entry.</dd><dt><h4>isDirectory</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Entry is a directory.</dd><dt><h4>isFile</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Entry is a file.</dd><dt><h4>name</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>The name of the entry, excluding the path leading to it.</dd><dt><h4>nativeURL</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>an alternate URL which can be used by native webview controls, for example media players.</dd>
</dl>

## DirectoryEntryCallback

## DirectoryReader

<dl>
<dt><h4>hasReadEntries</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined</dd><dt><h4>localURL</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined</dd>
</dl>

## EntriesCallback

## Entry

<dl>
<dt><h4>filesystem</h4><strong>Type: </strong><code>reference</code></dt>
<dd>The file system on which the entry resides.</dd><dt><h4>fullPath</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>The full absolute path from the root to the entry.</dd><dt><h4>isDirectory</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Entry is a directory.</dd><dt><h4>isFile</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Entry is a file.</dd><dt><h4>name</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>The name of the entry, excluding the path leading to it.</dd><dt><h4>nativeURL</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>an alternate URL which can be used by native webview controls, for example media players.</dd>
</dl>

## EntryCallback

## ErrorCallback

## FileCallback

## FileEntry

<dl>
<dt><h4>filesystem</h4><strong>Type: </strong><code>reference</code></dt>
<dd>The file system on which the entry resides.</dd><dt><h4>fullPath</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>The full absolute path from the root to the entry.</dd><dt><h4>isDirectory</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Entry is a directory.</dd><dt><h4>isFile</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Entry is a file.</dd><dt><h4>name</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>The name of the entry, excluding the path leading to it.</dd><dt><h4>nativeURL</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>an alternate URL which can be used by native webview controls, for example media players.</dd>
</dl>

## FileEntryCallback

## FileSystem

<dl>
<dt><h4>name</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>This is the name of the file system. The specifics of naming filesystems is unspecified, but a name must be unique
across the list of exposed file systems.</dd><dt><h4>root</h4><strong>Type: </strong><code>reference</code></dt>
<dd>The root directory of the file system.</dd>
</dl>

## FileSystemCallback

## FileWriterCallback

## Flags

<dl>
<dt><h4>create</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Used to indicate that the user wants to create a file or directory if it was not previously there. <span class="tag">optional</span></dd><dt><h4>exclusive</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>By itself, exclusive must have no effect. Used with create, it must cause getFile and getDirectory to fail if the
target path already exists. <span class="tag">optional</span></dd>
</dl>

## IFile

<dl>
<dt><h4>Blob</h4><strong>Type: </strong><code>reflection</code></dt>
<dd>undefined</dd><dt><h4>end</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined</dd><dt><h4>lastModified</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Last modified date</dd><dt><h4>lastModifiedDate</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Last modified date</dd><dt><h4>localURL</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined</dd><dt><h4>name</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Name of the file, without path information</dd><dt><h4>size</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Size in bytes</dd><dt><h4>start</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined</dd><dt><h4>type</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>File mime type</dd>
</dl>

## IWriteOptions

<dl>
<dt><h4>append</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined <span class="tag">optional</span></dd><dt><h4>replace</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined <span class="tag">optional</span></dd><dt><h4>truncate</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined <span class="tag">optional</span></dd>
</dl>

## LocalFileSystem

<dl>
<dt><h4>PERSISTENT</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Used for storage that should not be removed by the user agent without application or user permission.</dd><dt><h4>TEMPORARY</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Used for storage with no guarantee of persistence.</dd>
</dl>

## Metadata

<dl>
<dt><h4>modificationTime</h4><strong>Type: </strong><code>reference</code></dt>
<dd>This is the time at which the file or directory was last modified.</dd><dt><h4>size</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>The size of the file, in bytes. This must return 0 for directories.</dd>
</dl>

## MetadataCallback

## RemoveResult

<dl>
<dt><h4>fileRemoved</h4><strong>Type: </strong><code>reference</code></dt>
<dd>undefined</dd><dt><h4>success</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>undefined</dd>
</dl>

## VoidCallback

## Window

<dl>
<dt><h4>PERSISTENT</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Used for storage that should not be removed by the user agent without application or user permission.</dd><dt><h4>TEMPORARY</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Used for storage with no guarantee of persistence.</dd>
</dl>

