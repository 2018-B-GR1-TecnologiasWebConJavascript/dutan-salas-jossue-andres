//app.js (main)

const version = require('./version.js');
const numProcesadores = require('./numero-procesadores');
const calculadora = require('./calculadora-simple');
const versionNode = require('./version-node/version-node')
const sinUso = require('../../01-variables')

console.log(version)
console.log(versionNode)
console.log(numProcesadores)

console.log(calculadora.sumar(1,7))
console.log(calculadora.restar(1,7))
console.log(calculadora.multiplicar(1,7))
console.log(calculadora.dividir(1,7))

