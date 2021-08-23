///////////////////////////////// MARATON ////////////////////////////////////////////////

// 1) La NASA nos pidió un programa que calcule la edad de las personas en sus planetas favoritos.Para eso necesitamos una web(sencilla!!) donde solicitaremos mediante un input y un select al usuario, su edad en la tierra y su planeta favorito.Luego, mostrarle en un tercer input o en un párrafo en el html, su edad correspondiente al planeta que eligió.
/* Días que tardan en dar la vuelta al sol:
Mercurio: 87.97
Venus: 224.7
Tierra: 365.26(Por esto cada 4 años hay un año bisiesto)
Marte: 686.68
Jupiter: 4, 331.98
Saturno: 10, 760.55
Urano: 30, 685.49
Neptuno: 60, 191.19

Por ejemplo si tu edad son 23 años, en Marte tu edad será: 12.23 años.Puede mostrarse redondeado a 12.(Por eso todos quieren ir a Marte, para ser más jóvenes!!!) */

// Selecciono los id y declaro variables.
const edad = document.querySelector("#edad");
const planetaFavorito = document.querySelector("#planetaFavorito");
const totalEdad = document.querySelector("#totaledad")
let resultado = 0;

function CalcularEdadSegunPlaneta() {

    // Dependiendo el planeta que haya seleccionado el usuario, calculo su edad.
    switch (this.value) {
        case 'Mercurio':
            resultado = `${parseInt((edad.value / 87.97) * 365)}`;
            break;
        case 'Venus':
            resultado = `${parseInt((edad.value / 224.7) * 365)}`;
            break;
        case 'Tierra':
            resultado = `${parseInt((edad.value / 365.26) * 365)}`;
            break;
        case 'Marte':
            resultado = `${parseInt((edad.value / 686.68) * 365)}`;
            break;
        case 'Jupiter':
            resultado = `${parseInt((edad.value / 4331.98) * 365)}`;
            break;
        case 'Saturno':
            resultado = `${parseInt((edad.value / 10760.55) * 365)}`;
            break;
        case 'Urano':
            resultado = `${parseInt((edad.value / 30685.49) * 365)}`;
            break;
        case 'Neptuno':
            resultado = `${parseInt((edad.value / 60191.19) * 365)}`;
            break;
        default:
            break;
    }

    return totalEdad.innerHTML = `Su edad en ${this.value} es de: ${resultado} año/s`
}

// Selecciono el planeta favorito y calculo su edad.
planetaFavorito.onchange = CalcularEdadSegunPlaneta;

// 2) Un vivero nos pide armar un sistema que ayude a las personas a decidir qué tipo de planta colocar en su jardín según la flor que quieran. Para eso, les daremos diferentes opciones (mediante un select, o mediante botones), para que puedan elegir varios tipos de flor. Al elegir una flor, se debe mostrar su imagen. Cuando se le pase el mouse por encima a esa imagen, debe mostrar como se ve el árbol de dicha flor.

let flor = document.getElementById("florFavorita");
let imgFlor = document.querySelector("#imagenflor");

let mostrarArbol = () => {
    switch (flor.value) {
        //console.log(flor.value);
        case 'florlimon':
            imgFlor.src = `img/Arbol-limonero.jpg`
            break;
        case 'floralgodon':
            imgFlor.src = `img/Arbol-algodon.jpg`
            break;
        case 'florolivo':
            imgFlor.src = `img/Arbol-olivo.jpg`
            break;
        default:
            break;
    }

}

let mostrarFlor = () => {
    //console.log(flor);
    switch (flor.value) {
        case 'florlimon':
            imgFlor.src = `img/Flor-limon.jpg`
            break;
        case 'floralgodon':
            imgFlor.src = `img/Flor-algodon.png`
            break;
        case 'florolivo':
            imgFlor.src = `img/Flor-olivo.jpg`
            break;
        default:
            break;
    }

}

imgFlor.addEventListener("mouseover", mostrarArbol);
imgFlor.addEventListener("mouseout", mostrarFlor);
flor.addEventListener("change", mostrarFlor);

// 3) En un juego de mesa, necesitan implementar un sistema de puntos que sea justo para decidir quién arranca. Para esto, cada jugador tirará 4 veces el dado (del 1 al 6). Luego, se hará la suma de los 4 dados. Quien haya sacado más puntuación será quien inicie el juego. Nota: A los jugadores se los identificado con “jugador 1, 2, etc…” Según el órden en el cuál tiraron.

