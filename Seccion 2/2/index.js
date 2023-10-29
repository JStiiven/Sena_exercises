let radio = parseInt(prompt("Ingrese el area del circulo"));
let a  = ( 3.1416 * (radio * radio)).toFixed (2)
let p = (2 * 3.1416) * radio
alert("El area del circulo es: " + a + "\n" + "El perimetro es: " + p);