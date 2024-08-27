// Obtener elementos del DOM
const encrypt = document.getElementById("button__encrypt");
const decrypt = document.getElementById("button__decrypt");
const copy = document.getElementById("button__copy");
const inputText = document.getElementById("inputText");
const outputText = document.getElementById("outputText");
const ilustracion = document.getElementById("ilustracion");
const textInfo = document.getElementById("textoInfo");
const rigth = document.getElementById("rigth");

// Tabla de reemplazos para encriptar/desencriptar
const remplazar = [
  ["e", "enter"],
  ["o", "ober"],
  ["i", "imes"],
  ["a", "ai"],
  ["u", "ufat"],
];

// Función para reemplazar texto y ajustar la interfaz
const replace = (newValue) => {
  outputText.textContent = newValue;
  outputText.classList.add("position_result");
  resetInput();
  ilustracion.classList.add("ocultar");
  textInfo.classList.add("ocultar");
};

// Función para restablecer la interfaz
const reset = () => {
  resetInput();
  outputText.textContent = "";
  outputText.classList.remove("position_result");
  ilustracion.classList.remove("ocultar");
  outputText.placeholder = "Ningún mensaje fue encontrado";
  textInfo.classList.remove("ocultar");
  copy.style.display = "none";
  inputText.focus();
};

// Función para restablecer el input
const resetInput = () => {
  inputText.value = "";
  inputText.style.height = "auto";
  inputText.placeholder = "Ingrese el texto aquí";
};

// Función para encriptar texto
const encriptarTexto = (texto) => {
  return remplazar.reduce((acc, [original, encriptado]) => {
    return acc.replaceAll(original, encriptado);
  }, texto);
};

// Función para desencriptar texto
const desencriptarTexto = (texto) => {
  return remplazar.reduce((acc, [original, encriptado]) => {
    return acc.replaceAll(encriptado, original);
  }, texto);
};

// Manejar el evento de encriptar
encrypt.addEventListener("click", () => {
  const texto = inputText.value.toLowerCase();

  if (texto) {
    replace(encriptarTexto(texto));
    copy.style.display = "block";
  } else {
    alert("Ingrese texto para encriptar");
    reset();
  }
});

// Manejar el evento de desencriptar
decrypt.addEventListener("click", () => {
  const texto = inputText.value.toLowerCase();

  if (texto) {
    replace(desencriptarTexto(texto));
    copy.style.display = "block";
  } else {
    alert("Ingrese texto a desencriptar");
    reset();
  }
});

// Manejar el evento de copiar
copy.addEventListener("click", () => {
  outputText.select();
  document.execCommand("copy");
  alert("Texto Copiado");
  reset();
});
