const hamburger = document.querySelector('.hamburger'),
	menu = document.querySelector('.menu'),
	closeElem = document.querySelector('.menu__close');
	overlay = document.querySelector('.menu__overlay');

hamburger.addEventListener('click', () => {
	menu.classList.add('active');
});


closeElem.addEventListener('click', () => {
	menu.classList.remove('active');
});

overlay.addEventListener('click', () => {
	menu.classList.remove('active');
});



const percents = document.querySelectorAll('.skills__percent'),
	progress_bar = document.querySelectorAll('.skills__progressbar');

percents.forEach((item, i) => {
	progress_bar[i].style.width = item.innerHTML;
});