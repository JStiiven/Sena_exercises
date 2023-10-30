let n1 = parseInt(prompt("Digite el primer angulo del triangulo"));
let n2 = parseInt(prompt("Digite el segundo angulo del triangulo"));
let n3 = parseInt(prompt("Digite el tercer angulo del triangulo"));
let suma = n1 + n2 + n3
if (suma == 180){
    alert("Los angulos corresponden a un triangulo")
}else{
    alert("¡Ingrese bien los datos correspondientes!")
}