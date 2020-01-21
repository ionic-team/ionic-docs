---
title: 'Instale el SDK de Appflow'
previousText: 'Conecta tu Repo'
previousUrl: '/docs/appflow/quickstart/connect'
nextText: 'Hacer Push de un Commit'
nextUrl: '/docs/appflow/quickstart/push'
---

Para aprovechar algunas de las mejores características de Appflow, como implementar actualizaciones en vivo en tu aplicación y omitir las tiendas de aplicaciones, necesitará instalar el SDK de Appflow (también conocido como Ionic Deploy plugin). El SDK de Appflow viene con la función Desploy de Ionic Appflow para detectar y sincronizar tu aplicación con actualizaciones que has enviado a canales.

## Instalar el SDK de Appflow desde el Dashboard (Recomendado)

Para instalar el plugin SDK de Appflow desde el Dashboard, sigue las instrucciones proporcionadas haciendo clic en "Instalar instrucciones" en la lista de canales en el panel de control de la aplicación.

![Guía de instalación](/docs/assets/img/appflow/ss-appflow-sdk-install.png)

## Instalar el SDK de Appflow manualmente

Para instalar el plugin manualmente, ejecute el siguiente comando en el directorio raíz de su aplicación Ionica asegurándose de sustituir los valores correctos de tu aplicación:

```shell
despliegue ionic add \
    --app-id="YOUR_APP_ID" \
    --channel-name="YOUR_CHANNEL_NAME" \
  --update-method="background|auto|none" \
```

También puedes ejecutar `Iónico deploy add` y el CLI te pedirá los valores necesarios.

<blockquote>
  NOTA: El plugin retrasa el evento listo de cordova hasta que termine de comprobar las actualizaciones y establezca la preferencia <b>AutoHideSplashScreen</b> preferencia cordova a falso en la configuración. ml que hace que la pantalla de Splash no desaparezca automáticamente. Todas las plantillas Ionic ejecutan
<code>this.splashScreen.hide();</code> en el evento listo cordova de forma predeterminada, pero si fue removido, debe ser añadido. Alternativamente, la aplicación puede establecer la preferencia cordova de <b>AutoHideSplashScreen</b> a true en su config.xml para reemplazar el valor añadido por el plugin, pero eso puede llevar a que la pantalla de Splash desaparezca antes de que la descarga se haya completado.
</blockquote>

### Variables de Plugin

* `--app-id` es el ID de la aplicación en Ionic Appflow.
* `--channel-name` es el nombre del canal [Channel](/docs/appflow/deploy/channels) que te gustaría que la aplicación escuchara para las actualizaciones. 
 * ¡Asegúrate de usar el *nombre exacto de tu canal*, incluyendo el caso exacto!
* `--update-method` es uno de `background | auto | none`. Esto determina cómo responde su aplicación cuando una nueva actualización en vivo está disponible para su descarga.

Puede leer más sobre las [variables de plugin disponibles en nuestra documentación de API](/docs/appflow/deploy/api#plugin-variables).

## Commit de los cambios

Después de instalar el plugin, asegúrese de confirmar los cambios realizados en los archivos `config.xml` y `package.json`.

<command-line> <command-prompt>git add . # organizar cualquier cambio</command-prompt> <command-prompt>git commit -m "appflow sdk" # commit escalonados</command-prompt> </command-line>