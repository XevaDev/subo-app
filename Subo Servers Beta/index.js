const freejson = require("@xevaltan/freejson");
const express = require("express");

const app = express();
let clientUrl = "http://localhost:8080";

const PORT = 2000;

app.get("/checkExist", (req, res) => {
  let tokenSeek = req.params.token;
  console.log(`Seeked for ${tokenSeek}`);

  res.json({ token: tokenSeek, exists: false });
});

app.get("/reg", (req, res) => {
  res.redirect(`${clientUrl}/?page=9`);
  console.log(`Client ${req.ip} redirected on Register`);
});

app.get("/nect", (req, res) => {
  res.redirect(`${clientUrl}/?page=10`);
  console.log(`Client ${req.ip} redirected on Connect`);
});

app.listen(PORT, () => {});
