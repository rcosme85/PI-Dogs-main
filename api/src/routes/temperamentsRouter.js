const { Router } = require("express");
const tempeRouter = Router();

const {getTemperamentsHandler} = require("../handler/tempeHandlers")


tempeRouter.get("/", getTemperamentsHandler);

module.exports = tempeRouter