---
previousText: 'Introducción'
previousUrl: '/docs/appflow/automation/intro'
nextText: 'Ambientes'
nextUrl: '/docs/appflow/automation/environments'
---

# Usando automatizaciones

## Automatización minera

Crear y personalizar las automatizaciones es sencillo. Para empezar, navegue a la pestaña `Automatizar` dentro de la aplicación deseada.

Para **crear una nueva automatización**, haz clic en el botón `Nueva automatización` en la parte superior derecha del panel de control `Automatizar`. When clicked, the automation customization form will appear, which has several fields available to customize the automation (Read more about these [below](#customizing-automations)).

To **edit an automation**, click the three dots next to the one you'd like to modify.

## Personalizando Automatizaciones

Hay una serie de personalizaciones disponibles para especificar el comportamiento específico de una automatización determinada. Se muestran en el formulario de creación/edición de automatización a continuación.

### Basic Automation Info

All automations need a name and git branch to trigger from. Whenever code is pushed to the selected branch, the automation will run.

![Choosing an Automation Type](/docs/assets/img/appflow/ss-automation-create-type.png)

#### Campos

* **Name:** A name to identify the automation task.
* **Git Branch:** The branch which will trigger the automation. This will run a build any time a `git push` is made to the specified branch.
* **Automation Type:** The type of job this automation will run.

In addition to name and git branches, automations have a number of customizations available depending on the type of job selected.

##### Note about Git Branch naming

It is possible to specify one or multiple `*` wildcards character to match multiple branches within a single automation; for instance:

* a branch simply set to `*` will match all the branches and will trigger the automation for any single git push
* a branch set to `dev*` will match any branch with a name starting with `dev` including `dev` itself
* a branch set to `dev*other` will match any branch with a name starting with `dev` and ending with `other` including `devother`

### Package Automations

Package automations create native builds which can be downloaded and run on devices. They have the following customizations:

![Creating a package automation](/docs/assets/img/appflow/ss-automation-create-package.png)

#### Campos

* **Environment:** The [custom build environment](/docs/appflow/environments/#custom-environments) (if any) to use when this automations is triggered.
* **Native Config:** The [native config](/docs/appflow/package/intro#native-configs) (if any) to use when this automations is triggered.
* **Target Platform:** The platform being targeted, can be Android or iOS (for either Xcode 8 or 9)
* **Build Type:** The type of build to create. Options depend on the selected platform.
* **Security Profile:** Which security profile to use. Learn more about them [here](/docs/appflow/package/credentials).
* **Webhook:** (optional) If specified, a POST with information about completed builds will be sent to the entered URL. Learn more about their content [here](/docs/appflow/automation/webhooks).

### Web Automations

Web automations build the javascript portion of an application and interface with the [Deploy](/docs/appflow/deploy/intro) service to enable live app updates.

![Creating a web automation](/docs/assets/img/appflow/ss-automation-create-web.png)

#### Campos

* **Environment:** The [custom build environment](/docs/appflow/environments/#custom-environments) (if any) to use when this automations is triggered.
* **Channel:** The [Deploy Channel](/docs/appflow/deploy/channels) where web builds from this automation will be assigned.
* **Webhook:** (optional) If specified, a POST with information about completed builds will be sent to the entered URL. Learn more about their content [here](/docs/appflow/automation/webhooks).