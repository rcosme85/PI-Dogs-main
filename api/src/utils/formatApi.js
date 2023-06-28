const formatApi = (arr) => {
  const dogsFormat = arr?.map((elem) => {
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

module.exports = {formatApi, formatBd}