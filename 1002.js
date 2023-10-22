var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

// area = π . raio2

let PI = 3.14159;
let raio = parseFloat(lines.shift());
let area = PI * Math.pow(raio, 2);

console.log("A=" +area.toFixed(4));