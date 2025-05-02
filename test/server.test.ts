import { describe, it, expect, afterEach, beforeEach, vi } from "vitest";
import Server from "../src/index";

describe("Server Initialization", () => {
 let server: Server;

 afterEach(async () => {
  if (server) await server.stop();
 });

 it("should create a server on the default port", () => {
  server = new Server();
  expect(server.port).toBe(8080);
 });

 it("should allow the port to be customized", () => {
  const customPort = 8081;
  server = new Server({ port: customPort });
  expect(server.port).toBe(customPort);
 });

 it("should allow the path to be customized", () => {
  const customPath = "/foo";
  server = new Server({ path: customPath });
  expect(server.customURL).toBe(customPath);
 });

 it("should allow the message to be customized", () => {
  const customMessage = "Hello, world!";
  server = new Server({ message: customMessage });
  expect(server.customResponse).toBe(customMessage);
 });

 it("should allow debug mode to be enabled", () => {
  server = new Server({ debug: true });
  expect(server.debug).toBe(true);
 });
});

describe("Server Behavior", () => {
 let server: Server;

 beforeEach(() => {
  server = new Server({ debug: true });
 });

 afterEach(async () => {
  if (server) await server.stop();
 });

 it("should log requests when debug mode is enabled", async () => {
  const consoleSpy = vi.spyOn(console, "log");
  await fetch(`http://localhost:${server.port}/`);
  expect(consoleSpy).toHaveBeenCalledWith("Request received: /");
  consoleSpy.mockRestore();
 });

 it("should handle multiple concurrent requests", async () => {
  const responses = await Promise.all([fetch(`http://localhost:${server.port}/`), fetch(`http://localhost:${server.port}/`)]);
  responses.forEach((response) => {
   expect(response.status).toBe(200);
  });
 });
});

describe("Server Responses", () => {
 let server: Server;

 afterEach(async () => {
  if (server) await server.stop();
 });

 it("should respond with a 200 OK by default", async () => {
  server = new Server();
  const response = await fetch(`http://localhost:${server.port}/`);
  expect(response.status).toBe(200);
 });

 it("should respond with a 200 OK when the path is customized", async () => {
  const customPath = "/foo";
  server = new Server({ path: customPath });
  const response = await fetch(`http://localhost:${server.port}${customPath}`);
  expect(response.status).toBe(200);
 });

 it("should respond with a 200 OK when the message is customized", async () => {
  const customMessage = "Hello, world!";
  server = new Server({ message: customMessage });
  const response = await fetch(`http://localhost:${server.port}/`);
  expect(response.status).toBe(200);
  const text = await response.text();
  expect(text).toBe(customMessage);
 });

 it("should respond with a 404 Not Found for unknown paths", async () => {
  server = new Server();
  const response = await fetch(`http://localhost:${server.port}/unknown`);
  expect(response.status).toBe(404);
 });
});