let dado = document.querySelector("#boton");
let tirada = document.querySelector("#tirada");
let total = document.querySelector("#total");
let totalGanador = document.querySelector("#totalganador");
let historico = document.querySelector("#botonhistorico");
let subtotal = 0; // Representa al total obtenido de cada jugador
let contarTiradas = 0; // Cuento las tiradas que tiene cada jugador (Hasta 4)
let contarJugadores = 0; // Cuento el numero de jugador que realizó las 4 tiradas
let guardoTotalesJugadores = []; // Guardo los totales de cada jugador
let mensajeHistorico = ""; // Imprimo un mensaje por cada jugador que juegue
let guardoHistoricoJugadores = ""; // Guardo el mensaje de cada jugador en un histórico de jugadores.

const tirarDado = () => {

    if (contarTiradas < 4) {

        // Tiro el dado en forma aleatoria.
        dado = Math.ceil(Math.random() * 6);
        // Asigno el número de tirada y la guardo
        tirada.value = parseInt(dado);
        // Acumulo los subtotales por cada tirada
        subtotal += parseInt(dado);
        // Asigno los subtotales al input de totales
        total.value = subtotal;
        // Voy contando cada tirada
        contarTiradas += 1;

    } else {
        // Voy contando cada jugador que va tirando.
        contarJugadores += 1;
        // Informo total obtenido por cada jugador
        mensajehistorico = `El jugador ${contarJugadores} obtuvo un total de ${total.value} puntos \n`;
        alert(`${mensajehistorico}`)
            // Guardo el mensaje de cada jugador para informar un histórico (por botón)
        guardoHistoricoJugadores = `${guardoHistoricoJugadores} ${mensajehistorico} \n`;
        // Guardo el total obtenido de cada jugador
        guardoTotalesJugadores.push(subtotal);
        // Comparo el subtotal actual vs el total mayor obtenido de un jugador.
        if (subtotal >= Math.max(...guardoTotalesJugadores)) {
            // Asigno el total del jugador ganador (el que sumó más puntos) 
            totalGanador.value = `Ganó el jugador ${contarJugadores} con ${subtotal} puntos`;
        }
        // Reinicializo todos los valores para cuando el jugador siguiente juegue.
        limpiarValores();
    }
}

const limpiarValores = () => {
    tirada.value = "";
    total.value = "";
    subtotal = 0;
    contarTiradas = 0;
    dado = 0;
}

const mostrarHistorico = () => {
    alert(`Histórico:\n${guardoHistoricoJugadores}`);
}

dado.addEventListener("click", tirarDado);
historico.addEventListener("click", mostrarHistorico);

/* 4) Una escuela de tango necesita organizar las inscripciones de sus alumnos.
a) Mostrar la siguiente infomación de alumnos en una web.
b) Mostrar en verde quienes pagaron y en rojo quienes no pagaron.
Alumnos: */

const alumnos = [

    {
        "nombre": "Juana",
        "pago": true
    },
    {
        "nombre": "Santiago",
        "pago": true
    },
    {
        "nombre": "Esteban",
        "pago": false
    },
    {
        "nombre": "Lautaro",
        "pago": true
    },
    {
        "nombre": "Marian",
        "pago": false
    }
]

// a) Mostrar la siguiente infomación de alumnos en una web.
document.write(`<p class="center"><b>Listado de alumnos:</b></p>`);
document.write(`<p class="center">Nombre: ${alumnos[0].nombre}</p>`);
document.write(`<p class="center">Pago: ${alumnos[0].pago}</p>`);
document.write(`<p class="center">Nombre: ${alumnos[1].nombre}</p>`);
document.write(`<p class="center">Pago: ${alumnos[1].pago}</p>`);
document.write(`<p class="center">Nombre: ${alumnos[2].nombre}</p>`);
document.write(`<p class="center">Pago: ${alumnos[2].pago}</p>`);
document.write(`<p class="center">Nombre: ${alumnos[3].nombre}</p>`);
document.write(`<p class="center">Pago: ${alumnos[3].pago}</p>`);
document.write(`<p class="center">Nombre: ${alumnos[4].nombre}</p>`);
document.write(`<p class="center">Pago: ${alumnos[4].pago}</p>`);

