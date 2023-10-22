var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */
const PI = 3.14159;
let raioEsfera = parseFloat(lines.shift());

let volume = (Math.pow(raioEsfera,3)*(4/3.0) * PI);

console.log(`VOLUME = ${volume.toFixed(3)}`);