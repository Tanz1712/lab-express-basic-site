const express = require("express");

const app = express();

const port = 3000;

app.use(express.static("public"));

app.get("/home", (request, response) => {
  response.sendFile(__dirname + "/views/home-page.html");
});

app.get("/about", (request, response) => {
  response.sendFile(__dirname + "/views/about-page.html");
});

app.get("/work", (request, response) => {
  response.sendFile(__dirname + "/views/work-page.html");
});

app.get("/photos", (request, response) => {
  response.sendFile(__dirname + "/views/photos-page.html");
});

app.listen(port, () => {
  console.log("listening on port 3000!");
});
