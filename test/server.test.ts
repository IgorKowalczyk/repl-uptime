import fetch from "node-fetch";
import { describe, it, expect, afterEach, vi } from "vitest";
import Server from "../src/index";

describe("Server Integration & Initialization", () => {
 let server: Server;

 afterEach(async () => {
  if (server) await server.stop();
 });

 it("should create a server on the default port", () => {
  server = new Server();
  expect(server.port).toBe(8080);
 });

 it("should allow the port to be customized", () => {
  const customPort = 12345;
  server = new Server({ port: customPort });
  expect(server.port).toBe(customPort);
 });

 it("should allow the path to be customized", () => {
  const customPath = "/custom";
  server = new Server({ path: customPath });
  expect(server.customURL).toBe(customPath);
 });

 it("should allow the message to be customized", () => {
  const customMessage = "Custom message";
  server = new Server({ message: customMessage });
  expect(server.customResponse).toBe(customMessage);
 });

 it("should respond with 200 OK and default message", async () => {
  const port = 8042;
  server = new Server({ port });

  const res = await fetch(`http://localhost:${port}/`);
  const text = await res.text();

  expect(res.status).toBe(200);
  expect(text).toBe("200 OK!");
 });

 it("should respond with 200 OK and custom message on custom path", async () => {
  const path = "/hello";
  const message = "Hello, world!";
  server = new Server({ path, message });

  const res = await fetch(`http://localhost:${server.port}${path}`);
  const text = await res.text();

  expect(res.status).toBe(200);
  expect(text).toBe(message);
 });

 it("should respond with 404 Not Found for unknown path", async () => {
  const port = 8042;
  server = new Server({ port });

  const res = await fetch(`http://localhost:${port}/not-found`);
  const text = await res.text();

  expect(res.status).toBe(404);
  expect(text).toBe("Not Found");
 });
 it("should log requests when debug is enabled", async () => {
  server = new Server({ debug: true });

  const consoleSpy = vi.spyOn(console, "log").mockImplementation(() => {});

  await fetch(`http://localhost:${server.port}/`);

  expect(consoleSpy).toHaveBeenCalledWith(expect.stringContaining("Request received: /"));
  consoleSpy.mockRestore();
 });
});
