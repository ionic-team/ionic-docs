---
previousText: 'Setup'
previousUrl: '/docs/appflow/deploy/setup'
nextText: 'Channels'
nextUrl: '/docs/appflow/deploy/channels'
---

# Deploy Builds

A deploy build is a build of your application that includes only the web assets (JavaScript, HTML, fonts, and images)
which can be shipped out to customer via [Deploy](/docs/appflow/deploy/intro).
Deploy builds can be created manually from the Ionic Dashboard, in the **Builds**
section under **Deploy** in the sidebar. You will be able to pick from the list of available commits that Appflow
knows about. If there are know available commits you will need to push a new commit to your Git remote in order for
it to show up in Appflow.

![Navigating to Deploy Builds](/docs/assets/img/appflow/deploy-builds-create-location.png)

A deploy build will do the following:

* `npm install` will run to install any dependencies you have.
* `npm run build` will run if a `build` script is detected in the `scripts` section of your `package.json` in order to build the web assets for your application.
* The `www` directory with your built application will be stored and made available for live updates via [Deploy](/docs/appflow/deploy/intro)
* You can find the history and status of your deploy builds in the side menu under `Builds` in the `Deploy` tab.
