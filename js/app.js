var swiper = new Swiper('.swiper', {
	slidesPerView: 5,
	spaceBetween: 24,
	freeMode: true,
	loop: true,
	lazy: true,
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
		dynamicBullets: true,
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	breakpoints: {
		320: {
			slidesPerView: 1,
			spaceBetween: 24,
		},
		425: {
			slidesPerView: 2,
			spaceBetween: 24,
		},
		768: {
			slidesPerView: 3,
			spaceBetween: 24,
		},
		1024: {
			slidesPerView: 4,
			spaceBetween: 24,
		},
	},
});


/*  Menu */

const buttonMenu = document.querySelector('.button-menu');
const menu 	 		 = document.querySelector('.menu');
const menuLinks  = document.querySelectorAll('.nav-menu-link');
const buttonCta  = document.querySelector('.button-cta');

buttonMenu.addEventListener('click', () => {
	menu.classList.toggle('active')
})

menuLinks.forEach((e) => {
	e.addEventListener('click', () => {
		menu.classList.remove('active');
	});
});

buttonCta.addEventListener('click', () => {
	menu.classList.remove('active');
});