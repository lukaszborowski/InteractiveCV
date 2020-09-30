document.addEventListener("DOMContentLoaded", function() {

    $(function () {

        $('.cv__information__button').on('click', function () {


            const e = $(".cv__information__popUp");
            const c = $(".cv__information__button");
            if (e.hasClass('show') | c.hasClass("text__slide")) {
                e.removeClass('show');
                c.removeClass('text__slide')

            } else {
                $(this.firstElementChild).addClass('show');
                $(this).addClass('text__slide');
            }
        })

    });
});

