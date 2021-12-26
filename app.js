const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Hello There Argo CD Build 1.1.1</h1>");
});

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
