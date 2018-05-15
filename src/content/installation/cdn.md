---
previousText: 'Ionic CLI'
previousUrl: '/docs/installation/cli'
nextText: 'Environment Setup'
nextUrl: '/docs/installation/environment'
---

# Using Ionic from a CDN

<p class="intro" markdown="1">
Because Ionic Framework is built with web components, it is possible to simply link to Ionic from a CDN and use Ionic components in any HTML file. Let's dive into how this works:
</p>

## Ionic Framework from a CDN

It's recommended to use [unpkg](https://unpkg.com) to access the Framework from a CDN. To get the latest version, add the following `script` tag inside the `<head></head>` element in an HTML file:

```javascript
<script src="https://unpkg.com/@ionic/core@latest/dist/ionic.js"></script>
```

With this it's possible to use all of the Ionic components without having to install anything.

<blockquote>
  <p>
    This does not install Angular or any frameworks. This simply allows use of Ionic components without having to install anything.
  </p>
</blockquote>


## Ionicons from a CDN

If you're using Ionic Framework, Ionicons is packaged by default, so no installation is necessary. Want to use Ionicons without Ionic Framework? Place the following `<script>` near the end of your page, right before the closing `</body>` tag,to enable them.

```javascript
<script src="https://unpkg.com/ionicons@4.0.0/dist/ionicons.js"></script>
```

