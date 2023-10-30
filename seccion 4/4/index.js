let contador = 0;
let numero = parseInt(prompt("Digite un numero entre 1 y 15"));
if(numero >= 1 && numero <= 15){
    alert("Esta en el rango")
for(let i = 1; i <= numero; i++){
    if(numero % i == 0){
        contador ++;
    }
}
if(contador == 2 && numero > 1){
    console.log("El numero es primo");
}else{
    console.log("El numero no es primo");
}
}else{
    alert("Digite un numero legible")
}