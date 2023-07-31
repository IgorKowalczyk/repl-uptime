import { createServer } from "node:http";

class Server {
 /**
  * @param {object} options
  * @param {number} options.port - The port to listen on
  * @param {string} options.path - The path to respond to
  * @param {string} options.message - The message to respond with
  * @param {boolean} options.debug - Whether to log debug messages
  * @returns {Server}
  */
 constructor(options = {}) {
  this.port = options.port || 8080;
  this.customURL = options.path ? options.path.toString() : "/";
  this.customResponse = options.message ? options.message.toString() : "200 OK!";
  this.debug = options.debug || false;
  this.server = createServer(this.handleRequest.bind(this));
  this.listen(); // Start listening immediately
 }

 handleRequest(req, res) {
  if (this.debug) console.log(`::debug:: [repl-uptime] => ${req.method.toLowerCase()} ${req.url}`);
  if (req.url === this.customURL) {
   res.writeHead(200);
   return res.end(this.customResponse);
  }
 }

 listen() {
  return new Promise((resolve, reject) => {
   this.server.on("error", (error) => {
    reject(error);
   });

   this.server.listen(this.port, () => {
    if (this.debug) console.log(`::debug:: [repl-uptime] => Server listening on port ${this.port}`);
    resolve();
   });
  });
 }

 stop() {
  return new Promise((resolve, reject) => {
   this.server.close((error) => {
    if (error) {
     reject(error);
    } else {
     resolve();
    }
   });
  });
 }
}

export default Server;
