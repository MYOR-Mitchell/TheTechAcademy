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

function karaCheck(){
    var sentence = "Are you Kara? <br>";
    sentence += "...I don't trust you.";
    
    document.getElementById("result-kara").innerHTML = sentence;
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


// Create a JavaScript object (dictionary) containing Devil Fruits from One Piece.
const devilFruits = {
    "GomuGomuNoMi": "The Gomu Gomu no Mi is a Paramecia-type Devil Fruit that grants its user the properties of rubber, making the user a Rubber Human.",
    "MeraMeraNoMi": "The Mera Mera no Mi is a Logia-type Devil Fruit that allows its user to create, control, and transform into fire at will.",
    "HitoHitoNoMi": "The Hito Hito no Mi is a Zoan-type Devil Fruit that allows its user to transform into a human and gain human intelligence.",
    "YamiYamiNoMi": "The Yami Yami no Mi is a Logia-type Devil Fruit that allows its user to create, control, and transform into darkness."
};

// Function that displays Devil Fruit information when called.
function displayDevilFruitInfo() {
    // Choose a Devil Fruit to display. In this case, we're displaying Gomu Gomu no Mi.
    const fruitInfo = devilFruits["GomuGomuNoMi"];

    // Output the information using the innerHTML method.
    document.getElementById("Dictionary").innerHTML = fruitInfo;
}

function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}
