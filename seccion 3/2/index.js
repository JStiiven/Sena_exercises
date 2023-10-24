let productos = prompt("Que producto desea llevar: \n 1. lentejas \n 2. crema \n 3. arroz \n 4. vino");
let text1 = "Este producto cuesta: "
if (productos.length > 0){
if (productos == "lentejas"){
        text1 += 5400 + "\nY el producto lentejas no paga IVA "
    }else if(productos == "arroz"){
        text1 += 3100 + "\nY el producto arroz no paga IVA "
    }else if (productos == "crema"){
        text1 += 15000 + "\nY el producto crema paga IVA"
    }else if (productos == "vino"){
        text1 += 63500 + "\nY el producto vino paga IVA"
    }
    alert(text1)
}else{
    alert("¡Ingrese un producto de la lista!")
}
