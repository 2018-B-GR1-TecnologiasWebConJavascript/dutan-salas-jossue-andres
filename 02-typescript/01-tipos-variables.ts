// 01-tipo-variables.js

let edad: number | string = 13;
edad = 25;
edad = 'nombre';

let variableLoca: any = '';

let nombre = 'Adrian';
//duck typing ->
// nombre = 12; explicitamente

let casado = false;

let adrian: { //Interface
    nombre: string;
    apellido?: string;
} = { //JSON
    nombre: 'Adrian',
    apellido: 'Sarzosa'
};
let numeros: number[] = [1, 2, 3, 4];

let fechaNacimiento = Date();

//  let promesa:Promise = new Promise(()=>{});

/*
let promesa2: Promise<number> = () => {
    return new Promise(
        (resolve) =>{
            resolve(1);
        }
    )
}
*/

// edad = 'nombre'; //no se puede asignar a un string
console.log(adrian); //undefined

function saludar(
    nombre:string,
    apellido?:string,
    ...otrosNombres:string[]
):any
{
    return ''
}

const respuestaSaludar = <string> saludar('Vicente', 'Eguez', '','','','');
// saludar(2); no vale porque es tipado
// saludar('a', 'b')

const saludo = (nombre:string):number => 1;

console.log(respuestaSaludar);

class Usuario {
    public edad:string;
    nombre; //public any

    constructor(){

    }

    saludar():number{
        return 0 | 1
    }
}

interface UsuarioInterface{
    nombre:string;
    apellido?:string;
}

class UsuarioDummy{
    nombre:string;
    apellido?:string;
}

const adrianINstancia = new Usuario();

const vicente:UsuarioDummy = {
    nombre:'Adrian',
    apellido: 'Vicente'
}