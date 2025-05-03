import { describe, it, expect, afterEach, vi, beforeEach } from "vitest";
import Server from "../src/index";

describe("Server Initialization", () => {
 let server: Server;

 beforeEach(() => {
  global.fetch = vi.fn();
 });

 afterEach(async () => {
  if (server) await server.stop();
  vi.restoreAllMocks();
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

 it("should respond with a 200 OK by default", async () => {
  server = new Server();
  (global.fetch as unknown as ReturnType<typeof vi.fn>).mockResolvedValue({
   status: 200,
   text: () => Promise.resolve("200 OK!"),
  });

  const response = await fetch(`http://localhost:${server.port}/`);
  expect(response.status).toBe(200);
 });

 it("should respond with a 200 OK when the path is customized", async () => {
  const customPath = "/foo";
  server = new Server({ path: customPath });
  (global.fetch as unknown as ReturnType<typeof vi.fn>).mockResolvedValue({
   status: 200,
   text: () => Promise.resolve("200 OK!"),
  });

  const response = await fetch(`http://localhost:${server.port}${customPath}`);
  expect(response.status).toBe(200);
 });

 it("should respond with a 200 OK when the message is customized", async () => {
  const customMessage = "Hello, world!";
  server = new Server({ message: customMessage });
  (global.fetch as unknown as ReturnType<typeof vi.fn>).mockResolvedValue({
   status: 200,
   text: () => Promise.resolve(customMessage),
  });

  const response = await fetch(`http://localhost:${server.port}/`);
  expect(response.status).toBe(200);
  const text = await response.text();
  expect(text).toBe(customMessage);
 });

 it("should respond with a 404 Not Found for unknown paths", async () => {
  server = new Server();
  (global.fetch as unknown as ReturnType<typeof vi.fn>).mockResolvedValue({
   status: 404,
   text: () => Promise.resolve("Not Found"),
  });

  const response = await fetch(`http://localhost:${server.port}/unknown`);
  expect(response.status).toBe(404);
 });
});
