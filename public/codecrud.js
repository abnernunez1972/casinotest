//  ARRANQUE INICIAL DE RULETA 
// Immediately invoked function expression
// to not pollute the global scope


(function () {
    // definicion de Variables
    const wheel = document.querySelector('.wheel');
    const startButton = document.querySelector('.button');
    const back = document.querySelector('.back')
    var deg = 0;
    var ganador = "";
    const url = 'https://abnernunez1972-reimagined-umbrella-77v6rxwqq7jcrx7w-3000.preview.app.github.dev/user/'
    const contenedor = document.querySelector('tbody')
    let resultados = ''
    let resultados2 = ''

    const modalArticulo = new bootstrap.Modal(document.getElementById('modalArticulo'))
    const formArticulo = document.querySelector('form')
    const jugador = document.getElementById('jugador')
    const saldo = document.getElementById('saldo')
    const montoApuesta = document.getElementById('montoApuesta')
    const porcentajeApuesta = document.getElementById("porcentajeApuesta")
    const colorApuesta = document.getElementById('colorApuesta')
    let opcion = ''
    console.log("Iniciando la ruleta :" + ganador)

    // Los jugadores participan de una partida de ruleta automáticamente, cada 3 minutos (a nivel de datos y vista
    //setInterval("location.reload()",60000);

    //
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
    //   CARGA INICIAL DE DATOS ANTES DE LA RULETA 
         fetch(url)
        .then(response => response.json())
        .then(data => mostrar(data))
        .catch(error => console.log(error))


    // PROCEDIMIENTO DE RULETA INICIAR //

    //startButton.addEventListener('click', () => {
    // Disable button during spin
    startButton.style.pointerEvents = 'none';
    // Calculate a new rotation between 5000 and 10 000
    deg = Math.floor(5000 + Math.random() * 5000);

    //deg =40 ;
    // Set the transition on the wheel
    wheel.style.transition = 'all 10s ease ';
    back.style.transition = 'all 14s ease-out';

    // Rotate the wheel
    wheel.style.transform = `rotate(${deg}deg)`;
    // Apply the blur
    wheel.classList.add('blur');
    back.classList.add('rainbow');
    // });

    wheel.addEventListener('transitionend', () => {
        // Remove blur
        wheel.classList.remove('blur');
        back.classList.remove('rainbow');
        // Enable button when spin is over
        startButton.style.pointerEvents = 'auto';
        // Need to set transition to none as we want to rotate instantly
        wheel.style.transition = 'none';
        // Calculate degree on a 360 degree basis to get the "natural" real rotation
        // Important because we want to start the next spin from that one
        // Use modulus to get the rest value from 360
        const actualDeg = deg % 360;

        // Set the real rotation instantly without animation
        wheel.style.transform = `rotate(${actualDeg}deg)`;


        var element = document.getElementById("result");



        if (actualDeg >= 0 && actualDeg < 10) {
            document.getElementById("result").textContent = "26 NEGRO";
            element.classList.remove("green");
            element.classList.remove("red");
            element.classList.add("black");
            ganador = "NEGRO";
        }
        if (actualDeg >= 10 && actualDeg < 20) {
            document.getElementById("result").textContent = "3 ROJO";
            element.classList.remove("green");
            element.classList.remove("black");
            element.classList.add("red");
            ganador = "ROJO";
        }
        if (actualDeg >= 20 && actualDeg < 30) {
            document.getElementById("result").textContent = "35 NEGRO";
            element.classList.remove("green");
            element.classList.remove("red");
            element.classList.add("black");
            ganador = "NEGRO";
        }
        if (actualDeg >= 30 && actualDeg < 39) {
            document.getElementById("result").textContent = "12 ROJO";
            element.classList.remove("green");
            element.classList.remove("black");
            element.classList.add("red");
            ganador = "ROJO";
        }
        if (actualDeg >= 39 && actualDeg < 49) {
            document.getElementById("result").textContent = "28 NEGRO";
            element.classList.remove("green");
            element.classList.remove("red");
            element.classList.add("black");
            ganador = "NEGRO";
        }
        if (actualDeg >= 49 && actualDeg < 59) {
            document.getElementById("result").textContent = "7 ROJO";
            element.classList.remove("green");
            element.classList.remove("black");
            element.classList.add("red");
            ganador = "ROJO";
        }
        if (actualDeg >= 59 && actualDeg < 69) {
            document.getElementById("result").textContent = "29 NEGRO";
            element.classList.remove("green");
            element.classList.remove("red");
            element.classList.add("black");
            ganador = "NEGRO";
        }
        if (actualDeg >= 69 && actualDeg < 78) {
            document.getElementById("result").textContent = "18 ROJO";
            element.classList.remove("green");
            element.classList.remove("black");
            element.classList.add("red");
            ganador = "ROJO";
        }
        if (actualDeg >= 78 && actualDeg < 88) {
            document.getElementById("result").textContent = "22 NEGRO";
            element.classList.remove("green");
            element.classList.remove("red");
            element.classList.add("black");
            ganador = "NEGRO";
        }
        if (actualDeg >= 88 && actualDeg < 98) {
            document.getElementById("result").textContent = "9 ROJO";
            element.classList.remove("green");
            element.classList.remove("black");
            element.classList.add("red");
            ganador = "ROJO";
        }
        if (actualDeg >= 98 && actualDeg < 107) {
            document.getElementById("result").textContent = "31 NEGRO";
            element.classList.remove("green");
            element.classList.remove("red");
            element.classList.add("black");
            ganador = "NEGRO";
        }
        if (actualDeg >= 107 && actualDeg < 117) {
            document.getElementById("result").textContent = "14 ROJO";
            element.classList.remove("green");
            element.classList.remove("black");
            element.classList.add("red");
            ganador = "ROJO";
        }
        if (actualDeg >= 117 && actualDeg < 127) {
            document.getElementById("result").textContent = "20 NEGRO";
            element.classList.remove("green");
            element.classList.remove("red");
            element.classList.add("black");
            ganador = "NEGRO";
        }
        if (actualDeg >= 127 && actualDeg < 137) {
            document.getElementById("result").textContent = "1 ROJO";
            element.classList.remove("green");
            element.classList.remove("black");
            element.classList.add("red");
            ganador = "ROJO";
        }
        if (actualDeg >= 137 && actualDeg < 146) {
            document.getElementById("result").textContent = "33 NEGRO";
            element.classList.remove("green");
            element.classList.remove("red");
            element.classList.add("black");
            ganador = "NEGRO";
        }
        if (actualDeg >= 146 && actualDeg < 156) {
            document.getElementById("result").textContent = "16 ROJO";
            element.classList.remove("green");
            element.classList.remove("black");
            element.classList.add("red");
            ganador = "ROJO";
        }
        if (actualDeg >= 156 && actualDeg < 166) {
            document.getElementById("result").textContent = "24 NEGRO";
            element.classList.remove("green");
            element.classList.remove("red");
            element.classList.add("black");
            ganador = "NEGRO";
        }
        if (actualDeg >= 166 && actualDeg < 176) {
            document.getElementById("result").textContent = "5 ROJO";
            element.classList.remove("green");
            element.classList.remove("black");
            element.classList.add("red");
            ganador = "ROJO";
        }
        if (actualDeg >= 176 && actualDeg < 185) {
            document.getElementById("result").textContent = "10 NEGRO";
            element.classList.remove("green");
            element.classList.remove("red");
            element.classList.add("black");
            ganador = "NEGRO";
        }
        if (actualDeg >= 185 && actualDeg < 195) {
            document.getElementById("result").textContent = "23 ROJO";
            element.classList.remove("green");
            element.classList.remove("black");
            element.classList.add("red");
            ganador = "ROJO";
        }
        if (actualDeg >= 195 && actualDeg < 205) {
            document.getElementById("result").textContent = "8 NEGRO";
            element.classList.remove("green");
            element.classList.remove("red");
            element.classList.add("black");
            ganador = "NEGRO";
        }
        if (actualDeg >= 205 && actualDeg < 215) {
            document.getElementById("result").textContent = "30 ROJO";
            element.classList.remove("green");
            element.classList.remove("black");
            element.classList.add("red");
            ganador = "ROJO";
        }
        if (actualDeg >= 215 && actualDeg < 224) {
            document.getElementById("result").textContent = "11 NEGRO";
            element.classList.remove("green");
            element.classList.remove("red");
            element.classList.add("black");
            ganador = "NEGRO";
        }
        if (actualDeg >= 224 && actualDeg < 234) {
            document.getElementById("result").textContent = "36 ROJO";
            element.classList.remove("green");
            element.classList.remove("black");
            element.classList.add("red");
            ganador = "ROJO";
        }
        if (actualDeg >= 234 && actualDeg < 244) {
            document.getElementById("result").textContent = "13 NEGRO";
            element.classList.remove("green");
            element.classList.remove("red");
            element.classList.add("black");
            ganador = "NEGRO";
        }
        if (actualDeg >= 244 && actualDeg < 253) {
            document.getElementById("result").textContent = "21 ROJO";
            element.classList.remove("green");
            element.classList.remove("black");
            element.classList.add("red");
            ganador = "ROJO";
        }
        if (actualDeg >= 253 && actualDeg < 263) {
            document.getElementById("result").textContent = "6 NEGRO";
            element.classList.remove("green");
            element.classList.remove("red");
            element.classList.add("black");
            ganador = "NEGRO";
        }
        if (actualDeg >= 263 && actualDeg < 273) {
            document.getElementById("result").textContent = "34 ROJO";
            element.classList.remove("green");
            element.classList.remove("black");
            element.classList.add("red");
            ganador = "ROJO";
        }
        if (actualDeg >= 273 && actualDeg < 283) {
            document.getElementById("result").textContent = "17 NEGRO";
            element.classList.remove("green");
            element.classList.remove("red");
            element.classList.add("black");
            ganador = "NEGRO";
        }
        if (actualDeg >= 283 && actualDeg < 292) {
            document.getElementById("result").textContent = "25 ROJO";
            element.classList.remove("green");
            element.classList.remove("black");
            element.classList.add("red");
            ganador = "ROJO";
        }
        if (actualDeg >= 292 && actualDeg < 302) {
            document.getElementById("result").textContent = "2 NEGRO";
            element.classList.remove("green");
            element.classList.remove("red");
            element.classList.add("black");
            ganador = "NEGRO";
        }
        if (actualDeg >= 302 && actualDeg < 312) {
            document.getElementById("result").textContent = "21 ROJO";
            element.classList.remove("green");
            element.classList.remove("black");
            element.classList.add("red");
            ganador = "ROJO";
        }
        if (actualDeg >= 312 && actualDeg < 322) {
            document.getElementById("result").textContent = "4 NEGRO";
            element.classList.remove("green");
            element.classList.remove("red");
            element.classList.add("black");
            ganador = "NEGRO";
        }
        if (actualDeg >= 322 && actualDeg < 331) {
            document.getElementById("result").textContent = "19 ROJO";
            element.classList.remove("green");
            element.classList.remove("black");
            element.classList.add("red");
            ganador = "ROJO";
        }
        if (actualDeg >= 331 && actualDeg < 341) {
            document.getElementById("result").textContent = "15 NEGRO";
            element.classList.remove("green");
            element.classList.remove("red");
            element.classList.add("black");
            ganador = "NEGRO";
        }
        if (actualDeg >= 341 && actualDeg < 350) {
            document.getElementById("result").textContent = "32 ROJO";
            element.classList.remove("green");
            element.classList.remove("black");
            element.classList.add("red");
            ganador = "ROJO";
        }
        if (actualDeg >= 350 && actualDeg < 360) {
            document.getElementById("result").textContent = "0 VERDE";
            element.classList.remove("black");
            element.classList.remove("red");
            element.classList.add("green");
            ganador = "VERDE";
        }
        console.log("sali de la ruleta : " + ganador)

        ///  CODIGO DE MANAEJO DEL DOM Y TABLE DINAMICA CON BOOTSRAOP
        console.log("sali de la ruleta y entrando a DOM Bootstrap: " + ganador)

        btnCrear.addEventListener('click', () => {
            console.log('si pase a borrar inicializar los datos')
            jugador.value = ""
            saldo.value = 10000
            porcentajeApuesta.value = 8
            montoApuesta.value = saldo.value * porcentajeApuesta.value / 100
            colorApuesta.value = "ROJO"
            modalArticulo.show()
            opcion = 'crear'

        })



        //procedimiento  Calcular 

        fetch(url)
            .then(response => response.json())
            .then(data1 => calcular(data1))
            .catch(error => console.log(error))

        const on = (element, event, selector, handler) => {
            element.addEventListener(event, e => {
                if (e.target.closest(selector)) {
                    handler(e)
                }
            })
        }


        //funcion para Calcular  Resultados Apuestas
        const calcular = (articulos2) => {
            let Csaldo = 0
            let CmontoApuesta = 0
            let CporcentajeApuesta = 0
            let CcolorApuesta

            articulos2.forEach(element2 => {
                idForm = element2._id
                Csaldo = Math.round(element2.saldo)
                CmontoApuesta = Math.round(element2.montoApuesta)
                CporcentajeApuesta = Math.round(element2.porcentajeApuesta)
                CcolorApuesta = element2.colorApuesta
      // Si tienen $1.000 o menos, van All In. Si no les queda dinero, no apuestan. 

                if (Csaldo < 1001) {
                    CmontoApuesta = Csaldo
                }
              

                if (element2.colorApuesta == ganador) {
                  
                    if (CcolorApuesta == "ROJO") {
                        Csaldo = Math.round(Csaldo + (CmontoApuesta * 2))
                        console.log("Comenzando a Calcular :" + idForm + " " + element2.jugador + " " + CcolorApuesta)
                        console.log("JUgador a GANADO CON!!!! : " + ganador + " " + idForm + " " + element2.jugador + " " + CcolorApuesta + " " + Csaldo)
                    }
                    if (CcolorApuesta == "NEGRO") {
                        console.log("Comenzando a Calcular :" + idForm + " " + element2.jugador + " " + CcolorApuesta)
                        Csaldo = Math.round(Csaldo + (CmontoApuesta * 2))
                    }
                    if (CcolorApuesta == "VERDE") {
                        console.log("Comenzando a Calcular :" + idForm + " " + element2.jugador + " " + CcolorApuesta)
                        Csaldo = Math.round(Csaldo + (CmontoApuesta * 15))
                        console.log("JUgador a GANADO CON!!!! : " + ganador + " " + idForm + " " + element2.jugador + " " + CcolorApuesta + " " + Csaldo)
                }
            }

            if (element2.colorApuesta != ganador) {
                Csaldo = Math.round(Csaldo - CmontoApuesta) 
            }


                fetch(url + idForm, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    saldo: Math.round(Csaldo),
                    porcentajeApuesta: Math.round(CporcentajeApuesta),
                    montoApuesta: Math.round(Csaldo * CporcentajeApuesta / 100),
                })
            })
                    .then(response => response.json())
                    

                })
   
     

}

 

        // Procedimoiento Borrar
        on(document, 'click', '.btn-Borrar', e => {
    const fila = e.target.parentNode.parentNode
    const id = fila.firstElementChild.innerHTML
    console.log(id)

    alertify.confirm("This is a confirm dialog.",
        function () {
            fetch(url + id, {
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
    saldo.value = Math.round(saldoForm)
    porcentajeApuesta.value = Math.round(porcentajeApuestaForm)
    montoApuesta.value = Math.round((saldo.value * porcentajeApuesta.value) / 100)
    colorApuesta.value = colorApuestaForm
    opcion = 'editar'
    modalArticulo.show()
})


//Procedimiento para crear y editar

formArticulo.addEventListener('submit', (e) => {
    e.preventDefault()
    if (opcion == 'crear') {
        console.log('CREAR')
        console.log('voy a ejecuta el fetch post')
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },

            body: JSON.stringify({
                jugador: jugador.value,
                saldo: Math.round(saldo.value),
                porcentajeApuesta: Math.round(porcentajeApuesta.value),
                montoApuesta: Math.round(saldo.value * porcentajeApuesta.value / 100),
                colorApuesta: colorApuesta.value

            })
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                const nuevoJugador = []
                nuevoJugador.push(data)
                mostrar(nuevoJugador)
                modalArticulo.hide()

            })
    }
    if (opcion == 'editar') {
        console.log('EDITAR')
        fetch(url + idForm, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                jugador: jugador.value,
                saldo: Math.round(saldo.value),
                porcentajeApuesta: Math.round(porcentajeApuesta.value),
                montoApuesta: Math.round(saldo.value * porcentajeApuesta.value / 100),
                colorApuesta: colorApuesta.value

            })
        })
            .then(response => response.json())
            .then(response => location.reload())
        modalArticulo.hide()
    }
})
    }
    );

}) ();
//  FIN DE RULETA   

