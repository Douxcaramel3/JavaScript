window.addEventListener("load",(e)=>{

   e.preventDefault(); //para evitar que se envíe el formulario
   let mensaje=document.querySelector("#mensaje");
   let msn="";

    let boton=document.querySelector(".boton");
// querySelector es solo para un elemento, si son más, sería querySelectorAll

    boton.addEventListener("click",()=>{ //una vez declarado el botón, hay que decirle que cuando escuche click tiene que hacer determinada función. 

    let nombre=document.querySelector("#nombre").value; //se pone almohadilla porque es el id que hemos cogido
    console.log(nombre);

    if (nombre=="" || nombre==null){
        msn="El nombre no puede estar en blanco" 
        // Este es el mensaje que hemos escogido para que nos muestre si no se rellena el nombre.
    }

    let pass=document.querySelector ("#pass").value;
    console.log(pass.length);

    if (pass.length<8 || pass.length>12){
        msn=msn+"\n El password no puede ser <8 dígitos y >12 digitos"; //Aquí le estamos diciendo que nos muestre los dos mensajes. El del nombre y el de la contraseña.
    }

    mensaje.innerHTML=msn;
    let inputs=document.querySelectorAll(".entrada");
    inputs.forEach(items=>{
    items.addEventListener("focus",()=>{
        mensaje.innerHTML=" ";
        msn="";
    }) 
    })

    })


})