const menuBtn = document.querySelector(".menu-btn");
const navigation = document.querySelector(".nav");

    menuBtn.addEventListener("click", () => {
      menuBtn.classList.toggle("active");
      navigation.classList.toggle("active");
    });


const stars = document.querySelectorAll('.star');
const output = document.querySelector('.output');
const btn = document.querySelector(".submit");
const thanksmsg = document.querySelector(".thanks-msg");
const feedbackmsg = document.querySelector(".container3");
const errormsg = document.querySelector(".container4");
const reviewBtn = document.querySelector(".Add.Review");
const name=document.getElementById("message");



for (x=0; x<stars.length; x++){
stars[x].starValue=(x+1);
	 ["click", "mouseover", "mouseout"].forEach(function(event){
 	stars[x].addEventListener(event, showRating)
 })
}

function showRating(event){
let type = event.type;
let starValue = this.starValue;
if(type==='click'){
		if (starValue>=1){
			output.innerHTML = "You rated " + starValue + " stars." ;
		}else{
			elem.classList.remove("orange");
		}
	}

stars.forEach(function(elem,index){
	if(type==='click'){
		if (index< starValue){
			elem.classList.add("orange");
		}
		else{
			elem.classList.remove("orange");
		}
	}

	if(type==='mouseover'){
		if (index< starValue){
			elem.classList.add("yellow");
		}else{
			elem.classList.remove("yellow");
		}
	}

	if(type==='mouseout'){
		if (index< starValue){
			elem.classList.remove("yellow");
		}
	}
})

}

btn.onclick = () => {

	if(trimfield(name.value)==""){
	name.focus();
	document.getElementById("reqfeedback").innerHTML="*Please write a review before submitting.";
	return false;
}else{
	errormsg.style.display="none";
	feedbackmsg.style.display = "none";
    thanksmsg.style.display = "table";
    return true;
}
};


function trimfield(str) 
{ 
return str.replace(/^\s+|\s+$/g,''); 
}
reviewBtn.onclick = () => {
	name.value="";
	reviewBtn.style.display="none";
	feedbackmsg.style.display = "block";
	errormsg.style.display="inline";

	name.focus();
    return true;

};
