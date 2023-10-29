let prestamo = parseInt(prompt("Digite el monto del prestamo"));
let mes = parseInt(prompt("Digite el plazo en meses"));
const valor = 0.20;
let division = prestamo / mes;
let resultado = division * valor
let calcular = division + resultado
let multiplicado = calcular * mes
alert("Las cuotas mensuales de interes que debe pagar segun el plazo en meses es: " + calcular + "\n" +"El total que debe pagar es: " + multiplicado)
