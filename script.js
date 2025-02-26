// La funzione viene chiamata quando l'utente clicca sul bottone
function calcolaPrezzo() {
  const distance = parseFloat(document.getElementById("km").value);
  const age = parseInt(document.getElementById("eta").value);

  // Costo del biglietto per ogni chilometro [espresso in euro]
  const price_distance = 0.21;

  // Calcola il prezzo del biglietto in base ai chilometri
  let price = distance * price_distance;

  // Calcola il prezzo del biglietto con variazioni di prezzo
  if (age < 18) { // Prezzo per persone con meno di 18 anni
    price *= 0.8;
  }
  if (age > 65) { // Prezzo per persone con più di 65 anni
    price *= 0.6;
  }

  // Calcolare il prezzo finale e stamparlo nella console
  const final_price = price.toFixed(2);
  console.log("Il prezzo del biglietto è: €" + final_price);
}
