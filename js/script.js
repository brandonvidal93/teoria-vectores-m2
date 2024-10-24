// Comentario en línea

/*
  Comentario en bloque
*/

// Cómo se inicializa un vector
// Inicializar vacío
let vector = [];

// Inicializar un vector con información
let numeros = [9, 10, 22, 3, 4, 11, 50, 99];

let nombres = ["Brandon", "Alexa", "Siri"];

let logicos = [true, false, true, true];

// Cómo se muestra la información de un vector

// Mostrar todo el vector
console.log(numeros);
console.log(nombres);
console.log(logicos);

// Mostrar un valor en específico
console.log(numeros[6]);
console.log(nombres[2]);
console.log(logicos[3]);

// Cómo recorrer un vector
for(let i = 0; i < numeros.length; i++) {
  console.log(numeros[i]);
}

for(let i = 0; i < nombres.length; i++) {
  console.log(nombres[i]);
}

for(let i = 0; i < logicos.length; i++) {
  console.log(logicos[i]);
}

// Cómo agregar datos en un vector
numeros.push(300, 500, 100);

console.log(numeros);

nombres.push("Laura", "Martín");

console.log(nombres);

logicos.push(true, false);

console.log(logicos);

// Cómo se eliminan datos en un vector
// pop() elimina el ultimo dato
numeros.pop();

console.log(numeros);

// splice(posición_inicial, cantidad_datos_a_borrar)
numeros.splice(3, 1);

console.log(numeros);