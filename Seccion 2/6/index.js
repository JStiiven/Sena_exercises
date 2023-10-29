let numero = parseInt(prompt("Digite la cantidad"));
let porcentaje = parseInt(prompt("Digite el porcentaje a calcular"));
let operacion = (numero / porcentaje).toFixed(2)
alert("El " + porcentaje + "%" + " de " + numero + " es: " + operacion)