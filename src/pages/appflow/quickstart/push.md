---
title: 'Push a Commit'
previousText: 'Install the Appflow SDK'
previousUrl: '/docs/appflow/quickstart/installation'
nextText: 'Deploy a Live Update'
nextUrl: '/docs/appflow/quickstart/deploy'
---

In order for Appflow to access your code base you'll need to push a commit so that it shows up in your Dashboard.

## Committing to Appflow
If you are using an integration with GitHub, Bitbucket or Bitbucket Server, a new commit will show up every time you push to your git host.

If you are using Ionic as your git remote, you'll need to push to your commit to Appflow directly to see your commit in the Dashboard.

<docs-tabs>
<docs-tab tab="GitHub / Bitbucket">

<command-line>
<command-prompt>git add . # stage any changes</command-prompt>
<command-prompt>git commit -m "added appflow sdk" #  commit staged changes</command-prompt>
<command-prompt>git push origin master # push the changes from the master branch to your git host</command-prompt>
</command-line>

</docs-tab>
<docs-tab tab="Ionic Remote">

<command-line>
<command-prompt>git add . # stage any changes</command-prompt>
<command-prompt>git commit -m "added appflow sdk" #  commit staged changes</command-prompt>
<command-prompt>git push ionic master # push the changes from the master branch to the Ionic remote</command-prompt>
</command-line>
</docs-tab>
</docs-tabs>

Once you've done a `git push`, you should see your commit available in the `Commits` tab of the Dashboard.

![Commits List](/docs/assets/img/appflow/ss-commit-list.png)