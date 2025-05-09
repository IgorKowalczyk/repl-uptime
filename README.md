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

```sh
npm install @igorkowalczyk/repl-uptime
yarn add @igorkowalczyk/repl-uptime
pnpm add @igorkowalczyk/repl-uptime
```

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

**That's it!** 🎉 Your repl is now ready to be pinged. You can use [uptimerobot.com](https://uptimerobot.com) or [hetrixtools.com](https://hetrixtools.com) to ping your repl.

**With Config (Advanced)**

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

## 📚 Documentation

### 🔧 Properties

| Option    | Type      | Default   | Description                                                                                                                        |
| --------- | --------- | --------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `port`    | `Number`  | `8080`    | The port number on which the server will listen for incoming requests.                                                             |
| `path`    | `String`  | `/`       | The custom URL path to be used for handling incoming requests.                                                                     |
| `message` | `String`  | `200 OK!` | The custom response message that will be sent back to clients when the request is successfully handled. Can be HTML or plain text. |
| `debug`   | `Boolean` | `false`   | If set to `true`, enables debugging mode, which may log additional information about the server's behavior.                        |

### 📜 Functions

| Function               | Description                                                                                                                                                                                                                                                   |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `constructor(options)` | Initializes the server with the provided options and starts listening on the specified port.                                                                                                                                                                  |
| `listen()`             | Starts the server to listen for incoming requests on the specified port. Returns a promise that resolves when the server starts listening successfully. If an error occurs, the promise is rejected. The function is called automatically by the constructor. |
| `stop()`               | Stops the server and closes the underlying HTTP server instance. Returns a promise that resolves when the server is successfully closed. If an error occurs, the promise is rejected.                                                                         |

## ⁉️ Issues

If you come across any errors or have suggestions for improvements, please create a [new issue here](https://github.com/igorkowalczyk/repl-uptime/issues) and describe it clearly.

## 📥 Pull Requests

When submitting a pull request, please follow these steps:

- Clone [this repository](https://github.com/igorkowalczyk/repl-uptime) `https://github.com/IgorKowalczyk/repl-uptime.git`
- Create a branch from `main` and give it a meaningful name (e.g. `my-awesome-new-feature`).
- Open a [pull request](https://github.com/igorkowalczyk/repl-uptime/pulls) on [GitHub](https://github.com/) and clearly describe the feature or fix you are proposing.

## 📋 License

This project is licensed under the MIT. See the [LICENSE](https://github.com/igorkowalczyk/repl-uptime/blob/main/license.md) file for details

---

<sub>This package is an independent project and is not affiliated, endorsed, or associated with <a href="https://replit.com">Replit</a> in any way.</sub>
