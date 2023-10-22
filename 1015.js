var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */
let eixoX = lines.shift().split(" ");//(x1,y1)
let eixoY = lines.shift().split(" ");//(x2,y2)

let dist1 = Math.pow(parseFloat((eixoY[0]) - parseFloat(eixoX[0])),2);
let dist2 = Math.pow(parseFloat((eixoY[1]) - parseFloat(eixoX[1])),2);

let distTotal = Math.sqrt(dist1 + dist2);

console.log(`${distTotal.toFixed(4)}`);