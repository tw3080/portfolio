$(document).on('scroll', function(event) {
    if ($(document).scrollTop() > 0) {
        $('.nav').addClass('js-nav-shadow');
    } else {
        $('.nav').removeClass('js-nav-shadow');
    }

    // var scrollPos = $(document).scrollTop() + 81;
    var scrollPos = $(document).scrollTop() + 128;
    $('.nav-menu a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        var bottom = ((scrollPos - 128 + $(window).height()) == $(document).height());

        //  The purpose of this outer if/else statement is to fix an issue with the 'Contact' nav link never becoming active because the window is generally too tall
        // If the user hasn't scrolled to the bottom, switch between making the 'About' and 'Portfolio' links active depending on scroll position
        if (!bottom) {
            if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
                $('.nav-menu a').removeClass('active');
                currLink.addClass('active');
            }
            else {
                currLink.removeClass('active');
            }
        // Else, if the user has scrolled to the bottom, make only the 'Contact' link active
        } else {
            currLink.removeClass('active');
            $('#contact-link').addClass('active');
        }
    });
});

// On mobile, always add the box shadow to the nav if the dropdown menu is visible
$('.menu-btn').on('click', function(event) {
    $('.nav').addClass('js-nav-shadow');
});

// Scroll animation with offset to preserve spacing above headers
$('body').on('click', '.nav a', function(event) {
    var top = $($(this).attr('href')).offset().top;
    $('html, body').stop().animate({
        scrollTop: top - 128
    }, 500, 'easeInOutQuad');
    // On mobile, close the dropdown menu when an anchor is clicked
    $('.menu-btn').prop('checked', false);
    event.preventDefault();
});
