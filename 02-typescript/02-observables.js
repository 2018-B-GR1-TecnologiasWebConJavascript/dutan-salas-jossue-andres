// 02-observables.ts
const rxjs = require('rxjs');
const map = require('rxjs/operators').map;
const distinct = require('rxjs/operators').distinct;
const concat = require('rxjs/operators').concat;
const numeros$ = rxjs.of(1, "Adrian", 1, true, { nombre: "Adrian" }, [1, 2, 3], new Date()); //observable de cualquier cosa
console.log(numeros$);
numeros$
    .pipe(distinct(), //el orden importa
map((valorActual) => {
    return {
        data: valorActual
    };
}))
    .subscribe((ok) => {
    console.log('En ok', ok);
}, (error) => {
    console.log('En error', error);
}, () => {
    console.log('Completado');
});
const promesita = (correcto) => {
    return new Promise((resolve, reject) => {
        if (correcto) {
            resolve(':)');
        }
        else {
            reject(':(');
        }
    });
};
const promesita$ = rxjs.from(promesita(false));
/*
promesita$
    .subscribe(
        (ok) => {
            console.log('En promesita', ok)
        },
        (error) => {
            console.log('Error en promesita', error)
        },
        () => {
            console.log('Completado')
        },
    );
*/
numeros$
    .pipe(concat(promesita$))
    .pipe(distinct(), //el orden importa
map((valorActual) => {
    return {
        data: valorActual
    };
}))
    .subscribe((ok) => {
    console.log('En concat', ok);
}, (error) => {
    console.log('En error', error);
}, () => {
    console.log('Completado');
});
