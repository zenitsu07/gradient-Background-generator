// Event listener used : 1- input 2- oninput
var h2= document.querySelector("h2");
var color1= document.querySelector(".color-1");
var color2 = document.querySelector(".color-2");
var body= document.querySelector("body");
var css = document.querySelector("h2");
console.log(h2);
console.log(color1);
console.log(color2);
function user_bg_gradient(argument) {
	body.style.background = "linear-gradient( to right, " +  
		color1.value 
		+ ","
		+ color2.value
		+ ")";

		css.textContent = body.style.background + ";";

}
//todo since gradient has syntax 
 //color= "linear-gradient(direction, 1stcolor , 2ndcolor)"


color1.addEventListener("input",user_bg_gradient);// Used oninput listener in html for color-1
color2.addEventListener("input",user_bg_gradient);
