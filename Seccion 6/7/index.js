let suma = 0;
while(true){    
    let numero = parseInt(prompt("Ingrese un numero para sacar su promedio"))
    if(numero == 0){
        alert("El programa ha terminado por ingresar el valor '0'")
        break    
    }else{
        suma += numero
        let promedio = suma / 10
        console.log("El promedio de su numero es: " , promedio); 
    }
}
