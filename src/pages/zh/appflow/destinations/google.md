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
            2. Enter a `Service account name`
            3. Click **Select a role** and choose **Service Accounts > Service Account User**
            4. Check the **Furnish a new private key** checkbox
            5. Make sure **JSON** is selected as the `Key type`
            6. Click **SAVE** to close the dialog
            7. Download the JSON file to your computer
        5. Back on the **Google Play Console**, click **DONE** to close the dialog
        6. Click on **Grant Access** for the newly added service account
        7. Choose **Release Manager** (or **Project Lead**) from the `Role` dropdown. (Note that choosing **Release Manager** grants access to the production track and all other tracks. Choosing **Project Lead** grants access to update all tracks *except* the production track.)
        8. Click **ADD USER** to close the dialog