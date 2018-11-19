declare var Promise;

const rxjs = require('rxjs');
const fs = require('fs');

const inquirer = require('inquirer');
const celular = require('./Entidades/EntCelular');
const cliente = require('./Entidades/EntCliente');
const clienteFunciones = require('./Lógica/NegCliente');

const preguntasIngresoCelular = [
    {
        type: 'input',
        name: 'idCelular',
        message: "Cuál es el id del celular",
    },
    {
        type: 'input',
        name: 'descCelular',
        message: "Cuál es la descripción",

    },
    {
        type: 'input',
        name: 'precioCelular',
        message: "Cuál es el precio del celular",
    },
];


const preguntasIngresoCliente = [
    {
        type: 'input',
        name: 'idCliente',
        message: 'Cual es el id'
    },
    {
        type: 'input',
        name: 'nombre',
        message: 'Cual es el nombre'
    },
];

const opcionesCelular = [
    {
        type: 'list',
        name: 'opcionesCelular',
        message: ' Escoja una opción...',
        choices: ['Ingresar Celular', 'Buscar Celular', 'Borrar Celular', 'Actualizar Celular', 'Salir']
    }
];
const opcionesCliente = [
    {
        type: 'list',
        name: 'opcionesCliente',
        message: 'Escoja una opción...',
        choices: ['Ingresar Cliente', 'Buscar Cliente', 'Borrar Cliente', 'Actualizar Cliente', 'Salir']
    }
];

const preguntaClienteBusquedaPorNombre = [
    {
        type: 'input',
        name: 'nombre',
        message: 'Escribe el nombre del usuario'
    }
];


const preguntaClienteNuevoNombre = [
    {
        type: 'input',
        name: 'nombre',
        message: 'Escribe tu nuevo nombre'
    }
];

function inicializarBase() {
    return new Promise(
        (resolve, reject) => {
            fs.readFile('Base de Datos/bdd.json', 'utf-8',
                (err, contenido) => {
                    if (err) {
                        fs.writeFile('Base de Datos/bdd.json',
                            '{"clientes":[],"celulares":[]}',
                            (err) => {
                                if (err) {
                                    reject({mensaje: 'Error'});
                                }
                                resolve({mensaje: 'ok'});
                            });
                    } else {
                        resolve({mensaje: 'ok'});
                    }
                });
        }
    );
}

async function buscarCliente() {
    const respuestaUsuarioBusquedaPorNombre = await inquirer.prompt(preguntaClienteBusquedaPorNombre);

    const usuarioBuscado = await clienteFunciones.buscarClientePorNombre(respuestaUsuarioBusquedaPorNombre.nombre);
    return usuarioBuscado
}

async function main() {
    console.log('\x1b[36m%s\x1b[0m','Menú Principal');
    try {
        await inicializarBase();
        const respuesta = await inquirer.prompt(opcionesCliente);
        let clienteBuscado;
        switch (respuesta.opcionesCliente) {
            case 'Ingresar Cliente':
                const respuestaUsuario = await inquirer.prompt(preguntasIngresoCliente);
                const respuestaIngresarCliente = await clienteFunciones.ingresarCliente(respuestaUsuario);
                console.log(respuestaIngresarCliente.mensaje);
                main();
                break;
            case 'Buscar Cliente':
                clienteBuscado = await buscarCliente();
                if (clienteBuscado) {
                    console.log('Existe el usuario:\n', clienteBuscado)
                } else {
                    console.log('El cliente no existe');
                }
                main();
                break;
            case'Borrar Cliente':
                clienteBuscado = await buscarCliente();
                if (clienteBuscado) {
                    const respuestaClienteBorrado = await clienteFunciones.borrarCliente(clienteBuscado)
                    console.log(respuestaClienteBorrado.mensaje);
                } else {
                    console.log('El cliente no existe');
                }
                main();
                break;
            case 'Actualizar Cliente':
                clienteBuscado = await buscarCliente();
                if (clienteBuscado) {
                    const respuestaNuevoNombre = await inquirer.prompt(preguntaClienteNuevoNombre);
                    const respuestaActualizarCliente = await clienteFunciones.editarCliente(clienteBuscado, respuestaNuevoNombre.nombre);
                    console.log(respuestaActualizarCliente.mensaje);
                } else {
                    console.log('El cliente no existe');
                }
                main();
                break;
            case 'Salir':
                break;
        }
    } catch (e) {
        console.log('Hubo un error', e);
    }
}


main()
