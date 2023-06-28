const getDogs = require("../controllers/getDogs");
const getDogByName = require("../controllers/getDogByName");
const {
  postDogs,
  dogsNombreFind,
  temperamentsFind,
} = require("../controllers/postDogs");
const getDogById = require("../controllers/getDogById");

//("Ruta para traer a todos los perros o Por Nombre")
const getDogsHandler = async (req, res) => {
  try {
    const { name } = req.query;

    const result = name ? await getDogByName(name) : await getDogs();
    result.length
        ? res.status(200).json(result)
        : res.status(404).send("No hay registros de Dogs con Nombre: " + name);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
//("Ruta para traer a los perros por ID");
const getDogHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const source = isNaN(id) ? "BD" : "api"
    const dog = await getDogById(id, source)
    dog.length
      ? res.status(200).json(dog)
      : res.status(404).send("No hay registros de Dogs con el ID: " + id);
  } catch (error) {
     return res.status(500).json({ error: error.message });
  }
};
//("Ruta para crear a un nuevo perro")
const createDogsHandler = async (req, res) => {
  try {
    const { Imagen, Nombre, Altura, Peso, Anos_vida, TemperamentId } = req.body;
    
    //Validar si TemperamentId es un array con los códigos de Temperamentos
    if (!TemperamentId.length) return res.status(402)
        .send(
          "TemperamentId: debe ser un array con los códigos de Temperamentos"
    );
    //Validar si el Nombre es repetido
     const nameDogRepetido = await dogsNombreFind(Nombre)
    if (nameDogRepetido) return res.status(402).send("El nombre es repetido");
    
    //Validar si existen los Id de Temperamentos
    const ArrtemperamentsId = await temperamentsFind(TemperamentId);
    if (!ArrtemperamentsId.length) return res.status(402).send("No existe el Id de Temperamentos. No se puede crear un Dog");
    
    const newDog = await postDogs(
      Imagen,
      Nombre,
      Altura,
      Peso,
      Anos_vida,
      TemperamentId,
    );
    newDog.id
      ? res.status(200).json(newDog)
      : res.status(404).send("No hay datos para registrar un Dog");

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
module.exports = { getDogsHandler, getDogHandler, createDogsHandler };
