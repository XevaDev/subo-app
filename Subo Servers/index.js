const express = require("express");
const fetch = require("node-fetch");
const puppeteer = require("puppeteer");
const QueueCb = require("queue-callback");

const PORT = 1200;

const app = express();

app.get("/api", () => {});

app.get("/api/category", () => {});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
