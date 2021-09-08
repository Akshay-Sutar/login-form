const express = require("express");
const path = require("path");
const app = express();
const session = require("express-session");
const config = require("./config");
require("../src/config/database.config");

app.on('unhandledException', (...params) => {
  console.error(params);
  process.exit(1);
});

app.on('unhandledRejection', (...params) => {
  console.error(params);
  process.exit(1);
});

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(
  session({
    secret: "YOLO",
    resave: true,
    saveUninitialized: true,
    cookie: {
      httpOnly: true,
      maxAge: 10 * 60 * 1000,
    },
  })
);

app.use(express.static(path.join(__dirname, "public")));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(require("./routes"));

app.listen(3000, () => {
  console.log("Server started at PORT 3000");
});
