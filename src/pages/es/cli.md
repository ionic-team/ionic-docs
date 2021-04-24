---
meta:
  title: "Framework Ionic CLI: Interfaz de líneas de comando para el desarrollo de aplicaciones"
  description: La interfaz de línea de comandos de Ionic (CLI por sus siglas en inglés) es la herramienta para el desarrollo de aplicaciones Ionic. Instale nuestro framework globalmente con npm.
---

# Ionic CLI

La interfaz de líneas de comandos Ionic ([CLI, por sus siglas en inglés](/docs/reference/glossary#cli)) es la herramienta para el desarrollo de aplicaciones Ionic.

## Instalación

El Ionic CLI se puede instalar globalmente con npm:

```shell
$ npm install -g @ionic/cli
```

## Ayuda

La Ionic CLI viene con documentación de comando accesible con el modificador `--help`.

```shell
$ ionic --help
$ ionic <command> --help
$ ionic <command> <subcommand> --help
```

> Asegúrate de ejecutar `ionic <command> --help` en el directorio de tu proyecto.
> 
> Para algunos comandos, como `ionic serve`, la documentación de ayuda es contextual al tipo de tu proyecto, por ejemplo, React vs Angular.

<!-- TODO: image? -->

## Arquitectura

El Ionic CLI está construido con [TypeScript](/docs/reference/glossary#typescript) y [Node.js](/docs/reference/glossary#node). Soporta Node 10.3+, pero se recomienda la última versión de Node LTS siempre. Siga el desarrollo en el <a href="https://github.com/ionic-team/ionic-cli" target="_blank">repositorio GitHub</a> de código abierto.

## Solución de problemas

Para solucionar problemas con el Ionic CLI, puede ser útil lo siguiente:

- Asegúrese de que la última versión de Ionic CLI está instalada. Obtenga la versión instalada ejecutando `ionic --version`.
- Asegúrese de que la última versión de Node LTS está instalada. Ver la configuración de entorno de [Node & npm](/docs/intro/environment#node-npm).
- El modificador `--verbose` imprime mensajes de depuración, lo que puede mostrar el problema.
- Problemas de conexión pueden deberse a configuraciones de proxy incorrectas. Vea [Utilizando un Proxy](/docs/cli/using-a-proxy) para configurar.
- El directorio global de configuración de Ionic CLI es `~/.ionic` en todas las plataformas. Se puede eliminar de forma segura y el Ionic CLI lo repoblará, pero toda la configuración (incluidas las sesiones de usuario) se perderá. Configure este directorio con las [variables de entorno CLI](/docs/cli/configuration#environment-variables).