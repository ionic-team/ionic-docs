---
previousText: 'Introduction'
previousUrl: '/docs/appflow/deploy/intro'
nextText: 'Deploy Builds'
nextUrl: '/docs/appflow/deploy/builds'
---

# Using Live Update

Ionic Appflow's Live Update feature makes it easy to deploy app updates in real time without going through a traditional app store submission process for the vast majority of business logic, UI, and style changes.

The Deploy feature works with the Ionic Appflow and requires your app is [connected to a git repo](/docs/appflow/quickstart/connect/) in order for Appflow to access your source code and deploy new code updates..

<blockquote>
<b>Note:</b> The Live Update feature only works on binary compatible changes (HTML, CSS, JS),
meaning if you rely on native code updates you must resubmit to the app store first before using Live Update.
</blockquote>

## Installation

In order to use Ionic Appflow's Live Update feature you'll need to
[install and configure the Appflow SDK](/docs/appflow/quickstart/installation).

## Advanced Usage

Want to do something sweet, like allow users to subscribe to a special Beta Channel instead of the default Production one? Do some split testing? Customize the way updates are applied (like checking every 30 minutes, or on login/logout)? Check out our detailed [Live Update API Documentation](/docs/appflow/deploy/api)!
