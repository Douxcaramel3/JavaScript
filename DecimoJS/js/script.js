/**
 Cuando la ventana o el documento sea leído, o ha cargado, invocamos un evento en la página
 
objeto.addEventListener("accion",funcion)
la función que debe invocar en esta estructura no lleva ()

window.addEventListener("load", function)
*/

window.addEventListener("load", function(){
    //Contenido de la función anónima al leer el documento
    console.log(document);
    //acceder a cada uno de los elementos
    const card2=this.document.getElementById("card-2");
    console.log(card2)
    const elements =this.document.getElementsByTagName("p");
    console.log(elements); 

    /**
     * convertir un htmlCollection en array para manipular
     * Existen dos maneras:
     *  1. let elements=[.....document.getElementsByTagName("p")];
     * 2. let elements=Array.from(document.getElementsByTagName("p"))
     */
    let elementsDiv=[...this.document.getElementsByTagName("div")];
    console.log(elementsDiv);
    let elementsParrafo=Array.from(this.document.getElementsByTagName("p"));
    console.log(elementsParrafo);
    let primerP=elementsParrafo[0];
    primerP.style.background="lightseagreen";
    //acceder a los elementos siguiendo un evento
    primerP.addEventListener("click",function(){
        primerP.style.backgroundColor="lightblue";
    });
    let segundoP=elementsParrafo[1];
    /**
     Una función anónima, es decir, funcion() se puede también utilizar de la siguiente manera:
     ()=>{
        ...instrucciones
     }
     */
    segundoP.addEventListener("click",()=>{
        //Vamos a llamar la función random y sustituir el valor dentro de */
        let colorRed=random(255);
        let colorGreen=random(255);
        let colorBlue=random(255);
        let colorFondo="rgba("+colorRed+","+colorGreen+","+colorBlue+",0.5)";
        console.log(colorFondo);
        this.document.body.style.backgroundColor=colorFondo;
    });

/**
Cambiar color el título de la caja 3 si pulsa clic sobre el título
 */

let encabezados=Array.from(this.document.getElementsByClassName("titulo"));
console.log(encabezados);

let titulo3=encabezados[2];
titulo3.addEventListener("click", ()=>{
    let colorRed=random(255);
    let colorGreen=random(255);
    let colorBlue=random(255);
let colorFondo="rgba("+colorRed+","+colorGreen+","+colorBlue+")";
console.log(colorFondo);
titulo3.style.color=colorFondo;
});



//Cambiar el color de todos los encabezados
let titulo4=encabezados[3];
titulo4.addEventListener("click",()=>{
    encabezados.forEach(cambiarColor); //for each... para cada uno
});
function cambiarColor(item,index){
    console.log(item); //cada uno de los elementos que componen los arrays.
    console.log(index); // el array.. la enumeración de 0 a .... / no podemos poner index.style.color porque sería 0 y daría error.
    item.style.color="purple";
}
//Cambiar la letra a cursiva de los parrafos cuando pulses clic en el tercer parrafo

let parrafo3=elementsParrafo[2];
parrafo3.addEventListener("click",()=>{
    elementsParrafo.forEach(cambiarLetra)

});

let div5=elementsDiv[5];
div5.addEventListener("mouseover",()=>{
    div5.style.opacity="0.5";
})
div5.addEventListener("mouseout",()=>{
    div5.style.opacity="1";
})

/**
 Agregar una imagen, y hacer lo mismo que el div5
 */

 let img=elementsDiv[6];
 img.addEventListener("mouseover",()=>{
    img.style.opacity="0.5";
 })

 img.addEventListener("mouseout",()=>{
    img.style.opacity="1";
 })


});

function cambiarLetra(item,index){
    item.style.fontStyle="italic";
}

function random(numero){
    let result=Math.floor(Math.random()*(numero+1));
    return result;
}


