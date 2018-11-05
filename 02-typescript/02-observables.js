const rxjs = require('rxjs');
const numeros$ = rxjs.of(1, 2, 3, 4, 5, 6); //observable de números
console.log(numeros$);
numeros$
    .subscribe((ok) => {
    console.log('En ok', ok);
}, (error) => {
    console.log('En error', error);
}, () => {
    console.log('Completado');
});
