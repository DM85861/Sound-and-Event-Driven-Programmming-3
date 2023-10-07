//Dennis Morgan 9 27 23 Global Variables


var change = 60;
var imgMotionX = 100;
var imgMotionY = 410;

function motionStart() 
{
    var image = document.getElementById("img");
    movingpicID = setInterval(function() {
        
        change += imgMotionX;
        var changeY = change + imgMotionY;

    
        if (change + image.offsetWidth > window.innerWidth || change < +0) {
            imgMotionX *= -100;
        }

        
        if (changeY + image.offsetHeight > window.innerHeight || changeY < +0) {
            imgMotionY *= -1;
        }

    
        image.style.left = change + "px";
        image.style.top = changeY + "px";
    },500);
}

var change = 60;
var imgMotionX = 100;
var imgMotionY = 410;

function motionStart() 
{
    var image = document.getElementById("img");
    movingpicID = setInterval(function() {
        
        change += imgMotionX;
        var changeY = change + imgMotionY;

    
        if (change + image.offsetWidth > window.innerWidth || change < +0) {
            imgMotionX *= -1;
        }

        
        if (changeY + image.offsetHeight > window.innerHeight || changeY < +0) {
            imgMotionY *= -1;
        }

    
        image.style.left = change + "px";
        image.style.top = changeY + "px";
    },500);
}

function motionStop()
{
        {
        clearInterval(movingpicID);
        }
    
    }