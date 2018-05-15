---
previousText: 'Ionic CLI'
previousUrl: '/docs/installation/cli'
nextText: 'Environment Setup'
nextUrl: '/docs/installation/environment'
---

# Using Ionic from a CDN

Because Ionic 4 is built with web components, this means that we can simply link to Ionic from a CDN and use Ionic components in any html file. Lets dive into how this works.

We recommend using [unpkg](https://unpkg.com) to get Ionic from a CDN. To get the latest version of Ionic we can add the following `script` tag inside the `<head></head>` element in an HTML file:

```javascript
<script src="https://unpkg.com/@ionic/core@latest/dist/ionic.js"></script>
```

We can now use all of the Ionic components without having to install anything.

<blockquote>
  <p>
    Its important to note that this does not install Angular or any frameworks, this simply lets you use Ionic components without having to install anything.
  </p>
</blockquote>


## Using Ionicons from a CDN

If you're using Ionic Framework, Ionicons is packaged by default, so no installation is necessary. Want to use Ionicons without Ionic Framework? Place the following `<script>` near the end of your page, right before the closing `</body>` tag,to enable them.

```javascript
<script src="https://unpkg.com/ionicons@4.0.0/dist/ionicons.js"></script>
```

