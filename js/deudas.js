function creoID() {
    return parseInt(Math.random() * 100000)
}

function agregarDeudas() {
    let id = creoID()
    let descripcion = prompt("agregar entidad a la que adeuda")
    let importe = parseInt(prompt("Importe que adeuda"))
        deudas.push(new Deudas(id, descripcion, importe))
        console.table(deudas)
}

 