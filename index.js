const express = require("express");
const session = require("express-session");
const passport = require("passport");
const connect = require("./config/db");
const localization = require("./middlewares/LocalAuth");
const router = require("./routes/student.routs");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.use(session({ secret: "secret-key" }));
app.use(passport.initialize());
app.use(passport.session());

app.use("/student", router);

app.listen(8000, () => {
  console.log("listening on port 8000");
  connect();
});
