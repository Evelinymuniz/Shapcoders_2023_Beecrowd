var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */
let salario = parseFloat(lines.shift());
let imposto = 0;

if (salario <= 2000.00) {
   console.log("Isento");
} else if (salario <= 3000.00) {
    imposto = (salario - 2000.00) * 0.08;
    console.log(`R$ ${imposto.toFixed(2)}`);
} else if (salario <= 4500.00) {
    imposto = (salario - 3000.00) * 0.18 + 1000.00 * 0.08;
    console.log(`R$ ${imposto.toFixed(2)}`);
} else {
    imposto = (salario - 4500.00) * 0.28 + 1500.00 * 0.18 + 1000.00 * 0.08;
    console.log(`R$ ${imposto.toFixed(2)}`);
};