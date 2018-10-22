//JS copia las definiciones y las copia arriba.
holaMundo(); //se puede ejecutar la función antes de ser declaradas.

function holaMundo() {
    console.log("Hola mundo");
}

console.log(holaMundo()) // undefined

function sumarDosNumeros(numUno, numDos) {
    var numeroUnoValido = typeof numUno == 'number'; //validar
    var numeroDosValido = typeof numDos == 'number';
    if (numeroUnoValido && numeroDosValido) {
        return numUno + numDos;
    } else {
        return 0;
    }
}

console.log(sumarDosNumeros(1, 2)); //3
console.log(sumarDosNumeros(true, 0, undefined, null, "asd", 6)); //1

function sumarNNumeros(...numeros) {
    var resultado = calcularResultadoSumaDeNumeros(numeros);
    if (resultado.esValido) {
        return suma;
    } else {
        return 0;
    }
}

function calcularResultadoSumaDeNumeros(numeros) {
    var suma = 0;
    var todosLosNumerosValidos = true;
    for (var i = 0; i < numeros.length; i++) {
        var numeroEsValido = typeof numeros[i] == 'number';
        if (numeroEsValido) {
            suma = suma + numeros[i];
        } else {
            todosLosNumerosValidos = false;
            break;
        }
    }
    var resultado = {
        suma: suma,
        esValido: todosLosNumerosValidos
    };
    return resultado
}

console.log(sumarNNumeros(true, 0, 1, 2)); //si no encuentra un número devuelve 0

function saludar(nombre, funcion) {
    return `Hola ${funcion(nombre)}`;
}

console.log(saludar("jOsSUé", nombreMayusculas)); //mandar a la función como parámetro
console.log(saludar("jOsSUé", nombreMinusculas)); //mandar a la función como parámetro
console.log(saludar("jOsSUé", nombrepuntoAlFinal)); //mandar a la función como parámetro

function nombreMayusculas(nombre) {
    return nombre.toUpperCase();
}

function nombreMinusculas(nombre) {
    return nombre.toLowerCase();
}

function nombrepuntoAlFinal(nombre) {
    return nombre + ".";
}

var arreglo = [1, 2, 3];

/*
arreglo.findIndex(
    function () {

    }
)
*/

function restar(a, b) {
    return a - b;
}

console.log(restar());//Ejecución undefined
console.log(typeof  restar); //Typo function
console.log(restar); //Definición de la función


//Anonymous function

//igualarle a variables
var ejemplo = function () {
}; //función anónima -> carece de nombre.

//igualarle a propiedades de un objeto
var adrian = {
    estudio: function () {
        //implementación
    }
}

adrian.estudio();

//ejecutarla en arreglos
var arreglo = [
    function () {
        //implementación
    }
]

arreglo[0]();

saludar("Maria", function (nombre) { //enviar a la función como parámetro
    return nombre + "Cómo estás"
})

//tipos de variables

var variable; //NUNCA MÁS

let variableDos = 2; //sí la vamos a usar
variableDos = 3; //reasignar
const edad = 29; //no puede mutar
//-> Usar Const siempre que se pueda

const vicente = {
    nombre: 'Vicente'
};

vicente.nombre = 'Adrian';
/*
vicente = {
    algo:'mas'
}
*/

vicente.isPrototypeOf();//... se puede usar funciones
//El tipo de objeto no se puede mutar o reasignar memoria


const arregloUnoDos = [1, 2];

arregloUnoDos[0] = 3;

/*
arregloUnoDos = [2];
*/

arregloUnoDos.push(4); //se puede usar funciones


const nombre = 'Adrian';
// nombre = 'Vicente'

const casado = true;
//casado = false;

const ganarDinero = function () {
    return 1;
}

// NUNCA VAMOS A USAR FUNCIONES ANÓNIMAS

const elevarAlCuadrado = function (numero) {
    return numero * numero;
};

//vamos a usar Fat Arrow Function   =>

const elevarAlCuadrado = (numero) => {
    return numero * numero;
};

//se puede omitir llaves si solo se tiene una línea
const elevarAlCuadrado = (numero) => numero * numero;

//se puede omitir paréntesis si solo se un prámtero
const elevarAlCuadrado = (numero) => numero * numero;

const restarDosNumeros = (numUno, numDos) => numUno - numDos;



