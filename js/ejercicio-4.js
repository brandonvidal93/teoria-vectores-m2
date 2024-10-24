// Crear un vector con los números del 1 al 20. Luego recorrerlo, sumar solo los números pares y mostrar el resultado

// Definir un vector numerico
let num = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

// Definir una variable para guardar la suma
let resultado = 0;

// Recorremos el vector y sumar los pares
for (let i = 0; i < num.length; i++) {
  // Sumar solo los pares
  if (num[i] % 2 == 0) {
    resultado = resultado + num[i];
  }
}

console.log(resultado);
