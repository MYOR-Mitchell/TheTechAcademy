

//Displays 1 - 10
function count_To_Ten() {
    var Digit = "";
    var X = 1;
    while (X < 11) {
        if (X == 10)
        {
            Digit += X + ".";
            X++;
        }
        else
        {
            Digit += X + ", ";
            X++;
        }
    }
    document.getElementById("Counting_to_Ten").innerHTML = Digit;
}

//Each click is adds 1 to the count
var Clicked = 0;

function count_per_click() {
    Clicked++;
    document.getElementById("Count_up").innerHTML = Clicked;
}


//for loop of some sort for class
var people = ["John", "Paul", "George", "Ringo", "Pete", "Stuart", "Brian"];

function for_loop() {
    people.sort();

    var output = "";
    for(var i = 0; i < people.length; i++)
    {
        output += (i + 1) + ".) " + people[i] + "&emsp;";
    }
    document.getElementById("people").innerHTML = output;
}

//random input to grab someone
function specific_person() {
    var index = document.getElementById("person_number").value;
    document.getElementById("person").innerHTML = people[index - 1];
}

//return a string
function myFunction(name) {
  return "Hello " + name;
}
document.getElementById("demo").innerHTML = myFunction("John");

//Create object
let car = { 
    make: "Dodge ",
    model: "Viper ", 
    year: "2021", 
    color: "red", 
    description: function() { 
        return "The car is a" + this.year + this.color + this.make + this.model; 
        } 
    }; 
document.getElementById("Car_Object").innerHTML = car.description(); //<p id="Car_Object"></p>

//switch statement
function Color_Function() {
    var Color_Output;
    var Colors = document.getElementById("Color_Input").value;
    var Color_String = " is a great color!";
    switch(Colors) {
        case "Red":
            Color_Output = "Red" + Color_String;
            break;
        case "Yellow":
            Color_Output = "Yellow" + Color_String;
            break;
        case "Green":
            Color_Output = "Green" + Color_String;
            break;
        case "Blue":
            Color_Output = "Blue" + Color_String;
            break;
        case "Pink":
            Color_Output = "Pink" + Color_String;
            break;
        case "Purple":
            Color_Output = "Purple" + Color_String;
            break;
        default:
            Color_Output = "Please enter a color exactly as written on the above list.";
    }
    document.getElementById("Output").innerHTML = Color_Output;
}

//for data- attributes
function showInfo(element) {
    // Get the values of the custom data attributes
    const character = element.getAttribute("data-character");
    const crew = element.getAttribute("data-crew");
  
    // Display them
    alert(`${character} is part of the ${crew}.`);
  }