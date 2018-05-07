---

---

# Starting an App

<p class="intro" markdown="1">
Starting a new Ionic app is incredibly simple. From the command line, run `ionic start` and the CLI will handle the rest.
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