// dotenv config for access env files

let express = require("express");
let app = express();
let bodyParser = require("body-parser");
require("dotenv").config();
process.env.MESSAGE_STYLE = "uppercase";

//GET / handler for second step

/*app.get('/', (req, res) => {
    res.send("Hello Express")
})*/

//7th step solution

app.use(bodyParser.urlencoded({ extended: false }), (req, res, next) => {
  console.log(`${req.method} ${req.path} - ${req.ip}`);
  next();
});

//Third step solution

app.get("/", (req, res) => {
  const path = (absolutePath = __dirname + "/views/index.html");
  res.sendFile(path);
});

const pubicPath = __dirname + "/public";

//Fourth step solution

app.use("/public", express.static(pubicPath));

//Fifth step solution

/*app.get('/json', (req, res) => {
    res.json({ "message": "Hello json" })
})*/

//Sixth step solution

app.get("/json", function (req, res) {
  if (process.env.MESSAGE_STYLE == "uppercase")
    res.json({ message: "HELLO JSON" });
  else res.json({ message: "Hello json" });
});

// 8th step solution

app.get(
  "/now",
  (req, res, next) => {
    req.time = Date().toString();
    next();
  },
  (req, res) => {
    res.json({ time: req.time });
  }
);

//9th step solution

app.get("/:word/echo", (req, res) => {
  res.json({ echo: req.params.word });
});

//10th step solution

app.get("/name", (req, res) => {
  const { first, last } = req.query;
  res.json({ name: `${first} ${last}` });
});

app.post("/name", (req, res) => {
  const { first, last } = req.query;
  console.log("%j", { name: `${first} ${last}` });
});

module.exports = app;
