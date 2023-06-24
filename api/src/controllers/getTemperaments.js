const axios = require("axios");
const URL = "https://api.thedogapi.com/v1/breeds";
const { Temperaments } = require("../db")

const getTemperaments = async(req, res) => {
      const arrAllTempe = [];
      const temperaments = (await axios.get(URL)).data;
      if (temperaments) {
        temperaments.forEach((elem) => {
          if (elem.temperament) {
            arrTempe = elem.temperament.split(",");
            //Por cada temperament de una fila ["stub..", "yyy"]
            arrTempe.forEach((tempe) => {
              //Filtra los repetidos
              const tempeFilter = arrAllTempe.filter(
                (elem) => elem === tempe.trim()
              );
              // Si no es repetido pushea
              if (!tempeFilter.length) {
                arrAllTempe.push(tempe.trim());
              }
            });
          }
        });

        //Crear los registros en Temperaments
         if (arrAllTempe.length) {
          for (tempe of arrAllTempe) {
            const Nombre = tempe.trim();
            await Temperaments.findOrCreate({ where: { Nombre: `${Nombre}` } });
          }
        } 
        return arrAllTempe
      }
}
module.exports = getTemperaments

 

    /*  */

    /*   const arrAllTempe = []
    //const temperaments = (await axios.get(`${URL}`)).data;
    const temperaments = await axios.get(URL)
   //return res.json(temperaments.data)
    for (let i = 0; i < temperaments.length; i++){
      const strTempe = temperaments[i].temperament
      if(strTempe) {
        const arrTempe = strTempe.split(",");
        for (let j = 0; j < arrTempe.length; j++) {
          const tempeFilter = arrAllTempe.filter(
            (elem) => elem === arrTempe[j].trim()
          );
          if (!tempeFilter.length) {
            arrAllTempe.push(arrTempe[j].trim());
            const Nombre = arrTempe[j].trim();
           await Temperaments.create({Nombre})
          }
        }
      }
    } */