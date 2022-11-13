const express = require("express");

const PORT = 3000;
const HOST = "0.0.0.0";

const app = express();
app.get("/", function (req, res) {
  const time = new Date(Date.now()).toLocaleString();
  res.send(`Current time: ${time}`);
});

app.listen(PORT, () => {
  console.log(`Running on http://${HOST}:${PORT}`);
});
