let nota1;
let nota2;
let nota3;
let promedio;
let cantidadEstudiantes = parseInt(prompt("Ingrese la cantidad de estudiantes"));
for(let i = 1; i <= cantidadEstudiantes; i++){
    nota1 = parseInt(prompt("Ingrese la primer nota del estudiante " + i))
    nota2 = parseInt(prompt("Ingrese la segunda nota del estudiante " + i))
    nota3 = parseInt(prompt("Ingrese la tercera nota del estudiante " + i))
    promedio = (nota1 + nota2 + nota3) / 3
    console.log(i , "El promedio de notas es: " , promedio);
}