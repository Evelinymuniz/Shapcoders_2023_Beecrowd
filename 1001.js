var input = require("fs").readFileSync("/dev/stdin", "utf8");
var lines = input.split("\n");

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */
//VARIAVEIS
let A = parseInt(lines.shift());
let B = parseInt(lines.shift());
//calculo
let X = A + B;

//retorno
console.log("X = " + X);