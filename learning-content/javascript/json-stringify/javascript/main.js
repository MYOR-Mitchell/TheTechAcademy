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

// Event listener to display crew members as JSON strings
document.getElementById("show").addEventListener("click", function () {
    const display = document.getElementById("members");

    // Use JSON.stringify to convert the current crew member to a JSON string
    const crewMemberJSON = JSON.stringify(crew[i], null, 2); // `null, 2` for pretty formatting

    // Display the JSON string in a <pre> tag for formatting
    display.innerHTML = `
        <pre>${crewMemberJSON}</pre>
        <hr>
    `;

    i++; // Increment to the next crew member

    // Reset `i` if we've reached the end of the array
    if (i === crew.length) {
        i = 0;
        display.innerHTML = ""; // Clear the display when resetting to the first member
    }
});







// A basic example of JSON.stringify()

// Example 1: Convert a single object to JSON
const exampleObject = {
    name: "Tony Tony Chopper",
    role: "Doctor",
    bounty: "1,000 Berries"
};

const objectJSON = JSON.stringify(exampleObject);
console.log(objectJSON); // Output: {"name":"Tony Tony Chopper","role":"Doctor","bounty":"1,000 Berries"}

// Example 2: Convert an array of objects to JSON
const exampleArray = [
    { name: "Nico Robin", role: "Archaeologist", bounty: "930,000,000 Berries" },
    { name: "Franky", role: "Shipwright", bounty: "394,000,000 Berries" }
];

const arrayJSON = JSON.stringify(exampleArray);
console.log(arrayJSON); 
// Output: [{"name":"Nico Robin","role":"Archaeologist","bounty":"930,000,000 Berries"},{"name":"Franky","role":"Shipwright","bounty":"394,000,000 Berries"}]

// Example 3: Pretty-printing with formatting
const prettyJSON = JSON.stringify(exampleArray, null, 2);
console.log(prettyJSON);
/* Output:
[
  {
    "name": "Nico Robin",
    "role": "Archaeologist",
    "bounty": "930,000,000 Berries"
  },
  {
    "name": "Franky",
    "role": "Shipwright",
    "bounty": "394,000,000 Berries"
  }
]
*/