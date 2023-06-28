const { Dogs } = require("../db")
const { Temperaments } = require("../db");

//Validar si el Nombre es repetido
const dogsNombreFind = async (Nombre) => {
  const nameDog = await Dogs.findOne({ where: { Nombre: `${Nombre}` } });
  return nameDog;
};

 //Validar si existen los Id de temperamentos
const temperamentsFind = async (TemperamentId) => {
 let arrTemperaments = [];
  for (let i = 0; i < TemperamentId.length; i++) {
    const newTempe = await Temperaments.findByPk(parseInt(TemperamentId[i]));
    if (!newTempe) return (arrTemperaments = []);
    //Si existe pushearlo
    arrTemperaments.push(newTempe);
  }
  return arrTemperaments
};

// Crea un nuevo Dog
const postDogs = async (
  Imagen,
  Nombre,
  Altura,
  Peso,
  Anos_vida,
  TemperamentId,
) => {
  const newDog = await Dogs.create({
    Imagen,
    Nombre,
    Altura,
    Peso,
    Anos_vida,
  });

  // Crea registros de la tabla relacional (muchos a muchos)
   await newDog.addTemperaments(TemperamentId)
  return newDog;
};

module.exports = { postDogs, dogsNombreFind, temperamentsFind };