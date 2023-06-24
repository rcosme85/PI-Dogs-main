const { Router } = require("express");
const dogsRouter = Router();

const { getDogsHandler, getDogHandler, createDogsHandler } = require("../handler/dogsHandler");

dogsRouter.get("/", getDogsHandler);
dogsRouter.get("/:id", getDogHandler);
//dogsRouter.get("/name", getByName); //Falta
dogsRouter.post("/", createDogsHandler);

module.exports = dogsRouter