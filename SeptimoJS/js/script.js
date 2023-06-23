/*
Concepto básico de funciones o métodos:

Una función JavaScript es un bloque de código diseñado para realizar una tarea particular.
Una función JavaScript se ejecuta cuando "algo" lo invoca (lo llama).

Las funciones pueden ser propias, como por ejemplo: 
 function  guardarNombre(){
    .... bloque de instrucciones
 }

 Para que se ejecute ese bloque de instrucciones, la función tiene que ser invocada, ya sea en un javascript o desde el HTML

 guardarNombre();
 o desde html.... onclick="guardarNombre()"

También existen funciones propias del lenguaje, que nos realizan algunas tareas de manera automática.

Ejemplo: Funciones útiles para cadenas de texto
*/ 

//Función para conocer la longitud de una cadena, incluyendo los espacios
let cadena1=" Hola, como estais todos hoy?"
let nLetras=cadena1.length;
console.log(nLetras);

//Función que concatena
let cadena2=" Bien, gracias!"
let cadena=cadena1.concat(cadena2); // es lo mismo que: cadena 1+cadena2
console.log(cadena);

//Concatenar en un bucle
for (let i=1; i<cadena1.length; i++){
    cadena+=cadena1;
}
console.log(cadena);

//Funcion para pasar a mayúsculas una cadena de texto
cadena1=cadena1.toUpperCase();
console.log(cadena1);

//Función para convertir una cadena a minúsculas
cadena1=cadena1.toLowerCase(); 
//toLocaleLowerCase-> se refiere a idioma o configuración local, pero el resultado suele ser el mismo que toLowerCase

console.log(cadena1);

//Función para obtener el carácter que se encuentra en la posición indicada
let letra=cadena1.charAt(0); //retorna h
console.log(letra);

//Función indexOf(letra) calcula la posición en la que se encuentra la letra indicada, siempre mostrará la primera posición
let posicion=cadena1.indexOf('a')
console.log(posicion);

//lastIndexOf calcula la última posición del caracter indicado.
//OJO!! tanto indexOf como lastIndexOf devuelven -1 si no encuentran ese caracter.
posicion=cadena1.lastIndexOf('a');
console.log(posicion);

/*
IMPORTANTE:

La función lastIndexOf() comienza su busqueda desde el final de la cadena hacia el principio, aunque la posición devuelta es la correcta empezando a contar desde el principio de la palabra
*/

//Función para extraer de una cadena
/* Substring (inicio, final), extrae una porción de una cadena de texto. El segundo parámetro es opcional. Si sólo se indica el parámetro inicio, la función devuelve la parte de la cadena correspondiente desde esa posición hasta el final*/
let subcadena1=cadena1.substring(7,11);
console.log(subcadena1);

/**
 * Cuando se indica el inicio y el final, se devuelve la parte de la cadena original comprendida entra la posición inicial y la inmediatamente anterior a la posición final (es decir, la posición inicio está incluida y la posición final no):
 */

/*Otro ejemplo, si se le pasa la posición inicial mayor a la final, se asume que es la posición menor desde donde comienza y la mayor donde termina*/
subcadena1=cadena1.substring(11,7);
console.log(subcadena1);

/**
 * Convertir una cadena a un array con la función split. Se debe indicar el caracter separador
 */
let cadena3="Los alumnos son 15 y son muy listos";
let arrayCadena3=cadena3.split(" ");
console.log(arrayCadena3);
console.log(arrayCadena3[1]);

/**
 * Con split también se puede extraer todas las letras de una cadena indicando el separador vacío ""
 */
let array2Cadena3=cadena3.split("");
console.log(array2Cadena3);

//FUNCIONES UTILES PARA ARRAYS

//Conocer la longitud de un array

let myArray=[1,2,3,4,5,6,7,8,9];
//explicación en la línea 150
let mycopiaArray=myArray; //con una asignacion =
console.log(mycopiaArray);
let numElementos=myArray.length;
console.log(numElementos);

// Función para unir o concatenar dos arrays
let array3=array2Cadena3.concat(myArray);
console.log(array3);

//funcion join que es lo inverso a split en las cadenas, convierte un Array en una cadena
let deArrayAcadena=arrayCadena3.join(" ");
console.log(deArrayAcadena);
let myArrayAcadena=myArray.join("-");
console.log(myArrayAcadena);

/**
 * Función pop(), elimina el último elemento del array lo devuelve. El array original se modifica y su longitud disminuye en 1 elemento.
 */
let ultimo=myArray.pop();
console.log(ultimo);
console.log(myArray);

/**
 * Funcion push(), añade un elemento al final del array. El array original se modifica y aumenta su longitud en 1 elemento. (También es posible añadir más de un elemento a la vez)
 */
myArray.push(9);
console.log(myArray);

/**
 * Función shift(), elimina el primer elemento del array y lo devuelve. El array original se ve modificado y su longitud disminuida en 1 elemento. 
 */

let primero=myArray.shift();
console.log(primero);
console.log(myArray);

/**
 * Función unshift(), añade un elemento al principio del array. El array original se modifica y aumenta su longitud en 1 elemento. (También es posible añadir más de un elemento a la vez)
 */

let otroValor=5;
myArray.unshift(otroValor);
console.log(myArray);

/**
 * Función reverse(), modifica un array colocando sus elementos en el orden inverso a su posición original.
 */
myArray.reverse();
console.log(myArray);

/**
 * Es usual realizar operaciones con arrays, si es necesario para el flujo del programa que el array original se mantenga, debemos realizar una copia del array, porque esto métodos modifican directamente el array.
 */
/**
 * FUNCIONES CON NÚMERO
 */
/**
 * Función NaN, (del inglés, "Not a Number") JavaScript emplea el valor NaN para indicar un valor numérico no definido (por ejemplo, la división 0/0)
 */

let numero1=10,numero2=5;
let operacion=numero1/numero2;
console.log(numero1/numero2); //NaN

if(isNaN(operacion)){
    console.log("resultado indefinido");
}else{
    console.log("El resultado es ->"+ numero1/numero2);
}

if (operacion!=NaN){
    console.log("resultado indefinido");
}else{
    console.log(numero1/numero2);
}

/**
 * Numeros infinitos
 */
let numero3=0
console.log(numero1/numero3);

/**
 * Si necesitamos limitar los decimales y redondearlos, utilizaremos la función toFixed
 */

let decimales=35982.35948962;
console.log(decimales.toFixed(3));
console.log(decimales.toFixed(2));
console.log(decimales.toFixed(4));
console.log(decimales.toFixed()); // sale sin decimales y redondeado.

//Ejercicio: lee un número decimal y devuelvelo convertido el . en ,
function cambiar(){
let numero=document.getElementById("numero").value;
console.log(numero);
let elementos=numero.split(".");
console.log(elementos);
//concatenado
let cadenaNumero= elementos[0] + ","+elementos[1];
// con el metodo join
let cadenaNumero2=elementos.join(",");
console.log(cadenaNumero);
console.log(cadenaNumero2);
document.getElementById("numeroDev").innerHTML=cadenaNumero;
}