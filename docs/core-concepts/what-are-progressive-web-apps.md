---
sidebar_label: What are PWAs?
title: Progressive Web Apps
---

<head>
  <title>Progressive Web Applications: What is a PWA - Ionic Documentation</title>
  <meta
    name="description"
    content="What is a PWA? A Progressive Web Application uses modern web capabilities to deliver an app-like experience. Read our core concept documentation to learn more."
  />
</head>

<!-- TOC goes here -->

### The web...but better

A Progressive Web App (PWA) is a web app that uses modern web capabilities to deliver an app-like experience to users.
These apps meet certain requirements (see below), are deployed to servers, accessible through URLs, and indexed by search engines.

This can work in conjunction with [Capacitor](https://capacitor.ionicframework.com) to provide a multiple deploy targets for all your users.
You can deploy your app as a PWA as well as Native app and take advantage of both channels.

Ionic allows you to ship your app to not only the app store, but also deploy to the mobile web as a PWA.

### What is required

To be considered a Progressive Web App, your app must be:

- Progressive - Work for every user, regardless of browser choice, because they are built with progressive enhancement as a core tenet.

- Responsive - Fit any form factor, desktop, mobile, tablet, or whatever is next.

- Connectivity independent - Enhanced with service workers to work offline or on low quality networks.

- App-like - Use the app-shell model to provide app-style navigation and interactions.

- Fresh - Always up-to-date thanks to the service worker update process.

- Safe - Served via HTTPS to prevent snooping and ensure content has not been tampered with.

- Discoverable - Are identifiable as “applications” thanks to W3C manifests and service worker registration scope allowing search engines to find them.

- Re-engageable - Make re-engagement easy through features like push notifications.

- Installable - Allow users to “keep” apps they find most useful on their home screen without the hassle of an app store.

- Linkable - Easily share via URL and not require complex installation.

<em>
  <a href="https://addyosmani.com/blog/getting-started-with-progressive-web-apps/" target="_blank">
    Addy Osmani: Progressive web apps
  </a>
</em>

There is a lot here, but it boils down to a few points for Ionic apps.

#### Offline Support

Apps should be able to work offline. Whether that be displaying a proper "offline" message or caching app data for display purpose.

#### <a href="https://developer.mozilla.org/en-US/docs/Web/Manifest" target="_blank">Web App Manifest</a>

An app manifest file should describe the resources your app will need. This includes your app's displayed name, icons, as well as splash screen. If you link to the manifest file in your index.html, browsers will detect that and load the resources for you.

#### <a href="https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API" target="_blank">Service Worker</a>

Service worker could be mentioned in Offline Support, but it really deserves its own section. Service worker provides a programmatic way to cache app resources. Be it JavaScript files or JSON data from a HTTP request. The programmatic API allows developers to decide how to handle caching and provides a much more flexible experience than other options.
