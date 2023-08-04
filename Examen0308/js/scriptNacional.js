window.addEventListener("load", ()=>{
  let boton = document.getElementById("mostrarFoto");
boton.addEventListener("click", function() {
  let foto=document.querySelector(".foto");
  foto.style.display = "block";
  boton.style.display = "none";

});
})



