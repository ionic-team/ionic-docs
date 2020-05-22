---
previousText: '使用私有NPM模块'
previousUrl: '/docs/appflow/cookbook/private_npm_modules'
---

# 在构建中使用不同的 Node

可以在编译中使用不同于默认版本的Node版本 (当前Node 10)。


要切换Node版本，只需在环境中添加一个名为 `OVERRIDE_NODE_VERSION` 的变量，并在构建中使用 这样的环境。

![使用不同的 Node 版本](/docs/assets/img/appflow/cookbook/switch-node-version.png)

#### 注意

环境变量` OVERRIDE_NODE_VERSION `只能设置为表示主要版本的整数：目前允许 ` 8 `，` 10 `和` 12 ` 。

即使 `12.13.0` 是一个有效的版本，它不是一个有效的输入。 `13` 目前不可用。

如果` OVERRIDE_NODE_VERSION `设置为不好的输入或不可用的版本，则Node版本将默认为` 10 `