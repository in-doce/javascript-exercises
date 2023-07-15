/*
  Tenemos un costo en forma de “$120”. Es decir: el signo de dólar va primero y luego el número.

  Crea una función extractCurrencyValue(str) que extraiga el valor numérico de dicho string y lo devuelva.
 */

function extractCurrencyValue(str) {
  const indexDollar = str.indexOf('$');
  if ( indexDollar === -1 && !isFinite(str) ) return 'Ingrese un valor numérico';

  return +str.slice(indexDollar + 1);
}

console.log(extractCurrencyValue('$123'));
console.log(extractCurrencyValue('a'));
console.log(extractCurrencyValue('a123'));
console.log(extractCurrencyValue('123'));
console.log( extractCurrencyValue('$120') === 120 ); // true
