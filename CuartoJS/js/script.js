/**
 * Estructuras de control de flujo
 * 
 * Bucle for: La estructura for permite realizar repeticiones for (inicialización; condición; incremento)
 */

for(let i=0;i<10;i++){
    console.log(i);
}
console.log("salida del bucle");

/** 
 * La idea del funcionamiento de un bucle for es la siguiente: "mientras la condición indicada se siga cumpliendo, repite la ejecución de las instrucciones definidas dentro del for. Además, después de cada repetición, actualiza el valor de las variables que se utilizan en la condición".
 */

//ejemplo de un bucle con los diferentes <hX> de HTML.
function salidaH(){
    for (let i=1;i<=6;i++){
        document.write("<h"+i+">"+ "Encabezado de nivel " +i+ "</h "+i+">");
    }
}

/**
 EJERCICIO
 El factorial de un número entero n es una operación matemática que consiste en multiplicar todos los factores n x (n-1) x (n-2) x ... x 1. Así, el factorial de 5 (escrito como 5!) es igual a 5! = 5 x
 4 x 3 x 2 x 1 = 120
 Utilizando la estructura for, crear un script que calcule el factorial de un número entero
 */

 function calFact(){
    let numero=document.getElementById("numero").value;
    //borrar el contenido de esos selectores
    document.getElementById("msnError").innerHTML="";  
    document.getElementById("resultadoFact").innerHTML="";

    console.log(numero);
    //estructura condición
    if (isNaN(numero)){ //Si no es un numero
        //ha cometido error al introducir el numero
     let msnError="Indica un número, no letras!!";
    document.getElementById("msnError").innerHTML=msnError;   
    
}else{
    //hacemos el bucle factorial
    let resultado=1; //se inicializa en 1
    //bucle
    for(let i=1; i<=numero; i++){
        resultado *= i; // resultado=resultado* i;
    }
    document.getElementById("resultadoFact").innerHTML=resultado;
    }
 }

 /**
  * Una estructura de control derivada de for es la estructura for...in. Su definición exacta implica el uso de objetos, que es un elemento de programación avanzada.
  * Estructura for... in adaptada a su uso en ARRAYS
  */