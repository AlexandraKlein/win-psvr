$(function() {
    /* Countdown */
    $("#counter").countdown('2016/08/24 10:00:00', function(event)  {
        $(this).html(event.strftime(''
            + '<span>%D</span> '
            + '<span>%H</span> '
            + '<span>%M</span> '
            + '<span>%S</span>'));
    });

    /* Cheerio Parallax */
    $(window).on('scroll', function () {
        window.requestAnimationFrame(function () {
            var scrolled = $(window).scrollTop();
            $('.cheerio').css({
                'transform': 'translate3d(0,' + scrolled * -0.64 + 'px, 0)'
            });
            $('.cheerio:nth-of-type(2)').css({
                'transform': 'translate3d(0,' + scrolled * -0.42 + 'px, 0)'
            });
            $('.cheerio:nth-of-type(3)').css({
                'transform': 'translate3d(0,' + scrolled * -0.23 + 'px, 0)'
            });
            $('.cheerio:nth-of-type(4)').css({
                'transform': 'translate3d(0,' + scrolled * -0.84 + 'px, 0)'
            });
        });

    });
});