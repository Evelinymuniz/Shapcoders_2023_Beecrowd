var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */
let distanciaTotal = lines.shift();
let combustivelGasto = parseFloat(lines.shift()); 

console.log(`${(distanciaTotal/combustivelGasto).toFixed(3)} km/l`);