/*
* Tratemos 5 operaciones de array.
* Crear un array styles con los items “Jazz” y “Blues”.
* Agregar “Rock-n-Roll” al final.
* Reemplazar el valor en el medio por “Classics”. Tu código para encontrar el valor medio debe funcionar con cualquier array de longitud impar.
* Quitar el primer valor del array y mostrarlo.
* Anteponer Rap y Reggae al array.
*/

let styles = [
  'Jazz',
  'Blues',
];

styles.push('Rock-n-Roll');
console.log(styles);

// styles[Math.floor((styles.length - 1) / 2)] = "Classics";
const arrMidElement = styles.length / 2;
if (styles.length % 2 === 1) styles[arrMidElement] = 'Classics';

console.log(styles);

console.log( styles.shift() );
styles.unshift('Rap', 'Reggae');

console.log(styles);