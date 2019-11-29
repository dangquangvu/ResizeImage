const express = require("express");
const path = require("path");
const app = express();
var bodyParser = require("body-parser");
var morgan = require("morgan");
const port = 3000;
app.set("views", path.join(__dirname, "view"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
//config
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan("dev"));
//config router
app.get("/", (req, res) => res.render("./index.ejs"));
app.get("/parse", (req, res) => {});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));