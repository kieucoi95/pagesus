(function ($) {
    $(document).ready(function () {
        var role = $('.role').text();

        $('input[name="role"]').val(role);
    });
})(jQuery);