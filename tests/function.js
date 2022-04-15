"use strict";

const index = require("../index");
describe("index.js", function () {
 describe("#config()", function () {
  it("should return a function", function () {
   expect(index.config).to.be.a("function");
  });
 });
});
