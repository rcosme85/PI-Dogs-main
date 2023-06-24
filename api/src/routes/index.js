const { Router } = require('express');

// Importar todos los routers;
const dogsRouter = require("./dogsRouter");
const tempeRouter = require("./temperamentsRouter");

const router = Router();

// Configurar los routers
router.use("/dogs", dogsRouter)
router.use("/temperaments", tempeRouter);

module.exports = router;
