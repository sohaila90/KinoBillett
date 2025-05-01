updateView();

function updateView() {
    app.innerHTML = /*html*/`
    <h1>Billettpriser Kinobillett</h1>
    <p>Hvis brukeren er under 3 år, er billetten gratis.</p>
    <p>Hvis alderen er mellom 3 og 12 år, koster billetten 50 kr.</p>
    <p>Hvis alderen er over 12 år, koster billetten 100 kr.</p>
   <h3>Skriv inn din alder for å se priser</h3> 
   <input onchange="writeAge(this.value)" type="text">
   <button onclick="ageBtn()">Sjekk</button>
   <h3>${message}</h3>
   
   `;
}