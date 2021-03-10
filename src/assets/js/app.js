'use strict';
const header = document.querySelector('.header');

window.addEventListener('scroll', function () {
	let scrollPos = window.scrollY;

	if (scrollPos > 0) {
		header.classList.add('transparent');
		header.style.top = '0';
	} else {
		header.classList.remove('transparent');
		header.style.top = '2rem';
	}
});

const swiper = new Swiper('.latest__slider', {
	slidesPerView: 3,
	spaceBetween: 60,
	loop: true,
	navigation: {
		nextEl: '.arrow__right',
		prevEl: '.arrow__left',
	},
});