// Otra forma recorriendo con un foreach.
alumnos.forEach(alumno => {
    document.write(`<p class="center">Nombre: ${alumno.nombre}</p>`);
    document.write(`<p class="center">Pago: ${alumno.pago}</p>`);
});

// b) Mostrar en verde quienes pagaron y en rojo quienes no pagaron.

alumnos.forEach(alumno => {
    document.write(`<p class="center">Nombre: ${alumno.nombre}</p>`);
    alumno.pago ? document.write(`<p class="center">Pago: <span style="color:green"><b>${alumno.pago}</b></span></p>`) : document.write(`<p class="center">Pago: <span style="color:red"><b>${alumno.pago}</b></span></p>`);
});

/* 5) La AFA está realizando un concurso para ganarte una pelota firmada por Messi.
Se le solicita a las personas que completen:
Nombre: mínimo 3 y máximo 16 dígitos.
Equipo favorito: No debe contener números.
Edad: Debe ser mayor de edad para participar.
DNI: Debe tener entre 7 y 8 caracteres.
Mail: Debe ser un mail válido. Solo se aceptan participantes con mails que terminen en “.com” o “.ar” 
Mensaje para Messi: Debe contener al menos 30 caracteres.*/

// Nombre: mínimo 3 y máximo 16 dígitos.
const nombre = document.querySelector("#nombre");
const validarNombre = (event) =>
    //console.log(event.target.value.length);
    event.target.value.length >= 3 ? nombre.style.color = "black" : nombre.style.color = "red";

// Valido por cada tecla que se presiona
nombre.addEventListener("keyup", validarNombre);

// Equipo favorito: No debe contener números.
const equipoFavorito = document.querySelector("#equipofavorito");
const pattern = new RegExp('^[A-Z]+$', 'i'); // Expresión regular.

const validarEquipo = (event) => {
    // Si se ingresan números es inválido
    if (!pattern.test(event.target.value)) {
        equipoFavorito.style.color = "red";
        console.log("Es invalido")
    } else {
        equipoFavorito.style.color = "black";
    }
}

equipoFavorito.addEventListener("keyup", validarEquipo)

// Edad: Debe ser mayor de edad para participar.
const edadUsuario = document.querySelector("#edadusuario");

const validarEdad = (event) => {
    if (event.target.value < 18) {
        edadUsuario.style.color = "red";
        //alert("Usted no puede participar ya que es menor de edad");
    } else {
        edadUsuario.style.color = "black";
        //alert("Usted puede participar");    
    }
}

edadUsuario.addEventListener("keyup", validarEdad)

// DNI: Debe tener entre 7 y 8 caracteres.
const dni = document.querySelector("#dni");

const validarDni = (event) =>
    //console.log(event.target.value.length);
    event.target.value.length >= 7 && event.target.value.length <= 8 ? dni.style.color = "black" : dni.style.color = "red";

// Valido por cada tecla que se presiona
dni.addEventListener("keyup", validarDni);

// Mail: Debe ser un mail válido. Solo se aceptan participantes con mails que terminen en “.com” o “.ar” 
const mail = document.querySelector("#mail");

// Según la especificación HTML5
const emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const validarMail = (event) => {

    // Si los ultimos 4 caracteres terminan en ".com" o los últimos 3 caracteres terminan en ".ar" y si es válida la expresión regular, es OK.
    if ((event.target.value.substr(-4) === ".com" || event.target.value.substr(-3) === ".ar") && emailRegExp.test(event.target.value)) {
        mail.style.color = "black";
    } else {
        mail.style.color = "red"
    }

}

// Valido por cada tecla que se presiona
mail.addEventListener("keyup", validarMail);

// Mensaje para Messi: Debe contener al menos 30 caracteres.
const mensaje = document.querySelector("#mensaje");

const validarMensaje = (event) => {

    if (event.target.value.length >= 30) {
        mensaje.style.color = "black";
    } else {
        mensaje.style.color = "red"
    }
}

// Valido por cada tecla que se presiona
mensaje.addEventListener("keyup", validarMensaje);


/* 6) Papá Noel recibió una cantidad enorme de cartitas este año, por lo que no tuvo tiempo de decidir quienes habían sido buenos o malos, así que decidió armar un sistema de clasificación automático. Si el niño o niña pidió 3 o más de los siguientes objetos, será catalogado como “malo” y se le entregará carbón en navidad. Si pidió 2 o menos, entonces será catalogado como bueno. Los objetos que suman son:
* Bicicleta, hermano/a/e, playstation, medias, mochila, piano*.
-Para probar: Generar algún set de pruebas. Pueden usar objetos y/o arreglos. */

