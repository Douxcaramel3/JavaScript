alert("Bienvenido a Diser. Tenemos una nueva sección de noticias. Suscríbete!!");


window.addEventListener("load",function(){
    const d=new Date();
    this.document.querySelector("#fecha").innerHTML=d.getDate() + "-" + (d.getMonth()+1)+"-"+d.getFullYear(); 
    this.document.querySelector("#hora").innerHTML=d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
})

function bigImg(x) {
    x.style.height = "212px";
    x.style.width = "424px";
  }
  
  function normalImg(x) {
    x.style.height = "159px";
    x.style.width = "318px";
  }


