while (true) {
    let pregunta = prompt("¿Desea salir? S/N")
    if(pregunta == "S"){
        alert("Saliendo...")
        break
    }else if (pregunta == "N"){
        alert("Continuando programa")
    }else{
        alert("Digite algo valido")
    }
}