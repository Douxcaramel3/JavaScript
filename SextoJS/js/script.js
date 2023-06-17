/**
 * Bucles While
 * 
 * while (evalua una condición y se repite mientras esta condición sea true)
 * 
 *  //bloque de código
 * 
 Ejemplo: mostrar en consola los numeros del 1 al 15

 Cuando se trabaja con numeros u otro elemento tenemos que evaluar o buscar la manera que salga del bucle si no se quedaría en bucle infinito

 */

 function primerWhile(){
 let num=0;
 while (num<=15){
    console.log(num);
    // si no se incrementa el valor del num el bucle nunca terminará.
    num++;
    }

let interruptor=false;

while(!interruptor){
    console.log(interruptor);
    let a="Maria", b="Juan";
    // si no cambio el valor de interruptor a true, nunca terminará
    if(a !=b){
        interruptor=true;
        console.log(interruptor);
    }
}
}


function arraysWhile(){
//declaramos una constante tipo array de marcaCoches
const cars=["BMW", "Volvo", "Saab", "Ford"];
//indice que nos va a permitir salir del bucle
let i=0;
//texto que mostrará con todos los valores según vaya recorriendo el bucle
let text=""; // inicializa la variable text en blanco o vacía

while (cars[i]){
    text += cars[i] +" ";
    console.log(text);
    i++;
}
}

function cadenasWhile(){

let text2='';
while (text2==''){
    text2=prompt("Escribe un nombre");
    console.log(text2);

}

alert("Salio del bucle!");
}


//Ejercicio: Lee un número hasta que sea par, sino sigue leyendo!

function numeroParWhile(){
let num;
while (num % 2 != 0){
    num=parseInt(prompt("Escribe un número"));
    console.log(num);
}
alert("Perfecto!");
}

/*
Bucle do while: hacer mientras....

Es igual a while, con la diferencia de que siempre se ejecuta al menos 1 vez
Do{
    Bloque de instrucciones...
}while(condición);

Ejemplo:Pedimos al usuario que escriba el nombre "Maria" y mientras no lo haga lo vuelve a pedir

*/ 

function nombreDoWhile(){
    let nombre="";
    do{
        nombre=prompt("Teclear letra mágica");
    }while(nombre!="Maria");
    alert("Has acertado!!");
}

function numeroDoWhile(){
    let text=1;
    let i=1;
    do{
        text +=" The number is " +i;
        i++;
        console.log(text);
    }while(i < text);
    console.log("salio del bucle");
}


