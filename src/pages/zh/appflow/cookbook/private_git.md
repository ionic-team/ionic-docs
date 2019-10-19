---
previousText: '简介'
previousUrl: '/docs/appflow/cookbook/intro'
nextText: '使用私有 NPM 模块'
nextUrl: '/docs/appflow/cookbook/private_npm_modules'
---

# 使用 GIT 私人仓库

在构建过程中，可能需要访问其他包含libraries的私有存储库。

如果这些存储库不属于可以克隆主应用程序代码库的同一用户，则可以使用git证书代码库。

### 如何使用 GIT 证书

第一步是生成个人访问令牌： [github](https://help.github.com/articles/creating-a-personal-access-token-for-the-command-line/) 或 [bitbucket](https://confluence.atlassian.com/bitbucket/app-passwords-828781300.html) 文档。

然后为Git 证书创建一个url。

Github 的 URL 看起来像这样：

    https://<username>:<token>@github.com
    

bitbucket看起来像这样：

    https://<username>:<token>@bitbucket.org
    

`用户名` 是创建令牌帐户的用户名。

最后在 [环境中添加一个密码](/docs/appflow/environments/#custom-environments)，密钥叫 `GIT_CREDINSTL` ，并且使用之前创建的url。

![Git 凭据令牌密钥](/docs/assets/img/appflow/cookbook/git-credentials-token-secret.png)

在此，如果你在构建过程中使用这个环境，您可以访问您的仓库，指定 `https`克隆url不需要任何token。 例如，如果你的私人仓库包含 npm 库， `package.json` 将以此方式引用它：

```json
{
  ...
  "dependencies": {
    "my_super_secret_library": "https://bitbucket.org/myorg/my_super_secret_library.git",
    ...,
  }
  ...
}
```