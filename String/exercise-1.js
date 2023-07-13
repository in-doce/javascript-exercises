/*
  Escribe una función checkSpam(str) que devuelva true si str contiene ‘viagra’ o ‘XXX’, de lo contrario false.
  La función debe ser insensible a mayúsculas y minúsculas:
*/

function checkSpam(str) {
    const spam = [
        'xxx',
        'viagra',
    ];

    const newStr = str.toLowerCase();

    for (const banWord of spam) {
        if (newStr.includes(banWord)) return true;
    }

    return false
}

console.log(`xXx -> ${checkSpam('xxx')}`);
console.log(`Family friendly -> ${checkSpam('Family friendly')}`);
console.log(`Not viaGra -> ${checkSpam('Not viaGra')}`);