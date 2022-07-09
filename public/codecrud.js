// definicion de Variables
const url = 'http://localhost:3000/user'
const contenedor = document.querySelector('tbody')
console.log(contenedor)
let resultados = ''

const modalArticulo = new bootstrap.Modal(document.getElementById('modalArticulo'))
const formArticulo = document.querySelector('form')
const jugador = document.getElementById('jugador')
const saldo = document.getElementById('saldo')
const apuesta = document.getElementById('apuesta')
const porcentajeApuesta = document.getElementById("porcentajeApuesta")
const colorApuesta = document.getElementById('colorApuesta')
let opcion = ''

btnCrear.addEventListener('click', () => {
    modalArticulo.show()
    jugador.value = ""
    saldo.value = 0
    apuesta.value = 0
    porcentajeApuesta.value = 0
    colorApuesta.value = ""
    opcion = 'crear'

})
//funcion para mostrar los resultados
const mostrar = (articulos) => {
    //articulos.forEach(element => console.log(element));
    console.log(articulos)

    articulos.forEach(element => {
        resultados += ` <tr>
                            <td>${element._id}</td>
                            <td>${element.name}</td>
                            <td>${element.saldo}</td>
                            <td>${element.montoApuesta}</td>
                            <td>${element.porcentajeApuesta}</td>
                            <td>${element.colorApuesta}</td>
                            <td class="text-center"> <a class="btnEditar btn btn-primary"> Editar </a> <a class="btnBorrar btn btn-danger"> Borrar </a>  </td> 
                        </tr>
                      `
   
    })
    contenedor.innerHTML = resultados
}

//procedimiento  Mostrart

fetch(url)
    .then(response => response.json())
    .then(data => mostrar(data))
    .catch(error => console.log(error))

