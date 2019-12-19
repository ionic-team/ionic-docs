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
  
请输入应用全称，之后你可以随时更改。 为了绕过此提示, 需提供<span class="green">名称</span>参数给 <span class="green">ionic start</span>.  
  
<span class="bold green">?</span> <span class="bold">项目名称:</span> <command-cursor blink></command-cursor>  
</command-output> </command-line>

Ionic CLI 将显示提示询问新项目名称，以及使用哪个模板。 这些细节可作为命令参数提供：

```shell
$ ionic start myApp tabs
```

其中， `myApp` 是项目名称。 `tabs` 是starter模板，项目类型为 ` angular `。

`tabs` 不是唯一可用的项目模板。 在所有项目类型之间，有三个模板可用：

- `标签`: 基于标签的布局
- `sidemenu`: A sidemenu based layout
- `空白`: 一个单一页面的空项目

使用以下命令查看所有可用模板：

```shell
$ ionic start --list
```

These templates provide a great starting point for any app and include all the best practices for making a code base scale.