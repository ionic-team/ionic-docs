---
title: Ionic Native Enterprise Edition
---

Accelerate development with powerful solutions to common enterprise use cases - all built and supported by the Ionic team. Ionic’s growing library of solutions are ready to deploy in any of the apps you build with Native Enterprise Edition

Ionic Native Enterprise Edition includes a reliable set of Native APIs & functionality that you can use in your Ionic app, quality controlled and maintained by the Ionic Team.

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

In order to use the Ionic Native Enterprise Edition plugins you need to install the Ionic Enterprise Cordova CLI. Ionic Native Enterprise Edition plugins use scoped packages and the regular Cordova CLI does not work with scoped packages.

<command-line> <command-prompt>npm uninstall -g cordova</command-prompt> <command-prompt>npm install -g @ionic-enterprise/cordova</command-prompt> </command-line>

The Ionic Enterprise Cordova CLI should be installed on each developer's machine. This is also true for any development build servers that you may use.

## Register Your Product Key

In order to use the Ionic Native Enterprise Edition plugins in your application you will need to register your key with the application. Each application that you create will need to have its own key.

Register the product key for your application using the Ionic CLI. Follow the provided prompts. This only needs to be run once per application.

<command-line> <command-prompt># in your app root</command-prompt> <command-prompt>ionic enterprise register</command-prompt> </command-line>

Running the register command will generate a `.npmrc` file in you app directory and update your `ionic.config.json`. Both of these changes should be committed to version control so that CI and other team members can restore the plugins from a fresh clone of the repo. Now you are able to install Ionic Enterprise plugins that you have access to by following the instructions on the plugin docs page.

<command-line> <command-prompt>ionic cordova plugin add @ionic-enterprise/plugin-name</command-prompt> </command-line>

## Plugins

### Authentication & Security

- [Auth Connect](/docs/enterprise/auth-connect)
- [Identity Vault](/docs/enterprise/identity-vault)

### Common Device Features

- [Android Permissions](/docs/enterprise/android-permissions)
- [App Version](/docs/enterprise/app-version)
- [Badge](/docs/enterprise/badge)
- [Browser](/docs/enterprise/inappbrowser)
- [Calendar](/docs/enterprise/calendar)
- [Camera](/docs/enterprise/camera)
- [Clipboard](/docs/enterprise/clipboard)
- [Contacts](/docs/enterprise/contacts)
- [Device](/docs/enterprise/device)
- [Dialogs](/docs/enterprise/dialogs)
- [Email Composer](/docs/enterprise/email-composer)
- [Filesystem](/docs/enterprise/filesystem)
- [Geolocation](/docs/enterprise/geolocation)
- [Haptics & Vibration](/docs/enterprise/vibration)
- [Keyboard](/docs/enterprise/keyboard)
- [Media](/docs/enterprise/media)
- [Media Capture](/docs/enterprise/media-capture)
- [Native Storage](/docs/enterprise/nativestorage)
- [Network Information](/docs/enterprise/network-information)
- [Screen Orientation](/docs/enterprise/screen-orientation)
- [Splash Screen](/docs/enterprise/splashscreen)
- [Status Bar](/docs/enterprise/statusbar)

### Integrated Services

- [Active Directory](https://ionicframework.com/integrations/ms-activedirectory-ms-adal)
- [mParticle](/docs/enterprise/mparticle)

### Offline & Storage

- [Couchbase Lite](/docs/enterprise/couchbase-lite)

### Payments

- [Apple Payment Pass](/docs/enterprise/apple-payment-pass)