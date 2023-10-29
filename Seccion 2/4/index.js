let precio = parseInt(prompt("Ingrese el precio de un producto"));
const IVA = 0.19
let operacion = IVA * precio
let suma = operacion + precio
alert("Precio final al consumidor con un IVA de 19% es: " + suma)
