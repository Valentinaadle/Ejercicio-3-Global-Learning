const form = document.querySelector(".form-register");
const paragraph = document.querySelector(".warnings");

const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const userName = document.getElementById("user-name");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");
const birthday = document.getElementById("birthday");

const specialCharacters = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+/;

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let warnings = "";
  let mistakes = false;
  paragraph.innerHTML = "";

  if (firstName.value == "") {
    warnings += "⚠️ El campo Nombre es obligatorio. <br>";
  }
  if (firstName.value.length < 3) {
    warnings += "⚠️ El campo Nombre debe tener al menos 3 caracteres. <br>";
    mistakes = true;
  }
  if (/\d/.test(firstName.value)) {
    warnings += "⚠️ El campo Nombre no puede contener números. <br>";
    mistakes = true;
  }

  if (lastName.value == "") {
    warnings += "⚠️ El campo Apellido es obligatorio. <br>";
    mistakes = true;
  }
  if (lastName.value.length < 3) {
    warnings += "⚠️ El campo Apellido debe tener al menos 3 caracteres. <br>";
    mistakes = true;
  }

  if (/\d/.test(lastName.value)) {
    warnings += "⚠️ El campo Apellido no puede contener números. <br>";
    mistakes = true;
  }

  if (userName.value == "") {
    warnings += "⚠️ El campo Nombre de usuario es obligatorio. <br>";
    mistakes = true;
  }
  if (userName.value.length < 6) {
    warnings +=
      "⚠️ El campo Nombre de usuario debe tener al menos 6 caracteres. <br>";
    mistakes = true;
  }

  if (password.value == "") {
    warnings += "⚠️ El campo Contraseña es obligatorio. <br>";
    mistakes = true;
  }
  if (password.value.length < 8) {
    warnings += "⚠️ El campo Contraseña debe tener al menos 8 caracteres. <br>";
    mistakes = true;
  }
  if (!specialCharacters.test(password.value)) {
    warnings +=
      "⚠️ La contraseña debe contener al menos un carácter especial. <br>";
    mistakes = true;
  }

  if (password.value !== confirmPassword.value) {
    warnings += "⚠️ Las contraseñas no coinciden. <br>";
    mistakes = true;
  }

  if (birthday.value == "") {
    warnings += "⚠️ Debes seleccionar una Fecha de nacimiento. <br>";
    mistakes = true;
  }

  if (mistakes) {
    paragraph.innerHTML = "Hey! Tienes algunos errores 🫠 <br>" + warnings;
  }

  if (!mistakes) {
    alert("Tus datos se guardaron con éxito!😈");
    form.reset();
  }
});
