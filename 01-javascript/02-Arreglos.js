var arreglo = [];

arreglo = [
    1, "Jossue", false, null, new Date(), {nombre: "Dután"}, [1, 2, true], undefined,
];

//acceso
console.log(arreglo[3]);

//añadir y borrar
var arregloNumeros = [1, 2, 3];

arregloNumeros.push(4);

console.log(arregloNumeros);

arregloNumeros.pop();

console.log(arregloNumeros);


//splice borrar

arregloNumeros.splice(0, 2); //posicion 0, borrar 2 elementos

console.log(arregloNumeros);

//splice agregar

arregloNumeros.splice(2, 0, 4, 5, 6, 7, 8, 9, 10); //posicion 2, insertar 4,5...

console.log(arregloNumeros);

//borrar 6 con indexOf

var indiceNumSeis = arregloNumeros.indexOf(6); //la primera ocurrencia
arregloNumeros.splice(indiceNumSeis, 1);
console.log(arregloNumeros);

//slice sección

var arregloUno = arregloNumeros.slice(0,3); //no está incluido el índice 3
console.log(arregloUno)

var arregloDos = arregloNumeros.slice(3,8); //
console.log(arregloDos)

var arregloUnoDos = [1,2];
var arregloSeis = [6]

//[1,2,3,..,10]
// Destructuración

console.log(...arregloUnoDos);
console.log(1,2);

var arregloTotal = [...arregloUnoDos,...arregloUno,...arregloSeis,...arregloDos];
console.log(arregloTotal);

//agregar nuevos números

var arregloSiguientesNumeros = [11,12,13,14,15]
arregloTotal.splice(arregloTotal.length,0,...arregloSiguientesNumeros);
console.log(arregloTotal);

//Destructuración de Objetos...

var vicente = {
    nombre: "Vicente",
    apellido: "Eguez"
};
var eguez = {
    sueldo: 1.10
};
var adrian = {
    edad: 20,
    casado: false,
    hijos: null,
    mascota: {
        nombre: "Cachetes"
    }
};
var vicenteAdrianEguez = {
    ...vicente,
    ...adrian,
    ...eguez,
    sueldo:2.01
};
console.log(vicenteAdrianEguez);
