---
previousText: 'Introduction'
previousUrl: '/docs/appflow/cookbook/intro'
nextText: 'Using private NPM modules'
nextUrl: '/docs/appflow/cookbook/private_npm_modules'
---

# Using private GIT repositories

During the build process, it might be necessary to access other private repositories containing, for instance, libraries.

In case such repositories do not belong to the same user that can clone the main application codebase, it is possible to use git credentials codebase.

### How to use GIT Credentials

The first step is to generate a personal access token: see the [github](https://help.github.com/articles/creating-a-personal-access-token-for-the-command-line/) or [bitbucket](https://confluence.atlassian.com/bitbucket/app-passwords-828781300.html) documentation.

Then build an url for the Git Credentials.

The URL for github looks like:

    https://<username>:<token>@github.com
    

while for bitbucket looks like:

    https://<username>:<token>@bitbucket.org
    

where the `username` is the username of the account used to generate the token.

Finally add a secret inside an [environment](/docs/appflow/environments/#custom-environments) with key called `GIT_CREDENTIALS` and for the value use the url created before.

![Git credentials token secret](/docs/assets/img/appflow/cookbook/git-credentials-token-secret.png)

At this point, if you use this environment during a build, you can access your repository specifying the `https` clone url without any token. For instance, if your private repo contains an npm library, the `package.json` would reference it in this way:

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