jQuery(window).scroll(function() {    
    var scroll = jQuery(window).scrollTop();

    if (scroll >= 100) {
        $(".navigation-bar").addClass("sticky");
    } else {
        $(".navigation-bar").removeClass("sticky");
    }
});


jQuery('#Humburger').click( function() {
    jQuery(".sidebar").addClass("active");
} );
jQuery('#closeSidebar').click( function() {
    jQuery(".sidebar").removeClass("active");
} );