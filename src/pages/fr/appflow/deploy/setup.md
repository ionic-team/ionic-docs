---
previousText: 'Introduction'
previousUrl: '/docs/appflow/deploy/intro'
nextText: 'Deploy Builds'
nextUrl: '/docs/appflow/deploy/builds'
---

# Using Ionic Deploy

Ionic Appflow's Deploy feature makes it easy to deploy app updates in real time without going through a traditional app store submission process for the vast majority of business logic, UI, and style changes.

The Deploy feature works with the Ionic Appflow and requires you app is [connected to a git repo](/docs/appflow/quickstart/connect/) in order for Appflow to access your source code and deploy new code updates..

<blockquote>
  
<b>Note:</b> The Deploy feature only works on binary compatible changes (HTML, CSS, JS), meaning if you rely on native code updates you must resubmit to the app store first before using Deploy.
</blockquote>

## Installation

In order to use Ionic Appflow's Deploy feature you'll need to [install and configure the Appflow SDK](/docs/appflow/quickstart/installation).

## Advanced Usage

Want to do something sweet, like allow users to subscribe to a special Beta Channel instead of the default Production one? Do some split testing? Customize the way updates are applied (like checking every 30 minutes, or on login/logout)? Check out our detailed [Deploy API Documentation](/docs/appflow/deploy/api)!