---
previousText: 'Crear Automatizaciones'
previousUrl: '/documentación/flujoDeAplicación/automatización/crear'
nextText: 'Retrollamada Http'
nextUrl: '/documentación/flujoDeAplicacion/automatización/RetrollamadaHttp'
---

# Entornos de compilación

## Introducción

Los entornos le brindan una forma de personalizar el proceso de compilación de su aplicación para producir diferentes versiones de sus aplicaciones para diferentes entornos desde la misma base de código. Todas las variables de entorno son accesibles para construir scrips que corren durante la porción `npm run install` y `npm run buil` de tus compilaciones.

Hay dos tipos de variables de Entorno disponibles para usar:

* [ Entornos Predefinidos ](#predefined-environments) (Disponibles en todas las Compilaciones)
* [Entornos Personalizados](#custom-environments) (Disponible en planes seleccionados)

## Entornos Predefinidos

Cada vez que se produce una compilación, se realiza en un entorno seguro donde proporcionamos algunas variables predefinidas que son pares clave/valor que están disponibles en el entorno y están disponibles mediante el uso de la sistaxis [process.env.MY_VAR](https://nodejs.org/docs/latest-v8.x/api/process.html#process_process_env) en NodeJS o via sintaxis `$MY_VAR` en un standard shell script. Estas variables se pueden aprovechar para [ personalizar la compilación y las salidas ](#usage).

Las siguientes variables de entorno se proporcionan en cada compilación, a las que se puede acceder en scripts de compilación:

* `CI_APP_ID` **(string):** Tu ID único de aplicación ionic.
* `CI_APP_NAME` **(string):** Tu nombre único de aplicación ionic.
* `CI_AUTOMATED_BUILD` **(int):** Si esta compilación se produjo como resultado de una automatización (`0` para `falso`, `1` para `verdadero`).
* `CI_AUTOMATION_ID` **(optional int):** El ID único de la automatización que creó esta compilación.
* `CI_AUTOMATION_NAME` **(optional string):** El nombre de la automatización que creó esta compilación.
* `CI_GIT_COMMIT_SHA` **(string):** El SHA para la confirmación en la que se ejecutó la compilación.
* `CI_GIT_COMMIT_MSG` **(string):** El mensaje para la confirmación en la que se ejecutó la compilación.
* `CI_GIT_REF` **(string):** La referencia git a partir de la cual se creó la compilación (i.e. `master`).
* `CI_GIT_REF_TYPE` **(string):** El tipo de referencia git (i.e. `branch`).

## Custom Environments

<blockquote>
  <p><b>Note:</b>This feature is only available on our <a href="/pricing">Growth plans</a> and above.</p>
</blockquote>

In addition to the [predefined environments](#predefined-environments), customers on the [plans with access to automations](/pricing) will have access to create custom environments. With custom environments it's easy to create and manage custom sets of key/value pairs to further customize builds on Ionic Appflow. Common use cases include customizing your build process in order to build staging & QA versions of your app that connect to different APIs or to build different white labeled versions of your application. To get started with custom environments, open the app you wish to work on and navigate in the sidebar to **Automate -> Environments**, then click **New Environment** on the top right. You should see a form like this:

![Create Environment Form](/docs/assets/img/appflow/ss-environments-create.png)

As can be noticed, there are 2 different sets of environment variables sections that can be utilized:

* Secrets
* Variables

The only difference is that the secrets are hidden and never shown in the dashboard after they have been added, while the variables are always available to be read.

The environments dashboard also lists available custom environments along with their configured key/value pairs and secrets keys.

![Environments List View](/docs/assets/img/appflow/ss-environments-list.png)

## Usage

For example you could replace your `build` script in the `package.json` with a custom shell script that reads the branch and triggers a custom build.

```json
// customize the build script in the package.json
{
...
    "scripts": {
        "start": "ionic-app-scripts serve",
        "clean": "ionic-app-scripts clean",
        "build": "./mybuild.sh",
        "lint": "ionic-app-scripts lint"
    },
...
```

    #!/bin/bash
    if [ "$CI_GIT_REF" = "master" ]; then
        npx ionic build --prod
    else
        npx ionic build
    fi
    

As of `@ionic/app-scripts@3.2.0` you can also use [environment variables directly in your source code](https://github.com/ionic-team/ionic-app-scripts#environments) and they will be replaced at build time so that you can customize your code based on the environment.

<blockquote>
  <p><b>Note:</b>`@ionic/app-scripts` is only for use with Ionic Framework v3 applications. The above does not apply to other versions.</p>
</blockquote>

For example:

```typescript
productionConfig = {
  api: 'https://my.production.api.com',
  analyticsKey: 'my-production-key'
}
stagingConfig = {
  api: 'https://my.staging.api.com',
  analyticsKey: 'my-staging-key'
}

localConfig = {
  api: 'https://localhost:7000'
  analyticsKey: 'my-local-key'
}

switch (process.env.CI_GIT_REF) {
  case 'master':
    return productionConfig;
  case 'staging':
    return stagingConfig;
  default:
    return localConfig;
}
```