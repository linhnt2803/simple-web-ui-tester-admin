const path = require("path");

const express = require("express");
const routes = new express.Router();

const staticPath = path.resolve(__dirname, "../../dist");

const staticRoutes = express.static(staticPath);
const apiRoutes = require("./api");

routes.use("/api", apiRoutes);
routes.use(staticRoutes);

module.exports = routes;
