let n1 = parseInt(prompt("Digite el primer numero"));
let n2 = parseInt(prompt("Digite el segundo numero"));
let n3 = parseInt(prompt("Digite el tercer numero"));
let mayor;
let text = "El numero mayor es: "
if (n1 == n2 && n2 == n3){
    alert("Los numeros son iguales")
    }else if(n1 > n2 && n1 > n3){
        mayor = n1
        alert(text + n1)
    }else if (n2 > n1 && n2 > n3){
        mayor = n2
        alert(text + n2)
    }else if (n3 > n1 && n3 > n2){
    mayor = n3
    alert(text + n3)
}else{
    alert("Ingrese algo valido")
}