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
     new Post("cím", "leírás", "ez még nem látszik"), 
     new Post("cím", "leírás", "ez még nem látszik") 
  ]
} 

class Post {
  construct (title, description, markdown) {
    this.title = title
    this.description = description
    this.markdown = markdown
    this.createdAt = new Date() 
  } 
}
