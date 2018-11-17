const rxjs = require('rxjs');
const fs = require('fs');
const map = require('rxjs/operators').map; //Importar el map
const inquirer = require('inquirer');
const celular = require('./Entidades/Celular');
// import * as promesa from './Lógica/Promesas';
const promesa = require('./Lógica/Promesas');
//Entidades
/*
class Cliente {
    idCliente: number;
    nombreCliente: string;
    telefonoCliente: number;

    constructor(id: number, nombre: string, telefono: number) {
        this.idCliente = id;
        this.nombreCliente = nombre;
        this.telefonoCliente = telefono;
    }
}

class Detalle {
    idDetalle: number;
    celular: Celular;
    cantidad: number;
    precioUnitario: Date;
    precioTotal: number;

    constructor(
        idDetalle: number,
        celular: Celular,
        cantidad: number,
        precioUnitario: Date,
        precioTotal: number
    ) {
        this.idDetalle = idDetalle;
        this.celular = celular;
        this.cantidad = cantidad;
        this.precioUnitario = precioUnitario;
        this.precioTotal = precioTotal;
    }
}

class Factura {
    idFactura: number;
    cliente: Cliente;
    detalles: Detalle[];
    fechaFactura: Date;
    totalAPagar: number;

    constructor(
        idFactura: number,
        cliente: Cliente,
        detalles: Detalle[],
        fechaFactura: Date,
        totalAPagar: number) {
        this.idFactura = idFactura;
        this.cliente = cliente;
        this.detalles = detalles;
        this.fechaFactura = fechaFactura;
        this.totalAPagar = totalAPagar;
    }

}
*/
/*
let celulares: Celular[];

const ingresarBase = (path: string) => {
    return new Promise(
        (resolve, reject) => {
            fs.readFile(
                path,
                'utf-8',
                (error, contenidoLeido) => {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(contenidoLeido);
                    }
                }
            );
        }
    )
};

const ingresarBaseCelular$ = rxjs.from(ingresarBase('Base de Datos/Celular.json'))

ingresarBaseCelular$
    .subscribe(
        (valor) => {
            valor.split("\n").forEach
            (
                (v)=> {
                    celulares.push(v);
                }
            )
        },
        (error) => {
            console.log('Error ', error)
        }
        ,
        () => {
            console.log('Completado')
        }
    )

celulares.forEach(
    (v) => {
        console.log(v)
    }
)
*/
function insertarCelular(id, descripcion, precio) {
    let nuevoCelular = new celular(id, descripcion, precio);
    const contenido = nuevoCelular.idCelular + ',' + nuevoCelular.descCelular + ',' + nuevoCelular.precioCelular + '\n';
    insertarContenidoBaseCelular(contenido);
}
function insertarContenidoBaseCelular(contenido) {
    const celular$ = rxjs.from(promesa.promesaAppend('Base de Datos/Celular.txt', contenido));
    celular$
        .subscribe((ok) => {
        console.log('Insertado\n', ok);
    }, (error) => {
        console.log('Insertado mal ', error);
    }, () => {
        console.log('Completado');
    });
}
function insertarContenidoJSONCelular(contenido) {
    const celular$ = rxjs.from(promesa.promesaAppend('Base de Datos/Celular.json', contenido));
    celular$
        .pipe()
        .subscribe((ok) => {
        console.log(ok.Celulares.idCelular);
        console.log('Insertado\n', ok);
    }, (error) => {
        console.log('Insertado mal ', error);
    }, () => {
        console.log('Completado');
    });
}
function listarCelulares() {
    const celularLectura$ = rxjs.from(promesa.promesaLectura('Base de Datos/Celular.txt'));
    celularLectura$
        .subscribe((ok) => {
        console.log('Leido:\n', ok);
    }, (error) => {
        console.log('Leido mal ', error);
    }, () => {
        console.log('Completado');
    });
}
const celularLecturaJSON$ = rxjs.from(promesa.promesaLecturaJSON('Base de Datos/Celular.json'));
function borrarCelularJSON(idCelular) {
    celularLecturaJSON$
        .subscribe((ok) => {
        if (idCelular === ok.idCelular) {
            delete ok[idCelular];
        }
    }, (error) => {
        console.log('Leido mal ', error);
    }, () => {
        console.log('Completado');
    });
}
//Inquire
const questions = [
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
        default: function () {
            return '';
        }
    },
];
const opciones = [
    {
        type: 'list',
        name: 'opcionesIniciales',
        message: 'Bienvenido \n Escoja una opción...',
        choices: ['Ingresar Dispositivo', 'Listar Dispositivos', 'Borrar Celular', 'Salir']
    }
];
inquirer.prompt(opciones)
    .then(answers => {
    if (answers.opcionesIniciales === 'Ingresar Dispositivo') {
        inquirer.prompt(questions).then(answers => {
            const res = JSON.stringify(answers, null, '  ');
            //console.log(res)
            const coma = ',';
            insertarContenidoJSONCelular(res + coma);
            insertarContenidoBaseCelular(res);
            // fs.writeFileSync('Base de Datos/Celulares.json', res , 'utf-8');
        });
    }
    if (answers.opcionesIniciales === 'Borrar Celular') {
        borrarCelularJSON(1);
    }
    if (answers.opcionesIniciales === 'Listar Dispositivos') {
        listarCelulares();
        promesa.promesaLecturaJSON('Base de Datos/Celular.json');
    }
    if (answers.opcionesIniciales === 'Salir') {
        console.log('Gracias por usar la aplicación');
    }
});
