// 01-tipo-variables.js
let edad = 13;
edad = 25;
edad = 'nombre';
let variableLoca = '';
let nombre = 'Adrian';
//duck typing ->
// nombre = 12; explicitamente
let casado = false;
let adrian = {
    nombre: 'Adrian',
    apellido: 'Sarzosa'
};
let numeros = [1, 2, 3, 4];
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
function saludar(nombre, apellido, ...otrosNombres) {
    return '';
}
const respuestaSaludar = saludar('Vicente', 'Eguez', '', '', '', '');
// saludar(2); no vale porque es tipado
// saludar('a', 'b')
const saludo = (nombre) => 1;
console.log(respuestaSaludar);
class Usuario {
    constructor() {
    }
    saludar() {
        return 0 | 1;
    }
}
class UsuarioDummy {
}
const adrianINstancia = new Usuario();
const vicente = {
    nombre: 'Adrian',
    apellido: 'Vicente'
};
