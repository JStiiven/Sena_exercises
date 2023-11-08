let promedio = 0;
let suma = 0;
for (let i = 1; i <= 10; i++){
    let numero = parseFloat(prompt("Ingrese un numero para sacar su promedio"))
    promedio += numero
    console.log("El promedio es: " + promedio / 10);
}