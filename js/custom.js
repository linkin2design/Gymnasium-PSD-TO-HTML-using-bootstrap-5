$(document).ready(function () {
    'use strick '
    $('.banner-slider').slick({
        arrows: false,
        dots: true,
        autoplay: true,
    })

    new VenoBox({
        selector: ".video-pop-up"
    });

    new VenoBox({
        selector: ".gallery-pop"
    });

    $('.feedback-slider').slick({
        arrows: false,
        dots: true,
        autoplay: false,
        slidesToShow: 2,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
            }
        },],
    })
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });


    $('.brand-slider').slick({
        arrows: true,
        dots: false,
        autoplay: true,
        slidesToShow: 5,
        centerMode: true,
        centerPadding: "0px",
        prevArrow: '<i class="fa fa-chevron-left left-arrow"></i>',
        nextArrow: '<i class="fa fa-chevron-right right-arrow"></i>',
        responsive: [{
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
                arrows: false,
            }
        },

        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
                arrows: false,
            }
        },



        ],

    })


});

// preloder

$(document).ready(function () {
    $('#preloader').delay(2000).fadeOut();
});

// back to top button


$(window).scroll(function () {
    var scrolling = $(this).scrollTop();
    // back to top
    if (scrolling > 500) {
        $('.back-to-top').fadeIn();
    } else {
        $('.back-to-top').fadeOut();
    }
    // nav fix

    if (scrolling > 1000) {
        $('nav').addClass('nav-fix');
    } else {
        $('nav').removeClass('nav-fix')
    }
});

$('.back-to-top').click(function () {
    $('html,body').animate({
        scrollTop: '0px',
    }, 2000);
})

// wow js 
new WOW().init();

// Regi from 
const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
    container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
    container.classList.remove("right-panel-active");
});



// modal 

var neonButton = document.getElementById('neonButton')
var model = document.getElementById('modal')
var close = document.getElementById('close')

neonButton.addEventListener('click', function () {
    modal.style.display = "flex";
});

close.addEventListener('click', function () {
    modal.style.display = "none";
});

