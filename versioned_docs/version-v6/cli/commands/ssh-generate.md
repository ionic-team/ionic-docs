---
title: "ionic ssh generate"
sidebar_label: "ssh generate"
---




Generates a private and public SSH key pair

```shell
$ ionic ssh generate [key-path] [options]
```



### key-path
Destination of private key file




### Advanced Options

 - `--type=<type>`: The type of key to generate: `ecdsa`, `ed25519`, `rsa` (or `-t`)
      
 - `--bits=<bits>`: Number of bits in the key (or `-b`)
      
 - `--annotation=<annotation>`: Annotation (comment) in public key. Your Ionic email address will be used (or `-C`)
      