const chicos = [

    {
        "nombre": "Marcos",
        "objeto": ["Bicicleta", "PlayStation", "Medias", "Mochila"] // Malo
    },
    {
        "nombre": "Pablo",
        "objeto": ["Medias", "Mochila"] // Bueno
    },
    {
        "nombre": "Lisa",
        "objeto": ["PlayStation", "Piano"] // Bueno
    },
    {
        "nombre": "Homero",
        "objeto": ["Hermana", "Mochila", "PlayStation"] // Malo
    },
    {
        "nombre": "Marina",
        "objeto": ["Hermano"] // Bueno
    }
]

// Recorremos el objeto JSON
chicos.forEach(chico => {

    document.write(`<p class="center">Nombre: ${chico.nombre}</p>`);

    // Si el array contiene más de 3 objetos, chico malo, sino chico bueno
    chico.objeto.length >= 3 ? document.write(`<p class="center">Clasificación: <b>Malo</b>, porque pidió ${chico.objeto.length} objeto/s: ${chico.objeto}</p>`) : document.write(`<p class="center">Clasificación: <b>Bueno</b>, porque pidió ${chico.objeto.length} objeto/s: ${chico.objeto}</p>`)

});

/* 7) Organizar asados es una tarea difícil cuando se trata de calcular la cantidad de comida y repartir los costos. Para eso, un grupo de amigos nos solicita que realicemos un programa que nos ayude a dividir la tarea. 
Se calcula: 500gr de carne por persona. 1 Botella de cerveza por persona. 1 kilo de helado cada 4 personas. En caso de quedar por ejemplo: 1 kilo y medio, redondear siempre para arriba, es decir a dos kilos. 
El programa debe recibir como dato la cantidad de comensales y debe devolver: Cantidad de carne, cervezas y helado para comprar, costo total y costo por persona. 
Costos:
* Carne por kilo: $700
* Botella de cerveza: $200
* Kilo de helado: $600
Por ejemplo: Si son 5 personas serán:
- 2.5kg de carne, 5 botellas de cerveza y 2 kilos de helado.
- Precio total: $1750 de carne + $1000 de cervezas, $1200 de helado. Total: $3950. 
- Precio por persona: $790.*/

// Selecciono los elementos que vamos a utilizar.
const cantComensales = document.querySelector("#cantidadcomensales");
const calcular = document.querySelector("#calcular");
const cantCarne = document.querySelector("#cantidadcarne");
const cantCerveza = document.querySelector("#cantidadcerveza");
const cantHelado = document.querySelector("#cantidadhelado");
const precioCarne = document.querySelector("#preciocarne");
const precioCerveza = document.querySelector("#preciocerveza");
const precioHelado = document.querySelector("#preciohelado");
const precioTotal = document.querySelector("#preciototal");
const precioPorPersona = document.querySelector("#precioporpersona");
// Declaro los costos de los productos.
const costoCarne = 700;
const costoCerveza = 200;
const costoHelado = 600;
// Declaro el consumo de productos por persona.
const consumoCarnePersona = 0.50;
const consumoCervezaPersona = 1;
const consumoHeladoPersona = 0.25;

const calcularCantPrecios = () => {

    // La declaro porque el "Math.ceil()" para el redondeo si lo asigno directo sobre el input no me funciona.
    let cantidadHelado = 0;

    // Calculamos las cantidades y las asignamos a su input correspondiente.
    cantCarne.value = cantComensales.value * parseFloat(consumoCarnePersona);
    cantCerveza.value = cantComensales.value * consumoCervezaPersona;
    cantidadHelado = cantComensales.value * parseFloat(consumoHeladoPersona);
    // Si coloco 5,es 1,25,pero como hay que redondear siempre al entero próximo, lo convierto a 2 en ese caso.
    cantHelado.value = Math.ceil(cantidadHelado);

    // Calculamos los precios totales de cada producto y se los asignamos a su input correspondiente.
    precioCarne.value = cantCarne.value * costoCarne;
    precioCerveza.value = cantCerveza.value * costoCerveza;
    precioHelado.value = cantHelado.value * costoHelado;

    // Calculamos los totales(total general y total por persona)
    precioTotal.value = parseInt(precioCarne.value) + parseInt(precioCerveza.value) + parseInt(precioHelado.value);
    precioPorPersona.value = precioTotal.value / cantComensales.value;

    // Asigno los cálculos con sus respectivas unidades.(Kg / Ltrs/ $) 
    asignoUnidades();
}

