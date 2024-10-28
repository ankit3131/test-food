$(document).ready(function() {
    // Hamburger menu toggle
    $('.hamburger-menu').click(function() {
        $('.navigation ul, .right').toggleClass('active');
    });

    // Active class toggle
    $('.navigation ul li a').click(function(event) {
        event.preventDefault();
        $('.navigation ul li a').removeClass('active'); // Remove active class from all links
        $(this).addClass('active'); // Add active class to clicked link
    });
});

    // Select all the social icons
    const icons = document.querySelectorAll('.footer-icon');

    // Add a click event listener to each icon
    icons.forEach(icon => {
        icon.addEventListener('click', function(event) {
            event.preventDefault(); 
            // Remove the 'active' class from all icons
            icons.forEach(i => i.classList.remove('active'));
            
            // Add the 'active' class to the clicked icon
            this.classList.add('active');
        });
    });

$(document).ready(function(){
    $('#slider2').owlCarousel({
        items: 3,
        loop: true,
        margin: 15,
        nav: false,
        dots: false,
        autoplay:true,
        responsive: {
            0: { items: 1 },
            576: { items: 2 },
            768: { items: 2 },
            992: { items: 3 }
        }
    });
});


// $(document).ready(function(){
//     function initOwlCarousel() {
//         debugger;
//         if ($(window).width() < 992) {
//             if (!$('#slider1').hasClass('owl-loaded')) {
//             $('#slider1').owlCarousel({
//                 items: 1,
//                 loop: true,
//                 margin: 10,
//                 nav: true,
//                 responsive: {
//                     0: { items: 1 },
//                     576: { items: 2 },
//                     768: { items: 3 }
//                 }
//             });
//         }
//      } else {
//         $('#slider1').trigger('destroy.owl.carousel'); // Destroy carousel on larger screens
//         $('#slider1').removeClass('owl-loaded'); // Reset so it can reinitialize if resized to mobile
//     }
// }

// // Initialize on load and resize
// initOwlCarousel();
// $(window).resize(initOwlCarousel);
// });
