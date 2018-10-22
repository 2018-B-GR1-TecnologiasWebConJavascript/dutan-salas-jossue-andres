if (1 === '1') { //con dos = 1 es a 1; con tres compara también el tipo.
    console.log('Es verdad')
} else {
    console.log('No es verdad')
}

if (0 == '') { //Falsy
    console.log('Es verdad')
} else {
    console.log('No es verdad')
}

//Operadores

const arreglo = ['A', 'b', 'C'];

const respuesta = arreglo.forEach(
    (valorActualIteracion, indice, arreglo) => {
        console.log('Valor:', valorActualIteracion);
        console.log('Índice:', indice);
        console.log('Arreglo:', arreglo);
    }
);

console.log(respuesta);
arreglo.forEach(v => console.log(v));

//Map -> Mutar el arreglo -> Cambiar -> Reaignar en nuevo arreglo

const respuestaMap = arreglo.map(
    valorActual => valorActual.toUpperCase()
);

console.log(respuestaMap);
console.log(arreglo);

//Filter

const arregloNumeros = [9, 1, 5, 6, 3, 2, 7, 8, 4, 10];

//recibe una expresión
const respuestaFilter = arregloNumeros
    .filter(n => n > 5)
    .map(n => n + 1);

console.log(respuestaFilter) //devuelve arreglo con el true

//FinIndex

const respuestaFindIndex = arregloNumeros
    .findIndex(v => v === 7);

console.log(respuestaFindIndex); //se usa para objetos
console.log(arregloNumeros.indexOf(7));

//find

const respuestaFind = arregloNumeros
    .find(v => v === 7);

console.log(respuestaFind);

//some

const respuestaSome = arregloNumeros
    .some(n => n % 7 === 0);

console.log(respuestaSome); //múltiplo de 7

//every

const respuestaEvery = arregloNumeros
    .every(n => n < 5);

console.log(respuestaEvery); //si alguno no cumple

//reduce

const respuestaReduce = arregloNumeros
    .reduce(
        (valorActualOperacion, valorActualArreglo) => {
            return valorActualOperacion + valorActualArreglo //suma como en un contador
        },
        0
    );

console.log(respuestaReduce);

const respuestaReduce2 = arregloNumeros
    .reduce((a, b) => a - b, 100);

console.log(respuestaReduce2);