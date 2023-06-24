const { Dogs } = require("../db")
const { Temperaments } = require("../db");
 
const postDogs = async (Imagen, Nombre, Altura, Peso,
  Anos_vida, ArrtemperamentsId) => {
  
    const newDog = await Dogs.create({
      Imagen, Nombre, Altura, Peso, Anos_vida,
    });

    // Crea registros de la tabla relacional (muchos a muchos)
    for (tempe of ArrtemperamentsId) {
      await newDog.addTemperaments(tempe);
    }
    //res.status(201).json(newDog);
    return newDog;
};

const temperamentsFind = async (TemperamentId) => {
  //Validar si existen los Id de temperamentos
 let arrTemperaments = [];
  for (let i = 0; i < TemperamentId.length; i++) {
    const newTempe = await Temperaments.findByPk(parseInt(TemperamentId[i]));
    if (!newTempe) return (arrTemperaments = []);
    //Si existe pushearlo
    arrTemperaments.push(newTempe);
  }
  return arrTemperaments
};
const dogsNombreFind = async(Nombre) => {
  //Validar si el Nombre es repetido
  const nameDog = await Dogs.findOne({ where: { Nombre: `${Nombre}` } });
  return nameDog
  
}

module.exports = { postDogs, dogsNombreFind, temperamentsFind };