const { Dogs } = require("../db");
const {Temperaments} = require("../db")
const axios = require("axios");
//const url = "https://api.thedogapi.com/v1/breeds/search?q=";
const url = "https://api.thedogapi.com/v1/breeds/";
const { Op } = require("sequelize");
const { formatApi, formatBd } = require("../utils/formatApi");

const getDogByName = async (name) => {

    const dogsBdIni = await Dogs.findAll({
      where: {
        Nombre: {
          [Op.iLike]: `%${name}%`,
        },
      },
      include: [
        {
          model: Temperaments,
          attributes: ["Id", "Nombre"],
          through: { attributes: [] },
        },
      ],
      
    }); 
  const dogsBd = formatBd(dogsBdIni);
 // const dogsApiIni = (await axios(`${url}${name}`)).data;
  const dogsApiIni = (await axios.get(url)).data;
  
  //Buscar por Nombre en la Api
  /* let dogsApiArr = [];
  for (let dog of dogsApiIni) {
    const nameDog = dog.name;
    if (nameDog.includes(name)) {
      dogsApiArr.push(dog);
      
    }
  } */
  const dogsApiArr = dogsApiIni.filter((dog) =>
    dog.name.toLowerCase().includes(name.toLowerCase())
  );
  
  const dogsApi = formatApi(dogsApiArr);

  return [...dogsBd, ...dogsApi]; 
}
module.exports = getDogByName;
