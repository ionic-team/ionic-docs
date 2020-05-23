---
title: '推送提交'
previousText: '安装 Appflow SDK'
previousUrl: '/docs/appflow/quickstart/installation'
nextText: '部署实时更新'
nextUrl: '/docs/appflow/quickstart/deploy'
---

为了让Appflow 访问您的代码库，您需要推送一个提交，以便它在您的仪表板中显示。

## 提交到 Appflow

如果您正在使用 GitHub 、 Bitbucket 或 Bitbucket 服务器集成， 每次推送到git主机时都会显示新的提交。

如果您正在使用Ion作为您的git远程， 您需要直接推送您对 Appflow 的承诺才能在系统仪表中看到您的承诺。

<docs-tabs> <docs-tab tab="GitHub / Bitbucket">

<command-line> <command-prompt>git add . # 阶段任何更改</command-prompt> <command-prompt>git commit -m "添加appflow sdk" # 提交了分阶段更改</command-prompt> <command-prompt>git push origin maste # 将更改从主分支推送到您的 git 主机</command-prompt> </command-line>

</docs-tab> <docs-tab tab="Ionic Remote">

<command-line> <command-prompt>git add . # 阶段任何更改</command-prompt> <command-prompt>git commit -m "添加appflow sdk" # 提交了分阶段更改</command-prompt> <command-prompt>git push ionic master # 将更改从主分支推送到Ionic远程仓库</command-prompt> </command-line> </docs-tab> </docs-tabs>

完成了 `git 推送`后，您应该在仪表盘的 `提交` 选项卡中看到您的承诺。

![提交列表](/docs/assets/img/appflow/ss-commit-list.png)