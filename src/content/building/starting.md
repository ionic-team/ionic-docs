---
nextText: 'Scaffolding'
nextUrl: '/docs/building/scaffolding'
---

# Starting an App

<p class="intro" markdown="1">
Starting a new Ionic app is incredibly simple. From the command line, run the `ionic start` command and the CLI will handle the rest.
</p>

<command-line>
    <command-prompt>ionic start --type=angular</command-prompt>
    <command-output>
        <br />
        <span class="bold">Every great app needs a name! 😍</span><br />
        <br />
        Please enter the full name of your app. You can change this at any time.
        To bypass this prompt next time, supply <span class="green">name</span>,
        the first argument to <span class="green">ionic start</span>.<br />
        <br />
        <span class="bold green">?</span> <span class="bold">Project name:</span> <command-cursor blink></command-cursor><br />
    </command-output>
</command-line>

The Ionic CLI will display prompts asking for the new project's name and which template to use. These details can be provided as command arguments:

```shell
$ ionic start myApp tabs --type=angular
```

Here, `myApp` is the name of the project, `tabs` is the starter template, and the project type is `angular`.

`tabs` is not the only project template available. Between all project types, there are three templates available:

- `tabs`: A tabs based layout
- `sidemenu`: A sidemenu based layout
- `blank`: An empty project with a single page

See all available templates with the following command:

```shell
$ ionic start --list
```

These templates provide a great starting point for any app and include all the best practices for making a code base scale.
