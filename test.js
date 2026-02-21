"use strict";

const fs = require("fs");
const prh = require("prh");
const assert = require("assert");

const ymlList = fs.globSync("**/*.yml", {
  cwd: __dirname,
  exclude: (p) => p === "node_modules",
});

ymlList.forEach((yml) => {
  try {
    const engine = prh.fromYAMLFilePath(yml);
    const changeSet = engine.makeChangeSet("./README.ja.md");
  } catch (e) {
    console.log(`processing... ${yml}\n`);
    throw e;
  }
});

console.log("😸 done");
