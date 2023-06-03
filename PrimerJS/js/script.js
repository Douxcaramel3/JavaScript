//comentarios de línea

/*
Comentarios de bloque
*/
alert("Hola Mundo de Desarrollo Web");

//acceder a los elementos por id del html
//1. Crear una variable -> un lugar en memoria donde se almacena un valor
//  1.1 Declarar la variable indicando un nombre - (debe empezar por letras, no números (puede contenerlos), no caracteres especiales)
//      Debe ser en minúscula o tipo camello - nombreDelUsuario
//      no debe contener espacios (no-> nombre del Usuario)
//      Se puede utilizar barra baja_ tanto en el comienzo como en el contenido del nombre, una buena práctica es comenzar con letras o con $

let nombre="Maria Perez";// las comillas indican que es una cadena de caracteres

let parrafo=document.getElementById("parrafo"); //declaramos una variable llamada parrafo que se enlaza con el id del HTML

parrafo.innerHTML=nombre;
//le indicamos a esa variable qfue inserte el valor de la otra variable nombre
console.log(nombre);
//console.log -> es una instruccion que se muestra en la consola del navegador (pantalla);

document.getElementById("demo").innerHTML = "Hello JavaScript";

//variables tipo entero 
let numero1=45;
let numero2=25;
let suma=45+25;
console.log(suma);
let apellido=" Ruiz";
nombre=nombre+apellido; //concatenar cadenas de caracteres
console.log(nombre);
document.getElementById("nuevoNombre").innerHTML=nombre;
//caracteristicas de JavaScript ... no declaras el tipo de dato

numero1="uno";
suma=numero1+" "+numero2;
console.log(suma); //es una manera de visualizar una salida en javascript

//crear mi primera función-> una serie de instrucciones que se ejecutarán cuando sea llamada
function mostrarAlerta(){
    alert("Hola Chicos");
    document.getElementById("parrafo2").innerHTML= "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam quibusdam odio hic voluptate quam! Delectus, recusandae, consequuntur quibusdam debitis atque, itaque optio eveniet quae rerum consequatur explicabo non? Consectetur, atque!";
}
//la anterior función muestra una alerta e inserta un parrafo en el lugar dode se identifica id=parrafo2


//Otra manera de llamarlo ->escucha de evento
document.getElementById("boton1").onclick = function(){
    alert ("Hey Alerta Wey!");
}


//Paso de parametros a una función

function sumar2(){
    //leemos del formulario los valores que se ingresen. casting-> cambiar de un tipo a otro.... caracteres->numeros
    let x= parseInt(document.getElementById("numero1").value);
    let y= parseInt(document.getElementById("numero2").value);

    document.getElementById("suma2").innerHTML= "El valor de x es " + x + " El valor de y es " + y + " y la suma de estos dos valores es " + (x+y);
}

//pase de parametros
document.getElementById("suma").innerHTML=sumar(45,34)
function sumar(a,b){
    return a+b;
}

//existe otra manera de declarar las variables <2015

var nombreAlumno="Rosa Huertas";
console.log(nombreAlumno);

//diferencia entre var y let
//1.Se puede volver a declarar la misma variable
var nombreAlumno="José Martinez";
console.log(nombreAlumno);

//ejemplo con let
let nombrePadre="Miguel García";
console.log(nombrePadre);
//no se puede declarar de nuevo una variable con lete en el mimo bloque de código

function otroNombre(){
    let nombrePadre="Gonzalo León";
    console.log("Dentro de la función->"+nombrePadre);
}
otroNombre(); //llamamos la función para que se ejecute
console.log("Fuera de la función->"+nombrePadre);
//en la declaracion de la variables se puede declarar una o más variables en la misma línea

let nombreMadre="Sofía Luna",nombreNino="Fiona Martinez",colegio="Cervantes;"

//las variables no estás obigado a declararlas, pero es importante y buena práctica
edad="15"
console.log(edad);
precio=5.8; //decimal+
edad=18;//reemplaza el valor
nombreMadre="Rosa Díaz";//le asigno a la variale nombreMadre el valor de Rosa Díaz
console.log(nombreMadre);
//Lo que guarda en una variable
//   tipos->números (5,4, 5.97, etc)
//        cadena de caracteres ("El nombre es")
//        booleanos (true,false)

let miBooleano=true; //on off- 0/1
//las cadenas de caracteres existe la limitante de utilizar "" dentro de una cadena
//para ellos existen caracteres de escape en cadenas de texto
let cadena="esta es una cadena \"muy importante\" de javaScript";
console.log(cadena);

//puedes combinar las dobles comillas con las comillas simples

let cadena2='esta es la segunda cadena "muy importante"';
console.log(cadena2);
cadena="esta es una cadena 'muy importante' de javaScript";
console.log(cadena);

//salto de linea con caracteres de escape \n
cadena="esta es una cadena 'muy importante' \n de javaScript";
console.log(cadena);
/**Operadores Matemáticos
  + - * /->operaciones básicas
  % ->módulo o resto de dos números
 */

  x=10;
  y=2;
  let modulo=10%2; //da como resultado el resto de la división
  console.log("El módulo entre 10/2 es" + modulo );
  let operacion=(x+2)*2 - (y/3);
  console.log(operacion);