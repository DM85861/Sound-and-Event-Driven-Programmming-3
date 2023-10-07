function cast()
{

    document.getElementById("castButton").disabled = true; 
    document.getElementById("retrackButton").disabled = false;

}

function retrack()
{

    document.getElementById("castButton").disabled = false;
    document.getElementById("retrackButton").disabled = true;

}

function FireOut()
{
    mysound = new sound("csc102 9 25 23 fireplace-fire-crackling-loop.mp3");
    mysound.play();
}

function sound(src)
{
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.play = function() {
        this.sound.play();
    }
}

function FireIn()
{
    window.location.reload();
} 
