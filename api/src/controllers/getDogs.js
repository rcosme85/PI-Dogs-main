const { Dogs } = require("../db");
const axios = require("axios");
const URL = "https://api.thedogapi.com/v1/breeds";
const { formatApi, formatBd } = require("../utils/formatApi");
const { Temperaments } = require("../db");

const getDogs = async () => {
  
  const dogsBdIni = await Dogs.findAll({
    include: [
      {
        model: Temperaments,
        attributes: ["Id", "Nombre"],
        through: { attributes: [] },
      },
    ],
  });
  const dogsBd = formatBd(dogsBdIni)
  
  //const dogsApiIni = (await axios.get(`${URL}?api_key=${API_KEY}`)).data;
  const dogsApiIni = (await axios.get(`${URL}`)).data;
  const dogsApi = formatApi(dogsApiIni)
  
  return [...dogsBd, ...dogsApi];
};

module.exports = getDogs;
