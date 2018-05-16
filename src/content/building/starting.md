---
nextText: 'Scaffolding'
nextUrl: '/docs/building/scaffolding'
---

# Starting an App

<p class="intro" markdown="1">
Starting a new Ionic app is incredibly simple. From the command line, run the `ionic start` command and the CLI will handle the rest.
</p>

![ionic start prompt](../assets/img/guides/starting/terminal-prompt.png)

The CLI will display prompts asking for app name, template, and what project type to use. This information can be provide in the start command as well.

```shell
ionic start myApp tabs --type=angular
```

Here, `myApp` is the name of the project, `tabs` is the starter template, and the project type is `angular`.

`tabs` is not the only project template available. Between all project types, there are three templates available:

- `tabs`: A tabs based layout
- `sidemenu`: A sidemenu based layout
- `blank`: A empty project with a single page

There are many more templates to choose from. The CLI can list them with the command, `ionic start --list`


![ionic template list](../assets/img/guides/starting/template-list.png)


These templates provide a great starting point for any app and include all the best practices for making a code base scale.