/*
Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve como resultado una cadena de texto que indica si el número es par o impar. Mostrar por pantalla el resultado devuelto por la función 
*/

function leerDato(){
    let numero=document.getElementById("numero").value;
    if(validarDato(numero)){
        if (numero%2==0){
            document.getElementById("resultado").innerHTML="El número es par";
        }else{
            document.getElementById("resultado").innerHTML="El número es impar";
        }
    }
}

//los parametros o atributos que se pasan a una función, NO tienen porque llamarse igual que en la función origen.

function validarDato(dato){
    if(isNaN(dato) || dato=="" || dato.includes(" ")){ //estas funciones son importantes para validar un numero, si esta vacio y si incluye espacios o si no es un número.
        document.getElementById("resultado").innerHTML="Indique un número, no letras, sin espacios!";
    }else{
        return true;
    }
}

/* Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento. A partir de la cadena que se le pasa, la función determina si esa cadena está formada sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas. 
*/

function leerTexto(){
    let texto=document.getElementById("texto").value;
    if(isNaN(texto) && texto!=""){
        validarTexto(texto);
    }else{
        document.getElementById("resultadoTexto").innerHTML="Escribe una cadena, sólo letras!";
    }
}

function validarTexto(texto){
    if(texto==texto.toUpperCase()){
        document.getElementById("resultadoTexto").innerHTML="El texto está en mayúscula!-> " + texto.toUpperCase();
    }else if(texto==texto.toLowerCase()){
        document.getElementById("resultadoTexto").innerHTML="El texto está en minúscula!-> " + texto.toLowerCase();
    }else 
    {
    document.getElementById("resultadoTexto").innerHTML="El texto está en mayúscula y minúscula";
    }
}

/*
Definir una función que determine si la cadena de texto se le pasa como parámetro es un palíndromo, es decir, si se lee de la misma forma desde la izquierda y desde la derecha. Ejemplo de palíndormo complejo: "La ruta nos aportó otro paso natural"
*/

function leerPalindromo(){
    let palindromo=document.getElementById("palindromo").value;
    let texto;
    let texto1;
    if (isNaN(palindromo)){
        texto="PALINDROMA"
        texto1="La frase "
    }else{
        texto="CAPICUA"
        texto1="El número "
    }
if(palindromo!=""){
    if (validarPalindromo(palindromo)){
        document.getElementById("resultadoPalindromo").innerHTML=texto1 + palindromo + " es " + texto;
    }else{
        document.getElementById("resultadoPalindromo").innerHTML=texto1 + palindromo + " NO es " + texto;
    }
}else{
        document.getElementById("resultadoPalindromo").innerHTML="Indica una frase o palabra válida";
    }

}

function validarPalindromo(texto){
    //pasar todo a minúscula y eliminar los espacios en blanco
    let cadenaOriginal=texto.toLowerCase().replaceAll(" ","");
    
    //convertir la cadena en array separado por letras
    let letrasEspacios=cadenaOriginal.split("");
    //convertir la cadena en un array separado por letras e invertido
    let letrasReves=cadenaOriginal.split("").reverse();
    console.log(letrasEspacios);
    console.log(letrasReves);
    //creamos el array en cadena
    let cadena1=letrasEspacios.join("");
    let cadena2=letrasReves.join("");
    //comparamos las dos cadenas
    if(cadena1==cadena2){
        return true;
    }else{
        return false;
    }
   

}

