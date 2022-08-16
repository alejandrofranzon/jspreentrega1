
/*
const titulo = document.getElementById("titulo")
const subtitulo = document.getElementById("subtitulo")

const botons = document.getElementsByClassName("btn btn-outline-light") 
const botones = document.getElementsByClassName("btn btn-outline-light")

const buttons = document.getElementsByClassName("btn btn-outline-light")

function textoDeBotones(){
    for (let boton of buttons) {
        console.log(boton.innerText)
    }
}
*/

function crearLista () {
    const lista = document.getElementById("lista")
    servicio.forEach(servicio => {
        const li = document.createElement("li")
            li.innerText = servicio
            lista.append(li)
    })
}


function listarservicio() {
    total = parseInt(prompt("Ingresar servicio requerido"))
    for (let i = 0; i < servicio.length; i++) {
        console.log(servicio[i])
    }
}

function agregarservicio() {
    let nuevoservicio = prompt("Agrege el servicio")
    let resultado = servicio.includes(nuevoservicio)
        if (!resultado) { 
            servicio.push(nuevoservicio)
        } else {
            console.warn("El servicio", nuevoservicio, "ya figura en la lista.")
        }
}

function quitarservicio() {
    let aQuitar = prompt("Ingrese el servicio a quitar")
    let indice = servicio.indexOf(aQuitar)
    if (indice !== -1) {
        let resultado = servicio.splice(indice, 1)
        console.warn("Se ha eliminado el servicio", resultado)
    } else {
        console.error("No se ha encontrado el servicio", aQuitar)
    }
}

function buscarservicio() {
    let servicio = prompt("ingrese el servicio a buscar")
        debugger
        const resultado = servicio.find(elemento => {
            return elemento.nombre === servicio
        })
        console.table(resultado)
}

console.log("AF Creditos")
console.warn("necesitas un credito... te pasamos al simulador")
console.error("no te olvides de llenar todos los campos")

function mostrarSaludo() {
    let nombreCompleto = prompt ("Ingresar tu Nombre y Apellido:")
        console.log("Hola", nombreCompleto)
}

let numero1 = 0
let numero2 = 0
let resultadoMulti = 0

function Multiplicar () {
        numero1 = parseFloat(prompt("Ingrese monto del Credito"))
        numero2 = parseFloat(prompt("Ingrese plazo de su Credito"))
        resultadoMulti = calcular(numero1, numero2)
        console.log ("Importe de Cuota:", resultadoMulti)
}

function calcular(num1, num2) {
    return num1 / num2 * tasa
}

console.warn("quieres solicitarlo??")

  