
// let userUnder3 = 3;
// let user3To12 = 12;
// let userOver12 = 13;
// let userInput = 0;
// let message = "";



// lag en skuff inni parentesen så du har et sted å lagre input
function writeAge(whatIsAge) {
userInput = whatIsAge;
}

function ageBtn() {
    // lag en if som spør hvis userinput er userunder3 så er billett gratis
    // for(let i = 0; i < userUnder3; i++)
    if(userInput <= userUnder3 ) {
    message = "Gratis billett";
    console.log('Gratis billett')

    }else if(userInput > user3To12) {
    message = "Billett koster 50kr";
    console.log('Billett 50kr')

    }else if(userInput > userOver12) {
    message = "Billett koser 100kr";
    console.log('Billett 100kr')

    }else {
    message = "Skriv inn riktig alder";
    console.log('hva er alder?')
    }
    updateView();
}


// **4. Kinobillett**
// Brukeren skriver inn alderen sin.
// - Hvis brukeren er under 3 år, er billetten gratis.
// - Hvis alderen er mellom 3 og 12 år, koster billetten 50 kr.
// - Hvis alderen er over 12 år, koster billetten 100 kr.
// Skriv ut hvor mye billetten koster.