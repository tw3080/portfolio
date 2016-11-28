//  The purpose of this outer if/else statement is to fix an issue with the 'Contact' link never becoming active because the window is generally too tall
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
