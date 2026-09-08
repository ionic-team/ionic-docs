---
title: CORS Errors
---

<head>
  <title>CORS Errors: Cross-Origin Resource Sharing - Ionic Documentation</title>
  <meta
    name="description"
    content="CORS errors happen in web apps if requests are made and servers don't return required headers. Read about Cross-Origin Resource Sharing in Ionic Documentation."
  />
</head>

## What is CORS?

**Cross-Origin Resource Sharing (CORS)** is a mechanism that browsers and webviews — like the ones powering Capacitor and Cordova — use to restrict HTTP and HTTPS requests made from scripts to resources in a different origin for security reasons, mainly to protect your user's data and prevent attacks that would compromise your app.

In order to know if an external origin supports CORS, the server has to send some [special headers](#cors-headers) for the browser to allow the requests.

An **origin** is the combination of the **protocol**, **domain**, and **port** from which your Ionic app or the external resource is served. For example, apps running in Capacitor have `capacitor://localhost` (iOS) or `http://localhost` (Android) as their origin.

When the origin where your app is served (e.g. `http://localhost:8100` with `ionic serve`) and the origin of the resource being requested (e.g. `https://api.example.com`) don't match, the browser's <a href="https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy" target="_blank" rel="noopener">Same Origin Policy</a> takes effect and CORS is required for the request to be made.

CORS errors are common in web apps when a cross-origin request is made but the server doesn't return the required headers in the response (is not CORS-enabled):

:::note
XMLHttpRequest cannot load https://api.example.com. No 'Access-Control-Allow-Origin' header is present on the requested resource. Origin 'http://localhost:8100' is therefore not allowed access.
:::

## How does CORS work

### Request with preflight

By default, when a web app tries to make a cross-origin request the browser sends a **preflight request** before the actual request. This preflight request is needed in order to know if the external resource supports CORS and if the actual request can be sent safely, since it may impact user data.

A preflight request is sent by the browser if:

- **The method is:**
  - PUT
  - DELETE
  - CONNECT
  - OPTIONS
  - TRACE
  - PATCH
- **Or if it has a header other than:**
  - Accept
  - Accept-Language
  - Content-Language
  - Content-Type
  - DPR
  - Downlink
  - Save-Data
  - Viewport-Width
  - Width
- **Or if it has a `Content-Type` header other than:**
  - application/x-www-form-urlencoded
  - multipart/form-data
  - text/plain
- Or if a `ReadableStream` or event listeners in `XMLHttpRequestUpload` are used.

If any of the conditions above are met, a preflight request with the `OPTIONS` method is sent to the resource URL.

Let's suppose we are making a `POST` request to a fictional JSON API at `https://api.example.com` with a `Content-Type` of `application/json`. The preflight request would be like this (some default headers omitted for clarity):

```http
OPTIONS / HTTP/1.1
Host: api.example.com
Origin: http://localhost:8100
Access-Control-Request-Method: POST
Access-Control-Request-Headers: Content-Type
```

If the server is CORS enabled, it will parse the `Access-Control-Request-*` headers and understand that a `POST` request is trying to be made from `http://localhost:8100` with a custom `Content-Type`.

The server will then respond to this preflight with which origins, methods, and headers are allowed by using the `Access-Control-Allow-*` headers:

```http
HTTP/1.1 200 OK
Access-Control-Allow-Origin: http://localhost:8100
Access-Control-Allow-Methods: GET, POST, OPTIONS
Access-Control-Allow-Headers: Content-Type
```

If the returned origin and method don't match the ones from the actual request, or any of the headers used are not allowed, the request will be blocked by the browser and an error will be shown in the console. Otherwise, the request will be made after the preflight.

In our example, since the API expects JSON, all `POST` requests will have a `Content-Type: application/json` header and always be preflighted.

### Simple requests

Some requests are always considered safe to send and don't need a preflight if they meet all of the following conditions:

- **The method is:**
  - GET
  - HEAD
  - POST
- **Have only these headers:**
  - Accept
  - Accept-Language
  - Content-Language
  - Content-Type
  - DPR
  - Downlink
  - Save-Data
  - Viewport-Width
  - Width
- **The `Content-Type` header is:**
  - application/x-www-form-urlencoded
  - multipart/form-data
  - text/plain
- No `ReadableStream` or event listeners in `XMLHttpRequestUpload` are used.

In our example API, `GET` requests don't need to be preflighted because no JSON data is being sent, and so the app doesn't need to use the `Content-Type: application/json` header. They will always be simple requests.

## CORS Headers

### Server Headers (Response)

| Header                           | Value             | Description                                                                                                                                                                                |
| -------------------------------- | ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Access-Control-Allow-Origin**  | `origin` or `*`   | Specifies the origin to be allowed, like `http://localhost:8100` or `*` to allow all origins.                                                                                              |
| **Access-Control-Allow-Methods** | `methods`         | Which methods are allowed when accessing the resource: `GET`, `HEAD`, `POST`, `PUT`, `DELETE`, `CONNECT`, `OPTIONS`, `TRACE`, `PATCH`.                                                     |
| **Access-Control-Allow-Headers** | `headers`         | Used in response to a preflight request to indicate which headers can be used when making the actual request, aside from the [simple headers](#simple-requests), which are always allowed. |
| Access-Control-Allow-Credentials | `true` or `false` | Whether or not the request can be made with credentials.                                                                                                                                   |
| Access-Control-Expose-Headers    | `headers`         | Specifies the headers that the browser is allowed to access.                                                                                                                               |
| Access-Control-Max-Age           | `seconds`         | Indicates how long the results of a preflight request can be cached.                                                                                                                       |

### Browser Headers (Request)

The browser automatically sends the appropriate headers for CORS in every request to the server, including the preflight requests. Please note that the headers below are for reference only, and **should not be set in your app code** (the browser will ignore them).

#### All Requests

| Header     | Value    | Description                          |
| ---------- | -------- | ------------------------------------ |
| **Origin** | `origin` | Indicates the origin of the request. |

#### Preflight Requests

| Header                            | Value     | Description                                                                                       |
| --------------------------------- | --------- | ------------------------------------------------------------------------------------------------- |
| **Access-Control-Request-Method** | `method`  | Used to let the server know what method will be used when the actual request is made.             |
| Access-Control-Request-Headers    | `headers` | Used to let the server know what non-simple headers will be used when the actual request is made. |

## Solutions for CORS Errors

### A. Enabling CORS in a server you control

The correct and easiest solution is to enable CORS by returning the [right response headers](#server-headers-response-) from the web server or backend and responding to preflight requests, as it allows to keep using `XMLHttpRequest`, `fetch`, or abstractions like `HttpClient` in Angular.

Ionic apps may be run from different origins, but only one origin can be specified in the `Access-Control-Allow-Origin` header. Therefore we recommend checking the value of the `Origin` header from the request and reflecting it in the `Access-Control-Allow-Origin` header in the response.

Please note that all of the `Access-Control-Allow-*` headers have to be sent from the server, and don't belong in your app code.

Here are some of the origins your Ionic app may be served from:

#### Capacitor

| Platform | Origin                  |
| -------- | ----------------------- |
| iOS      | `capacitor://localhost` |
| Android  | `http://localhost`      |

Replace `localhost` with your own hostname if you have changed the default in the Capacitor config.

#### Ionic WebView 3.x plugin on Cordova

| Platform | Origin              |
| -------- | ------------------- |
| iOS      | `ionic://localhost` |
| Android  | `http://localhost`  |

Replace `localhost` with your own hostname if you have changed the default in the plugin config.

#### Ionic WebView 2.x plugin on Cordova

| Platform | Origin                  |
| -------- | ----------------------- |
| iOS      | `http://localhost:8080` |
| Android  | `http://localhost:8080` |

Replace port `8080` with your own if you have changed the default in the plugin config.

#### Local development in the browser

| Command                       | Origin                                                   |
| ----------------------------- | -------------------------------------------------------- |
| `ionic serve`                 | `http://localhost:8100` or `http://YOUR_MACHINE_IP:8100` |
| `npm run start` or `ng serve` | `http://localhost:4200` for Ionic Angular apps.          |

Port numbers can be higher if you are serving multiple apps at the same time.

Allowing any origin with `Access-Control-Allow-Origin: *` is guaranteed to work in all scenarios but may have security implications — like some CSRF attacks — depending on how the server controls access to resources and use sessions and cookies.

For more information on how to enable CORS in different web and app servers, please check <a href="https://enable-cors.org" target="_blank" rel="noopener">enable-cors.org</a>

CORS can be easily enabled in Express/Connect apps with the <a href="https://github.com/expressjs/cors" target="_blank" rel="noopener">cors</a> middleware:

```javascript
const express = require('express');
const cors = require('cors');
const app = express();

const allowedOrigins = [
  'capacitor://localhost',
  'ionic://localhost',
  'http://localhost',
  'http://localhost:8080',
  'http://localhost:8100',
];

// Reflect the origin if it's in the allowed list or not defined (cURL, Postman, etc.)
const corsOptions = {
  origin: (origin, callback) => {
    if (allowedOrigins.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Origin not allowed by CORS'));
    }
  },
};

// Enable preflight requests for all routes
app.options('*', cors(corsOptions));

app.get('/', cors(corsOptions), (req, res, next) => {
  res.json({ message: 'This route is CORS-enabled for an allowed origin.' });
});

app.listen(3000, () => {
  console.log('CORS-enabled web server listening on port 3000');
});
```

### B. Working around CORS in a server you can't control

#### Don't leak your keys!

If you are trying to connect to a 3rd-party API, first check in its documentation that is safe to use it directly from the app (client-side) and that it won't leak any secret/private keys or credentials, as it's easy to see them in clear text in Javascript code. Many APIs don't support CORS on purpose, in order to force developers to use them in the server and protect important information or keys.

#### 1. Native-only apps (iOS/Android)

Use the [HTTP plugin from Ionic Native](../native/http.md) to make the requests natively from outside the webview. Please note that this plugin doesn't work in the browser, so the development and testing of the app must always be done in a device or simulator going forward.

##### Usage in Ionic Angular 4

```tsx
import { Component } from '@angular/core';
import { HTTP } from '@awesome-cordova-plugins/http/ngx';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  constructor(private http: HTTP) {}

  async getData() {
    try {
      const url = 'https://api.example.com';
      const params = {};
      const headers = {};

      const response = await this.http.get(url, params, headers);

      console.log(response.status);
      console.log(JSON.parse(response.data)); // JSON data returned by server
      console.log(response.headers);
    } catch (error) {
      console.error(error.status);
      console.error(error.error); // Error message as string
      console.error(error.headers);
    }
  }
}
```

#### 2. Native + PWAs

Send the requests through an HTTP/HTTPS proxy that bypasses them to the external resources and adds the necessary CORS headers to the responses. This proxy must be trusted or under your control, as it will be intercepting most traffic made by the app.

Also, keep in mind that the browser or webview will not receive the original HTTPS certificates but the one being sent from the proxy if it's provided. URLs may need to be rewritten in your code in order to use the proxy.

Check <a href="https://github.com/Rob--W/cors-anywhere/" target="_blank" rel="noopener">cors-anywhere</a> for a Node.js CORS proxy that can be deployed in your own server. Using free hosted CORS proxies in production is not recommended.

### C. Disabling CORS or browser web security

Please be aware that CORS exists for a reason (security of user data and to prevent attacks against your app). **It's not possible or advisable to try to disable CORS**.

Older webviews like `UIWebView` on iOS don't enforce CORS but are deprecated and are very likely to disappear soon. Modern webviews like iOS `WKWebView` or Android `WebView` (both used by Capacitor) do enforce CORS and provide huge security and performance improvements.

If you are developing a PWA or testing in the browser, using the `--disable-web-security` flag in Google Chrome or an extension to disable CORS is a really bad idea. You will be exposed to all kind of attacks, you can't ask your users to take the risk, and your app won't work once in production.

##### Sources

- <a href="https://fdezromero.com/cors-errors-in-ionic-apps" target="_blank" rel="noopener">
    CORS Errors in Ionic Apps
  </a>
- <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS" target="_blank" rel="noopener">
    MDN
  </a>
