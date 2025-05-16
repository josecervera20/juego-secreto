/** @type {number} Almacena el número secreto que el usuario debe adivinar. Inicializado en 0. */
let numeroSecreto = 0;
/** @type {number} Contador del número de intentos que el usuario ha realizado. Inicializado en 0. */
let intentos = 0;
/** @type {number[]} Array que almacena los números que ya han sido sorteados para evitar repeticiones. Inicializado como un array vacío. */
let listaNumerosSorteados = [];
/** @type {number} Define el valor máximo para el número secreto que se puede generar. Establecido en 10. */
let numeroMaximo = 10;

console.log(numeroSecreto);

/**
 * Asigna un texto a un elemento HTML específico.
 * @param {string} elemento - El selector CSS del elemento HTML al que se le asignará el texto.
 * @param {string} texto - El texto que se asignará al elemento HTML.
 * @returns {void}
 */
function asignarTextoElemento(elemento, texto) {
  let elementoHTML = document.querySelector(elemento);
  elementoHTML.innerHTML = texto;
  return;
}

/**
 * Verifica si el intento del usuario coincide con el número secreto.
 * Actualiza la interfaz de usuario con el resultado y habilita el botón de reinicio si acierta.
 * @returns {void}
 */
function verificarIntento() {
  let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);

  if (numeroDeUsuario === numeroSecreto) {
    asignarTextoElemento(
      "P",
      `Acertaste el número en ${intentos} ${intentos === 1 ? "vez" : "veces"}`
    );
    document.getElementById("reiniciar").removeAttribute("disabled");
  } else {
    // El usuario no acertó.
    if (numeroDeUsuario > numeroSecreto) {
      asignarTextoElemento("P", "El número es menor");
    } else {
      asignarTextoElemento("P", "El número es mayor");
    }
    intentos++;
    limpiarCaja();
  }
  return;
}

/**
 * Limpia el valor del campo de entrada donde el usuario ingresa su intento.
 * @returns {void}
 */
function limpiarCaja() {
  let valorCaja = (document.querySelector("#valorUsuario").value = "");
}

/**
 * Genera un número secreto aleatorio dentro del rango definido por numeroMaximo.
 * Asegura que el número generado no haya sido sorteado previamente.
 * @returns {number} El número secreto generado.
 */
function generarNumeroSecreto() {
  let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;
  console.log(numeroGenerado);
  console.log(listaNumerosSorteados);
  //Si ya sorteamos todos los números
  if (listaNumerosSorteados.length === numeroMaximo) {
    asignarTextoElemento("p", "Ya se sortearon todos los números posibles");
  } else {
    //Si el número generado está en la lista
    if (listaNumerosSorteados.includes(numeroGenerado)) {
      return generarNumeroSecreto();
    } else {
      listaNumerosSorteados.push(numeroGenerado);
      return numeroGenerado;
    }
  }
}

/**
 * Establece las condiciones iniciales del juego: asigna el título, el mensaje de rango,
 * genera el número secreto y reinicia el contador de intentos.
 * @returns {void}
 */
function condicionesIniciales() {
  asignarTextoElemento("h1", "Juego del número secreto");
  asignarTextoElemento("p", `Indica un número del 1 al ${numeroMaximo}`);
  numeroSecreto = generarNumeroSecreto();
  intentos = 1;
}

/**
 * Reinicia el juego: limpia la caja de entrada, restablece las condiciones iniciales
 * y deshabilita el botón de "Nuevo juego" al inicio.
 * @returns {void}
 */
function reiniciarJuego() {
  limpiarCaja();
  condicionesIniciales();
  document.querySelector("#reiniciar").setAttribute("disabled", "true");
}

// Inicia el juego al cargar la página.
condicionesIniciales();
