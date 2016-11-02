/*console.log('Loaded!');

var element=document.getElementById("image");
var marginLeft =0;
function moveRight()
{
     marginLeft = marginLeft +1;
    image.style.marginLeft = marginLeft +"px";
}
element.onclick = function()
{
    var interval = setInterval(moveRight,50);
    //element.style.marginLeft = "100px";
}*/
var counter= 0;

var button = document.getElementById("counter");



button.onclick = function () {

        counter = counter+1;
        var span = document.getElementById("count");
        span.innerHTML = counter.toString();

    
}