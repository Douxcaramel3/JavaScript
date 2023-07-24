alert("Bienvenido! suscribete para tener más noticias")

window.addEventListener("load",function(){
  const d=new Date();
  this.document.querySelector("#fecha").innerHTML=d.getDate() + "/" + (d.getMonth()+1)+"/"+d.getFullYear(); 
  this.document.querySelector("#hora").innerHTML=d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
  
function openPage(pageName,elmnt,color) {

    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].style.backgroundColor = "";
    }
    document.getElementById(pageName).style.display = "block";
    elmnt.style.backgroundColor = color;
  }
})


