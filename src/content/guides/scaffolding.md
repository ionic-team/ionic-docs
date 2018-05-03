---

---

# Scaffolding out an App

One an app is created by the CLI, the next set is to start building out features and components. Once in the project directory, the majority of the app will be developed in the `src` directory.


![ionic angular project layout](../assets/guides/scaffolding/src-directory-img.png)
*This is based on an ionic/angular project*

The `src` directory has items such as the `index.html` file, configuration files for tests, an asset folder for images, and the main `app` directory for the app's code.


![app layout](../assets/guides/scaffolding/src-directory-app-img.png)

`app` has a few more directories inside of it that hold components, pages, as well as additional features like services. If more features are needed, the CLI can handle this.

```
ionic g <page, component, service> <name>
```

For more details on this, run `ionic g --help` from the command line.


