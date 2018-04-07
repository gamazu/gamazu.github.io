var slideControl1 = document.querySelector(".slide1");
var slideControl2 = document.querySelector(".slide2");
var slideControl3 = document.querySelector(".slide3"); 
var background = document.querySelector(".main-header");


slideControl1.addEventListener("click", function(){
	background.classList.add("slide1-bg");
	background.classList.remove("slide2-bg");
	background.classList.remove("slide3-bg");
	slideControl1.classList.add("slider-active");
	slideControl2.classList.remove("slider-active");
	slideControl3.classList.remove("slider-active");
})

slideControl2.addEventListener("click", function(){
	background.classList.add("slide2-bg");
	background.classList.remove("slide3-bg");
	slideControl2.classList.add("slider-active");
	slideControl1.classList.remove("slider-active");
	slideControl3.classList.remove("slider-active");
})

slideControl3.addEventListener("click", function(){
	background.classList.add("slide3-bg");
	slideControl3.classList.add("slider-active");
	slideControl2.classList.remove("slider-active");
	slideControl1.classList.remove("slider-active");
})