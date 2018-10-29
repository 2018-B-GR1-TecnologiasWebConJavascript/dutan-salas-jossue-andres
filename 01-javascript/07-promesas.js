// 07-promesas.js

const fs = require('fs');
const nombre = '06-ejemplo.txt';

const nuevaPromesa = (nombreArchivo) => {
    return new Promise(
        (resolve, reject) => {
            // resolve(); //then -> ok
            // reject(); //catch -> mal
            fs.readFile(
                nombreArchivo,
                'utf8',
                (err, contenidoLeidoDelArchivo) => {
                    if (err) {
                        reject(err);
                        console.log('err')
                    } else {
                        resolve(contenidoLeidoDelArchivo);
                        console.log('si')
                    }
                }
            )
        }
    );
}

const nuevaPromesaEscritura = (nombreArchivo, contenidoArchivo) => {
    return new Promise(
        (resolve, reject) => {
            fs.writeFile(
                nombreArchivo,
                contenidoArchivo,
                (err) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(contenidoArchivo);
                    }

                }
            )
        }
    )
};


console.log(nuevaPromesa);

/*
nuevaPromesa
    .then(
        (contenido) => {
            console.log('ok', contenido)
        }
    )
    .catch(
        (error) => {
            console.log('Mal', error)
        }
    );
*/

nuevaPromesa(nombre)
    .then(
        (contenido) => {
            console.log('ok', contenido)
            //concatenando
            return nuevaPromesaEscritura('07-ejemplo2.txt', contenido + 'Adios amigos')
        }
    )
    .then(
        (contenidoArchivoEscrito)=>{
            console.log(contenidoArchivoEscrito)
        }
    )
    .catch(
        (error) => {
            console.log('Mal', error)
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
            (string, indice)=>{
                const contenido = string;
                const nombreArchivo = `${indice}-${contenido}.txt`;
                fs.writeFile(
                    nombreArchivo,
                    contenido,
                    (err)=>{
                        const respuesta = {
                            nombreArchivo: nombreArchivo,
                            contenidoArchivo: contenido,
                            error: err,
                        };
                        respuestas.push(respuesta);
                        const estaCompletoElArreglo= respuestas.length === arregloStrings.length
                        if (estaCompletoElArreglo){
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
)


const PromesaAppend = (nombreArchivo, contenidoArchivo, contenidoAppend) => {
    return new Promise(
        (resolve, reject) => {
            fs.writeFile(
                nombreArchivo,
                contenidoArchivo,
                (err) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(contenidoArchivo+contenidoAppend);
                    }

                }
            )
        }
    )
};

PromesaAppend(nombre)
    .then(
        (contenido) => {
            console.log('ok', contenido)
            //concatenando
            return nuevaPromesaAppend('07-ejemplo3.txt', contenido, contenido2)
        }
    )
    .then(
        (contenidoArchivoEscrito)=>{
            console.log(contenidoArchivoEscrito)
        }
    )
    .catch(
        (error) => {
            console.log('Mal', error)
        }
    );


console.log(PromesaAppend())