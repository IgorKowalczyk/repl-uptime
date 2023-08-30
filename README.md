![Repl-uptime](https://github.com/IgorKowalczyk/repl-uptime/assets/49127376/bba7b12a-875d-4d71-b595-4b9a9ab0f965)

<div align="center">
  <a aria-label="GitHub License" href="https://github.com/igorkowalczyk/repl-uptime/blob/main/license.md">
    <img src="https://img.shields.io/github/license/igorkowalczyk/repl-uptime?color=%23F26207&logo=github&style=flat-square&label=License">
  </a>
  <a aria-label="NPM Version" href="https://npmjs.com/package/@igorkowalczyk/repl-uptime">
    <img src="https://img.shields.io/npm/v/%40igorkowalczyk%2Frepl-uptime/latest.svg?logo=npm&logoColor=fff&style=flat-square&color=%23F26207&label=Version">
  </a>
  <a aria-label="NPM Downloads" href="https://npmjs.com/package/@igorkowalczyk/repl-uptime">
    <img src="https://img.shields.io/npm/dw/%40igorkowalczyk%2Frepl-uptime?logo=npm&logoColor=fff&style=flat-square&color=%23F26207&label=Downloads">
  </a>
</div>

---

## 📥 Installation

**Node.js v12.0.0 or newer is required.**

```
npm install @igorkowalczyk/repl-uptime
yarn add @igorkowalczyk/repl-uptime
pnpm add @igorkowalczyk/repl-uptime
```

## ✨ Features

- 🚀 **No dependencies**: Just Node.js.
- ⚙️ **Zero configuration**: Ready out of the box.
- 🎈 **User-friendly**: Minimal code required.
- ⏩ **Blazing speed**: Lightning-fast HTTP server.
- 🌐 **Versatile**: Perfect for any 24/7 JavaScript project.

## 📦 Examples

**No Config**

```javascript
/// ES6
import Server from "@igorkowalczyk/repl-uptime";
new Server();

/// CommonJS
const Server = require("@igorkowalczyk/repl-uptime");
new Server();
```

**With Config**

```javascript
/// ES6
import Server from "@igorkowalczyk/repl-uptime";
new Server({
 port: 8080,
 path: "/",
 message: "🤙 Don't let your repl go to sleep!",
 debug: true,
});

/// CommonJS
const Server = require("@igorkowalczyk/repl-uptime");
new Server({
 port: 8080,
 path: "/",
 message: "🤙 Don't let your repl go to sleep!",
 debug: true,
});
```

**Then just run your project and go to [uptimerobot.com](https://uptimerobot.com) or [hetrixtools.com](https://hetrixtools.com) and create a new monitor with your repl url. That's it! 🎉**

## 📖 Available Options

### Options

| Option    | Type      | Default Value | Description                                                                                                 |
| --------- | --------- | ------------- | ----------------------------------------------------------------------------------------------------------- |
| `port`    | `Number`  | `8080`        | The port number on which the server will listen for incoming requests.                                      |
| `path`    | `String`  | `/`           | The custom URL path to be used for handling incoming requests.                                              |
| `message` | `String`  | `200 OK!`     | The custom response message that will be sent back to clients when the request is successfully handled.     |
| `debug`   | `Boolean` | `false`       | If set to `true`, enables debugging mode, which may log additional information about the server's behavior. |

### Functions

| Function               | Description                                                                                                                                                                                                                                                   |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `constructor(options)` | Initializes the server with the provided options and starts listening on the specified port.                                                                                                                                                                  |
| `listen()`             | Starts the server to listen for incoming requests on the specified port. Returns a promise that resolves when the server starts listening successfully. If an error occurs, the promise is rejected. The function is called automatically by the constructor. |
| `stop()`               | Stops the server and closes the underlying HTTP server instance. Returns a promise that resolves when the server is successfully closed. If an error occurs, the promise is rejected.                                                                         |

## ⁉️ Issues

If you have any issues with the page please create [new issue here](https://github.com/igorkowalczyk/repl-uptime/issues)

## 📥 Pull Requests

When submitting a pull request:

- Clone the repo.
- Create a branch off of master and give it a meaningful name (e.g. my-awesome-new-feature).
- Open a [pull request](https://github.com/igorkowalczyk/repl-uptime/pulls) on [GitHub](https://github.com) and describe the feature or fix.

## 📋 License

This project is licensed under the MIT. See the [LICENSE](https://github.com/igorkowalczyk/repl-uptime/blob/master/license.md) file for details

---

<sub>This package is an independent project and is not affiliated, endorsed, or associated with <a href="https://replit.com">Replit</a> in any way.</sub>
