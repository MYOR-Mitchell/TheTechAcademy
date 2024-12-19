// Single ojbect
const strawHat = {
    name: "Monkey D. Luffy",
    role: "Captain",
    bounty: "3,000,000,000 Berries"
};

// Array of objects
const crew = [
    { name: "Monkey D. Luffy", role: "Captain", bounty: "3,000,000,000 Berries" },
    { name: "Roronoa Zoro", role: "Swordsman", bounty: "1,111,000,000 Berries" },
    { name: "Nami", role: "Navigator", bounty: "366,000,000 Berries" },
    { name: "Usopp", role: "Sniper", bounty: "500,000,000 Berries" },
    { name: "Sanji", role: "Cook", bounty: "1,032,000,000 Berries" },
    { name: "Tony Tony Chopper", role: "Doctor", bounty: "1,000 Berries" },
    { name: "Nico Robin", role: "Archaeologist", bounty: "930,000,000 Berries" },
    { name: "Franky", role: "Shipwright", bounty: "394,000,000 Berries" },
    { name: "Brook", role: "Musician", bounty: "383,000,000 Berries" },
    { name: "Jinbe", role: "Helmsman", bounty: "1,100,000,000 Berries" }
];

let i = 0;

// Event listener to cycle through the crew array and display each member
document.getElementById("show").addEventListener("click", function () {
    const display = document.getElementById("members");

    // Display the current crew member
    display.innerHTML = `  
        Name: ${crew[i].name}<br>
        Role: ${crew[i].role}<br>
        Bounty: ${crew[i].bounty}<br><hr>
    `;

    i++; // Increment to the next crew member

    // Reset `i` if we've reached the end of the array
    if (i === crew.length) {
        i = 0;
        display.innerHTML = ""; // Clear the display when resetting
    }
});

