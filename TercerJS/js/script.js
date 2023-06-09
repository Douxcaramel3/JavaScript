/**
 * 
 * Matrices o vectores --> arrays (arreglos)
 */

/** La declaración de variables aisladas como por ejemplo los días de la semana */

let dia1="Lunes";
let dia2="Martes";

/**Aunque la declaración anterior es correcta, es mas eficiente cuando tenemos una colección de datos que guardan relación, crear Arrays 
 * 
 * sintaxis de un array
 * let nombre_array=[valor1, valor2, .... valores]
*/

let dias=["Lunes","Martes","Miércoles","Jueves","Viernes","Sábado","Domingo"];

/**
 * Aspectos importantes para el uso de Array
 * 1. Cada elemento tiene un indice
 * 2. Los indices comienzan en 0
 * 3. Para acceder a un elemento lo tenemos que llamar con el nombre del array y su indice-> 
 * dias[0]-> Lunes
 * 4. Puedo conocer el numero de elementos de un Array
 * 
 */

document.getElementById("dia0").innerHTML=dias[0];
document.getElementById("misalida2").innerHTML=dias[6];

/** Ejercicio: Realiza un array con los meses del año y muestra por pantalla al menos 3 meses de verano */

let meses=["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre", "Diciembre"];

document.getElementById("mesverano").innerHTML=meses[5] + " - " + meses[6]+ " - " + meses [7];

/**
 * A partir del siguiente array que se proporciona:
 */

let valores=[true, 5, false, "hola", "adios", 2];
 /**
  * Determina cual de los dos elementos numericos es mayor
  * Utilizando exclusivamente los dos valores booleanos del array, determinar los operadores necesarios para obtener un resultado true y otro false
  * Determinar el resultado de las cinco operaciones matemáticas realizadas con los dos elementos numéricos.
  * 
  */

 let resultado1=valores[1]>valores[5]?"El valor del índice 1 es mayor":"El valor del índice 5 es mayor";

 // Operadores ternarios
 document.getElementById("resultado1").innerHTML=resultado1;

 //resultado true
 let resultado2=valores[0] || valores[2];

 //true || false->true
 document.getElementById("resultado2").innerHTML=resultado2;

 //resultado true
 let resultado3=valores[0] && valores[2];

 //true || false->true
 document.getElementById("resultado3").innerHTML=resultado3;

//ejercicio 3

let suma=valores[1]+valores[5];
document.getElementById("suma").innerHTML=suma; 

let resta=valores[1]-valores[5];
document.getElementById("resta").innerHTML=resta;

let multi=valores[1]*valores[5];
document.getElementById("multi").innerHTML=multi;

let div=valores[1]/valores[5];
document.getElementById("div").innerHTML=div;

let mod=valores[1]%valores[5];
document.getElementById("mod").innerHTML=mod;


/** CONDICIONAL IF-ELSE */
let edad=18
if(edad>=18) //Condición
{
    //grupo de instrucciónes
    ++edad;
    let cumple="El año que viene tendras " + edad; 
    let mensaje="ya puedes ir a la Disco";
    document.getElementById("mensajes").innerHTML=cumple + " años y " + mensaje;

}else //si no se cumple la condición
{ 
    let mensajes="Espera un poco"
    document.getElementById("mensajes").innerHTML=mensajes;
}

let mostrar=true;

if (mostrar){ //mostrar=verdadero
    document.getElementById("mostrado").innerHTML="Entro al if porque mostrado es verdadero";
}else{
    document.getElementById("mostrado").innerHTML="NO entro al if, sino al Else porque mostrado es falso";
}

//Cuando necesitamos evaluar la negacion de un booleano(True/false) utilizamos el simbolo ! antes de la variable


if (!mostrar){ //mostrar=false
    document.getElementById("mostrado2").innerHTML="Entro al if porque mostrado es falso";
}else{
    document.getElementById("mostrado2").innerHTML="NO entro al if, sino al Else porque mostrado es verdadero";
}

/** EJERCICIO DE CLASE (CONDICIONALES)
 * let numero1=5;
 * let numero2=8;
 * if(...){
 * alert ("numero1 no es mayor que numero2");
 * }
 * if(...){
 * alert ("numero2 es positivo");
 * }
 * if(...){
 * alert ("numero1 es negativo o distinto de cero");
 * }
 * if(...){
 * alert ("incrementar en 1 unidad el valor de numero 1 no lo hace mayor o igual que el numero 2");
 * }
 */


let numero1=5
let numero2=8

if(numero1<numero2)
{
    document.getElementById("numero1").innerHTML= "numero1 no es mayor que numero2";
}

if(numero2>=0)
{
    document.getElementById("positivo").innerHTML="numero2 es positivo"
}

if(numero1!=0 || numero1<0)
{
    document.getElementById("menor").innerHTML="numero1 es negativo o distinto de cero"
}

if(++numero1<=numero2)
{
    document.getElementById("grande").innerHTML="incrementar en 1 unidad el valor de numero 1 no lo hace mayor o igual que el numero 2";
}


/** Existe la opcion de anidar if - else - if - else */
/** EJEMPLO */
/** si eres <12 eres pequeño, si eres <19 eres adolescente, si eres <35 sigues siendo joven, sino...."Cuidate mucho" */

let nEdad=33

let msnEdad;
if(nEdad<12){
    msnEdad="Todavia eres muy pequeño";
}else if(nEdad<19){
    msnEdad="Eres un adolescente";
}else if (nEdad<35){
    msnEdad="Todavía eres joven!!!";
}else{
    msnEdad="Ciudate mucho!"
}
document.getElementById("msnEdad").innerHTML=msnEdad;