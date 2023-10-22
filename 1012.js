const PI = 3.14159;
let valores = [3.0, 4.0, 5.2];

const areaTriangulo = (valores[0] * valores[2])/2 ;
const areaCirculo = Math.pow(valores[2],2) * PI;
const areaTrapezio = ((valores[0] + valores[1]) * valores[2])/2;
const areaQuadrado = valores[1] * valores[1];
const areaRetangulo = valores[0] * valores[1];

console.log(`TRIANGULO: ${areaTriangulo.toFixed(3)}`);
console.log(`CIRCULO: ${areaCirculo.toFixed(3)}`);
console.log(`TRAPEZIO: ${areaTrapezio.toFixed(3)}`);
console.log(`QUADRADO: ${areaQuadrado.toFixed(3)}`);
console.log(`RETANGULO: ${areaRetangulo.toFixed(3)}`);

