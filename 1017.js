var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

let tempoGasto = parseFloat(lines.shift());
let velocidadeMedia = parseFloat(lines.shift());

// carro faz 12 com um litro
//S=v.t

let resultado = (velocidadeMedia * tempoGasto)/12.0;

console.log(`${resultado.toFixed(3)}`);