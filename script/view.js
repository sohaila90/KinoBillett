updateView();

function updateView() {
    app.innerHTML = /*html*/`
    <h1>Billettpriser Kinobillett</h1>
   <h3>Skriv inn din alder for å se priser</h3> 
   <input onchange="writeAge(this.value)" type="text">
   <button onclick="ageBtn()">Sjekk</button>
   <h3>${message}</h3>
   
   `;
}