export default function validation(input) {
  // input = { email:--, password: ---}

  const error = {};
  // error= { email: ERROR }

  /* const regexEmail = /\S+@\S+\.\S+/;
  const regexPassword = new RegExp("[0-9]");

  if (!regexEmail.test(input.email)) {
    error.email = "Debe ingresar un email válido!";
  } */
  //Validación de NAME
  const regexNum = new RegExp("[0-9]");
  const regexUrl = /^(ftp|http|https):\/\/[^ "]+$/
 
  if (!input.name) {
    error.name = "You must enter a name!";
  }
  if (input.name.length > 35) {
    error.name = "Must not be longer than 35 characters!";
  }
  if (regexNum.test(input.name)) {
    error.name = "Numbers are not accepted!";
  }

  //Validación HEIGHT - MIN
  if (!input.heightMin) {
    error.heightMin = "You muste enter a Height Min";
  }
  if (input.heightMin.length > 3) {
    error.heightMin = "Only 3 digits are allowed!";
  }
  if (!regexNum.test(input.heightMin)) {
    error.heightMin = "Only numbers!";
  }
  //Validación HEIGHT - MAX
  if (!input.heightMax) {
    error.heightMax = "You muste enter a Height Max";
  }
  if (input.heightMax.length > 3) {
    error.heightMax = "Maximum 3 digits!";
  }
  if (!regexNum.test(input.heightMax)) {
    error.heightMax = "Only numbers!";
  }
  if (parseInt(input.heightMax) < parseInt(input.heightMin)) {
    error.heightMax = "Max cannot be less";
  }
  //Validación WEIGHT - MIN
  if (!input.weightMin) {
    error.weightMin = "You muste enter a Weight Min";
  }
  if (input.weightMin.length > 3) {
    error.weightMin = "Only 3 digits are allowed!";
  }
  if (!regexNum.test(input.weightMin)) {
    error.weightMin = "Only numbers!";
  }
  //Validación WEIGHT - MAX
  if (!input.weightMax) {
    error.weightMax = "You muste enter a Weight Max";
  }
  if (input.weightMax.length > 3) {
    error.weightMax = "Maximum 3 digits!";
  }
  if (!regexNum.test(input.weightMax)) {
    error.weightMax = "Only numbers!";
  }
  if (parseInt(input.weightMax) < parseInt(input.weightMin)) {
    error.weightMax = "Max cannot be less";
  }
  //Validación LIFE_SPAN - MIN
  if (!input.lifeSpanMin) {
    error.lifeSpanMin = "You muste enter a Life Span Min";
  }
  if (input.lifeSpanMin.length > 2) {
    error.lifeSpanMin = "Only two digits are allowed!";
  }
  if (!regexNum.test(input.lifeSpanMin)) {
    error.lifeSpanMin = "Only numbers!";
  }
  //Validación LIFE_SPAN - MAX
  if (!input.lifeSpanMax) {
    error.lifeSpanMax = "You muste enter a Life Span Max";
  }
  if (input.lifeSpanMax.length > 2) {
    error.lifeSpanMax = "Maximum two digits!";
  }
  if (!regexNum.test(input.lifeSpanMax)) {
    error.lifeSpanMax = "Only numbers!";
  }
  if (parseInt(input.lifeSpanMax) < parseInt(input.lifeSpanMin)) {
    error.lifeSpanMax = "Max cannot be less";
  }

  //validación URL
   if (!input.image) {
     error.image = "You muste enter a URL";
   }
   if (!regexUrl.test(input.image)) {
     error.image = "The URL is invalid";
   }
  return error;
}
