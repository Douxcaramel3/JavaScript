const tarifasEnvio = {
    "localidad": 2,
    "provincia": 5,
    "comAutonoma": 8,
    "balearesCanarias": 16,
    "ceutaMelilla":18,
    "restoEspaña":12,
    "europa":20,
    "restoMundo":25,
              
};

const precioPeso = {
    "peso1": 2.88,
    "peso2": 4.75,
    "peso3": 6.49,
    "peso4": 9.39,
}

function calcularEnvio() {
const destino = document.getElementById("destino").value;
const peso = document.getElementById("peso").value;



  // Verificar si el destino existe 
const resultadoElement = document.getElementById("resultado");
if (!tarifasEnvio.hasOwnProperty(destino)) {
    resultadoElement.textContent = "El destino no está disponible, consulte con la agencia";
    return;
  }

  // Verificar que el peso sea correcto
  if (!precioPeso.hasOwnProperty(peso)){
    resultadoElement.textContent="Elija un precio correcto"
    return;
  }

  // Calcular el coste total del envío
  const costeTotal = tarifasEnvio[destino] + precioPeso[peso];

  resultadoElement.textContent = `El coste total de su envío es de €${costeTotal.toFixed(2)}`;
}