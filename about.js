console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('Form Submitted!');
}

function compliment() {
	alert('You look rather dashing!')
}

let image = document.querySelector("img")

image.addEventListener('mouseover', compliment)

let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);