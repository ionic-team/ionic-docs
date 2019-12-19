---
nextText: 'Scaffolding'
nextUrl: '/docs/building/scaffolding'
contributors:
  - dwieeb
---

# 构建一个新的应用

构建一个全新的Ionic应用非常容易 在命令行中，只需运行命令 `ionic start` ，CLI将替你完成剩下的事

<command-line> <command-prompt>ionic start</command-prompt> <command-output>   
<span class="bold">每一个伟大的应用都需要起个名字！ 😍</span>  
  
请输入应用全称，之后你可以随时更改。 To bypass this prompt next time, supply <span class="green">name</span>, the first argument to <span class="green">ionic start</span>.  
  
<span class="bold green">?</span> <span class="bold">Project name:</span> <command-cursor blink></command-cursor>  
</command-output> </command-line>

The Ionic CLI will display prompts asking for the new project's name and which template to use. These details can be provided as command arguments:

```shell
$ ionic start myApp tabs
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