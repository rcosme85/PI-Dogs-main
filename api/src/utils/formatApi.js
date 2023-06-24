const formatApi = (arr) => {
  const arrDogs = [];
  for (elem of arr) {
   // return elem
    const dog = {
      id: elem.id,
      imagen: elem.image.url,
      name: elem.name,
      altura: elem.height.metric,
      peso: elem.weight.metric,
      life_span: elem.life_span,
      temperament: elem.temperament,
      created: false,
    };
    arrDogs.push(dog);
  }
  return arrDogs;
};

const formatApiUno = (arr) => {
  const arrDogs = [];
  const dog = {
    id: elem.id,
    imagen: elem.image.url,
    name: elem.name,
    altura: elem.height.metric,
    peso: elem.weight.metric,
    life_span: elem.life_span,
    temperament: elem.temperament,
    created: false,
  };
  arrDogs.push(dog);
}
module.exports = formatApi, formatApiUno