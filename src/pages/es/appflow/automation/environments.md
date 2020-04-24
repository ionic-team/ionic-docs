---
previousText: 'Crear Automatizaciones'
previousUrl: '/documentación/flujoDeAplicación/automatización/crear'
nextText: 'Retrollamada Http'
nextUrl: '/documentación/flujoDeAplicacion/automatización/RetrollamadaHttp'
---

# Entornos de compilación

## Introducción

Los entornos le brindan una forma de personalizar el proceso de compilación de su aplicación para producir diferentes versiones de sus aplicaciones para diferentes entornos desde la misma base de código. Todas las variables de entorno son accesibles para construir scrips que corren durante la porción `npm run install` y `npm run build` de tus compilaciones.

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

## Entornos Personalizados

<blockquote>
  <p><b>Note:</b>Esta función solo está disponible en nuestros <a href="/pricing">Planes de crecimiento</a> y superiores.</p>
</blockquote>

Además de los [ entornos predefinidos ](#predefined-environments), los clientes en los planes [ con acceso a automatizaciones ](/pricing) tendrán acceso para crear entornos personalizados. Con entornos personalizados, es fácil crear y administrar conjuntos personalizados de pares clave/valor para personalizar aún más las compilaciones en Ionic Appflow. Los casos de uso comunes incluyen la personalización de su proceso de compilación & para crear versiones de control de calidad de su aplicación que se conectan a diferentes API o para crear diferentes versiones de su aplicación con etiqueta blanca. Para comenzar con entornos personalizados, abra la aplicación en la que desea trabajar y navegue en la barra lateral para ** Automatizar -> Entornos **, luego haga clic en ** Nuevo entorno ** en la parte superior derecha. Deberá ver algo como esto:

![Crear formulario de entorno](/docs/assets/img/appflow/ss-environments-create.png)

Como se puede notar, hay dos diferentes conjuntos de secciones de variables de entorno que se pueden utilizar:

* Secretas
* Variables

La única diferencia es que los secretos están ocultos y nunca se muestran en el panel de control después de añadirlos, mientras que las variables están siempre disponibles para ser leídas.

El dashboard de entornos también muestra los entornos personalizados disponibles junto con sus pares clave/valor configurados y claves secretas.

![Vista de lista de entornos](/docs/assets/img/appflow/ss-environments-list.png)

## Uso

Por ejemplo, podría reemplazar su script `compilación` en `package.json` con un script de shell personalizado que lee la rama y desencadena una compilación personalizada.

```json
// personalizar el script de compilación en el package.json
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
    

A partir de `@ionic/app-scripts@3.2.0` también puede usar [ variables de entorno directamente en su código fuente ](https://github.com/ionic-team/ionic-app-scripts#environments) y se reemplazarán en el momento de la compilación para que pueda personalizar su código según el entorno.

<blockquote>
  <p><b>Nota:</b>`@ionic/app-scripts` es sólo para uso con aplicaciones Ionic Framework v3. Lo anterior no se aplica a otras versiones.</p>
</blockquote>

Por ejemplo:

```typescript
productionConfig = {
  api: 'https://my.production.api.com',
  analyticsKey: 'my-production-key'
}
stagingConfig = {
  api: 'https://my.staging.api. om',
  analyticsKey: 'my-staging-key'
}

localConfig = {
  api: 'https://localhost:7000'
  analyticsKey: 'my-local-key'
}

switch (process. nv.CI_GIT_REF) {
  case 'master':
    return productionConfig;
  caso 'staging':
    return stagingConfig;
  por defecto:
    return localConfig;
}
```