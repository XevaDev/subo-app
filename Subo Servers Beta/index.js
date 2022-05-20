const express = require("express");

const bodyParser = require("body-parser");

let users = require("./database/data/users.json").users;

const app = express();
let clientUrl = "http://localhost:8080";

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const PORT = 2000;

let getUserByToken = (token) => {
  let k = users.map((u) => {
    if (u.private.token === token) return u;
  });

  return k[0];
};

let getUserByEmail = (email) => {
  let k = users.map((u) => {
    if (u.private.email === email) return u;
  });

  return k[0];
};

let getUserByID = (id) => {
  let k = users.map((u) => {
    if (u.public.id === id) return u.public;
  });

  return k[0];
};

app.get("/users/private/exists", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", clientUrl);
  let tokenSeek = req.query.token;
  console.log(`Seeked for ${tokenSeek}`);

  let u = getUserByToken(tokenSeek);

  if (typeof u === "undefined") {
    res.json({ token: tokenSeek, exists: false });
  } else {
    res.json({ token: u.private.token, exists: true });
  }
});

app.get("/users/private/get", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", clientUrl);
  let token = req.query.token;
  let p = getUserByToken(token).public;
  res.json(Object(p));
});

app.get("/pages/reg", (req, res) => {
  res.redirect(`${clientUrl}/?page=9`);
  console.log(`Client ${req.ip} redirected on Register`);
});

app.get("/pages/nect", (req, res) => {
  res.redirect(`${clientUrl}/?page=10`);
  console.log(`Client ${req.ip} redirected on Connect`);
});

app.get("/users/login", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", clientUrl);
  let email = req.query.email;
  let pw = req.query.pw;

  let resj = {
    bad: true,
    token: null,
  };

  let u = getUserByEmail(email);
  if (!(typeof u === "undefined")) {
    if (u.private.password === pw) {
      resj.bad = false;
      resj.token = u.private.token;
    }
  }

  res.status(200).json(Object(resj));
});

app.listen(PORT, () => {});
