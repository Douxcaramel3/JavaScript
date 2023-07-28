function calcularIMC() {
    let peso=parseFloat(document.getElementById("peso").value);
    let altura=parseFloat(document.getElementById("altura").value);

  
    // Calcular el IMC (IMC = peso / (altura * altura))
    let imc=peso / (altura * altura);
  
    let resultadoDiv=document.getElementById("resultado");
    resultadoDiv.innerHTML="Su IMC es: " + imc.toFixed(2);

        let msnIMC="";

 if (isNaN(peso) || isNaN(altura)) {
      alert("Inserte peso y altura válidos");
    }
      
        if (imc<18.5){
        msnIMC="Estás extremadamente delgada";
        }else if (imc<24.9 && imc>18.6){
        msnIMC="Tienes un peso normal";
        }else if (imc<29.9 && imc>24.5){
        msnIMC="Tienes sobrepeso";
        }else if (imc<=30 && imc>24.6){
        msnIMC="Necesitas adelgazar!";
        }
        document.getElementById("msnIMC").innerHTML=msnIMC;
    }
