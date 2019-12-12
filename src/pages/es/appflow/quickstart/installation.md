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

![Install Instructions](/docs/assets/img/appflow/ss-appflow-sdk-install.png)

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

You can read more about the available [plugin variables in our API documentation](/docs/appflow/deploy/api#plugin-variables).

## Commit your changes

After you've installed the plugin, be sure to commit the changes made to your `config.xml` and `package.json` files.

<command-line> <command-prompt>git add . # stage any changes</command-prompt> <command-prompt>git commit -m "added appflow sdk" # commit staged changes</command-prompt> </command-line>