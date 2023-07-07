/**
 * Funciones en JavaScript
 * 
 * Es un bloque de código definida con un nombre, que puede ser invocada desde el mismo JavaScript o desde el documento HTML.
 * 
 */

function sumar(){
    let a=5, b=3;
    let suma= a+b;
    return suma; // retorna un valor
}

console.log(sumar()); //recibimos el resultado de la operacion en la función

/** Otro ejemplo donde los valores de a y b no están definidas */

function sumar2(){
    let suma=a+b;
    return suma;
}


// la declaración de a y b tienen ámbito local, y solo tiene valor en la función sumar()
//tenemos que declarar las variables a y b, por ejemplo con ambito global (global es cuando está fuera de una función)

let a=12,b=15;
console.log(sumar2());

//funcion con argumentos o valores que recibe

function multiplicar(primerN,segundoN){
    return primerN*segundoN;
}
//se tiene que pasar los argumentos que necesita para realizar la operación
console.log(multiplicar(25,3));
console.log(multiplicar(10,15));

/**
 * 
 *El orden de los argumentos es fundamental, ya que el primer dato que se indica en la llamada, será el primer valor que espera la función; el segundo valor indicado en la llamada, es el segundo valor que espera la función y así sucesivamente
 */

function dividir(primerN,segundoN){
    return segundoN/primerN; // 0/5 //
}
console.log(dividir(5,0));

/*
Ejercicio 1: Calcula el precio + iva de los siguientes productos: 
leche=0.76
agua=1.05
cereales=2.35
mermelada=1.96

Teniendo en cuenta que el IVA es el 4%

*/

function calcularIva(productos){
    let iva=1.04
    return productos*iva
}
console.log (calcularIva(0.76).toFixed(2)); //para que se redondee
console.log (calcularIva(1.05).toFixed(2));
console.log (calcularIva(2.35).toFixed(2));
console.log (calcularIva(1.96).toFixed(2));

// Se puede almacenar el resultado de una función en una variable
// Se reemplaza los valores de a y b con el resultado de las funciones llamadas
a=multiplicar(4,85);
console.log("a=" + a);
b=dividir(64,32);
console.log("b=" + b);

let r3=sumar2();
console.log(r3);

