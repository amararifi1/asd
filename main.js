var button1 = document.getElementById("1")
var button2 = document.getElementById("2")
var button3 = document.getElementById("3")
var button4 = document.getElementById("4")
///////////////////
var triangle = document.getElementById("triangle")
var circle = document.getElementById("circle")
var square = document.getElementById("square")
var trapezoid = document.getElementById("trapezoid")
///////////////////
var div1 = document.getElementById("div1")
var div2 = document.getElementById("div2")
var div3 = document.getElementById("div3")
var div4 = document.getElementById("div4")
///////////////////
button1.onclick = function(){
    div1.setAttribute( "class","triangle" )
}
button2.onclick = function(){
    div2.setAttribute( "class","circle" )
}
button3.onclick = function(){
    div3.setAttribute( "class","square" )
}
button4.onclick = function(){
    div4.setAttribute( "class","trapezoid" )
}
////////////////////////
div1.onclick = function(){
    div1.setAttribute( "class","hidden" )
}
div2.onclick = function(){
    div2.setAttribute( "class","hidden" )
}
div3.onclick = function(){
    div3.setAttribute( "class","hidden" )
}
div4.onclick = function(){
    div4.setAttribute( "class","hidden" )
}


