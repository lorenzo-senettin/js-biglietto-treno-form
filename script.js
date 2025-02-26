const pricePerKm = 0.21;

function generaBiglietto() {
  // Recupera i valori dal form
  const nome = document.getElementById("nome").value;
  const cognome = document.getElementById("cognome").value;
  const km = parseFloat(document.getElementById("km").value);
  const anni = parseInt(document.getElementById("anni").value);
}

// Calcola il costo base
let costo = km * pricePerKm;
let tipoBiglietto = "Standard";

// Applica sconti e determina il tipo di biglietto
if (anni < 18) {
  costo *= 0.8; // sconto del 20%
  tipoBiglietto = "Ridotto";
} else if (anni > 65) {
  costo *= 0.6; // sconto del 40%
  tipoBiglietto = "Per anziani";
}

// Formattazione del costo a due decimali
costo = costo.toFixed(2);

