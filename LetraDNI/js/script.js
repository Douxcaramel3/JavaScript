function calculoLdni(){
    let letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
    let numero=document.getElementById("dni").value;
    console.log(numero);
    let calLetra=numero%23;
    let letra=letras[calLetra];
    console.log(letra);
    document.getElementById("resultado").innerHTML= numero+"-"+letra;
}

