# PhotoLibrary 


The PhotoLibrary plugin allows access to photos from device by url. So you can use plain img tag to display photos and their thumbnails, and different 3rd party libraries as well.
Saving photos and videos to the library is also supported.
cdvphotolibrary urls should be trusted by Angular. See plugin homepage to learn how.


Repo: [https://github.com/terikon/cordova-plugin-photo-library](https://github.com/terikon/cordova-plugin-photo-library)



## Installation 

<ol>
<li>Install the Cordova and Ionic Native plugins:
<code-block language="shell">ionic cordova plugin add cordova-plugin-photo-library --variable PHOTO_LIBRARY_USAGE_DESCRIPTION="To choose photos"
$ npm install --save @ionic-native/photo-library
</code-block>
</li>
<li><a href="/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



### Supported Platforms

* Android
* Browser
* iOS




### Usage


```typescript
import { PhotoLibrary } from '@ionic-native/photo-library';

constructor(private photoLibrary: PhotoLibrary) { }

this.photoLibrary.requestAuthorization().then(() => {
  this.photoLibrary.getLibrary().subscribe({
    next: library => {
      library.forEach(function(libraryItem) {
        console.log(libraryItem.id);          // ID of the photo
        console.log(libraryItem.photoURL);    // Cross-platform access to photo
        console.log(libraryItem.thumbnailURL);// Cross-platform access to thumbnail
        console.log(libraryItem.fileName);
        console.log(libraryItem.width);
        console.log(libraryItem.height);
        console.log(libraryItem.creationDate);
        console.log(libraryItem.latitude);
        console.log(libraryItem.longitude);
        console.log(libraryItem.albumIds);    // array of ids of appropriate AlbumItem, only of includeAlbumsData was used
      });
    },
    error: err => { console.log('could not get photos'); },
    complete: () => { console.log('done getting photos'); }
  });
})
.catch(err => console.log('permissions weren\'t granted'));

```




<p><br></p>

## Instance Members

### getAlbums

Returns list of photo albums on device.

### getLibrary

Retrieves library items. Library item contains photo metadata like width and height, as well as photoURL and thumbnailURL.

<dl>
<dt><h4>options</h4><strong>Type: </strong><code>GetLibraryOptions</code></dt>
<dd>See GetLibraryOptions table below <span class="tag">optional</span></dd>
</dl>

### getPhoto

Returns photo as Blob.

<dl>
<dt><h4>photo</h4></dt>
<dd>Id or LibraryItem.</dd><dt><h4>options</h4><strong>Type: </strong><code>any</code></dt>
<dd>Optional options. <span class="tag">optional</span></dd>
</dl>

### getPhotoURL

Provides means to request photo URL by id.

<dl>
<dt><h4>photo</h4></dt>
<dd>Id or LibraryItem.</dd><dt><h4>options</h4><strong>Type: </strong><code>any</code></dt>
<dd>Optional options. <span class="tag">optional</span></dd>
</dl>

### getThumbnail

Returns thumbnail as Blob.

<dl>
<dt><h4>photo</h4></dt>
<dd>Id or LibraryItem.</dd><dt><h4>options</h4><strong>Type: </strong><code>GetThumbnailOptions</code></dt>
<dd>See GetThumbnailOptions table below <span class="tag">optional</span></dd>
</dl>

### getThumbnailURL

Provides means to request URL of thumbnail, with specified size or quality.

<dl>
<dt><h4>photo</h4></dt>
<dd>Id of photo, or LibraryItem.</dd><dt><h4>options</h4><strong>Type: </strong><code>GetThumbnailOptions</code></dt>
<dd>See GetThumbnailOptions table below <span class="tag">optional</span></dd>
</dl>

### requestAuthorization

Asks user permission to access photo library.

<dl>
<dt><h4>options</h4><strong>Type: </strong><code>RequestAuthorizationOptions</code></dt>
<dd>See RequestAuthorizationOptions table below <span class="tag">optional</span></dd>
</dl>

### saveImage

Saves image to specified album. Album will be created if not exists.
LibraryItem that represents saved image is returned.

<dl>
<dt><h4>url</h4><strong>Type: </strong><code>string</code></dt>
<dd>URL of a file, or DataURL.</dd><dt><h4>album</h4></dt>
<dd>Name of an album or AlbumItem object.</dd><dt><h4>options</h4><strong>Type: </strong><code>GetThumbnailOptions</code></dt>
<dd>See GetThumbnailOptions table below <span class="tag">optional</span></dd>
</dl>

### saveVideo

Saves video to specified album. Album will be created if not exists.

<dl>
<dt><h4>url</h4><strong>Type: </strong><code>string</code></dt>
<dd>URL of a file, or DataURL.</dd><dt><h4>album</h4></dt>
<dd>Name of an album or AlbumItem object.</dd>
</dl>

<p><br></p>

