console.log('Loaded!');

var element=document.getElementById("image");
var marginLeft =0;
function moveRight()
{
    var marginLeft = marginLeft +10;
    image.style.marginLeft = marginLeft +"px";
}
element.onclick = function()
{
    var interval = setInterval(moveRight,100);
    //element.style.marginLeft = "100px";
}