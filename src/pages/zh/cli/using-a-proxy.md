---
---

# 使用代理

Ionic CLI内置了代理支持。 代理可以通过配置文件或者环境变量进行设置。

要通过配置文件配置代理，可以使用代理服务器的URL运行如下命令。

```shell
$ ionic config set -g proxy http://proxy.example.com:8888
```

要通过环境变量配置代理，使用以下命令中任意一个:

```shell
$ export HTTP_PROXY="http://proxy.example.com:8888" # also used by npm
$ export HTTPS_PROXY="https://proxy.example.com:8888" # also used by npm
$ export IONIC_HTTP_PROXY="http://proxy.example.com:8888"
```

### 其它CLI

您使用的每一个 CLI 必须单独配置代理网络请求。

#### npm

```shell
$ npm config set proxy http://proxy.company.com:8888
```

#### git

```shell
$ git config --global http.proxy http://proxy.example.com:8888
```

### SSL配置

Ionic CLI 可以配置为用于HTTP请求的各种SSL设置。

```shell
$ ionic config set -g ssl.cafile /path/to/cafile # file path to your CA root certificate
$ ionic config set -g ssl.certfile /path/to/certfile # file path to a client certificate
$ ionic config set -g ssl.keyfile /path/to/keyfile # file path to a client key file
```

`cafile`, `certfile`, 和 `keyfile` 可以手动编辑为字符串数组存在 `~/.ionic/config.json`中。