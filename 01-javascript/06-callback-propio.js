// 06-callback-propio.js

const fs = require('fs');
let ContenidoFinal = 'Inicial'

// const respuestaAppendFile = appendFile('06-ejemplo.txt', 'Hola amigos')

// console.log(respuestaAppendFile);
console.log(ContenidoFinal)

function appendFile(nombreArchivo, contenido, callback) {
    // 1) Leer archivo
    // 2.1) Si existe, le añado contenido al final del archivo
    // 2.2) Si no existe, le creo al archivo con el contenido
    // 3) Devolver el contenido completo del archivo**
    fs.readFile(
        nombreArchivo,
        'utf8',
        (error, contenidoLeidoDelArchivo) => {
            if (error) {
                //escribimos el archivo
                fs.writeFile(
                    nombreArchivo,
                    contenido,
                    (err) => {
                        if (err) {
                            // console.log('Error escribiendo');
                            callback(undefined, err)
                        }
                        else {
                            //Devolver el contenido
                            //return contenido;
                            // ContenidoFinal = contenido;
                            callback(contenido)
                        }
                    }
                )
            } else {
                //añadimos el contenido del archivo leido al
                // contenido a escribir en el archivo
                fs.writeFile(
                    nombreArchivo,
                    contenidoLeidoDelArchivo + contenido,
                    (err) => {
                        if (err) {
                            // console.log('Error escribiendo');
                            callback(undefined, err)
                        }
                        else {
                            //Devolver el contenido
                            //return contenidoLeidoDelArchivo + contenido;
                            // ContenidoFinal = contenidoLeidoDelArchivo + contenido;
                            callback(contenidoLeidoDelArchivo + contenido)
                        }
                    }
                )
            }
        }
    )

    //cuando no hay un return en JS devuelve undefined

}

appendFile('06-ejemplo.txt',
    '\nHola amigos',
    (contenido, err) => {
        if (err) {
            console.log(err)
        } else {
            console.log(contenido)
        }
    }
);


//['A', 'B', 'C']
//0-A.txt 'A'
//1-B.txt 'B'
//2-C.txt 'C'

const respuesta = {
    nombreArchivo: '',
    contenidoArchivo: '',
    error: '',
};

//[respuesta, respuesta, respuesta]

function ejercicio(arregloStrings, callback) {

    const respuestas = [];

    arregloStrings
        .forEach(
            (string, indice) => {
                const contenido = string;
                const nombreArchivo = `${indice}-${contenido}.txt`;
                fs.writeFile(
                    nombreArchivo,
                    contenido,
                    (err) => {
                        const respuesta = {
                            nombreArchivo: nombreArchivo,
                            contenidoArchivo: contenido,
                            error: err,
                        };
                        respuestas.push(respuesta);
                        const estaCompletoElArreglo = respuestas.length === arregloStrings.length
                        if (estaCompletoElArreglo) {
                            callback(respuestas);
                        }
                    }
                )
            }
        )

}

ejercicio(
    ['A', 'B', 'C'],
    (respuestaEjercicio) => {
        console.log(respuestaEjercicio)
    }
);