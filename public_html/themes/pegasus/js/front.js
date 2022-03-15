(function ($) {
    $(document).ready(function () {

        $(".rate").each(function( index ) {
            $(this).rateYo({
                rating: $(this).attr('data-rating'),
                readOnly: true,
                starWidth: "15px",
                ratedFill: "#ff7b31",
                starSvg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"/></svg>'
            });
        });

        var slide_reviews = new Swiper(".slide_reviews", {
            slidesPerView: 1.2,
            spaceBetween: 10,
            speed: 2000,
            loop: true,
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
                    spaceBetween: 15,
                },
                // when window width is >= 640px
                768: {
                    slidesPerView: 2.5,
                    spaceBetween: 30,
                },
                1380: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                },
            }
        });

        var top_games = new Swiper('#top_games', {
            
            speed: 800,
            spaceBetween: 0,
            slidesPerView: 1, // or 'auto'
            spaceBetween: 10,
            effect: "coverflow", // 'cube', 'fade', 'coverflow',
            
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev"
            },
            breakpoints: {
                480: {
                    slidesPerView: 1,
                    spaceBetween: 15,
                },
                // when window width is >= 640px
                768: {
                    slidesPerView: 1.2,
                    spaceBetween: 30,
                },
                1380: {
                    // spaceBetween: 10,
                    loop: true,
                    slidesPerView: 1.4, // or 'auto'
                    centeredSlides: true,
                    coverflowEffect: {
                        rotate: 0, // Slide rotate in degrees
                        stretch: 500, // Stretch space between slides (in px)
                        depth: 300, // Depth offset in px (slides translate in Z axis)
                        modifier: 1, // Effect multipler
                        slideShadows: true // Enables slides shadows
                    },
                    grabCursor: true,
                    parallax: true,
                },
            }
        }); 

        top_games.on('activeIndexChange', function () {
            setTimeout(() => {
                var bg_img = $('#games .swiper-slide-active img').attr('src');
                $('#games .bg_img').css('background-image', 'url(' + bg_img + ')');
            }, 50);
            
        });

        $(window).scroll(function() {
            if($(window).scrollTop() > 0) {
                $('.main_header').addClass('hd_fix');
            } else {
                $('.main_header').removeClass('hd_fix');
            }
        });

    });
})(jQuery);