---
previousText: 'Ionic CLI'
previousUrl: '/docs/installation/cli'
nextText: 'Environment Setup'
nextUrl: '/docs/installation/environment'
---

# Ionic Packages

Depending on whether you're using Angular, another framework, or none at all, there are a few different ways to install Ionic.

## Using Ionic in Angular

When using Ionic in an Angular project, install the latest `@ionic/angular` package from [npm](/docs/faq/glossary#npm). This comes with all of the Ionic components and Angular specific services and features.

```shell
$ npm install @ionic/angular@latest --save
```

Each time there is a new Ionic release, the [version](/docs/intro/versioning) will increment. The version can be [updated using npm](/docs/faq/tips#updating-dependencies), as well.


## Using Ionic from a CDN

Ionic can also be included from a CDN by adding a script tag!

It's recommended to use [unpkg](https://unpkg.com) to access the Framework from a CDN. To get the latest version, add the following `<script>` tag inside the `<head></head>` element in an HTML file:

```html
<script src="https://unpkg.com/@ionic/core@latest/dist/ionic.js"></script>
```

With this it's possible to use all of the Ionic components without having to install anything.

<blockquote>
  <p>
    This does not install Angular or any frameworks. This allows use of Ionic components without a framework.
  </p>
</blockquote>


## Ionicons from a CDN

Ionicons is packaged by default with the Ionic Framework, so no installation is necessary if you're using Ionic. Want to use Ionicons without Ionic Framework? Place the following `<script>` near the end of your page, right before the closing `</body>` tag, to enable them.

```html
<script src="https://unpkg.com/ionicons@latest/dist/ionicons.js"></script>
```

