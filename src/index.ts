import { createServer, IncomingMessage, ServerResponse } from "node:http";

interface ServerOptions {
 port?: number;
 path?: string;
 message?: string;
 debug?: boolean;
}

class Server {
 public port: number;
 public customURL: string;
 public customResponse: string;
 public debug: boolean;
 private server: ReturnType<typeof createServer>;

 /**
  * @param {ServerOptions} options - The options for the server
  * @constructor
  * @public
  * @returns {void}
  * @example
  * new Server({ port: 8080, path: "/foo", message: "Hello, world!", debug: true });
  */
 constructor(options: ServerOptions = {}) {
  this.port = options.port || 8080;
  this.customURL = options.path ? options.path.toString() : "/";
  this.customResponse = options.message ? options.message.toString() : "200 OK!";
  this.debug = options.debug || false;
  this.server = createServer(this.handleRequest.bind(this));
  this.listen();
 }

 /**
  * @param {IncomingMessage} req - The request object
  * @param {ServerResponse} res - The response object
  * @returns {void}
  * @private
  */
 handleRequest(req: IncomingMessage, res: ServerResponse): void {
  if (this.debug) {
   console.log(`Request received: ${req.url}`);
  }

  if (req.url === this.customURL) {
   res.writeHead(200, { "Content-Type": "text/plain" });
   res.end(this.customResponse);
  } else {
   res.writeHead(404, { "Content-Type": "text/plain" });
   res.end("Not Found");
  }
 }

 /**
  * Starts the server listening on the specified port
  * @returns {Promise<void>}
  */
 listen(): Promise<void> {
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

 /**
  * Stops the server
  * @returns {Promise<void>}
  */
 public stop(): Promise<void> {
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
