const nodemon = require("nodemon");

nodemon({
  script: "express-blog\\server.js",
  ext: "js json ejs",
});

nodemon
  .on("start", function () {
    console.log("[nodemon] App has started");
  })
  .on("quit", function () {
    console.log("[nodemon] App has quit");
    process.exit();
  })
  .on("restart", function (files) {
    console.log("[nodemon] App restarted due to: ", files);
  });

console.log("Starting...");
