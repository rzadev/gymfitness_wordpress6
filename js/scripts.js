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

        // When the page is ready add the fixed menu if position is greater than 300px
        const headerScroll = document.querySelector('.navigation-bar');
        const rect = headerScroll.getBoundingClientRect();
        const topDistance = Math.abs(rect.top);
        // console.log(topDistance);
        fixedMenu(topDistance);

});


window.onscroll = () => {
    let scroll = window.scrollY;
    // console.log(scroll);
    fixedMenu(scroll);

}

// Adds a fixed menu on top
function fixedMenu(scroll) {
    const headerScroll = document.querySelector('.navigation-bar');
    // const documentBody = document.querySelector('body');

    // In the case that the scroll is greater than 300 add some classes
    if (scroll > 300) {
        headerScroll.classList.add('fixed-top');
    } else {
        headerScroll.classList.remove('fixed-top');
    }
}