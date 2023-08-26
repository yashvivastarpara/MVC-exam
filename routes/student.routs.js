const { Router } = require("express");
const {
  Student_add,
  studentdata,
  getadmin,
} = require("../controller/student.controller");
const {
  check_data,
  checkCookies,
} = require("../middlewares/student.middlewares");

const user = require("../models/studentsignup");
const passport = require("passport");

let router = Router();


router.get("/", getadmin);

router.get("/upload", checkCookies, (req, res) => {
  res.render("imgupload");
});

router.get("/login", (req, res) => {
  res.render("login");
});
router.get("/data", studentdata);

router.get("/signup", (req, res) => {
  res.render("signup");
});

router.post("/signup", async (req, res) => {
  console.log(req.body);
  await user.create(req.body);
  res.cookie("user", req.body.username);
  res.send("checking ");
});

router.post("/add", check_data, Student_add);
router.get("/setcookie", (req, res) => {
  res.cookie("cookie", "pritiarray");
  res.send(" cookies ");
});

let count = 0;
router.get("/count", (req, res) => {
  count++;
  res.send(`total ${count}`);
});

router.get("/session", (req, res) => {
  if (req.session.visit) {
    req.session.visit++;
    res.send(`session ${req.session.visit}`);
  } else {
    req.session.visit = 1;
    res.send(`session ${req.session.visit}`);
  }
});

router.get("/login", (req, res) => {
  res.render("login");
});
router.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/student",
    failureRedirect: "/student/login",
  }),
  async (req, res) => {
    res.send("done");
  }
);

router.get("/getstudent", (req, res) => {
  console.log(req.user);
  res.send(req.user);
});

router.get("/logout", (req, res) => {
  req.logOut((err) => {
    if (err) {
      console.log(err);
    }
  });
  res.send("logout");
});

module.exports = router;