const asignoUnidades = () => {

    // Declaro variables para asignarle las unidades de medida a cada producto o precio.
    const unidadCantCarne = " Kg";
    const unidadCantCerveza = " Ltr/s";
    const unidadCantHelado = " Kg";
    const unidadPrecioCarne = "$ ";
    const unidadPrecioCerveza = "$ ";
    const unidadPrecioHelado = "$ ";
    const unidadPrecioTotal = "$ ";
    const unidadPrecioPorPersona = "$ ";

    cantCarne.value = cantCarne.value + unidadCantCarne;
    cantCerveza.value = cantCerveza.value + unidadCantCerveza;
    cantHelado.value = cantHelado.value + unidadCantHelado;
    precioCarne.value = unidadPrecioCarne + precioCarne.value;
    precioCerveza.value = unidadPrecioCerveza + precioCerveza.value;
    precioHelado.value = unidadPrecioHelado + precioHelado.value;
    precioTotal.value = unidadPrecioTotal + precioTotal.value;
    precioPorPersona.value = unidadPrecioPorPersona + precioPorPersona.value;
}

calcular.addEventListener("click", calcularCantPrecios)

/* 8) Una tienda de sombreros nos requiere para su web agregar un carrito de compras que se mantenga cuando la persona entra o sale del sitio. (guiñoguiñolocalstorageguiñoguiño) .
Para eso le mostraremos al usuario 5 sombreros con su respectivo nombre, foto y precio. Dentro del carro cada uno tendrá una cantidad. Por defecto todos estarán en 0. Cada uno tendrá un botón de sumar y otro de restar. No se podrá tener una cantidad menor a 0 de sombreros. El tope máximo son 3 sombreros por tipo. Cuando llega al tope de sombreros, se debe mostrar toda la info del sombrero con un recuadro rojo.
En la parte inferior se verá el precio total de los sombreros solicitados.*/

// Selecciono los selectores que se van a utilizar para las  + y - de cantidades.
const sumarCantidadBombin = document.querySelector("#sumarcantidadbombin");
const restarCantidadBombin = document.querySelector("#restarcantidadbombin");
const sumarCantidadClasico = document.querySelector("#sumarcantidadclasico");
const restarCantidadClasico = document.querySelector("#restarcantidadclasico");
const sumarCantidadCopa = document.querySelector("#sumarcantidadcopa");
const restarCantidadCopa = document.querySelector("#restarcantidadcopa");
const sumarCantidadPlaya = document.querySelector("#sumarcantidadplaya");
const restarCantidadPlaya = document.querySelector("#restarcantidadplaya");
const sumarCantidadVestir = document.querySelector("#sumarcantidadvestir");
const restarCantidadVestir = document.querySelector("#restarcantidadvestir");
const confirmarPedido = document.querySelector("#confirmarpedido");

// Selecciono los selectores que se van a utilizar para asignar los valores de cantidad y precio
const cantidadBombin = document.querySelector("#cantidadbombin");
const precioBombin = document.querySelector("#preciobombin");
const cantidadClasico = document.querySelector("#cantidadclasico");
const precioClasico = document.querySelector("#precioclasico");
const cantidadCopa = document.querySelector("#cantidadcopa");
const precioCopa = document.querySelector("#preciocopa");
const cantidadPlaya = document.querySelector("#cantidadplaya");
const precioPlaya = document.querySelector("#precioplaya");
const cantidadVestir = document.querySelector("#cantidadvestir");
const precioVestir = document.querySelector("#preciovestir");
const precioTotalSombreros = document.querySelector("#preciototalsombreros"); // Representa al total acumulado

// Declaro las constantes para los costos de cada sombrero
const costobombin = 1500;
const costoclasico = 1200;
const costocopa = 2000;
const costoplaya = 700;
const costovestir = 2500;

// Declaro los divs para el agregado de los bordes rojos.
const infoBombin = document.querySelector("#infobombin");
const infoClasico = document.querySelector("#infoclasico");
const infoCopa = document.querySelector("#infocopa");
const infoPlaya = document.querySelector("#infoplaya");
const infoVestir = document.querySelector("#infovestir");

