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

//Otra manera de llamarlo ->escucha de evento
document.getElementById("boton1").onclick = function(){
    alert ("Hey Alerta Wey!");
}

//Paso de parametros a una función

function sumar2(){
    let x= parseInt(document.getElementById("numero1").value);
    let y= parseInt(document.getElementById("numero2").value);

    document.getElementById("suma2").innerHTML= "El valor de x es " + x + " El valor de y es " + y + " y la suma de estos dos valores es " + (x+y);
}

document.getElementById("suma").innerHTML=sumar(45,34)
function sumar(a,b){
    return a+b;
}

