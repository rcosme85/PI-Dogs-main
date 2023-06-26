const getTemperaments = require("../controllers/getTemperaments");

const getTemperamentsHandler = async (req, res) => {
  try {
    //res.send("Obtiene todos los temperamentos")
   // return("Hola")
    const getTempe = await getTemperaments()
    res.status(201).json(getTempe)
  } catch (error) {
    res.status(400).json({error: error.message})
  }
};

module.exports = { getTemperamentsHandler };
