# Pinterest 


Cordova plugin for Pinterest


Repo: [https://github.com/zyramedia/cordova-plugin-pinterest](https://github.com/zyramedia/cordova-plugin-pinterest)



## Installation 

<ol>
<li>Install the Cordova and Ionic Native plugins:
<code-block language="shell">ionic cordova plugin add cordova-plugin-pinterest --variable APP_ID=YOUR_APP_ID
$ npm install --save @ionic-native/pinterest
</code-block>
</li>
<li><a href="/docs/native/#Add_Plugins_to_Your_App_Module">Add this plugin to your app's module</a></li>
</ol>



### Supported Platforms

* Android
* iOS




### Usage


```typescript
import { Pinterest, PinterestUser, PinterestPin, PinterestBoard } from '@ionic-native/pinterest';

constructor(private pinterest: Pinterest) { }

...

const scopes = [
  this.pinterest.SCOPES.READ_PUBLIC,
  this.pinterest.SCOPES.WRITE_PUBLIC,
  this.pinterest.SCOPES.READ_RELATIONSHIPS,
  this.pinterest.SCOPES.WRITE_RELATIONSHIPS
];

this.pinterest.login(scopes)
  .then(res => console.log('Logged in!', res))
  .catch(err => console.error('Error loggin in', err));

this.pinterest.getMyPins()
  .then((pins: Array<PinterestPin>) => console.log(pins))
  .catch(err => console.error(err));

this.pinterest.getMe()
  .then((user: PinterestUser) => console.log(user));

this.pinterest.getMyBoards()
  .then((boards: Array<PinterestBoard>) => console.log(boards));

```



<p><br></p>

## Instance Members

### getMyBoards

undefined

<dl>
<dt><h4>fields</h4><strong>Type: </strong><code>string</code></dt>
<dd>Optional fields separated by comma <span class="tag">optional</span></dd><dt><h4>limit</h4><strong>Type: </strong><code>number</code></dt>
<dd>Optional limit, defaults to 100, maximum is 100. <span class="tag">optional</span></dd>
</dl>

### SCOPES

Convenience constant for authentication scopes

### getMyFollowedBoards

Get the authenticated user's followed boards.

<dl>
<dt><h4>fields</h4><strong>Type: </strong><code>string</code></dt>
<dd>Optional fields separated by comma <span class="tag">optional</span></dd><dt><h4>limit</h4><strong>Type: </strong><code>number</code></dt>
<dd>Optional limit, defaults to 100, maximum is 100. <span class="tag">optional</span></dd>
</dl>

### createPin

Creates a Pin

<dl>
<dt><h4>note</h4><strong>Type: </strong><code>string</code></dt>
<dd>Note/Description of the pin</dd><dt><h4>boardId</h4><strong>Type: </strong><code>string</code></dt>
<dd>Board ID to put the Pin under</dd><dt><h4>imageUrl</h4><strong>Type: </strong><code>string</code></dt>
<dd>URL of the image to share</dd><dt><h4>link</h4><strong>Type: </strong><code>string</code></dt>
<dd>Optional link to share <span class="tag">optional</span></dd>
</dl>

### createBoard

Create a new board for the authenticated user.

<dl>
<dt><h4>name</h4><strong>Type: </strong><code>string</code></dt>
<dd>Name of the board</dd><dt><h4>desc</h4><strong>Type: </strong><code>string</code></dt>
<dd>Optional description of the board <span class="tag">optional</span></dd>
</dl>

### getMyFollowers

Get the authenticated user's followers.

<dl>
<dt><h4>fields</h4><strong>Type: </strong><code>string</code></dt>
<dd>Optional fields separated by comma <span class="tag">optional</span></dd><dt><h4>limit</h4><strong>Type: </strong><code>number</code></dt>
<dd>Optional limit, defaults to 100, maximum is 100. <span class="tag">optional</span></dd>
</dl>

### getBoard

Get a board's data.

<dl>
<dt><h4>boardId</h4><strong>Type: </strong><code>string</code></dt>
<dd>undefined</dd><dt><h4>fields</h4><strong>Type: </strong><code>string</code></dt>
<dd>undefined <span class="tag">optional</span></dd>
</dl>

### deleteBoard

Delete a board.

<dl>
<dt><h4>boardId</h4><strong>Type: </strong><code>string</code></dt>
<dd>The ID of the board</dd>
</dl>

### deletePin

Deletes a pin

<dl>
<dt><h4>pinId</h4><strong>Type: </strong><code>string</code></dt>
<dd>The ID of the pin</dd>
</dl>

### getBoardPins

Get Pins of a specific board.

<dl>
<dt><h4>boardId</h4><strong>Type: </strong><code>string</code></dt>
<dd>The ID of the board</dd><dt><h4>fields</h4><strong>Type: </strong><code>string</code></dt>
<dd>Optional fields separated by comma <span class="tag">optional</span></dd><dt><h4>limit</h4><strong>Type: </strong><code>number</code></dt>
<dd>Optional limit, defaults to 100, maximum is 100. <span class="tag">optional</span></dd>
</dl>

### getMe

Gets the authenticated user's profile

<dl>
<dt><h4>fields</h4><strong>Type: </strong><code>string</code></dt>
<dd>Fields to retrieve, separated by commas. Defaults to all available fields. <span class="tag">optional</span></dd>
</dl>

### getMyFollowedInterests

Get the authenticated user's followed interests.

<dl>
<dt><h4>fields</h4><strong>Type: </strong><code>string</code></dt>
<dd>Optional fields separated by comma <span class="tag">optional</span></dd><dt><h4>limit</h4><strong>Type: </strong><code>number</code></dt>
<dd>Optional limit, defaults to 100, maximum is 100. <span class="tag">optional</span></dd>
</dl>

### getMyLikes

Get the authenticated user's likes.

<dl>
<dt><h4>fields</h4><strong>Type: </strong><code>string</code></dt>
<dd>Optional fields separated by comma <span class="tag">optional</span></dd><dt><h4>limit</h4><strong>Type: </strong><code>number</code></dt>
<dd>Optional limit, defaults to 100, maximum is 100. <span class="tag">optional</span></dd>
</dl>

### getMyPins

undefined

<dl>
<dt><h4>fields</h4><strong>Type: </strong><code>string</code></dt>
<dd>Optional fields separated by comma <span class="tag">optional</span></dd><dt><h4>limit</h4><strong>Type: </strong><code>number</code></dt>
<dd>Optional limit, defaults to 100, maximum is 100. <span class="tag">optional</span></dd>
</dl>

### getPin

Get a Pin by ID.

<dl>
<dt><h4>pinId</h4><strong>Type: </strong><code>string</code></dt>
<dd>The ID of the Pin</dd><dt><h4>fields</h4><strong>Type: </strong><code>string</code></dt>
<dd>Optional fields separated by comma <span class="tag">optional</span></dd>
</dl>

### getUser

Get a user's profile.

<dl>
<dt><h4>username</h4><strong>Type: </strong><code>string</code></dt>
<dd>undefined</dd><dt><h4>fields</h4><strong>Type: </strong><code>string</code></dt>
<dd>undefined <span class="tag">optional</span></dd>
</dl>

### login

Logs the user in using their Pinterest account.

<dl>
<dt><h4>scopes</h4></dt>
<dd>Array of scopes that you need access to. You can use Pinterest.SCOPES constant for convenience.</dd>
</dl>

<p><br></p>

## PinterestBoard

<dl>
<dt><h4>counts</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>The board’s stats, including how many Pins, followers, user's following and collaborators it has. <span class="tag">optional</span></dd><dt><h4>created_at</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>The date the user created the board. <span class="tag">optional</span></dd><dt><h4>creator</h4><strong>Type: </strong><code>reference</code></dt>
<dd>The first and last name, ID and profile URL of the user who created the board. <span class="tag">optional</span></dd><dt><h4>description</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>The user-entered description of the board. <span class="tag">optional</span></dd><dt><h4>id</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>The unique string of numbers and letters that identifies the board on Pinterest. <span class="tag">optional</span></dd><dt><h4>image</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>The user’s profile image. The response returns the image’s URL, width and height. <span class="tag">optional</span></dd><dt><h4>name</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>The name of the board. <span class="tag">optional</span></dd><dt><h4>url</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>The link to the board. <span class="tag">optional</span></dd>
</dl>

## PinterestPin

<dl>
<dt><h4>attribution</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>The source data for videos, including the title, URL, provider, author name, author URL and provider name. <span class="tag">optional</span></dd><dt><h4>board</h4><strong>Type: </strong><code>reference</code></dt>
<dd>The board that the Pin is on. <span class="tag">optional</span></dd><dt><h4>color</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>The dominant color of the Pin’s image in hex code format. <span class="tag">optional</span></dd><dt><h4>counts</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>The Pin’s stats, including the number of repins, comments and likes. <span class="tag">optional</span></dd><dt><h4>created_at</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>The date the Pin was created. <span class="tag">optional</span></dd><dt><h4>creator</h4><strong>Type: </strong><code>reference</code></dt>
<dd>The first and last name, ID and profile URL of the user who created the board. <span class="tag">optional</span></dd><dt><h4>id</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>The unique string of numbers and letters that identifies the Pin on Pinterest. <span class="tag">optional</span></dd><dt><h4>image</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>The Pin’s image. The default response returns the image’s URL, width and height. <span class="tag">optional</span></dd><dt><h4>link</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>The URL of the webpage where the Pin was created. <span class="tag">optional</span></dd><dt><h4>media</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>The media type of the Pin (image or video). <span class="tag">optional</span></dd><dt><h4>metadata</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>Extra information about the Pin for Rich Pins. Includes the Pin type (e.g., article, recipe) and related information (e.g., ingredients, author). <span class="tag">optional</span></dd><dt><h4>note</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>The user-entered description of the Pin. <span class="tag">optional</span></dd><dt><h4>url</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>The URL of the Pin on Pinterest. <span class="tag">optional</span></dd>
</dl>

## PinterestUser

<dl>
<dt><h4>bio</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>The text in the user’s “About you” section in their profile. <span class="tag">optional</span></dd><dt><h4>counts</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>The user’s stats, including how many Pins, follows, boards and likes they have. <span class="tag">optional</span></dd><dt><h4>created_at</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>The date the user created their account in ISO 8601 format <span class="tag">optional</span></dd><dt><h4>first_name</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>The user’s first name. <span class="tag">optional</span></dd><dt><h4>id</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>The unique string of numbers and letters that identifies the user on Pinterest. <span class="tag">optional</span></dd><dt><h4>image</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>The user’s profile image. The response returns the image’s URL, width and height. <span class="tag">optional</span></dd><dt><h4>last_name</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>The user’s last name. <span class="tag">optional</span></dd><dt><h4>username</h4><strong>Type: </strong><code>intrinsic</code></dt>
<dd>The user’s Pinterest username. <span class="tag">optional</span></dd>
</dl>

