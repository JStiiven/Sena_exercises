// 1
let numeros = [1, 2, 3, 4, 5, 6];
let contador = 0;
while (contador < numeros.length) {
    console.log(numeros[contador]);
    contador++;
}
// 2
for(let i = 0; i < numeros.length;i++){
    console.log(numeros[i]);
}
// 3
for(let j = 0; j < numeros.length;j++){
    console.log(numeros[j] + 1);
}
// 4
let sum = 0;
for(let k = 0; k < numeros.length;k++){
    sum += numeros[k]
}
const promedio = sum / numeros.length
console.log("El promedio es: " , promedio);