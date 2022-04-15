"use strict";
const { createServer } = require("http");

function config(options = {}) {
 let port = options.port || 8080;
 let custom_url = options.path ? options.path.toString() : "/";
 let custom_response = options.message ? options.message.toString() : "200 OK!";
 const request = async (req, res) => {
  if (options.debug) console.log(`::debug:: [repl-uptime] => ${req.method.toLowerCase()} ${req.url}`);
  if (req.url === custom_url) {
   res.writeHead(200);
   return res.end(custom_response);
  }
 };
 const server = createServer(request);
 server.listen(port);
 if (options.debug) console.log(`::debug:: [repl-uptime] => Server listening on port ${port}`);
}

module.exports = { config };
