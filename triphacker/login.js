var card = document.getElementById("card");

function openRegister(){
	card.style.transform ="rotateY(-180deg)";
}

function openLogin(){
	card.style.transform ="rotateY(0deg)";
}

const form = document.getElementById('form');
const form2 = document.getElementById('form2');
const loginMail = document.getElementById('loginEmail');
const loginPass = document.getElementById('loginPw');
const name = document.getElementById('name');
const mail = document.getElementById('email');
const pass = document.getElementById('pw');
var valid= false;

form.addEventListener('submit', (event) => {
	event.preventDefault();
	validateLogin();
})

form2.addEventListener('submit', (event) => {
	event.preventDefault();
	validate();
})



const isEmail =(emailVal => {
	var atSymbol = emailVal.indexOf("@");
	if (atSymbol <1) return false;
	var dot = emailVal.lastIndexOf('.');
	if (dot <= atSymbol +2) return false;
	if (dot === emailVal.length-1) return false;
	return true;
})

const validateLogin=() => {

	const mailVal = loginEmail.value.trim();
	const passVal = loginPw.value.trim();

    const formControl =loginEmail.parentElement;
	formControl.className="form-control success";
	const formControl2 =loginPw.parentElement;
	formControl2.className="form-control success";
	if (mailVal === ""){
		setErrorMsg(loginEmail, '*email cannot be blank');
	} else if (!isEmail(mailVal)) {
		setErrorMsg(loginEmail, '*email not valid');
	} else if(passVal === "") {
		setErrorMsg(loginPw, '*password cannot be blank');
	} else if ( passVal.length<=5){
		setErrorMsg(loginPw, '*wrong email password combination')
	} else {
		setSuccessMsg(loginPw);
	}

}

const validate=() =>{
	const nameVal = name.value.trim();
	const emailVal = email.value.trim();
	const pwVal = pw.value.trim();
	const formControl =email.parentElement;
	formControl.className="form-control success";
	const formControl2 =pw.parentElement;
	formControl2.className="form-control success";
	const formControl3 =name.parentElement;
	formControl3.className="form-control success";

	if (nameVal === ""){
		setErrorMsg(name, '*name cannot be blank');
    } else if (emailVal === ""){
		setErrorMsg(email, '*email cannot be blank');
	} else if (!isEmail(emailVal)) {
		setErrorMsg(email, '*email not valid');
	} else if (pwVal === "") {
		setErrorMsg(pw, '*password cannot be blank');
	} else if ( pwVal.length<=5){
		setErrorMsg(pw, '*password should contain minimum 6 characters')
	} else {
		setSuccessMsg(pw);
	}
	

	if (valid){
		window.location.href="home.html";
	}
}

function setErrorMsg(input, errormsgs) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = "form-control error"
	small.innerText = errormsgs;
	valid=false;
}

function setSuccessMsg(input) {
	const formControl =input.parentElement;
	formControl.className="form-control success";
		window.location.href="home.html";

}

function myFunction() {
		var x = document.getElementById("loginPw");
		if (x.type === "password") {
		  x.type = "text";
		} else {
		  x.type = "password";
		}
	  }