// Variables numericas para los totales.
let totalPrecioBombin = 0;
let totalPrecioClasico = 0;
let totalPrecioCopa = 0;
let totalPrecioPlaya = 0;
let totalPrecioVestir = 0;

// Bombin
const aumentarCantidadBombin = () => {
    // Si es mayor o igual a 0 que sume pero hasta 3 como tope.
    if (cantidadBombin.value >= 0 && cantidadBombin.value < 3) {
        cantidadBombin.value = parseInt(cantidadBombin.value) + 1;
        precioBombin.value = costobombin * cantidadBombin.value;
    }

    // Asigno borde rojo al llegar a la cantidad de 3
    if (cantidadBombin.value == 3) {
        infoBombin.classList.add("borderojo");
    }

}
const disminuirCantidadBombin = () => {
    // Si es mayor a 0 que reste, sino no hacemos nada.
    if (cantidadBombin.value > 0) {
        cantidadBombin.value = parseInt(cantidadBombin.value) - 1;
        preciobombin.value = costobombin * cantidadBombin.value;
        // Deshabilito la clase porque no va a ser nunca igual a 3 en la resta
        infoBombin.classList.remove("borderojo");
    }

}

// Clásico
const aumentarCantidadClasico = () => {
    // Si es mayor o igual a 0 que sume pero hasta 3 como tope.
    if (cantidadClasico.value >= 0 && cantidadClasico.value < 3) {
        cantidadClasico.value = parseInt(cantidadClasico.value) + 1;
        precioClasico.value = costoclasico * cantidadClasico.value;
    }

    // Asigno borde rojo al llegar a la cantidad de 3
    if (cantidadClasico.value == 3) {
        infoClasico.classList.add("borderojo");
    }

}
const disminuirCantidadClasico = () => {
    // Si es mayor a 0 que reste, sino no hacemos nada.
    if (cantidadClasico.value > 0) {
        cantidadClasico.value = parseInt(cantidadClasico.value) - 1;
        precioClasico.value = costoclasico * cantidadClasico.value;
        // Deshabilito la clase porque no va a ser nunca igual a 3 en la resta
        infoClasico.classList.remove("borderojo");
    }
}

// Copa
const aumentarCantidadCopa = () => {
    // Si es mayor o igual a 0 que sume pero hasta 3 como tope.
    if (cantidadCopa.value >= 0 && cantidadCopa.value < 3) {
        cantidadCopa.value = parseInt(cantidadCopa.value) + 1;
        precioCopa.value = costocopa * cantidadCopa.value;
    }

    // Asigno borde rojo al llegar a la cantidad de 3
    if (cantidadCopa.value == 3) {
        infoCopa.classList.add("borderojo");
    }
}
const disminuirCantidadCopa = () => {
    // Si es mayor a 0 que reste, sino no hacemos nada.
    if (cantidadCopa.value > 0) {
        cantidadCopa.value = parseInt(cantidadCopa.value) - 1;
        precioCopa.value = costocopa * cantidadCopa.value;
        // Deshabilito la clase porque no va a ser nunca igual a 3 en la resta
        infoCopa.classList.remove("borderojo");
    }
}

// Playa
const aumentarCantidadPlaya = () => {
    // Si es mayor o igual a 0 que sume pero hasta 3 como tope.
    if (cantidadPlaya.value >= 0 && cantidadPlaya.value < 3) {
        cantidadPlaya.value = parseInt(cantidadPlaya.value) + 1;
        precioPlaya.value = costoplaya * parseInt(cantidadPlaya.value);
    }

    // Asigno borde rojo al llegar a la cantidad de 3
    if (cantidadPlaya.value == 3) {
        infoPlaya.classList.add("borderojo");
    }
}
const disminuirCantidadPlaya = () => {
    // Si es mayor a 0 que reste, sino no hacemos nada.
    if (cantidadPlaya.value > 0) {
        cantidadPlaya.value = parseInt(cantidadPlaya.value) - 1;
        precioPlaya.value = costoplaya * parseInt(cantidadPlaya.value);
        // Deshabilito la clase porque no va a ser nunca igual a 3 en la resta
        infoPlaya.classList.remove("borderojo");
    }
}

