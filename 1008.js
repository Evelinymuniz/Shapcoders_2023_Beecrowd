var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */
let idFuncionario = parseInt(lines.shift());
let qtdHorasTrabalhadas = parseInt(lines.shift());
let valorHora = parseFloat(lines.shift());

let salario = qtdHorasTrabalhadas * valorHora;

console.log("NUMBER = " + idFuncionario);
console.log("SALARY = U$ " + salario.toFixed(2));