---
previousText: 'Ionic CLI'
previousUrl: '/docs/installation/cli'
nextText: 'Environment Setup'
nextUrl: '/docs/installation/environment'
---

# Ionic Packages

<p class="intro" markdown="1">
  Depending on whether you're using Angular or another framework (or none at all!) there are different ways to install Ionic.
</p>

## Using Ionic in Angular

When using Angular, install the `@ionic/angular` package. This comes with all the Ionic components and Angular-specific services and features.

## Using Ionic from a CDN

Not using Angular? Ionic can also be used directly from a CDN using a simple script include!

It's recommended to use [unpkg](https://unpkg.com) to access the Framework from a CDN. To get the latest version, add the following `script` tag inside the `<head></head>` element in an HTML file:

```javascript
<script src="https://unpkg.com/@ionic/core@latest/dist/ionic.js"></script>
```

With this it's possible to use all of the Ionic components without having to install anything.

<blockquote>
  <p>
    This does not install Angular or any frameworks. This allows use of Ionic components without having to install anything.
  </p>
</blockquote>


## Ionicons from a CDN

If you're using Ionic Framework, Ionicons is packaged by default, so no installation is necessary. Want to use Ionicons without Ionic Framework? Place the following `<script>` near the end of your page, right before the closing `</body>` tag,to enable them.

```javascript
<script src="https://unpkg.com/ionicons@4.0.0/dist/ionicons.js"></script>
```

