const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  var posts = get_posts();
  res.render("index", { posts: posts, admin: req.query.admin || false });
});

app.listen(process.env.PORT, () => 
  console.log("[server]  App online")
);

function get_posts() {
  return [
    {
      title: "Test 1",
      createdAt: new Date(),
      description: "description 1",
    },
    {
      title: "Test 2",
      createdAt: new Date(),
      description: "description 2",
    },{
      title: "Test 3",
      createdAt: new Date(),
      description: "descripti3",
    },{
      title: "Test 4",
      createdAt: new Date(),
      description: "description5",
    },
  ]
} 
