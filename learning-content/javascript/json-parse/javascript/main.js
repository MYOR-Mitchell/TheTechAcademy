// Simulated raw JSON string (as if received from an API or external source)
const rawJSON = `[
    { "name": "Monkey D. Luffy", "role": "Captain", "bounty": "3,000,000,000 Berries" },
    { "name": "Roronoa Zoro", "role": "Swordsman", "bounty": "1,111,000,000 Berries" },
    { "name": "Nami", "role": "Navigator", "bounty": "366,000,000 Berries" },
    { "name": "Usopp", "role": "Sniper", "bounty": "500,000,000 Berries" },
    { "name": "Sanji", "role": "Cook", "bounty": "1,032,000,000 Berries" },
    { "name": "Tony Tony Chopper", "role": "Doctor", "bounty": "1,000 Berries" },
    { "name": "Nico Robin", "role": "Archaeologist", "bounty": "930,000,000 Berries" },
    { "name": "Franky", "role": "Shipwright", "bounty": "394,000,000 Berries" },
    { "name": "Brook", "role": "Musician", "bounty": "383,000,000 Berries" },
    { "name": "Jinbe", "role": "Helmsman", "bounty": "1,100,000,000 Berries" }
]`;

// Parse the JSON string into a JavaScript object
const crew = JSON.parse(rawJSON);

let i = 0; 

// Event listener to display parsed crew members
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