// Vestir
const aumentarCantidadVestir = () => {

    // Si es mayor o igual a 0 que sume pero hasta 3 como tope.
    if (cantidadVestir.value >= 0 && cantidadVestir.value < 3) {
        cantidadVestir.value = parseInt(cantidadVestir.value) + 1;
        precioVestir.value = costovestir * parseInt(cantidadVestir.value);
    }

    // Asigno borde rojo al llegar a la cantidad de 3
    if (cantidadVestir.value == 3) {
        infoVestir.classList.add("borderojo");
    }

}
const disminuirCantidadVestir = () => {
    // Si es mayor a 0 que reste, sino no hacemos nada.
    if (cantidadVestir.value > 0) {
        cantidadVestir.value = parseInt(cantidadVestir.value) - 1;
        precioVestir.value = costovestir * parseInt(cantidadVestir.value);
        // Deshabilito la clase porque no va a ser nunca igual a 3 en la resta
        infoVestir.classList.remove("borderojo");
    }
}

const confirmarTotalAlCarrito = () => {

    // Por las dudas si no son numeros los pongo en 0 para la suma.
    if (isNaN(parseInt(precioBombin.value))) {
        totalPrecioBombin = precioBombin.value = 0;
    } else {
        totalPrecioBombin = precioBombin.value;
    };
    if (isNaN(parseInt(precioClasico.value))) {
        totalPrecioClasico = precioClasico.value = 0;
    } else {
        totalPrecioClasico = precioClasico.value;
    };
    if (isNaN(parseInt(precioCopa.value))) {
        totalPrecioCopa = precioCopa.value = 0;
    } else {
        totalPrecioCopa = precioCopa.value;
    };
    if (isNaN(parseInt(precioPlaya.value))) {
        totalPrecioPlaya = precioPlaya.value = 0;
    } else {
        totalPrecioPlaya = precioPlaya.value;
    };
    if (isNaN(parseInt(precioVestir.value))) {
        totalPrecioVestir = precioVestir.value = 0;
    } else {
        totalPrecioVestir = precioVestir.value;
    };

    // Asigno los totales de cada sombrero al total general acumulado.
    precioTotalSombreros.value = parseInt(totalPrecioBombin) + parseInt(totalPrecioClasico) + parseInt(totalPrecioCopa) + parseInt(totalPrecioPlaya) + parseInt(totalPrecioVestir);

    // Guardamos la info en el local Storage.
    guardoEnLocalStorage();

}

const guardoEnLocalStorage = () => {

    // Acumulo los precios del sombrero Bombín. (Serían los subtotales)
    if (parseInt(totalPrecioBombin) != 0) {
        localStorage.setItem("Total Precio Sombrero Bombín", (+localStorage.getItem("Total Precio Sombrero Bombín") + parseInt(totalPrecioBombin)));
    }

    // Acumulo los precios del sombrero Clásico.
    if (parseInt(totalPrecioClasico) != 0) {
        localStorage.setItem("Total Precio Sombrero Clásico", (+localStorage.getItem("Total Precio Sombrero Clásico") + parseInt(totalPrecioClasico)));
    }

    // Acumulo los precios del sombrero Copa Alta.
    if (parseInt(totalPrecioCopa) != 0) {
        localStorage.setItem("Total Precio Sombrero Copa", (+localStorage.getItem("Total Precio Sombrero Copa") + parseInt(totalPrecioCopa)));
    }

    // Acumulo los precios del sombrero de Playa.
    if (parseInt(totalPrecioPlaya) != 0) {
        localStorage.setItem("Total Precio Sombrero Playa", (+localStorage.getItem("Total Precio Sombrero Playa") + parseInt(totalPrecioPlaya)));
    }

    // Acumulo los precios del sombrero de Vestir.
    if (parseInt(totalPrecioVestir) != 0) {
        //totalpreciodevestirnuevo = +localStorage.getItem("TotalPrecioSombreroVestir") + parseInt(totalPrecioVestir);
        localStorage.setItem("Total Precio Sombrero Vestir", (+localStorage.getItem("Total Precio Sombrero Vestir") + parseInt(totalPrecioVestir)));
    }

    // Acumulo todos los totales cada vez que se sombreros al carrito. (Sería el total general)
    if (parseInt(precioTotalSombreros.value) != 0) {
        localStorage.setItem("Total General de Sombreros", (+localStorage.getItem("Total General de Sombreros") + parseInt(precioTotalSombreros.value)));
    }

    // Guardo la cantidad del sombrero Bombín.
    if (parseInt(cantidadBombin.value) != 0) {
        localStorage.setItem("Total Cantidad Sombrero Bombin", (+localStorage.getItem("Total Cantidad Sombrero Bombin") + parseInt(cantidadBombin.value)));
    }

    // Guardo la cantidad del sombrero Clasico.
    if (parseInt(cantidadClasico.value) != 0) {
        localStorage.setItem("Total Cantidad Sombrero Clasico", (+localStorage.getItem("Total Cantidad Sombrero Clasico") + parseInt(cantidadClasico.value)));
    }

    // Guardo la cantidad del sombrero Copa.
    if (parseInt(cantidadCopa.value) != 0) {
        localStorage.setItem("Total Cantidad Sombrero Copa", (+localStorage.getItem("Total Cantidad Sombrero Copa") + parseInt(cantidadCopa.value)));
    }

    // Guardo la cantidad del sombrero Playa.
    if (parseInt(cantidadPlaya.value) != 0) {
        localStorage.setItem("Total Cantidad Sombrero Playa", (+localStorage.getItem("Total Cantidad Sombrero Playa") + parseInt(cantidadPlaya.value)));
    }

    // Guardo la cantidad del sombrero Vestir.
    if (parseInt(cantidadVestir.value) != 0) {
        localStorage.setItem("Total Cantidad Sombrero Vestir", (+localStorage.getItem("Total Cantidad Sombrero Vestir") + parseInt(cantidadVestir.value)));
    }
}


