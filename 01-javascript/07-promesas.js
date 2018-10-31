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
};

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
            return nuevaPromesaEscritura('07-ejemplo2.txt', contenido + ' Adios amigos')
        }
    )
    .then(
        (contenidoArchivoEscrito) => {
            console.log(contenidoArchivoEscrito)
        }
    )
    .catch(
        (error) => {
            console.log('Mal', error)
        }
    );


//Ejercicio en clase: Append

const nuevaPromesaAppend = (nombreArchivo, contenidoArchivo) => {
    return new Promise(
        (resolve, reject) => {
            // resolve(); //then -> ok
            // reject(); //catch -> mal
            fs.readFile(
                nombreArchivo,
                'utf8',
                (err, contenidoLeidoDelArchivo) => {
                    if (err) {
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
                    } else {
                        fs.writeFile(
                            nombreArchivo,
                            contenidoLeidoDelArchivo + contenidoArchivo,
                            (err) => {
                                if (err) {
                                    // console.log('Error escribiendo');
                                    reject(err)
                                }
                                else {
                                    resolve(contenidoLeidoDelArchivo + contenidoArchivo)
                                }
                            }
                        )
                    }
                }
            )
        }
    );
};

nuevaPromesaAppend('08-ejemplo.txt', '\nAppend')
    .then(
        (contenidoArchivo) => {
            console.log(contenidoArchivo)
        }
    )
    .catch(
        (error) => {
            console.log('Mal', error)
        }
    );

//Ejercicio de deber


//['D', 'E', 'F']

//0-D.txt 'D'
//1-E.txt 'E'
//2-F.txt 'F'

const respuesta2 = {
    nombreArchivo: '',
    contenidoArchivo: '',
    error: '',
};

//[respuesta, respuesta, respuesta]

const ejercicioPromesa = (arregloStrings) => {
    const respuestas = [];
    return new Promise(
        (resolve) => {
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
                                const estaCompletoElArreglo = respuestas.length === arregloStrings.length;
                                if (estaCompletoElArreglo) {
                                    resolve(respuestas);
                                }
                            }
                        )
                    }
                )
        }
    )
};

ejercicioPromesa(['D', 'E', 'F'])
    .then(
        (respuestaEjercicio) => {
            console.log(respuestaEjercicio)
        }
    );