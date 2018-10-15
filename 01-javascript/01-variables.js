// Int edad = 10; TIPADO
//

//NO TIPADO ES JS

var edad = 10; //number
var edadString = "10"; //string
var sueldo = 1.123; //number
var casado = false; //bolean
var hijos = null; //object
var dato; //undefined
var fechaNacimiento  = new Date()

var jossue = {
    "nombre":"Jossue",
    'segundoNombre':'Andrés',
    apellidoPaterno: `Dután`,
    apellidoMaterno: 'Salas',
    edad: 22,
    casado: false,
    hijos: null,
    mascotas: {
        nombre: "Cachetes"
    }
}

edad = "10" //cast

console.log("Hola mundo")

console.log("Edad",typeof edad)
console.log("EdadString",typeof edadString)
console.log("Sueldo",typeof sueldo)
console.log("Casado",typeof casado)
console.log("Hijos",typeof hijos)
console.log("Dato",typeof dato)
console.log("Fecha de Nacimiento",typeof fechaNacimiento);

console.log(jossue.nombre);
console.log(jossue.mascotas); //JSON de mascotas
console.log(jossue.mascotas.nombre); //nombre de la mascota
console.log(jossue); //imprime el JSON

delete jossue.hijos; //borrar una propiedad al objeto JSON
jossue.hija = {
    nombre: 'Elune'
};
console.log(jossue) //añadir una propiedad nueva
console.log(jossue.abuelo)//undefined undefined.nombre = error

if(true){
    console.log("sí")
}else {
    console.log("no")
}

//Truthy: cualquier números menos 0, strings, un objeto cualquiera, nueva instancia
//Falsy: string vacío, null, undefined  





