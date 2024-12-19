// Single Object Example
const singleCrewMember = { name: "Monkey D. Luffy", role: "Captain", bounty: "3,000,000,000 Berries" };

// Save the object as a JSON string in localStorage
localStorage.setItem("singleCrewMember", JSON.stringify(singleCrewMember));

// Retrieve and parse the object from localStorage
const retrievedMember = JSON.parse(localStorage.getItem("singleCrewMember"));

// Display the object properties
document.getElementById("singleObject").innerHTML = 
    `Name: ${retrievedMember.name}, Role: ${retrievedMember.role}, Bounty: ${retrievedMember.bounty}`;

// Array Example
const crew = [
    { name: "Monkey D. Luffy", role: "Captain", bounty: "3,000,000,000 Berries" },
    { name: "Roronoa Zoro", role: "Swordsman", bounty: "1,111,000,000 Berries" },
    { name: "Nami", role: "Navigator", bounty: "366,000,000 Berries" }
];

// Save the array as a JSON string in localStorage
localStorage.setItem("crewArray", JSON.stringify(crew));

// Retrieve and parse the array from localStorage
const retrievedCrew = JSON.parse(localStorage.getItem("crewArray"));

// Display the array as a list
document.getElementById("arrayExample").innerHTML = retrievedCrew.map(member =>
    `Name: ${member.name}, Role: ${member.role}, Bounty: ${member.bounty}<br>`).join('');