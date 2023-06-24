const { Dogs } = require("../db");
const {Temperaments} = require("../db")
const axios = require("axios");
const url = "https://api.thedogapi.com/v1/breeds/search?q=";
const { Op } = require("sequelize");
//const formatApi = require("../utils/formatApi")
//const formatApiUno = require("../utils/formatApi");

const getDogByName = async (name) => {

    const dogsBD = await Dogs.findAll({
      where: {
        Nombre: {
          [Op.iLike]: `%${name}%`,
        },
      },
      include: [{ model: Temperaments, attributes: ["Id", "Nombre"] }],
    }); 
  const dogsApi = (await axios(`${url}${name}`)).data;

  return [...dogsBD, ...dogsApi];
}
module.exports = getDogByName;