window.addEventListener("load",function(){
const d=new Date();
this.document.querySelector("#fecha").innerHTML=d.getDate() + "-" + (d.getMonth()+1)+"-"+d.getFullYear(); 
this.document.querySelector("#hora").innerHTML=d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();

let fNacimiento=new Date(1990,0,21,6,21,5);
this.document.querySelector("#fNaci").innerHTML=fNacimiento;
this.document.querySelector("#fCorta").innerHTML=fNacimiento.toLocaleDateString("es-es") + " " + fNacimiento.getHours();


/**
Existe en la programación dos palabras en ingles que representa la acción que hará el método:
    - get -> Recupera o muestra el valor
    - set -> Asigna

 */

fNacimiento.setFullYear(2011);
this.document.querySelector("#fCorta2").innerHTML=fNacimiento.toLocaleDateString("es-es") + " " + fNacimiento.getHours();

// Operaciones con fechas

let beaM= new Date("1998-7-3");
let beaL= new Date("1992-5-8");

if (beaM<beaL){
    console.log("La mayor es Bea Mena")
}else{
    console.log("La mayor es Bea López")
}

console.log(beaL.getFullYear()+67);

//Primero calcular edad actual
//edad Jubilacion 67
let hoy=new Date();
let edadActualBeaL=hoy.getFullYear()-beaL.getFullYear();
console.log(edadActualBeaL); //31
//Segundo sumarle
let edadJubBeaL=67-edadActualBeaL;
console.log(edadJubBeaL); //36
let fechaJubile=hoy.getFullYear()+edadJubBeaL;
console.log(fechaJubile); //2059

let boton=this.document.querySelector("#boton");
boton.addEventListener("click",function(){
    let fechaInp=document.querySelector("#fechaInp").value;
    console.log(fechaInp);
    console.log(typeof(fechaInp));
    let fechaForm=new Date(fechaInp);
    console.log(fechaForm.toLocaleDateString());
    
// let fechaInp=new Date(document.querySelector("#fechaInp").value); ojo -->aquí solo se utiliza una sola variable.
// console.log(fechaInp.toLocaleDateString());

});

});