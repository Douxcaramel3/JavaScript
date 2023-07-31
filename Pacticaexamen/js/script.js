const tarifasEnvio = {
        'Andalucía': 0.23,
        'Aragón': 0.36,
        'Asturias':0.39,
        'Baleares':0.55,
        'Canarias': 0.80,
        'Cantabria': 0.50,
        'Castilla-La Mancha': 0.25,
        'Castilla y León': 0.30,
        'Cataluña':0.4,
        'Comunidad Valenciana': 0.35,
        'Extremadura': 0.4,
        'Galicia': 0.45,
        'La Rioja': 0.5,
        'Madrid': 0.1,
        'Murcia': 0.3,
        'Navarra': 0.45,
        'País Vasco': 0.55,
        'Ceuta o Melilla': 0.75,
        'Internacional': 1.00,
        /*Este es el precio por kg, por lo que conforme vayan subiendo los kg irá subiendo el precio*/

};

function calcularEnvio() {
    const destino = document.getElementById("destino").value;
    const peso = parseFloat(document.getElementById("peso").value);
  
      // Verificar si el destino existe en el objeto tarifasEnvio
    const resultadoElement = document.getElementById("resultado");
    if (!tarifasEnvio.hasOwnProperty(destino)) {
        resultadoElement.textContent = "El destino no está disponible para envío";
        return;
      }
    
      // Verificar que el peso sea un número positivo
      if (isNaN(peso) || peso <= 0) {
        resultadoElement.textContent = "El peso debe ser un número positivo";
        return;
      }
    
      // Calcular el costo total del envío
      const costeKilogramo = tarifasEnvio[destino];
      const costeTotal = costeKilogramo * peso;
    
      resultadoElement.textContent = `El coste total de envío a ${destino} para un peso de ${peso} kg es €${costeTotal.toFixed(2)}`;
    }
    
    
    
    