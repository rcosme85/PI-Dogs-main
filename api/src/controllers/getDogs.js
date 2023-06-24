const { Dogs } = require("../db");
const axios = require("axios");
const URL = "https://api.thedogapi.com/v1/breeds";
const formatApi = require("../utils/formatApi")

const getDogs = async () => {
  
    const dataBaseDogs = await Dogs.findAll();
    const dogsApiIni = (await axios.get(`${URL}`)).data;
  
    const dogsApi = formatApi(dogsApiIni)
    return [...dataBaseDogs, ...dogsApi];
};

module.exports = getDogs;
