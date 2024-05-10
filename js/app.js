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
});
