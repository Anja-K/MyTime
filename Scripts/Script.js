//Hamburger menu navigation
var hamBtn = document.getElementById("hamburger-icon").onclick = function() {toggleHide()};
var xBtn = document.getElementsByClassName("close-nav")[0].onclick = function() {toggleHide()};
function toggleHide() {
    document.getElementById("hidden-nav").classList.toggle("show");
    document.getElementById("hidden-nav").classList.toggle("hide");
}

// Show slider and fixed menu on scroll

let actiSlider = document.querySelector('.welcome-section').offsetTop;
const nav = document.querySelector('.nav-container');
const sliderFirst = document.querySelector('.slideshow-container');

//Fixed menu on scroll
function checkPosition() {
    let windowY = window.scrollY;
    
    if (windowY > 50 ) {
        // Scrolling UP
     nav.classList.add('fixed-nav');
    } else {
        nav.classList.remove('fixed-nav');
    }
    scrollPos = windowY;
}
// Show slider on scroll
function showSlider(){
    let windowScroll = window.scrollY;
    if (windowScroll > (actiSlider - 200) ) {
        // Scrolling DOWN
        sliderFirst.classList.add('is-visible');
        sliderFirst.classList.remove('is-hidden');
    } else {
        sliderFirst.classList.add('is-hidden');
        sliderFirst.classList.remove('is-visible');
    }
}


window.onscroll = function() {
    checkPosition();
    showSlider();
}



// Slider
    var slideIndex = 1;
    showSlides(slideIndex);

    // Next/previous controls
    function plusSlides(n) {
    showSlides(slideIndex += n);
    }

    // Thumbnail image controls
    function currentSlide(n) {
    showSlides(slideIndex = n);
    }

    function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    }

    //Carousel slider
    $(document).ready(function(){
        $('.center').slick({
            dots: true,
            centerMode: true,
            centerPadding: '60px',
            slidesToShow: 2,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1
                    }
                }
            ]
        });

        // Lightbox slider
        $(document).on('click', '[data-toggle="lightbox"]', function(event) {
            event.preventDefault();
            $(this).ekkoLightbox();
        });
    });