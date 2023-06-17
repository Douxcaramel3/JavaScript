/**
 * if-else -> También existe otra estructura de control de flujo switch-case
 * Su función es: según el parametro o valor que contenga, puede realizar una serie de opciones
 * Ej:
 * switch(expresión) {
 * case x:
 * // code block
 * break; // para salir del switch y no seguir evaluando los siguientes casos case y:
 * // code block
 * break;
 * default:
 * // code block
 * }
 * 
 Así es como funciona:

 La expresión de cambio te evalúa un vez
 El valor de la expresión se compara con los valores de cada caso.
 Si hay una coincidencia, se ejecuta el bloque de codigo asociado
 Si no hay ayuda coincidencia, se ejecuta el bloque de codigo
 * 
 */


 //Ejemplo sencillo
 let dia=7
 console.log (dia);
 let diaS;
 switch (dia){
    case 1:
        diaS="Lunes";
        break;
    case 2:
        diaS="Martes";
        break;
    case 3:
        diaS="Miercoles";
        break;
    case 4:
        diaS="Jueves";
        break;
    case 5:
        diaS="Viernes";
        break;
    case 6,7:
        diaS="Fin de semana";
        break;
    
    default:
        diaS="Este día no existe";
 }

document.getElementById("dia").innerHTML=diaS;

/**
 * Ejercicio
 * 
 * De la base de la puntuación numérica de los alumos indicamos que del 0 al 4 -> Insuficiente
 *       0 al 4 -> Suspenso
 *       5 al 6 -> Bien
 *       7 al 8 -> Notable
 *       9 al 10 ->Sobresaliente
 *
 */

function calNota(){
    

let nota=parseInt(document.getElementById("examen").value);

console.log(nota);
let msnNotas;

switch (nota){
    case 0:
        case 1:
            case 2:
                case 3:
                    case 4:
        msnNotas="Suspenso";
        break;
    case 5:
        case 6:
        msnNotas="Bien";
        break;
    case 7:
        case 8:
        msnNotas="Notable";
        break;
    case 9:
        case 10:
        msnNotas="Sobresaliente";
        break;
    default:
        msnNotas="Lo siento, no tienes nota";

}
document.getElementById("nota").innerHTML=msnNotas;
}

/**
 * for (let i=1; i<); i++)
 * 
 * Ejercicio: Mostrar en consola los numeros del 1 al 20 de mayor a menor
 * 
 * for (let i=20; i>0; i--)
 * 
 */

for (let i=20; i>0; i=i-2){
    console.log(i);
}

// bucle for each--> 

function cambiarColor(){
let colores=["blue","green","yellow","pink","orange","purple"]
let indice=parseInt(document.getElementById("numero").value);
--indice;

for (let i=0; i<colores.length; i++){

 if(i==indice){
//cambiar el color a el div caja
document.getElementById("caja").style.backgroundColor=colores[i];
document.getElementById("dia").style.color=colores[i];

}
}
// recorrer el array con for of... for
for(let i of colores){
    //recorremos todos los elementos del array
    document.getElementById("caja2").style.backgroundColor=i;
    
    document.getElementById("caja2").style.transition="width 2s, height 2s, transform 2s"
    document.getElementById("caja2").style.transform="rotate(180deg)";
}
/**
 transition-property: width;
 transition-duration: 2s;
 transition-property:height;
 transition-delay: 2s;
 */
}



