---
title: Ionic Native Enterprise Edition
---

Accelerate development with powerful solutions to common enterprise use cases - all built and supported by the Ionic team. Ionic’s growing library of solutions are ready to deploy in any of the apps you build with Native Enterprise Edition

Ionic Native Enterprise Edition includes a reliable set of Native APIs & functionality that you can use in your Ionic app,
quality controlled and maintained by the Ionic Team.

## What is Ionic Native Enterprise Edition
<div class="native-ee-pricing">
  <div class="table-wrap">
    <table>
      <thead>
        <tr>
          <td>
            <span class="native-ee-pricing-table">Features</span>
          </td>
          <th>
            <div class="plan-wrap">
              <span class="native-ee-pricing-table">Community Edition</span>
              <div class="price">$0/mo </div>
            </div>
          </th>
          <th>
            <div class="plan-wrap">
              <span class="native-ee-pricing-table">Enterprise Edition</span>
              <div class="price" data-toggle="billing-team">
                Contact Us</div>
            </div>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr class="stripe">
          <th>
            Maintainer
          </th>
          <td>OSS Community</td>
          <td>Ionic</td>
        </tr>
        <tr>
          <th>
            Regular Release Cycles & Updates
          </th>
          <td>No</td>
          <td><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M186.301 339.893L96 249.461l-32 30.507L186.301 402 448 140.506 416 110z"/></svg></td>
        </tr>
        <tr class="stripe">
          <th>
            Support SLA & Ticketing System
          </th>
          <td>No</td>
          <td><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M186.301 339.893L96 249.461l-32 30.507L186.301 402 448 140.506 416 110z"/></svg></td>
        </tr>
        <tr>
          <th>
            Advisory & Support
          </th>
          <td>No</td>
          <td><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M186.301 339.893L96 249.461l-32 30.507L186.301 402 448 140.506 416 110z"/></svg></td>
        </tr>
        <tr class="stripe">
          <th>
            Security & Bug fixes
          </th>
          <td>OSS Community</td>
          <td><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M186.301 339.893L96 249.461l-32 30.507L186.301 402 448 140.506 416 110z"/></svg></td>
        </tr>
        <tr>
          <th>
            Implementation Guidance
          </th>
          <td>No</td>
          <td><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M186.301 339.893L96 249.461l-32 30.507L186.301 402 448 140.506 416 110z"/></svg></td>
        </tr>
        <tr class="stripe">
          <th>
            Guaranteed SLA
          </th>
          <td>No</td>
          <td><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M186.301 339.893L96 249.461l-32 30.507L186.301 402 448 140.506 416 110z"/></svg></td>
        </tr>
          <th></th>
          <td></td>
          <td><a class="btn"
                href="https://ionicframework.com/enterprise-edition">Learn More</a></td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

## Sign Up for Ionic Native Enterprise Edition

<hubspot-form form-id="7c2c6529-48c0-4d17-86a0-bfd40c849bb1"></hubspot-form>

## Setup
In order to provide the best experience you should make sure you're using the
Ionic Enterprise Cordova CLI as the regular version can have issues with scoped plugins.

<command-line>
<command-prompt>npm uninstall -g cordova</command-prompt>
<command-prompt>npm install -g @ionic-enterprise/cordova</command-prompt>
</command-line>

## Register Your Product Key
If you already have an app you can simply register the product key for your application using the Ionic CLI and following
the provided prompts.

<command-line>
<command-prompt># in your app root</command-prompt>
<command-prompt>ionic enterprise register</command-prompt>
</command-line>

Running the register command should generate a `.npmrc` file in you app directory and update your `ionic.config.json` it is safe
to commit both these changes to version control so that CI and other team members can restore the plugins from a fresh clone of the
repo. Now you should be able to install Ionic Enterprise plugins that you have access to by following the instructions on the plugin
docs page.

<command-line>
<command-prompt>ionic cordova plugin add @ionic-enterprise/plugin-name</command-prompt>
</command-line>

## Plugin List
- [Android Permissions](/docs/enterprise/android-permissions)
- [Apple Wallet](/docs/enterprise/apple-wallet)
- [App Version](/docs/enterprise/appversion)
- [Badge](/docs/enterprise/badge)
- [Calendar](/docs/enterprise/calendar)
- [Camera](/docs/enterprise/camera)
- [Clipboard](/docs/enterprise/clipboard)
- [Device](/docs/enterprise/device)
- [Dialogs](/docs/enterprise/dialogs)
- [Email Composer](/docs/enterprise/email-composer)
- [Filesystem](/docs/enterprise/filesystem)
- [Geolocation](/docs/enterprise/geolocation)
- [Identity Vault](/docs/enterprise/identity-vault)
- [Inappbrowser](/docs/enterprise/inappbrowser)
- [Media](/docs/enterprise/media)
- [Media Capture](/docs/enterprise/media-capture)
- [Native Storage](/docs/enterprise/nativestorage)
- [Network Information](/docs/enterprise/network-information)
- [Screen Orientation](/docs/enterprise/screen-orientation)
- [Splash Screen](/docs/enterprise/splashscreen)
- [Status Bar](/docs/enterprise/statusbar)
- [Vibration](/docs/enterprise/vibration)
