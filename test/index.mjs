import Server from "../index";
import request from "supertest"; // Import supertest
import { createServer } from "node:http";
import {jest} from '@jest/globals';

describe("Server", () => {
 let server;

 afterEach(async () => {
  await server.stop(); // Stop the server after each test
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
  expect(server.port).toBe(8080);
  expect(server.customURL).toBe(customPath);
 });

 it("should allow the message to be customized", () => {
  const customMessage = "Hello, world!";
  server = new Server({ message: customMessage });
  expect(server.port).toBe(8080);
  expect(server.customResponse).toBe(customMessage);
 });

 it("should allow debug mode to be enabled", () => {
  server = new Server({ debug: true });
  expect(server.port).toBe(8080);
  expect(server.debug).toBe(true);
 });

 it("should respond with a 200 OK by default", async () => {
  server = new Server();
  await request(createServer(server.handleRequest.bind(server)))
   .get("/")
   .expect(200);
 });

 it("should respond with a 200 OK when the path is customized", async () => {
  const customPath = "/foo";
  server = new Server({ path: customPath });
  await request(createServer(server.handleRequest.bind(server)))
   .get(customPath)
   .expect(200);
 });

 it("should respond with a 200 OK when the message is customized", async () => {
  const customMessage = "Hello, world!";
  server = new Server({ message: customMessage });
  const response = await request(createServer(server.handleRequest.bind(server)))
   .get("/")
   .expect(200);
  expect(response.text).toBe(customMessage);
 });
});
