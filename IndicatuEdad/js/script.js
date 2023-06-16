function calEdad(){
    document.getElementById("msnEdad").innerHTML=" ";
    document.getElementById("msnError").innerHTML=" ";

let nEdad=document.getElementById("edad").value;



let msnEdad="";
let msnError="";
console.log(nEdad)
if (nEdad=="" || nEdad<0 || nEdad>99){
    msnError="indique edad válida";
    document.getElementById("msnError").innerHTML=msnError;
    
}else if(nEdad<12){
    msnEdad="Aún eres un niño";
}else if(nEdad<25){
    msnEdad="Estás en la edad del pollo-pavo";
}else if (nEdad<=40){
    msnEdad="Eres un viejoven";
}else{
    msnEdad="Ciudate mucho! Ya vas en edad!";
}
document.getElementById("msnEdad").innerHTML=msnEdad;
}
