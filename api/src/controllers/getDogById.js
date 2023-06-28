const axios = require("axios");
const URL = "https://api.thedogapi.com/v1/breeds";
const { Dogs } = require("../db")
const { Temperaments } = require("../db")
const { formatApi, formatBd } = require("../utils/formatApi");

const getDogById = async (id, source) => {
  if (source === "api") {
    //Traigo toda la Api
    const dogApiIni = (await axios.get(URL)).data;
    let dogApiFilter = dogApiIni.filter(elem => elem.id === +id)
    const dogApi = formatApi(dogApiFilter)
    return dogApi
     
  } else if (source === "BD") {
    const dogIni = await Dogs.findByPk(id, {
      include: [
        {
          model: Temperaments,
          attributes: ["Nombre"],
          through: { attributes: [] },
        },
      ],
    });
    
    if (!Array.isArray(dogIni) && (dogIni)) {
      let arrObj = [dogIni];
      const dogBd = formatBd(arrObj);
      return dogBd;
    }
    //const dogBd = formatBd(dogIni)
    //return dogBd

  }
}
module.exports = getDogById;

  /*   const dog = 
    source === "api"
      ? (await axios.get(`${URL}/${+id}`)).data
      : await Dogs.findByPk(id, {
          include: [{ model: Temperaments, attributes: ["Id","Nombre"],through:{attributes:[]}}],
        });
  return dog */
