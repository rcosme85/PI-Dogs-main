const formatApi = (arr) => {
  const dogsFormat = arr?.map((elem) => {
    //let weightArr = elem.weight.metric.split("-")
    //weightIni: parseInt(weightArr[0]);
    return {
      id: elem.id,
      image: elem.image.url,
      name: elem.name,
      height: elem.height.metric,
      weight: elem.weight.metric,
      life_span: elem.life_span,
      Temperament: elem.temperament,
      created: false,
    };
    
  })
  return dogsFormat;
}

const formatBd = (arr) => {

  const dogsFormatBd = arr?.map((elem) => {
    return {
      id: elem.id,
      image: elem.Imagen,
      name: elem.Nombre,
      height: elem.Altura,
      weight: elem.Peso,
      life_span: elem.Anos_vida,
      Temperament: formatTemperament(elem.Temperaments),
      created: elem.created,
    };
  });
  return dogsFormatBd;
};

const formatTemperament = (arrTempe) => {
  if (arrTempe.length) {
    const newArrTempe = [];
    for (tempe of arrTempe) {
      newArrTempe.push(tempe.Nombre);
    }
    return newArrTempe.join(", ");
  }
  return("-")
}

const formatDogId_BD = (dog) => {
  let objDog = {
    id: dog.id,
    image: dog.Imagen,
    name: dog.Nombre,
    height: dog.Altura,
    weight: dog.Peso,
    life_span: dog.Anos_vida,
    Temperament: formatTemperament(dog.Temperaments),
    created: dog.created,
  };
  return objDog
}

const formatDogId_Api = (dog) => {
  let objDog = {
    id: dog.id,
    image: dog.image.url,
    name: dog.name,
    height: dog.height.metric,
    weight: dog.weight.metric,
    life_span: dog.life_span,
    Temperament: dog.temperament,
    created: false,
  };
  return objDog;
};
module.exports = { formatApi, formatBd, formatDogId_BD, formatDogId_Api };