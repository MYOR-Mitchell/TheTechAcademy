
// Define the ages array
var ages = [18, 25, 32, 36, 40];

// Arrow function to check if age is greater than or equal to 28
const checkAge = (age) => age >= 28;

// Function to handle the button click and display the result
function myAge() {
    // Check if any age in the array is greater than or equal to 28
    const result = ages.some(checkAge);

    // Update the HTML content of the 'displayAge' div
    document.getElementById("displayAge").innerHTML = result;
}

//COULD NOT MAKE THIS WORK WITHOUT CREATING A NEW JS FILE...
//Figure out why... =(