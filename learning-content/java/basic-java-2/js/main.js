
/* Timer! */ 
function countdown() {
    // Get the number of seconds from the input field
    var seconds = document.getElementById("seconds").value;

    // Convert the input to a number and validate it
    if (isNaN(seconds) || seconds < 1) {
        alert("Please enter a valid number greater than 0.");
        return;
    }

    // Get the timer paragraph element
    var timerElement = document.getElementById("timer");

    function tick() {
        // Update the timer display
        timerElement.innerHTML = seconds;

        // Decrease the seconds
        seconds--;

        // If countdown reaches zero, alert the user and clear the timer text
        if (seconds < 0) {
            alert("Time's up!");
            timerElement.innerHTML = "";
        } else {
            setTimeout(tick, 1000);
        }
    }

    // Start the countdown
    tick();
}

/* Coin Flip */
function flipCoin() {
    let coin = Math.floor(Math.random() * 2) + 1; // 1 or 2 - Math.floor rounds down to the nearest whole number.
                                                 // Math.random() generates a random number between 0 and 1. example .038
                                                 // +1 is because we want to start at 1 not 0.  

    let resultElement = document.getElementById("result");
    let selectedOption = document.getElementById("coin").value;

    if ((coin === 1 && selectedOption === "Heads") || (coin === 2 && selectedOption === "Tails")) {
        resultElement.innerHTML = "You win!";
    } else {
        resultElement.innerHTML = "You lose!";
    }
}

function resetCoinFlip() {
    document.getElementById("result").innerHTML = "";
    document.getElementById("coin").selectedIndex = 0;
}


/*   NOT AUTOMATIC SLIDESHOW
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
*/





// AUTOMATIC SLIDESHOW
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 5000); // Change image every 2 seconds
}





/* SLIDESHOW WITH TWO GROUPS - I DONT REALLY KNOW 
let slideIndex = [1,1];
 //Class the members of each slideshow group with different CSS classes 
let slideId = ["mySlides1", "mySlides2"]
showSlides(1, 0);
showSlides(1, 1);

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
  let i;
  let x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {slideIndex[no] = 1}
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex[no]-1].style.display = "block";
}
*/