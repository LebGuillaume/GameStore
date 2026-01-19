document.addEventListener("DOMContentLoaded", function () {
	const swiper = new Swiper(".games-line-container", {
		loop: true,
		autoplay: {
			delay: 1, // délai entre les transitions en ms
			disableOnInteraction: false, // ne pas désactiver l'autoplay après une interaction
		},
		slidesPerView: 7,
		speed: 3500,
		grabCursor: true,

		// ...tes autres options
	});
});
