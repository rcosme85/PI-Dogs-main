const axios = require("axios");
const URL = "https://api.thedogapi.com/v1/breeds";
const { Dogs } = require("../db")
const {Temperaments} = require("../db")

const getDogById = async (id, source) => {
  const dog =
    source === "api"
      ? (await axios.get(`${URL}/${+id}`)).data
      : await Dogs.findByPk(id, {
          include: [{ model: Temperaments, attributes: ["Id", "Nombre"] }],
        });
    return dog
  }

module.exports = getDogById;
