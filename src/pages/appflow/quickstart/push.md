---
title: 'Push a Commit'
previousText: 'Install the Appflow SDK'
previousUrl: '/docs/appflow/quickstart/installation'
nextText: 'Trigger a Deploy Build'
nextUrl: '/docs/appflow/quickstart/deploy-build'
---

In order for Appflow to access your code base you'll need to push a commit so that it shows up in your dashboard.
If you are using GitHub, Bitbucket, or Bitbucket Server a new commit will show up every time you push to your git host.
If you are using the Ionic remote you'll need to push to it directly in order to see your commit in the dashboard.

<docs-tabs tabs="GitHub/Bitbucket, Ionic">
<div slot="GitHubBitbucket">

<command-line>
<command-prompt>git add . # stage any changes</command-prompt>
<command-prompt>git commit -m "added appflow sdk" #  commit staged changes</command-prompt>
<command-prompt>git push origin master # push the changes from the master branch to your git host</command-prompt>
</command-line>

</div>
<div slot="Ionic">

<command-line>
<command-prompt>git add . # stage any changes</command-prompt>
<command-prompt>git commit -m "added appflow sdk" #  commit staged changes</command-prompt>
<command-prompt>git push ionic master # push the changes from the master branch to the Ionic remote</command-prompt>
</command-line>
</div>
</docs-tabs>

Once you've pushed the changes you should see your commit available in the `Commits` tab of the dashboard.

![Commits List](/docs/assets/img/appflow/ss-commit-list.png)