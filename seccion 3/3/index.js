let n1 = parseInt(prompt("Digite un numero"));
let n2 = parseInt(prompt("Digite otro numero"));
let mayor;
let text = "El numero mayor es: "
if (n1 == n2){
    alert("¡Los numeros son iguales! " + n1 + " " + n2)
}else if(n1 >= n2){
    mayor = n1
    alert(text + n1)
    }else if(n2 >= n1){
    mayor  = n2
    alert(text + n2)
}else{
    alert("¡Ingrese algo valido!")
}