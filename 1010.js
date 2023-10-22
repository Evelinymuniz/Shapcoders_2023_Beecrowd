var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */
let peca1 = lines.shift().split(" ");
let peca2 = lines.shift().split(" ");


let prod1 = peca1[1] * peca1[2];
let prod2 = peca2[1] * peca2[2];

let total = prod1 + prod2;

console.log(`VALOR A PAGAR: R$ ${total.toFixed(2)}`);