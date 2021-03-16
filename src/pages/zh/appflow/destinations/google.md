---
title: 'Google Play 商店'
previousText: '部署到苹果应用商店'
previousUrl: '/docs/appflow/destinations/apple'
nextText: '编译/自动化'
nextUrl: '/docs/appflow/destinations/builds'
---

Google Play 目的地允许您上传您已完成的二进制文件到Android商店。

> **注意：** 新的 Android 应用程序的第一次上传 <b>必须</b> 从Google Play 商店网站上上传。

![/docs/assets/img/appflow/google-overview.png](/docs/assets/img/appflow/google-overview.png)

- **Track**
    - Google Play 商店上传哪个track。
- **包名**
    - 反向域名格式。
        - 例如：com.yourdomain.yourappname
- **JSON 密钥**
    - 若要上传到 Google Play 商店，您将需要创建一个服务帐户并下载包含服务帐户安全信息的 JSON 文件。
        1. 转到 [Google Play 控制台](https://play.google.com/apps/publish/)
        2. 导航到**设置** 然后**API 访问**
        3. 点击**`创建服务账户`**
        4. 在对话框中导航到**Google 开发者控制台**链接，打开一个新标签/窗口：
            1. 点击**创建服务**按钮**谷歌开发者控制台**
            2. 输入`服务账户名称`
            3. 点击**选择一个角色**并选择**服务账户 > 服务账户**
            4. 检查**为一个新的私钥**复选框
            5. 请确认**JSON**被选为`密钥类型`
            6. 点击**保存**关闭对话框
            7. 下载JSON文件到您的计算机
        5. 返回**Google Play 控制台**，点击**下载**关闭对话框
        6. 点击新添加的服务帐户的**授予访问**
        7. 选择**发行管理器**(或**Project Leader**)，从`角色`下拉菜单。 (请注意，选择**发布管理器**允许访问生产轨迹和所有其他轨迹。 选择<strong x-id =“ 1”>项目负责人</strong>将授予更新所有轨道<em x-id =“ 3”>除</em>生产轨道的访问权限。）
        8. 点击**添加用户**关闭对话框