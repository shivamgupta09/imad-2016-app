console.log('Loaded!');

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
}