// Al presionar los botones sumo o resto cantidades y las asigno al input de cantidad.
sumarCantidadBombin.addEventListener("click", aumentarCantidadBombin);
restarCantidadBombin.addEventListener("click", disminuirCantidadBombin);
sumarCantidadClasico.addEventListener("click", aumentarCantidadClasico);
restarCantidadClasico.addEventListener("click", disminuirCantidadClasico);
sumarCantidadCopa.addEventListener("click", aumentarCantidadCopa);
restarCantidadCopa.addEventListener("click", disminuirCantidadCopa);
sumarCantidadPlaya.addEventListener("click", aumentarCantidadPlaya);
restarCantidadPlaya.addEventListener("click", disminuirCantidadPlaya);
sumarCantidadVestir.addEventListener("click", aumentarCantidadVestir);
restarCantidadVestir.addEventListener("click", disminuirCantidadVestir);
// Llamo al botón de "agregar total al carrito" para que guarde el resultado final.
confirmarPedido.addEventListener("click", confirmarTotalAlCarrito);


/* 9)De Guayerd Seguros nos piden que hagamos un cotizador de seguros de auto. Para eso debemos informar el modelo de auto y el año de fabricación. Cada modelo tendrá un costo fijo y bajará 2% por año de antigüedad. Tendrá como base un costo de $900 + el valor por cada modelo. (Poner 3 modelos como opción!).*/

// LLamo a los selectores.
const anio = document.querySelector("#seleccionanio"); // Año que se selecciona en el combo
const cotizarTotal = document.querySelector("#cotizartotal"); // Resultado total de la cotización
const cotizarAnios = document.querySelector("#cotizaranios"); // Determinar los años a cotizar 

let cotizarSeguro = () => {
    switch (anio.value) {
        case '2007':
            calcularDescuento();
            break;
        case '2012':
            calcularDescuento();
            break;
        case '2015':
            calcularDescuento();
            break;
        default:
            break;
    }
}

// Calculo el descuento segun el año de fabricacion.
const calcularDescuento = () => {

    const anioActual = new Date().getFullYear(); // Obtengo el año actual
    let determinarPorcentaje = 0; // Determinar el porcentaje del 2% anual * la cantidad de año de fabricacion
    let costoBase = 900; // Costo base del cotizador 
    let obtenerDescuento = 0; // Obtiene el descuento a aplicar.

    // Resolvemos los años a cotizar (año actual - año de fabricación)
    cotizarAnios.value = anioActual - anio.value;
    // Determino el porcentaje segun el año de fabricacion
    determinarPorcentaje = cotizarAnios.value * 2;
    // Obtengo el descuento a aplicar al costo fijo
    obtenerDescuento = costoBase * determinarPorcentaje / 100;
    // Calculo el costo base - el descuento a aplicar
    cotizarTotal.value = costoBase - obtenerDescuento;
}

// Seleccionar el año (2007, 2012 o 2015)
anio.addEventListener("change", cotizarSeguro);