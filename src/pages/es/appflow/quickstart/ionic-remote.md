---
title: 'Conectar usando Ionic Remoto'
sidebar_label: Ionic Remote
previousText: 'Connect your Repo'
previousUrl: '/docs/appflow/quickstart/connect'
nextText: 'Install the Appflow SDK'
nextUrl: '/docs/appflow/quickstart/installation'
---

Si no está utilizando una de las integraciones de repositorio de git soportadas, puede enviar su código fuente directamente a Ionic Appflow usando Git.

<blockquote>
  <b>Ionic Appflow is <i>not a replacement</i> for a git hosting service.</b><br />
  It is recommended that you use a git hosting service to manage your primary app source code
  (GitHub, Bitbucket, etc.)!<br /><br />
  The <code>ionic</code> remote is used only for interacting with the Ionic Appflow services.
</blockquote>

## Vincula tu repositorio

![Comando enlace Ionic](/docs/assets/img/appflow/ionic-link.gif)

Para vincular su repositorio local, simplemente ejecuta `enlace ionic` en el directorio root de tu proyecto existente y elige `Ionic Appflow` como tu git remoto. Esto te permitirá seleccionar la aplicación de panel a la que quieres enlazar, crea un mando `ionic` en tu configuración local de git, y crear o usar un par de claves SSH existente para la autenticación al enviar cambios a Ionic Appflow.

Puedes aprender más sobre git remotes [aquí](https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes).

## Establishing Ionic Remote Connection to an Appflow-Linked Repository

If your repository has previously been linked to Appflow using the Ionic Remote and you simply need to re-establish the connection on a new machine or as a team member for an app, you can run the following command:

```bash
$ ionic git remote
```

## Configure your SSH keys

Ionic remote authentication is done via public/private SSH key pairs for the most secure authentication possible. You'll need to upload a public key to Ionic Appflow to authenticate yourself. This can be automatically done during the `ionic link` process or manually.

Once you've selected the correct app and the `Ionic Appflow` remote, you will be prompted to create an SSH key pair or use an existing one. If you're not familiar with SSH keys we suggest letting the CLI automatically create and add them for you. Otherwise, you can choose to use an existing key and provide the CLI with a path to the public key on your local machine. You can also upload an existing public key in the Appflow Dashboard in the personal Settings area, which you can find by clicking your profile icon on the lower left side of the Dashboard.