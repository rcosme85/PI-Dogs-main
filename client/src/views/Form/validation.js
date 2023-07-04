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
    error.heightMin = "You muste enter a Height Min"
  }
  if (input.heightMin.length > 2) {
    error.heightMin = "Maximum two digits!";
  }
  if (!regexNum.test(input.heightMin)) {
    error.heightMin = "Only numbers!";
  }
  //Validación HEIGHT - MAX
  if (!input.heightMax) {
    error.heightMax = "You muste enter a Height Max";
  }
  if (input.heightMax.length > 2) {
    error.heightMax = "Maximum two digits!";
  }
  if (!regexNum.test(input.heightMax)) {
    error.heightMax = "Only numbers!";
  }
  if (input.heightMax < input.heightMin) {
    error.heightMax = "Min is greater (>) than Max";
  }
  return error;
}
