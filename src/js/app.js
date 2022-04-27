import * as flsFunctions from './modules/functions.js';
flsFunctions.isWebp();

(function() {
	const menuLinks = document.querySelectorAll('.menu__link');
	const menuIcon = document.querySelector('.menu__icon');
	const menuBody = document.querySelector('.menu__body');
	const lockBody = document.getElementsByTagName('body');

	menuLinks.forEach(el => {
		el.addEventListener('click', function(event) {
			menuIcon.classList.remove('_active')
			menuBody.classList.remove('_active')
			lockBody[0].classList.remove('_lock')
		})
	});

	menuIcon.addEventListener('click', function(event) {
		menuIcon.classList.toggle('_active')
		menuBody.classList.toggle('_active')
		lockBody[0].classList.toggle('_lock')
	});

})();

//simple form validate

(function() {
	const elements = {};
	const keys = ['form', 'formName', 'formPhone', 'formEmail', 'formBtn'];
	
	keys.forEach(key => Object.assign(elements, {
		[key]: document.getElementById(key)
	}));
	
	elements.formBtn.addEventListener('click', (event) => {
		event.preventDefault();

		if(elements.formName.value === '' || elements.formName.value.length < 2) {
			elements.formName.nextElementSibling.style.display = 'block';
		} else {
			elements.formName.nextElementSibling.style.display = 'none';
			if(!elements.formPhone.value.match(/^\d[\d\(\)\ -]{4,14}\d$/) 
			|| elements.formPhone.value === '') {
				elements.formPhone.nextElementSibling.style.display = 'block';
			} else {
				elements.formPhone.nextElementSibling.style.display = 'none';
				alert(
					`Your name: ${elements.formName.value}\nYour phone: ${elements.formPhone.value}`
					);
				elements.formName.value = '';
				elements.formPhone.value = '';
			}
		}
	})
})();