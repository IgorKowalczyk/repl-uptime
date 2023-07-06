<img width="170" height="170" align="left" style="float: left; margin: 0 10px 0 0; border-radius: 50%;" alt="Replit Logo" src="https://github.com/IgorKowalczyk/repl-uptime/assets/49127376/7a63817d-1b90-4be2-a3c6-3cbee075dbf8">

# Repl-uptime

🤙 Don't let your repl go to sleep! Create a http server with just one line of code and keep pinging it!

[![GitHub License](https://img.shields.io/github/license/igorkowalczyk/repl-uptime?color=%23F26207&logo=github&style=flat-square&label=License)](https://github.com/igorkowalczyk/repl-uptime/blob/main/license.md)
[![NPM Version](https://img.shields.io/npm/v/%40igorkowalczyk%2Frepl-uptime/latest.svg?logo=npm&logoColor=fff&style=flat-square&color=%23F26207)](https://npmjs.com/package/@igorkowalczyk/repl-uptime)
[![NPM Downloads](https://img.shields.io/npm/dw/@igorkowalczyk/repl-uptime?logo=npm&logoColor=fff&style=flat-square&color=%23F26207&label=Downloads)](https://npmjs.com/package/@igorkowalczyk/repl-uptime)

---

## 📥 Installation

**Node.js v7.7.3 or newer is required**.

```
npm install @igorkowalczyk/repl-uptime
yarn add @igorkowalczyk/repl-uptime
pnpm add @igorkowalczyk/repl-uptime
```

## ✨ Features

- No dependencies
- No required configuration
- Easy to use (just one line of code)
- Blazing fast!

## 📦 Examples

**No Config**

```javascript
/// CommonJS
require("@igorkowalczyk/repl-uptime").config();
```

```javascript
/// ES6
import { config } from "@igorkowalczyk/repl-uptime";
config();
```

**With Config**

```javascript
/// CommonJS
require("@igorkowalczyk/repl-uptime").config({
 port: 8080,
 path: "/",
 message: "🤙 Don't let your repl go to sleep!",
 debug: true,
});
```

```javascript
/// ES6
import { config } from "@igorkowalczyk/repl-uptime";
config({
 port: 8080,
 path: "/",
 message: "🤙 Don't let your repl go to sleep!",
 debug: true,
});
```

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
