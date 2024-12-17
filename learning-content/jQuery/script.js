$(document).ready(function(){

    //The shineLoop function uses the chaining technique to utilize multiple animate 
    //event methods in the same function.
    function shineLoop(){
        $(".shine").animate({backgroundPositionX: '1600px'}, 3000)
        .animate({backgroundPositionX: '-800px'}, 3000);
    };

    //setInterval will repeat the shineLoop function and 0 sets the delayed amount
    //of time between each repeat.
    setInterval(shineLoop, 0);
})