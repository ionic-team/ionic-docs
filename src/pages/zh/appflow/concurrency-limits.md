# 并行限制

每个账户计划都有允许的并行构建的最大数量 (见 [详细计划信息](/pricing))。 这一限制是在不同应用程序的账户一级强制执行的。

当您触发构建时，在Appflow Dashboard 将会注意到，构建在处理之前可能有不同的状态：

* **Queued**：这意味着您的构建将排队等待下一个可用的运行程序。 通常您的构建不应该处于此状态时间超过几秒。
* **Pending**：这意味着您已达到了您的同时建造限制，当您当前版本完成时，你的构建将会继续。

在构建开始处理后，状态为：

* **Running**：正在处理构建。 您可以在构建细节中读取日志。
* **Successful**: the build terminated in a correct state.
* **Failed**: the build terminated in an incorrect state.

More concurrent builds can be added to your plan. If you have a Starter or Developer plan, you can get more builds by [upgrading plan](https://dashboard.ionicframework.com/settings/billing). If you have a Teams or Business plan, please [contact us](https://ionic.zendesk.com/hc/en-us/requests/new).