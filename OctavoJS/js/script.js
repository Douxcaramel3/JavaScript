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



// EJERCICIO DE EXAMEN

//primero, declaramos el iva como una constante y global
const iva2=1.21;
let valor

/*1º función es llamada desde html y enviada
a. validar el dato indroducido (2ª función)
a.1. sie el dato es incorrecto, envia mensaje de error.
a.2. si el dato es correcto, envía el dato a la 3º1 función calcularprecio, que mostrará el resultado del cálculo*/

function calcular(){
    let peso=document.getElementById("peso").value;
    validarDatos(peso);
    if(validarDatos(peso)){
        calcularPeso(peso);
    }
}

function validarDatos(peso){
    if(isNaN(peso)){
        document.getElementById("resultado").innerHTML="Por favor, escriba el peso en números"
        }else{
            return true;
        }
    }

    function calcularPeso(peso){
        if (peso<=1){
            valor=(11.82*iva2).toFixed(2);
        }
    
        if(peso>1 && peso<=5){
            valor=(14.59*iva2).toFixed(2);
        }
    
        if(peso>5 && peso<=10){
            valor=(19.09*iva2).toFixed(2);
        }
    
        if(peso>10 && peso<=15){
            valor=(22.73*iva2).toFixed(2);
        }
    
        if(peso>15 && peso<=20){
            valor=(27.69*iva2).toFixed(2);
        }
    
        if(peso>20 && peso<=25){
            valor=(32.77*iva2).toFixed(2);
        }
    
        if(peso>25 && peso<=30){
            valor=(37.73*iva2).toFixed(2);
        }

        if(peso>30){
        document.getElementById("resultado").innerHTML="Debe consultar con la oficina";
        }else{
     document.getElementById("resultado").innerHTML="El precio final es " + valor+ "€";
    }
    }