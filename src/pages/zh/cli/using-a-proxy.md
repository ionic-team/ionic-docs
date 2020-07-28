---
---

# 使用代理

Ionic CLI内置了代理支持。 代理可以通过配置文件或者环境变量进行设置。

要通过配置文件配置代理，可以使用代理服务器的URL运行如下命令。

```shell
$ ionic config set -g proxy http://proxy.example.com:8888
```

To configure proxy settings via an environment variable, use one of the following:

```shell
$ export HTTP_PROXY="http://proxy.example.com:8888" # also used by npm
$ export HTTPS_PROXY="https://proxy.example.com:8888" # also used by npm
$ export IONIC_HTTP_PROXY="http://proxy.example.com:8888"
```

### Other CLIs

Each CLI that you use must be configured separately to proxy network requests.

#### npm

```shell
$ npm config set proxy http://proxy.company.com:8888
```

#### git

```shell
$ git config --global http.proxy http://proxy.example.com:8888
```

### SSL Configuration

The Ionic CLI can be configured to use various SSL settings for HTTP requests.

```shell
$ ionic config set -g ssl.cafile /path/to/cafile # file path to your CA root certificate
$ ionic config set -g ssl.certfile /path/to/certfile # file path to a client certificate
$ ionic config set -g ssl.keyfile /path/to/keyfile # file path to a client key file
```

The `cafile`, `certfile`, and `keyfile` entries can be manually edited as arrays of strings in `~/.ionic/config.json` to include multiple files.