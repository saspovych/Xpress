new Swiper('.top_slider', {
	effect: "coverflow",
	grabCursor: true,
	centeredSlides:true,
	slidesPerView: "auto",
	coverflowEffect: {
		rotate: 0,
		stretch: 300,
		depth: 200,
		modifier: 1,
		slideShadows: false,
	},
     pagination: {
      el: ".swiper-pagination"
    },
	initialSlide: 1,
	slideToClickedSlide: true
})
new Swiper('.bottom_slider', {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        coverflowEffect: {
          rotate: 20,
          stretch: 300,
          depth: 200,
          modifier: 1,
          slideShadows: false,
        },
        pagination: {
	      el: ".swiper-pagination"
	    },
        initialSlide: 2,
        slideToClickedSlide:true
      })
