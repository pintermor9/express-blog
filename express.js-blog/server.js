const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  var posts = [
    {
      title: "Test 1",
      createdAt: new Date(),
      description: "description 1",
    },
    {
      title: "Test 2",
      createdAt: new Date(),
      description: "description 2",
    },
  ];
  res.render("index", { posts: posts, admin: req.query.admin || false });
});

app.listen(3000);
