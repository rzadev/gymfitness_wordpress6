jQuery(document).ready(function($){
    console.log("Document ready");
    // Make the menu responsive
    $('#menu-main-menu').slicknav({
        // appendTo : '.site-header'
    });

    // Run the bxSlider library on testimonials
    $('.testimonials-list').bxSlider({
        controls: false, 
        mode: 'fade'
    });

});
