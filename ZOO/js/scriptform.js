
window.addEventListener("load", function(){
    let formPago=document.querySelectorAll("input[name='fPago']");
    console.log(formPago);
    let divFormTC=document.querySelector("#formTC");
    let divFormPP=document.querySelector("#formPP");
    let divFormB=document.querySelector("#formBizum");
  
  for (let i=0;i<2;i++){
  
  formPago[i].addEventListener("change",function(){
    console.log("entra");
  let divFormTC=document.querySelector("#formTC");
  divFormTC.style.display="block";
  let divForm=document.querySelector("#formPP");
  divForm.style.display="none";
  divFormB.style.display="none";
  
  })
  }
  
    formPago[2].addEventListener("change",function(){
    divFormTC.style.display="none";
    divFormPP.style.display="block"
    divFormB.style.display="none"
  
  })
    formPago[3].addEventListener("change", function(){
        divFormTC.style.display="none";
        divFormB.style.display="block";
        divFormPP.style.display="none";
    })
  
  })