// definicion de Variables
const url = 'http://localhost:3000/user/'
const contenedor = document.querySelector('tbody')
let resultados = ''

const modalArticulo = new bootstrap.Modal(document.getElementById('modalArticulo'))


const formArticulo = document.querySelector('form')
const jugador = document.getElementById('jugador')
const saldo = document.getElementById('saldo')
const montoApuesta = document.getElementById('montoApuesta')
const porcentajeApuesta = document.getElementById("porcentajeApuesta")
const colorApuesta = document.getElementById('colorApuesta')
let opcion = ''

btnCrear.addEventListener('click', () => {
    console.log('si pase a borrar inicializar los datps')
    
    jugador.value = ""
    saldo.value = 0
    porcentajeApuesta.value = 0
    colorApuesta.value = "rojo"
    modalArticulo.show()
    opcion = 'crear'

})

//funcion para mostrar los resultados
const mostrar = (articulos) => {
       articulos.forEach(element => {
        resultados += ` <tr>
                            <td>${element._id}</td>
                            <td>${element.jugador}</td>
                            <td>${element.saldo}</td>
                            <td>${element.montoApuesta}</td>
                            <td>${element.porcentajeApuesta}</td>
                            <td>${element.colorApuesta}</td>
                            <td class="text-center"> <a class="btnEditar btn btn-primary"> Editar </a> <a class="btn-Borrar btn btn-danger"> Borrar </a>  </td> 
                        </tr>
                      `

    })
    contenedor.innerHTML = resultados
}

//procedimiento  Mostrar

fetch(url)
    .then(response => response.json())
    .then(data => mostrar(data))
    .catch(error => console.log(error))

const on = (element, event, selector, handler) => {
   element.addEventListener(event, e => {
        if (e.target.closest(selector)) {
            handler(e)
        }
    })
}

// Procedimoiento Borrar
on(document, 'click', '.btn-Borrar', e => {
    const fila = e.target.parentNode.parentNode
    const id = fila.firstElementChild.innerHTML
    console.log(id)

    alertify.confirm("This is a confirm dialog.",
        function () {
            fetch(url+id, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(() => location.reload())

            alertify.success('Ok');
        },
        function () {
            alertify.error('Cancel');
        });

})

// Procedimiento Editar
let idForm = 0
on(document, 'click', '.btnEditar', e => {
    const fila = e.target.parentNode.parentNode
    console.log('EDITAR')
    idForm = fila.children[0].innerHTML
    const nameForm = fila.children[1].innerHTML
    const saldoForm = fila.children[2].innerHTML
    const montoApuestaForm = fila.children[3].innerHTML
    const porcentajeApuestaForm = fila.children[4].innerHTML
    const colorApuestaForm = fila.children[5].innerHTML
    // traspasamo svalores desde formulario
    console.log('Estoy feliz pasando sa traspasar datois hacia form')
    jugador.value = nameForm
    saldo.value = saldoForm
    montoApuesta.value = montoApuestaForm
    porcentajeApuesta.value = porcentajeApuestaForm
    colorApuesta.value = colorApuestaForm
    opcion = 'editar'
    modalArticulo.show()
})


    //Procedimiento para crear y editar

    formArticulo.addEventListener('submit', (e) => {
        e.preventDefault()
        if(opcion=='crear') {
            console.log('CREAR')
            console.log('voy a ejecuta el fetch post')
                fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'                    
                },
               
                body: JSON.stringify({
                    jugador:jugador.value,
                    saldo:saldo.value,
                    montoApuesta:montoApuesta.value,
                    porcentajeApuesta:porcentajeApuesta.value,
                    colorApuesta:colorApuesta.value

                })
            })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                const nuevoJugador = []
                nuevoJugador.push(data)
                mostrar(nuevoJugador)

            })
        }
        if(opcion == 'editar') {
            console.log('EDITAR')
            fetch(url+idForm, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'                    
                },
               
                body: JSON.stringify({
                    jugador:jugador.value,
                    saldo:saldo.value,
                    montoApuesta:montoApuesta.value,
                    porcentajeApuesta:porcentajeApuesta.value,
                    colorApuesta:colorApuesta.value

                })
            })
            .then(response => response.json())
            .then(response => location.reload())
        modalArticulo.hide()
        }
    })


