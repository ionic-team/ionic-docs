---
title: "Web Previews"
previousText: "Build Stacks"
previousUrl: "/docs/appflow/build-stacks"
---

<iframe src="//fast.wistia.net/embed/iframe/d9zuxeonhd" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" allowfullscreen mozallowfullscreen webkitallowfullscreen oallowfullscreen msallowfullscreen style="width: 100%; max-width: 100%" width="100%" height="349" mark="crwd-mark"></iframe>
<script src="//fast.wistia.net/assets/external/E-v1.js" async></script>

When you're performing a Web Build, you have the opportunity to turn on the "Preview URL" destination. This URL shows a running web version of your application either in a phone "chrome" or full-screen if you open it on a mobile device.

This allows you to quickly look at and share a specific version of your application. Here you can see our demo application (Ionifits) running:

![Web Preview View](/docs/assets/img/appflow/ss-web-preview-page.png)

## Turning on Preview URLs

All existing applications on Appflow have Preview URLs disabled by default. If you start a new application, you'll have the ability to turn them on as well.

In order to turn URLs on, you'll need to visit the "Web preview" settings inside of the dashboard for your app and enable them.

![Web Preview Settings](/docs/assets/img/appflow/ss-web-preview-settings.png)

There are a few things to note about Preview URLs:

- Preview URLs expose a **public URL** that can be accessed by anyone with the URL. The URL is generated using a random preview ID which makes it hard if not impossible for someone to guess.
- Our Previews are built to expose the Web version of your application. If your app is PWA ready all features should work fine, but if you're utilizing native APIs specifically, those will not function and you might receive errors.
- Other issues might arise that you'll have to handle inside your app or server (such as CORS). Appflow does not provide support for these issues, but you can inspect the application and see any errors like normal.
- Preview URLs merely exist to show you your running app and share it with stakeholders, they only last for 7 days, and should not be utilized for long-term hosting.
- Just enabling Web Previews will not automatically give you a working URL, you must also Build a web preview (see below)

## Building a Web Preview

In order to get a Web Preview, you must enable it for a specific build (either a one-time build or an automation).

When performing a new Build or setting up an Automation, you should choose "Web" as the target platform, then toggle "Web preview" to Enabled.

![Web Preview Build Toggle](/docs/assets/img/appflow/ss-web-preview-build-toggle.png)

After the build succeeds, you'll be able to click the eye icon in your builds list to view that Web preview:

![Web Preview Build List Link](/docs/assets/img/appflow/ss-web-preview-build-list-link.png)

## Sharing Preview URLs

In order to share a Web Preview with someone else, you'll need to send them the public share URL. This can be done by clicking the "Share" button from a Web Preview in the top right.

You can also share the QR code displayed on the Web Preview which can be scanned with the stock Camera application on an iOS or Android device which will open the URL inside the phone's browser.

## Preview URL App Mode

You can switch between previewing different modes of your application by clicking the "iPhone" dropdown in the top right of the Web preview. This allows you to choose other devices like Android or a tablet.