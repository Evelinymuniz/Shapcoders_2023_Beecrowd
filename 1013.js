var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */
let valores = lines.shift().split(" ");

let A_B = (parseFloat(valores[0])+parseFloat(valores[1])+ Math.abs(valores[0] -valores[1] ))/2;
let maior = (A_B + parseFloat(valores[2]) + Math.abs(A_B - parseFloat(valores[2])))/2;

console.log(`${maior} eh o maior`);