
window.addEventListener("load",function(){
  const d=new Date();
  this.document.querySelector("#fecha").innerHTML=d.getDate() + "/" + (d.getMonth()+1)+"/"+d.getFullYear(); 
  this.document.querySelector("#hora").innerHTML=d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();

})

let arrayImg=new Array(4); //declarando que este array va a tener 4 elementos
  arrayImg[0]=new Image(); // 
  arrayImg[0].src="img/lion (5).jpg";
  arrayImg[1]=new Image(); // 
  arrayImg[1].src="img/lion (2).jpg";
  arrayImg[2]=new Image(); // 
  arrayImg[2].src="img/lion (3).jpg";
  arrayImg[3]=new Image(); // 
  arrayImg[3].src="img/lion (4).jpg";
  

  //declaramos un contador que lleve la cuenta de las imagenes que se van mostrando y comienza en 1 y terminará en 4
let contador=0;

  function cambiarImagen(){
   document.querySelector("#banner").src=arrayImg[contador].src;
   contador++;
   //operador ternario
   contador=contador==4?contador=0:contador;
   console.log("despues del ternario: " + contador);
   setTimeout("cambiarImagen()", 5000); //recursividad, se llama a si mismo y vuelve a cargar la función cada cinco segundos.
  }

function validarFormulario(){
  //instrucciones para validar
  alert("validando....")
}
  window.addEventListener("load",()=>{
//son las funciones que voy a llamar cuando la página cargue
let boton=document.querySelector("#boton");
boton.addEventListener("click", validarFormulario);
cambiarImagen();

  })
