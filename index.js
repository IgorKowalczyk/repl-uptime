import { createServer } from "node:http";

/**
 * @param {object} options
 * @param {number} options.port Port to listen on
 * @param {string} options.path Path to respond to
 * @param {string} options.message Response message
 * @param {boolean} options.debug Enable debug logging
 */
export function config(options = {}) {
 let port = options.port || 8080;
 let customURL = options.path ? options.path.toString() : "/";
 let customResponse = options.message ? options.message.toString() : "200 OK!";
 const request = async (req, res) => {
  if (options.debug) console.log(`::debug:: [repl-uptime] => ${req.method.toLowerCase()} ${req.url}`);
  if (req.url === customURL) {
   res.writeHead(200);
   return res.end(customResponse);
  }
 };
 const server = createServer(request);
 server.listen(port, () => {
  if (options.debug) console.log(`::debug:: [repl-uptime] => Server listening on port ${port}`);
 });
}
