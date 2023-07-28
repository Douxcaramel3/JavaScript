
//Variables globales: pueden ser leídas por todas las funciones
let mensajeError=document.querySelector("#mensaje");
let msn=""; //las cadenas de mensajes de errores

window.addEventListener("load",()=>{
let seleccion=document.querySelector("#formCto");

let divTel=document.querySelector(".telOculto");
let divEmail=document.querySelector(".emailOculto");
let divCorreo=document.querySelector(".correoOculto");

seleccion.addEventListener("change", ()=>{
    let valorSeleccion=seleccion.value;

    switch(valorSeleccion){
        case "telefono":{
            divTel.style.display="block";
            divCorreo.style.display="none";
            divEmail.style.display="none";
            break;
        }
        case "email":{
            divEmail.style.display="block";
            divCorreo.style.display="none";
            divTel.style.display="none";
            break;
        }
        case "correo":{
            divCorreo.style.display="block";
            divEmail.style.display="none";
            divTel.style.display="none";
            break;

        }
        default:{
            divCorreo.style.display="none";
            divEmail.style.display="none";
            divTel.style.display="none";
        }
    }

})

//Leer el resto de formulario
let boton=document.querySelector("#boton");

boton.addEventListener("click", ()=>{

let nombre=document.querySelector("#fname");
let apellido=document.querySelector("#lname");
let mensaje=document.querySelector("#subject");
console.log(nombre + " " + apellido + " " + mensaje);
validarNombre(nombre);
validarApellido(apellido);


let telefono=document.querySelector("#telefono");
let email=document.querySelector("#email");
let direccion=document.querySelector("#direccion");
validarForCto (telefono,email,direccion);

//Quitar el rojo de error cuando pulsas clic en un tipo input
let inputs=document.querySelectorAll(".entrada");
inputs.forEach(items=>{
    items.addEventListener("focus",()=>{
        items.style.background="#fff";
        items.style.borderColor="#000";
    })
})

})


})

function validarNombre(nombre){
    if(nombre.value==null || nombre.value=="" || nombre.value==" "){
    msn="Indique un nombre válido";
    nombre.style.background="pink";
    nombre.style.borderColor="red";
    nombre.setAttribute("placeholder","Escribe bien tu nombre....")
    }
}

function validarApellido(apellido){
    if(apellido.value==null || apellido.value=="" || apellido.value==" "){
        msn="Indique un apellido válido";
        apellido.style.background="pink";
        apellido.style.borderColor="red";
        apellido.setAttribute("placeholder","Escribe bien tu apellido....")
        }
}

function validarForCto(telefono,email,direccion){
    if(telefono.value=="" || email.value=="" || direccion.value==""){
        let seleccion=document.querySelector("#formCto");
       seleccion.style.background="pink";
        seleccion.style.borderColor="red";
        }

}