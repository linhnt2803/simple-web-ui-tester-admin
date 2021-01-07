module.exports = function openServer(port) {
  const express = require("express");
  const bodyParser = require("body-parser");

  const app = express();
  const routes = require("./routes");

  app.use(bodyParser.json());
  app.use(routes);

  return new Promise((resolve, reject) => {
    const serverUrl = `http://127.0.0.1:${port}`;
    app.listen(port, (err) => (err ? reject(err) : resolve(serverUrl)));
  });
};
