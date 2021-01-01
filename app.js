const express = require("express");
const app = express();
const expressLayouts = require("express-ejs-layouts");
const port = "3000";

// set default folder for importing css,jsand images
app.use(express.static(__dirname + '/public'));

app.use(expressLayouts);
app.set("view engine", "ejs");

app.get("/", function (req, res) {
  res.send("home");
});
/* app.get("/contact", function (req, res) {
  res.render("contact", { title: "Contact" });
}); */

app.listen(port, function () {
  console.log("server is listening at port", port);
});
