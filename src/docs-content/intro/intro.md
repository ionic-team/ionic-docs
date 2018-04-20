---
# title: Ionic
description: Nothing to see here
previewUrl: 'https://blog.ionicframework.com'
---

# What is Ionic Framework?

<!-- TOC goes here -->

<p class='intro' markdown='1'>
Ionic Framework is an open source UI toolkit for building performant, high-quality mobile and desktop apps using familiar web technologies (HTML, CSS, and JavaScript).
</p>
<p class='intro' markdown='1'>
Ionic Framework is focused on the frontend user experience, or UI interaction of an app (controls, interactions, gestures, animations). It’s easy to learn, and integrates nicely with other libraries or frameworks, such as Angular, or can be used standalone without a frontend framework.
</p>
<p class='intro' markdown='1'>
Currently, Ionic Framework has official integration with Angular, but support for <strong>Vue</strong> and <strong>React</strong> are in development. If you’d like to learn more about Ionic Framework before diving in, we [created a video](#) to walk you through the basics.
</p>

## License

Ionic Framework is completely free and open source, released under <a href="https://opensource.org/licenses/MIT" target="_blank">MIT license</a>, which means you can use it in personal or commercial projects for free. For example, MIT is the same license used by such popular projects as jQuery and Ruby on Rails. 

This website and documentation content (found in the <a href="https://github.com/ionic-team/ionic-site" target="_blank">ionic-site</a> repo) is licensed under the <a href="https://www.apache.org/licenses/LICENSE-2.0" target="_blank">Apache 2 license</a>.


## Ionic CLI

The official [Ionic CLI](#), or Command Line Interface, is a tool that quickly scaffolds Ionic apps and provides a number of helpful commands to Ionic developers. In addition to installing and updating Ionic, the CLI comes with a built-in development server, build and debugging tools, and much more. If you are an Ionic Pro member, the CLI can be used to export code and even interact with your account programmatically.

## Ionic Pro

To take Ionic Framework apps even further, we also offer a commercial app platform called <a href="https://ionicframework.com/pro" target="_blank">Ionic Pro</a>. Ionic (the company) makes money by charging a subscription for Ionic Pro (among other comercial products), which <strong>is entirely optional and separate from the open source Framework.</strong> 

Pro lets you monitor and track runtime errors, compile native app builds, and send live updates to your Ionic apps from a centralized dashboard. It comes with a free "Starter" plan to play around with some of these features, with an optional upgrade to paid plans for more advanced capabilities and scale.

## Compatible Frameworks

Ionic Framework is built to work well with other JS libraries and frameworks:

### JavaScript

Talk about Ionic Framework’s new support for vanilla ice cream JavaScript (no framework required).

### Angular

Talk about Ionic Framework's Angular integration.

### Stencil

Talk about Ionic Framework being used with Stencil.

### Future Support

Support for other frameworks, such as Vue and React, are actively being developed. To request support for others, please create an issue on our GitHub page.

## Ionic Framework v4+

Ionic Framework v4 is a major advance in the underlying technology and capabilities of the project, with a focus on performance, compatibility, and overall extensibility. Although v4 still integrates deeply with Angular, it’s now also framework-agnostic, meaning it can work with any other JS framework (Vue, React, Preact, etc), no framework at all, or with the help of Stencil.

[Write more about what v4 is all about]

## Ecosystem

<!-- Ionic Framework was originally built by <a href="#" target="_blank">Ben Sperry</a>, <a href="#" target="_blank">Adam Bradley</a>, and <a href="#" target="_blank">Max Lynch</a>. After releasing an alpha preview in 2013, adoption of the framework quickly grew beyond their expectations, and a core team was formed to work on it full-time. -->

Ionic Framework is actively developed and maintained full-time by a core team, and its ecosystem is guided by an international community of developers and contributors fueling its growth and adoption. Developers and companies small and large use Ionic to build and ship amazing apps that run everywhere.

###  Join Our Community

There are millions of Ionic developers in over 200 countries worldwide. Here are some ways to join:

* <a href="#" target="_blank">Forum:</a> A great place for asking questions and sharing ideas.
* <a href="#" target="_blank">Chat:</a> A lively place for devs to meet and chat in real time.
* <a href="#" target="_blank">Twitter:</a> Where we post updates and share content from the Ionic community.
* <a href="#" target="_blank">GitHub:</a> For reporting bugs or requesting new features, create an issue here. PRs welcome!
* <a href="#" target="_blank">Content</a> authoring: Write a technical blog or share your story with the Ionic community.












<blockquote>
  <p>Here is a nifty little note about something important.</p>
</blockquote>


```js
import { ActionSheetController } from 'ionic-angular'

export class MyClass{

 constructor(public actionSheetCtrl: ActionSheetController) {}

 presentActionSheet() {
   const actionSheet = this.actionSheetCtrl.create({
     title: 'Modify your album',
     buttons: [
       {
         text: 'Destructive',
         role: 'destructive',
         handler: () => {
           console.log('Destructive clicked');
         }
       },
       {
         text: 'Archive',
         handler: () => {
           console.log('Archive clicked');
         }
       },
       {
         text: 'Cancel',
         role: 'cancel',
         handler: () => {
           console.log('Cancel clicked');
         }
       }
     ]
   });

   actionSheet.present();
 }
}
```

### Here is an H3

Some directives can take an “argument”, denoted by a colon after the directive name. For example, the v-bind directive is used to reactively update an HTML attribute:

```html
<p>Here is some HTML to preview...</p>
```

* Type: `boolean`
* Default: `false`
* Restrictions: This option is only available in the full build, with in-browser compilation.
* Details: When set to true, will preserve and render HTML comments found in templates. The
  default behavior is discarding them.
* See also: [Options / Data - data](#)

### Here is an H3

The instantiation options used for the current instance. This is useful when you want to include custom properties in the options.

* List item
* List item
* List item
* List item
