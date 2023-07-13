/*
  Crea una función truncate(str, maxlength) que verifique la longitud de str y, si excede maxlength – reemplaza el final de str con el carácter de puntos suspensivos "…", para hacer su longitud igual a maxlength.

  El resultado de la función debe ser la cadena truncada (si es necesario).
*/

function truncate(str, maxlength) {
  if (str.length > maxlength) return str.slice(0, maxlength - 1) + '…';

  return str;
}

console.log(truncate("Lo que me gustaría contar sobre este tema es:", 20));
console.log(truncate("Hola a todos!", 20));