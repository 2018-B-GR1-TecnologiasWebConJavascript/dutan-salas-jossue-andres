//JS copia las definiciones y las copia arriba.
holaMundo(); //se puede ejecutar la función antes de ser declaradas.

function holaMundo() {
    console.log("Hola mundo");
}

console.log(holaMundo()) // undefined

function sumarDosNumeros(numUno, numDos) {
    var numeroUnoValido = typeof numUno == 'number'; //validar
    var numeroDosValido = typeof numDos == 'number';
    if(numeroUnoValido && numeroDosValido){
        return numUno + numDos;
    }else {
        return 0;
    }
}

console.log(sumarDosNumeros(1,2)); //3
console.log(sumarDosNumeros(true,0,undefined,null,"asd",6)); //1

function sumarNNumeros(...numeros) {
    var resultado = calcularResultadoSumaDeNumeros(numeros);
    if (resultado.esValido){
        return suma;
    }else{
        return 0;
    }
}

function calcularResultadoSumaDeNumeros(numeros){
    var suma = 0;
    var todosLosNumerosValidos = true;
    for (var i = 0; i < numeros.length; i++){
        var numeroEsValido = typeof numeros[i] == 'number';
        if(numeroEsValido){
            suma = suma + numeros[i];
        }else {
            todosLosNumerosValidos = false;
            break;
        }
    }
    var resultado = {
        suma: suma,
        esValido: todosLosNumerosValidos
    };
    return resultado
}

console.log(sumarNNumeros(true,0,1,2));

