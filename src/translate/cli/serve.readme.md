Easily spin up a development server which launches in your browser. It watches for changes in your source files and automatically reloads with the updated build.

By default, `ionic serve` boots up a development server on all network interfaces and prints the external address(es) on which your app is being served. It also broadcasts your app to the Ionic DevApp on your network. To disable the DevApp and bind to `localhost`, use `--local`.

Try the `--lab` option to see multiple platforms at once.

`ionic serve` uses the Angular CLI. Use `ng serve --help` to list all Angular CLI options for serving your app. See the `ng serve` [docs](https://angular.io/cli/serve) for explanations. Options not listed below are considered advanced and can be passed to the Angular CLI using the `--` separator after the Ionic CLI arguments. See the examples.

The dev server can use HTTPS via the `--ssl` option **(experimental)**. There are several known issues with HTTPS. See issue [#3305](https://github.com/ionic-team/ionic-cli/issues/3305).