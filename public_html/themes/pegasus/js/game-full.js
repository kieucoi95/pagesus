(function ($) {
    $(document).ready(function () {
        var slide_reviews = new Swiper(".gallery_slide", {
            slidesPerView: 1.5,
            spaceBetween: 10,
            freeMode: true,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            breakpoints: {
                480: {
                    slidesPerView: 2,
                },
                // when window width is >= 640px
                768: {
                    slidesPerView: 2.5,
                },
                1380: {
                    slidesPerView: 3.5,
                },
            }
        });
    });
})(jQuery);