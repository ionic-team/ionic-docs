---
title: "ionic serve"
sidebar_label: "serve"
---
<head>
  <title>ionic serve: Start a Local Development Server for App Dev/Testing</title>
  <meta name="description" content="Start a local development server for app dev/testing with ionic serve. Learn how to easily spin up a development server which launches in your browser." />
</head>



Start a local dev server for app dev/testing

```shell
$ ionic serve [options]
```

Easily spin up a development server which launches in your browser. It watches for changes in your source files and automatically reloads with the updated build.

By default, `ionic serve` boots up a development server on `localhost`. To serve to your LAN, specify the `--external` option, which will use all network interfaces and print the external address(es) on which your app is being served.

Try the `--lab` option to see multiple platforms at once.

`ionic serve` uses the Angular CLI. Use `ng serve --help` to list all Angular CLI options for serving your app. See the `ng serve` [docs](https://angular.io/cli/serve) for explanations. Options not listed below are considered advanced and can be passed to the Angular CLI using the `--` separator after the Ionic CLI arguments. See the examples.

The dev server can use HTTPS via the `--ssl` option **(experimental)**. There are several known issues with HTTPS. See issue [#3305](https://github.com/ionic-team/ionic-cli/issues/3305).

### Options

 - `--ssl`: Use HTTPS for the dev server 
      
 - `--prod`: Flag to use the `production` configuration 
      
 - `--external`: Host dev server on all network interfaces (i.e. `--host=0.0.0.0`) 
      
 - `--no-livereload`: Do not spin up dev server--just serve files 
      
 - `--no-open`: Do not open a browser window 
      


### Advanced Options

 - `--consolelogs`: Print app console logs to the terminal 
      
 - `--consolelogs-port=<port>`: Use specific port for console logs server 
      
 - `--configuration=<conf>`: Specify the configuration to use. (or `-c`)
      
 - `--source-map`: Output sourcemaps 
      
 - `--host=<host>`: Use specific host for the dev server 
      
 - `--port=<port>`: Use specific port for the dev server (or `-p`)
      
 - `--public-host=<host>`: The host used for the browser or web view 
      
 - `--browser=<browser>`: Specifies the browser to use (`safari`, `firefox`, `google chrome`) (or `-w`)
      
 - `--browseroption=<path>`: Specifies a path to open to (`/#/tab/dash`) (or `-o`)
      

## Examples

```shell
$ ionic serve 
$ ionic serve --external
$ ionic serve -- --proxy-config proxy.conf.json
```
