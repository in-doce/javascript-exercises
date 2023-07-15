/*
* Escribe una función sumInput() que:
* Pida al usuario valores usando prompt y los almacene en el array.
* Termine de pedirlos cuando el usuario ingrese un valor no numérico, una cadena vacía, o presione “Escape”.
* Calcule y devuelva la suma de los items del array.
* P.D. Un cero 0 es un número válido, por favor no detengas los ingresos con el cero.
*/

function sumInput() {
  const numbers = [];
  let sum = 0;

  while (true) {
    let value = 0;
    value = prompt('Ingrese un número para sumarlo:', 0);
    if (value === '' || value === null || !isFinite(value)) break;
    numbers.push(+value);
  }

  for (let num of numbers) {
    sum += num;
  }

  console.log(sum);
}