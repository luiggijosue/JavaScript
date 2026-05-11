// Ejercicio 1
let numero1 = Number(prompt("Introduce el primer número"));
let numero2 = Number(prompt("Introduce el segundo número"));

let resultado = numero1 - numero2;

console.log("El resultado es: " + resultado);
document.getElementById("resultado").textContent =
  "El resultado es: " + resultado;

// Ejercicio 2
let nombre = prompt("¿Cuál es tu nombre?"); //le pregunto al usuario
let localidad = prompt("¿En qué localidad vives?");
let hobby = prompt("¿Cuál es tu hobby?");

let frase =
  "Te llamas " + nombre + ", vives en " + localidad + ", y te gusta " + hobby;

console.log(frase);
document.getElementById("frase").innerHTML =
  `Te llamas ${nombre}<br>Vives en ${localidad}<br>Te gusta ${hobby}`; //resultado en la pagina
// Ejercicio 3
// AQUI MARCAMOS EL VALOR DEL PRODUCTO
let precioCamiseta = 20;
let precioPantalon = 40;
let precioZapatos = 60;
// AQUI LE PREGUNTAMOS AL CLIENTE
let camisetas = Number(prompt("¿cuantas camisetas quieres comprar?"));
let pantalones = Number(prompt("¿Cuantos pantalones quieres comprar?"));
let zapatos = Number(prompt("¿cuantos zapatos quieres comprar?"));
// AQUI EMPIEZA LA SUMA
let total =
  precioCamiseta * camisetas +
  precioPantalon * pantalones +
  precioZapatos * zapatos;
// ESTO ES LO QUE SE VERA EN LA WEB
document.getElementById("total").innerHTML =
  "Resumen de tu Compra: <br><br>" +
  "Camisetas: " +
  camisetas +
  " x " +
  precioCamiseta +
  "€ = " +
  camisetas * precioCamiseta +
  "€ <br><br>" +
  "Pantalones: " +
  pantalones +
  " x " +
  precioPantalon +
  "€ = " +
  pantalones * precioPantalon +
  "€ <br><br>" +
  "Zapatos: " +
  zapatos +
  " x " +
  precioZapatos +
  "€ = " +
  zapatos * precioZapatos +
  "€ <br><br>" +
  "TOTAL: " +
  total +
  "€";
