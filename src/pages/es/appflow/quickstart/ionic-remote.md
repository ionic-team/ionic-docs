---
title: 'Conectar usando Ionic Remoto'
previousText: 'Conéctate a tu Repositorio'
previousUrl: '/docs/appflow/quickstart/connect'
nextText: 'Instalar el SDK de Appflow'
nextUrl: '/docs/appflow/quickstart/installation'
---

Si no está utilizando una de las integraciones de repositorio de git soportadas, puede enviar su código fuente directamente a Ionic Appflow usando Git.

<blockquote>
  <b>Ionic Appflow <i>no es un reemplazo</i> para un servicio de alojamiento git.</b></br>
  Se recomienda utilizar un servicio de alojamiento git para administrar el código fuente principal de tu aplicación
  (GitHub, Bitbucket, etc.) !<br /><br />
  El <code>iónico</code> remoto se utiliza solo para interactuar con los servicios de Ionic Appflow.
</blockquote>

## Vincula tu repositorio

![Comando enlace Ionic](/docs/assets/img/appflow/ionic-link.gif)

Para vincular su repositorio local, simplemente ejecuta `enlace ionic` en el directorio root de tu proyecto existente y elige `Ionic Appflow` como tu git remoto. Esto te permitirá seleccionar la aplicación de panel a la que quieres enlazar, crea un mando `ionic` en tu configuración local de git, y crear o usar un par de claves SSH existente para la autenticación al enviar cambios a Ionic Appflow.

Puedes aprender más sobre git remotes [aquí](https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes).

## Configurar sus claves SSH

La autenticación remota Ionica se realiza atraver de claves SSH públicas/privadas para la autenticación más segura posible. Necesitarás subir una clave pública a Ionic Appflow para autenticarte. Esto se puede hacer automáticamente durante el proceso de `enlace iónico` o manualmente.

Una vez que hayas seleccionado la aplicación correcta y el mando `Ionic Appflow` , se le pedirá que cree un par de claves SSH o que utilice una existente. Si no estás familiarizado con las claves SSH, te recomendamos que dejes que la CLI cree automáticamente y las añada para ti. De lo contrario, puede elegir usar una clave existente y proporcionar a la CLI una ruta a la clave pública en su máquina local. También puede subir una clave pública existente en el panel de control de la aplicación en el área de configuración personal. que puedes encontrar haciendo clic en el icono de tu perfil en la parte inferior izquierda del panel.