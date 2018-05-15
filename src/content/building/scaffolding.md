---
previousText: 'Starting'
previousUrl: '/docs/building/starting'
nextText: 'Migration'
nextUrl: '/docs/building/migration'
---

# Scaffolding out an App

<p class="intro" markdown="1">
Once an app is created by the Ionic CLI, the next step is to start building out features and components. The majority of the app will be developed in the `src` directory.
</p>

<figure>
![ionic angular project layout](../assets/img/guides/scaffolding/src-directory-img.png)
<figcaption>This is based on an ionic/angular project</figcaption>
</figure>

The `src` directory has items such as the `index.html` file, configuration files for tests, an asset folder for images, and the main `app` directory for the app's code.


![app layout](../assets/img/guides/scaffolding/src-directory-app-img.png)

The `app` directory has a few more directories inside of it that hold components, pages, as well as additional features like services. If more features are needed, the CLI can handle this.

```shell
ionic g <page, component, service> <name>
```

For more details on this, run `ionic g --help` from the command line.

## Adding a page

Let's look at what happens when a new page is generated in the CLI.

![generate new page](../assets/img/guides/scaffolding/generate-page-no-options.png)

> What's with the `ng` prefixed output? The ionic CLI uses the underlying framework tooling to stay as close as possible to a vanilla project. For `ionic/angular`, that means the Angular CLI is used under the hood.

After creating the files and directories for the new page, the CLI will also update the router configuration to include the new page. This reduces the amount of manual work need, keep the development life cycle moving.

