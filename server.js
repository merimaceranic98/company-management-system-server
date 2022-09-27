const jsonServer = require("json-server");
const auth = require("json-server-auth");
const bcrypt = require("bcryptjs");
const cors = require("cors");
const e = require("express");

const app = jsonServer.create();
const router = jsonServer.router("db.json");
const port = process.env.PORT || 3500;

app.db = router.db;

app.use(jsonServer.bodyParser);
app.use(cors());

app.use(auth);
app.use(router);
app.listen(port);
