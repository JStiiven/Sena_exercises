let cubo = parseInt(prompt("Ingrese el primer lado de un cubo"));
let cubo2 = parseInt(prompt("Ingrese el segundo lado de un cubo"));
let cubo3 = parseInt(prompt("Ingrese el tercer lado de un cubo"));
let x;
if(cubo == cubo2 && cubo2 == cubo3){
    x = cubo * cubo2 * cubo3
    alert("El volumen del cubo es: " + x)
}else{
    alert("¡Los lados del cubos no son iguales!")
}
