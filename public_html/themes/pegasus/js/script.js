(function ($) {
    $(document).ready(function () {
        $('.open_menu_mobile').click(function (e) { 
            e.preventDefault();
            $('.main_menu').addClass('active');
            $('.bg_overlay').addClass('active');
        });
        
        $('.bg_overlay').click(function (e) { 
            e.preventDefault();
            $('.main_menu').removeClass('active');
            $('.bg_overlay').removeClass('active');
        });
    });
})(jQuery);