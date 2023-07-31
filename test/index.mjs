import { config } from "../index";

describe("config()", () => {
 it("should create a server on the default port", async () => {
  const server = await config();
  expect(server.address().port).toBe(8080);
 });

 it("should allow the path to be customized", async () => {
  const server = await config({ path: "/custom-path" });
  expect(server.address().port).toBe(8080);
  expect(server.url).toBe("/custom-path");
 });

 it("should allow the response to be customized", async () => {
  const server = await config({ message: "Custom response" });
  expect(server.address().port).toBe(8080);
  expect(await server.request("/").text()).toBe("Custom response");
 });

 it("should allow the port to be customized", async () => {
  const server = await config({ port: 8081 });
  expect(server.address().port).toBe(8081);
 });

 it("should throw an error if the port is invalid", async () => {
  try {
   await config({ port: -1 });
  } catch (error) {
   expect(error.message).toBe("Invalid port: -1");
  }
 });

 it("should allow the debug option to be customized", async () => {
  const server = await config({ debug: true });
  expect(server.debug).toBe(true);
 });

 it("should allow the request to be customized", async () => {
  const request = async (req, res) => {
   res.writeHead(200);
   res.end("Custom response");
  };
  const server = await config({ request });
  expect(await server.request("/").text()).toBe("Custom response");
 });
});
