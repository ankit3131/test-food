$(document).ready(function() {
    // Hamburger menu toggle
  
    $('.hamburger-menu').click(function() {
        $('.navigation, .right, .fade-left1').toggleClass('active');
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

function openMenu() {
    document.querySelector(".open_icon").style.display = "none";
    document.querySelector(".close_icon").style.display = "block";

}
function closeMenu() {
    document.querySelector(".close_icon").style.display = "none";
    document.querySelector(".open_icon").style.display  = "block";
}


///scrolling use work
function animateOnScroll() {
    const animatedElements  = document.querySelectorAll('.fade-left, .fade-right, .zoom-in,.zoom-out ,.fade-in-up, .fade-in-down ,.fade-rotate');
    console.log(animatedElements);
animatedElements.forEach(Element => {
  const rect = Element.getBoundingClientRect();
  const windowHeight = window.innerHeight || document.documentEelement.clienHeight;

  // Check if the element is in the viewport
  if(rect.top <= windowHeight && rect.bottom >= 0){
    Element.classList.add('active');
  }
  else{
    Element.classList.remove('active');
  }
})
    
  }

  // Add scroll event listener
  window.addEventListener('scroll' , animateOnScroll);


// Initial check in case elements are in view on load
  animateOnScroll();