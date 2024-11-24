let alertMessage = "I \"defeated\" you, Kara!";
let writeMessage = "This is the end of the game! " + "<br>" + "I messed up...";
let addSomething = (3 + 5);

function defeatKaraAlert() {
    window.alert(alertMessage);
}

function defeatKaraWrite() {
    document.write(writeMessage);
}

function defeatKaraAdd() {
    document.write(addSomething);
}

function addStuff(x, y) {
    document.write(x + y);
}

function multiplyButton(x, y) { //button click calls this function
    const result = x * y;       //multiply the two arguments and store in result

    // document.getElementByID("resul") -- Selects the <div> with id="result"
    // .innerHTML -- Changes the content of the result <div> to the value of result
    document.getElementById("result").innerHTML = `Result: ${result}`;  //Doesn't affect the page. 
                                                                        //Just calling the function on click opens a new page with the result.
}

const crew = {                      
    name: "Straw Hats",
    captain: "Monkey D. Luffy",
    swordsman: "Roronoa Zoro",
    navigator: "Nami",
    sniper: "Usopp",
    cook: "Sanji",
    doctor: "Tony Tony Chopper",
    archaeologist: "Nico Robin",
    shipwright: "Franky",
    musician: "Brook",
    helmsman: "Jinbe"   /* document.write(Crew.Helmsman); // Outputs: Jeremiah */
};




