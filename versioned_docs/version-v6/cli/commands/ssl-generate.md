---
title: "ionic ssl generate"
sidebar_label: "ssl generate"
---




Generates an SSL key & certificate

```shell
$ ionic ssl generate [options]
```

Uses OpenSSL to create a self-signed certificate for **localhost** (by default).

After the certificate is generated, you will still need to add it to your system or browser as a trusted certificate.

The default directory for `--key-path` and `--cert-path` is `.ionic/ssl/`.

### Options

 - `--key-path=<path>`: Destination of private key file 
      
 - `--cert-path=<path>`: Destination of certificate file 
      


### Advanced Options

 - `--country-name=<C>`: The country name (C) of the SSL certificate 
      
 - `--state-or-province-name=<ST>`: The state or province name (ST) of the SSL certificate 
      
 - `--locality-name=<L>`: The locality name (L) of the SSL certificate 
      
 - `--organization-name=<O>`: The organization name (O) of the SSL certificate 
      
 - `--common-name=<CN>`: The common name (CN) of the SSL certificate 
      
 - `--bits=<bits>`: Number of bits in the key (or `-b`)
      
