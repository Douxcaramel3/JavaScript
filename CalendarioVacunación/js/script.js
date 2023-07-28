window.addEventListener("load",()=>{

    let seleccion=document.querySelector(".edad");
    let msn="";

    seleccion.addEventListener("change", ()=>{
        let valorSeleccion=seleccion.value;
        

     switch(valorSeleccion){
            case "2meses":{
                document.querySelector("#msn").innerHTML="HB: Vacuna frente a hepatitis B <br>DTPa: Vacuna frente a difteria, tétanos y tosferina acelular de alta carga antigénica <br> VPI: Vacuna frente a poliomielitis <br> Hib: Vacuna frente a enfermedad por haemophilus infl uenzae b <br> VNC: Vacuna conjugada frente a enfermedad neumocócica <br> Men B: Vacuna conjugada frente a enfermedad meningocócica por serogrupo B";
               break;
            }
            case "4meses":{
                document.querySelector("#msn").innerHTML="HB: Vacuna frente a hepatitis B <br>DTPa: Vacuna frente a difteria, tétanos y tosferina acelular de alta carga antigénica <br>VPI: Vacuna frente a poliomielitis <br> Hib: Vacuna frente a enfermedad por haemophilus infl uenzae b <br> VNC: Vacuna conjugada frente a enfermedad neumocócica <br> Men C: Vacuna conjugada frente a enfermedad meningocócica por serogrupo C <br> Men B: Vacuna conjugada frente a enfermedad meningocócica por serogrupo B";
               break;
            }
            case "11meses":{
                document.querySelector("#msn").innerHTML="HB: Vacuna frente a hepatitis B <br>DTPa: Vacuna frente a difteria, tétanos y tosferina acelular de alta carga antigénica <br>VPI: Vacuna frente a poliomielitis <br> Hib: Vacuna frente a enfermedad por haemophilus infl uenzae b <br> VNC: Vacuna conjugada frente a enfermedad neumocócica";
                break;
            }
            case "12meses":{
                document.querySelector("#msn").innerHTML="Men C: Vacuna conjugada frente a enfermedad meningocócica por serogrupo <br> CMen B: Vacuna conjugada frente a enfermedad meningocócica por serogrupo B <br> SRP: Vacuna frente a sarampión, rubeola y parotiditis (triple vírica)";
                break;
            }
            case "15meses":{
                document.querySelector("#msn").innerHTML="VVZ: Vacuna frente a varicela";
                break;
            }
            case "4anos":{
                document.querySelector("#msn").innerHTML="SRP: Vacuna frente a sarampión, rubeola y parotiditis (triple vírica)<br>VVZ: Vacuna frente a varicela";
                break;
            } 
            case "6anos":{
                document.querySelector("#msn").innerHTML="dTPa: Vacuna frente a difteria, tétanos y tosferina acelular de baja carga antigénica <br> VPI: Vacuna frente a poliomielitis";
                break;
            }
            case "12anos":{
                document.querySelector("#msn").innerHTML="Men ACWY: Vacuna conjugada frente a enfermedad meningocócica por serogrupos A, C, W e Y <br> VPH: Vacuna frente a virus del papiloma humano";
                break;
            }
            case "14anos":{
                document.querySelector("#msn").innerHTML="Td : Vacuna frente a tétanos y difteria";
                break;
            }
            default:{
                msn="Escoge una edad";
            }
        }
       
    })
})