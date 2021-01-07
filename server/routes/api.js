const express = require("express");
const routes = new express.Router();

routes.get("/", (req, res) => res.send("server api"));

module.exports = routes;
