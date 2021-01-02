const express = require("express");
const app = express();
const expressLayouts = require("express-ejs-layouts");
const port = process.env.PORT || "3000";
var sassMiddleware = require("node-sass-middleware");

// Setup SASS directories
var path = require("path");
var srcPath = __dirname + "/sass";
var destPath = __dirname + "/public/stylesheets";
app.use(
  sassMiddleware({
    src: path.join(__dirname, "sass"),
    dest: path.join(__dirname, "public/css"),
    debug: true,
    outputStyle: "compressed",
    prefix: "/css",
  }),
  // set default folder for importing css,jsand images
  express.static(path.join(__dirname, "public"))
);

app.use(expressLayouts);
app.set("view engine", "ejs");

//routes
app.get("/", function (req, res) {
  res.render("home", { title: "Home" });
});
app.get("/contact", function (req, res) {
  res.render("contact", { title: "Contact" });
});

app.listen(port, function () {
  console.log("server is listening at port", port);
});
