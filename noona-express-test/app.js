/**
 * https://expressjs.com/ko/starter/installing.html
 * https://expressjs.com/ko/guide/writing-middleware.html
 */

const express = require("express");
const app = express();

// const token = null;
const token = "adfdf";

const checkAuth = (req, res, next) => {
  console.log("she has admin permission");
  next();
};
const checkToken = (req, res, next) => {
  if (token) {
    console.log("You already have token.");
    next();
  } else {
    res.send("You dont have token");
  }
};
const getUser = (req, res) => {
  console.log("Here is user info");
  res.send("Here is user info");
};
app.get("/users", checkAuth, checkToken, getUser);

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

app.listen(5000, () => {
  console.log("server is on 5000");
});
