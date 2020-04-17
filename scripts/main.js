/*var n = localStorage.getItem('on_load_counter');
 
if (n === null) {
    n = 0;
}
 
n++;
 
localStorage.setItem("on_load_counter", n);
 
document.getElementById('value').innerHTML = n;
   */
var x = localStorage.getItem('on_load_counter');
if (x === null) {
    x = 0;
}


var element = document.getElementById("value");
element.innerHTML = x;

function button1() {
    element.innerHTML = ++x;
    localStorage.setItem("on_load_counter", x);
}
